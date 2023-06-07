"use strict";(self.webpackChunknest_rental=self.webpackChunknest_rental||[]).push([[506],{68418:function(e,n,t){var r=t(66934),i=t(64554),a=t(91614),o=t(80184),s=(0,r.ZP)(i.Z)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(4),";\n")}));n.Z=function(e){var n=e.children;return(0,o.jsx)(s,{className:"MuiPageTitle-wrapper",children:(0,o.jsx)(a.Z,{maxWidth:"lg",children:n})})}},84506:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r=t(29439),i=t(72791),a=t(6907),o=t(20890),s=t(5167),l=t(80184);var c=function(){var e=(0,i.useContext)(s.S).usuario;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Configura\xe7\xf5es da Conta"}),(0,l.jsxs)(o.Z,{variant:"subtitle2",children:[null===e||void 0===e?void 0:e.razao_social,", voc\xea pode configurar seus dados!"]})]})},d=t(68418),u=t(39124),m=t(91614),h=t(61889),x=t(43896),p=t(66934),j=t(74165),Z=t(15861),v=t(57621),f=t(64554),g=t(94721),y=t(39504),b=t(24518),_=t(90493),C=t(84852),k=t(49900),w=t(31675),P=t(1413),S=t(45987),E=t(28182),B=["className","color","flex","children"],M=(0,p.ZP)("span")((function(e){var n=e.theme;return"\n      display: inline-block;\n      align-items: center;\n\n      &.flexItem {\n        display: inline-flex;\n      }\n      \n      &.MuiText {\n\n        &-black {\n          color: ".concat(n.palette.common.black,"\n        }\n\n        &-primary {\n          color: ").concat(n.palette.primary.main,"\n        }\n        \n        &-secondary {\n          color: ").concat(n.palette.secondary.main,"\n        }\n        \n        &-success {\n          color: ").concat(n.palette.success.main,"\n        }\n        \n        &-warning {\n          color: ").concat(n.palette.warning.main,"\n        }\n              \n        &-error {\n          color: ").concat(n.palette.error.main,"\n        }\n        \n        &-info {\n          color: ").concat(n.palette.info.main,"\n        }\n      }\n")})),T=function(e){e.className;var n=e.color,t=void 0===n?"secondary":n,r=e.flex,i=e.children,a=(0,S.Z)(e,B);return(0,l.jsx)(M,(0,P.Z)((0,P.Z)({className:(0,E.Z)("MuiText-"+t,{flexItem:r})},a),{},{children:i}))},N=["className","color","children"],D=(0,p.ZP)("span")((function(e){var n=e.theme;return"\n      background-color: ".concat(n.colors.alpha.black[5],";\n      padding: ").concat(n.spacing(.5,1),";\n      font-size: ").concat(n.typography.pxToRem(13),";\n      border-radius: ").concat(n.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(n.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(n.colors.primary.lighter,";\n          color: ").concat(n.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(n.colors.alpha.black[100],";\n          color: ").concat(n.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(n.colors.secondary.lighter,";\n          color: ").concat(n.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(n.colors.success.lighter,";\n          color: ").concat(n.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(n.colors.warning.lighter,";\n          color: ").concat(n.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(n.colors.error.lighter,";\n          color: ").concat(n.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(n.colors.info.lighter,";\n          color: ").concat(n.palette.info.main,"\n        }\n      }\n")})),A=function(e){e.className;var n=e.color,t=void 0===n?"secondary":n,r=e.children,i=(0,S.Z)(e,N);return(0,l.jsx)(D,(0,P.Z)((0,P.Z)({className:"MuiLabel-"+t},i),{},{children:r}))},I=t(98243),z=t(78820),W=t(88315),G=t(97438),L=t(39709),q=function(e){var n=e.openModal,t=e.setModal,a=(e.data,e.edit),o=(0,i.useState)(""),c=(0,r.Z)(o,2),d=(c[0],c[1],(0,i.useState)("")),u=(0,r.Z)(d,2),m=(u[0],u[1],(0,i.useState)("")),h=(0,r.Z)(m,2),x=h[0],p=h[1],v=(0,i.useState)(""),f=(0,r.Z)(v,2),g=(f[0],f[1],(0,i.useState)(!1)),y=(0,r.Z)(g,2),b=y[0],_=(y[1],(0,i.useState)("")),C=(0,r.Z)(_,2),k=C[0],w=C[1],P=i.useState(""),S=(0,r.Z)(P,2),E=S[0],B=S[1],M=(0,i.useContext)(s.S),T=(M.userLogin,M.recoveryPassword,M.usuario),N=function(){var e=(0,Z.Z)((0,j.Z)().mark((function e(n){var t,r,i;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),x!=(null===T||void 0===T?void 0:T.email)){e.next=18;break}return t=fetch("https://nestrental.com.br:80/api/usuarios/recovery",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:x,url:"https://nestrental.com.br/redefinir-senha"})}),e.next=5,t;case 5:if(200!=(r=e.sent).status){e.next=15;break}return e.next=9,r.json();case 9:i=e.sent,w("Email enviado com sucesso. Por favor, Verifique sua caixa de email!"),B(""),window.localStorage.setItem("token_password",i.token),e.next=16;break;case 15:403==r.status&&(B("Este usu\xe1rio n\xe3o existe!"),w(""));case 16:e.next=20;break;case 18:B("Email n\xe3o corresponde a esta conta."),w("");case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)("div",{className:I.Z.modalCategory,style:{background:"#fff"},children:[(0,l.jsx)("div",{className:I.Z.modal__divCloseButton,children:(0,l.jsx)("button",{className:I.Z.modal__divCloseButton__closeButton,onClick:function(e){return t(!n)},children:(0,l.jsx)(z.LHV,{})})}),(0,l.jsx)(W.D,{children:"Editar senha"}),(0,l.jsxs)("form",{onSubmit:a&&N,children:[(0,l.jsx)("div",{style:{marginTop:"1rem"},children:(0,l.jsx)(G.Z,{label:"E-mail para redefini\xe7\xe3o de senha",placeholder:"Digite o email",value:x,onChange:function(e){return p(e.target.value)},size:"medium",fullWidth:!0,color:"primary"})}),(0,l.jsxs)("div",{style:{display:"flex",gridGap:"1rem",width:"20rem",marginTop:"1rem"},children:[(0,l.jsx)(L.Z,{type:"submit",color:"primary",variant:"contained",onClick:function(e){return N(e)},loading:!!b,children:"Editar"}),(0,l.jsx)(L.Z,{type:"button",color:"warning",variant:"contained",onClick:function(e){return t(!n)},loading:!!b,children:"Cancelar"})]}),(0,l.jsxs)("div",{children:[!b&&k&&(0,l.jsx)("p",{style:{color:"green"},children:k}),!b&&E&&(0,l.jsx)("p",{style:{color:"red"},children:E})]})]})]})})},F=function(e){var n=e.openModal,t=e.setModal,a=(e.data,e.edit),o=(0,i.useState)(""),s=(0,r.Z)(o,2),c=s[0],d=s[1],u=(0,i.useState)(""),m=(0,r.Z)(u,2),h=m[0],x=m[1],p=(0,i.useState)(""),v=(0,r.Z)(p,2),f=v[0],g=(v[1],(0,i.useState)(!1)),y=(0,r.Z)(g,2),b=y[0],_=y[1],C=(0,i.useState)(""),k=(0,r.Z)(C,2),w=k[0],P=k[1];function S(){return S=(0,Z.Z)((0,j.Z)().mark((function e(n){var t,r,i;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),_(!0),t=fetch("https://nest-rental-backend.herokuapp.com/api/categorias/".concat(f),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify({password:c})}),e.next=5,t;case 5:return r=e.sent,e.next=8,r.json();case 8:i=e.sent,d(i.descricao),P("Email alterada=o com sucesso."),_(!1),window.location.reload();case 13:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)("div",{className:I.Z.modalCategory,style:{backgroundColor:"#fff"},children:[(0,l.jsx)("div",{className:I.Z.modal__divCloseButton,children:(0,l.jsx)("button",{className:I.Z.modal__divCloseButton__closeButton,onClick:function(e){return t(!n)},children:(0,l.jsx)(z.LHV,{})})}),(0,l.jsx)(W.D,{children:"Editar e-mail"}),(0,l.jsxs)("form",{onSubmit:a&&function(e){return S.apply(this,arguments)},children:[(0,l.jsx)("div",{style:{marginTop:"1rem"},children:(0,l.jsx)(G.Z,{type:"text",name:"new_email",id:"new_email",size:"medium",label:"Email",fullWidth:!0,color:"primary",placeholder:"Digite o novo e-mail",value:a?c:h,onChange:a?function(e){return d(e.target.value)}:function(e){return x(e.target.value)}})}),(0,l.jsxs)("div",{style:{display:"flex",gridGap:"1rem",width:"20rem",marginTop:"1rem"},children:[a?(0,l.jsx)(L.Z,{color:"primary",variant:"contained",size:"medium",children:"Editar"}):(0,l.jsx)(L.Z,{color:"primary",variant:"contained",size:"medium",children:"Cadastrar"}),(0,l.jsx)(L.Z,{color:"warning",variant:"contained",size:"medium",onClick:function(e){return t(!n)},children:"Cancelar"})]}),(0,l.jsx)("div",{children:!b&&(0,l.jsx)("p",{style:{color:"green"},children:w})})]})]})})},V=t(5229),H=t(41591),R=function(e){var n=e.openModal,t=e.setModal,a=(e.data,e.edit,i.useState("")),o=(0,r.Z)(a,2),c=(o[0],o[1],i.useState("")),d=(0,r.Z)(c,2),u=d[0],m=d[1],h=i.useState(""),x=(0,r.Z)(h,2),p=(x[0],x[1],i.useState("")),v=(0,r.Z)(p,2),f=v[0],g=v[1],y=i.useState(""),b=(0,r.Z)(y,2),_=(b[0],b[1],i.useState("")),C=(0,r.Z)(_,2),k=C[0],w=C[1],P=i.useState(""),S=(0,r.Z)(P,2),E=(S[0],S[1],i.useState("")),B=(0,r.Z)(E,2),M=B[0],T=B[1],N=i.useState(null),D=(0,r.Z)(N,2),A=(D[0],D[1],i.useState(null)),q=(0,r.Z)(A,2),F=q[0],R=q[1],J=i.useState(""),O=(0,r.Z)(J,2),U=(O[0],O[1],i.useState("")),X=(0,r.Z)(U,2),Y=X[0],K=X[1],Q=i.useState(""),$=(0,r.Z)(Q,2),ee=($[0],$[1],i.useState("")),ne=(0,r.Z)(ee,2),te=ne[0],re=ne[1],ie=i.useState(""),ae=(0,r.Z)(ie,2),oe=(ae[0],ae[1],i.useState("")),se=(0,r.Z)(oe,2),le=(se[0],se[1],i.useState(!1)),ce=(0,r.Z)(le,2),de=ce[0],ue=ce[1],me=i.useState(""),he=(0,r.Z)(me,2),xe=he[0],pe=he[1],je=i.useState(""),Ze=(0,r.Z)(je,2),ve=Ze[0],fe=(Ze[1],i.useState(null)),ge=(0,r.Z)(fe,2),ye=ge[0],be=ge[1],_e=i.useState(null),Ce=(0,r.Z)(_e,2),ke=(Ce[0],Ce[1]),we=(0,i.useContext)(s.S).usuario;function Pe(){return(Pe=(0,Z.Z)((0,j.Z)().mark((function e(){var n;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,H.Z)(te);case 2:(n=e.sent)?(m(n.logradouro),w(n.localidade),T(n.uf),g(n.bairro)):(m(""),w(""),T(""),g(""));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(e){return Ee.apply(this,arguments)}function Ee(){return Ee=(0,Z.Z)((0,j.Z)().mark((function e(n){var t,r,i;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURI(n),e.next=3,V.Z.get("/cidades/".concat(t));case 3:return r=e.sent,i=r.data,e.abrupt("return",null===i||void 0===i?void 0:i.id);case 6:case"end":return e.stop()}}),e)}))),Ee.apply(this,arguments)}function Be(){return Be=(0,Z.Z)((0,j.Z)().mark((function e(n){var t,r;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),ue(!0),e.t0=V.Z,e.t1="/enderecos/".concat(null===ye||void 0===ye||null===(t=ye.entidade)||void 0===t||null===(r=t.enderecos[0])||void 0===r?void 0:r.id_endereco),e.next=6,Se(k);case 6:e.t2=e.sent,e.t3=te,e.t4=f,e.t5=Y||"N\xe3o possui",e.t6=u,e.t7=F,e.t8={id_cidade:e.t2,cep:e.t3,bairro:e.t4,complemento:e.t5,rua:e.t6,numero:e.t7,contato:"",telefone:"",email:"",nome_obra:"",tipo:"C"},e.t0.put.call(e.t0,e.t1,e.t8).then((function(e){pe("Endere\xe7o editado com sucesso."),window.location.reload()})).catch((function(e){console.log(e)})),ue(!1);case 15:case"end":return e.stop()}}),e)}))),Be.apply(this,arguments)}function Me(){return Me=(0,Z.Z)((0,j.Z)().mark((function e(){var n,t,r;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch("https://nestrental.com.br:80/api/usuarios/".concat(null===we||void 0===we?void 0:we.id),{headers:{"Content-Type":"application/json"},method:"GET"}),e.next=3,n;case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,ke(r.entidade.enderecos[0].id),be(r);case 9:case"end":return e.stop()}}),e)}))),Me.apply(this,arguments)}return i.useEffect((function(){!function(){Me.apply(this,arguments)}(),function(){var e,n,t,r,i,a;re(null===ye||void 0===ye||null===(e=ye.entidade)||void 0===e?void 0:e.enderecos[0].endereco.cep),m(null===ye||void 0===ye||null===(n=ye.entidade)||void 0===n?void 0:n.enderecos[0].endereco.rua),w(null===ye||void 0===ye||null===(t=ye.entidade)||void 0===t?void 0:t.enderecos[0].endereco.cidade.nome),T(null===ye||void 0===ye||null===(r=ye.entidade)||void 0===r?void 0:r.enderecos[0].endereco.cidade.estado.nome),g(null===ye||void 0===ye||null===(i=ye.entidade)||void 0===i?void 0:i.enderecos[0].endereco.bairro),R(null===ye||void 0===ye||null===(a=ye.entidade)||void 0===a?void 0:a.enderecos[0].endereco.numero)}()}),[]),i.useEffect((function(){!function(){Pe.apply(this,arguments)}()}),[te&&8===te.length]),(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)("div",{className:I.Z.modal,style:{background:"#fff",height:"400px"},children:[(0,l.jsx)("div",{className:I.Z.modal__divCloseButton,children:(0,l.jsx)("button",{className:I.Z.modal__divCloseButton__closeButton,onClick:function(e){return t(!n)},children:(0,l.jsx)(z.LHV,{})})}),(0,l.jsx)("section",{children:(0,l.jsxs)("form",{onSubmit:function(e){return function(e){return Be.apply(this,arguments)}(e)},children:[(0,l.jsxs)("div",{className:I.Z.formCheckout__div,children:[(0,l.jsx)(W.D,{level:3,children:"Detalhes do faturamento"}),(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gridGap:"1rem"},children:[(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(G.Z,{type:"number",label:"CEP",id:"cep_client",required:!0,name:"cep_client",placeholder:"Digite seu CEP",value:te,onChange:function(e){return re(e.target.value)},color:"primary",fullWidth:!0})}),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(G.Z,{type:"text",id:"street_client",required:!0,label:"Rua/Av",name:"street_client",placeholder:"Digite sua rua ou avenida",value:u,onChange:function(e){return m(e.target.value)},color:"primary",fullWidth:!0})}),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(G.Z,{type:"number",id:"number_client",label:"N\xfamero\xba",required:!0,color:"primary",fullWidth:!0,placeholder:"Digite o n\xfamero",name:"number_client",value:F,onChange:function(e){return R(e.target.value)}})})]}),(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gridGap:"1rem",marginTop:"1rem"},children:[(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(G.Z,{type:"text",id:"country_client",label:"Cidade",required:!0,placeholder:"Digite sua cidade",name:"country_client",value:k,onChange:function(e){return w(e.target.value)},color:"primary",fullWidth:!0})}),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(G.Z,{label:"Estado",type:"text",id:"state_client",required:!0,placeholder:"Digite seu estado",name:"state_client",value:M,onChange:function(e){return T(e.target.value)},color:"primary",fullWidth:!0})}),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(G.Z,{type:"text",label:"Bairro",id:"neighbour_client",placeholder:"Digite seu bairro",name:"neighbour_client",required:!0,value:f,onChange:function(e){return g(e.target.value)},color:"primary",fullWidth:!0})}),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(G.Z,{type:"text",label:"Complemento",id:"complement_client",name:"complement_client",placeholder:"Digite um complemento",value:Y,onChange:function(e){return K(e.target.value)},color:"primary",fullWidth:!0})})]})]}),(0,l.jsxs)("div",{style:{display:"flex",gridGap:"1rem",width:"20rem",marginTop:"1rem"},children:[(0,l.jsx)(L.Z,{type:"submit",variant:"contained",color:"primary",loading:!!de,children:"Editar"}),(0,l.jsx)(L.Z,{type:"button",variant:"contained",color:"warning",value:"Cancelar",onClick:function(e){return t(!n)},children:"Cancelar"})]}),!de&&xe&&(0,l.jsx)("p",{style:{color:"green"},children:xe}),!de&&ve&&(0,l.jsx)("p",{style:{color:"red"},children:ve})]})})]})})};var J=function(){var e,n,t,a=(0,i.useContext)(s.S).usuario,c=(0,i.useState)(!1),d=(0,r.Z)(c,2),u=d[0],m=d[1],x=(0,i.useState)(!1),p=(0,r.Z)(x,2),P=p[0],S=p[1],E=(0,i.useState)(!1),B=(0,r.Z)(E,2),M=B[0],N=B[1],D=(0,i.useState)(null),I=(0,r.Z)(D,2),z=I[0],W=I[1],G=(0,i.useState)(null),L=(0,r.Z)(G,2);function V(){return(V=(0,Z.Z)((0,j.Z)().mark((function e(){var n,t,r,i;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch("https://nestrental.com.br:80/api/usuarios/".concat(null===a||void 0===a?void 0:a.id),{headers:{"Content-Type":"application/json"},method:"GET"}),e.next=3,t;case 3:return r=e.sent,e.next=6,r.json();case 6:i=e.sent,W(null===(n=i.entidade)||void 0===n?void 0:n.enderecos[0]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return L[0],L[1],(0,i.useEffect)((function(){!function(){V.apply(this,arguments)}()}),[]),(0,l.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,l.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,l.jsxs)(v.Z,{children:[(0,l.jsx)(f.Z,{p:3,display:"flex",alignItems:"center",justifyContent:"space-between",children:(0,l.jsxs)(f.Z,{children:[(0,l.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"Detalhes Pessoais"}),(0,l.jsx)(o.Z,{variant:"subtitle2",children:"Gerencia as informa\xe7\xf5es pessoais da sua conta"})]})}),(0,l.jsx)(g.Z,{}),(0,l.jsx)(y.Z,{sx:{p:4},children:(0,l.jsx)(o.Z,{variant:"subtitle2",children:(0,l.jsxs)(h.ZP,{container:!0,spacing:0,children:[(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Raz\xe3o Social:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:(0,l.jsx)("b",{children:null===a||void 0===a?void 0:a.razao_social})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"CNPJ"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:(0,l.jsx)("b",{children:null===a||void 0===a?void 0:a.documento})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Inscri\xe7\xe3o Estadual:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(f.Z,{sx:{maxWidth:{xs:"auto",sm:300}},children:(0,l.jsx)(T,{color:"black",children:(0,l.jsx)("b",{children:null===a||void 0===a?void 0:a.inscricao_estadual})})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Nome Fantasia:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(f.Z,{sx:{maxWidth:{xs:"auto",sm:300}},children:(0,l.jsx)(T,{color:"black",children:(0,l.jsx)("b",{children:null===a||void 0===a?void 0:a.nome_fantasia})})})})]})})})]}),(0,l.jsx)(h.ZP,{item:!0,xs:12,children:(0,l.jsxs)(v.Z,{style:{marginTop:"3rem"},children:[(0,l.jsxs)(f.Z,{p:3,display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,l.jsxs)(f.Z,{children:[(0,l.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"Endere\xe7o de Faturamento"}),(0,l.jsx)(o.Z,{variant:"subtitle2",children:"Gerencie os detalhes relacionados a seu endere\xe7o de faturamento"})]}),(0,l.jsx)(b.Z,{variant:"text",startIcon:(0,l.jsx)(w.Z,{}),onClick:function(e){return N(!M)},children:"Editar"})]}),(0,l.jsx)(g.Z,{}),(0,l.jsx)(y.Z,{sx:{p:4},children:(0,l.jsxs)(o.Z,{variant:"subtitle2",children:[(0,l.jsxs)(h.ZP,{style:{display:"flex"},spacing:0,children:[(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"CEP:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:z&&(0,l.jsx)("b",{children:null===z||void 0===z||null===(e=z.endereco)||void 0===e?void 0:e.cep})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Rua/AV:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:z&&(0,l.jsx)("b",{children:null===z||void 0===z?void 0:z.endereco.rua})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"N\xfamero:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:(null===z||void 0===z?void 0:z.enderecos[0].endereco)&&(0,l.jsx)("b",{children:null===z||void 0===z||null===(n=z.enderecos[0])||void 0===n||null===(t=n.endereco)||void 0===t?void 0:t.numero})})})]}),(0,l.jsxs)(h.ZP,{style:{display:"flex"},spacing:0,children:[(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Bairro:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:z&&(0,l.jsx)("b",{children:null===z||void 0===z?void 0:z.enderecos[0].endereco.bairro})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Cidade:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:z&&(0,l.jsx)("b",{children:null===z||void 0===z?void 0:z.enderecos[0].endereco.cidade.nome})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"UF:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:z&&(0,l.jsx)("b",{children:null===z||void 0===z?void 0:z.enderecos[0].endereco.cidade.estado.sigla})})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Complemento:"})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:(0,l.jsx)(T,{color:"black",children:z&&(0,l.jsx)("b",{children:null===z||void 0===z?void 0:z.enderecos[0].endereco.complemento})})})]})]})})]})}),(0,l.jsxs)(v.Z,{style:{marginTop:"3rem"},children:[(0,l.jsxs)(f.Z,{p:3,display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,l.jsxs)(f.Z,{children:[(0,l.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"Configura\xe7\xf5es de senha"}),(0,l.jsx)(o.Z,{variant:"subtitle2",children:"Gerencia os detalhes relacionados \xe0 sua senha"})]}),(0,l.jsx)(b.Z,{variant:"text",startIcon:(0,l.jsx)(w.Z,{}),onClick:function(e){return m(!u)},children:"Editar"})]}),(0,l.jsx)(g.Z,{}),(0,l.jsx)(_.Z,{children:(0,l.jsx)(C.ZP,{sx:{p:3},children:(0,l.jsx)(k.Z,{primaryTypographyProps:{variant:"h5",gutterBottom:!1},secondaryTypographyProps:{variant:"subtitle2",lineHeight:1},primary:"Alterar senha",secondary:"Altere sua senha aqui"})})})]})]}),(0,l.jsx)(h.ZP,{item:!0,xs:12,children:(0,l.jsxs)(v.Z,{children:[(0,l.jsxs)(f.Z,{p:3,display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,l.jsxs)(f.Z,{children:[(0,l.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"Endere\xe7o de E-mail"}),(0,l.jsx)(o.Z,{variant:"subtitle2",children:"Gerencia os detalhes relacionados a seu endere\xe7o de E-mail"})]}),(0,l.jsx)(b.Z,{variant:"text",startIcon:(0,l.jsx)(w.Z,{}),onClick:function(e){return S(!P)},children:"Editar"})]}),(0,l.jsx)(g.Z,{}),(0,l.jsx)(y.Z,{sx:{p:4},children:(0,l.jsx)(o.Z,{variant:"subtitle2",children:(0,l.jsxs)(h.ZP,{container:!0,spacing:0,children:[(0,l.jsx)(h.ZP,{item:!0,xs:12,sm:4,md:3,textAlign:{sm:"right"},children:(0,l.jsx)(f.Z,{pr:3,pb:2,children:"Email principal:"})}),(0,l.jsxs)(h.ZP,{item:!0,xs:12,sm:8,md:9,children:[(0,l.jsx)(T,{color:"black",children:(0,l.jsx)("b",{children:null===a||void 0===a?void 0:a.email})}),(0,l.jsx)(f.Z,{pl:1,component:"span",children:(0,l.jsx)(A,{color:"success",children:"Principal"})})]})]})})})]})}),u&&(0,l.jsx)(q,{data:"",edit:!0,openModal:u,setModal:m}),P&&(0,l.jsx)(F,{data:"",edit:!0,openModal:P,setModal:S}),M&&(0,l.jsx)(R,{data:"",edit:!0,openModal:M,setModal:N})]})},O=(0,p.ZP)(u.Z)((function(){return"\n    .MuiTabs-scrollableX {\n      overflow-x: auto !important;\n    }\n"}));var U=function(){var e=(0,i.useState)("edit_profile"),n=(0,r.Z)(e,2),t=n[0],o=n[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.ql,{children:(0,l.jsx)("title",{children:"Configura\xe7\xf5es de usu\xe1rio"})}),(0,l.jsx)(d.Z,{children:(0,l.jsx)(c,{})}),(0,l.jsx)(m.Z,{maxWidth:"lg",children:(0,l.jsxs)(h.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[(0,l.jsx)(h.ZP,{item:!0,xs:12,children:(0,l.jsx)(O,{onChange:function(e,n){o(n)},value:t,variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",children:[{value:"edit_profile",label:"Editar Perfil"}].map((function(e){return(0,l.jsx)(x.Z,{label:e.label,value:e.value},e.value)}))})}),(0,l.jsx)(h.ZP,{item:!0,xs:12,children:"edit_profile"===t&&(0,l.jsx)(J,{})})]})})]})}},31675:function(e,n,t){var r=t(95318);n.Z=void 0;var i=r(t(45649)),a=t(80184),o=(0,i.default)([(0,a.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");n.Z=o},98243:function(e,n){n.Z={modal:"Modal_modal__5Lj9m",modal__divCloseButton:"Modal_modal__divCloseButton__tTZ3Y",modal__divCloseButton__closeButton:"Modal_modal__divCloseButton__closeButton__ABY0m",modal__closeButton:"Modal_modal__closeButton__ZDrqX",modalCategory:"Modal_modalCategory__IjrSy",modalCategory__divCloseButton:"Modal_modalCategory__divCloseButton__5mZKo",modalCategory__closeButton:"Modal_modalCategory__closeButton__fGLZH"}}}]);
//# sourceMappingURL=506.2678c06b.chunk.js.map