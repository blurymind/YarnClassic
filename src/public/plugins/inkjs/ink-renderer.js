import { EventEmitter } from 'events';
const { Story } = require('inkjs');

export var inkRender = function() {
  let emiter = new EventEmitter(); //todo add signals
  this.emiter = emiter;
  this.story = null;
  this.log = [];
  this.onRecompile = () => {};

  this.curStory = {
    messages: [],
    choices: [],
    tags: [],
    paragraphEl: '',
  };
  this.resetStory = () => {
    this.prevSavePoints = [];
    this.choiceHistory = [];
    this.textAreaEl.innerHTML = '';
    this.curStory = {
      messages: [],
      choices: [],
      tags: [],
      paragraphEl: '',
    };
    this.story.ResetState();
  };
  this.terminate = () => {
    if (!this.textAreaEl) return;
    try {
      emiter.removeAllListeners();
      this.finished = true;
    } catch (e) {
      console.warn(e);
    }
  };

  this.setCurStory = ({ messages, choices, tags, paragraphEl }) => {
    this.curStory = { messages, choices, tags, paragraphEl };
  };
  const getMessage = _story => {
    let message = [];
    while (_story.canContinue) {
      message.push(_story.Continue().replace(/\n/g, ''));
    }
    return message;
  };

  const continueStory = (choiceLabel = '', choicePath = '') => {
    const paragraph = getMessage(this.story);
    const gotoFindQuery = choiceLabel.includes('"')
      ? choiceLabel
      : `[${choiceLabel}]`;

    const paragraphEl = document.createElement('p');
    if (choiceLabel) {
      const paragraphElementTitle = document.createElement('p');
      paragraphElementTitle.innerHTML = `<p style="text-align: right;" id="${choicePath}" class="playtestLink" title="Click to open [${choicePath}] Node">${choiceLabel} ( ${choicePath} )</p>`;
      paragraphElementTitle.onclick = () =>
        app.navigateToNodeDuringPlayTest(choicePath, gotoFindQuery);

      paragraphEl.appendChild(paragraphElementTitle);
      paragraph.forEach(p => {
        const message = document.createElement('p');
        message.innerHTML = `${p}<br/>`;
        paragraphEl.appendChild(message);
      });
    } else {
      paragraphEl.innerHTML = paragraph.join('<br/>');
    }

    this.setCurStory({
      ...this.curStory,
      messages: this.log
        ? [
            ...this.curStory.messages,
            choiceLabel ? `--${choiceLabel}--` : '',
            paragraph,
          ].filter(Boolean)
        : [paragraph],
      tags: this.story.currentTags,
      choices: this.story.currentChoices,
      paragraphEl,
    });

    updateText();
  };

  this.prevSavePoints = [];
  const getChoice = (index, label) => {
    this.prevSavePoints.push(this.story.state.toJson());
    const choicePath = this.story.state.currentChoices[index].sourcePath.split(
      '.'
    )[0];
    this.story.ChooseChoiceIndex(index);
    continueStory(label, choicePath);
  };
  this.rewindStory = () => {
    document.getElementById('choiceButtons').remove();
    this.textAreaEl.removeChild(this.textAreaEl.lastElementChild);
    this.story.state.LoadJson(this.prevSavePoints.pop());
    continueStory();
  };

  this.createAndAddParagraph = child => {
    console.log('made', child);
    if (child.innerHTML) {
      const paragraph = document.createElement('p');
      paragraph.appendChild(child);
      paragraph.className =
        'story-playtest-bubble story-playtest-answer answer-post fade-in is-paused';
      this.textAreaEl.appendChild(paragraph);
      $(paragraph).removeClass('is-paused');
    }
  };
  // html update stuff
  const updateText = () => {
    this.createAndAddParagraph(this.curStory.paragraphEl);
    this.textAreaEl.querySelectorAll('div').forEach(n => n.remove());
    const btnWrapper = document.createElement('div');
    btnWrapper.id = 'choiceButtons';
    btnWrapper.className = 'flex-wrap';
    // Debug tools
    const reloadBtn = document.createElement('button');
    reloadBtn.innerText = '🔄';
    reloadBtn.title = 'Recompile story';
    reloadBtn.onclick = this.onRecompile;
    reloadBtn.className = 'storyPreviewChoiceButton';
    btnWrapper.appendChild(reloadBtn);
    const restartBtn = document.createElement('button');
    restartBtn.innerText = '🎬'; //'🔄';
    restartBtn.title = 'Restart story';
    restartBtn.onclick = () => {
      this.resetStory();
      continueStory();
    };
    restartBtn.className = 'storyPreviewChoiceButton';
    btnWrapper.appendChild(restartBtn);
    const rewindBtn = document.createElement('button');
    rewindBtn.innerText = '⏪';
    rewindBtn.title = 'Go to previous';
    rewindBtn.disabled = this.prevSavePoints.length === 0;
    rewindBtn.onclick = () => {
      this.rewindStory();
      continueStory();
    };
    btnWrapper.appendChild(rewindBtn);
    rewindBtn.className = 'storyPreviewChoiceButton';
    // choices
    this.curStory.choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.innerText = choice.text;
      btn.onclick = e => {
        e.stopPropagation();
        getChoice(index, choice.text);
      };
      btn.className = 'storyPreviewChoiceButton';
      btnWrapper.appendChild(btn);
    });
    this.textAreaEl.appendChild(btnWrapper);

    this.textAreaEl.scrollTo({
      top: this.textAreaEl.scrollHeight + 100,
      left: 0,
      behavior: 'smooth',
    });
  };

  this.initInk = (
    compiler,
    onRecompile,
    prevSession,
    inkTextData,
    startChapter,
    htmlIdToAttachTo,
    resourcesPath,
    debugLabelId,
    playtestStyle,
    playtestVariables //TODO
  ) => {
    this.onRecompile = onRecompile;
    console.log('INIT INK');
    this.finished = false;
    document.getElementById(htmlIdToAttachTo).style.visibility = 'hidden';
    this.textAreaEl = document.getElementById(debugLabelId);
    this.textAreaEl.innerHTML =
      '<div class="opacity-pulse centered"><h2>Parsing ink</h2> <h2 class="story-animated-dots"><p>.</p><p>.</p><p>.</p></h2></div>';

    this.inkTextData = inkTextData;
    this.compiler = compiler;

    this.compiler
      .init(response => {
        this.textAreaEl.innerHTML = '';
        if (response.errors.length > 0) {
          this.textAreaEl.innerHTML = `<div class="title-error"><p>Parsing failed:</p>><br/><p>${response.errors.join(
            '</p><p>'
          )}</p><br/><p>${response.warnings.join('</p><p>')}</p></div>`;
          this.textAreaEl.onclick = () => {
            console.log('====>', response);
            app.data.goToErrorInkNode(this.inkTextData, response.errors[0]);
            this.textAreaEl.onclick = null;
          };
          return;
        }
        if (response.warnings.length > 0) {
          const warningsEl = document.createElement('p');
          warningsEl.className = 'title-warning';
          response.warnings.forEach(warning => {
            const warningEl = document.createElement('p');
            warningEl.innerText = warning;
            warningEl.onclick = () => {
              app.data.goToErrorInkNode(this.inkTextData, warning);
            };
            warningsEl.appendChild(warningEl);
          });
          this.createAndAddParagraph(warningsEl);
        }
        this.story = new Story(response.story);
        console.log('STORY', this.story);
        console.warn('Warnings', response.warnings);
        continueStory();

        //Try to restart story from specific chapter when there is no start chapter specified in the global scope
        if (
          this.story.currentText === '' &&
          this.story.currentChoices.length === 0
        ) {
          if (startChapter !== app.data.InkGlobalScopeNodeName) {
            this.compiler.submit(`-> ${startChapter}\n` + inkTextData);
          } else {
            const firstFoundNode = inkTextData
              .split('\n')
              .find(line => line.includes('==='));
            this.compiler.submit(
              `-> ${firstFoundNode.split('===')[1]}\n` + inkTextData
            );
          }
        }
      })
      .then(() => {
        if (
          !prevSession.recompile &&
          prevSession.story &&
          prevSession.prevSavePoints.length !== 0
        ) {
          this.story = prevSession.story;
          prevSession.childNodes.forEach(child =>
            this.textAreaEl.appendChild(child)
          );
          this.prevSavePoints = prevSession.prevSavePoints;
          continueStory();
          return;
        }
        if (inkTextData) this.compiler.submit(inkTextData);
      });
  };
};
