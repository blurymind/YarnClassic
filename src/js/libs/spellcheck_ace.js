/* eslint-disable jquery/no-ajax */
// You also need to load in nspell.js and jquery.js

// This is a custom made fork that uses nspell instead of typo.js due to major performance issues in the later.
// Please keep this file for now...
var nspell = require('nspell');
// You should configure these classes.
var editor = 'editor'; // This should be the id of your editor element.

var utils = require('../classes/utils');

var dicPath = utils.Utils.getPublicPath('dictionaries/en/index.dic');
var affPath = utils.Utils.getPublicPath('dictionaries/en/index.aff');
// var dicPath =
//   "https://raw.githubusercontent.com/elastic/hunspell/master/dicts/en_US/en_US.dic";
// var affPath =
//   "https://raw.githubusercontent.com/elastic/hunspell/master/dicts/en_US/en_US.aff";

// Make red underline for gutter and words.
$(
  '<style type=\'text/css\'>.ace_marker-layer .misspelled { position: absolute; z-index: -2; border-bottom: 1px solid red; margin-bottom: -1px; }</style>'
).appendTo('head');
$(
  '<style type=\'text/css\'>.misspelled { border-bottom: 1px solid red; margin-bottom: -1px; }</style>'
).appendTo('head');

// Load the dictionary.
// We have to load the dictionary files sequentially to ensure
var dictionary = null;

function load_dictionary(dicLanguage) {
  console.info(`Loading ${dicLanguage} hunspell dictionary locally`);
  dicPath = utils.Utils.getPublicPath(`dictionaries/${dicLanguage}/index.dic`);
  affPath = utils.Utils.getPublicPath(`dictionaries/${dicLanguage}/index.aff`);

  $.get(dicPath, function(data) {
    dicData = data;
  })
    .fail(function() {
      console.error(
        `${dicLanguage} not found locally. Loading dictionary from server instead...`
      );
      dicPath = `https://raw.githubusercontent.com/wooorm/dictionaries/main/dictionaries/${dicLanguage}/index.dic`;
      affPath = `https://raw.githubusercontent.com/wooorm/dictionaries/main/dictionaries/${dicLanguage}/index.aff`;

      $.get(dicPath, function(data) {
        dicData = data;
      }).done(function() {
        $.get(affPath, function(data) {
          affData = data;
        }).done(function() {
          console.log('Dictionary loaded from server');
          dictionary = new nspell(affData, dicData);
          contents_modified = true;
        });
      });
    })
    .done(function() {
      $.get(affPath, function(data) {
        affData = data;
      }).done(function() {
        console.log('Dictionary loaded locally');
        dictionary = new nspell(affData, dicData);
        contents_modified = true;
      });
    });
}
exports.load_dictionary = load_dictionary;

// Check the spelling of a line, and return [start, end]-pairs for misspelled words.
function misspelled(line) {
  var multiLangualNonWords = /\s+|\.|\,|\?|\\|\/|\!|\[|\]|"|'|;|:|`|\+|\-|\&|\$|@|~|#|>|<|_|\)|\(|£|\^|%|\*|„|“|\||[0-9]+/g;
  var words = line.split(multiLangualNonWords);
  // console.log(words);
  var i = 0;
  var bads = [];
  for (word in words) {
    var checkWord = words[word];
    if (!dictionary.correct(checkWord)) {
      bads[bads.length] = [i, i + words[word].length];
    }
    i += words[word].length + 1;
  }
  return bads;
}
exports.misspelled = misspelled;

var contents_modified = true;

var currently_spellchecking = false;

var markers_present = [];

// Spell check the Ace editor contents.
function spell_check() {
  // Wait for the dictionary to be loaded.
  if (dictionary == null) {
    return;
  }

  if (currently_spellchecking) {
    return;
  }

  if (!contents_modified) {
    return;
  }
  currently_spellchecking = true;
  var session = ace.edit(editor).getSession();

  // Clear all markers and gutter
  clear_spellcheck_markers();
  // Populate with markers and gutter
  try {
    var Range = ace.require('ace/range').Range;
    var lines = session.getDocument().getAllLines();
    for (var i in lines) {
      // Check spelling of this line.
      var misspellings = misspelled(lines[i]);

      // Add markers and gutter markings.
      // if (misspellings.length > 0) {
      //   session.addGutterDecoration(i, "misspelled");
      // }
      for (var j in misspellings) {
        var range = new Range(i, misspellings[j][0], i, misspellings[j][1]);
        markers_present[markers_present.length] = session.addMarker(
          range,
          'misspelled',
          'typo',
          true
        );
      }
    }
  } finally {
    currently_spellchecking = false;
    contents_modified = false;
  }
}
exports.spell_check = spell_check;

var spellcheckEnabled = false;
function enable_spellcheck() {
  spellcheckEnabled = true;
  ace
    .edit(editor)
    .getSession()
    .on('change', function(e) {
      if (spellcheckEnabled) {
        contents_modified = true;
        spell_check();
      }
    });
  // needed to trigger update once without input
  contents_modified = true;
  spell_check();
}
exports.enable_spellcheck = enable_spellcheck;

function disable_spellcheck() {
  spellcheckEnabled = false;
  // Clear the markers
  clear_spellcheck_markers();
}
exports.disable_spellcheck = disable_spellcheck;

function clear_spellcheck_markers() {
  var session = ace.edit(editor).getSession();
  for (var i in markers_present) {
    session.removeMarker(markers_present[i]);
  }
  markers_present = [];
  // Clear the gutter
  var lines = session.getDocument().getAllLines();
  for (var i in lines) {
    session.removeGutterDecoration(i, 'misspelled');
  }
}
exports.clear_spellcheck_markers = clear_spellcheck_markers;

function suggest_word_for_misspelled(misspelledWord) {
  var array_of_suggestions = dictionary.suggest(misspelledWord);
  if (array_of_suggestions.length === 0) {
    return false;
  }
  return array_of_suggestions;
}
exports.suggest_word_for_misspelled = suggest_word_for_misspelled;
