const bbcode = require('bbcode');

// -- HTML ------------------------------------------------------------------
exports.HtmlRichTextFormatter = function(app) {
  this.greet = function() {
    return "hello HTML";
  }
};

// -- Bbcode ----------------------------------------------------------------
exports.BbcodeRichTextFormatter = function(app) {
  this.getTagOpen = function(tag) {
    switch (tag) {
      case 'cmd': return '<<';
      case 'opt': return '[[';
      case 'color': return '[color=#]';
      default: return `[${tag}]`
    };
  }

  this.getTagClose = function(tag) {
    switch (tag) {
      case 'cmd': return '>>';
      case 'opt': return '|]]';
      default: return `[/${tag}]`
    };
  }

  this.richTextToHtml = function(text, showRowNumbers = false) {
    let rowCounter = 1;
    let result = showRowNumbers
      ? '<font color="pink">' + rowCounter + '.   </font>' + text // TODO: style this
      : text;

    /// Links in preview mode
    result = result.replace(/\[\[[^\[]+\]\]/gi, function(goto) {
      const extractedGoto = goto.match(/\[\[(.*)\]\]/i);
      if (extractedGoto.length > 1) {
        return '<font color="tomato">(go:' + extractedGoto[1] + ')</font>'; // TODO: style this
      }
    });

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
      let rowAppend = '<br/>';
      rowCounter += 1;
      if (showRowNumbers) {
        rowAppend += '<font color="pink">' + rowCounter + '.   </font>';
      }
      return rowAppend;
    });

    /// other bbcode tag parsing in preview mode
    result = bbcode.parse(result);
    return result;
  };
};

// -- Factory ---------------------------------------------------------------
exports.RichTextFormatter = function(app) {
  // const type = app.settings.markUpLanguage; // TODO: put in settings
  const type = 'bbcode';
  return type === 'html' ?
  new exports.HtmlRichTextFormatter(app) :
  new exports.BbcodeRichTextFormatter(app);
}
