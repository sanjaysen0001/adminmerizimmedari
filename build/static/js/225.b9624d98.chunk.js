(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[225],{2369:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(14),r=t(15),l=t(16),c=t(0),s=t.n(c),o=t(1155),d=t(1156),u=t(1157),m=t(1160),g=t(789),f=t(792),p=t(790),h=t(788),v=t(1165),E=t(172),w=t(565),b=t(169),S=t(799),z=t(304),k=t(437),N=t(259),P=t(56),D=(t(27),t(800),t(566),t(795)),y=t.n(D),C=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"User Name",field:"firstname",width:200,cellRendererFramework:function(e){var a,t;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null," ",null===(a=e.data.userid)||void 0===a?void 0:a.firstname," ",null===(t=e.data.userid)||void 0===t?void 0:t.lastname))}},{headerName:"Mobile",field:"mobile",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.mobile))}},{headerName:"Descripiton",field:"desc",width:200,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.desc))}},{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(P.b,{render:function(e){var t=e.history;return s.a.createElement(z.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return t.push("/app/feedback/viewFeedback/".concat(a.data._id))}})}}),s.a.createElement(k.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}}]},e.feedback=function(){w.a.get("/admin/getFeedback").then((function(a){console.log(a.data.data);var t=a.data.data;e.setState({rowData:t})}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.feedback()}},{key:"runthisfunction",value:function(e){var a=this;y()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":w.a.get("/admin/dltFeedback/".concat(e)).then((function(e){a.feedback()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,i=a.defaultColDef;return s.a.createElement(o.a,{className:"app-user-list"},s.a.createElement(d.a,{sm:"12"}),s.a.createElement(d.a,{sm:"12"},s.a.createElement(u.a,null,s.a.createElement(o.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"FeedBack List"))),s.a.createElement(m.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(N.a,{className:"ml-50",size:15})),s.a.createElement(p.a,{right:!0},s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(v.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(b.a.Consumer,null,(function(a){return s.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component);a.default=C}}]);
//# sourceMappingURL=225.b9624d98.chunk.js.map