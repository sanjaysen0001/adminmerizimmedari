(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[215],{2435:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),r=a(15),l=a(16),s=a(0),c=a.n(s),o=a(1156),u=a(1154),d=a(1155),m=a(1159),g=a(789),f=a(792),h=a(790),p=a(788),v=a(1174),E=a(172),S=a(56),w=a(799),z=a(564),A=a(301),b=a(437),y=a(259),N=a(169),P=(a(800),a(795)),D=a.n(P),C=(a(806),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Assets Name",field:"PlanType",width:700,cellRendererFramework:function(e){var t;return c.a.createElement("div",{className:""},null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Asset_Type)}},{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(t){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(S.b,{render:function(e){var a=e.history;return c.a.createElement(A.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){var e;return a.push({pathname:"/app/asset/EditAsset/".concat(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e._id),state:t.data})}})}}),c.a.createElement(b.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var a;e.runthisfunction(null===(a=t.data)||void 0===a?void 0:a._id)}}))}}]},e.AssetList=function(){z.a.get("/admin/get-list").then((function(t){var a=t.data.Field;e.setState({rowData:a}),console.log(t.data.Field)})).catch((function(e){D()("Something Went Wrong")}))},e.AssetList2=function(){z.a.get("/user-list").then((function(e){e.data.Asset;console.log(e)})).catch((function(e){D()("Something Went Wrong")}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.AssetList()}},{key:"runthisfunction",value:function(e){var t=this;D()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":z.a.delete("/admin/delete-field/".concat(e)).then((function(e){t.AssetList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{className:"overflow-hidden agGrid-card"},c.a.createElement(u.a,{className:"m-1"},c.a.createElement(d.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Assets List")),c.a.createElement(d.a,{className:""})),c.a.createElement(m.a,{className:"py-0"},null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(g.a,{className:"p-1 ag-dropdown"},c.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(y.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap  mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(v.a,{className:"cssformanageassetinput cssmartopmargin",placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),c.a.createElement("div",{style:{marginRight:"10px"}},c.a.createElement(S.b,{render:function(e){var t=e.history;return c.a.createElement(E.a,{className:" btn  float-right cssmartopmargin",color:"primary",onClick:function(){return t.push("/app/AddAssets")}},"Add Assets")}})),c.a.createElement("div",null,c.a.createElement(E.a.Ripple,{className:"cssmartopmargin",color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(N.a.Consumer,null,(function(t){return c.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(c.a.Component));t.default=C}}]);
//# sourceMappingURL=215.4535dde6.chunk.js.map