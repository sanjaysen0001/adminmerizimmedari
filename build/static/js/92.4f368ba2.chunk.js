/*! For license information please see 92.4f368ba2.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[92],{2361:function(e,t,a){"use strict";a.r(t);var n=a(36),o=a(0),r=a.n(o),c=a(989),s=a(801),i=(a(805),a(804)),l=a(807),u=a.n(l),d=a(1154),f=a(1155),p=a(172),m=a(1173),b=a(1174),v=a(56),y=(a(806),a(564));t.default=function(){var e=Object(o.useState)(""),t=Object(n.a)(e,2),a=t[0],l=t[1],h=Object(o.useState)(""),g=Object(n.a)(h,2),E=(g[0],g[1]),O=Object(o.useState)(i.EditorState.createEmpty()),j=Object(n.a)(O,2),x=j[0],N=j[1],C=Object(v.g)(),S=Object(v.h)();Object(o.useEffect)((function(){console.log(S.id),y.a.get("/term/view-faq-by-id/".concat(S.id)).then((function(e){console.log(e.data);var t=e.data.FAQ,a=t.title,n=t.description;l(a),E(n);var o=Object(i.convertFromHTML)(n),r=i.ContentState.createFromBlockArray(o.contentBlocks,o.entityMap);N(i.EditorState.createWithContent(r))})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement(d.a,{className:"my-2"},r.a.createElement(f.a,null,r.a.createElement(p.a,{className:"pl-2",color:"danger",onClick:function(){C.goBack()}},"Back")),r.a.createElement(f.a,null,r.a.createElement("h2",null,"Edit FAQ"))),r.a.createElement(m.a,null,"Enter Title"),r.a.createElement(b.a,{type:"text",style:{width:"100%"},placeholder:"Enter Title",value:a,onChange:function(e){return l(e.target.value)},name:"title"}),r.a.createElement("br",null),r.a.createElement("div",{style:{border:"1px solid rgb(201, 198, 198)",padding:"20px",height:"30rem",overflow:"auto"}},r.a.createElement(s.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:x,onEditorStateChange:function(e){N(e)},toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),r.a.createElement(c.a,null,r.a.createElement("div",{style:{position:"absolute",bottom:"0",right:"5px"}},r.a.createElement("button",{className:"cssforfaqbuttonsetting",onClick:function(){var e=u()(Object(i.convertToRaw)(x.getCurrentContent())),t={title:a,description:e};console.log(t),y.a.put("/term/updated-faq/".concat(S.id),t).then((function(e){console.log(e.data.message),C.push("/Listfaq")})).catch((function(e){console.log(e)}))}},"Publish"))))}},798:function(e,t,a){"use strict";e.exports=a(847)},809:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},814:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return i}));a(2);var n=a(0),o=(a(798),["xxl","xl","lg","md","sm","xs"]),r=n.createContext({prefixes:{},breakpoints:o});r.Consumer,r.Provider;function c(e,t){var a=Object(n.useContext)(r).prefixes;return e||a[t]||t}function s(){return Object(n.useContext)(r).breakpoints}function i(){return"rtl"===Object(n.useContext)(r).dir}},847:function(e,t,a){"use strict";var n=a(0),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var r=Symbol.for;o=r("react.element"),t.Fragment=r("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,r={},l=null,u=null;for(n in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:r,_owner:c.current}}t.jsx=l,t.jsxs=l},989:function(e,t,a){"use strict";var n=a(2),o=a(89),r=a(809),c=a.n(r),s=a(0),i=a(814),l=a(798),u=["bsPrefix","fluid","as","className"],d=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,s=e.as,d=void 0===s?"div":s,f=e.className,p=Object(o.a)(e,u),m=Object(i.b)(a,"container"),b="string"===typeof r?"-".concat(r):"-fluid";return Object(l.jsx)(d,Object(n.a)(Object(n.a)({ref:t},p),{},{className:c()(f,r?"".concat(m).concat(b):m)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d}}]);
//# sourceMappingURL=92.4f368ba2.chunk.js.map