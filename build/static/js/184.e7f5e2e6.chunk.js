(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[184],{2479:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(51),l=t(13),s=t(14),c=t(15),r=t(16),o=t(0),i=t.n(o),m=t(1154),d=t(1155),u=t(1152),p=t(1153),h=t(1156),b=t(172),E=t(1159),f=t(1172),g=t(1173),N=t(1174),v=t(564),S=t(56),y=t(806),C=t.n(y),k=t(795),q=t.n(k),F=t(804),j=t(801),O=t(807),T=t.n(O),w=(t(805),t(811),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,desc:T()(Object(F.convertToRaw)(e.getCurrentContent()))})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log("Desc",s.state.desc);var a=s.props.match.params.id;v.a.post("admin/edit_faq/".concat(a),s.state).then((function(e){q()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},s.state={title:"",editorState:F.EditorState.createEmpty(),desc:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/getoneFaq/".concat(a)).then((function(a){console.log(a.data.data.desc),e.setState({title:a.data.data.title,desc:a.data.data.desc})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/scripts/cashEquity",tag:"a"},"Edit Faq"),i.a.createElement(p.a,{active:!0},"Edit Faq"))))),i.a.createElement(h.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Faq")),i.a.createElement(d.a,null,i.a.createElement(S.b,{render:function(e){var a=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/faq/faqList")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(g.a,null,"Title"),i.a.createElement(N.a,{type:"text",required:!0,placeholder:"Enter Title",name:"title",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Description"),i.a.createElement(j.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,defaultContentState:C()(this.state.desc),toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(o.Component))}}]);
//# sourceMappingURL=184.e7f5e2e6.chunk.js.map