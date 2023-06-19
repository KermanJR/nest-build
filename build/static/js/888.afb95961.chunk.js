"use strict";(self.webpackChunknest_rental=self.webpackChunknest_rental||[]).push([[888],{68418:function(e,t,n){var i=n(66934),r=n(64554),o=n(91614),a=n(80184),l=(0,i.ZP)(r.Z)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4),";\n")}));t.Z=function(e){var t=e.children;return(0,a.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,a.jsx)(o.Z,{maxWidth:"lg",children:t})})}},69141:function(e,t,n){var i=n(29439),r=n(72791),o=n(24518),a=n(64554),l=n(20890),d=n(13400),c=n(71715),s=n(66934),u=n(68036),h=n(74934),v=n(80184),p=(0,s.ZP)(o.Z)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.main,";\n     color: ").concat(t.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark,";\n     }\n    ")}));t.Z=function(){var e=(0,r.useState)(!1),t=(0,i.Z)(e,2),n=t[0],o=t[1],s=(0,r.useRef)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(a.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,v.jsxs)(a.Z,{display:"flex",alignItems:"center",children:[(0,v.jsx)(l.Z,{variant:"h5",color:"text.secondary",children:"A\xe7\xf5es:"}),(0,v.jsx)(p,{sx:{ml:1},startIcon:(0,v.jsx)(u.Z,{}),variant:"contained",children:"Excluir"})]}),(0,v.jsx)(d.Z,{color:"primary",onClick:function(){o(!0)},ref:s,sx:{ml:2,p:1},children:(0,v.jsx)(h.Z,{})})]}),(0,v.jsx)(c.Z,{keepMounted:!0,anchorEl:s.current,open:n,onClose:function(){o(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}})]})}},66888:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var i=n(6907),r=n(29439),o=n(61889),a=n(20890),l=n(24518),d=n(72791),c=n(5167),s=n(74696),u=n(74165),h=n(15861),v=n(98243),p=n(78820),f=n(88315),m=n(41591),x=n(97438),Z=n(39709),g=n(5229),j=n(80184),y=function(e){var t,n,i,o,a,l,s,y,_,b,C,w,k,S,z,P,B,M,I,D,E,R,W,N,q,F,T,V=e.openModal,H=e.setModal,L=e.data,O=e.edit,A=d.useState(null===L||void 0===L||null===(t=L.entidade)||void 0===t?void 0:t.razao_social),G=(0,r.Z)(A,2),J=G[0],$=G[1],Y=d.useState(""),U=(0,r.Z)(Y,2),K=U[0],X=U[1],Q=d.useState(null===L||void 0===L||null===(n=L.entidade)||void 0===n?void 0:n.nome_fantasia),ee=(0,r.Z)(Q,2),te=ee[0],ne=ee[1],ie=d.useState(""),re=(0,r.Z)(ie,2),oe=re[0],ae=re[1],le=d.useState(null===L||void 0===L||null===(i=L.entidade)||void 0===i?void 0:i.documento),de=(0,r.Z)(le,2),ce=de[0],se=de[1],ue=d.useState(""),he=(0,r.Z)(ue,2),ve=he[0],pe=he[1],fe=d.useState(null===L||void 0===L||null===(o=L.entidade)||void 0===o?void 0:o.email),me=(0,r.Z)(fe,2),xe=me[0],Ze=me[1],ge=d.useState(""),je=(0,r.Z)(ge,2),ye=je[0],_e=je[1],be=d.useState(null===L||void 0===L||null===(a=L.entidade)||void 0===a?void 0:a.email),Ce=(0,r.Z)(be,2),we=(Ce[0],Ce[1],d.useState("")),ke=(0,r.Z)(we,2),Se=(ke[0],ke[1],d.useState(null===L||void 0===L||null===(l=L.entidade)||void 0===l?void 0:l.id)),ze=(0,r.Z)(Se,2),Pe=ze[0],Be=(ze[1],d.useState(null===L||void 0===L||null===(s=L.entidade)||void 0===s||null===(y=s.enderecos[0])||void 0===y||null===(_=y.endereco)||void 0===_?void 0:_.rua)),Me=(0,r.Z)(Be,2),Ie=Me[0],De=Me[1],Ee=d.useState(""),Re=(0,r.Z)(Ee,2),We=Re[0],Ne=Re[1],qe=d.useState(null===L||void 0===L||null===(b=L.entidade)||void 0===b||null===(C=b.enderecos[0])||void 0===C||null===(w=C.endereco)||void 0===w?void 0:w.bairro),Fe=(0,r.Z)(qe,2),Te=Fe[0],Ve=Fe[1],He=d.useState(""),Le=(0,r.Z)(He,2),Oe=Le[0],Ae=Le[1],Ge=d.useState(null===L||void 0===L||null===(k=L.entidade)||void 0===k||null===(S=k.enderecos[0])||void 0===S||null===(z=S.endereco)||void 0===z||null===(P=z.cidade)||void 0===P?void 0:P.nome),Je=(0,r.Z)(Ge,2),$e=Je[0],Ye=Je[1],Ue=d.useState(""),Ke=(0,r.Z)(Ue,2),Xe=Ke[0],Qe=Ke[1],et=d.useState(null===L||void 0===L||null===(B=L.entidade)||void 0===B||null===(M=B.enderecos[0])||void 0===M||null===(I=M.endereco)||void 0===I||null===(D=I.cidade)||void 0===D||null===(E=D.estado)||void 0===E?void 0:E.sigla),tt=(0,r.Z)(et,2),nt=tt[0],it=tt[1],rt=d.useState(""),ot=(0,r.Z)(rt,2),at=ot[0],lt=ot[1],dt=d.useState(null===L||void 0===L||null===(R=L.entidade)||void 0===R||null===(W=R.enderecos[0])||void 0===W||null===(N=W.endereco)||void 0===N?void 0:N.numero),ct=(0,r.Z)(dt,2),st=ct[0],ut=ct[1],ht=d.useState(null),vt=(0,r.Z)(ht,2),pt=vt[0],ft=vt[1],mt=d.useState(""),xt=(0,r.Z)(mt,2),Zt=xt[0],gt=xt[1],jt=d.useState(""),yt=(0,r.Z)(jt,2),_t=yt[0],bt=yt[1],Ct=d.useState(null===L||void 0===L||null===(q=L.entidade)||void 0===q||null===(F=q.enderecos[0])||void 0===F||null===(T=F.endereco)||void 0===T?void 0:T.cep),wt=(0,r.Z)(Ct,2),kt=wt[0],St=wt[1],zt=d.useState(""),Pt=(0,r.Z)(zt,2),Bt=Pt[0],Mt=Pt[1],It=d.useState(""),Dt=(0,r.Z)(It,2),Et=(Dt[0],Dt[1],d.useState("")),Rt=(0,r.Z)(Et,2),Wt=(Rt[0],Rt[1],d.useState(!1)),Nt=(0,r.Z)(Wt,2),qt=Nt[0],Ft=Nt[1],Tt=d.useState(""),Vt=(0,r.Z)(Tt,2),Ht=Vt[0],Lt=Vt[1],Ot=d.useState(""),At=(0,r.Z)(Ot,2),Gt=At[0],Jt=At[1];function $t(){return($t=(0,h.Z)((0,u.Z)().mark((function e(t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Z)(t);case 2:(n=e.sent)?(Ne(n.logradouro),Qe(n.localidade),lt(n.uf),Ae(n.bairro)):(Ne(""),Qe(""),lt(""),Ae(""));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Yt(){return Yt=(0,h.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Ft(!0),g.Z.put("/usuarios/".concat(Pe),{documento:ce,email:xe,nome_fantasia:te,razao_social:J,tipo:"J"}).then((function(e){202==e.status&&(Lt("Cliente editado com sucesso."),Jt(""),window.location.reload())})).catch((function(e){var t,n;"ER_DUP_ENTRY"==(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code)?(Jt("CNPJ j\xe1 utilizado por outra conta."),Lt("")):(Jt("Erro no servidor, por favor, tente novamente."),Lt(""))})),Ft(!1);case 4:case"end":return e.stop()}}),e)}))),Yt.apply(this,arguments)}function Ut(){return Ut=(0,h.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Ft(!0),g.Z.post("/usuarios",{documento:ve,email:ye,nome_fantasia:oe,razao_social:K,tipo:"J",id_perfil:2,login:ye}).then((function(e){var t,n;Lt("Cliente cadastrado com sucesso."),Qt(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.entidade)||void 0===n?void 0:n.id),Jt(""),window.location.reload()})).catch((function(e){"unique"===e.response.data.errors[0].rule&&"email"===e.response.data.errors[0].field?(Jt("Email j\xe1 cadastrado no sistema."),Lt("")):"unique"===e.response.data.errors[0].rule&&"documento"===e.response.data.errors[0].field&&(Jt("CNPJ j\xe1 cadastrado no sistema."),Lt(""))})),Ft(!1);case 4:case"end":return e.stop()}}),e)}))),Ut.apply(this,arguments)}function Kt(e){return Xt.apply(this,arguments)}function Xt(){return Xt=(0,h.Z)((0,u.Z)().mark((function e(t){var n,i,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t),e.next=3,g.Z.get("/cidades/".concat(n));case 3:return i=e.sent,r=i.data,e.abrupt("return",null===r||void 0===r?void 0:r.id);case 6:case"end":return e.stop()}}),e)}))),Xt.apply(this,arguments)}function Qt(e){return en.apply(this,arguments)}function en(){return en=(0,h.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g.Z,e.t1="/enderecos/".concat(t),e.next=4,Kt(Xe);case 4:e.t2=e.sent,e.t3=Bt,e.t4=Oe,e.t5=_t||"N\xe3o possui",e.t6=We,e.t7=pt,e.t8={id_cidade:e.t2,cep:e.t3,bairro:e.t4,complemento:e.t5,rua:e.t6,numero:e.t7,contato:"",telefone:"",email:"",nome_obra:"",tipo:"C"},e.t0.post.call(e.t0,e.t1,e.t8).then((function(e){})).catch((function(e){console.log(e)}));case 12:case"end":return e.stop()}}),e)}))),en.apply(this,arguments)}var tn=(0,d.useContext)(c.S).usuario;return(0,d.useEffect)((function(){!function(e){$t.apply(this,arguments)}(Bt)}),[Bt]),(0,d.useEffect)((function(){!function(e){var t=e.replace(/\D/g,"");14===t.length&&pe(t.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"))}(ve)}),[ve]),(0,j.jsx)(j.Fragment,{children:V&&(0,j.jsxs)("div",{className:v.Z.modal,children:[(0,j.jsx)("div",{className:v.Z.modal__divCloseButton,children:(0,j.jsx)("button",{className:v.Z.modal__divCloseButton__closeButton,onClick:function(e){return H(!V)},children:(0,j.jsx)(p.LHV,{})})}),(0,j.jsxs)("section",{children:[1===(null===tn||void 0===tn?void 0:tn.id_perfil)?(0,j.jsx)(f.D,{children:"Editar cliente"}):(0,j.jsx)(f.D,{children:"Detalhes do cliente"}),(0,j.jsxs)("form",{onSubmit:O?function(e){return Yt.apply(this,arguments)}:function(e){return Ut.apply(this,arguments)},children:[(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gridGap:"2rem",width:"100%",alignItems:"center",marginTop:"1rem"},children:[(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"razao_social",type:"text",label:"Raz\xe3o social",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite a raz\xe3o social",value:O?J:K,onChange:O?function(e){return $(e.target.value)}:function(e){return X(e.target.value)}})}),(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"fantasy_name",type:"text",label:"Nome fantasia",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite o nome fantasia",value:O?te:oe,onChange:O?function(e){return ne(e.target.value)}:function(e){return ae(e.target.value)}})})]}),(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gridGap:"2rem",width:"100%",alignItems:"center"},children:[(0,j.jsx)("div",{style:{marginTop:"1rem",width:"100%"},children:(0,j.jsx)(x.Z,{id:"email_client",type:"text",label:"Email",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite o e-mail",value:O?xe:ye,onChange:O?function(e){return Ze(e.target.value)}:function(e){return _e(e.target.value)},onBlur:O?function(e){return Ze(e.target.value)}:function(e){return _e(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})}),(0,j.jsx)("div",{style:{marginTop:"1rem",width:"100%"},children:(0,j.jsx)(x.Z,{id:"cnpj_client",type:"text",label:"CNPJ",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite o CNPJ",value:O?ce:ve,onChange:O?function(e){return se(e.target.value)}:function(e){return pe(e.target.value)},onBlur:O?function(e){return se(e.target.value)}:function(e){return pe(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})})]}),(0,j.jsxs)("div",{className:v.Z.formCheckout__div,style:{marginTop:"2rem"},children:[(0,j.jsx)(f.D,{level:3,children:"Detalhes do faturamento"}),(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gridGap:"1rem"},children:[(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"cep_client",type:"number",label:"CEP",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite seu CEP",value:O?kt:Bt,onChange:O?function(e){return St(e.target.value)}:function(e){return Mt(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})}),(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"street_client",type:"text",label:"Rua/Av",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite sua rua ou avenida",value:O?Ie:We,onChange:function(e){return De(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})}),(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"number_client",type:"number",label:"N\xfamero",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite o n\xfamero",value:O?st:pt,onChange:O?function(e){return ut(e.target.value)}:function(e){return ft(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})})]}),(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gridGap:"1rem",marginTop:"1rem"},children:[(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"country_client",type:"text",label:"Cidade",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite sua cidade",value:O?$e:Xe,onChange:O?function(e){return Ye(e.target.value)}:function(e){return Qe(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})}),(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"state_client",type:"text",label:"Estado",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite seu estado",value:O?nt:at,onChange:O?function(e){return it(e.target.value)}:function(e){return lt(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})}),(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"neighboour_client",type:"text",label:"Bairro",fullWidth:!0,size:"small",required:!0,color:"primary",placeholder:"Digite seu bairro",value:O?Te:Oe,onChange:O?function(e){return Ve(e.target.value)}:function(e){return Ae(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})}),(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(x.Z,{id:"complement_client",type:"text",label:"Complemento",fullWidth:!0,size:"small",color:"primary",placeholder:"Digite um complemento",value:O?Zt:_t,onChange:O?function(e){return gt(e.target.value)}:function(e){return bt(e.target.value)},disabled:3===(null===tn||void 0===tn?void 0:tn.id_perfil)})})]})]}),3===(null===tn||void 0===tn?void 0:tn.id_perfil)?"":(0,j.jsxs)("div",{style:{display:"flex",gridGap:"1rem",width:"20rem",marginTop:"1rem"},children:[O?(0,j.jsx)(Z.Z,{color:"primary",type:"submit",variant:"contained",size:"medium",loading:!!qt,children:"Editar"}):(0,j.jsx)(Z.Z,{color:"primary",type:"submit",variant:"contained",size:"medium",loading:!!qt,children:"Cadastrar"}),(0,j.jsx)(Z.Z,{color:"warning",type:"submit",variant:"contained",size:"medium",onClick:function(e){return H(!V)},children:"Cancelar"})]}),Ht&&(0,j.jsx)("p",{style:{color:"green"},children:Ht}),Gt&&(0,j.jsx)("p",{style:{color:"red"},children:Gt})]})]})]})})};var _=function(){var e=d.useState(!1),t=(0,r.Z)(e,2),n=t[0],i=t[1],u=(0,d.useContext)(c.S).usuario;return(0,j.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,j.jsxs)(o.ZP,{item:!0,children:[(0,j.jsx)(a.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Clientes"}),(0,j.jsx)(a.Z,{variant:"subtitle2",children:"Gerencie os clientes da sua empresa."})]}),(0,j.jsx)(o.ZP,{item:!0,children:3===(null===u||void 0===u?void 0:u.id_perfil)?"":(0,j.jsx)(l.Z,{sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,j.jsx)(s.Z,{fontSize:"small"}),style:{backgroundColor:"rgb(18, 80, 130)"},onClick:function(e){return i(!n)},children:"Cadastrar cliente"})}),(0,j.jsx)(y,{data:"",edit:!1,setModal:i,openModal:n})]})},b=n(68418),C=n(91614),w=n(57621),k=n(93433),S=n(30960),z=n(56355),P=n(13967),B=n(64554),M=n(9585),I=n(68096),D=n(94721),E=n(39281),R=n(79836),W=n(56890),N=n(35855),q=n(53994),F=n(53382),T=n(94454),V=n(70493),H=n(13400),L=n(97513),O=n(34045),A=n(31675),G=n(39126),J=n(69141),$=function(e){var t=e.clients,n=(0,d.useState)([]),i=(0,r.Z)(n,2),o=i[0],l=i[1],s=o.length>0,v=(0,d.useState)(0),p=(0,r.Z)(v,2),f=p[0],m=p[1],x=(0,d.useState)(5),Z=(0,r.Z)(x,2),g=Z[0],_=Z[1],b=(0,d.useCallback)((function(){var e=O.P6.json_to_sheet(t),n=O.P6.book_new();O.P6.book_append_sheet(n,e,"Data"),(0,O.Fv)(n,"Clientes.xlsx")}),[t]),C=function(e){return e.filter((function(e){return!0}))}(t),$=function(e,t,n){return e.slice(t*n,t*n+n)}(C,f,g),Y=(o.length>0&&(o.length,t.length),o.length,t.length,(0,P.Z)()),U=(0,d.useState)([]),K=(0,r.Z)(U,2),X=K[0],Q=K[1],ee=(0,d.useState)([]),te=(0,r.Z)(ee,2),ne=(te[0],te[1],d.useState(!1)),ie=(0,r.Z)(ne,2),re=ie[0],oe=ie[1];function ae(e){return le.apply(this,arguments)}function le(){return le=(0,h.Z)((0,u.Z)().mark((function e(t){var n,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return oe(!re),Q(null),e.next=4,S.hi.get("/usuarios/".concat(t));case 4:n=e.sent,i=n.data,Q(i||null);case 7:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}var de=(0,d.useContext)(c.S).usuario,ce=[];return ce=$.filter((function(e){return"contato@nestrental.com.br"!=e.email&&"vendedor@nestrental.com.br"!=e.email})),(0,j.jsxs)(w.Z,{children:[s&&(0,j.jsx)(B.Z,{flex:1,p:2,children:(0,j.jsx)(J.Z,{})}),!s&&(0,j.jsx)(M.Z,{action:(0,j.jsxs)(B.Z,{width:150,children:[(0,j.jsx)(I.Z,{fullWidth:!0,variant:"outlined"}),(0,j.jsx)(z.veA,{onClick:b,style:{textAlign:"right",position:"relative",left:"7rem",height:"25px",width:"25px",cursor:"pointer"}})]}),title:"Clientes"}),(0,j.jsx)(D.Z,{}),(0,j.jsx)(E.Z,{children:(0,j.jsxs)(R.Z,{children:[(0,j.jsx)(W.Z,{children:(0,j.jsxs)(N.Z,{children:[(0,j.jsx)(q.Z,{}),(0,j.jsx)(q.Z,{children:"Cliente"}),(0,j.jsx)(q.Z,{children:"CNPJ"}),(0,j.jsx)(q.Z,{children:"Contato"}),(0,j.jsx)(q.Z,{align:"right",children:"A\xe7\xf5es"})]})}),(0,j.jsx)(F.Z,{children:ce.map((function(e){var t=o.includes(e.id);return(0,j.jsxs)(N.Z,{hover:!0,selected:t,children:[(0,j.jsx)(q.Z,{padding:"checkbox",children:(0,j.jsx)(T.Z,{color:"primary",checked:t,onChange:function(t){return n=e.id,void(o.includes(n)?l((function(e){return e.filter((function(e){return e!==n}))})):l((function(e){return[].concat((0,k.Z)(e),[n])})));var n},value:t})}),(0,j.jsx)(q.Z,{children:(0,j.jsx)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.entidade.razao_social})}),(0,j.jsx)(q.Z,{children:(0,j.jsx)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.entidade.documento})}),(0,j.jsx)(q.Z,{children:(0,j.jsx)(a.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.entidade.email})}),1===(null===de||void 0===de?void 0:de.id_perfil)?(0,j.jsx)(q.Z,{align:"right",children:(0,j.jsx)(V.Z,{title:"Editar cliente",arrow:!0,children:(0,j.jsx)(H.Z,{sx:{"&:hover":{background:Y.colors.primary.lighter},color:Y.palette.primary.main},color:"inherit",size:"small",onClick:function(t){return ae(e.id)},children:(0,j.jsx)(A.Z,{fontSize:"small"})})})}):(0,j.jsx)(q.Z,{align:"right",children:(0,j.jsx)(V.Z,{title:"Visuzalizar cliente",arrow:!0,children:(0,j.jsx)(H.Z,{sx:{"&:hover":{background:Y.colors.primary.lighter},color:Y.palette.primary.main},color:"inherit",size:"small",onClick:function(t){return ae(e.id)},children:(0,j.jsx)(G.rCC,{style:{width:"20px",height:"20px"}})})})})]},e.id)}))})]})}),(0,j.jsx)(B.Z,{p:2,children:(0,j.jsx)(L.Z,{component:"div",count:C.length,onPageChange:function(e,t){m(t)},onRowsPerPageChange:function(e){_(parseInt(e.target.value))},page:f,rowsPerPage:g,rowsPerPageOptions:[5,10,25,30]})}),X&&re&&(0,j.jsx)(y,{openModal:re,setModal:oe,data:X,edit:!0})]})};$.defaultProps={clients:[]};var Y=$;var U=function(){var e=(0,d.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1];function o(){return(o=(0,h.Z)((0,u.Z)().mark((function e(){var t,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get("/usuarios/type/2");case 2:t=e.sent,n=t.data,i(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),(0,j.jsx)(w.Z,{children:(0,j.jsx)(Y,{clients:n||[],className:""})})};var K=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.ql,{children:(0,j.jsx)("title",{children:"Vendas - Clientes"})}),(0,j.jsx)(b.Z,{children:(0,j.jsx)(_,{})}),(0,j.jsx)(C.Z,{maxWidth:"lg",children:(0,j.jsx)(o.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsx)(U,{})})})})]})}},74696:function(e,t,n){var i=n(95318);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.Z=a},68036:function(e,t,n){var i=n(95318);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)([(0,o.jsx)("path",{d:"M8 9h8v10H8z",opacity:".3"},"0"),(0,o.jsx)("path",{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"},"1")],"DeleteTwoTone");t.Z=a},31675:function(e,t,n){var i=n(95318);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)([(0,o.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,o.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.Z=a},74934:function(e,t,n){var i=n(95318);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVertTwoTone");t.Z=a},94454:function(e,t,n){n.d(t,{Z:function(){return k}});var i=n(4942),r=n(63366),o=n(87462),a=n(72791),l=n(94419),d=n(12065),c=n(97278),s=n(76189),u=n(80184),h=(0,s.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,s.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,s.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=n(14036),m=n(31402),x=n(66934),Z=n(21217);function g(e){return(0,Z.Z)("MuiCheckbox",e)}var j=(0,n(75878).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],_=(0,x.ZP)(c.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,f.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,o.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,d.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,i.Z)(t,"&.".concat(j.checked,", &.").concat(j.indeterminate),{color:n.palette[r.color].main}),(0,i.Z)(t,"&.".concat(j.disabled),{color:n.palette.action.disabled}),t))})),b=(0,u.jsx)(v,{}),C=(0,u.jsx)(h,{}),w=(0,u.jsx)(p,{}),k=a.forwardRef((function(e,t){var n,i,d=(0,m.Z)({props:e,name:"MuiCheckbox"}),c=d.checkedIcon,s=void 0===c?b:c,h=d.color,v=void 0===h?"primary":h,p=d.icon,x=void 0===p?C:p,Z=d.indeterminate,j=void 0!==Z&&Z,k=d.indeterminateIcon,S=void 0===k?w:k,z=d.inputProps,P=d.size,B=void 0===P?"medium":P,M=(0,r.Z)(d,y),I=j?S:x,D=j?S:s,E=(0,o.Z)({},d,{color:v,indeterminate:j,size:B}),R=function(e){var t=e.classes,n=e.indeterminate,i=e.color,r={root:["root",n&&"indeterminate","color".concat((0,f.Z)(i))]},a=(0,l.Z)(r,g,t);return(0,o.Z)({},t,a)}(E);return(0,u.jsx)(_,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":j},z),icon:a.cloneElement(I,{fontSize:null!=(n=I.props.fontSize)?n:B}),checkedIcon:a.cloneElement(D,{fontSize:null!=(i=D.props.fontSize)?i:B}),ownerState:E,ref:t},M,{classes:R}))}))},97278:function(e,t,n){n.d(t,{Z:function(){return j}});var i=n(29439),r=n(63366),o=n(87462),a=n(72791),l=n(28182),d=n(94419),c=n(14036),s=n(66934),u=n(98278),h=n(52930),v=n(23701),p=n(21217);function f(e){return(0,p.Z)("PrivateSwitchBase",e)}(0,n(75878).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var m=n(80184),x=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=(0,s.ZP)(v.Z)((function(e){var t=e.ownerState;return(0,o.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),g=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),j=a.forwardRef((function(e,t){var n=e.autoFocus,a=e.checked,s=e.checkedIcon,v=e.className,p=e.defaultChecked,j=e.disabled,y=e.disableFocusRipple,_=void 0!==y&&y,b=e.edge,C=void 0!==b&&b,w=e.icon,k=e.id,S=e.inputProps,z=e.inputRef,P=e.name,B=e.onBlur,M=e.onChange,I=e.onFocus,D=e.readOnly,E=e.required,R=e.tabIndex,W=e.type,N=e.value,q=(0,r.Z)(e,x),F=(0,u.Z)({controlled:a,default:Boolean(p),name:"SwitchBase",state:"checked"}),T=(0,i.Z)(F,2),V=T[0],H=T[1],L=(0,h.Z)(),O=j;L&&"undefined"===typeof O&&(O=L.disabled);var A="checkbox"===W||"radio"===W,G=(0,o.Z)({},e,{checked:V,disabled:O,disableFocusRipple:_,edge:C}),J=function(e){var t=e.classes,n=e.checked,i=e.disabled,r=e.edge,o={root:["root",n&&"checked",i&&"disabled",r&&"edge".concat((0,c.Z)(r))],input:["input"]};return(0,d.Z)(o,f,t)}(G);return(0,m.jsxs)(Z,(0,o.Z)({component:"span",className:(0,l.Z)(J.root,v),centerRipple:!0,focusRipple:!_,disabled:O,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),L&&L.onFocus&&L.onFocus(e)},onBlur:function(e){B&&B(e),L&&L.onBlur&&L.onBlur(e)},ownerState:G,ref:t},q,{children:[(0,m.jsx)(g,(0,o.Z)({autoFocus:n,checked:a,defaultChecked:p,className:J.input,disabled:O,id:A&&k,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;H(t),M&&M(e,t)}},readOnly:D,ref:z,required:E,ownerState:G,tabIndex:R,type:W},"checkbox"===W&&void 0===N?{}:{value:N},S)),V?s:w]}))}))},98243:function(e,t){t.Z={modal:"Modal_modal__5Lj9m",modal__divCloseButton:"Modal_modal__divCloseButton__tTZ3Y",modal__divCloseButton__closeButton:"Modal_modal__divCloseButton__closeButton__ABY0m",modal__closeButton:"Modal_modal__closeButton__ZDrqX",modalCategory:"Modal_modalCategory__IjrSy",modalCategory__divCloseButton:"Modal_modalCategory__divCloseButton__5mZKo",modalCategory__closeButton:"Modal_modalCategory__closeButton__fGLZH"}}}]);
//# sourceMappingURL=888.afb95961.chunk.js.map