(function(t){function e(e){for(var n,a,c=e[0],s=e[1],l=e[2],u=0,m=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,c=1;c<o.length;c++){var s=o[c];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-todo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"0aed":function(t,e,o){},"15d1":function(t,e,o){"use strict";var n=o("0aed"),i=o.n(n);i.a},"21f3":function(t,e,o){t.exports=o.p+"img/empty-state-icon.2a9b98b6.svg"},"28b6":function(t,e,o){t.exports=o.p+"img/delete-todo-icon.4c79243b.svg"},"2ccb":function(t,e,o){t.exports=o.p+"img/add-todo-icon.0b00772b.svg"},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),i=o.n(n);i.a},"71e8":function(t,e,o){"use strict";var n=o("bb91"),i=o.n(n);i.a},7745:function(t,e,o){},"82aa":function(t,e,o){"use strict";var n=o("7745"),i=o.n(n);i.a},8850:function(t,e,o){"use strict";var n=o("f620"),i=o.n(n);i.a},"92ef":function(t,e,o){t.exports=o.p+"img/avatar.609ab533.jpg"},"9c0c":function(t,e,o){},bb91:function(t,e,o){},cd49:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("router-view")],1)},r=[],a={name:"App"},c=a,s=(o("5c0b"),o("2877")),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("todo-list")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list"},[n("div",[n("div",{staticClass:"user-block"},[n("img",{staticClass:"user-block__image",attrs:{src:o("92ef"),alt:"Vlad S"}}),n("div",[n("h2",{staticClass:"user-block__name"},[t._v(" Vlad S. ")]),n("span",[t._v(" "+t._s(t.currentDate)+" ")])])]),t.isEmptyStateVisible?n("div",{staticClass:"controll-panel"},[n("todo-filtered",{staticClass:"start-animation"}),n("todo-add-to-important",{staticClass:"start-animation"}),n("todo-add-to-completed",{staticClass:"start-animation"}),n("todo-clear-completed",{staticClass:"start-animation"})],1):t._e()]),n("div",[n("div",{staticClass:"create-todo"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"todo-input start-animation",attrs:{type:"text",placeholder:"What needs to be done?"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),n("button",{staticClass:"todo-add-button",on:{click:t.addTodo}},[n("img",{attrs:{src:o("2ccb"),alt:"add-new"}})])]),t.isEmptyStateVisible?n("div",[n("draggable",{model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}},[n("transition-group",{attrs:{name:"fade","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},t._l(t.todosFiltered,(function(e,o){return n("todo-item",{key:e.id,attrs:{todo:e,index:o,"check-all":!t.anyRemaining}})})),1)],1)],1):n("div",{staticClass:"empty-state"},[n("img",{staticClass:"empty-state__image",attrs:{src:o("21f3"),alt:"Empty state"}}),t._m(0)]),n("transition",{attrs:{name:"fade"}},[t.isEmptyStateVisible?n("div",{staticClass:"extra-container"},[n("todo-check-all"),n("todo-item-remaining")],1):t._e()])],1)])},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"empty-state__caption"},[t._v(" Your list seems to be empty. "),o("br"),t._v(" Let's get busy with something! ")])}],v=(o("fb6a"),o("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item"},[n("div",{staticClass:"todo-item-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"completed"}],staticClass:"todo-item-left__checkbox",class:{"completed-checkbox":t.completed},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?t._i(t.completed,null)>-1:t.completed},on:{change:[function(e){var o=t.completed,n=e.target,i=!!n.checked;if(Array.isArray(o)){var r=null,a=t._i(o,r);n.checked?a<0&&(t.completed=o.concat([r])):a>-1&&(t.completed=o.slice(0,a).concat(o.slice(a+1)))}else t.completed=i},t.doneEdit]}}),t.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"},{name:"focus",rawName:"v-focus"}],staticClass:"todo-item-edit",attrs:{type:"text"},domProps:{value:t.title},on:{blur:t.doneEdit,keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)}],input:function(e){e.target.composing||(t.title=e.target.value)}}}):n("div",{staticClass:"todo-item-label",class:{completed:t.completed},on:{dblclick:t.editTodo}},[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"controll"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.important,expression:"important"}],staticClass:"add-to-imp__input",attrs:{id:t.id,type:"checkbox"},domProps:{checked:Array.isArray(t.important)?t._i(t.important,null)>-1:t.important},on:{change:[function(e){var o=t.important,n=e.target,i=!!n.checked;if(Array.isArray(o)){var r=null,a=t._i(o,r);n.checked?a<0&&(t.important=o.concat([r])):a>-1&&(t.important=o.slice(0,a).concat(o.slice(a+1)))}else t.important=i},t.doneEdit]}}),n("label",{staticClass:"add-to-imp__label",attrs:{for:t.id}}),n("button",{staticClass:"remove-button",on:{click:function(e){return t.removeTodo(t.todo.id)}}},[n("img",{staticClass:"remove-button__img",attrs:{src:o("28b6"),alt:"Delete"}})])])])}),g=[],b=(o("a9e3"),{name:"TodoItem",directives:{focus:{inserted:function(t){t.focus()}}},props:{todo:{type:Object,required:!0},index:{type:Number,required:!0},checkAll:{type:Boolean,required:!0}},data:function(){return{id:this.todo.id,title:this.todo.title,completed:this.todo.completed,important:this.todo.important,editing:this.todo.editing,beforeEditCache:""}},watch:{checkAll:function(){this.completed=!!this.checkAll||this.todo.completed}},methods:{removeTodo:function(t){this.$store.dispatch("deleteTodo",t)},editTodo:function(){this.beforeEditCache=this.title,this.editing=!0},doneEdit:function(){""===this.title.trim()&&(this.title=this.beforeEditCache),this.editing=!1,this.$store.dispatch("updateTodo",{id:this.id,title:this.title,completed:this.completed,important:this.important,editing:this.editing})},cancelEdit:function(){this.title=this.beforeEditCache,this.editing=!1}}}),_=b,C=(o("8850"),Object(s["a"])(_,v,g,!1,null,"5228511a",null)),y=C.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-filtered"},[o("button",{class:{active:"all"==t.filter},on:{click:function(e){return t.changeFilter("all")}}},[t._v(" All ")]),o("button",{class:{active:"active"==t.filter},on:{click:function(e){return t.changeFilter("active")}}},[t._v(" Active ")])])},T=[],w=(o("4de4"),{name:"TodoFiltered",computed:{filter:function(){return this.$store.state.filter}},methods:{changeFilter:function(t){this.$store.dispatch("updateFilter",t)}}}),x=w,E=(o("82aa"),Object(s["a"])(x,k,T,!1,null,"8a0e4376",null)),$=E.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v(" "+t._s(t.remaining)+" items left ")])},A=[],F={name:"TodoItemRemaining",computed:{remaining:function(){return this.$store.getters.remaining}}},j=F,I=Object(s["a"])(j,O,A,!1,null,null,null),S=I.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-check-all"},[o("div",{staticClass:"todo-check-all__form-group form-group"},[o("input",{staticClass:"form-group__input",attrs:{id:"check-all",type:"checkbox"},domProps:{checked:!t.anyRemaining},on:{change:t.allChecked}}),o("label",{staticClass:"form-group__label",attrs:{for:"check-all"}},[t._v(" Check All ")])])])},P=[],R={name:"TodoCheckAll",computed:{anyRemaining:function(){return this.$store.getters.anyRemaining}},methods:{allChecked:function(){this.$store.dispatch("checkAll",event.target.checked)}}},L=R,N=(o("15d1"),Object(s["a"])(L,B,P,!1,null,"b332b13a",null)),V=N.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showClearCompletedButton?o("button",{on:{click:t.clearCompleted}},[t._v(" Clear Completed ")]):t._e()},M=[],q={name:"TodoClearCompleted",computed:{showClearCompletedButton:function(){return this.$store.getters.showClearCompletedButton}},methods:{clearCompleted:function(){this.$store.dispatch("clearCompleted")}}},J=q,H=Object(s["a"])(J,D,M,!1,null,null,null),U=H.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showImportantdButton?o("button",{on:{click:function(e){return t.changeFilter("important")}}},[t._v(" Important ")]):t._e()},Y=[],z={name:"TodoAddToImportant",computed:{showImportantdButton:function(){return this.$store.getters.showImportantdButton}},methods:{changeFilter:function(t){this.$store.dispatch("updateFilter",t)}}},G=z,K=Object(s["a"])(G,W,Y,!1,null,null,null),Q=K.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showCompletedButton?o("button",{on:{click:function(e){return t.changeFilter("completed")}}},[t._v(" Completed ")]):t._e()},Z=[],tt={name:"TodoAddToCompletd",computed:{showCompletedButton:function(){return this.$store.getters.showCompletedButton}},methods:{changeFilter:function(t){this.$store.dispatch("updateFilter",t)}}},et=tt,ot=Object(s["a"])(et,X,Z,!1,null,null,null),nt=ot.exports,it=o("310e"),rt=o.n(it),at={name:"TodoList",components:{TodoItem:y,TodoFiltered:$,TodoCheckAll:V,TodoClearCompleted:U,TodoAddToImportant:Q,TodoAddToCompleted:nt,TodoItemRemaining:S,draggable:rt.a},data:function(){return{newTodo:"",idForTodo:3}},computed:{anyRemaining:function(){return this.$store.getters.anyRemaining},todosFiltered:function(){return this.$store.getters.todosFiltered},isEmptyStateVisible:function(){return this.$store.state.todos.length},currentDate:function(){return(new Date).toLocaleString().slice(0,10)},todos:{get:function(){return this.$store.getters.todos(this.id)},set:function(t){this.$store.commit("updateList",{value:t,id:this.id})}}},methods:{addTodo:function(){0!==this.newTodo.trim().length?(this.$store.dispatch("addTodo",{id:this.idForTodo,title:this.newTodo}),this.newTodo="",this.idForTodo++):alert("This field can not be empty!")}}},ct=at,st=(o("71e8"),Object(s["a"])(ct,f,h,!1,null,null,null)),lt=st.exports,dt={name:"Home",components:{TodoList:lt}},ut=dt,mt=Object(s["a"])(ut,m,p,!1,null,null,null),pt=mt.exports;n["a"].use(u["a"]);var ft=[{path:"/",name:"Main",component:pt}],ht=new u["a"]({routes:ft}),vt=ht,gt=(o("c740"),o("4160"),o("a434"),o("159b"),o("2f62"));n["a"].use(gt["a"]);var bt=new gt["a"].Store({state:{filter:"all",todos:[{id:1,title:"First todo",completed:!1,important:!1,editing:!1},{id:2,title:"Second todo",complete:!1,important:!1,editing:!1}]},getters:{remaining:function(t){return t.todos.filter((function(t){return!t.completed})).length},anyRemaining:function(t){return 0!==t.remaining},todosFiltered:function(t){return"all"===t.filter?t.todos:"active"===t.filter?t.todos.filter((function(t){return!t.completed})):"completed"===t.filter?t.todos.filter((function(t){return t.completed})):"important"===t.filter?t.todos.filter((function(t){return t.important})):t.todos},showCompletedButton:function(t){return t.todos.filter((function(t){return t.completed})).length>0},showClearCompletedButton:function(t){return t.todos.filter((function(t){return t.completed})).length>0},todos:function(t){return function(e){return e?"":t.todos}},showImportantdButton:function(t){return t.todos.filter((function(t){return t.important})).length>0}},mutations:{addTodo:function(t,e){t.todos.push({id:e.id,title:e.title,completed:!1,important:!1,editing:!1})},updateTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));t.todos.splice(o,1,{id:e.id,title:e.title,completed:e.completed,important:e.important,editing:e.editing})},deleteTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e}));t.todos.splice(o,1)},checkAll:function(t,e){t.todos.forEach((function(t){return t.completed=e}))},updateFilter:function(t,e){t.filter=e},updateList:function(t,e){var o=e.value,n=e.id;return n?"":t.todos=o},clearCompleted:function(t){t.todos=t.todos.filter((function(t){return!t.completed}))}},actions:{addTodo:function(t,e){setTimeout((function(){t.commit("addTodo",e)}),100)},updateTodo:function(t,e){setTimeout((function(){t.commit("updateTodo",e)}),100)},deleteTodo:function(t,e){t.commit("deleteTodo",e)},checkAll:function(t,e){setTimeout((function(){t.commit("checkAll",e)}),100)},updateFilter:function(t,e){setTimeout((function(){t.commit("updateFilter",e)}),100)},clearCompleted:function(t){setTimeout((function(){t.commit("clearCompleted")}),100)}}});n["a"].config.productionTip=!1,new n["a"]({router:vt,store:bt,render:function(t){return t(d)}}).$mount("#app")},f620:function(t,e,o){}});
//# sourceMappingURL=app.2e9d4750.js.map