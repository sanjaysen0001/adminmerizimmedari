(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[193],{2421:function(e,a,t){"use strict";t.r(a);var i=t(13),n=t(14),l=t(15),r=t(16),o=t(0),d=t.n(o),s=t(1157),u=t(1155),c=t(1156),m=t(1160),v=t(789),f=t(792),h=t(790),g=t(788),N=t(1165),w=t(172),p=t(800),E=t(564),S=t(259),b=t(169),P=(t(801),t(795)),k=t.n(P),z=(t(808),function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Asset Name",field:"assetname",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.assetType)}},{headerName:"Field 1 Status (Available / Not Available)",field:"field1status",filter:!0,width:350,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.Field_1)}},{headerName:"Field 2",field:"field2status",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.Field_2)}},{headerName:"Field 3",field:"field3status",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.Field_3)}},{headerName:"User ID",field:"userid",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.id)}},{headerName:"User Name",field:"username",filter:!0,width:150,cellRendererFramework:function(e){var a,t,i,n;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t?void 0:t.firstName," ",null===e||void 0===e||null===(i=e.data)||void 0===i||null===(n=i.userId)||void 0===n?void 0:n.lastName)}},{headerName:"User Phone Number",field:"userphonenumber",filter:!0,width:200,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t?void 0:t.mobileNo," ")}},{headerName:"Nominee Id",field:"nomineeid",filter:!0,width:150,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.nominee)||void 0===t?void 0:t._id," ")}},{headerName:"Nominee Name",field:"nomineename",filter:!0,width:180,cellRendererFramework:function(e){var a,t,i;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t||null===(i=t.nominee)||void 0===i?void 0:i.nomineeName," ")}},{headerName:"Relation with Nominee",field:"relationwithnominee",filter:!0,width:220,cellRendererFramework:function(e){var a,t,i;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t||null===(i=t.nominee)||void 0===i?void 0:i.relationWithNominee," ")}},{headerName:"Nominee Phone Number",field:"nomineephonenumber",filter:!0,width:240,cellRendererFramework:function(e){var a,t,i;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t||null===(i=t.nominee)||void 0===i?void 0:i.NomineePhoneNumber," ")}},{headerName:"Nominee Phone Number Verification Status",field:"nomineephonenumberverificationstatus",filter:!0,width:350,cellRendererFramework:function(e){var a,t,i;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t||null===(i=t.nominee)||void 0===i?void 0:i.mobileVerifyStatus," ")}},{headerName:"Nominee email ID",field:"nomineeemailid",filter:!0,width:220,cellRendererFramework:function(e){var a,t,i;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t||null===(i=t.nominee)||void 0===i?void 0:i.nomineeEmailId," ")}},{headerName:"Nominee Email Verification Status",field:"nomineeemailverificationstatus",filter:!0,width:300,cellRendererFramework:function(e){var a,t,i;return d.a.createElement("div",{className:""},null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.userId)||void 0===t||null===(i=t.nominee)||void 0===i?void 0:i.mailVerifyStatus," ")}}]},e.UserAssetData=function(){E.a.get("/asset/view-asset").then((function(a){console.log(a.data.Asset);var t=a.data.Asset;e.setState({rowData:t})})).catch((function(e){k()("Something Went Wrong")}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.UserAssetData()}},{key:"runthisfunction",value:function(e){var a=this;console.log(e),k()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":E.a.delete("/admin/dlt_plantyp/".concat(e)).then((function(e){a.planTypeList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,n=a.defaultColDef;return d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},d.a.createElement(u.a,{className:"m-1"},d.a.createElement(c.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"User Asset Data List")),d.a.createElement(c.a,{className:""})),d.a.createElement(m.a,{className:"py-0"},null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(S.a,{className:"ml-50",size:15})),d.a.createElement(h.a,{right:!0},d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(b.a.Consumer,null,(function(a){return d.a.createElement(p.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(d.a.Component));a.default=z},809:function(e,a){}}]);
//# sourceMappingURL=193.3cc9af2c.chunk.js.map