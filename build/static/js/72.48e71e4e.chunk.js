/*! For license information please see 72.48e71e4e.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[72],{2361:function(t,e,n){"use strict";n.r(e);var a=n(36),r=n(0),o=n.n(r),c=n(990),s=n(801),i=(n(804),n(805)),l=n(798),u=n.n(l),f=n(1155),h=n(1156),d=n(172),p=n(1164),y=n(1165),g=n(56),O=(n(808),n(565));e.default=function(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],l=e[1],m=Object(r.useState)(""),v=Object(a.a)(m,2),E=(v[0],v[1]),b=Object(r.useState)(i.EditorState.createEmpty()),T=Object(a.a)(b,2),R=T[0],I=T[1],S=Object(g.g)(),C=Object(g.h)();Object(r.useEffect)((function(){console.log(C.id),O.a.get("/term/view-faq-by-id/".concat(C.id)).then((function(t){console.log(t.data);var e=t.data.FAQ,n=e.title,a=e.description;l(n),E(a);var r=Object(i.convertFromHTML)(a),o=i.ContentState.createFromBlockArray(r.contentBlocks,r.entityMap);I(i.EditorState.createWithContent(o))})).catch((function(t){console.log(t)}))}),[]);return o.a.createElement("div",null,o.a.createElement(f.a,{className:"my-2"},o.a.createElement(h.a,null,o.a.createElement(d.a,{className:"pl-2",color:"danger",onClick:function(){S.goBack()}},"Back")),o.a.createElement(h.a,null,o.a.createElement("h2",null,"Edit FAQ"))),o.a.createElement(p.a,null,"Enter Title"),o.a.createElement(y.a,{type:"text",style:{width:"100%"},placeholder:"Enter Title",value:n,onChange:function(t){return l(t.target.value)},name:"title"}),o.a.createElement("br",null),o.a.createElement("div",{style:{border:"1px solid rgb(201, 198, 198)",padding:"20px",height:"30rem",overflow:"auto"}},o.a.createElement(s.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:R,onEditorStateChange:function(t){I(t)},toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),o.a.createElement(c.a,null,o.a.createElement("div",{style:{position:"absolute",bottom:"0",right:"5px"}},o.a.createElement("button",{className:"cssforfaqbuttonsetting",onClick:function(){var t=u()(Object(i.convertToRaw)(R.getCurrentContent())),e={title:n,description:t};console.log(e),O.a.put("/term/updated-faq/".concat(C.id),e).then((function(t){console.log(t.data.message),S.push("/Listfaq")})).catch((function(t){console.log(t)}))}},"Publish"))))}},798:function(t,e,n){t.exports=function(){"use strict";function t(t,e){if(t)for(var n in t)({}).hasOwnProperty.call(t,n)&&e(n,t[n])}var e={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function n(t){return t&&e[t]}function a(e){var n="";return t(e,(function(t,e){e&&(n+="".concat(t,":").concat(e,";"))})),n}function r(t,e){var n={};return t.COLOR[e]&&(n.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(n.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(n.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(n.FONTFAMILY=t.FONTFAMILY[e]),t.UNDERLINE[e]&&(n.UNDERLINE=!0),t.ITALIC[e]&&(n.ITALIC=!0),t.BOLD[e]&&(n.BOLD=!0),t.STRIKETHROUGH[e]&&(n.STRIKETHROUGH=!0),t.CODE[e]&&(n.CODE=!0),t.SUBSCRIPT[e]&&(n.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(n.SUPERSCRIPT=!0),n}function o(t,e,n){var a=!0;return n>0&&n<t.length?e.forEach((function(e){a=a&&t[e][n]===t[e][n-1]})):a=!1,a}function c(t,e,n,a){var r=t[e];if("function"===typeof a){var o=a(r,n);if(o)return o}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(n,"</a>");if("LINK"===r.type){var c=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(c,'">').concat(n,"</a>")}if("IMAGE"===r.type){var s=r.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):n}function s(t,e,n,a){var c=[],s=Array.from(t.text);if(s.length>0)for(var i,l=function(t){var e=t.text,n=t.inlineStyleRanges,a={BOLD:new Array(e.length),ITALIC:new Array(e.length),UNDERLINE:new Array(e.length),STRIKETHROUGH:new Array(e.length),CODE:new Array(e.length),SUPERSCRIPT:new Array(e.length),SUBSCRIPT:new Array(e.length),COLOR:new Array(e.length),BGCOLOR:new Array(e.length),FONTSIZE:new Array(e.length),FONTFAMILY:new Array(e.length),length:e.length};return n&&n.length>0&&n.forEach((function(t){for(var e=t.offset,n=e+t.length,r=e;r<n;r+=1)0===t.style.indexOf("color-")?a.COLOR[r]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?a.BGCOLOR[r]=t.style.substring(8):0===t.style.indexOf("fontsize-")?a.FONTSIZE[r]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?a.FONTFAMILY[r]=t.style.substring(11):a[t.style]&&(a[t.style][r]=!0)})),a}(t),u=n;u<a;u+=1)u!==n&&o(l,e,u)?(i.text.push(s[u]),i.end=u+1):(i={styles:r(l,u),text:[s[u]],start:u,end:u+1},c.push(i));return c}function i(e,n){var a=s(e,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],n.start,n.end),r="";return a.forEach((function(e){r+=function(e){var n=e.styles,a=function(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}(e.text);return t(n,(function(t,e){a=function(t,e){return"BOLD"===t?"<strong>".concat(e,"</strong>"):"ITALIC"===t?"<em>".concat(e,"</em>"):"UNDERLINE"===t?"<ins>".concat(e,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(e,"</del>"):"CODE"===t?"<code>".concat(e,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(e,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(e,"</sub>"):e}(t,a)})),a}(e)})),r=function(t,e){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var n='style="';return t.COLOR&&(n+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(n+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(n+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(n+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(n+='"',">").concat(e,"</span>")}return e}(n.styles,r)}function l(t,e,n,a){var r=[],o=function(t,e){var n=[],a=0,r=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(r=(r=r.concat(function(t,e){var n=[];if(e)for(var a=0,r=0,o=t,c=e.trigger||"#",s=e.separator||" ";o.length>0&&r>=0;)if(o[0]===c?(r=0,a=0,o=o.substr(c.length)):(r=o.indexOf(s+c))>=0&&(o=o.substr(r+(s+c).length),a+=r+s.length),r>=0){var i=o.indexOf(s)>=0?o.indexOf(s):o.length,l=o.substr(0,i);l&&l.length>0&&n.push({offset:a,length:l.length+c.length,type:"HASHTAG"}),a+=c.length}return n}(t.text,e))).sort((function(t,e){return t.offset-e.offset}))).forEach((function(t){t.offset>a&&n.push({start:a,end:t.offset}),n.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),a=t.offset+t.length})),a<t.text.length&&n.push({start:a,end:t.text.length}),n}(t,n);return o.forEach((function(n,l){var u=function(t,e,n,a){var r=[];s(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],n.start,n.end).forEach((function(e){r.push(i(t,e))}));var o=r.join("");return"ENTITY"===n.type?void 0!==n.entityKey&&null!==n.entityKey&&(o=c(e,n.entityKey,o,a)):"HASHTAG"===n.type&&(o='<a href="'.concat(o,'" class="wysiwyg-hashtag">').concat(o,"</a>")),o}(t,e,n,a);0===l&&(u=function(t){if(t){for(var e=t,n=0;n<e.length&&" "===t[n];n+=1)e=e.replace(" ","&nbsp;");return e}return t}(u)),l===o.length-1&&(u=function(t){if(t){for(var e=t,n=e.length-1;n>=0&&" "===e[n];n-=1)e="".concat(e.substring(0,n),"&nbsp;").concat(e.substring(n+1));return e}return t}(u)),r.push(u)})),r.join("")}function u(t,e,r,o,c){var s,i=[],f=[];return t.forEach((function(t){var h=!1;if(s?s.type!==t.type?(i.push("</".concat(n(s.type),">\n")),i.push("<".concat(n(t.type),">\n"))):s.depth===t.depth?f&&f.length>0&&(i.push(u(f,e,r,o,c)),f=[]):(h=!0,f.push(t)):i.push("<".concat(n(t.type),">\n")),!h){i.push("<li");var d=a(t.data);d&&i.push(' style="'.concat(d,'"')),o&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,c)),i.push("</li>\n"),s=t}})),f&&f.length>0&&i.push(u(f,e,r,o,c)),i.push("</".concat(n(s.type),">\n")),i.join("")}return function(t,e,r,o){var s=[];if(t){var i=t.blocks,f=t.entityMap;if(i&&i.length>0){var h=[];if(i.forEach((function(t){if("unordered-list-item"===(p=t.type)||"ordered-list-item"===p)h.push(t);else{if(h.length>0){var i=u(h,f,e,o);s.push(i),h=[]}var d=function(t,e,r,o,s){var i=[];if(function(t){return t.entityRanges.length>0&&(void 0===(e=t.text)||null===e||0===e.length||0===e.trim().length||"atomic"===t.type);var e}(t))i.push(c(e,t.entityRanges[0].key,void 0,s));else{var u=n(t.type);if(u){i.push("<".concat(u));var f=a(t.data);f&&i.push(' style="'.concat(f,'"')),o&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,s)),i.push("</".concat(u,">"))}}return i.push("\n"),i.join("")}(t,f,e,r,o);s.push(d)}var p})),h.length>0){var d=u(h,f,e,r,o);s.push(d),h=[]}}}return s.join("")}}()},806:function(t,e,n){"use strict";t.exports=n(853)},809:function(t,e){},830:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&t.push(c)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&t.push(s);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},842:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));n(2);var a=n(0),r=(n(806),["xxl","xl","lg","md","sm","xs"]),o=a.createContext({prefixes:{},breakpoints:r});o.Consumer,o.Provider;function c(t,e){var n=Object(a.useContext)(o).prefixes;return t||n[e]||e}function s(){return"rtl"===Object(a.useContext)(o).dir}},853:function(t,e,n){"use strict";var a=n(0),r=60103;if(e.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),e.Fragment=o("react.fragment")}var c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,n){var a,o={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)s.call(e,a)&&!i.hasOwnProperty(a)&&(o[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===o[a]&&(o[a]=e[a]);return{$$typeof:r,type:t,key:l,ref:u,props:o,_owner:c.current}}e.jsx=l,e.jsxs=l},990:function(t,e,n){"use strict";var a=n(2),r=n(89),o=n(830),c=n.n(o),s=n(0),i=n(842),l=n(806),u=["bsPrefix","fluid","as","className"],f=s.forwardRef((function(t,e){var n=t.bsPrefix,o=t.fluid,s=t.as,f=void 0===s?"div":s,h=t.className,d=Object(r.a)(t,u),p=Object(i.a)(n,"container"),y="string"===typeof o?"-".concat(o):"-fluid";return Object(l.jsx)(f,Object(a.a)(Object(a.a)({ref:e},d),{},{className:c()(h,o?"".concat(p).concat(y):p)}))}));f.displayName="Container",f.defaultProps={fluid:!1},e.a=f}}]);
//# sourceMappingURL=72.48e71e4e.chunk.js.map