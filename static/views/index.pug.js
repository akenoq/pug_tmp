function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function indexTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fstatic\u002Fviews\u002Findex.pug":"html\n    head\n        title!= title\n    body\n        h1!= message\n"};
;var locals_for_with = (locals || {});(function (message, title) {;pug_debug_line = 1;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = title) ? "" : pug_interp) + "\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = message) ? "" : pug_interp) + "\u003C\u002Fh1\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"message" in locals_for_with?locals_for_with.message:typeof message!=="undefined"?message:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}