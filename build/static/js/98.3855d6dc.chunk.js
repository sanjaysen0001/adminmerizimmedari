/*! For license information please see 98.3855d6dc.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[98],{2357:function(e,t,r){"use strict";r.r(t);var a=r(36),n=r(0),o=r.n(n),s=r(989),i=r(801),l=r(804),c=(r(805),r(807)),u=r.n(c),d=r(1154),f=r(1155),p=r(172),m=r(1173),b=r(1174),v=r(56),y=(r(806),r(564));t.default=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),r=t[0],c=t[1],g=Object(n.useState)(l.EditorState.createEmpty()),h=Object(a.a)(g,2),x=h[0],E=h[1],O=Object(v.g)();return o.a.createElement("div",null,o.a.createElement(d.a,{className:"my-2"},o.a.createElement(f.a,null,o.a.createElement(p.a,{className:"pl-2",color:"danger",onClick:function(){O.goBack()}},"Back"))),o.a.createElement(m.a,null,"Enter Title"),o.a.createElement(b.a,{type:"text",style:{width:"100%"},placeholder:"Enter Title",value:r,onChange:function(e){return c(e.target.value)},name:"title"}),o.a.createElement("br",null),o.a.createElement("div",{style:{border:"1px solid rgb(201, 198, 198)",padding:"20px",height:"30rem",overflow:"auto"}},o.a.createElement(i.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:x,onEditorStateChange:function(e){E(e)},toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),o.a.createElement(s.a,null,o.a.createElement("div",{style:{position:"absolute",bottom:"0",right:"5px"}},o.a.createElement("button",{className:"cssforfaqbuttonsetting",onClick:function(){var e=u()(Object(l.convertToRaw)(x.getCurrentContent())),t={title:r,description:e};console.log(t);try{var a=y.a.post("/term/save-term-detail",t);console.log(a.data),O.push("/listtermsandcondition")}catch(n){console.log(n)}}},"Publish"))))}},798:function(e,t,r){"use strict";e.exports=r(847)},809:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var s=n.apply(null,a);s&&e.push(s)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)r.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},814:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return l}));r(2);var a=r(0),n=(r(798),["xxl","xl","lg","md","sm","xs"]),o=a.createContext({prefixes:{},breakpoints:n});o.Consumer,o.Provider;function s(e,t){var r=Object(a.useContext)(o).prefixes;return e||r[t]||t}function i(){return Object(a.useContext)(o).breakpoints}function l(){return"rtl"===Object(a.useContext)(o).dir}},847:function(e,t,r){"use strict";var a=r(0),n=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),t.Fragment=o("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,o={},c=null,u=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:u,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},989:function(e,t,r){"use strict";var a=r(2),n=r(89),o=r(809),s=r.n(o),i=r(0),l=r(814),c=r(798),u=["bsPrefix","fluid","as","className"],d=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.fluid,i=e.as,d=void 0===i?"div":i,f=e.className,p=Object(n.a)(e,u),m=Object(l.b)(r,"container"),b="string"===typeof o?"-".concat(o):"-fluid";return Object(c.jsx)(d,Object(a.a)(Object(a.a)({ref:t},p),{},{className:s()(f,o?"".concat(m).concat(b):m)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d}}]);
//# sourceMappingURL=98.3855d6dc.chunk.js.map