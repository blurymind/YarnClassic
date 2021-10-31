import { EventEmitter } from 'events';
const { Story } = require('inkjs');

export var inkRender = function() {
  let emiter = new EventEmitter(); //todo add signals
  this.emiter = emiter;
  this.story = null;
  this.log = [];
  const a = new app.data.InkCompiler();

  this.curStory = {
    messages: [],
    choices: [],
    tags: [],
    paragraph: '',
  };

  this.resetStory = () => {
    this.choiceHistory = [];
    this.textAreaEl.innerHTML = '';
    this.curStory = {
      messages: [],
      choices: [],
      tags: [],
      paragraph: '',
    };
    this.story.ResetState();
  };
  this.terminate = () => {
    if (!this.textAreaEl) return;
    try {
      this.textAreaEl.innerHTML = '';
      emiter.removeAllListeners();
      this.finished = true;
      this.resetStory();
    } catch (e) {
      console.warn(e);
    }
  };

  this.setCurStory = ({ messages, choices, tags, paragraph }) => {
    this.curStory = { messages, choices, tags, paragraph };
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
      paragraph: choiceLabel
        ? `<p style="text-align: right;" class="story-playtest-answer" id="${choicePath}"
                onclick="app.openNodeByTitle('${choicePath}')">${choiceLabel} ( ${choicePath} )<p><br/>${paragraph.join(
            '<br/><br/>'
          )}`
        : paragraph.join('<br/><br/>'),
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

  // html update stuff
  const updateText = () => {
    const message = this.curStory.paragraph;
    if (message) {
      const paragraph = document.createElement('p'); //$(`<p class="hide">${message}</p>`);
      paragraph.innerHTML = message;
      paragraph.className =
        'story-playtest-bubble story-playtest-answer answer-post fade-in is-paused';
      this.textAreaEl.appendChild(paragraph);
      $(paragraph).removeClass('is-paused');
    }

    this.textAreaEl.querySelectorAll('div').forEach(n => n.remove());
    const btnWrapper = document.createElement('div');
    btnWrapper.id = 'choiceButtons';
    btnWrapper.className = 'flex-wrap';
    // Debug tools
    const restartBtn = document.createElement('button');
    restartBtn.innerText = '🔄';
    restartBtn.onclick = () => {
      this.resetStory();
      continueStory();
    };
    restartBtn.className = 'storyPreviewChoiceButton';
    btnWrapper.appendChild(restartBtn);
    const rewindBtn = document.createElement('button');
    rewindBtn.innerText = '⏪';
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

  a.init(response => {
    if (response.errors.length > 0 || response.warnings.length > 0) {
      this.textAreaEl.innerHTML = `<div class="title-error"><p>Parsing failed:</p>><br/><p>${response.errors.join(
        '</p><p>'
      )}</p><br/><p>${response.warnings.join('</p><p>')}</p></div>`;
      this.textAreaEl.onclick = () => {
        app.data.goToErrorInkNode(this.inkTextData, response.errors[0]);
        this.textAreaEl.onclick = null;
      };
    } else {
      this.story = new Story(response.story);
      console.log('STORY', this.story);
      console.warn('Warnings', response.warnings);
      this.textAreaEl.innerHTML = '';
      continueStory();
    }
  });

  this.initInk = (
    inkTextData,
    startChapter,
    htmlIdToAttachTo,
    resourcesPath,
    debugLabelId,
    playtestStyle,
    playtestVariables //TODO
  ) => {
    this.finished = false;
    document.getElementById(htmlIdToAttachTo).style.visibility = 'hidden';
    this.textAreaEl = document.getElementById(debugLabelId);
    this.textAreaEl.innerHTML =
      '<div class="opacity-pulse centered"><h2>Parsing ink</h2> <h2 class="story-animated-dots"><p>.</p><p>.</p><p>.</p></h2></div>';

    this.inkTextData = inkTextData;
    a.submit(inkTextData);
  };
};
