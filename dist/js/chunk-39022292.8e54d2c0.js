(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39022292"],{1528:function(t,e,a){},"1e31":function(t,e,a){"use strict";var o=a("1528"),r=a.n(o);r.a},"1ed4":function(t,e,a){},"3cba":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vs-con-loading__container",attrs:{id:"table-loader"}},[a("div",{staticClass:"data-list-container ",attrs:{id:"data-list-list-view "}},[a("vs-row",[a("vs-col",{attrs:{"vs-lg":"4","vs-sm":"6","vs-xs":"12"}},[a("add",{staticClass:" sidebarX",attrs:{isSidebarActive:t.addCategory},on:{closeSidebar:function(e){t.addCategory=!1},newCategory:t.newCategory}}),a("edit",{staticClass:" sidebarX",attrs:{isSidebarActive:t.editCategory,selected:t.selected},on:{closeSidebar:function(e){t.editCategory=!1}}})],1)],1),a("vx-card",[a("vs-table",{attrs:{"max-items":"10",pagination:"",stripe:"",hoverFlat:"",noDataText:"No Category Available",data:t.categories,search:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.data;return t._l(o,(function(e,r){return a("vs-tr",{key:r},[a("vs-td",{attrs:{data:o[r]}},[t._v("\n              "+t._s(r+1)+"\n            ")]),a("vs-td",{attrs:{data:o[r].name}},[t._v("\n              "+t._s(t._f("capitalize")(o[r].name))+"\n            ")]),a("vs-td",{attrs:{data:o[r].desc}},[t._v("\n              "+t._s(o[r].desc)+"\n            ")]),a("vs-td",{attrs:{data:o[r].created_by}},[t._v("\n              "+t._s(o[r].created_by)+"\n            ")]),a("vs-td",{attrs:{data:o[r].created_on}},[t._v("\n              "+t._s(t._f("moment")(o[r].created_on,"dddd, Do MMMM YYYY"))+"\n            ")]),a("vs-td",[a("div",{staticClass:"flex"},[a("vx-tooltip",{attrs:{text:"Edit",position:"top"}},[a("vs-button",{staticClass:"mr-2",attrs:{type:"border","icon-pack":"feather",icon:"icon-edit-2",color:"dark"},on:{click:function(a){return t.edit(e)}}})],1),a("vx-tooltip",{attrs:{text:"Delete",position:"top"}},[a("vs-button",{attrs:{s:"","icon-pack":"feather",icon:"icon-trash",color:"danger"},on:{click:function(a){return t.openConfirm(e)}}})],1)],1)])],1)}))}}])},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[a("div",{staticClass:"p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",on:{click:function(e){t.addCategory=!0}}},[a("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2 text-base text-primary"},[t._v("Add New")])],1)])]),a("template",{slot:"thead"},[a("vs-th",[t._v("#")]),a("vs-th",{attrs:{"sort-key":"name"}},[t._v("Name")]),a("vs-th",{attrs:{"sort-key":"name"}},[t._v("Description")]),a("vs-th",{attrs:{"sort-key":"created_by"}},[t._v("Created By")]),a("vs-th",{attrs:{"sort-key":"created_on"}},[t._v("Created On")]),a("vs-th",[t._v("Action")])],1)],2)],1)],1)])},r=[],s=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"items-no-padding add-new-data-sidebar",attrs:{"click-not-close":"","position-right":"",parent:"body",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[t._v("Add Category")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6",attrs:{settings:t.settings}},[a("div",{staticClass:"p-6"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5 w-full",attrs:{label:"Name",name:"Category Name",placeholder:"Category Name","data-vv-validate-on":"blur"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Category Name"),expression:"errors.has('Category Name')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("Category Name")))]),a("div",{staticClass:"mt-2"},[a("p",{staticStyle:{"font-size":".85rem"}},[t._v("Description")]),a("vs-textarea",{attrs:{height:"200"},model:{value:t.model.category.desc,callback:function(e){t.$set(t.model.category,"desc",e)},expression:"model.category.desc"}})],1)],1)]),a("div",{staticClass:"flex flex-wrap items-center justify-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{ref:"loadableButton",staticClass:"mr-6 vs-con-loading__container",attrs:{id:"button-with-loading"},on:{click:function(e){return t.addCategory()}}},[t._v("Add\n    ")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}},[t._v("Cancel")])],1)],1)}),i=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=a("9d63"),l=a.n(c),d=a("659a"),u=a("2f62");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"CategoryAdd",props:{isSidebarActive:{type:Boolean,required:!0}},components:{VuePerfectScrollbar:l.a},data:function(){return{backgroundLoading:"#7367F0",colorLoading:"white",settings:{maxScrollbarLength:60,wheelSpeed:.6},model:{name:"",category:{created_on:Date(),created_by:""}}}},methods:{addCategory:function(){var t=this;this.$validator.validateAll().then((function(e){t.$vs.loading({background:t.backgroundLoading,color:t.colorLoading,container:"#button-with-loading",scale:.45});var a={name:t.model.name.toLowerCase()},o=[Object.assign(t.model.category,a)];e&&Object(d["b"])().callFunction("CategoryCreate",o).then((function(e){t.$emit("newCategory"),t.notify({text:"Successfully Added New Category!",title:"",color:"success"}),t.model.name="",t.model.category.desc="",t.isSidebarActiveLocal=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")})).catch((function(e){t.$vs.loading.close("#button-with-loading > .con-vs-loading"),t.notify({text:e.message,title:"Error",color:"danger"})}))}))}},computed:f({isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||this.$emit("closeSidebar")}}},Object(u["c"])(["AppActiveUser"])),mounted:function(){this.model.category.created_by=this.AppActiveUser.first_name+" "+this.AppActiveUser.last_name}},b=g,p=(a("fd22"),a("2877")),m=Object(p["a"])(b,s,i,!1,null,null,null),y=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"items-no-padding add-new-data-sidebar",attrs:{"click-not-close":"","position-right":"",parent:"body",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[t._v("Edit Category")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6",attrs:{settings:t.settings}},[a("div",{staticClass:"p-6"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5 w-full",attrs:{label:"Name",name:"Category Name","data-vv-validate-on":"blur"},model:{value:t.editValue.name,callback:function(e){t.$set(t.editValue,"name",e)},expression:"editValue.name"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("first name"),expression:"errors.has('first name')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("first name"))+"\n      ")]),a("div",{staticClass:"mt-2"},[a("p",{staticStyle:{"font-size":".85rem"}},[t._v("Description")]),a("vs-textarea",{attrs:{height:"200"},model:{value:t.editValue.desc,callback:function(e){t.$set(t.editValue,"desc",e)},expression:"editValue.desc"}})],1)],1)]),a("div",{staticClass:"flex flex-wrap items-center justify-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{ref:"loadableButton",staticClass:"mr-6 vs-con-loading__container",attrs:{id:"button-with-loading"},on:{click:function(e){return t.editCategory()}}},[t._v("Save\n    ")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}},[t._v("Cancel")])],1)],1)},C=[];function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _={name:"CategoryEdit",props:{isSidebarActive:{type:Boolean,required:!0},selected:{required:!0}},components:{VuePerfectScrollbar:l.a},data:function(){return{settings:{maxScrollbarLength:60,wheelSpeed:.6},model:{category:{}}}},methods:{editCategory:function(){var t=this;this.$validator.validateAll().then((function(e){t.$vs.loading({background:t.backgroundLoading,color:t.colorLoading,container:"#button-with-loading",scale:.45});var a=[t.selected];e&&Object(d["b"])().callFunction("CategoryEdit",a).then((function(e){t.$emit("newCategory"),t.notify({text:"Successfully Edited Category!",title:"",color:"success"}),t.isSidebarActiveLocal=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")})).catch((function(e){t.$vs.loading.close("#button-with-loading > .con-vs-loading"),t.notify({text:e.message,title:"Error",color:"danger"})}))}))}},computed:x({isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||this.$emit("closeSidebar")}}},Object(u["c"])(["AppActiveUser"]),{editValue:function(){return this.selected}}),mounted:function(){this.isMounted=!0},created:function(){}},S=_,O=(a("bd99"),Object(p["a"])(S,h,C,!1,null,null,null)),A=O.exports,k=a("f7ea"),j={name:"Category",data:function(){return{categories:[],addCategory:!1,editCategory:!1,selected:{},hide:!1}},components:{Add:y,Edit:A},methods:{cancel:function(){this.selected={}},edit:function(t){this.editCategory=!0,this.selected=t},openConfirm:function(t){this.selected=t,this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm",text:"Are you sure  you want to delete ".concat(t.name," category?"),accept:this.acceptDelete})},acceptDelete:function(){var t=this,e=[{name:this.selected.name}];this.$vs.loading({container:"#table-loader",type:"sound",scale:1}),Object(d["b"])().callFunction("CategoryDelete",e).then((function(){t.notify({text:"Deleted Successful!!",title:"",color:"success"}),t.getCategories()})).catch((function(e){t.$vs.loading.close("#table-loader > .con-vs-loading")}))},getCategories:function(){var t=this;this.$vs.loading({container:"#table-loader",type:"sound",scale:1}),this.axios.get(k["a"]).then((function(e){t.categories=e.data,t.$vs.loading.close("#table-loader > .con-vs-loading")})).catch((function(e){t.$vs.notify({time:2500,title:"Error",text:e.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"}),t.$vs.loading.close("#table-loader  > .con-vs-loading")}))},newCategory:function(){this.getCategories()}},mounted:function(){this.getCategories()}},P=j,$=(a("1e31"),Object(p["a"])(P,o,r,!1,null,"1a5daade",null));e["default"]=$.exports},"7cb1":function(t,e,a){},bd99:function(t,e,a){"use strict";var o=a("1ed4"),r=a.n(o);r.a},fd22:function(t,e,a){"use strict";var o=a("7cb1"),r=a.n(o);r.a}}]);
//# sourceMappingURL=chunk-39022292.8e54d2c0.js.map