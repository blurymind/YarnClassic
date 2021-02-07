const bbcode = require('bbcode');

export const BbcodeRichTextFormatter = function(app) {
  const self = this;
  this.justInsertedAutoComplete = false;

  this.completableTags = Object.freeze([
    { Start: '<<', Completion: '>>', Offset: -2 },
    { Start: '[colo', Completion: 'r=#][/color]', Offset: -9, BehaviorCompletion: 'r=#][/color', Func: () => { app.insertColorCode(); } },
    { Start: '[b', Completion: '][/b]', BehaviorCompletion: '][/b', Offset: -4 },
    { Start: '[i', Completion: '][/i]', BehaviorCompletion: '][/i', Offset: -4 },
    { Start: '[img', Completion: '][/img]', BehaviorCompletion: '][/img', Offset: -6 },
    { Start: '[u', Completion: '][/u]', BehaviorCompletion: '][/u', Offset: -4 },
    { Start: '[url', Completion: '][/url]', BehaviorCompletion: '][/url', Offset: -6 },
  ]);

  this.getTagOpen = function(tag) {
    switch (tag) {
    case 'cmd': return '<<';
    case 'opt': return '[[';
    case 'color': return '[color=#]';
    default: return `[${tag}]`;
    };
  };

  this.getTagClose = function(tag) {
    switch (tag) {
    case 'cmd': return '>>';
    case 'opt': return '|]]';
    default: return `[/${tag}]`;
    };
  };

  this.identifyTag = function(text) {
    let tag = text.lastIndexOf('[') !== -1 ?
      text.substring(text.lastIndexOf('['), text.length) : '';

    if (text.substring(text.length - 2, text.length) === '[[')
      tag = '[[';
    else if (text.substring(text.length - 2, text.length) === '<<')
      tag = '<<';

    return tag;
  };

  this.insertTag = function(tag) {
    const tagOpen = self.getTagOpen(tag);
    const tagClose = self.getTagClose(tag);

    const selectedRange = JSON.parse(
      JSON.stringify(app.editor.selection.getRange())
    );

    app.editor.session.insert(selectedRange.start, tagOpen);
    app.editor.session.insert({
      column: selectedRange.end.column + tagOpen.length,
      row: selectedRange.end.row,
    }, tagClose);

    if (tag === 'color') {
      if (app.editor.getSelectedText().length === 0) {
        app.moveEditCursor(-9);
      }
      else {
        app.editor.selection.setRange({
          start: {
            row: app.editor.selection.getRange().start.row,
            column: app.editor.selection.getRange().start.column - 1,
          },
          end: {
            row: app.editor.selection.getRange().start.row,
            column: app.editor.selection.getRange().start.column - 1,
          },
        });
      }
      app.insertColorCode();
    } if (tag === 'img') {
      if (app.editor.getSelectedText().length === 0) {
        app.moveEditCursor(-6);
        app.data.triggerPasteClipboard();
        setTimeout(() => app.moveEditCursor(6), 300);
      }
    } else if (app.editor.getSelectedText().length === 0) {
      if (!app.isEditorInPreviewMode) app.moveEditCursor(-tagClose.length);
    } else {
      app.editor.selection.setRange({
        start: app.editor.selection.getRange().start,
        end: {
          row: app.editor.selection.getRange().end.row,
          column:
            app.editor.selection.getRange().end.column - tagClose.length,
        },
      });
    }
    app.editor.focus();
  };

  this._convertTag = function(inPattern, outPattern, text) {
    const globalRegex = new RegExp(inPattern, 'gi');
    const localRegex = new RegExp(inPattern, 'i');

    return text.replace(globalRegex, (m) => {
      const match = m.match(localRegex);
      const template = eval('`' + outPattern + '`');
      return match.length ? template : null;
    });
  };

  this.convert = function(text) {
    let result = text;

    result = self._convertTag('<b>(.*?)<\\/b>', '[b]${match[1]}[/b]', result);
    result = self._convertTag('<u>(.*?)<\\/u>', '[u]${match[1]}[/u]', result);
    result = self._convertTag('<i>(.*?)<\\/i>', '[i]${match[1]}[/i]', result);
    result = self._convertTag('<img>(.*?)<\\/img>', '[img]${match[1]}[/img]', result);
    result = self._convertTag('<color=#(.*?)>(.*?)<\\/color>', '[color=#${match[1]}]${match[2]}[/color]', result);
    result = self._convertTag('<url>(.*?)<\\/url>', '[url]${match[1]}[/url]', result);

    return result;
  };

  this.richTextToHtml = function(text, showRowNumbers = false) {
    let rowCounter = 1;
    let result = showRowNumbers
      ? '<div>' + '<font color="pink">' + rowCounter + '. </font><font>' + text + '</font></div>'// TODO: style this
      : text;

    /// Commands in preview mode
    result = result.replace(/<</gi, '<font color=\'violet\'>(run:'); // TODO: style this
    result = result.replace(/>>/gi, ')</font>');

    /// bbcode color tags in preview mode
    result = result.replace(/\[color=#[A-Za-z0-9]+\]/gi, function(colorCode) {
      const extractedCol = colorCode.match(/\[color=#([A-Za-z0-9]+)\]/i);
      if (extractedCol && extractedCol.length > 1) {
        return (
          '[color=#' +
          extractedCol[1] +
          ']<font color=#' +
          extractedCol[1] +
          '>&#9751</font>'
        );
      }
    });

    /// bbcode local images with path relative to the opened yarn file
    result = result.replace(/\[img\][^\[]+\[\/img\]/gi, function(imgTag) {
      const extractedImgPath = imgTag.match(/\[img\](.*)\[\/img\]/i);
      if (extractedImgPath.length > 1) {
        const fullPathToFile = app.data.editingFileFolder(extractedImgPath[1]);
        if (app.data.doesFileExist(fullPathToFile)) {
          return showRowNumbers
            ? '<img src="' + fullPathToFile + '"> </img>'
            : '<img src="' +
                fullPathToFile +
                '" width="128" height="auto"> </img>';
        } else {
          // if not a local file, try to load it as a link
          return showRowNumbers
            ? '<img src="' + extractedImgPath[1] + '"> </img>'
            : '<img src="' +
                extractedImgPath[1] +
                '" width="128" height="auto"> </img>';
        }
      }
    });

    /// do this last, as we need the newline characters in previous regex tests
    result = result.replace(/[\n\r]/g, function(row) {
      let rowAppend = '</font><br/>';
      rowCounter += 1;
      if (showRowNumbers) {
        rowAppend += '</div><div><font color="pink">' + rowCounter + '. </font><font>';
      }
      return rowAppend;
    });

    /// other bbcode tag parsing in preview mode
    result = bbcode.parse(result);

    /// create tweet previews :3
    if (showRowNumbers) {
      const tweets = [];
      result = result.replace(/(https?:\/\/twitter.com\/[^\s\<]+\/[^\s\<]+\/[^\s\<]+)/gi, function(id) {
        const extractedtweetId = id.match(/https:\/\/twitter.com\/.*\/status\/([0-9]+)/i);
        if (extractedtweetId.length > 1) {
          tweets.push(extractedtweetId[1]);
          return `<a class="tweet" id="${extractedtweetId[1]}"></a>`;
        }
      });
      setTimeout(() => {
        const tweetItems = document.querySelectorAll(".tweet");
        tweets.forEach((tweetPost, index)=>{
          twttr.widgets.createTweet(tweetPost, tweetItems[index], {
            align: "center",
            follow: false,
          });
        })
      }, 500)
    };

    /// finaly return the html result
    return result;
  };
};
