export const HtmlRichTextFormatter = function(app) {
  const self = this;
  this.justInsertedAutoComplete = false;

  this.completableTags = Object.freeze([
    { Start: '<<', Completion: '>>', Offset: -2 },
    { Start: '<colo', Completion: 'r=#></color>', Offset: -9, Func: () => { app.insertColorCode(); } },
    { Start: '<b', Completion: '></b>', Offset: -4 },
    { Start: '<img', Completion: '></img>', Offset: -6 },
    { Start: '<i', Completion: '></i>', Offset: -4 },
    { Start: '<u', Completion: '></u>', Offset: -4 },
    { Start: '<url', Completion: '></url>', Offset: -6 },
  ]);

  this.getTagOpen = function(tag) {
    switch (tag) {
    case 'cmd': return '<<';
    case 'opt': return '[[';
    case 'color': return '<color=#>';
    default: return `<${tag}>`;
    };
  };

  this.getTagClose = function(tag) {
    switch (tag) {
    case 'cmd': return '>>';
    case 'opt': return '|]]';
    default: return `</${tag}>`;
    };
  };

  this.identifyTag = function(text) {
    let tag = text.lastIndexOf('<') !== -1 ?
      text.substring(text.lastIndexOf('<'), text.length) : '';

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
      navigator.clipboard.readText()
        .then(text => {
          if (app.editor.getSelectedText().length === 0) {
            app.moveEditCursor(-7);
            app.insertTextAtCursor(` src="${text}"`);
          }
        });
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

    result = self._convertTag('\\[b\\](.*?)\\[\\/b\\]', '<b>${match[1]}</b>', result);
    result = self._convertTag('\\[u\\](.*?)\\[\\/u\\]', '<u>${match[1]}</u>', result);
    result = self._convertTag('\\[i\\](.*?)\\[\\/i\\]', '<i>${match[1]}</i>', result);
    result = self._convertTag('\\[img\\](.*?)\\[\\/img\\]', '<img>${match[1]}</img>', result);
    result = self._convertTag('\\[color=#(.*?)\\](.*?)\\[\\/color\\]', '<color=#${match[1]}>${match[2]}</color>', result);
    result = self._convertTag('\\[url\\](.*?)\\[\\/url\\]', '<url>${match[1]}</url>', result);

    return result;
  };

  this.richTextToHtml = function(text, showRowNumbers = false) {
    let rowCounter = 1;
    let result = showRowNumbers
    ? '<div>' + '<font color="pink">' + rowCounter + '. </font><font>' + text + '</font></div>'// TODO: style this
    : text;

    /// <<command>>
    result = result.replace(/<</gi, '<font color=\'violet\'>(run:'); // TODO: style this
    result = result.replace(/>>/gi, ')</font>');

    /// <color=#...></color>  and  &lt;color=#...&gt;&lt;/color&gt;
    [
      /&lt;color=#(.*?)&gt;(.*?)&lt;\/color&gt;/,
      /<color=#(.*?)>(.*?)<\/color>/
    ].forEach( pattern => {
      const globalRegex = new RegExp(pattern, 'gi');
      const localRegex = new RegExp(pattern, 'i');

      result = result.replace(globalRegex, function(colorCode) {
        const matches = colorCode.match(localRegex);
        if (matches && matches.length > 2) {
          return (`<font color=#${matches[1]}>&#9751${matches[2]}</font>`);
        }
      });
    });

    // local images with path relative to the opened yarn file
    result = result.replace(/&lt;img&gt;[^\[]+&lt;\/img&gt;/gi, function(imgTag) {
      const extractedImgPath = imgTag.match(/&lt;img&gt;(.*?)&lt;\/img&gt;/i);
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

    // <b></b>
    result = result.replace(/&lt;b&gt;.*&lt;\/b&gt;/gi, (m) => {
      const content = m.match(/&lt;b&gt;(.*)&lt;\/b&gt;/i);
      if (content.length){
        return `<b>${content[1]}</b>`;
      }
    });

    // <u></u>
    result = result.replace(/&lt;u&gt;.*&lt;\/u&gt;/gi, (m) => {
      const content = m.match(/&lt;u&gt;(.*)&lt;\/u&gt;/i);
      if (content.length){
        return `<u>${content[1]}</u>`;
      }
    });

    // <i></i>
    result = result.replace(/&lt;i&gt;.*&lt;\/i&gt;/gi, (m) => {
      const content = m.match(/&lt;i&gt;(.*)&lt;\/i&gt;/i);
      if (content.length){
        return `<i>${content[1]}</i>`;
      }
    });

    // newLines. Do this last, as we need the newline characters in previous regex tests
    result = result.replace(/[\n\r]/g, function(row) {
      let rowAppend = '</font><br/>';
      rowCounter += 1;
      if (showRowNumbers) {
        rowAppend += '</div><div><font color="pink">' + rowCounter + '. </font><font>';
      }
      return rowAppend;
    });

    
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
