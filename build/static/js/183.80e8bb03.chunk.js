(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[183],{2435:function(e,a,t){"use strict";t.r(a);var i=t(13),n=t(14),r=t(15),l=t(16),o=t(0),d=t.n(o),c=t(783),s=t(1159),u=t(1157),m=t(1158),f=t(1162),v=t(789),h=t(792),g=t(790),p=t(788),w=t(1167),D=t(172),N=t(800),S=t(565),E=t(259),R=t(169),k=(t(801),t(795)),z=t.n(k),b=(t(807),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],switchState:!1,isCheck:!1,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"User Phone Number",field:"UserPhoneNumber",width:200,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t?void 0:t.mobileNo)}},{headerName:"Actual Life declaration due date",field:"ActualLifedeclarationduedate",width:300,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.nextDeclarationDate)}},{headerName:"Revised Life declaration due date",field:"RevisedLifedeclarationduedate",width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Last Life declaration on due date offerted to Nominee/User",field:"Lifedeclarationduedate",width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Date of User Status Confirmation mail shared with nominee",field:"Lifedeclarationduedate",width:400,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.dateOfUserStatusConfirmationMailNominee)}},{headerName:"Date of Response Reveived from nominee",field:"DateofResponse",width:400,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.dateOfResponseReceivedNominee)}},{headerName:"Response Reveived from nominee",field:"DateofResponse",width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Date of death certificate requesting mail shared with nominee",field:"DateofResponse",width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Date of death certificate received from nominee",field:"DateofResponse",width:400,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Death certificate Validation Status",field:"DateofResponse",width:350,cellRendererFramework:function(a){return console.log(a.data),d.a.createElement(c.a,{type:"switch",id:a.data._id,name:"item_name",label:"",inline:!0,checked:a.data.deadCertificateValidationStatus,onChange:function(t){return e.toggleSwitch(t.target.checked,a.data._id)}})}},{headerName:"Date of Validation Status mail shared with nominee",field:"DateofResponse",width:400,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Date of asset details shared with nominee",field:"DateofResponse",width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Date of receiving of asset details receiving confirmation from nominee",field:"DateofResponse",width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}},{headerName:"Loop Status",field:"DateofResponse",width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.lastDeclarationDate)}}]},e.AssetList=function(){S.a.get("/life-declaration/view-user-status").then((function(a){var t;console.log(a.data.User);var i=null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.User;e.setState({rowData:i})})).catch((function(e){z()("Something Went Wrong")}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.toggleSwitch=function(a,t){console.log(a),e.setState({switchState:a})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.AssetList()}},{key:"runthisfunction",value:function(e){var a=this;z()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":S.a.delete("/asset/delete-asset/".concat(e)).then((function(e){a.AssetList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,n=a.defaultColDef;return d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},d.a.createElement(u.a,{className:"m-1"},d.a.createElement(m.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Life Declaration List")),d.a.createElement(m.a,{className:""})),d.a.createElement(f.a,{className:"py-0"},null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(E.a,{className:"ml-50",size:15})),d.a.createElement(g.a,{right:!0},d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap  mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(w.a,{className:"cssformanageassetinput cssmartopmargin",placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",null,d.a.createElement(D.a.Ripple,{className:"cssmartopmargin",color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(R.a.Consumer,null,(function(a){return d.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(d.a.Component));a.default=b},808:function(e,a){}}]);
//# sourceMappingURL=183.80e8bb03.chunk.js.map