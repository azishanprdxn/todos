(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{18:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),c=a.n(o),r=(a(23),a(4)),i=a(5),s=a(6),u=a(7),d=(a(24),a(25),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"todos")))}}]),a}(n.Component)),m=a(1),h=a(8),p=(a(26),a(27),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleDoubleClick=function(e){e.preventDefault(),e.target.className="edit-todo editing",n.setState({readOnly:!1})},n.handleOnBlur=function(e){e.preventDefault(),e.target.className="edit-todo read-only",n.setState({readOnly:!0})},n.handleOnChange=function(e){n.setState({editTodo:e.target.value}),console.log(e.target.value)},n.handleOnDelete=function(e,t){e.preventDefault();var a=f.filter((function(e,a){return a!==t}));e.target.parentElement.remove();var l=JSON.parse(localStorage.getItem("key"));localStorage.setItem("key",JSON.stringify(a)),f.pop(n.todoData),console.log(a,l)},n.handleOnToggle=function(e){!0===e.target.checked?(console.log("Checked",e.target),n.setState({completed:!0}),console.log(e.target.nextSibling,n.props.completed)):(console.log("UnChecked",e.target),n.setState({completed:!1}))},n.state={readOnly:!0,completed:n.props.completed},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".todo-footer a span");"/"===window.location.pathname&&(e[0].className="active"),"/active"===window.location.pathname&&(e[1].className="active"),"/completed"===window.location.pathname&&(e[2].className="active")}},{key:"render",value:function(){return l.a.createElement("div",{className:"todo-list"},l.a.createElement("input",{type:"checkbox",className:"check",onClick:this.handleOnToggle}),l.a.createElement("input",{readOnly:this.state.readOnly,className:"edit-todo",value:this.props.data,onDoubleClick:this.handleDoubleClick,onBlur:this.handleOnBlur,onChange:this.handleOnChange}),l.a.createElement("span",{className:"fa fa-times delete-btn","aria-hidden":"true",title:"Delete",onClick:this.handleOnDelete}))}}]),a}(n.Component)),f=[],v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleKeyDown=function(e){13===e.keyCode&&(e.preventDefault(),n.state.newTodo.trim()&&(n.setState({id:n.state.id+1,newTodo:""}),f.push(n.state),localStorage.setItem("key",JSON.stringify(f))))},n.handleChange=function(e){n.setState({newTodo:e.target.value})},n.handleOnCheck=function(e){var t=document.querySelectorAll(".check");if(!0===e.target.checked)for(var a=0;a<t.length;a++)t[a].checked=!0;else for(var n=0;n<t.length;n++)t[n].checked=!1},n.handleLinkClick=function(e){for(var t=document.querySelectorAll(".todo-footer a span"),a=0;a<t.length;a++)t[a].className="";e.target.className="active"},n.clearCompleted=function(){console.log("ClearCompleted")},n.state={id:0,newTodo:"",completed:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){if(localStorage.getItem("key"))for(var e=JSON.parse(localStorage.getItem("key")),t=0;t<e.length;t++)f.push(e[t]);this.setState({id:f.length})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"todos"},l.a.createElement("input",{type:"checkbox",className:"select-all",onClick:this.handleOnCheck}),l.a.createElement("input",{autoFocus:!0,className:"add-todo",placeholder:"What needs to be done?",value:this.state.newTodo,onKeyDown:this.handleKeyDown,onChange:this.handleChange}),f.length>0?l.a.createElement("div",null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},f.map((function(e,t){return l.a.createElement(p,{key:t,data:f[t].newTodo,completed:f[t].completed})}))),l.a.createElement(m.a,{exact:!0,path:"/active"},f.map((function(e,t){return!1===f[t].completed?l.a.createElement(p,{key:t,data:f[t].newTodo}):null}))),l.a.createElement(m.a,{exact:!0,path:"/completed"},f.map((function(e,t){return!1===f[t].completed?l.a.createElement(p,{key:t,data:f[t].newTodo}):null})))),l.a.createElement("div",{className:"todo-footer"},l.a.createElement("ul",null,l.a.createElement("li",null,f.length>1?"".concat(f.length," items"):"".concat(f.length," item")," left"),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/",onClick:this.handleLinkClick},l.a.createElement("span",null,"All")),l.a.createElement(h.b,{to:"/active",onClick:this.handleLinkClick},l.a.createElement("span",null,"Active")),l.a.createElement(h.b,{to:"/completed",onClick:this.handleLinkClick},l.a.createElement("span",null,"Completed"))),l.a.createElement("li",null,l.a.createElement("span",{onClick:this.clearCompleted},"Clear completed"))))):null),f.length>0?l.a.createElement("div",null,l.a.createElement("div",{className:"todo-footer-1"}),l.a.createElement("div",{className:"todo-footer-2"})):null))}}]),a}(n.Component),g=(a(33),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",null,"Double-click to edit a todo"),l.a.createElement("p",null,"Inspired by petehunt"),l.a.createElement("p",null,"Part of TodoMVC")))}}]),a}(n.Component)),k=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h.a,null,l.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8a1dad39.chunk.js.map