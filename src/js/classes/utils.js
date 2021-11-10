export var FILETYPE = {
  JSON: 'json',
  XML: 'xml',
  TWEE: 'twee',
  TWEE2: 'tw2',
  UNKNOWN: 'none',
  YARN: 'yarn',
  INK: 'ink',
  INKJSON: 'ink.json',
};

export var Utils = {
  createAutocompleter: function(
    allowedTokens,
    wordList,
    meta,
    prefixLength = 1
  ) {
    return {
      getCompletions: function(editor, session, pos, prefix, callback) {
        var token = editor.session.getTokenAt(pos.row, pos.column);
        if (
          prefix.length < prefixLength ||
          (allowedTokens && !allowedTokens.includes(token.type))
        ) {
          callback(null, []);
          return;
        }
        callback(
          null,
          wordList.map(function(word) {
            if (typeof word === 'object') {
              return {
                caption: word.word,
                value: word.word,
                meta: meta,
                title: word.title,
                about: word.about,
                titleStyle: word.titleStyle,
              };
            }
            return {
              caption: word,
              value: word,
              meta: meta,
            };
          })
        );
      },
      getDocTooltip: function(item) {
        if (!item.title && !item.about) return '';
        item.docHTML = [
          `<div class='${item.titleStyle || 'title-style-1'}' style='
            display: flex;
            flex-direction: column; 
            font-size: 0.8rem;
            padding: 3px;'>`,
          '<p>',
          item.title,
          '</p>',
          `<div class='node' style='
            position:relative;
            min-width: 100%;
            overflow: hidden;'>`,
          `<div class='body' style='
             font-size: 0.7rem;
             line-height: 1rem;
             top: 0;
             padding: 3px'>`,
          item.about,
          '</div>',
          '</div>',
          '</div>',
        ].join('');
      },
    };
  },

  addDoubleTapDetector: function(element, callback) {
    element.lastTap = 0;
    element.tapTimeout = 0;
    element.addEventListener('touchend', function(event) {
      var currentTime = new Date().getTime();
      var tapLength = currentTime - element.lastTap;
      clearTimeout(element.tapTimeout);
      if (tapLength < 500 && tapLength > 0) {
        // console.log("TAPPED twice")
        callback();
        event.preventDefault();
      } else {
        // elm2.innerHTML = 'Single Tap';
        element.tapTimeout = setTimeout(function() {
          // elm2.innerHTML = 'Single Tap (timeout)';
          clearTimeout(element.tapTimeout);
        }, 500);
      }
      element.lastTap = currentTime;
    });
  },

  uniqueSplit: function(str, separator = ' ') {
    return [...new Set(str.split(separator).filter(item => item))];
  },

  getHighestZ: function(container) {
    let highestZ = Number.NEGATIVE_INFINITY;
    $(container)
      .children()
      .each(function() {
        let z = parseInt($(this).css('z-index')) || 0;
        if (z > highestZ) {
          highestZ = z;
        }
      });
    return highestZ;
  },

  clamp: function(value, min, max) {
    return Math.max(Math.min(value, max), min);
  },

  rectanglesOverlap: function(r1, r2) {
    return !(
      r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top
    );
  },

  stripHtml: function(html) {
    while (html.indexOf('<') >= 0) html = html.replace('<', '&lt;');
    while (html.indexOf('>') >= 0) html = html.replace('>', '&gt');
    return html;
  },

  // Changes XML to Object
  // todo: Replace with jQuery parseHTML to find values?
  xmlToObject: function(xml) {
    // Create the return object
    var nodes = [];

    xml = xml.childNodes.item(0);
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var node = xml.childNodes.item(i);
        if (node.hasChildNodes()) {
          var obj = {};
          var found = false;
          for (var j = 0; j < node.childNodes.length; j++) {
            var subitem = node.childNodes.item(j);
            if (subitem.nodeName != '#text') {
              found = true;
              if (subitem.hasChildNodes())
                obj[subitem.nodeName] = subitem.childNodes.item(0).nodeValue;
              else obj[subitem.nodeName] = '';

              if (subitem.attributes.length > 0) {
                obj[subitem.nodeName] = {};
                for (var k = 0; k < subitem.attributes.length; k++) {
                  var attribute = subitem.attributes.item(k);
                  obj[subitem.nodeName][attribute.nodeName] =
                    attribute.nodeValue;
                }
              }
            }
          }
          if (found) nodes.push(obj);
        }
      }
    }

    return nodes;
  },
  now:
    Date.now ||
    function() {
      return new Date().getTime();
    },

  // If we're in the context of the VSCode extension webview, we have to use a function
  // that it puts on window to get the path to public assets since it requires that
  // they be loaded with fully-qualified, special scheme.
  //
  // The "path" parameter here should NOT have a leading slash.
  getPublicPath: function(path) {
    if (window.getPublicVsCodeWebviewUri) {
      return window.getPublicVsCodeWebviewUri(path);
    } else {
      return `public${path ? `/${path}` : ''}`;
    }
  },

  // Creates the context medu for ace-editor
  getEditorContextMenu: function(gotoRegex) {
    return {
      selector: '.node-editor .form .editor',
      trigger: 'right',
      build: function($trigger) {
        var options = {
          items: {},
          // callback: () => { self.editor.focus() }
        };

        // color picker is being called instead
        if (/^\[color=#([a-zA-Z0-9]{3,6})$/.test(app.getTagBeforeCursor())) {
          return;
        }

        // There is some text selected
        if (app.editor.getSelectedText().length > 1) {
          options.items = {
            cut: {
              name: 'Cut',
              icon: 'cut',
              callback: () => {
                if (app.clipboard.length > 0) {
                  app.data.triggerCopyClipboard();
                  app.insertTextAtCursor('');
                }
              },
            },
            copy: {
              name: 'Copy',
              icon: 'copy',
              callback: () => {
                app.data.triggerCopyClipboard();
              },
            },
            paste: {
              name: 'Paste',
              icon: 'paste',
              callback: () => app.data.triggerPasteClipboard(),
            },
            sep1: '---------',
          };
          // add menu option to go to selected node if an option is selected
          if (
            app.getTagBeforeCursor().match(gotoRegex) &&
            !(
              app.settings.documentType() === 'ink' &&
              app.editor.getSelectedText() === 'END'
            )
          ) {
            options.items['go to node'] = {
              name: 'Edit node: ' + app.editor.getSelectedText(),
              callback: () => {
                const title = app.getFutureEditedNodeTitle();
                // We add the node to visited nodes history before navigating to the next node
                if (!app.nodeVisitHistory.includes(title)) {
                  app.nodeVisitHistory.push(title);
                }
                app.openNodeByTitle(app.editor.getSelectedText());
              },
            };
          }
          // suggest word corrections if the selected word is misspelled
          if (app.settings.spellcheckEnabled()) {
            var suggestedCorrections = app.getSpellCheckSuggestionItems();
            if (suggestedCorrections !== false) {
              options.items.corrections = {
                name: 'Correct word',
                items: suggestedCorrections,
              };
            }
          }
          // suggest similar words - thesaurus.com sysnonyms and anthonyms
          var suggested = app.getThesaurusItems();
          if (suggested !== false) {
            options.items.corrections = {
              name: 'Related words',
              items: suggested,
            };
          }
        } else {
          options.items = {
            paste: {
              name: 'Paste',
              icon: 'paste',
              callback: () => app.data.triggerPasteClipboard(),
            },
          };
          if (app.settings.documentType() === 'ink') {
            options.items.inkHelp = {
              name: 'Ink snippets',
              items: {
                structure: {
                  name: 'Structure',
                  items: {
                    stitch: {
                      name: 'Stitch',
                      callback: () => {
                        app.insertTextAtCursor(`= stitchName
This is the content of the stitch that should be embedded within a knot.
-> END`);
                      },
                    },
                    end: {
                      name: 'Ending indicator',
                      callback: () => {
                        app.insertTextAtCursor('-> END');
                      },
                    },
                  },
                },
                choices: {
                  name: 'Choices',
                  items: {
                    basicChoice: {
                      name: 'Basic choice',
                      callback: () => {
                        app.insertTextAtCursor(
                          '* This is a choice that can only be chosen once'
                        );
                      },
                    },
                    stickyChoice: {
                      name: 'Sticky choice',
                      callback: () => {
                        app.insertTextAtCursor(
                          '+ This is a sticky choice - the player can choose it more than once'
                        );
                      },
                    },
                    choiceWithoutPrinting: {
                      name: 'Choice without printing',
                      callback: () => {
                        app.insertTextAtCursor(
                          "* [A choice where the content isn't printed after choosing]"
                        );
                      },
                    },
                    choiceWithoutMixedOutput: {
                      name: 'Choice without mixed output',
                      callback: () => {
                        app.insertTextAtCursor('* Try [it] this example!');
                      },
                    },
                  },
                },
                variables: {
                  name: 'Variables',
                  items: {
                    globalVariable: {
                      name: 'Global variable',
                      callback: () => {
                        app.insertTextAtCursor('VAR myNumber = 5');
                      },
                    },
                    temporaryVariable: {
                      name: 'Temporary variable',
                      callback: () => {
                        app.insertTextAtCursor('temp myTemporaryValue = 5');
                      },
                    },
                    modifyVariable: {
                      name: 'Modify variable',
                      callback: () => {
                        app.insertTextAtCursor('~ myNumber = myNumber + 1');
                      },
                    },
                  },
                },
                conditions: {
                  name: 'Conditions',
                  items: {
                    inlineCondition: {
                      name: 'Inline condition',
                      callback: () => {
                        app.insertTextAtCursor(
                          '{yourVariable: This is written if yourVariable is true|Otherwise this is written}\n'
                        );
                      },
                    },
                    multilineCondition: {
                      name: 'Multiline condition',
                      callback: () => {
                        app.insertTextAtCursor(
                          '{yourVariable:\n' +
                            '    This is written if yourVariable is true.\n' +
                            '  - else:\n' +
                            '    Otherwise this is written.\n' +
                            '}'
                        );
                      },
                    },
                  },
                },
              },
            };
          }
        }
        // add option to add path of local image file between img tags
        if (app.getTagBeforeCursor().match(/\[img/g)) {
          options.items['Choose image'] = {
            name: 'Choose image',
            callback: () => {
              app.data.insertImageFileName();
            },
          };
        }
        return options;
      },
    };
  },
};
