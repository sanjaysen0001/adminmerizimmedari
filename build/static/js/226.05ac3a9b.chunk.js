(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[226],{2445:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),r=a(15),l=a(16),c=a(0),o=a.n(c),s=a(1156),u=a(1154),d=a(1155),m=a(172),p=a(1159),g=a(789),f=a(792),h=a(790),v=a(788),y=a(1174),E=a(56),w=a(799),S=a(564),b=a(301),P=a(437),z=a(259),N=a(169),D=(a(800),a(795)),A=a.n(D),C=a(806),k=a.n(C),x=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(t){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(E.b,{render:function(e){var a=e.history;return o.a.createElement(b.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push({pathname:"/app/policy/EditPolicyType/".concat(t.data._id),state:t.data})}})}}),o.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}},{headerName:"PolicyType",field:"PolicyType",width:150,cellRendererFramework:function(e){var t;return o.a.createElement("div",{className:""},null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.pt_type)}},{headerName:"PolicyType Description",field:"Description",width:250,cellRendererFramework:function(e){var t;return o.a.createElement("div",{className:""},k()(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.pt_type_desc))}}]},e.allAboutList=function(){S.a.get("/admin/get_pt").then((function(t){var a=t.data.data;e.setState({rowData:a})}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.allAboutList()}},{key:"runthisfunction",value:function(e){var t=this;console.log(e),A()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":S.a.delete("/admin/dlt_pt/".concat(e)).then((function(e){t.allAboutList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},o.a.createElement(u.a,{className:"m-1"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"PolicyRestriction List")),o.a.createElement(d.a,{className:""},o.a.createElement(E.b,{render:function(e){var t=e.history;return o.a.createElement(m.a,{className:" btn  float-right",color:"primary",onClick:function(){return t.push("/app/policy/AddPolicyRestriction")}},"Add PolicyRestriction11")}}))),o.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(g.a,{className:"p-1 ag-dropdown"},o.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(z.a,{className:"ml-50",size:15})),o.a.createElement(h.a,{right:!0},o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(y.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(N.a.Consumer,null,(function(t){return o.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(o.a.Component);t.default=x}}]);
//# sourceMappingURL=226.05ac3a9b.chunk.js.map