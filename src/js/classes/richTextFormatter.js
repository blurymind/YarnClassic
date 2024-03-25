import { BbcodeRichTextFormatter } from './richTextFormatterBbcode';
import { HtmlRichTextFormatter } from './richTextFormatterHtml';

export const RichTextFormatter = function(app) {
  const type = app.settings.markupLanguage();

  const addExtraPreviewerEmbeds = result => {
    const twRegex = /(https?:\/\/twitter.com\/[^\s\<]+\/[^\s\<]+\/[^\s\<]+)/gi;
    const instaRegex = /((https:\/\/)?(www.)?instagram.com\/p\/[^\s\<]+)/gi;
    const ytRegex = /(?:http(?:s?):\/\/|)(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?(?:\?t=[0-9]+)?/gi;
    const otherUrlPattern = `^(?!${twRegex.source}|${ytRegex.source}|${instaRegex.source})https?:.*$`;
    const combinedRegex = new RegExp(otherUrlPattern, 'gm');
    // result = result.replace(combinedRegex, function(id) {
    //   return `
    //    <div style="position: relative">
    //     <iframe src="${id}" style="position:relative;left:-70px !important;width:90%;height:500px"></iframe>
    //    </div>
    // `;
    // });
    result = result.replace(combinedRegex, function(id) {
      return `
      <a class="link" href="${id}">${id}</a>
    `;
    });
    // add tweet embeds :3
    // const tweets = [];
    // result = result.replace(twRegex, function(id) {
    //   const extractedtweetId = id.match(
    //     /https:\/\/twitter.com\/.*\/status\/([0-9]+)/i
    //   );
    //   if (extractedtweetId.length > 1) {
    //     tweets.push(extractedtweetId[1]);
    //     return `<a class="tweet" id="${extractedtweetId[1]}"></a>`;
    //   }
    // });
    // setTimeout(() => {
    //   const tweetItems = document.querySelectorAll('.tweet');
    //   tweets.forEach((tweetPost, index) => {
    //     twttr.widgets.createTweet(tweetPost, tweetItems[index], {
    //       align: 'center',
    //       follow: false,
    //     });
    //   });
    // }, 500);
    // create Youtube previews :)
    result = result.replace(ytRegex, function(id) {
      const extractedId = id.match(
        /(?:https\:.*|)(?:www.|)youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11}(?:\?t=[0-9]+)?)/i
      );
      if (extractedId.length > 1) {
        return `
        <iframe height="315" src="https://www.youtube.com/embed/${extractedId[1]}" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe> 
      `;
      }
    });
    // create Instagram previews :)
    result = result.replace(instaRegex, function(id) {
      const extractedId = id.match(
        /((?:https?:\/\/)?(?:www.)?instagram.com\/p\/([^\s\<]+)\/)/i
      );
      if (extractedId.length > 2) {
        console.log('EXTRACTED', extractedId);
        return `
            <iframe height="540" src="http://instagram.com/p/${extractedId[2]}/embed" frameborder="0"></iframe>
      `;
      }
    });
    return result;
  };
  return type === 'html'
    ? new HtmlRichTextFormatter(app, addExtraPreviewerEmbeds)
    : new BbcodeRichTextFormatter(app, addExtraPreviewerEmbeds);
};
