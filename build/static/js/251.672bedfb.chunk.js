(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[251],{2457:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return A}));var l=t(51),n=t(13),r=t(14),c=t(15),m=t(16),s=t(0),u=t.n(s),i=t(1154),d=t(1155),o=t(1152),p=t(1153),E=t(1156),h=t(172),b=t(1159),g=t(1172),v=t(1173),f=t(1174),N=t(564),y=t(27),S=t(795),T=t.n(S),A=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),N.a.post("/addsize",r.state,{}).then((function(e){T()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/trade/allTradeList")})).catch((function(e){console.log(e)}))},r.state={sizeName:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(d.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(o.a,{listTag:"div"},u.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(p.a,{href:"/app/trade/allTradeList",tag:"a"},"All Active Trade List"),u.a.createElement(p.a,{active:!0},"Add All Active Trade "))))),u.a.createElement(E.a,null,u.a.createElement(i.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add All Active Trade")),u.a.createElement(d.a,null,u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/trade/allTradeList")}},"Back"))),u.a.createElement(b.a,null,u.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(i.a,null," ",u.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(v.a,null,"Type Of Scripts"),u.a.createElement(f.a,{id:"exampleSelect",name:"script_type",type:"select"},u.a.createElement("option",null,"Select Script"),u.a.createElement("option",null,"FNO INDEX"),u.a.createElement("option",null,"FNO OPTIONS"),u.a.createElement("option",null,"CASH EQUITY"))),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Date/Time"),u.a.createElement(f.a,{required:!0,type:"text",name:"sizeName",placeholder:""})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Trade"),u.a.createElement(f.a,{required:!0,type:"number",name:"value",placeholder:"",value:this.state.value,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Message"),u.a.createElement(f.a,{required:!0,type:"textarea",name:"desc",placeholder:"",value:this.state.desc,onChange:this.changeHandler}))),u.a.createElement(i.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=251.672bedfb.chunk.js.map