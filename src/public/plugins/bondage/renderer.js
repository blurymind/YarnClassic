const bondage = require('bondage');
const bbcode = require('bbcode');
const yarnRunner = new bondage.Runner();
const EventEmitter = require('events').EventEmitter;

export var yarnRender = function() {
  let visitedNodes = [];
  this.visitedNodes = visitedNodes; // collects titles of ALL visited nodes
  let node = { title: '' };
  this.node = node; // gets raw data from yarn text nodes
  let emiter = new EventEmitter();
  this.emiter = emiter;
  let commandsPassedLog = [];
  this.commandsPassedLog = commandsPassedLog;
  let commandPassed = '';
  this.commandPassed = commandPassed;
  let finished = true;
  this.finished = finished;
  this.scrollTextStyle = false;

  this.visitedChapters = []; // to keep track of all visited start chapters
  this.self = this;
  this.vnChoiceSelectionCursor = '>';
  this.startTimeWait;
  this.vnSelectedChoice = -1;
  this.vnTextScrollInterval;
  this.storyChapter = ''; // current chapter choices
  this.choices = {}; // all choices from all start chapters

  let vnChoices,
    vnText,
    vnTextResult,
    vnResult,
    VNdata,
    vnTextScroll,
    htmIDtoAttachYarnTo,
    debugLabelIdToAttachTo,
    vnTextScrollIdx = null;

  this.vnSelectChoice = () => {
    let endTimeWait = new Date().getTime();
    if (endTimeWait - this.startTimeWait < 1000) {
      return;
    } // we need to wait for user to see the questions
    this.choices[this.storyChapter].push(
      vnResult.options[this.vnSelectedChoice]
    );
    vnResult.select(this.vnSelectedChoice);
    this.emiter.emit('choiceMade', vnResult.options[this.vnSelectedChoice]);
    vnText = '';
    vnChoices = undefined;
    vnResult = self.goToNext();
    this.vnSelectedChoice = -1;
    this.changeTextScrollSpeed(111);
  };

  this.vnUpdateChoice = (direction = 0) => {
    // direction: -1 or 1
    if (this.vnSelectedChoice < 0) {
      return;
    }
    let attemptChoice = this.vnSelectedChoice + direction;
    if (attemptChoice > vnResult.options.length - 1) {
      attemptChoice = 0;
    } else if (attemptChoice < 0) {
      attemptChoice = vnResult.options.length - 1;
    }
    this.vnSelectedChoice = attemptChoice;
    vnChoices = document.createElement('DIV');
    vnResult.options.forEach((choice, i) => {
      const btn = document.createElement('DIV');
      if (i == this.vnSelectedChoice) {
        btn.innerHTML = `${this.vnChoiceSelectionCursor} [${choice}]`;
      } else {
        btn.innerHTML = `${this.vnChoiceSelectionCursor.replace(
          /.*/gm,
          '&nbsp;'
        )} [${choice}]`;
      }
      btn.onclick = e => {
        e.stopPropagation();
        this.vnSelectedChoice = i;
        this.vnUpdateChoice();
      };
      btn.ondblclick = e => {
        e.stopPropagation();
        this.vnSelectedChoice = i;
        this.vnSelectChoice();
      };
      btn.className = 'storyPreviewChoiceButton';
      vnChoices.appendChild(btn);
    });
    emiter.emit('choiceUpdated', this.vnSelectedChoice);
    self.updateVNHud();
  };

  // this function is triggered on key press/release
  this.changeTextScrollSpeed = (interval = 0) => {
    if (interval === this.vnTextScrollInterval) {
      return;
    }
    // use this to stop it from triggering on every frame
    this.vnTextScrollInterval = interval;
    clearInterval(vnTextScroll); // this resets the scroll time

    if (vnTextScrollIdx < 0) {
      // when below 0, its on standby for input to continue
      if (this.isFinishedParsing(vnResult)) {
        emiter.emit('finished');
        return;
      }
      if (vnResult.constructor.name === 'TextResult') {
        vnText = vnResult.text;
        vnTextScrollIdx = 0;
        emiter.emit('textResult', vnText);
        this.changeTextScrollSpeed(220);
        return;
      }
      if (vnResult.constructor.name === 'OptionsResult') {
        // Add choices to text
        if (this.vnSelectedChoice === -1) {
          this.vnSelectedChoice = 0;
          this.vnUpdateChoice();
          this.startTimeWait = new Date().getTime();
        }
      }
    }
    if (interval === 0) {
      return;
    }
    vnTextScroll = setInterval(this.scrollUpdateText, interval);
  };

  self.goToNext = () => {
    const nextNode = VNdata.next().value;
    if (!this.isFinishedParsing(nextNode)) {
      if (nextNode.constructor.name === 'TextResult') {
        /// bbcode local images with path relative to the resourcesPath specified on init
        // if (this.resourcesPath.length) {
        // 	const resourcesPath = this.resourcesPath;
        // 	nextNode.text = nextNode.text.replace(/\[img\][^\[]+\[\/img\]/gi, function (imgTag) {
        // 		const extractedImgPath = imgTag.match(/\[img\](.*)\[\/img\]/i)
        // 		if (extractedImgPath.length > 1 )
        // 		{
        // 			fullPathToFile = path.join(resourcesPath, extractedImgPath[1])
        // 			if (fs.existsSync(fullPathToFile)){
        // 				return '[img]' + fullPathToFile + '[/img]'
        // 			} else { // if not a local file, try to load it as a link
        // 				return '[img]' + extractedImgPath[1] + '[/img]'
        // 			}
        // 		}
        // 	})
        // }
        /// emit debug signal
        if (nextNode.data && this.node.title !== nextNode.data.title) {
          vnText = '';
          vnTextScrollIdx = -1;
          this.node = self.jsonCopy(nextNode.data);
          this.visitedNodes.push(nextNode.data.title);
          this.emiter.emit('startedNode', this.node);
        }
      }
      return nextNode;
    }
  };

  this.isFinishedParsing = nextNode => {
    if (nextNode === undefined || vnResult === null) {
      if (!finished) {
        finished = true;
        vnTextScrollIdx = -1;
      }
      finished = true;
      return finished;
    } else {
      return false;
    }
  };

  this.runCommand = () => {
    emiter.emit('commandCall', vnResult.text);
    commandsPassedLog.push(vnResult.text);

    vnResult = self.goToNext();
    if (this.isFinishedParsing(vnResult)) {
      return;
    }
    if (vnResult.constructor.name === 'TextResult') {
      vnText += '\n' + vnResult.text;
      emiter.emit('textResult', vnResult.text);
      // this.changeTextScrollSpeed(111);
    }
    if (vnResult.constructor.name === 'OptionsResult') {
      vnTextScrollIdx = -1;
    }
  };

  this.scrollUpdateText = () => {
    if (this.isFinishedParsing(vnResult)) {
      return;
    }
    if (vnTextScrollIdx < 0) {
      if (vnResult.constructor.name === 'CommandResult') {
        this.runCommand();
      }
    } else if (vnTextScrollIdx > vnText.length) {
      if (vnResult.constructor.name === 'TextResult') {
        vnResult = self.goToNext();
        if (this.isFinishedParsing(vnResult)) {
          return;
        }
        if (vnResult.constructor.name === 'CommandResult') {
          this.runCommand();
        } else if (vnResult.constructor.name === 'TextResult') {
          vnTextScrollIdx = -1;
        } else if (vnResult.constructor.name === 'OptionsResult') {
          vnTextScrollIdx = -1;
        }
      }
    } else if (vnResult.constructor.name === 'TextResult') {
      // update text
      vnTextScrollIdx += 1;
      vnTextResult = vnText.substring(0, vnTextScrollIdx);
      self.updateVNHud();
    }
  };

  // trigger this only on text update
  self.updateVNHud = () => {
    if (vnResult.constructor.name === 'TextResult') {
      while (
        vnTextResult.lastIndexOf('[img]') > vnTextResult.lastIndexOf('[/img]')
      ) {
        vnTextScrollIdx += 1;
        vnTextResult = vnText.substring(0, vnTextScrollIdx);
      }
      while (vnTextResult.lastIndexOf('[') > vnTextResult.lastIndexOf(']')) {
        vnTextScrollIdx += 1;
        vnTextResult = vnText.substring(0, vnTextScrollIdx);
      }
    }
    if (this.scrollTextStyle) {
      document.getElementById(htmIDtoAttachYarnTo).innerHTML =
        bbcode.parse(vnTextResult) + '<br>';
    }
    if (vnChoices !== undefined) {
      if (!this.scrollTextStyle) {
        document.getElementById(htmIDtoAttachYarnTo).innerHTML = '';
      }
      document.getElementById(htmIDtoAttachYarnTo).appendChild(vnChoices);
    }
  };

  this.terminate = () => {
    try {
      let element = document.getElementById(htmIDtoAttachYarnTo);
      element && (element.innerHTML = '');

      element = document.getElementById(debugLabelIdToAttachTo);
      element && (element.innerHTML = '');

      vnChoices = undefined;

      emiter.removeAllListeners();
      this.finished = true;
    } catch (e) {
      console.warn(e);
    }
  };

  this.initYarn = (
    yarnDataObject,
    startChapter,
    htmlIdToAttachTo,
    resourcesPath,
    debugLabelId,
    playtestStyle,
    playtestVariables
  ) => {
    const randomColour = [
      '#f5ff6f',
      '#44fe66',
      '#e00ec0',
      '#e93ecf',
      '#0ec0e0',
      '#3ecfe9',
      '#e4dbcb',
      '#978e7e',
      '#666',
      '#2f919a',
      'deeppink',
      'black',
      '#97E1E9',
      '#576574',
      '#6EA5E0',
      '#9EDE74',
      '#FFE374',
      '#F7A666',
      '#C47862',
    ];
    const randomAscii = [
      '__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡| ̲▫̲͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡, ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___',
      '°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸',
      '(===||:::::::::::::::>',
      '¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸><(((º>',
      '=^..^=',
      '|==|iiii|>-----',
      ' ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦',
      '(♥_♥)',
      '龴ↀ◡ↀ龴',
      '☁ ▅▒░☼‿☼░▒▅ ☁,',
      '▓⚗_⚗▓',
      '<:3 )~~~',
      '(╯°□°）╯︵ ┻━┻',
      '●▬▬▬▬๑۩۩๑▬▬▬▬▬●',
      '(/)(Ö,,,,Ö)(/)',
      '/)^3^(\\',
      '( . Y . )',
      '< )))) ><',
      '(ノಠ益ಠ)ノ彡',
      'd(^o^)b¸¸♬·¯·♩¸¸♪·¯·♫¸¸',
      "O=('-'Q)",
      '-`ღ´-',
      'ˁ(⦿ᴥ⦿)ˀ',
      '(╥﹏╥)',
      '✲´*。.❄¨¯`*✲。❄。*。¨¯`*✲',
      '▂▃▅▇█▓▒░۩۞۩        ۩۞۩░▒▓█▇▅▃▂',
      '( •_•)O*¯`·.¸.·´¯`°Q(•_• )',
      '┻━┻︵  (°□°)/ ︵ ┻━┻',
      '|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡ ̴̡ı̴̴̡ ̡l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ |',
      '❤◦.¸¸.  ◦✿',
      'ʕʘ̅͜ʘ̅ʔ',
      '( ๏ Y ๏ )',
      'ʕ•̫͡•ʕ*̫͡*ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ*̫͡*ʔ-̫͡-ʔ',
      '(っ◕‿◕)っ',
      '❚█══█❚',
      '─=≡Σ((( つ◕ل͜◕)つ',
      '^ↀᴥↀ^',
      '༼ つ ͡◕ Ѿ ͡◕ ༽つ',
      'ᕦ(ò_óˇ)ᕤ',
      '┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴',
      '[̲̅$̲̅(̲̅5)̲̅$̲̅]',
      '(ꈍ⌓ꈍ✿)',
      '(๑•́ ₃ •̀๑) ♡',
      '( • )( • )ԅ(≖⌣≖ԅ)',
      '（。々°）',
      '⊂(´･◡･⊂ )∘˚˳°',
      '( ㅅ )',
      '(ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧',
      '(－‸ლ)',
      '(‿|‿)',
      '(㇏(•̀ᵥᵥ•́)ノ)',
      'ʚ✟⃛ɞ',
      '(′ꈍωꈍ‵)',
      '♚ ♛ ♜ ♝ ♞ ♟ ♔ ♕ ♖ ♗ ♘ ♙',
      '(´ᴗ`)(´ᴗ`)',
      '♥(´∀｀)',
      'ฅ(˵●ﻌ●˵)ฅ',
    ];
    debugLabelIdToAttachTo = debugLabelId;
    htmIDtoAttachYarnTo = htmlIdToAttachTo;
    this.yarnDataObject = yarnDataObject;
    this.startChapter = startChapter;
    this.resourcesPath = resourcesPath;
    this.finished = false;
    this.scrollTextStyle = playtestStyle === 'npc';
    document.getElementById(debugLabelIdToAttachTo).innerHTML =
      "<br/><font color='red'>🚥Press/Hold Z or 📱Double-click/Tap to advance</font><br/>";
    emiter.on('startedNode', function(nodeData) {
      document.getElementById(debugLabelIdToAttachTo).innerHTML +=
        "<br/><br/><font color='#581845'>📜 --- Loaded next node ---</font>";
      document.getElementById(
        debugLabelIdToAttachTo
      ).innerHTML += `<font color='${
        randomColour[Math.floor(Math.random() * randomColour.length)]
      }'>  ${
        randomAscii[Math.floor(Math.random() * randomAscii.length)]
      }</font>`;
      document.getElementById(debugLabelIdToAttachTo).innerHTML +=
        "<br/><font color='CADETBLUE'>&ensp;&ensp;&ensp;Title: " +
        nodeData.title +
        '</font>';
      if (nodeData.tags.length > 0 && nodeData.tags[0].length > 0)
        document.getElementById(debugLabelIdToAttachTo).innerHTML +=
          "<br/><font color='deeppink'>&ensp;&ensp;&ensp;Tags: " +
          nodeData.tags +
          '</font>';
    });
    emiter.on('choiceMade', function(choice) {
      if (this.scrollTextStyle) {
        document.getElementById(debugLabelIdToAttachTo).innerHTML +=
          "<br/><font color='fuchsia'>🐙Player chose: >" + choice + '</font>';
      } else {
        document.getElementById(
          debugLabelIdToAttachTo
        ).innerHTML += `<p class="story-playtest-bubble story-playtest-answer answer-post">${bbcode.parse(
          choice
        )}</p>`;
      }
    });
    emiter.on('commandCall', function(call) {
      document.getElementById(
        debugLabelIdToAttachTo
      ).innerHTML += `<br/><font color='green'>🐣Command call:</font> <font color='red'>&lt;&lt;${call}&gt;&gt;</font>`;
    });
    if (!this.scrollTextStyle) {
      emiter.on('textResult', function(text) {
        document.getElementById(
          debugLabelIdToAttachTo
        ).innerHTML += `<p class="story-playtest-bubble">${bbcode.parse(
          text
        )}</p>`;
        document.getElementById(htmIDtoAttachYarnTo).innerHTML =
          '<span class="story-animated-dots"><p>.</p><p>.</p><p>.</p></span>';
        //story-playtest-bubble
        document.getElementById(htmIDtoAttachYarnTo).className =
          'story-playtest-bubble';
        document.getElementById(debugLabelIdToAttachTo).scrollTo({
          top: document.getElementById(debugLabelIdToAttachTo).scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      });
      emiter.on('choiceUpdated', function(choiceIndex) {
        document.getElementById(htmIDtoAttachYarnTo).className =
          'story-playtest-answer';
      });
    }
    emiter.on('finished', function() {
      finished = true;
      emiter.removeAllListeners();
    });

    if (Array.isArray(yarnDataObject)) {
      yarnRunner.load(yarnDataObject);
    } else if ('nodes' in yarnDataObject) {
      yarnRunner.load(yarnDataObject.nodes);
    } else return;

    // yarnRunner.setVariableStorage(platestVariables);
    this.loadYarnChapter(startChapter);
    yarnRunner.variables.data = {};

    playtestVariables.forEach(function(variable) {
      console.log(variable);
      yarnRunner.variables.set(variable.key, variable.value);
    });
  };

  this.loadYarnChapter = storyChapter => {
    finished = false;
    this.storyChapter = storyChapter;
    this.choices[this.storyChapter] = [];
    this.visitedChapters.push(storyChapter);
    VNdata = yarnRunner.run(storyChapter);
    vnResult = self.goToNext();
    vnText = vnResult.text;
    this.changeTextScrollSpeed(100);
  };

  // external function to check if a choice was made
  this.wasChoiceMade = (
    choiceName,
    chapterInWhichItWasMade = this.storyChapter
  ) => {
    if (this.choices[chapterInWhichItWasMade].includes(choiceName)) {
      return true;
    } else {
      return false;
    }
  };

  // external function to check how many times a node has been visited
  this.timesNodeWasVisited = nodeName => {
    let counted = 0;
    this.visitedNodes.forEach((visitedNode, i) => {
      if (visitedNode === nodeName) {
        counted += 1;
      }
    });
    return counted;
  };

  // we need this to make copies instead of references
  self.jsonCopy = src => {
    return JSON.parse(JSON.stringify(src));
  };
};
