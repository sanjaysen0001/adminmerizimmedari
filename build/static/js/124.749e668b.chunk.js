(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[124],{2405:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(51),i=n(13),l=n(14),s=n(171),o=n(15),r=n(16),c=n(0),u=n.n(c),p=n(1155),d=n(1156),m=n(1153),h=n(1154),g=n(1157),C=n(172),f=n(1160),v=n(1163),y=n(1164),b=n(812),E=n(1165),S=n(565),x=(n(27),n(795)),O=n.n(x),D=n(56),V=n(883),w=n.n(V),k=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(i.a)(this,n),(l=t.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.planTypeList=function(){S.a.get("/admin/get_plan_typ").then((function(e){console.log(e.data.data),l.setState({list:e.data.data})})).catch((function(e){O()("Something Went Wrong")}))},l.PlanBenefitsList=function(){S.a.get("/benefite/view-benefite").then((function(e){l.setState({planBenefitsList:e.data.Benefite})}))},l.AllPolicyList=function(){S.a.get("/admin/get_policies").then((function(e){l.setState({policyList:e.data.data})}))},l.changeHandler=function(e){l.setState(Object(a.a)({},e.target.name,e.target.value))},l.handlePlanBenefits=function(e){var t=e.target,n=t.name,i=t.value;console.log(i),l.setState(Object(a.a)({},n,i))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state.error);var t={planMinDays:l.state.planMinDays,planType:l.state.planType,agesupportMin:l.state.agesupportMin,agesupportMax:l.state.agesupportMax,planMaximum:l.state.planMaximum,planDeductible:l.state.planDeductible,preexCoverage:l.state.preexCoverage,preexMaxCoverage:l.state.preexMaxCoverage,CoverageCntry:l.state.CoverageCntry,planBenefitsCode_fk:l.state.planBenefitsCode_fk,preexDeductible:l.state.preexDeductible,policy_ID_fk:l.state.policy_ID_fk,status:l.state.status};console.log(t),S.a.post("/plan/save-plan",t).then((function(e){O()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/plans/PlanList")})).catch((function(e){console.log(e)}))},l.state={planMinDays:"",planType:[],agesupportMin:null,agesupportMax:null,planMaximum:"",planDeductible:"",preexCoverage:"",preexDeductible:"",preexMaxCoverage:null,CoverageCntry:"",policy_combination_active:"",selectedValue:"",list:[],planBenefitsCode_fk:"",policy_ID_fk:"",planBenefitsList:[],policyList:[],error:""},l.onSelect=l.onSelect.bind(Object(s.a)(l)),l.onRemove=l.onRemove.bind(Object(s.a)(l)),l}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.PlanBenefitsList(),this.AllPolicyList(),this.planTypeList()}},{key:"onSelect",value:function(e,t){console.log(e.length),this.setState({planType:e})}},{key:"onRemove",value:function(e,t){console.log(e),this.setState({planType:e})}},{key:"render",value:function(){var e,t;return u.a.createElement("div",null,u.a.createElement(p.a,null,u.a.createElement(d.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(m.a,{listTag:"div"},u.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(h.a,{href:"",tag:"a"},"Plan List"),u.a.createElement(h.a,{active:!0},"Add Plan"))))),u.a.createElement(g.a,null,u.a.createElement(p.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Plan")),u.a.createElement(d.a,null,u.a.createElement(D.b,{render:function(e){var t=e.history;return u.a.createElement(C.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/plans/PlanList")}},"Back")}}))),u.a.createElement(f.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},u.a.createElement(y.a,{for:"data-category"},"PlanMinDays"),u.a.createElement(b.a,null,u.a.createElement(E.a,{type:"select",required:!0,id:"data-category",name:"planMinDays",value:this.state.planMinDays,onChange:this.handlePlanBenefits,defaultValue:""},u.a.createElement("option",{disabled:!0,value:""},"Select PlanMinDays"),u.a.createElement("option",{value:"5"},"5"),u.a.createElement("option",{value:"15"},"15"),u.a.createElement("option",{value:"30"},"30"),u.a.createElement("option",{value:"60"},"60"),u.a.createElement("option",{value:"90"},"90")))),u.a.createElement(d.a,{className:"",lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,{for:"data-category"},"Plan Type"),u.a.createElement(w.a,{options:this.state.list,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"plan_type"}),u.a.createElement("span",{style:{color:"red"}},this.state.error)),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"AgesupportMin"),u.a.createElement(E.a,{required:!0,type:"number",name:"agesupportMin",placeholder:"AgesupportMin",value:this.state.agesupportMin,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"AgesupportMax"),u.a.createElement(E.a,{required:!0,type:"number",name:"agesupportMax",placeholder:"AgesupportMax",value:this.state.agesupportMax,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"planMaximum"),u.a.createElement(E.a,{required:!0,type:"number",name:"planMaximum",placeholder:"planMaximum",value:this.state.planMaximum,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},u.a.createElement(y.a,{for:"data-category"},"PlanDeductible"),u.a.createElement(b.a,null,u.a.createElement(E.a,{type:"select",id:"data-category",required:!0,name:"planDeductible",value:this.state.planDeductible,onChange:this.handlePlanBenefits,defaultValue:""},u.a.createElement("option",{disabled:!0,value:""},"Select planDeductible"),u.a.createElement("option",{value:"0"},"0"),u.a.createElement("option",{value:"50"},"50"),u.a.createElement("option",{value:"75"},"75"),u.a.createElement("option",{value:"100"},"100"),u.a.createElement("option",{value:"250"},"250"),u.a.createElement("option",{value:"500"},"500"),u.a.createElement("option",{value:"1000"},"1000"),u.a.createElement("option",{value:"2500"},"2500"),u.a.createElement("option",{value:"5000"},"5000"),u.a.createElement("option",{value:"10000"},"10000")))),u.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},u.a.createElement(y.a,{for:"data-category"},"PreexCoverage"),u.a.createElement(b.a,null,u.a.createElement(E.a,{type:"select",id:"data-category",required:!0,name:"preexCoverage",value:this.state.preexCoverage,onChange:this.handlePlanBenefits,defaultValue:""},u.a.createElement("option",{value:"",disabled:!0},"Select PreexCoverage"),u.a.createElement("option",{value:"NO"},"NO"),u.a.createElement("option",{value:"YES"},"YES"),u.a.createElement("option",{value:"ACUTE"},"ACUTE")))),u.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},u.a.createElement(y.a,{for:"data-category"},"Policy"),u.a.createElement(b.a,null,u.a.createElement(E.a,{type:"select",required:!0,id:"data-category",name:"policy_ID_fk",value:this.state.policy_ID_fk,onChange:this.handlePlanBenefits,defaultValue:""},u.a.createElement("option",{disabled:!0,value:""},"Select Policy"),null===(e=this.state.policyList)||void 0===e?void 0:e.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.policyName)}))))),u.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},u.a.createElement(y.a,{for:"data-category"},"PlanBenefits "),u.a.createElement(b.a,null,u.a.createElement(E.a,{type:"select",id:"data-category",required:!0,name:"planBenefitsCode_fk",value:this.state.planBenefitsCode_fk,onChange:this.handlePlanBenefits,defaultValue:""},u.a.createElement("option",{disabled:!0,value:""},"Select PlanBenefit"),null===(t=this.state.planBenefitsList)||void 0===t?void 0:t.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.planBenefitsCode)}))))),u.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:""},u.a.createElement(y.a,{for:"data-category"},"PreexDeductible"),u.a.createElement(b.a,null,u.a.createElement(E.a,{type:"select",id:"data-category",required:!0,name:"preexDeductible",value:this.state.preexDeductible,onChange:this.handlePlanBenefits,defaultValue:""},u.a.createElement("option",{disabled:!0,value:""},"Select PreexDeductible"),u.a.createElement("option",{value:"0"},"0"),u.a.createElement("option",{value:"75"},"75"),u.a.createElement("option",{value:"100"},"100"),u.a.createElement("option",{value:"250"},"250"),u.a.createElement("option",{value:"500"},"500"),u.a.createElement("option",{value:"750"},"750"),u.a.createElement("option",{value:"1000"},"1000"),u.a.createElement("option",{value:"1500"},"1500"),u.a.createElement("option",{value:"2000"},"2000"),u.a.createElement("option",{value:"2500"},"2500"),u.a.createElement("option",{value:"5000"},"5000"),u.a.createElement("option",{value:"10000"},"10000")))),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"PreexMaxCoverage"),u.a.createElement(E.a,{required:!0,type:"number",name:"preexMaxCoverage",placeholder:"preexMaxCoverage",value:this.state.preexMaxCoverage,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"CoverageCntry"),u.a.createElement(E.a,{required:!0,type:"number",name:"CoverageCntry",placeholder:"CoverageCntry",value:this.state.CoverageCntry,onChange:this.changeHandler}))),u.a.createElement(p.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(C.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Plan")))))))}}]),n}(c.Component)},812:function(e,t,n){"use strict";var a=n(5),i=n(9),l=n(0),s=n.n(l),o=n(1),r=n.n(o),c=n(4),u=n.n(c),p=n(3),d=["className","cssModule","row","disabled","check","inline","tag"],m={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:p.tagPropType,className:r.a.string,cssModule:r.a.object},h=function(e){var t=e.className,n=e.cssModule,l=e.row,o=e.disabled,r=e.check,c=e.inline,m=e.tag,h=Object(i.a)(e,d),g=Object(p.mapToCssModules)(u()(t,!!l&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!o)&&"disabled"),n);return"fieldset"===m&&(h.disabled=o),s.a.createElement(m,Object(a.a)({},h,{className:g}))};h.propTypes=m,h.defaultProps={tag:"div"},t.a=h},883:function(e,t,n){"use strict";e.exports=n(914)},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(0),l=(a=i)&&"object"==typeof a&&"default"in a?a.default:a;function s(e,t){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.multiSelectContainer,.multiSelectContainer *,.multiSelectContainer :after,.multiSelectContainer :before{box-sizing:border-box}.multiSelectContainer{position:relative;text-align:left;width:100%}.disable_ms{opacity:.5;pointer-events:none}.display-none{display:none}.searchWrapper{border:1px solid #ccc;border-radius:4px;min-height:22px;padding:5px;position:relative}.multiSelectContainer input{background:transparent;border:none;margin-top:3px}.multiSelectContainer input:focus{outline:none}.chip{align-items:center;background:#0096fb;border-radius:11px;color:#fff;display:inline-flex;font-size:13px;line-height:19px;margin-bottom:5px;margin-right:5px;padding:4px 10px}.chip,.singleChip{white-space:nowrap}.singleChip{background:none;border-radius:none;color:inherit}.singleChip i{display:none}.closeIcon{cursor:pointer;float:right;height:13px;margin-left:5px;width:13px}.optionListContainer{background:#fff;border-radius:4px;margin-top:1px;position:absolute;width:100%;z-index:2}.multiSelectContainer ul{border:1px solid #ccc;border-radius:4px;display:block;margin:0;max-height:250px;overflow-y:auto;padding:0}.multiSelectContainer li{padding:10px}.multiSelectContainer li:hover{background:#0096fb;color:#fff;cursor:pointer}.checkbox{margin-right:10px}.disableSelection{opacity:.5;pointer-events:none}.highlightOption{background:#0096fb;color:#fff}.displayBlock{display:block}.displayNone{display:none}.notFound{display:block;padding:10px}.singleSelect{padding-right:20px}li.groupHeading{color:#908e8e;padding:5px 15px;pointer-events:none}li.groupChildEle{padding-left:30px}.icon_down_dir{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:14px}.icon_down_dir:before{content:"\\e803"}.custom-close{display:flex}');var r={circle:"data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M256%2C33C132.3%2C33%2C32%2C133.3%2C32%2C257c0%2C123.7%2C100.3%2C224%2C224%2C224c123.7%2C0%2C224-100.3%2C224-224C480%2C133.3%2C379.7%2C33%2C256%2C33z%20%20%20%20M364.3%2C332.5c1.5%2C1.5%2C2.3%2C3.5%2C2.3%2C5.6c0%2C2.1-0.8%2C4.2-2.3%2C5.6l-21.6%2C21.7c-1.6%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3L256%2C289.8%20%20%20l-75.4%2C75.7c-1.5%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1%2C0.8-4.2%2C2.3-5.6l75.7-76%20%20%20l-75.9-75c-3.1-3.1-3.1-8.2%2C0-11.3l21.6-21.7c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l75.7%2C74.7l75.7-74.7%20%20%20c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l21.6%2C21.7c3.1%2C3.1%2C3.1%2C8.2%2C0%2C11.3l-75.9%2C75L364.3%2C332.5z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",circle2:"data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2096%2096%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M48%2C0A48%2C48%2C0%2C1%2C0%2C96%2C48%2C48.0512%2C48.0512%2C0%2C0%2C0%2C48%2C0Zm0%2C84A36%2C36%2C0%2C1%2C1%2C84%2C48%2C36.0393%2C36.0393%2C0%2C0%2C1%2C48%2C84Z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M64.2422%2C31.7578a5.9979%2C5.9979%2C0%2C0%2C0-8.4844%2C0L48%2C39.5156l-7.7578-7.7578a5.9994%2C5.9994%2C0%2C0%2C0-8.4844%2C8.4844L39.5156%2C48l-7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C1%2C0%2C8.4844%2C8.4844L48%2C56.4844l7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C0%2C0%2C8.4844-8.4844L56.4844%2C48l7.7578-7.7578A5.9979%2C5.9979%2C0%2C0%2C0%2C64.2422%2C31.7578Z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",close:"data:image/svg+xml,%3Csvg%20height%3D%22135.467mm%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%2013547%2013547%22%20width%3D%22135.467mm%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Ebene_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20class%3D%22fil0%22%20points%3D%220%2C0%2013547%2C0%2013547%2C13547%200%2C13547%20%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil1%22%20d%3D%22M714%2012832l12118%200%200%20-12117%20-12118%200%200%2012117zm4188%20-2990l1871%20-1871%201871%201871%201197%20-1197%20-1871%20-1871%201871%20-1871%20-1197%20-1197%20-1871%201871%20-1871%20-1871%20-1197%201197%201871%201871%20-1871%201871%201197%201197z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",cancel:"data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M443.6%2C387.1L312.4%2C255.4l131.5-130c5.4-5.4%2C5.4-14.2%2C0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4%20%20L256%2C197.8L124.9%2C68.3c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4L68%2C105.9c-5.4%2C5.4-5.4%2C14.2%2C0%2C19.6l131.5%2C130L68.4%2C387.1%20%20c-2.6%2C2.6-4.1%2C6.1-4.1%2C9.8c0%2C3.7%2C1.4%2C7.2%2C4.1%2C9.8l37.4%2C37.6c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1L256%2C313.1l130.7%2C131.1%20%20c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1l37.4-37.6c2.6-2.6%2C4.1-6.1%2C4.1-9.8C447.7%2C393.2%2C446.2%2C389.7%2C443.6%2C387.1z%22%2F%3E%3C%2Fsvg%3E"};function c(e){var t,n,a=i.useRef(null);return n=e.outsideClick,i.useEffect((function(){function e(e){t.current&&!t.current.contains(e.target)&&n()}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t=a]),l.createElement("div",{ref:a},e.children)}var u=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={inputValue:"",options:t.options,filteredOptions:t.options,unfilteredOptions:t.options,selectedValues:Object.assign([],t.selectedValues),preSelectedValues:Object.assign([],t.selectedValues),toggleOptionsList:!1,highlightOption:t.avoidHighlightFirstOption?-1:0,showCheckbox:t.showCheckbox,keepSearchTerm:t.keepSearchTerm,groupedObject:[],closeIconType:r[t.closeIcon]||r.circle},n.optionTimeout=null,n.searchWrapper=l.createRef(),n.searchBox=l.createRef(),n.onChange=n.onChange.bind(o(n)),n.onKeyPress=n.onKeyPress.bind(o(n)),n.onFocus=n.onFocus.bind(o(n)),n.onBlur=n.onBlur.bind(o(n)),n.renderMultiselectContainer=n.renderMultiselectContainer.bind(o(n)),n.renderSelectedList=n.renderSelectedList.bind(o(n)),n.onRemoveSelectedItem=n.onRemoveSelectedItem.bind(o(n)),n.toggelOptionList=n.toggelOptionList.bind(o(n)),n.onArrowKeyNavigation=n.onArrowKeyNavigation.bind(o(n)),n.onSelectItem=n.onSelectItem.bind(o(n)),n.filterOptionsByInput=n.filterOptionsByInput.bind(o(n)),n.removeSelectedValuesFromOptions=n.removeSelectedValuesFromOptions.bind(o(n)),n.isSelectedValue=n.isSelectedValue.bind(o(n)),n.fadeOutSelection=n.fadeOutSelection.bind(o(n)),n.isDisablePreSelectedValues=n.isDisablePreSelectedValues.bind(o(n)),n.renderGroupByOptions=n.renderGroupByOptions.bind(o(n)),n.renderNormalOption=n.renderNormalOption.bind(o(n)),n.listenerCallback=n.listenerCallback.bind(o(n)),n.resetSelectedValues=n.resetSelectedValues.bind(o(n)),n.getSelectedItems=n.getSelectedItems.bind(o(n)),n.getSelectedItemsCount=n.getSelectedItemsCount.bind(o(n)),n.hideOnClickOutside=n.hideOnClickOutside.bind(o(n)),n.onCloseOptionList=n.onCloseOptionList.bind(o(n)),n.isVisible=n.isVisible.bind(o(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n);var i=a.prototype;return i.initialSetValue=function(){var e=this.props,t=e.groupBy,n=this.state.options;e.showCheckbox||e.singleSelect||this.removeSelectedValuesFromOptions(!1),t&&this.groupByOptions(n)},i.resetSelectedValues=function(){var e=this,t=this.state.unfilteredOptions;return new Promise((function(n){e.setState({selectedValues:[],preSelectedValues:[],options:t,filteredOptions:t},(function(){n(),e.initialSetValue()}))}))},i.getSelectedItems=function(){return this.state.selectedValues},i.getSelectedItemsCount=function(){return this.state.selectedValues.length},i.componentDidMount=function(){this.initialSetValue(),this.searchWrapper.current.addEventListener("click",this.listenerCallback)},i.componentDidUpdate=function(e){var t=this.props,n=t.options,a=t.selectedValues,i=e.selectedValues;JSON.stringify(e.options)!==JSON.stringify(n)&&this.setState({options:n,filteredOptions:n,unfilteredOptions:n},this.initialSetValue),JSON.stringify(i)!==JSON.stringify(a)&&this.setState({selectedValues:Object.assign([],a),preSelectedValues:Object.assign([],a)},this.initialSetValue)},i.listenerCallback=function(){this.searchBox.current.focus()},i.componentWillUnmount=function(){this.optionTimeout&&clearTimeout(this.optionTimeout),this.searchWrapper.current.removeEventListener("click",this.listenerCallback)},i.removeSelectedValuesFromOptions=function(e){var t=this.props,n=t.isObject,a=t.displayValue,i=t.groupBy,l=this.state,s=l.selectedValues,o=void 0===s?[]:s,r=l.unfilteredOptions;if(!e&&i&&this.groupByOptions(l.options),o.length||e){if(n){var c=r.filter((function(e){return-1===o.findIndex((function(t){return t[a]===e[a]}))}));return i&&this.groupByOptions(c),void this.setState({options:c,filteredOptions:c},this.filterOptionsByInput)}var u=r.filter((function(e){return-1===o.indexOf(e)}));this.setState({options:u,filteredOptions:u},this.filterOptionsByInput)}},i.groupByOptions=function(e){var t=this.props.groupBy,n=e.reduce((function(e,n){var a=n[t]||"Others";return e[a]=e[a]||[],e[a].push(n),e}),Object.create({}));this.setState({groupedObject:n})},i.onChange=function(e){var t=this.props.onSearch;this.setState({inputValue:e.target.value},this.filterOptionsByInput),t&&t(e.target.value)},i.onKeyPress=function(e){var t=this.props.onKeyPressFn;t&&t(e,e.target.value)},i.filterOptionsByInput=function(){var e,t=this,n=this.state,a=n.inputValue,i=this.props,l=i.displayValue;e=n.filteredOptions.filter(i.isObject?function(e){return t.matchValues(e[l],a)}:function(e){return t.matchValues(e,a)}),this.groupByOptions(e),this.setState({options:e})},i.matchValues=function(e,t){return this.props.caseSensitiveSearch?e.indexOf(t)>-1:e.toLowerCase?e.toLowerCase().indexOf(t.toLowerCase())>-1:e.toString().indexOf(t)>-1},i.onArrowKeyNavigation=function(e){var t=this.state,n=t.options,a=t.highlightOption,i=t.toggleOptionsList,l=t.selectedValues;if(8!==e.keyCode||t.inputValue||this.props.disablePreSelectedValues||!l.length||this.onRemoveSelectedItem(l.length-1),n.length)if(38===e.keyCode)this.setState(a>0?function(e){return{highlightOption:e.highlightOption-1}}:{highlightOption:n.length-1});else if(40===e.keyCode)this.setState(a<n.length-1?function(e){return{highlightOption:e.highlightOption+1}}:{highlightOption:0});else if("Enter"===e.key&&n.length&&i){if(-1===a)return;this.onSelectItem(n[a])}},i.onRemoveSelectedItem=function(e){var t,n=this,a=this.state.selectedValues,i=this.props,l=i.onRemove,s=i.showCheckbox,o=i.displayValue;t=i.isObject?a.findIndex((function(t){return t[o]===e[o]})):a.indexOf(e),a.splice(t,1),l(a,e),this.setState({selectedValues:a},(function(){s||n.removeSelectedValuesFromOptions(!0)})),this.props.closeOnSelect||this.searchBox.current.focus()},i.onSelectItem=function(e){var t=this,n=this.state.selectedValues,a=this.props,i=a.selectionLimit,l=a.onSelect,s=a.singleSelect,o=a.showCheckbox;if(this.state.keepSearchTerm||this.setState({inputValue:""}),s)return this.onSingleSelect(e),void l([e],e);this.isSelectedValue(e)?this.onRemoveSelectedItem(e):i!=n.length&&(n.push(e),l(n,e),this.setState({selectedValues:n},(function(){o?t.filterOptionsByInput():t.removeSelectedValuesFromOptions(!0)})),this.props.closeOnSelect||this.searchBox.current.focus())},i.onSingleSelect=function(e){this.setState({selectedValues:[e],toggleOptionsList:!1})},i.isSelectedValue=function(e){var t=this.props,n=t.displayValue,a=this.state.selectedValues;return t.isObject?a.filter((function(t){return t[n]===e[n]})).length>0:a.filter((function(t){return t===e})).length>0},i.renderOptionList=function(){var e=this.props,t=e.groupBy,n=e.style,a=e.emptyRecordMsg,i=e.loadingMessage,s=void 0===i?"loading...":i,o=this.state.options;return e.loading?l.createElement("ul",{className:"optionContainer",style:n.optionContainer},"string"==typeof s&&l.createElement("span",{style:n.loadingMessage,className:"notFound"},s),"string"!=typeof s&&s):l.createElement("ul",{className:"optionContainer",style:n.optionContainer},0===o.length&&l.createElement("span",{style:n.notFound,className:"notFound"},a),t?this.renderGroupByOptions():this.renderNormalOption())},i.renderGroupByOptions=function(){var e=this,t=this.props,n=t.isObject,a=void 0!==n&&n,i=t.displayValue,s=t.showCheckbox,o=t.style,r=t.singleSelect,c=this.state.groupedObject;return Object.keys(c).map((function(t){return l.createElement(l.Fragment,{key:t},l.createElement("li",{className:"groupHeading",style:o.groupHeading},t),c[t].map((function(t,n){var c=e.isSelectedValue(t);return l.createElement("li",{key:"option"+n,style:o.option,className:"groupChildEle option "+(c?"selected":"")+" "+(e.fadeOutSelection(t)?"disableSelection":"")+" "+(e.isDisablePreSelectedValues(t)?"disableSelection":""),onClick:function(){return e.onSelectItem(t)}},s&&!r&&l.createElement("input",{type:"checkbox",className:"checkbox",readOnly:!0,checked:c}),e.props.optionValueDecorator(a?t[i]:(t||"").toString(),t))})))}))},i.renderNormalOption=function(){var e=this,t=this.props,n=t.isObject,a=void 0!==n&&n,i=t.displayValue,s=t.showCheckbox,o=t.style,r=t.singleSelect,c=this.state.highlightOption;return this.state.options.map((function(t,n){var u=e.isSelectedValue(t);return l.createElement("li",{key:"option"+n,style:o.option,className:"option "+(u?"selected":"")+" "+(c===n?"highlightOption highlight":"")+" "+(e.fadeOutSelection(t)?"disableSelection":"")+" "+(e.isDisablePreSelectedValues(t)?"disableSelection":""),onClick:function(){return e.onSelectItem(t)}},s&&!r&&l.createElement("input",{type:"checkbox",readOnly:!0,className:"checkbox",checked:u}),e.props.optionValueDecorator(a?t[i]:(t||"").toString(),t))}))},i.renderSelectedList=function(){var e=this,t=this.props,n=t.isObject,a=void 0!==n&&n,i=t.displayValue,s=t.style,o=t.singleSelect,r=t.customCloseIcon,c=this.state,u=c.closeIconType;return c.selectedValues.map((function(t,n){return l.createElement("span",{className:"chip  "+(o&&"singleChip")+" "+(e.isDisablePreSelectedValues(t)&&"disableSelection"),key:n,style:s.chips},e.props.selectedValueDecorator(a?t[i]:(t||"").toString(),t),!e.isDisablePreSelectedValues(t)&&(r?l.createElement("i",{className:"custom-close",onClick:function(){return e.onRemoveSelectedItem(t)}},r):l.createElement("img",{className:"icon_cancel closeIcon",src:u,onClick:function(){return e.onRemoveSelectedItem(t)}})))}))},i.isDisablePreSelectedValues=function(e){var t=this.props,n=t.displayValue,a=this.state.preSelectedValues;return!(!t.disablePreSelectedValues||!a.length)&&(t.isObject?a.filter((function(t){return t[n]===e[n]})).length>0:a.filter((function(t){return t===e})).length>0)},i.fadeOutSelection=function(e){var t=this.props,n=t.selectionLimit;if(!t.singleSelect){var a=this.state.selectedValues;return-1!=n&&n==a.length&&(n==a.length?!t.showCheckbox||!this.isSelectedValue(e):void 0)}},i.toggelOptionList=function(){this.setState({toggleOptionsList:!this.state.toggleOptionsList,highlightOption:this.props.avoidHighlightFirstOption?-1:0})},i.onCloseOptionList=function(){this.setState({toggleOptionsList:!1,highlightOption:this.props.avoidHighlightFirstOption?-1:0,inputValue:""})},i.onFocus=function(){this.state.toggleOptionsList?clearTimeout(this.optionTimeout):this.toggelOptionList()},i.onBlur=function(){this.setState({inputValue:""},this.filterOptionsByInput),this.optionTimeout=setTimeout(this.onCloseOptionList,250)},i.isVisible=function(e){return!!e&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},i.hideOnClickOutside=function(){var e=this,t=document.getElementsByClassName("multiselect-container")[0];document.addEventListener("click",(function(n){t&&!t.contains(n.target)&&e.isVisible(t)&&e.toggelOptionList()}))},i.renderMultiselectContainer=function(){var e=this.state,t=e.inputValue,n=e.toggleOptionsList,a=e.selectedValues,i=this.props,s=i.placeholder,o=i.style,r=i.singleSelect,c=i.id,u=i.name,p=i.hidePlaceholder,d=i.disable,m=i.showArrow,h=i.customArrow;return l.createElement("div",{className:"multiselect-container multiSelectContainer "+(d?"disable_ms":"")+" "+(i.className||""),id:c||"multiselectContainerReact",style:o.multiselectContainer},l.createElement("div",{className:"search-wrapper searchWrapper "+(r?"singleSelect":""),ref:this.searchWrapper,style:o.searchBox,onClick:r?this.toggelOptionList:function(){}},!i.hideSelectedList&&this.renderSelectedList(),l.createElement("input",{type:"text",ref:this.searchBox,className:"searchBox "+(r&&a.length?"display-none":""),id:(c||"search")+"_input",name:(u||"search_name")+"_input",onChange:this.onChange,onKeyPress:this.onKeyPress,value:t,onFocus:this.onFocus,onBlur:this.onBlur,placeholder:r&&a.length||p&&a.length?"":s,onKeyDown:this.onArrowKeyNavigation,style:o.inputField,autoComplete:"off",disabled:r||d}),(r||m)&&l.createElement(l.Fragment,null,h?l.createElement("span",{className:"icon_down_dir"},h):l.createElement("img",{src:"data:image/svg+xml,%3Csvg%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cg%20id%3D%22background%22%3E%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22none%22%20height%3D%2232%22%20width%3D%2232%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%20%3Cg%20id%3D%22arrow_x5F_down%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%222.002%2C10%2016.001%2C24%2030.002%2C10%20%20%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",className:"icon_cancel icon_down_dir"}))),l.createElement("div",{className:"optionListContainer "+(n?"displayBlock":"displayNone"),onMouseDown:function(e){e.preventDefault()}},this.renderOptionList()))},i.render=function(){return l.createElement(c,{outsideClick:this.onCloseOptionList},this.renderMultiselectContainer())},a}(l.Component);u.defaultProps={options:[],disablePreSelectedValues:!1,selectedValues:[],isObject:!0,displayValue:"model",showCheckbox:!1,selectionLimit:-1,placeholder:"Select",groupBy:"",style:{},emptyRecordMsg:"No Options Available",onSelect:function(){},onRemove:function(){},onKeyPressFn:function(){},closeIcon:"circle2",singleSelect:!1,caseSensitiveSearch:!1,id:"",name:"",closeOnSelect:!0,avoidHighlightFirstOption:!1,hidePlaceholder:!1,showArrow:!1,keepSearchTerm:!1,customCloseIcon:"",className:"",customArrow:void 0,selectedValueDecorator:function(e){return e},optionValueDecorator:function(e){return e}},t.Multiselect=u,t.default=u}}]);
//# sourceMappingURL=124.749e668b.chunk.js.map