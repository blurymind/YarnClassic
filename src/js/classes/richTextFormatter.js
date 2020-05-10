import { BbcodeRichTextFormatter } from './richTextFormatterBbcode';
import { HtmlRichTextFormatter } from './richTextFormatterHtml';

export const RichTextFormatter = function(app) {
  const type = app.settings.markupLanguage();

  return type === 'html' ?
    new HtmlRichTextFormatter(app) :
    new BbcodeRichTextFormatter(app);
}
