(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[245],{2430:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),l=t(15),i=t(16),c=t(0),d=t.n(c),o=t(1155),s=t(1156),u=t(1157),m=t(172),p=t(1160),f=t(789),h=t(792),g=t(790),v=t(788),w=t(1165),E=t(565),N=t(169),_=t(799),k=t(304),x=t(301),b=t(437),P=t(259),y=(t(800),t(566),t(56)),D=t(795),C=t.n(D),R=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(y.b,{render:function(e){var t=e.history;return d.a.createElement(k.a,{className:"mr-50",color:"green",size:20,onClick:function(){return t.push("/app/plan/ViewPlanPrice/".concat(a.data._id))}})}}),d.a.createElement(y.b,{render:function(e){var t=e.history;return d.a.createElement(x.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return t.push("/app/plan/EditPlanPrice//".concat(a.data._id))}})}}),d.a.createElement(b.a,{size:20,color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}},{headerName:"PlanPriceID",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:250,filter:!0},{headerName:"ageMin",field:"EndDate",width:250,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.ageMin))}},{headerName:"ageMax",field:"planMinDays",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.ageMax))}},{headerName:"dependentPrice",field:"dependentPrice",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.dependentPrice))}},{headerName:"cansupportCouple",field:"cansupportCouple",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.cansupportCouple))}},{headerName:"cansupportChild",field:"cansupportChild",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.cansupportChild))}},{headerName:"InduvisualFee",field:"planMaximum",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.IndividualFee))}},{headerName:"Couple_singlechild_fee",field:"Couple_singlechild_fee",width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.Couple_singlechild_fee))}},{headerName:"Couple_withChildren_fee",field:"Couple_withChildren_fee",width:200,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.Couple_withChildren_fee))}},{headerName:"parent_with_child",field:"parent_with_child",width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.parent_with_child))}},{headerName:"parent_with_children",field:"parent_with_children",width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.parent_with_children))}},{headerName:"policy_ID_fk",field:"Maximum",width:200,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.policy_ID_fk)||void 0===t?void 0:t._id))}},{headerName:"plan_combID_fk",field:"policy_ID_fk",width:200,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.policy_ID_fk)||void 0===t?void 0:t._id))}},{headerName:"policyName_fk",field:"Maximum",width:200,cellRendererFramework:function(e){var a,t,n;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.planType_fk)||void 0===t||null===(n=t.planType[0])||void 0===n?void 0:n.plan_type))}},{headerName:"planType_fk",field:"Maximum",width:200,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.policy_ID_fk)||void 0===t?void 0:t.policyName))}},{headerName:"planMaximum_fk",field:"Maximum",width:250,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.planType_fk)||void 0===t?void 0:t.planMaximum))}},{headerName:"plandeductible_fk",field:"Maximum",width:250,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.planType_fk)||void 0===t?void 0:t.preexDeductible))}},{headerName:"preexDed_fk",field:"Maximum",width:250,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data.planType_fk)||void 0===a?void 0:a.planDeductible))}},{headerName:"preexCov_fk",field:"Maximum",width:250,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data.planType_fk)||void 0===a?void 0:a.preexCoverage))}},{headerName:"policy_active_fk",field:"Maximum",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.preexDeductible))}},{headerName:"comb_active_fk",field:"Maximum",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.preexDeductible))}},{headerName:"ageRange_active",field:"ageRange_active",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.preexDeductible))}},{headerName:"Status",field:"status",filter:!0,width:250,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}}]},e.getOptionDataList=function(){E.a.get("/plan-price/view-plan-price").then((function(a){console.log(a.data.PlanPrice),e.setState({rowData:a.data.PlanPrice})}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getOptionDataList()}},{key:"runthisfunction",value:function(e){var a=this;C()("Do You Want To Delete","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":E.a.delete("/plan/delete-plan/".concat(e)).then((function(e){a.getOptionDataList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return d.a.createElement(o.a,{className:"app-user-list"},d.a.createElement(s.a,{sm:"12"}),d.a.createElement(s.a,{sm:"12"},d.a.createElement(u.a,null,d.a.createElement(o.a,{className:"m-2"},d.a.createElement(s.a,null,d.a.createElement("h1",{sm:"6",className:"float-left"},"ListPlanPrice List")),d.a.createElement(s.a,{className:"pt-4"},d.a.createElement(y.b,{render:function(e){var a=e.history;return d.a.createElement(m.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/plan/AddplanPrice")}},"Add PlanPrice")}}))),d.a.createElement(p.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(f.a,{className:"p-1 ag-dropdown"},d.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(P.a,{className:"ml-50",size:15})),d.a.createElement(g.a,{right:!0},d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(w.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(N.a.Consumer,null,(function(a){return d.a.createElement(_.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component);a.default=R}}]);
//# sourceMappingURL=245.32745b62.chunk.js.map