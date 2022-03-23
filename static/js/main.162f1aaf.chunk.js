(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{104:function(t,e,n){},105:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var i,a,c=n(0),o=n.n(c),r=n(30),s=n.n(r),l=(n(104),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),c(t),o(t)}))}),d=(n(105),n(20)),u=n(15),j=n(16),O=n(83),b=n.n(O).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"c8be0b36-3ac5-42a7-89ea-e79ef5d95007"}}),f=function(){return b.get("todo-lists")},h=function(t){return b.post("todo-lists",{title:t})},T=function(t){return b.delete("todo-lists/".concat(t))},g=function(t,e){return b.put("todo-lists/".concat(t),{title:e})},v=function(t){return b.get("todo-lists/".concat(t,"/tasks"))},p=function(t,e){return b.delete("todo-lists/".concat(t,"/tasks/").concat(e))},k=function(t,e){return b.post("todo-lists/".concat(t,"/tasks"),{title:e})},I=function(t,e,n){return b.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},S=function(){return b.delete("auth/login")},x=function(){return b.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(i||(i={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(a||(a={}));var m=function(t,e){t.messages.length?e(L(t.messages[0])):e(L("Some error occurred")),e(D("failed"))},C=function(t,e){e(L(t.message?t.message:"Some error occurred")),e(D("failed"))},E={isLoggedIn:!1},A=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},y={status:"idle",error:null,isInitialized:!1},D=function(t){return{type:"APP/SET-STATUS",status:t}},L=function(t){return{type:"'APP/SET-ERROR'",error:t}},w=n(5),P={},N=function(t,e,n){return function(i,a){var c=a().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(u.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);I(n,t,o).then((function(a){if(0===a.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);i(c)}else m(a.data,i)})).catch((function(t){C(t,i)}))}else console.warn("task not found in the state")}},R=[],F=function(){return{type:"CLEAR-DATA"}},G=function(){return function(t){t(D("loading")),f().then((function(e){return t({type:"SET-TODOLISTS",todolists:e.data}),t(D("succeeded")),e.data})).then((function(e){e.forEach((function(e){var n;t((n=e.id,function(t){t(D("loading")),v(n).then((function(e){var i=e.data.items;t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(i,n)),t(D("succeeded"))}))}))}))}))}},K=n(187),H=n(195),U=n(13),M=n(181),z=n(188),V=n(177),B=n(2),Y=o.a.memo((function(t){var e=t.addItem,n=t.disabled,i=void 0!==n&&n;console.log("AddItemForm called");var a=Object(c.useState)(""),o=Object(U.a)(a,2),r=o[0],s=o[1],l=Object(c.useState)(null),d=Object(U.a)(l,2),u=d[0],j=d[1],O=function(){""!==r.trim()?(e(r),s("")):j("Title is required")};return Object(B.jsxs)("div",{children:[Object(B.jsx)(M.a,{variant:"outlined",disabled:i,error:!!u,value:r,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&O()},label:"Title",helperText:u}),Object(B.jsx)(z.a,{color:"primary",onClick:O,disabled:i,children:Object(B.jsx)(V.a,{})})]})})),J=n(88),Z=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(c.useState)(!1),n=Object(U.a)(e,2),i=n[0],a=n[1],o=Object(c.useState)(t.value),r=Object(U.a)(o,2),s=r[0],l=r[1];return i?Object(B.jsx)(M.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.onChange(s)}}):Object(B.jsx)("span",{onDoubleClick:function(){a(!0),l(t.value)},children:t.value})})),q=n(189),Q=n(178),W=n(183),X=o.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(c.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?i.Completed:i.New,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(B.jsxs)("div",{className:t.task.status===i.Completed?"is-done":"",children:[Object(B.jsx)(W.a,{checked:t.task.status===i.Completed,color:"primary",onChange:n}),Object(B.jsx)(Z,{value:t.task.title,onChange:a}),Object(B.jsx)(z.a,{onClick:e,children:Object(B.jsx)(Q.a,{})})]},t.task.id)})),$=["demo"],_=o.a.memo((function(t){t.demo;var e=Object(J.a)(t,$),n=(Object(d.b)(),Object(c.useCallback)((function(t){e.addTask(t,e.todolist.id)}),[e.addTask,e.todolist.id])),a=Object(c.useCallback)((function(t){e.changeTodolistTitle(e.todolist.id,t)}),[e.todolist.id,e.changeTodolistTitle]),o=Object(c.useCallback)((function(){return e.changeFilter("all",e.todolist.id)}),[e.todolist.id,e.changeFilter]),r=Object(c.useCallback)((function(){return e.changeFilter("active",e.todolist.id)}),[e.todolist.id,e.changeFilter]),s=Object(c.useCallback)((function(){return e.changeFilter("completed",e.todolist.id)}),[e.todolist.id,e.changeFilter]),l=e.tasks;return"active"===e.todolist.filter&&(l=e.tasks.filter((function(t){return t.status===i.New}))),"completed"===e.todolist.filter&&(l=e.tasks.filter((function(t){return t.status===i.Completed}))),Object(B.jsxs)("div",{children:[Object(B.jsxs)("h3",{children:[Object(B.jsx)(Z,{value:e.todolist.title,onChange:a}),Object(B.jsx)(z.a,{onClick:function(){e.removeTodolist(e.todolist.id)},disabled:"loading"===e.todolist.entityStatus,children:Object(B.jsx)(Q.a,{})})]}),Object(B.jsx)(Y,{addItem:n,disabled:"loading"===e.todolist.entityStatus}),Object(B.jsx)("div",{children:l.map((function(t){return Object(B.jsx)(X,{task:t,todolistId:e.todolist.id,removeTask:e.removeTask,changeTaskTitle:e.changeTaskTitle,changeTaskStatus:e.changeTaskStatus},t.id)}))}),Object(B.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(B.jsx)(q.a,{variant:"all"===e.todolist.filter?"outlined":"text",onClick:o,color:"inherit",children:"All"}),Object(B.jsx)(q.a,{variant:"active"===e.todolist.filter?"outlined":"text",onClick:r,color:"primary",children:"Active"}),Object(B.jsx)(q.a,{variant:"completed"===e.todolist.filter?"outlined":"text",onClick:s,color:"secondary",children:"Completed"})]})]})})),tt=n(14),et=function(){var t=Object(d.c)((function(t){return t.todolists})),e=Object(d.c)((function(t){return t.tasks})),n=Object(d.b)(),i=Object(d.c)((function(t){return t.auth.isLoggedIn}));Object(c.useEffect)((function(){i&&n(G())}),[]);var a=Object(c.useCallback)((function(t,e){var i=function(t,e){return function(n){p(e,t).then((function(i){var a=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(a)}))}}(t,e);n(i)}),[n]),o=Object(c.useCallback)((function(t,e){var i=function(t,e){return function(n){n(D("loading")),k(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(D("succeeded"))}else m(t.data,n)})).catch((function(t){C(t,n)}))}}(t,e);n(i)}),[n]),r=Object(c.useCallback)((function(t,e,i){var a=N(t,{status:e},i);n(a)}),[n]),s=Object(c.useCallback)((function(t,e,i){var a=N(t,{title:e},i);n(a)}),[n]),l=Object(c.useCallback)((function(t,e){var i={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};n(i)}),[n]),u=Object(c.useCallback)((function(t){var e,i=(e=t,function(t){t(D("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),T(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(D("succeeded"))}))});n(i)}),[n]),j=Object(c.useCallback)((function(t,e){var i=function(t,e){return function(n){g(t,e).then((function(i){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);n(i)}),[n]),O=Object(c.useCallback)((function(t){var e=function(t){return function(e){e(D("loading")),h(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(D("succeeded"))}))}}(t);n(e)}),[n]);return i?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K.a,{container:!0,style:{padding:"20px"},children:Object(B.jsx)(Y,{addItem:O})}),Object(B.jsx)(K.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(B.jsx)(K.a,{item:!0,children:Object(B.jsx)(H.a,{style:{padding:"10px"},children:Object(B.jsx)(_,{todolist:t,tasks:n,removeTask:a,changeFilter:l,addTask:o,changeTaskStatus:r,removeTodolist:u,changeTaskTitle:s,changeTodolistTitle:j})})},t.id)}))})]}):Object(B.jsx)(tt.a,{to:"/login"})},nt=n(190),it=n(191),at=n(192),ct=n(194),ot=n(193),rt=n(180),st=n(185),lt=n(184),dt=o.a.forwardRef((function(t,e){return Object(B.jsx)(lt.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function ut(){var t=Object(d.c)((function(t){return t.app.error})),e=Object(d.b)(),n=function(t,n){"clickaway"!==n&&e(L(null))};return Object(B.jsx)(st.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(B.jsx)(dt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var jt=n(196);var Ot=function(){var t=Object(d.c)((function(t){return t.app.status})),e=Object(d.c)((function(t){return t.app.isInitialized})),n=Object(d.b)(),i=Object(d.c)((function(t){return t.auth.isLoggedIn}));return Object(c.useEffect)((function(){n((function(t){x().then((function(e){0===e.data.resultCode&&t(A(!0))})).finally((function(){t({type:"APP/SET-ISINITIALIZED",isInitialized:!0})}))}))}),[n]),e?Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(ut,{}),Object(B.jsxs)(nt.a,{position:"static",children:[Object(B.jsxs)(it.a,{children:[Object(B.jsx)(z.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(B.jsx)(rt.a,{})}),Object(B.jsx)(at.a,{variant:"h6",children:"News"}),i&&Object(B.jsx)(q.a,{color:"inherit",onClick:function(){n((function(t){t(D("loading")),S().then((function(e){0===e.data.resultCode?(t(A(!1)),t(D("succeeded")),t(F())):m(e.data,t)})).catch((function(e){C(e,t)}))}))},children:"Logout"})]}),"loading"===t&&Object(B.jsx)(ot.a,{})]}),Object(B.jsx)(ct.a,{fixed:!0,children:Object(B.jsxs)(tt.d,{children:[Object(B.jsx)(tt.b,{path:"/it-inc-todolist/",element:Object(B.jsx)(et,{})}),Object(B.jsx)(tt.b,{path:"*",element:Object(B.jsx)("h1",{style:{textAlign:"center"},children:"404. Page not found"})})]})})]}):Object(B.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(B.jsx)(jt.a,{})})},bt=n(57),ft=n(87),ht=Object(bt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(w.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(w.a)({},e.task.todoListId,[e.task].concat(Object(j.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(w.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(u.a)(Object(u.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},t),{},Object(w.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(u.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var i=Object(u.a)({},t);return e.todolists.forEach((function(t){i[t.id]=[]})),i;case"SET-TASKS":return Object(u.a)(Object(u.a)({},t),{},Object(w.a)({},e.todolistId,e.tasks));case"CLEAR-DATA":return{};default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(u.a)(Object(u.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CLEAR-DATA":return[];default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case"'APP/SET-ERROR'":return Object(u.a)(Object(u.a)({},t),{},{error:e.error});case"APP/SET-ISINITIALIZED":return Object(u.a)(Object(u.a)({},t),{},{isInitialized:e.isInitialized});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;return"login/SET-IS-LOGGED-IN"===e.type?Object(u.a)(Object(u.a)({},t),{},{isLoggedIn:e.value}):t}}),Tt=Object(bt.c)(ht,Object(bt.a)(ft.a));window.store=Tt;var gt=n(51);s.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(d.a,{store:Tt,children:Object(B.jsx)(gt.a,{children:Object(B.jsx)(Ot,{})})})}),document.getElementById("root")),l()}},[[131,1,2]]]);
//# sourceMappingURL=main.162f1aaf.chunk.js.map