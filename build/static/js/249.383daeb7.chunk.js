(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[249],{2390:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t(51),l=t(13),c=t(14),s=t(15),r=t(16),i=t(0),o=t.n(i),m=t(1154),d=t(1155),u=t(1152),p=t(1153),h=t(1156),E=t(172),v=t(1159),b=t(1172),g=t(1173),f=t(1174),_=t(564),k=t(56),y=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=c.props.match.params.id;_.a.post("/admin/Editplan/".concat(a),c.state).then((function(e){console.log(e),c.props.history.push("/app/subPlan/SubPlanVideos")})).catch((function(e){console.log(e)}))},c.state={_id:"",video_link:"",associated_plan:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;_.a.get("/admin/viewoneplan/".concat(a)).then((function(a){console.log(a.data.data.desc),e.setState({_id:a.data.data._id,video_link:a.data.data.video_link,associated_plan:a.data.data.associated_plan})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(d.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(u.a,{listTag:"div"},o.a.createElement(p.a,{href:"/",tag:"a"},"Home"),o.a.createElement(p.a,{active:!0},"Edit Traning Video"))))),o.a.createElement(h.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Plan Video")),o.a.createElement(d.a,null,o.a.createElement(k.b,{render:function(e){var a=e.history;return o.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/subplan/SubPlanVideos")}},"Back")}}))),o.a.createElement(v.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,{className:"m-2"},o.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Video Link "),o.a.createElement(f.a,{type:"text",name:"video_link",value:this.state.video_link,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},o.a.createElement(g.a,null,"Associated Plan "),o.a.createElement(f.a,{readOnly:!0,type:"text",name:"associated_plan",value:this.state.associated_plan,onChange:this.changeHandler}))),o.a.createElement(m.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},o.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=249.383daeb7.chunk.js.map