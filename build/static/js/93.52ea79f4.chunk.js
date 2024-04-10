/*! For license information please see 93.52ea79f4.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[93],{2355:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a(0),o=a.n(r),c=a(989),i=a(801),s=(a(805),a(804)),l=a(807),u=a.n(l),d=a(1154),f=a(1155),p=a(172),m=a(1173),b=a(1174),y=a(56),v=(a(806),a(564));t.default=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],l=t[1],h=Object(r.useState)(""),g=Object(n.a)(h,2),E=(g[0],g[1]),O=Object(r.useState)(s.EditorState.createEmpty()),j=Object(n.a)(O,2),x=j[0],N=j[1],C=Object(y.g)(),S=Object(y.h)();Object(r.useEffect)((function(){console.log(S.id),v.a.get("/term/view-privacy-policy-by-id/".concat(S.id)).then((function(e){var t=e.data.Privacy,a=t.title,n=t.description;l(a),E(n);var r=Object(s.convertFromHTML)(n),o=s.ContentState.createFromBlockArray(r.contentBlocks,r.entityMap);N(s.EditorState.createWithContent(o))})).catch((function(e){console.log(e)}))}),[]);return o.a.createElement("div",null,o.a.createElement(d.a,{className:"my-2"},o.a.createElement(f.a,null,o.a.createElement(p.a,{className:"pl-2",color:"danger",onClick:function(){C.goBack()}},"Back")),o.a.createElement(f.a,null,o.a.createElement("h2",null,"Edit TermsConditions"))),o.a.createElement(m.a,null,"Enter Title"),o.a.createElement(b.a,{type:"text",style:{width:"100%"},placeholder:"Enter Title",value:a,onChange:function(e){return l(e.target.value)},name:"title"}),o.a.createElement("br",null),o.a.createElement("div",{style:{border:"1px solid rgb(201, 198, 198)",padding:"20px",height:"30rem",overflow:"auto"}},o.a.createElement(i.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:x,onEditorStateChange:function(e){N(e)},toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),o.a.createElement(c.a,null,o.a.createElement("div",{style:{position:"absolute",bottom:"0",right:"5px"}},o.a.createElement("button",{className:"cssforfaqbuttonsetting",onClick:function(){var e=u()(Object(s.convertToRaw)(x.getCurrentContent())),t={title:a,description:e};console.log(t),v.a.put("/term/updated-privacy-policy/".concat(S.id),t).then((function(e){console.log(e.data.message),C.push("/PrivacyPolicyList")})).catch((function(e){console.log(e)}))}},"Publish"))))}},798:function(e,t,a){"use strict";e.exports=a(847)},809:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},814:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));a(2);var n=a(0),r=(a(798),["xxl","xl","lg","md","sm","xs"]),o=n.createContext({prefixes:{},breakpoints:r});o.Consumer,o.Provider;function c(e,t){var a=Object(n.useContext)(o).prefixes;return e||a[t]||t}function i(){return Object(n.useContext)(o).breakpoints}function s(){return"rtl"===Object(n.useContext)(o).dir}},847:function(e,t,a){"use strict";var n=a(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,o={},l=null,u=null;for(n in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:c.current}}t.jsx=l,t.jsxs=l},989:function(e,t,a){"use strict";var n=a(2),r=a(89),o=a(809),c=a.n(o),i=a(0),s=a(814),l=a(798),u=["bsPrefix","fluid","as","className"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,i=e.as,d=void 0===i?"div":i,f=e.className,p=Object(r.a)(e,u),m=Object(s.b)(a,"container"),b="string"===typeof o?"-".concat(o):"-fluid";return Object(l.jsx)(d,Object(n.a)(Object(n.a)({ref:t},p),{},{className:c()(f,o?"".concat(m).concat(b):m)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d}}]);
//# sourceMappingURL=93.52ea79f4.chunk.js.map