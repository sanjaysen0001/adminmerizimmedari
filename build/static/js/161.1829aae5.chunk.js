(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[161,157,158,159,160],{798:function(t,n,e){t.exports=function(){"use strict";function t(t,n){if(t)for(var e in t)({}).hasOwnProperty.call(t,e)&&n(e,t[e])}var n={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function e(t){return t&&n[t]}function r(n){var e="";return t(n,(function(t,n){n&&(e+="".concat(t,":").concat(n,";"))})),e}function a(t,n){var e={};return t.COLOR[n]&&(e.COLOR=t.COLOR[n]),t.BGCOLOR[n]&&(e.BGCOLOR=t.BGCOLOR[n]),t.FONTSIZE[n]&&(e.FONTSIZE=t.FONTSIZE[n]),t.FONTFAMILY[n]&&(e.FONTFAMILY=t.FONTFAMILY[n]),t.UNDERLINE[n]&&(e.UNDERLINE=!0),t.ITALIC[n]&&(e.ITALIC=!0),t.BOLD[n]&&(e.BOLD=!0),t.STRIKETHROUGH[n]&&(e.STRIKETHROUGH=!0),t.CODE[n]&&(e.CODE=!0),t.SUBSCRIPT[n]&&(e.SUBSCRIPT=!0),t.SUPERSCRIPT[n]&&(e.SUPERSCRIPT=!0),e}function c(t,n,e){var r=!0;return e>0&&e<t.length?n.forEach((function(n){r=r&&t[n][e]===t[n][e-1]})):r=!1,r}function o(t,n,e,r){var a=t[n];if("function"===typeof r){var c=r(a,e);if(c)return c}if("MENTION"===a.type)return'<a href="'.concat(a.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(a.data.value,'">').concat(e,"</a>");if("LINK"===a.type){var o=a.data.targetOption||"_self";return'<a href="'.concat(a.data.url,'" target="').concat(o,'">').concat(e,"</a>")}if("IMAGE"===a.type){var s=a.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(a.data.src,'" alt="').concat(a.data.alt,'" style="height: ').concat(a.data.height,";width: ").concat(a.data.width,'"/></div>'):'<img src="'.concat(a.data.src,'" alt="').concat(a.data.alt,'" style="height: ').concat(a.data.height,";width: ").concat(a.data.width,'"/>')}return"EMBEDDED_LINK"===a.type?'<iframe width="'.concat(a.data.width,'" height="').concat(a.data.height,'" src="').concat(a.data.src,'" frameBorder="0"></iframe>'):e}function s(t,n,e,r){var o=[],s=Array.from(t.text);if(s.length>0)for(var i,u=function(t){var n=t.text,e=t.inlineStyleRanges,r={BOLD:new Array(n.length),ITALIC:new Array(n.length),UNDERLINE:new Array(n.length),STRIKETHROUGH:new Array(n.length),CODE:new Array(n.length),SUPERSCRIPT:new Array(n.length),SUBSCRIPT:new Array(n.length),COLOR:new Array(n.length),BGCOLOR:new Array(n.length),FONTSIZE:new Array(n.length),FONTFAMILY:new Array(n.length),length:n.length};return e&&e.length>0&&e.forEach((function(t){for(var n=t.offset,e=n+t.length,a=n;a<e;a+=1)0===t.style.indexOf("color-")?r.COLOR[a]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?r.BGCOLOR[a]=t.style.substring(8):0===t.style.indexOf("fontsize-")?r.FONTSIZE[a]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?r.FONTFAMILY[a]=t.style.substring(11):r[t.style]&&(r[t.style][a]=!0)})),r}(t),h=e;h<r;h+=1)h!==e&&c(u,n,h)?(i.text.push(s[h]),i.end=h+1):(i={styles:a(u,h),text:[s[h]],start:h,end:h+1},o.push(i));return o}function i(n,e){var r=s(n,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],e.start,e.end),a="";return r.forEach((function(n){a+=function(n){var e=n.styles,r=function(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}(n.text);return t(e,(function(t,n){r=function(t,n){return"BOLD"===t?"<strong>".concat(n,"</strong>"):"ITALIC"===t?"<em>".concat(n,"</em>"):"UNDERLINE"===t?"<ins>".concat(n,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(n,"</del>"):"CODE"===t?"<code>".concat(n,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(n,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(n,"</sub>"):n}(t,r)})),r}(n)})),a=function(t,n){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var e='style="';return t.COLOR&&(e+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(e+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(e+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(e+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(e+='"',">").concat(n,"</span>")}return n}(e.styles,a)}function u(t,n,e,r){var a=[],c=function(t,n){var e=[],r=0,a=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(a=(a=a.concat(function(t,n){var e=[];if(n)for(var r=0,a=0,c=t,o=n.trigger||"#",s=n.separator||" ";c.length>0&&a>=0;)if(c[0]===o?(a=0,r=0,c=c.substr(o.length)):(a=c.indexOf(s+o))>=0&&(c=c.substr(a+(s+o).length),r+=a+s.length),a>=0){var i=c.indexOf(s)>=0?c.indexOf(s):c.length,u=c.substr(0,i);u&&u.length>0&&e.push({offset:r,length:u.length+o.length,type:"HASHTAG"}),r+=o.length}return e}(t.text,n))).sort((function(t,n){return t.offset-n.offset}))).forEach((function(t){t.offset>r&&e.push({start:r,end:t.offset}),e.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),r=t.offset+t.length})),r<t.text.length&&e.push({start:r,end:t.text.length}),e}(t,e);return c.forEach((function(e,u){var h=function(t,n,e,r){var a=[];s(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],e.start,e.end).forEach((function(n){a.push(i(t,n))}));var c=a.join("");return"ENTITY"===e.type?void 0!==e.entityKey&&null!==e.entityKey&&(c=o(n,e.entityKey,c,r)):"HASHTAG"===e.type&&(c='<a href="'.concat(c,'" class="wysiwyg-hashtag">').concat(c,"</a>")),c}(t,n,e,r);0===u&&(h=function(t){if(t){for(var n=t,e=0;e<n.length&&" "===t[e];e+=1)n=n.replace(" ","&nbsp;");return n}return t}(h)),u===c.length-1&&(h=function(t){if(t){for(var n=t,e=n.length-1;e>=0&&" "===n[e];e-=1)n="".concat(n.substring(0,e),"&nbsp;").concat(n.substring(e+1));return n}return t}(h)),a.push(h)})),a.join("")}function h(t,n,a,c,o){var s,i=[],f=[];return t.forEach((function(t){var l=!1;if(s?s.type!==t.type?(i.push("</".concat(e(s.type),">\n")),i.push("<".concat(e(t.type),">\n"))):s.depth===t.depth?f&&f.length>0&&(i.push(h(f,n,a,c,o)),f=[]):(l=!0,f.push(t)):i.push("<".concat(e(t.type),">\n")),!l){i.push("<li");var O=r(t.data);O&&i.push(' style="'.concat(O,'"')),c&&i.push(' dir = "auto"'),i.push(">"),i.push(u(t,n,a,o)),i.push("</li>\n"),s=t}})),f&&f.length>0&&i.push(h(f,n,a,c,o)),i.push("</".concat(e(s.type),">\n")),i.join("")}return function(t,n,a,c){var s=[];if(t){var i=t.blocks,f=t.entityMap;if(i&&i.length>0){var l=[];if(i.forEach((function(t){if("unordered-list-item"===(d=t.type)||"ordered-list-item"===d)l.push(t);else{if(l.length>0){var i=h(l,f,n,c);s.push(i),l=[]}var O=function(t,n,a,c,s){var i=[];if(function(t){return t.entityRanges.length>0&&(void 0===(n=t.text)||null===n||0===n.length||0===n.trim().length||"atomic"===t.type);var n}(t))i.push(o(n,t.entityRanges[0].key,void 0,s));else{var h=e(t.type);if(h){i.push("<".concat(h));var f=r(t.data);f&&i.push(' style="'.concat(f,'"')),c&&i.push(' dir = "auto"'),i.push(">"),i.push(u(t,n,a,s)),i.push("</".concat(h,">"))}}return i.push("\n"),i.join("")}(t,f,n,a,c);s.push(O)}var d})),l.length>0){var O=h(l,f,n,a,c);s.push(O),l=[]}}}return s.join("")}}()},861:function(t,n,e){}}]);
//# sourceMappingURL=161.1829aae5.chunk.js.map