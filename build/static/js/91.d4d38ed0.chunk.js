/*! For license information please see 91.d4d38ed0.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[91],{2362:function(e,t,r){"use strict";r.r(t);var a=r(36),o=r(0),n=r.n(o),s=r(989),i=r(801),l=r(804),c=(r(805),r(807)),u=r.n(c),f=r(1173),d=r(1174),p=r(56),m=r(564);r(806);t.default=function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),r=t[0],c=t[1],b=Object(o.useState)(l.EditorState.createEmpty()),v=Object(a.a)(b,2),y=v[0],g=v[1],h=Object(p.g)();return n.a.createElement("div",null,n.a.createElement(f.a,null,"Enter Title"),n.a.createElement(d.a,{type:"text",style:{width:"100%"},placeholder:"Enter Title",value:r,onChange:function(e){return c(e.target.value)},name:"title"}),n.a.createElement("br",null),n.a.createElement("div",{style:{border:"1px solid rgb(201, 198, 198)",padding:"20px",height:"30rem",overflow:"auto"}},n.a.createElement(i.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:y,onEditorStateChange:function(e){g(e)},toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),n.a.createElement(s.a,null,n.a.createElement("div",{style:{position:"absolute",bottom:"0",right:"0"}},n.a.createElement("button",{className:"cssforfaqbuttonsetting",onClick:function(){var e=u()(Object(l.convertToRaw)(y.getCurrentContent())),t={title:r,description:e};console.log(t);try{var a=m.a.post("/term/save-faq",t),o=m.a.get("/term/view-faq",t);console.log(o),console.log(a.data),h.push("/Listfaq")}catch(n){console.log(n)}}},"Publish"))))}},798:function(e,t,r){"use strict";e.exports=r(847)},809:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var s=o.apply(null,a);s&&e.push(s)}}else if("object"===n)if(a.toString===Object.prototype.toString)for(var i in a)r.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},814:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return l}));r(2);var a=r(0),o=(r(798),["xxl","xl","lg","md","sm","xs"]),n=a.createContext({prefixes:{},breakpoints:o});n.Consumer,n.Provider;function s(e,t){var r=Object(a.useContext)(n).prefixes;return e||r[t]||t}function i(){return Object(a.useContext)(n).breakpoints}function l(){return"rtl"===Object(a.useContext)(n).dir}},847:function(e,t,r){"use strict";var a=r(0),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var n=Symbol.for;o=n("react.element"),t.Fragment=n("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,n={},c=null,u=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:u,props:n,_owner:s.current}}t.jsx=c,t.jsxs=c},989:function(e,t,r){"use strict";var a=r(2),o=r(89),n=r(809),s=r.n(n),i=r(0),l=r(814),c=r(798),u=["bsPrefix","fluid","as","className"],f=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.fluid,i=e.as,f=void 0===i?"div":i,d=e.className,p=Object(o.a)(e,u),m=Object(l.b)(r,"container"),b="string"===typeof n?"-".concat(n):"-fluid";return Object(c.jsx)(f,Object(a.a)(Object(a.a)({ref:t},p),{},{className:s()(d,n?"".concat(m).concat(b):m)}))}));f.displayName="Container",f.defaultProps={fluid:!1},t.a=f}}]);
//# sourceMappingURL=91.d4d38ed0.chunk.js.map