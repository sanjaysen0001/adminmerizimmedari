(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[142],{2450:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(51),r=a(13),l=a(14),o=a(15),c=a(16),i=a(0),s=a.n(i),p=a(1155),u=a(1156),m=a(1153),d=a(1154),h=a(1157),y=a(172),g=a(1160),f=a(1163),E=a(1164),v=a(1165),b=(a(808),a(806)),N=a(802),O=a(798),T=a.n(O),S=a(56),C=a(564),I=(a(805),a(807),a(795)),L=a.n(I),R=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onEditorStateChangePara=function(e){l.setState({editorState:e,paraDescription:T()(Object(b.convertToRaw)(e.getCurrentContent()))})},l.onEditorStateChangepolicy=function(e){l.setState({editorState1:e,policyDescription:T()(Object(b.convertToRaw)(e.getCurrentContent()))})},l.handleImage=function(e){l.setState({plan_image:e.target.files[0]})},l.handlePolicyType=function(e){console.log(e.target.value),l.setState({policyType:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){var t=new FormData;t.append("policyName",l.state.policyName),t.append("policyNum",l.state.policyNumber),t.append("policyDesc",l.state.policyDescription),t.append("policyUnderWriter",l.state.policyUnderWriter),t.append("proproetary",l.state.proprietary),t.append("policyType",l.state.policyType),t.append("policyAdtional",l.state.policyAdditionalFeatures),t.append("paraDesc",l.state.paraDescription),t.append("policyPage",l.state.policy_page),t.append("policyDocument",l.state.policy_document),t.append("policyFAQ",l.state.policy_FAQ),t.append("purchesLink",l.state.purchase_link),t.append("brochureLink",l.state.brochure_link),t.append("purched",l.state.purchased),t.append("renewed",l.state.renewed),null!==l.state.plan_image&&t.append("planimg",l.state.plan_image),t.append("status",l.state.policyActive),e.preventDefault();var a=l.props.match.params.id;console.log(l.state.policyType),C.a.post("/admin/editPolicy/".concat(a),t).then((function(e){L()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/policy/PolicyList")})).catch((function(e){L()("Something Went Wrong")}))},l.state={policyName:"",policyNumber:"",policyUnderWriter:"",proprietary:"",policyType:"",policyAdditionalFeatures:"",policyDescription:"",paraDescription:"",policy_page:"",policy_document:"",policy_FAQ:"",purchase_link:"",plan_image:"",brochure_link:"",purchased:"",renewed:"",policyActive:"",policyTypeList:[],editorState:b.EditorState.createEmpty()},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;C.a.get("/admin/get_pt").then((function(t){e.setState({policyTypeList:t.data.data})})).catch((function(e){L()("Something Went Wrong")})),C.a.get("/admin/getOnePolicy/".concat(t)).then((function(t){var a,n,r,l,o;console.log(null===(a=t.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.policyType.pt_type),console.log(null===(r=t.data)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.policyType._id);var c=null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.data,i=c.paraDesc,s=c.brochureLink,p=c.policyAdtional,u=c.policyDesc,m=c.policyDocument,d=c.policyFAQ,h=c.policyName,y=c.policyPage,g=c.policyType,f=c.policyUnderWriter,E=c.purchesLink,v=c.renewed,N=c.status,O=c.purched,T=c.policyNum,S=c.proproetary,C=b.ContentState.createFromBlockArray(Object(b.convertFromHTML)(i)),I=b.ContentState.createFromBlockArray(Object(b.convertFromHTML)(u)),L=b.EditorState.createWithContent(C),R=b.EditorState.createWithContent(I);e.setState({policyName:h,policyNumber:T,policyUnderWriter:f,proprietary:S,policyType:null===g||void 0===g?void 0:g._id,policyAdditionalFeatures:p,policyDescription:u,paraDescription:i,policy_page:y,policy_document:m,policy_FAQ:d,purchase_link:E,brochure_link:s,purchased:O,renewed:v,policyActive:N,editorState:L,editorState1:R})})).catch((function(e){L()("Something Went Wrong")}))}},{key:"render",value:function(){var e,t=this;return s.a.createElement("div",null,s.a.createElement(p.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement("div",null,s.a.createElement(m.a,{listTag:"div"},s.a.createElement(d.a,{href:"/",tag:"a"},"Home"),s.a.createElement(d.a,{active:!0},"Edit Policy"))))),s.a.createElement(h.a,null,s.a.createElement(p.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Policy")),s.a.createElement(u.a,null,s.a.createElement(S.b,{render:function(e){var t=e.history;return s.a.createElement(y.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/policy/PolicyList")}},"Back")}}))),s.a.createElement(g.a,null,s.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(p.a,null,s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"PolicyName "),s.a.createElement(v.a,{type:"text",name:"policyName",placeholder:"policyName",value:this.state.policyName,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"PolicyNumber"),s.a.createElement(v.a,{type:"text",name:"policyNumber",placeholder:"PolicyNumber",value:this.state.policyNumber,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"policyUnderWriter "),s.a.createElement(v.a,{type:"text",name:"policyUnderWriter",placeholder:"PolicyUnderWriter",value:this.state.policyUnderWriter,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Proprietary "),s.a.createElement(v.a,{type:"text",name:"proprietary",placeholder:"Proprietary",value:this.state.proprietary,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"PolicyAdditionalFeatures "),s.a.createElement(v.a,{type:"text",name:"policyAdditionalFeatures",placeholder:"PolicyAdditionalFeatures",value:this.state.policyAdditionalFeatures,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy Page "),s.a.createElement(v.a,{type:"text",name:"policy_page",placeholder:"PolicyPage",value:this.state.policy_page,onChange:this.changeHandler}))," ",s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy Document "),s.a.createElement(v.a,{type:"text",name:"policy_document",placeholder:"Policy Document",value:this.state.policy_document,onChange:this.changeHandler}))," ",s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy FAQ "),s.a.createElement(v.a,{type:"text",name:"policy_FAQ",placeholder:"Policy FAQ",value:this.state.policy_FAQ,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Purchase Link "),s.a.createElement(v.a,{type:"text",name:"purchase_link",placeholder:"Purchase_link",value:this.state.purchase_link,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Brochure Link "),s.a.createElement(v.a,{type:"text",name:"brochure_link",placeholder:"Brochure Link",value:this.state.brochure_link,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Purchased "),s.a.createElement(v.a,{type:"text",name:"purchased",placeholder:"Purchased",value:this.state.purchased,onChange:this.changeHandler})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,{for:"data-category"},"Policy Type"),s.a.createElement(v.a,{type:"select",id:"data-category",name:"policyType",value:this.state.policyType,onChange:this.handlePolicyType,defaultValue:this.state.policyType},null===(e=this.state.policyTypeList)||void 0===e?void 0:e.map((function(e){return s.a.createElement("option",{key:e._id,value:e._id},e.pt_type)})))),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Policy Descripition"),s.a.createElement(N.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState1,onEditorStateChange:this.onEditorStateChangepolicy,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Para Descripition"),s.a.createElement(N.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChangePara,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"Plan Image "),s.a.createElement(v.a,{type:"file",name:"plan_image",onChange:this.handleImage})),s.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(E.a,{className:"mb-1"},"Status"),s.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"true",checked:!0}),s.a.createElement("span",{style:{marginRight:"20px"}},"Active"),s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"false"}),s.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),s.a.createElement(p.a,null,s.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},s.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Policy")))))))}}]),a}(i.Component)},798:function(e,t,a){e.exports=function(){"use strict";function e(e,t){if(e)for(var a in e)({}).hasOwnProperty.call(e,a)&&t(a,e[a])}var t={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function a(e){return e&&t[e]}function n(t){var a="";return e(t,(function(e,t){t&&(a+="".concat(e,":").concat(t,";"))})),a}function r(e,t){var a={};return e.COLOR[t]&&(a.COLOR=e.COLOR[t]),e.BGCOLOR[t]&&(a.BGCOLOR=e.BGCOLOR[t]),e.FONTSIZE[t]&&(a.FONTSIZE=e.FONTSIZE[t]),e.FONTFAMILY[t]&&(a.FONTFAMILY=e.FONTFAMILY[t]),e.UNDERLINE[t]&&(a.UNDERLINE=!0),e.ITALIC[t]&&(a.ITALIC=!0),e.BOLD[t]&&(a.BOLD=!0),e.STRIKETHROUGH[t]&&(a.STRIKETHROUGH=!0),e.CODE[t]&&(a.CODE=!0),e.SUBSCRIPT[t]&&(a.SUBSCRIPT=!0),e.SUPERSCRIPT[t]&&(a.SUPERSCRIPT=!0),a}function l(e,t,a){var n=!0;return a>0&&a<e.length?t.forEach((function(t){n=n&&e[t][a]===e[t][a-1]})):n=!1,n}function o(e,t,a,n){var r=e[t];if("function"===typeof n){var l=n(r,a);if(l)return l}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(a,"</a>");if("LINK"===r.type){var o=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(o,'">').concat(a,"</a>")}if("IMAGE"===r.type){var c=r.data.alignment;return c&&c.length?'<div style="text-align:'.concat(c,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):a}function c(e,t,a,n){var o=[],c=Array.from(e.text);if(c.length>0)for(var i,s=function(e){var t=e.text,a=e.inlineStyleRanges,n={BOLD:new Array(t.length),ITALIC:new Array(t.length),UNDERLINE:new Array(t.length),STRIKETHROUGH:new Array(t.length),CODE:new Array(t.length),SUPERSCRIPT:new Array(t.length),SUBSCRIPT:new Array(t.length),COLOR:new Array(t.length),BGCOLOR:new Array(t.length),FONTSIZE:new Array(t.length),FONTFAMILY:new Array(t.length),length:t.length};return a&&a.length>0&&a.forEach((function(e){for(var t=e.offset,a=t+e.length,r=t;r<a;r+=1)0===e.style.indexOf("color-")?n.COLOR[r]=e.style.substring(6):0===e.style.indexOf("bgcolor-")?n.BGCOLOR[r]=e.style.substring(8):0===e.style.indexOf("fontsize-")?n.FONTSIZE[r]=e.style.substring(9):0===e.style.indexOf("fontfamily-")?n.FONTFAMILY[r]=e.style.substring(11):n[e.style]&&(n[e.style][r]=!0)})),n}(e),p=a;p<n;p+=1)p!==a&&l(s,t,p)?(i.text.push(c[p]),i.end=p+1):(i={styles:r(s,p),text:[c[p]],start:p,end:p+1},o.push(i));return o}function i(t,a){var n=c(t,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],a.start,a.end),r="";return n.forEach((function(t){r+=function(t){var a=t.styles,n=function(e){return e&&e.length>0?e.map((function(e){switch(e){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})).join(""):""}(t.text);return e(a,(function(e,t){n=function(e,t){return"BOLD"===e?"<strong>".concat(t,"</strong>"):"ITALIC"===e?"<em>".concat(t,"</em>"):"UNDERLINE"===e?"<ins>".concat(t,"</ins>"):"STRIKETHROUGH"===e?"<del>".concat(t,"</del>"):"CODE"===e?"<code>".concat(t,"</code>"):"SUPERSCRIPT"===e?"<sup>".concat(t,"</sup>"):"SUBSCRIPT"===e?"<sub>".concat(t,"</sub>"):t}(e,n)})),n}(t)})),r=function(e,t){if(e&&(e.COLOR||e.BGCOLOR||e.FONTSIZE||e.FONTFAMILY)){var a='style="';return e.COLOR&&(a+="color: ".concat(e.COLOR,";")),e.BGCOLOR&&(a+="background-color: ".concat(e.BGCOLOR,";")),e.FONTSIZE&&(a+="font-size: ".concat(e.FONTSIZE).concat(/^\d+$/.test(e.FONTSIZE)?"px":"",";")),e.FONTFAMILY&&(a+="font-family: ".concat(e.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(t,"</span>")}return t}(a.styles,r)}function s(e,t,a,n){var r=[],l=function(e,t){var a=[],n=0,r=e.entityRanges.map((function(e){return{offset:e.offset,length:e.length,key:e.key,type:"ENTITY"}}));return(r=(r=r.concat(function(e,t){var a=[];if(t)for(var n=0,r=0,l=e,o=t.trigger||"#",c=t.separator||" ";l.length>0&&r>=0;)if(l[0]===o?(r=0,n=0,l=l.substr(o.length)):(r=l.indexOf(c+o))>=0&&(l=l.substr(r+(c+o).length),n+=r+c.length),r>=0){var i=l.indexOf(c)>=0?l.indexOf(c):l.length,s=l.substr(0,i);s&&s.length>0&&a.push({offset:n,length:s.length+o.length,type:"HASHTAG"}),n+=o.length}return a}(e.text,t))).sort((function(e,t){return e.offset-t.offset}))).forEach((function(e){e.offset>n&&a.push({start:n,end:e.offset}),a.push({start:e.offset,end:e.offset+e.length,entityKey:e.key,type:e.type}),n=e.offset+e.length})),n<e.text.length&&a.push({start:n,end:e.text.length}),a}(e,a);return l.forEach((function(a,s){var p=function(e,t,a,n){var r=[];c(e,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(t){r.push(i(e,t))}));var l=r.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(l=o(t,a.entityKey,l,n)):"HASHTAG"===a.type&&(l='<a href="'.concat(l,'" class="wysiwyg-hashtag">').concat(l,"</a>")),l}(e,t,a,n);0===s&&(p=function(e){if(e){for(var t=e,a=0;a<t.length&&" "===e[a];a+=1)t=t.replace(" ","&nbsp;");return t}return e}(p)),s===l.length-1&&(p=function(e){if(e){for(var t=e,a=t.length-1;a>=0&&" "===t[a];a-=1)t="".concat(t.substring(0,a),"&nbsp;").concat(t.substring(a+1));return t}return e}(p)),r.push(p)})),r.join("")}function p(e,t,r,l,o){var c,i=[],u=[];return e.forEach((function(e){var m=!1;if(c?c.type!==e.type?(i.push("</".concat(a(c.type),">\n")),i.push("<".concat(a(e.type),">\n"))):c.depth===e.depth?u&&u.length>0&&(i.push(p(u,t,r,l,o)),u=[]):(m=!0,u.push(e)):i.push("<".concat(a(e.type),">\n")),!m){i.push("<li");var d=n(e.data);d&&i.push(' style="'.concat(d,'"')),l&&i.push(' dir = "auto"'),i.push(">"),i.push(s(e,t,r,o)),i.push("</li>\n"),c=e}})),u&&u.length>0&&i.push(p(u,t,r,l,o)),i.push("</".concat(a(c.type),">\n")),i.join("")}return function(e,t,r,l){var c=[];if(e){var i=e.blocks,u=e.entityMap;if(i&&i.length>0){var m=[];if(i.forEach((function(e){if("unordered-list-item"===(h=e.type)||"ordered-list-item"===h)m.push(e);else{if(m.length>0){var i=p(m,u,t,l);c.push(i),m=[]}var d=function(e,t,r,l,c){var i=[];if(function(e){return e.entityRanges.length>0&&(void 0===(t=e.text)||null===t||0===t.length||0===t.trim().length||"atomic"===e.type);var t}(e))i.push(o(t,e.entityRanges[0].key,void 0,c));else{var p=a(e.type);if(p){i.push("<".concat(p));var u=n(e.data);u&&i.push(' style="'.concat(u,'"')),l&&i.push(' dir = "auto"'),i.push(">"),i.push(s(e,t,r,c)),i.push("</".concat(p,">"))}}return i.push("\n"),i.join("")}(e,u,t,r,l);c.push(d)}var h})),m.length>0){var d=p(m,u,t,r,l);c.push(d),m=[]}}}return c.join("")}}()},809:function(e,t){}}]);
//# sourceMappingURL=142.985948d1.chunk.js.map