(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[229],{2440:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var n=a(51),o=a(13),l=a(14),c=a(15),r=a(16),s=a(0),i=a.n(s),m=a(1154),p=a(1155),d=a(1152),u=a(1153),y=a(1156),h=a(172),b=a(1159),E=a(1172),f=a(1173),g=a(1174),v=a(806),S=a.n(v),N=a(804),T=a(801),C=a(807),k=a.n(C),_=a(56),j=a(564),D=(a(805),a(811),a(795)),O=a.n(D),P=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).onEditorStateChange=function(e){l.setState({editorState:e,policyDescription:k()(Object(N.convertToRaw)(e.getCurrentContent()))})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){var t={pt_type:l.state.policyType,pt_type_desc:l.state.policyDescription};e.preventDefault();var a=l.props.match.params.id;j.a.post("/admin/edit_pt/".concat(a),t).then((function(e){console.log(e),O()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/policy/PolicyTypeList")})).catch((function(e){console.log(e.response)}))},l.state={policyType:"",policyDescription:"",editorState:N.EditorState.createEmpty()},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;j.a.get("/admin/get_pt_one/".concat(t)).then((function(t){var a=t.data.data,n=a.pt_type,o=a.pt_type_desc,l=o,c=N.ContentState.createFromBlockArray(Object(N.convertFromHTML)(l)),r=N.EditorState.createWithContent(c);e.setState({policyType:n,policyDescription:o,editorState:r})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(p.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(u.a,{href:"/",tag:"a"},"Home"),i.a.createElement(u.a,{active:!0},"Edit PolicyType"))))),i.a.createElement(y.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit PolicyType")),i.a.createElement(p.a,null,i.a.createElement(_.b,{render:function(e){var t=e.history;return i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/policy/PolicyTypeList")}},"Back")}}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},i.a.createElement(f.a,null,"PolcyType "),i.a.createElement(g.a,{type:"text",name:"policyType",placeholder:"PolicyType",value:this.state.policyType,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Descripition"),i.a.createElement(T.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,defaultContentState:S()(this.state.desc),toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update PolicyType")))))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=229.98a4026c.chunk.js.map