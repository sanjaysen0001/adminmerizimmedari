(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[195],{2423:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(14),i=a(15),l=a(16),c=a(0),o=a.n(c),s=a(1159),d=a(1157),m=a(1158),u=a(1162),f=a(789),h=a(792),g=a(790),p=a(788),w=a(1167),v=a(172),N=a(800),E=a(565),S=a(259),b=a(169),z=(a(801),a(795)),P=a.n(z),y=(a(807),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"User ID",field:"userid",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"User Name",field:"username",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"User Phone Number",field:"userphonenumber",filter:!0,width:250,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Transaction Date",field:"userphonenumber",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Description",field:"description",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Service Period",field:"serviceperiod",filter:!0,width:220,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Subscription plan",field:"subscriptionplan",filter:!0,width:220,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Payment method",field:"paymentmethod",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Subtotal",field:"subtotal",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Total",field:"total",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}},{headerName:"Download Invoice",field:"downloadinvoice",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",{className:""})}}]},e.TransactionReport=function(){E.a.get("/user-list").then((function(t){var a=t.data.User;e.setState({rowData:a})})).catch((function(e){P()("Something Went Wrong")}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.TransactionReport()}},{key:"runthisfunction",value:function(e){var t=this;console.log(e),P()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":E.a.delete("/admin/dlt_plantyp/".concat(e)).then((function(e){t.planTypeList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,r=t.columnDefs,n=t.defaultColDef;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},o.a.createElement(d.a,{className:"m-1"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Transaction Report List")),o.a.createElement(m.a,{className:""})),o.a.createElement(u.a,{className:"py-0"},null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(f.a,{className:"p-1 ag-dropdown"},o.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(S.a,{className:"ml-50",size:15})),o.a.createElement(g.a,{right:!0},o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(v.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(b.a.Consumer,null,(function(t){return o.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(o.a.Component));t.default=y},808:function(e,t){}}]);
//# sourceMappingURL=195.6c10dca7.chunk.js.map