(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[134],{2481:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return A}));var n=a(51),r=a(13),c=a(14),o=a(15),s=a(16),i=a(0),l=a.n(i),u=a(1155),h=a(1156),d=a(1153),f=a(1154),p=a(1157),m=a(172),g=a(1160),y=a(1163),E=a(1164),O=a(1165),v=a(565),b=a(56),T=a(808),S=a.n(T),I=a(795),N=a.n(I),R=a(805),C=a(801),L=a(798),F=a.n(L),A=(a(804),a(807),function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(t){var c;return Object(r.a)(this,a),(c=e.call(this,t)).onEditorStateChange=function(t){c.setState({editorState:t,desc:F()(Object(R.convertToRaw)(t.getCurrentContent()))})},c.changeHandler=function(t){c.setState(Object(n.a)({},t.target.name,t.target.value))},c.submitHandler=function(t){t.preventDefault(),console.log("Desc",c.state.desc);var e=c.props.match.params.id;v.a.post("admin/edit_faq/".concat(e),c.state).then((function(t){N()("Success!","Submitted SuccessFull!","success")})).catch((function(t){console.log(t)}))},c.state={title:"",editorState:R.EditorState.createEmpty(),desc:""},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;v.a.get("/admin/getoneFaq/".concat(e)).then((function(e){console.log(e.data.data.desc),t.setState({title:e.data.data.title,desc:e.data.data.desc})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(h.a,{sm:"12"},l.a.createElement("div",null,l.a.createElement(d.a,{listTag:"div"},l.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),l.a.createElement(f.a,{href:"/app/scripts/cashEquity",tag:"a"},"Edit Faq"),l.a.createElement(f.a,{active:!0},"Edit Faq"))))),l.a.createElement(p.a,null,l.a.createElement(u.a,{className:"m-2"},l.a.createElement(h.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Faq")),l.a.createElement(h.a,null,l.a.createElement(b.b,{render:function(t){var e=t.history;return l.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return e.push("/app/faq/faqList")}},"Back")}}))),l.a.createElement(g.a,null,l.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(u.a,null,l.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},l.a.createElement(E.a,null,"Title"),l.a.createElement(O.a,{type:"text",required:!0,placeholder:"Enter Title",name:"title",value:this.state.title,onChange:this.changeHandler})),l.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(E.a,null,"Description"),l.a.createElement(C.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,defaultContentState:S()(this.state.desc),toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),l.a.createElement(u.a,null,l.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(i.Component))},798:function(t,e,a){t.exports=function(){"use strict";function t(t,e){if(t)for(var a in t)({}).hasOwnProperty.call(t,a)&&e(a,t[a])}var e={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function a(t){return t&&e[t]}function n(e){var a="";return t(e,(function(t,e){e&&(a+="".concat(t,":").concat(e,";"))})),a}function r(t,e){var a={};return t.COLOR[e]&&(a.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(a.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(a.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(a.FONTFAMILY=t.FONTFAMILY[e]),t.UNDERLINE[e]&&(a.UNDERLINE=!0),t.ITALIC[e]&&(a.ITALIC=!0),t.BOLD[e]&&(a.BOLD=!0),t.STRIKETHROUGH[e]&&(a.STRIKETHROUGH=!0),t.CODE[e]&&(a.CODE=!0),t.SUBSCRIPT[e]&&(a.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(a.SUPERSCRIPT=!0),a}function c(t,e,a){var n=!0;return a>0&&a<t.length?e.forEach((function(e){n=n&&t[e][a]===t[e][a-1]})):n=!1,n}function o(t,e,a,n){var r=t[e];if("function"===typeof n){var c=n(r,a);if(c)return c}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(a,"</a>");if("LINK"===r.type){var o=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(o,'">').concat(a,"</a>")}if("IMAGE"===r.type){var s=r.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):a}function s(t,e,a,n){var o=[],s=Array.from(t.text);if(s.length>0)for(var i,l=function(t){var e=t.text,a=t.inlineStyleRanges,n={BOLD:new Array(e.length),ITALIC:new Array(e.length),UNDERLINE:new Array(e.length),STRIKETHROUGH:new Array(e.length),CODE:new Array(e.length),SUPERSCRIPT:new Array(e.length),SUBSCRIPT:new Array(e.length),COLOR:new Array(e.length),BGCOLOR:new Array(e.length),FONTSIZE:new Array(e.length),FONTFAMILY:new Array(e.length),length:e.length};return a&&a.length>0&&a.forEach((function(t){for(var e=t.offset,a=e+t.length,r=e;r<a;r+=1)0===t.style.indexOf("color-")?n.COLOR[r]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?n.BGCOLOR[r]=t.style.substring(8):0===t.style.indexOf("fontsize-")?n.FONTSIZE[r]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?n.FONTFAMILY[r]=t.style.substring(11):n[t.style]&&(n[t.style][r]=!0)})),n}(t),u=a;u<n;u+=1)u!==a&&c(l,e,u)?(i.text.push(s[u]),i.end=u+1):(i={styles:r(l,u),text:[s[u]],start:u,end:u+1},o.push(i));return o}function i(e,a){var n=s(e,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],a.start,a.end),r="";return n.forEach((function(e){r+=function(e){var a=e.styles,n=function(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}(e.text);return t(a,(function(t,e){n=function(t,e){return"BOLD"===t?"<strong>".concat(e,"</strong>"):"ITALIC"===t?"<em>".concat(e,"</em>"):"UNDERLINE"===t?"<ins>".concat(e,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(e,"</del>"):"CODE"===t?"<code>".concat(e,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(e,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(e,"</sub>"):e}(t,n)})),n}(e)})),r=function(t,e){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var a='style="';return t.COLOR&&(a+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(a+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(a+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(a+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(e,"</span>")}return e}(a.styles,r)}function l(t,e,a,n){var r=[],c=function(t,e){var a=[],n=0,r=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(r=(r=r.concat(function(t,e){var a=[];if(e)for(var n=0,r=0,c=t,o=e.trigger||"#",s=e.separator||" ";c.length>0&&r>=0;)if(c[0]===o?(r=0,n=0,c=c.substr(o.length)):(r=c.indexOf(s+o))>=0&&(c=c.substr(r+(s+o).length),n+=r+s.length),r>=0){var i=c.indexOf(s)>=0?c.indexOf(s):c.length,l=c.substr(0,i);l&&l.length>0&&a.push({offset:n,length:l.length+o.length,type:"HASHTAG"}),n+=o.length}return a}(t.text,e))).sort((function(t,e){return t.offset-e.offset}))).forEach((function(t){t.offset>n&&a.push({start:n,end:t.offset}),a.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),n=t.offset+t.length})),n<t.text.length&&a.push({start:n,end:t.text.length}),a}(t,a);return c.forEach((function(a,l){var u=function(t,e,a,n){var r=[];s(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(e){r.push(i(t,e))}));var c=r.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(c=o(e,a.entityKey,c,n)):"HASHTAG"===a.type&&(c='<a href="'.concat(c,'" class="wysiwyg-hashtag">').concat(c,"</a>")),c}(t,e,a,n);0===l&&(u=function(t){if(t){for(var e=t,a=0;a<e.length&&" "===t[a];a+=1)e=e.replace(" ","&nbsp;");return e}return t}(u)),l===c.length-1&&(u=function(t){if(t){for(var e=t,a=e.length-1;a>=0&&" "===e[a];a-=1)e="".concat(e.substring(0,a),"&nbsp;").concat(e.substring(a+1));return e}return t}(u)),r.push(u)})),r.join("")}function u(t,e,r,c,o){var s,i=[],h=[];return t.forEach((function(t){var d=!1;if(s?s.type!==t.type?(i.push("</".concat(a(s.type),">\n")),i.push("<".concat(a(t.type),">\n"))):s.depth===t.depth?h&&h.length>0&&(i.push(u(h,e,r,c,o)),h=[]):(d=!0,h.push(t)):i.push("<".concat(a(t.type),">\n")),!d){i.push("<li");var f=n(t.data);f&&i.push(' style="'.concat(f,'"')),c&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,o)),i.push("</li>\n"),s=t}})),h&&h.length>0&&i.push(u(h,e,r,c,o)),i.push("</".concat(a(s.type),">\n")),i.join("")}return function(t,e,r,c){var s=[];if(t){var i=t.blocks,h=t.entityMap;if(i&&i.length>0){var d=[];if(i.forEach((function(t){if("unordered-list-item"===(p=t.type)||"ordered-list-item"===p)d.push(t);else{if(d.length>0){var i=u(d,h,e,c);s.push(i),d=[]}var f=function(t,e,r,c,s){var i=[];if(function(t){return t.entityRanges.length>0&&(void 0===(e=t.text)||null===e||0===e.length||0===e.trim().length||"atomic"===t.type);var e}(t))i.push(o(e,t.entityRanges[0].key,void 0,s));else{var u=a(t.type);if(u){i.push("<".concat(u));var h=n(t.data);h&&i.push(' style="'.concat(h,'"')),c&&i.push(' dir = "auto"'),i.push(">"),i.push(l(t,e,r,s)),i.push("</".concat(u,">"))}}return i.push("\n"),i.join("")}(t,h,e,r,c);s.push(f)}var p})),d.length>0){var f=u(d,h,e,r,c);s.push(f),d=[]}}}return s.join("")}}()},809:function(t,e){}}]);
//# sourceMappingURL=134.1cdc3d6a.chunk.js.map