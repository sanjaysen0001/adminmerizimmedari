/*! For license information please see 158.be6c8f23.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[158],{2416:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(116),r=a(51),l=a(13),o=a(14),i=a(15),c=a(16),s=a(0),m=a.n(s),u=a(1154),d=a(1155),h=a(1152),p=a(1153),f=a(1156),g=a(172),v=a(1159),y=a(1172),b=a(1173),E=a(783),_=a(1174),w=a(564),N=a(795),x=a.n(N),L=a(56),P=a(804),C=a(801),S=a(807),k=a.n(S);a(805),a(811);function O(){O=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(P){i=function(e,t,a){return e[t]=a}}function c(e,t,a,n){var r=t&&t.prototype instanceof u?t:u,l=Object.create(r.prototype),o=new N(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return L()}for(a.method=r,a.arg=l;;){var o=a.delegate;if(o){var i=E(o,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=s(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}(e,a,o),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=c;var m={};function u(){}function d(){}function h(){}var p={};i(p,r,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(x([])));g&&g!==t&&a.call(g,r)&&(p=g);var v=h.prototype=u.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(r,l){function o(){return new t((function(n,o){!function n(r,l,o,i){var c=s(e[r],e,l);if("throw"!==c.type){var m=c.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,i)}),(function(e){n("throw",e,o,i)})):t.resolve(u).then((function(e){m.value=e,o(m)}),(function(e){return n("throw",e,o,i)}))}i(c.arg)}(r,l,n,o)}))}return n=n?n.then(o,o):o()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=h,i(v,"constructor",h),i(h,"constructor",d),d.displayName=i(h,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,o,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),i(b.prototype,l,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var o=new b(c(t,a,n,r),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(v),i(v,o,"Generator"),i(v,r,(function(){return this})),i(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var i=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var j=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,short_desc:k()(Object(P.convertToRaw)(e.getCurrentContent()))})},n.changeHandler=function(e){n.setState(Object(r.a)({},e.target.name,e.target.value))},n.handleImage=function(e){n.setState({selectedFile:e.target.files[0]})},n.changeHandler1=function(e){n.setState({allPlan:e.target.value})},n.submitHandler=function(e){var t=n.props.match.params.id;e.preventDefault();var a=new FormData;a.append("planname",n.state.allPlan),a.append("short_desc",n.state.short_desc),a.append("title",n.state.title),a.append("plan_max",Number(n.state.plan_max)),a.append("plan_deductible",Number(n.state.plan_deductible)),a.append("coverageAmt",Number(n.state.coverageAmt)),a.append("start_date",n.state.start_date),a.append("end_date",n.state.end_date),a.append("total",Number(n.state.total)),a.append("email",n.state.email),a.append("coverage_area",n.state.coverage_area),a.append("dob",n.state.dob),null!=n.state.selectedFile&&a.append("upload_pdf",n.state.selectedFile),w.a.post("/admin/editPlanDetail/".concat(t),a).then((function(e){console.log(e.data),x()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},n.state={planname:"",plannameList:[],short_desc:"",title:"",long_desc:"",highlight_desc:"",upload_pdf:[],selectedFile:null,plan_max:"",plan_deductible:"",coverageAmt:"",start_date:"",end_date:"",total:"",email:"",coverage_area:"",dob:"",allPlan:"",PlanDetailsView:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(n.a)(O().mark((function e(){var t,a,n,r,l,o,i,c,s,m,u,d,h,p,f=this;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.match.params.id,t=this.props.location.state,a=t.planname,n=t.title,r=t.short_desc,l=t.coverageAmt,o=t.coverage_area,i=t.dob,c=t.email,s=t.end_date,m=t.highlight_desc,u=t.plan_deductible,d=t.plan_max,h=t.start_date,p=t.total,this.setState({allPlan:a._id,title:n,short_desc:r,coverageAmt:l,coverage_area:o,dob:i,email:c,end_date:s,highlight_desc:m,plan_deductible:u,plan_max:d,start_date:h,total:p}),e.next=5,w.a.get("/user/infPlanList").then((function(e){f.setState({plannameList:e.data})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(h.a,{listTag:"div"},m.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(p.a,{href:"/app/plans/CreatedPlanList",tag:"a"},"Plan DetailList"),m.a.createElement(p.a,{active:!0}," EditPlan Detail"))))),m.a.createElement(f.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"EditPlan Detail")),m.a.createElement(d.a,null,m.a.createElement(L.b,{render:function(e){var t=e.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/plans/PlanDetailList")}},"Back")}}))),m.a.createElement(v.a,null,m.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Plan Name"),m.a.createElement(E.a,{type:"select",name:"allPlan",value:this.state.allPlan,onChange:this.changeHandler1},this.state.plannameList&&(null===(e=this.state.plannameList)||void 0===e?void 0:e.map((function(e){return m.a.createElement("option",{selected:t.state.allPlan,value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.planName)}))))),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Title"),m.a.createElement(_.a,{required:!0,type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Upload Pdf"),m.a.createElement(_.a,{className:"form-control",type:"file",name:"upload_pdf",onChange:this.handleImage})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Plan Max"),m.a.createElement(_.a,{type:"text",name:"plan_max",placeholder:"Plan Max",value:this.state.plan_max,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Plan Deductible"),m.a.createElement(_.a,{type:"number",name:"plan_deductible",placeholder:"Plan Deductible",value:this.state.plan_deductible,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"CoverageAmt"),m.a.createElement(_.a,{type:"number",name:"coverageAmt",placeholder:"CoverageAmt",value:this.state.coverageAmt,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Start Date"),m.a.createElement(_.a,{type:"date",name:"start_date",value:this.state.start_date,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"End Date"),m.a.createElement(_.a,{type:"date",name:"end_date",value:this.state.end_date,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Total"),m.a.createElement(_.a,{type:"number",name:"total",placeholder:"Total",value:this.state.total,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Email"),m.a.createElement(_.a,{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Coverage Area"),m.a.createElement(_.a,{type:"text",name:"coverage_area",placeholder:"Coverage Area",value:this.state.coverage_area,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"DOB"),m.a.createElement(_.a,{type:"date",name:"dob",value:this.state.dob,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Descripition"),m.a.createElement(C.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),m.a.createElement(u.a,{className:"m-1"},m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mt-1"},m.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update PlanDetail")))))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=158.be6c8f23.chunk.js.map