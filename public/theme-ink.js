define("ace/theme/ink",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-ink";
exports.cssText = `
/* Flow related stuff in blue */
.ace_editor span.ace_flow.ace_declaration,
.ace_editor span.ace_divert,
.ace_editor span.ace_choice.ace_bullets,
.ace_editor span.ace_choice.ace_label,
.ace_editor span.ace_choice.ace_weaveBracket,
.ace_editor span.ace_gather.ace_bullets,
.ace_editor span.ace_gather.ace_label,
.ace_editor span.ace_glue,
.ace_editor span.ace_include,
.ace_editor span.ace_external {
    color: blue;
}

/* Comments */
.ace-tm .ace_comment {
    color: #84756c;
}

/* Logic */
.ace_editor span.ace_var-decl,
.ace_editor span.ace_list-decl,
.ace_editor span.ace_logic:not(.ace_innerContent) {
    color: green;
}

/* Tags */
.ace_editor span.ace_tag {
    color: #AAA;
}

#main.hideTags .ace_editor span.ace_tag {
    color: white;
}
`;

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});