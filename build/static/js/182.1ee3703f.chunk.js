(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[182],{2495:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),i=t(15),l=t(16),c=t(0),s=t.n(c),o=t(1154),d=t(1155),u=t(1156),m=t(1159),g=t(789),f=t(792),h=t(790),p=t(788),v=t(1174),E=t(172),w=t(799),S=t(169),N=t(437),z=t(259),P=t(564),b=(t(800),t(795)),D=t.n(b),y=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100},{headerName:"User Name",field:"firstname",width:150,cellRendererFramework:function(e){var a,t;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userId)||void 0===a?void 0:a.firstname," ",null===(t=e.data.userId)||void 0===t?void 0:t.lastname))}},{headerName:"Email ",field:"email",width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.email))}},{headerName:"Plan Month",field:"month",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.plan)||void 0===a?void 0:a.month))}},{headerName:"Date",field:"createdAt",width:180,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.createdAt))}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(N.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}}]},e.userperformance=function(){P.a.get("/admin/get_userPerSheet").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})})).catch((function(e){console.log(e.response)}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.userperformance()}},{key:"runthisfunction",value:function(e){var a=this;D()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":P.a.get("/admin/dlt_userPerSheet/".concat(e)).then((function(e){a.userperformance()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return s.a.createElement(o.a,{className:"app-user-list"},s.a.createElement(d.a,{sm:"12"}),s.a.createElement(d.a,{sm:"12"},s.a.createElement(u.a,{className:"overflow-hidden agGrid-card"},s.a.createElement(o.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"User Performance Sheet List"))),s.a.createElement(m.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(z.a,{className:"ml-50",size:15})),s.a.createElement(h.a,{right:!0},s.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(v.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(S.a.Consumer,null,(function(a){return s.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component);a.default=y}}]);
//# sourceMappingURL=182.1ee3703f.chunk.js.map