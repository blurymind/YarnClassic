export var Transcribe = function({
  app,
  createButton,
  createToggle,
  onYarnEditorOpen,
  onYarnSetLanguage,
}) {
  const self = this;
  this.name = 'Transcribe';

  this.transcribeEnabled = ko.observable(false);

  onYarnSetLanguage(e => {
    console.log(e);
    spoken.recognition.lang = e.language;
  });
  this.speakText = function() {
    const selectedText = app.editor.getSelectedText();
    const say = selectedText
      ? selectedText
      : app.editor.getSession().getValue();

    spoken.voices().then(countries => {
      const lookUp = app.settings.language().split('-')[0];
      const voices = countries.filter(v => !v.lang.indexOf(lookUp));

      console.log(lookUp, voices);
      if (voices.length) {
        console.log('Loaded voice', voices[0]);
        spoken.say(say, voices[0]);
      } else {
        spoken.say(say);
      }
    });
  };

  this.startCapture = function() {
    spoken
      .listen({ continuous: true })
      .then(transcript => {
        console.log(transcript);
        if (app.editing()) {
          app.insertTextAtCursor(transcript + '. ');
          document.getElementById('speakTextBtnBubble').title = 'Transcribe';
        } else {
          if (transcript === 'open') {
            console.log('try open...');
            var firstFoundTitle = app
              .getFirstFoundNode(app.$searchField.val().toLowerCase())
              .title();
            console.log('try open:', firstFoundTitle);
            app.openNodeByTitle(firstFoundTitle);
          } else if (transcript === 'clear') {
            app.$searchField.val('');
            app.updateSearch();
          } else {
            app.$searchField.val(transcript);
            app.updateSearch();
          }
        }

        spoken.listen.stop().then(() => {
          if (app.editing()) {
            document.getElementById('speakTextBtnBubble').style.visibility =
              'hidden';
          }

          this.continueCapture();
        });
      })
      .catch(e => spoken.listen.stop().then(() => this.continueCapture()));
  };

  this.continueCapture = function() {
    spoken.delay(500).then(() => {
      if (spoken.recognition.continuous) app.startCapture();
    });
  };

  this.toggleTranscribing = function() {
    const available = spoken.listen.available();
    const speakBubble = document.getElementById('speakTextBtnBubble');
    console.log('speakbbl', speakBubble);
    if (speakBubble === null) return;
    if (available && self.transcribeEnabled()) {
      spoken.listen.on.partial(ts => {
        if (app.editing()) {
          speakBubble.style.visibility = 'visible';
          speakBubble.title = `🗣️ ${ts} 🦜`;
        } else {
          app.$searchField.val(`🗣️ ${ts} 🦜`);
        }
      });
      app.startCapture();
    } else {
      speakBubble.style.visibility = 'hidden';
      spoken.recognition.continuous = false;
      spoken.listen.stop();
    }
  };

  // TODO move to transcribe plugin
  this.hearText = function() {
    const available = spoken.listen.available();
    if (!available) {
      Swal.fire({
        title: 'Speech recognition not avaiilable!',
        icon: 'error',
      });
      return;
    }

    // spoken.listen.on.partial(ts => ($("#speakTextBtn").title = ts));
    spoken.listen.on.partial(ts => {
      console.log(ts);
      document.getElementById('speakTextBtnBubble').title = `🗣️ ${ts} 🦜`;
    });

    spoken
      .listen()
      .then(transcript => {
        app.insertTextAtCursor(transcript + ' ');
        document.getElementById('speakTextBtnBubble').title = 'Transcribe';
      })
      .catch(error => console.warn(error.message));
  };

  // Add editor buttons
  onYarnEditorOpen(() => {
    createButton(self.name, {
      title: 'Hear text',
      attachTo: 'bbcodeToolbar',
      onClick: 'hearText()',
      icon: 'voice',
      className: 'bbcode-button bbcode-button-right hide-when-narrow',
    });

    createToggle(self.name, {
      iconName: 'microphone',
      attachTo: 'editorFooter',
      className: 'transcribe-button',
      title: 'Transcribe',
      tooltipId: 'speakTextBtnBubble',
      toggleValueKey: 'toggleTranscribing',
      onToggle: 'toggleTranscribing',
      enableKey: 'transcribeEnabled',
    });

    self.toggleTranscribing();
  });
};
