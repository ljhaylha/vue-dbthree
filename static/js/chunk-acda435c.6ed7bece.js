(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acda435c"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function i(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,a){var l=s(),o=e-l,r=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=r;var s=Math.easeInOutQuad(c,l,o,t);i(s),c<t?n(e):a&&"function"===typeof a&&a()};u()}},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function i(e,t){function a(a){var n=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=i.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var l=s.getBoundingClientRect(),o=s.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",s.appendChild(o)),i.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var s={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},l=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(l)),s.install=l;t["a"]=s},"8d41":function(e,t,a){},cfb0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"Name"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"Sex",clearable:""},model:{value:e.listQuery.sex,callback:function(t){e.$set(e.listQuery,"sex",t)},expression:"listQuery.sex"}},e._l(e.sexOptions,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"Status",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.calendarStatusOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      Search\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      Add\n    ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v("\n      Export\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":e.getSortClass("id")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.teacherCode))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Date",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("parseTime")(n.ctime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Name",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",{staticClass:"link-type",on:{click:function(t){return e.handleUpdate(n)}}},[e._v(e._s(n.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Sex",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.sex))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Age",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.age))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"职称",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.jobName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"工资",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.salary))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Password",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.password))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Status","class-name":"status-col",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tag",{attrs:{type:"{row.status}"}},[e._v(e._s(e._f("statusFilter")(n.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"250","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row,i=t.$index;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v("\n          Edit\n        ")]),e._v(" "),"deleted"!=n.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(n,i)}}},[e._v("\n          Delete\n        ")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleCourse(n)}}},[e._v("\n          课程\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"工号",prop:"teacherCode"}},[a("el-input",{model:{value:e.temp.teacherCode,callback:function(t){e.$set(e.temp,"teacherCode",t)},expression:"temp.teacherCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"name",prop:"name"}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Sex"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.sex,callback:function(t){e.$set(e.temp,"sex",t)},expression:"temp.sex"}},e._l(e.sexOptions,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Status"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.calendarStatusOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"age",prop:"age"}},[a("el-input",{model:{value:e.temp.age,callback:function(t){e.$set(e.temp,"age",t)},expression:"temp.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"职称",prop:"jobName"}},[a("el-input",{model:{value:e.temp.jobName,callback:function(t){e.$set(e.temp,"jobName",t)},expression:"temp.jobName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工资",prop:"salary"}},[a("el-input",{model:{value:e.temp.salary,callback:function(t){e.$set(e.temp,"salary",t)},expression:"temp.salary"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"password",prop:"password"}},[a("el-input",{model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        Confirm\n      ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},i=[],s=(a("55dd"),a("20d6"),a("b775"));function l(e){return Object(s["a"])({url:"/vue-element-admin/teacher/list",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/vue-element-admin/teacher/pv",method:"get",params:{pv:e}})}function r(e){return Object(s["a"])({url:"/vue-element-admin/teacher/create",method:"post",data:e})}function c(e){return Object(s["a"])({url:"/vue-element-admin/teacher/update",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/vue-element-admin/teacher/delete",method:"post",params:{id:e}})}var d=a("6724"),p=a("ed08"),m=a("333d"),f=[{key:-1,display_name:"黑名单"},{key:0,display_name:"正常"}],v=f.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),h={name:"ComplexTable",components:{Pagination:m["a"]},directives:{waves:d["a"]},filters:{statusFilter:function(e){return v[e]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,name:void 0,type:void 0,sort:"+id"},sexOptions:["男","女"],calendarStatusOptions:f,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{teacherCode:void 0,ctime:new Date,name:"",sex:"男",status:0},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{teacherCode:[{required:!0,message:"teacherCode is required",trigger:"blur"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],name:[{required:!0,message:"name is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,l(this.listQuery).then((function(t){e.list=t.data.items,e.total=t.data.total,setTimeout((function(){e.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,ctime:new Date,name:"",status:0,sex:"男",password:"123456"}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.teacherId=parseInt(100*Math.random())+1024,e.temp.ctime=(new Date).getTime(),r(e.temp).then((function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);a.timestamp=+new Date(a.timestamp),c(a).then((function(){var t=e.list.findIndex((function(t){return t.teacherId===e.temp.teacherId}));e.list.splice(t,1,e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(e,t){var a=this;u(e.teacherId).then((function(){a.list.splice(t,1),a.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))},handleCourse:function(e){this.$router.push({path:"/manage/course",query:e})},handleFetchPv:function(e){var t=this;o(e).then((function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-6e83591c"),a.e("chunk-5164a781"),a.e("chunk-5bdd67a2"),a.e("chunk-54b312fe")]).then(a.bind(null,"4bf8d")).then((function(t){var a=["timestamp","title","type","importance","status"],n=["timestamp","title","type","importance","status"],i=e.formatJson(n);t.export_json_to_excel({header:a,data:i,filename:"table-list"}),e.downloadLoading=!1}))},formatJson:function(e){return this.list.map((function(t){return e.map((function(e){return"timestamp"===e?Object(p["f"])(t[e]):t[e]}))}))},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}}},b=h,y=a("2877"),g=Object(y["a"])(b,n,i,!1,null,null,null);t["default"]=g.exports}}]);