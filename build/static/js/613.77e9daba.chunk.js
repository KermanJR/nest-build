"use strict";(self.webpackChunknest_rental=self.webpackChunknest_rental||[]).push([[613],{68418:function(e,t,n){var r=n(66934),o=n(64554),a=n(91614),i=n(80184),s=(0,r.ZP)(o.Z)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4),";\n")}));t.Z=function(e){var t=e.children;return(0,i.jsx)(s,{className:"MuiPageTitle-wrapper",children:(0,i.jsx)(a.Z,{maxWidth:"lg",children:t})})}},76613:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(6907),o=n(29439),a=n(72791),i=n(61889),s=n(20890),l=n(24518),c=n(5167),d=n(74696),u=n(74165),p=n(15861),h=n(98243),m=n(78820),x=n(88315),f=n(97438),v=n(39709),g=n(5229),Z=n(80184),j=function(e){var t,n,r,i,s,l,c,d,j,y,_,b=e.openModal,w=e.setModal,C=e.data,S=e.edit,k=(0,a.useState)(""),P=(0,o.Z)(k,2),B=(P[0],P[1],(0,a.useState)(null===(t=C[0])||void 0===t?void 0:t.nome)),z=(0,o.Z)(B,2),M=z[0],T=z[1],W=(0,a.useState)(""),D=(0,o.Z)(W,2),E=D[0],q=D[1],I=(0,a.useState)(null===(n=C[0])||void 0===n?void 0:n.fabricante),L=(0,o.Z)(I,2),V=L[0],A=L[1],G=(0,a.useState)(""),R=(0,o.Z)(G,2),F=R[0],N=R[1],H=(0,a.useState)(null===(r=C[0])||void 0===r?void 0:r.valor),O=(0,o.Z)(H,2),$=O[0],U=O[1],Y=(0,a.useState)(""),J=(0,o.Z)(Y,2),K=J[0],Q=J[1],X=(0,a.useState)(null===(i=C[0])||void 0===i?void 0:i.descricao),ee=(0,o.Z)(X,2),te=ee[0],ne=ee[1],re=(0,a.useState)(""),oe=(0,o.Z)(re,2),ae=oe[0],ie=oe[1],se=(0,a.useState)(null===(s=C[0])||void 0===s?void 0:s.dimensao),le=(0,o.Z)(se,2),ce=le[0],de=le[1],ue=(0,a.useState)(""),pe=(0,o.Z)(ue,2),he=pe[0],me=pe[1],xe=(0,a.useState)(null===(l=C[0])||void 0===l?void 0:l.altura),fe=(0,o.Z)(xe,2),ve=fe[0],ge=fe[1],Ze=(0,a.useState)(""),je=(0,o.Z)(Ze,2),ye=je[0],_e=je[1],be=(0,a.useState)(null===(c=C[0])||void 0===c?void 0:c.acionamento),we=(0,o.Z)(be,2),Ce=we[0],Se=we[1],ke=(0,a.useState)(""),Pe=(0,o.Z)(ke,2),Be=Pe[0],ze=Pe[1],Me=(0,a.useState)(null===(d=C[0])||void 0===d||null===(j=d.categoria)||void 0===j?void 0:j.id),Te=(0,o.Z)(Me,2),We=Te[0],De=Te[1],Ee=(0,a.useState)(null),qe=(0,o.Z)(Ee,2),Ie=qe[0],Le=qe[1],Ve=(0,a.useState)(null===(y=C[0])||void 0===y?void 0:y.prod_image),Ae=(0,o.Z)(Ve,2),Ge=(Ae[0],Ae[1],(0,a.useState)(null)),Re=(0,o.Z)(Ge,2),Fe=(Re[0],Re[1],(0,a.useState)(null===(_=C[0])||void 0===_?void 0:_.id)),Ne=(0,o.Z)(Fe,2),He=(Ne[0],Ne[1],(0,a.useState)(!1)),Oe=(0,o.Z)(He,2),$e=Oe[0],Ue=Oe[1],Ye=(0,a.useState)(""),Je=(0,o.Z)(Ye,2),Ke=Je[0],Qe=Je[1],Xe=(0,a.useState)(""),et=(0,o.Z)(Xe,2),tt=et[0],nt=et[1],rt=(0,a.useState)([]),ot=(0,o.Z)(rt,2),at=ot[0],it=ot[1],st=(0,a.useState)([]),lt=(0,o.Z)(st,2),ct=lt[0],dt=lt[1],ut=(0,a.useState)(),pt=(0,o.Z)(ut,2),ht=pt[0],mt=pt[1],xt=(0,a.useState)(),ft=(0,o.Z)(xt,2),vt=ft[0],gt=ft[1];function Zt(){return Zt=(0,p.Z)((0,u.Z)().mark((function e(){var t,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return it(null),e.next=3,g.Z.get("/categorias");case 3:t=e.sent,n=t.data,it(n||null);case 6:case"end":return e.stop()}}),e)}))),Zt.apply(this,arguments)}function jt(){return jt=(0,p.Z)((0,u.Z)().mark((function e(){var t,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get("/marcas");case 2:t=e.sent,n=t.data,dt(n);case 5:case"end":return e.stop()}}),e)}))),jt.apply(this,arguments)}function yt(){return(yt=(0,p.Z)((0,u.Z)().mark((function e(t){var n,r,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(M&&$&&V&&We&&ce&&ve&&Ce)){e.next=25;break}return t.preventDefault(),Ue(!0),(n=new FormData).append("nome",M),n.append("descricao",te),n.append("fabricante",V),n.append("valor",$),n.append("id_categoria",We),n.append("dimensao",ce),n.append("altura",ve),n.append("acionamento",Ce),n.append("prod_image",vt),r=fetch("https://nestrental.com.br:80/api/produtos/".concat(C[0].id),{method:"PUT",body:n,redirect:"follow"}),e.next=16,r;case 16:return o=e.sent,e.next=19,o.json();case 19:e.sent?(Qe("Produto editado com sucesso."),nt("")):nt("Erro de servidor, tente novamente mais tarde."),Ue(!1),setTimeout((function(){window.location.reload()}),1e3),e.next=27;break;case 25:Qe(""),nt("Por favor, preecha todos os campos.");case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _t(){return(_t=(0,p.Z)((0,u.Z)().mark((function e(t){var n,r,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E&&K&&F&&Ie&&he&&ye&&Be&&ae&&ht)){e.next=25;break}return t.preventDefault(),Ue(!0),(n=new FormData).append("nome",E),n.append("descricao",ae),n.append("fabricante",F),n.append("valor",K),n.append("id_categoria",Ie),n.append("dimensao",he),n.append("altura",ye),n.append("acionamento",Be),n.append("prod_image",ht),r=fetch("https://nestrental.com.br:80/api/produtos",{method:"POST",body:n,redirect:"follow"}),e.next=16,r;case 16:return o=e.sent,e.next=19,o.json();case 19:e.sent?(Qe("Produto criado com sucesso."),nt("")):nt("Erro de servidor, tente novamente mais tarde."),Ue(!1),window.location.reload(),e.next=27;break;case 25:Qe(""),nt("Preencha todos os campos obrigat\xf3rios.");case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){!function(){Zt.apply(this,arguments)}(),function(){jt.apply(this,arguments)}()}),[]),(0,Z.jsx)(Z.Fragment,{children:b&&(0,Z.jsxs)("div",{className:h.Z.modal,style:{width:"800px"},children:[(0,Z.jsx)("div",{className:h.Z.modal__divCloseButton,children:(0,Z.jsx)("button",{className:h.Z.modal__divCloseButton__closeButton,onClick:function(e){return w(!b)},children:(0,Z.jsx)(m.LHV,{})})}),(0,Z.jsxs)("section",{children:[(0,Z.jsx)(x.D,{children:S?"Produto":"Cadastre um novo produto"}),(0,Z.jsxs)("form",{children:[(0,Z.jsx)("div",{style:{marginTop:"1rem"},children:(0,Z.jsx)(f.Z,{required:!0,type:"text",name:"name_product",id:"name_product",placeholder:"Digite o nome do produto",color:"primary",fullWidth:!0,size:"small",label:"Nome",value:S?M:E,onChange:S?function(e){return T(e.target.value)}:function(e){return q(e.target.value)}})}),(0,Z.jsx)("div",{style:{marginTop:"1rem"},children:(0,Z.jsx)(f.Z,{required:!0,color:"primary",size:"small",type:"number",fullWidth:!0,name:"value_product",id:"value_product",placeholder:"R$",label:"Valor R$",value:S?$:K,onChange:S?function(e){return U(e.target.value)}:function(e){return Q(e.target.value)}})}),(0,Z.jsxs)("div",{style:{display:"flex",gridGap:"1rem",marginTop:"1rem"},children:[(0,Z.jsx)("div",{style:{width:"100%"},children:(0,Z.jsx)(f.Z,{required:!0,fullWidth:!0,size:"small",color:"primary",type:"text",name:"dimension_product",id:"dimension_product",placeholder:"",label:"Dimens\xe3o",value:S?ce:he,onChange:S?function(e){return de(e.target.value)}:function(e){return me(e.target.value)}})}),(0,Z.jsx)("div",{style:{width:"100%"},children:(0,Z.jsx)(f.Z,{type:"text",fullWidth:!0,required:!0,size:"small",color:"primary",label:"Altura",name:"height_product",id:"height_product",value:S?ve:ye,onChange:S?function(e){return ge(e.target.value)}:function(e){return _e(e.target.value)}})}),(0,Z.jsx)("div",{style:{width:"100%"},children:(0,Z.jsx)(f.Z,{type:"text",required:!0,fullWidth:!0,size:"small",color:"primary",label:"Acionamento",name:"trigger_product",id:"trigger_product",value:S?Ce:Be,onChange:S?function(e){return Se(e.target.value)}:function(e){return ze(e.target.value)}})})]}),(0,Z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gridGap:"2rem",alignItems:"center"},children:[(0,Z.jsxs)("div",{style:{width:"50%",marginTop:"1rem"},children:[(0,Z.jsx)("label",{style:{display:"block"},children:"Marca"}),ct&&(0,Z.jsxs)("select",{required:!0,onChange:S?function(e){return A(e.target.value)}:function(e){return N(e.target.value)},value:S?V:F,style:{borderRadius:"8px",border:"1px solid #c4c4c4",width:"100%",padding:".8rem"},children:[(0,Z.jsx)("option",{value:"",style:{color:"#55627C",padding:".5rem"},selected:!0,children:"Selecione"}),ct.map((function(e,t){return(0,Z.jsx)("option",{value:e.nome,style:{color:"#55627C",padding:".8rem"},children:e.nome},e.id)}))]})]}),(0,Z.jsxs)("div",{style:{width:"50%",marginTop:"1rem"},children:[(0,Z.jsx)("label",{style:{display:"block"},children:"Categoria"}),at&&(0,Z.jsxs)("select",{defaultValue:"Selecione:",required:!0,onChange:S?function(e){return De(e.target.value)}:function(e){return Le(e.target.value)},value:S?We:Ie,style:{borderRadius:"8px",border:"1px solid #c4c4c4",width:"100%",padding:".8rem"},children:[(0,Z.jsx)("option",{value:"",selected:!0,children:"Selecione:"}),at.map((function(e,t){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("option",{value:e.id,style:{color:"#55627C",padding:".8rem"},children:e.descricao},e.id)})}))]})]})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("label",{style:{display:"block",marginTop:"1rem"},children:"Descri\xe7\xe3o do produto"}),(0,Z.jsxs)("div",{style:{display:"flex",gridGap:"2rem",width:"100%"},children:[(0,Z.jsx)("textarea",{cols:40,rows:10,style:{borderRadius:"8px",borderColor:"#ccc",padding:"1rem",resize:"none",height:"200px"},placeholder:"Descreva o produto",required:!0,value:S?te:ae,onChange:S?function(e){return ne(e.target.value)}:function(e){return ie(e.target.value)}}),S?(0,Z.jsxs)("div",{style:{width:"50%",marginTop:"-1.2rem"},children:[(0,Z.jsx)("label",{style:{display:"block"},children:"Atualizar Imagem"}),(0,Z.jsx)(f.Z,{fullWidth:!0,color:"primary",type:"file",required:!0,onChange:function(e){gt(e.target.files[0])}}),(0,Z.jsx)("img",{src:"https://nestrental.com.br:80".concat(C[0].prod_image),alt:"",style:{width:"18rem",height:"18rem",padding:"1rem",alignSelf:"center",objectFit:"contain"}})]}):(0,Z.jsxs)("div",{children:[(0,Z.jsx)("label",{style:{display:"block",marginTop:"-1rem"},children:"Imagem do produto"}),(0,Z.jsx)(f.Z,{fullWidth:!0,color:"primary",type:"file",required:!0,onChange:function(e){mt(e.target.files[0])}})]})]})]}),(0,Z.jsxs)("div",{style:{display:"flex",gridGap:"1rem",width:"20rem",marginTop:"1rem"},children:[S?(0,Z.jsx)(v.Z,{type:"submit",color:"primary",variant:"contained",onClick:function(e){return function(e){return yt.apply(this,arguments)}(e)},loading:!!$e,children:"Editar"}):(0,Z.jsx)(v.Z,{type:"submit",color:"primary",variant:"contained",onClick:function(e){return function(e){return _t.apply(this,arguments)}(e)},loading:!!$e,children:"Criar"}),(0,Z.jsx)(v.Z,{type:"submit",color:"warning",variant:"contained",onClick:function(e){return w(!b)},children:"Cancelar"})]}),!$e&&Ke?(0,Z.jsx)("p",{style:{color:"green"},children:Ke}):(0,Z.jsx)("p",{style:{color:"red"},children:tt})]})]})]})})};var y=function(){var e=a.useState(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1],u=(0,a.useContext)(c.S).usuario;return(0,Z.jsxs)(i.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsxs)(i.ZP,{item:!0,children:[(0,Z.jsx)(s.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Lista de Produtos"}),(0,Z.jsx)(s.Z,{variant:"subtitle2",children:"Cadastre novos produtos para sua empresa"})]}),(0,Z.jsx)(i.ZP,{item:!0,children:3===(null===u||void 0===u?void 0:u.id_perfil)?"":(0,Z.jsx)(l.Z,{sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,Z.jsx)(d.Z,{fontSize:"small"}),style:{backgroundColor:"rgb(18, 80, 130)"},onClick:function(e){return r(!n)},children:"Cadastrar produto"})}),(0,Z.jsx)(j,{setModal:r,openModal:n,data:"",edit:!1})]})},_=n(68418),b=n(91614),w=n(57621),C=n(93433),S=n(26098),k=n.n(S),P=n(30960),B=n(13967),z=n(64554),M=n(9585),T=n(94721),W=n(39281),D=n(79836),E=n(56890),q=n(35855),I=n(53994),L=n(53382),V=n(94454),A=n(70493),G=n(13400),R=n(97513),F=n(34045),N=n(31675),H=n(71715),O=n(66934),$=n(68036),U=n(74934),Y=(0,O.ZP)(l.Z)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.main,";\n     color: ").concat(t.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark,";\n     }\n    ")}));var J=function(e){var t=e.id_product,n=(0,a.useState)(!1),r=(0,o.Z)(n,2),i=r[0],l=r[1],c=(0,a.useRef)(null),d=(0,a.useState)(""),h=(0,o.Z)(d,2),m=(h[0],h[1]),x=(0,a.useState)(""),f=(0,o.Z)(x,2),v=(f[0],f[1],(0,a.useState)(!1)),g=(0,o.Z)(v,2),j=(g[0],g[1]),y=function(){var e=(0,p.Z)((0,u.Z)().mark((function e(n){var r,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),n.preventDefault(),r=fetch("https://nestrental.com.br:80/api/produtos/".concat(t[0]),{method:"DELETE"}),e.next=5,r;case 5:return o=e.sent,e.next=8,o.json();case 8:e.sent,m("Produto exclu\xeddo com sucesso."),window.location.reload();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(z.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsxs)(z.Z,{display:"flex",alignItems:"center",children:[(0,Z.jsx)(s.Z,{variant:"h5",color:"text.secondary",children:"A\xe7\xf5es:"}),(0,Z.jsx)(Y,{sx:{ml:1},startIcon:(0,Z.jsx)($.Z,{}),variant:"contained",onClick:function(e){return y(e)},children:"Excluir"})]}),(0,Z.jsx)(G.Z,{color:"primary",onClick:function(){l(!0)},ref:c,sx:{ml:2,p:1},children:(0,Z.jsx)(U.Z,{})})]}),(0,Z.jsx)(H.Z,{keepMounted:!0,anchorEl:c.current,open:i,onClose:function(){l(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}})]})},K=n(56355),Q=function(e){var t=e.openModal,n=e.setModal,r=e.data,i=(e.edit,a.useContext(c.S).usuario,a.useState("")),s=(0,o.Z)(i,2),l=(s[0],s[1]),d=a.useState(""),x=(0,o.Z)(d,2),g=x[0],j=x[1],y=a.useState(""),_=(0,o.Z)(y,2),b=(_[0],_[1],a.useState("")),w=(0,o.Z)(b,2),C=w[0],S=w[1],k=a.useState(!1),P=(0,o.Z)(k,2),B=(P[0],P[1],a.useState(!1)),z=(0,o.Z)(B,2),M=(z[0],z[1]),T=function(){var e=(0,p.Z)((0,u.Z)().mark((function e(t,o){var a,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),M(!0),t.preventDefault(),a=fetch("https://nestrental.com.br:80/api/produtos/precos/".concat(r[0][0].id_produto,"/").concat(o),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({dias:o,valor:g})}),e.next=6,a;case 6:return i=e.sent,e.next=9,i.json();case 9:e.sent,l("Valor di\xe1rio editado com sucesso."),setTimeout((function(){M(!1)}),3e3),window.location.reload();case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=(0,p.Z)((0,u.Z)().mark((function e(){var t,n,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch("https://nestrental.com.br:80/api/produtos/".concat(r[0][0].id_produto),{method:"GET"}),e.next=3,t;case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,S(o[0].nome);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.useEffect((function(){W()}),[]),(0,Z.jsx)(Z.Fragment,{children:t&&r?(0,Z.jsxs)("div",{className:h.Z.modal,style:{width:"700px",padding:"1rem"},children:[(0,Z.jsx)("div",{className:h.Z.modal__divCloseButton,children:(0,Z.jsx)("button",{className:h.Z.modal__divCloseButton__closeButton,onClick:function(e){return n(!t)},children:(0,Z.jsx)(m.LHV,{})})}),(0,Z.jsx)("div",{style:{display:"block",width:"100%",marginBottom:"1rem"},children:(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("p",{style:{display:"flex",alignItems:"center",gridGap:"10px",fontWeight:"bold",fontSize:"1.4rem",marginLeft:"2.3rem",marginBottom:"-.5rem"},children:[(0,Z.jsx)(m.QML,{size:35})," Tabela de Valores Di\xe1rios - ",(0,Z.jsx)("label",{children:C})]}),(0,Z.jsxs)("ul",{style:{listStyle:"none",width:"100%"},children:[(0,Z.jsxs)("div",{style:{display:"flex",gridGap:"2rem",borderBottom:"1px solid #ccc"},children:[(0,Z.jsx)("p",{style:{fontWeight:"bold",fontSize:"1rem",borderRight:"1px solid #ccc",paddingRight:"1rem"},children:"Dias"}),(0,Z.jsx)("p",{style:{fontWeight:"bold",fontSize:"1rem",marginLeft:"-15px"},children:"Valores"})]}),r?r[0].map((function(e,t){return(0,Z.jsxs)("div",{style:{marginTop:"1rem",display:"flex",gridGap:"1rem",justifyContent:"space-between",alignItems:"center"},children:[(0,Z.jsx)("div",{style:{width:"10%",textAlign:"center"},children:(0,Z.jsx)("p",{style:{borderBottom:"1px solid #ccc"},children:t+1})}),(0,Z.jsx)("li",{style:{width:"100%"},children:(0,Z.jsx)(f.Z,{color:"primary",type:"text",id:"product_value",fullWidth:!0,required:!0,size:"small",onChange:function(e){return j(e.target.value)},defaultValue:e.valor?e.valor:""})},t),(0,Z.jsx)(v.Z,{color:"primary",variant:"contained",size:"large",onClick:function(e){return T(e,t+1)},children:"Editar"})]},t)})):(0,Z.jsxs)("div",{style:{marginTop:"1rem",display:"flex",gridGap:"1rem",justifyContent:"space-between",alignItems:"center"},children:[(0,Z.jsx)("div",{style:{width:"10%",textAlign:"center"},children:(0,Z.jsx)("p",{style:{borderBottom:"1px solid #ccc"},children:1})}),(0,Z.jsx)("li",{style:{width:"100%"},children:(0,Z.jsx)(f.Z,{color:"primary",type:"text",id:"product_value",fullWidth:!0,required:!0,size:"small",onChange:function(e){return j(e.target.value)}})}),(0,Z.jsx)(v.Z,{color:"primary",variant:"contained",size:"large",onClick:function(e){return T(e,1)},children:"Editar"})]})]})]})})]}):""})},X=n(16871),ee=function(e){var t=e.products,n=(0,a.useState)([]),r=(0,o.Z)(n,2),i=r[0],l=r[1],c=i.length>0,d=(0,a.useState)(0),h=(0,o.Z)(d,2),x=h[0],f=h[1],v=(0,a.useState)(5),g=(0,o.Z)(v,2),y=g[0],_=g[1],b=(0,a.useCallback)((function(){var e=F.P6.json_to_sheet(t),n=F.P6.book_new();F.P6.book_append_sheet(n,e,"Data"),(0,F.Fv)(n,"Produtos.xlsx")}),[t]),S=function(e){return e.filter((function(e){return!0}))}(t),H=function(e,t,n){return e.slice(t*n,t*n+n)}(S,x,y),O=(i.length>0&&(i.length,t.length),i.length,t.length,(0,B.Z)()),$=((0,X.s0)(),(0,a.useState)([])),U=(0,o.Z)($,2),Y=U[0],ee=U[1],te=(0,a.useState)(null),ne=(0,o.Z)(te,2),re=ne[0],oe=ne[1],ae=(0,a.useState)([]),ie=(0,o.Z)(ae,2),se=(ie[0],ie[1],(0,a.useState)(!1)),le=(0,o.Z)(se,2),ce=le[0],de=le[1],ue=(0,a.useState)(!1),pe=(0,o.Z)(ue,2),he=pe[0],me=pe[1];function xe(){return xe=(0,p.Z)((0,u.Z)().mark((function e(t){var n,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return de(!ce),ee(null),e.next=4,P.hi.get("/produtos/".concat(t));case 4:n=e.sent,r=n.data,ee(r||null);case 7:case"end":return e.stop()}}),e)}))),xe.apply(this,arguments)}function fe(){return fe=(0,p.Z)((0,u.Z)().mark((function e(t){var n,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!ce),oe(null),e.next=4,P.hi.get("/produtos/precos/".concat(t));case 4:n=e.sent,r=n.data,oe(r||null);case 7:case"end":return e.stop()}}),e)}))),fe.apply(this,arguments)}return(0,Z.jsxs)(w.Z,{children:[c&&(0,Z.jsx)(z.Z,{flex:1,p:2,children:(0,Z.jsx)(J,{id_product:i})}),!c&&(0,Z.jsx)(M.Z,{action:(0,Z.jsx)(z.Z,{width:150,children:(0,Z.jsx)(K.veA,{onClick:b,style:{textAlign:"right",position:"relative",left:"7rem",height:"25px",width:"25px",cursor:"pointer"}})}),title:"Produtos cadastrados"}),(0,Z.jsx)(T.Z,{}),(0,Z.jsx)(W.Z,{children:(0,Z.jsxs)(D.Z,{children:[(0,Z.jsx)(E.Z,{children:(0,Z.jsxs)(q.Z,{children:[(0,Z.jsx)(I.Z,{}),(0,Z.jsx)(I.Z,{children:"Produto"}),(0,Z.jsx)(I.Z,{children:"Marca"}),(0,Z.jsx)(I.Z,{children:"Categoria"}),(0,Z.jsx)(I.Z,{align:"right",children:"Valor Di\xe1rio"}),(0,Z.jsx)(I.Z,{align:"right",children:"A\xe7\xf5es"})]})}),(0,Z.jsx)(L.Z,{children:H.map((function(e){var t,n=i.includes(e.id);return(0,Z.jsxs)(q.Z,{hover:!0,selected:n,children:[(0,Z.jsx)(I.Z,{padding:"checkbox",children:(0,Z.jsx)(V.Z,{color:"primary",checked:n,onChange:function(t){return n=e.id,void(i.includes(n)?l((function(e){return e.filter((function(e){return e!==n}))})):l((function(e){return[].concat((0,C.Z)(e),[n])})));var n},value:n})}),(0,Z.jsx)(I.Z,{children:(0,Z.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.nome})}),(0,Z.jsx)(I.Z,{children:(0,Z.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.fabricante})}),(0,Z.jsx)(I.Z,{children:(0,Z.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:null===e||void 0===e||null===(t=e.categoria)||void 0===t?void 0:t.descricao})}),(0,Z.jsxs)(I.Z,{align:"right",children:[(0,Z.jsx)(s.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0}),(0,Z.jsxs)(s.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:["R$",k()(e.valor).format("0,0.00")]})]}),(0,Z.jsxs)(I.Z,{align:"right",children:[(0,Z.jsx)(A.Z,{title:"Editar produto",arrow:!0,children:(0,Z.jsx)(G.Z,{sx:{"&:hover":{background:O.colors.primary.lighter},color:O.palette.primary.main},color:"inherit",size:"small",onClick:function(t){return function(e){return xe.apply(this,arguments)}(null===e||void 0===e?void 0:e.id)},children:(0,Z.jsx)(N.Z,{fontSize:"small"})})}),(0,Z.jsx)(A.Z,{title:"Editar valores di\xe1rios",arrow:!0,children:(0,Z.jsx)(G.Z,{sx:{"&:hover":{background:O.colors.primary.lighter},color:O.palette.primary.main},color:"inherit",size:"small",onClick:function(t){return function(e){return fe.apply(this,arguments)}(null===e||void 0===e?void 0:e.id)},children:(0,Z.jsx)(m.Bxc,{fontSize:"medium"})})})]})]},e.id)}))})]})}),(0,Z.jsx)(z.Z,{p:2,children:(0,Z.jsx)(R.Z,{component:"div",count:S.length,onPageChange:function(e,t){f(t)},onRowsPerPageChange:function(e){_(parseInt(e.target.value))},page:x,rowsPerPage:y,rowsPerPageOptions:[5,10,25,30]})}),Y&&(0,Z.jsx)(j,{openModal:ce,setModal:de,data:Y,edit:!0}),re&&(0,Z.jsx)(Q,{openModal:he,setModal:me,data:re,edit:!0})]})};ee.defaultProps={products:[]};var te=ee;var ne=function(){var e=(0,a.useState)([]),t=(0,o.Z)(e,2),n=t[0],r=t[1];function i(){return(i=(0,p.Z)((0,u.Z)().mark((function e(){var t,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get("/produtos");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(te,{products:n||[]})})};var re=function(){return window.location.pathname,(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(r.ql,{children:(0,Z.jsx)("title",{children:"Produtos - Gerenciar"})}),(0,Z.jsx)(_.Z,{children:(0,Z.jsx)(y,{})}),(0,Z.jsx)(b.Z,{maxWidth:"lg",children:(0,Z.jsx)(i.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,Z.jsx)(i.ZP,{item:!0,xs:12,children:(0,Z.jsx)(ne,{})})})})]})}},74696:function(e,t,n){var r=n(95318);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.Z=i},31675:function(e,t,n){var r=n(95318);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)([(0,a.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.Z=i},98243:function(e,t){t.Z={modal:"Modal_modal__5Lj9m",modal__divCloseButton:"Modal_modal__divCloseButton__tTZ3Y",modal__divCloseButton__closeButton:"Modal_modal__divCloseButton__closeButton__ABY0m",modal__closeButton:"Modal_modal__closeButton__ZDrqX",modalCategory:"Modal_modalCategory__IjrSy",modalCategory__divCloseButton:"Modal_modalCategory__divCloseButton__5mZKo",modalCategory__closeButton:"Modal_modalCategory__closeButton__fGLZH"}}}]);
//# sourceMappingURL=613.77e9daba.chunk.js.map