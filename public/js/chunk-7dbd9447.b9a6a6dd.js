(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dbd9447"],{1846:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-data-table",{staticClass:"elevation-1",attrs:{search:e.search,headers:e.headers,items:e.docentes,"sort-by":"calories","item-key":"_id","single-expand":e.singleExpand=!0,"show-expand":""},scopedSlots:e._u([{key:"top",fn:function(){return[o("v-toolbar",{attrs:{flat:""}},[o("v-toolbar-title",[e._v("DOCENTES")]),o("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),o("v-text-field",{attrs:{flat:"",color:"white","solo-inverted":"","hide-details":"","background-color":"teal accent-4","prepend-inner-icon":"mdi-magnify",label:"Busqueda"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e.$vuetify.breakpoint.mdAndUp?[o("v-spacer"),o("v-select",{attrs:{color:"white","background-color":"teal accent-4",flat:"","solo-inverted":"","hide-details":"",items:e.headers1,"prepend-inner-icon":"mdi-magnify",label:"Modo de Busqueda "},model:{value:e.sortBy1,callback:function(t){e.sortBy1=t},expression:"sortBy1"}})]:e._e(),o("v-spacer"),void 0,o("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"teal accent-4",dark:""}},"v-btn",s,!1),a),[e._v(" Nuevo docente ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",{attrs:{elevation:"50"}},[o("v-card-title",[o("span",{attrs:{dark:""}},[e._v(e._s(e.formTitle))])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"20",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",rules:e.nombres1,counter:30,label:"NOMBRES"},model:{value:e.nombres,callback:function(t){e.nombres=t},expression:"nombres"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",rules:e.apellidos1,counter:30,label:"APELLIDOS"},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{riquered:"",type:"number",rules:e.numeroDocumento1,label:"NUMERO DE DOCUMENTO"},model:{value:e.numeroDocumento,callback:function(t){e.numeroDocumento=t},expression:"numeroDocumento"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-select",{attrs:{required:"",items:e.roles,label:"ROL"},model:{value:e.rol,callback:function(t){e.rol=t},expression:"rol"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",rules:e.fachaNacimiento1,counter:30,label:"FECHA DE NACIMIENTO"},model:{value:e.fachaNacimiento,callback:function(t){e.fachaNacimiento=t},expression:"fachaNacimiento"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",rules:e.email1,counter:30,label:"EMAIL"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",rules:e.lugarRecidencia1,counter:30,label:"LUGAR DE RECIDENCIA"},model:{value:e.lugarRecidencia,callback:function(t){e.lugarRecidencia=t},expression:"lugarRecidencia"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",type:"number",rules:e.telefono1,label:"TELEFONO"},model:{value:e.telefono,callback:function(t){e.telefono=t},expression:"telefono"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",rules:e.usuario1,label:"USUARIO"},model:{value:e.usuario,callback:function(t){e.usuario=t},expression:"usuario"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{required:"",rules:e.password1,type:e.showpasword?"text":"password","append-icon":e.showpasword?"mdi-eye":"mdi-eye-off",label:"CONTASEÑA"},on:{"click:append":function(t){e.showpasword=!e.showpasword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4"},on:{click:e.close}},[e._v(" Cancel ")]),[o("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4",disabled:e.dessavilitar},on:{click:e.save}},[e._v(" Guardar ")])]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5"},[e._v("ESTAS SEGURO DE QUE QUIERES ELIMINAR ELIMINAR EL USUARIO "+e._s(e.nombres)+" "+e._s(e.apellidos)+"?")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"red",elevation:"2"},on:{click:e.closeDelete}},[e._v("Cancel")]),o("v-btn",{attrs:{color:"green",elvation:"2"},on:{click:e.deleteItemConfirm}},[e._v("Eliminar")]),o("v-spacer")],1)],1)],1)],2)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[a.estado?[o("v-btn",{attrs:{color:"red",fab:"",small:""},on:{click:function(t){return e.activarDesactivarMostrar(1,a)}}},[o("v-icon",{attrs:{color:"white"}},[e._v(" mdi-block-helper ")])],1)]:[o("v-btn",{attrs:{color:"teal accent-4",fab:"",small:""},on:{click:function(t){return e.activarDesactivarMostrar(2,a)}}},[o("v-icon",[e._v(" mdi-check")])],1)],o("v-btn",{staticClass:"mx-1",attrs:{fab:"",small:"",color:"teal accent-4"},on:{click:function(t){return e.editItem(a)}}},[o("v-icon",{attrs:{color:"white"}},[e._v("mdi-pencil")])],1),o("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"red",small:""},on:{click:function(t){return e.deleteItem(a)}}},[o("v-icon",{attrs:{color:"white"}},[e._v("mdi-delete")])],1)]}},{key:"item.estado",fn:function(t){var a=t.item;return[1===a.estado?o("div",[o("span",{staticClass:"teal--text"},[e._v("Activo")])]):e._e(),0===a.estado?o("div",[o("span",{staticClass:"red--text"},[e._v("Inactivo")])]):e._e()]}},{key:"no-data",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0},{key:"expanded-item",fn:function(t){var a=t.headers,s=t.item;return[o("td",{attrs:{colspan:a.rol}},[o("span",{staticStyle:{color:"teal"}},[e._v("ROL")]),e._v(" "+e._s(s.rol)+" ")]),o("td",{attrs:{colspan:a.usuario}},[o("span",{staticStyle:{color:"teal"}},[e._v("USUARIO")]),e._v(" "+e._s(s.usuario)+" ")]),o("td",{},[o("span",{staticStyle:{color:"teal"}},[e._v("TELEFONO")]),e._v(" "+e._s(s.telefono)+" ")]),o("td",{},[o("span",{staticStyle:{color:"teal"}},[e._v("FECHA DE CREACION")]),e._v(" "+e._s(s.createdAt)+" ")])]}}],null,!0)})],1)},s=[],i=o("bc3a"),n=o.n(i),r=o("3d20"),l=o.n(r),c={data:function(){return{singleExpand:!1,showpasword:!1,dialog3:!1,id:"",valor:"",corecto:"",mensaje1:"",nombreSede:"",numeroSede:"",ubicacion:"",nombres:"",rol:"",roles:["ADMIN_ROL","DOCENTE_ROL"],apellidos:"",numeroDocumento:"",telefono:"",fachaNacimiento:"",email:"",lugarRecidencia:"",genero:"",usuario:"",password:"",dialog:!1,dialog1:!1,dialogDelete:!1,docentes:[],components:{},search:"",search1:"",sortBy:"name",sortBy1:"name",headers:[{text:"NOMBRES",align:"nombres",sortable:!1,value:"nombres"},{text:"APELLIDOS",align:"apellidos",sortable:!1,value:"apellidos"},{text:"NUMERO DE DOCUMENTO",value:"numeroDocumento"},{text:"FECHA NACIMIENTO",value:"fachaNacimiento"},{text:"EMAIL",value:"email"},{text:"LUGAR DE RECIDENCIA",value:"lugarRecidencia"},{text:"ESTADO",value:"estado"},{text:"OPCIONES",value:"actions",sortable:!1}],headers1:[{text:"NOMBRES",align:"nombres",sortable:!1,value:"nombres"},{text:"APELLIDOS",align:"apellidos",sortable:!1,value:"apellidos"},{text:"NUMERO DE DOCUMENTO",value:"numeroDocumento"}],editedIndex:-1,nombres1:[function(e){return!!e||"LOS NOMBRES SON REQUERIDOS"},function(e){return e.length<=30||"LOS NOMBRES DEBE TENER MENOS DE 30 CARACTERES"}],numeroDocumento1:[function(e){return!!e||"EL NUMERO DEL DOCUMENTO ES REQUERIDO"}],apellidos1:[function(e){return!!e||"LOS APELLIDOS SON REQUERIDOS"},function(e){return e.length<=30||"LOS APELLIDOS DEBEN TENER MENOS DE 30 CARACTERES"}],fachaNacimiento1:[function(e){return!!e||"LA FECHA DE NACIMIENTO ES  REQUERIDA"},function(e){return e.length<=30||"LA FECHA DE NACIMIENTO DEBEN TENER MENOS DE 30 CARACTERES"}],email1:[function(e){return!!e||"EL EMAIL ES  REQUERIDO"},function(e){return e.length<=30||"EL EMAIL DEBEN TENER MENOS DE 30 CARACTERES"}],lugarRecidencia1:[function(e){return!!e||"EL LUGAR DE RECIDENCIA  ES  REQUERIDA"},function(e){return e.length<=30||"EL LUGAR DE RECIDENCIA DEBEN TENER MENOS DE 30 CARACTERES"}],telefono1:[function(e){return!!e||"EL TELEFONO ES REQUERIDO"}],usuario1:[function(e){return!!e||"EL USUARIO ES REQUERIDO"}],password1:[function(e){return!!e||"LA CONTASEÑA ES REQUERIDO"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"NUEVO DOCENTE":"EDITAR DOCENTE"},dessavilitar:function(){return 0===this.nombres.lengt||0===this.rol.length||0===this.apellidos.length||0===this.numeroDocumento.length||0===this.telefono.length||0===this.fachaNacimiento.length||0===this.email.length||0===this.lugarRecidencia.length||0===this.usuario.length||0===this.password.length}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.listarDocentes()},methods:{error:function(e){l.a.fire({icon:"error",title:"NUMERO DE DOCUMENTO",text:e})},error1:function(e){l.a.fire({icon:"error",title:"USUARIO",text:e})},msjAlerta:function(e){l.a.fire({position:"top",icon:"success",title:e,showConfirmButton:!1,timer:3e3})},listarDocentes:function(){var e=this,t={headers:{token:this.$store.state.token}};n.a.get("docentes",t).then((function(t){e.docentes=t.data.docente})).catch((function(e){console.log("errosr"),console.log(e)}))},editItem:function(e){this.id=e._id,this.editedIndex=0,this.nombres=e.nombres,this.rol=e.rol,this.apellidos=e.apellidos,this.numeroDocumento=e.numeroDocumento,this.telefono=e.telefono,this.fachaNacimiento=e.fachaNacimiento,this.email=e.email,this.lugarRecidencia=e.lugarRecidencia,this.usuario=e.usuario,this.dialog=!0},deleteItem:function(e){this.nombres=e.nombres,this.apellidos=e.apellidos,this.dialogDelete=!0,this.id=e._id,this.editedIndex=0},deleteItemConfirm:function(){console.log(this.id);var e=this,t={headers:{token:this.$store.state.token}};n.a.delete("docentes/".concat(this.id),t).then((function(){e.listarDocentes(),e.closeDelete(),e.corecto="DOCENTE ELIMINADO CORECTAMENTE",e.msjAlerta(e.corecto)})).catch((function(e){console.log(e)}))},close:function(){this.dialog=!1,this.limpiar()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.id="",this.limpiar(),this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},limpiar:function(){this.nombres="",this.rol="",this.apellidos="",this.numeroDocumento="",this.telefono="",this.fachaNacimiento="",this.email="",this.lugarRecidencia="",this.genero="",this.usuario="",this.password=""},save:function(){var e=this,t=this;if(-1===this.editedIndex){console.log("Guardadndo");var o={headers:{token:this.$store.state.token}};n.a.post("docentes",{nombres:this.nombres,rol:this.rol,apellidos:this.apellidos,numeroDocumento:this.numeroDocumento,telefono:this.telefono,fachaNacimiento:this.fachaNacimiento,email:this.email,lugarRecidencia:this.lugarRecidencia,usuario:this.usuario,password:this.password},o).then((function(){console.log("error"),t.listarDocentes(),t.limpiar(),t.close(),t.corecto="DOCENTE GUARDADO CORECTAMENTE",t.msjAlerta(t.corecto)})).catch((function(t){e.valor=t.response.data.errors[0].param,"numeroDocumento"===e.valor?(e.mensaje1=t.response.data.errors[0].msg,e.error(e.mensaje1)):(e.mensaje1=t.response.data.errors[0].msg,e.error1(e.mensaje1))}))}else{var a={headers:{token:this.$store.state.token}};n.a.put("docentes/".concat(this.id),{nombres:this.nombres,rol:this.rol,apellidos:this.apellidos,numeroDocumento:this.numeroDocumento,telefono:this.telefono,fachaNacimiento:this.fachaNacimiento,email:this.email,lugarRecidencia:this.lugarRecidencia,usuario:this.usuario,password:this.password},a).then((function(){console.log("editando"),t.listarDocentes(),t.limpiar(),t.close(),t.corecto="DOCENTE EDITADO CORECTAMENTE",t.msjAlerta(t.corecto)})).catch((function(e){console.log(e.msg)}))}this.close()},activarDesactivarMostrar:function(e,t){var o=t._id;if(console.log(o),1==e){var a=this,s={headers:{token:this.$store.state.token}};n.a.put("docentes/desactivar/".concat(o),{estado:0},s).then((function(){a.listarDocentes(),a.limpiar(),a.corecto="DOCENTE FUE INACTIVADO CORECTAMENTE",a.msjAlerta(a.corecto)})).catch((function(e){console.log(e)}))}else if(2==e){var i=this,r={headers:{token:this.$store.state.token}};n.a.put("docentes/activar/".concat(o),{estado:1},r).then((function(){i.listarDocentes(),i.listarDocentes(),i.corecto="DOCENTE FUE ACTIVADO CORECTAMENTE",i.msjAlerta(i.corecto)})).catch((function(e){console.log(e)}))}}}},d=c,u=(o("b177"),o("2877")),m=o("6544"),E=o.n(m),h=o("8336"),v=o("b0af"),f=o("99d9"),p=o("62ad"),D=o("a523"),b=o("8fea"),O=o("169a"),R=o("ce7e"),N=o("132d"),g=o("0fd9"),A=o("b974"),C=o("2fa4"),I=o("8654"),x=o("71d9"),S=o("2a7f"),T=Object(u["a"])(d,a,s,!1,null,null,null);t["default"]=T.exports;E()(T,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:p["a"],VContainer:D["a"],VDataTable:b["a"],VDialog:O["a"],VDivider:R["a"],VIcon:N["a"],VRow:g["a"],VSelect:A["a"],VSpacer:C["a"],VTextField:I["a"],VToolbar:x["a"],VToolbarTitle:S["a"]})},2714:function(e,t,o){},b177:function(e,t,o){"use strict";o("2714")}}]);
//# sourceMappingURL=chunk-7dbd9447.b9a6a6dd.js.map