(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},181:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(14),i=a.n(r),s=(a(159),a(48)),o=a(28),l=a(17),u=(a(160),a(161),a(345)),j=a(331),d=a(9),b=a(7);function h(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var O=a(98),m=a.n(O),p=a(134),f=(a(168),a(169),a(335)),x=a(135),g=a.n(x),v=a(136),C=a.n(v),N=a.p+"static/media/couverture.2dc9ece9.webp",A=a(145),D=a(346);function y(e){e.id;var t=e.nom,a=e.couleur,c=e.datemodif,r=e.couverture,i=n.a.useState(null),s=Object(l.a)(i,2),o=s[0],u=s[1],j=function(){u(null)};return Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(f.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:""==r?N:r,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",k(c)]})]}),Object(b.jsx)(f.a,{className:"modifier","aria-label":"modifier",size:"small","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},children:Object(b.jsx)(C.a,{})}),Object(b.jsxs)(A.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:j,children:[Object(b.jsx)(D.a,{onClick:j,children:"Modifier"}),Object(b.jsx)(D.a,{onClick:j,children:"Supprimer"})]})]})}function k(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var S=a(137);a(291);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyCALR26mfBqim8lJw9DongwsXO3agomG7Y",authDomain:"panier-achats-cpatry.firebaseapp.com",databaseURL:"https://panier-achats-cpatry-default-rtdb.firebaseio.com",projectId:"panier-achats-cpatry",storageBucket:"panier-achats-cpatry.appspot.com",messagingSenderId:"834323949561",appId:"1:834323949561:web:c4a89652abde78b46dff28",measurementId:"G-N0T5DY59QR"});var I=new S.a.AuthUI(d.a.auth()),w=d.a.firestore();function F(e){var t=e.utilisateur,a=e.etatDossiers,n=Object(l.a)(a,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,w.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(s.a)({id:e.id},e.data()))})),i(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("ul",{className:"ListeDossiers",children:0==r.length?Object(b.jsxs)("div",{className:"NonSignets",children:[Object(b.jsx)("h3",{children:"Votre liste de dossiers est vide"}),Object(b.jsx)("h1",{children:"(\u2609_\u2609)"})]}):r.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(y,Object(s.a)({},e))},e.id)}))})}var E=a(340),R=a(143),B=a.n(R);a(181),a(182);function V(){return Object(c.useEffect)((function(){return I.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var P=a(19),T=a(341),z=a(343),M=a(339),G=a(338),L=a(344),_=a(144),J=a(73),U=a(72),W=a(8),Y=a(337),q=Object(W.a)((function(e){return{root:{color:e.palette.getContrastText(J.a[500]),backgroundColor:J.a[500],"&:hover":{backgroundColor:J.a[700]}}}}))(j.a),K=Object(W.a)((function(e){return{root:{color:e.palette.getContrastText(U.a[500]),backgroundColor:U.a[500],"&:hover":{backgroundColor:U.a[700]}}}}))(j.a),Q=Object(Y.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function X(e){var t=e.ouvert,a=e.setOuvert,n=e.gererAjout,r=Q(),i=Object(c.useState)(""),s=Object(l.a)(i,2),o=s[0],u=s[1],j=Object(c.useState)(""),d=Object(l.a)(j,2),h=d[0],O=d[1],m=Object(c.useState)("#537169"),p=Object(l.a)(m,2),f=p[0],x=p[1];function g(){u(""),O(""),x("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(z.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(L.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(G.a,{children:[Object(b.jsx)(T.a,Object(P.a)({autoFocus:!0,margin:"dense",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return u(e.target.value)},defaultValue:o},"margin","normal")),Object(b.jsx)(T.a,{margin:"dense",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return O(e.target.value)},defaultValue:h}),Object(b.jsx)(_.a,{width:"100%",colors:["#ABDEE6","#CBAACB","#FFFFB5","#FFCCB6","#F3B0C3","#CCE2CB"],triangle:"hide",onChangeComplete:function(e,t){return x(e.hex)},color:f})]}),Object(b.jsxs)(M.a,{className:r.root,children:[Object(b.jsx)(K,{onClick:function(){a(!1),g()},color:"secondary",children:"Annuler"}),Object(b.jsx)(q,{onClick:function(){""!==o&&n(o,h,f),g()},color:"secondary",children:"Ajouter"})]})]})})}function H(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),u=i[0],j=i[1],O=Object(c.useState)(!1),m=Object(l.a)(O,2),p=m[0],f=m[1];return Object(c.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){n(e),e&&w.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(F,{utilisateur:a,etatDossiers:r}),Object(b.jsx)(X,{ouvert:p,setOuvert:f,gererAjout:function(e,t,c){var n={nom:e,couverture:t,couleur:c,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};w.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(n).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(u),[Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id})]))})),f(!1)}))}}),Object(b.jsx)(E.a,{onClick:function(){return f(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(B.a,{})})]})]}):Object(b.jsx)(V,{})})}i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("racine"))}},[[289,1,2]]]);
//# sourceMappingURL=main.8c239d04.chunk.js.map