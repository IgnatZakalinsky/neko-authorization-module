(this["webpackJsonpneko-authorization-module"]=this["webpackJsonpneko-authorization-module"]||[]).push([[0],{37:function(e,t,a){e.exports=a(68)},42:function(e,t,a){},47:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(42),a(5)),s=a(6),u=(a(47),a(15)),i=a(34),d=a(1),m={},b=["SIGN_IN/LOADING","SIGN_IN/ERROR","SIGN_IN/SUCCESS"],f={},g=["REGISTER/LOADING","REGISTER/ERROR","REGISTER/SUCCESS"],E={},v=["FORGOT/LOADING","FORGOT/ERROR","FORGOT/SUCCESS"],p={name:""},h=["NEKO/LOADING","NEKO/ERROR","NEKO/SUCCESS"],k=function(e){return{type:"NEKO/SET_NAME",name:e}},O={booleans:[]},w=function(e){return{type:"BOOLEAN/SET_VALUE",booleans:e}},C=Object(u.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN/SOME":return Object(d.a)({},e);default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/SOME":return Object(d.a)({},e);default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/SOME":return Object(d.a)({},e);default:return e}},booleans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOLEAN/SET_VALUE":var a=e.booleans.map((function(e){var a=t.booleans.find((function(t){return t.name===e.name}));return a||e})),n=!0,r=!1,o=void 0;try{for(var c,l=function(){var e=c.value;a.find((function(t){return t.name===e.name}))||a.push(e)},s=t.booleans[Symbol.iterator]();!(n=(c=s.next()).done);n=!0)l()}catch(u){r=!0,o=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return Object(d.a)({},e,{booleans:a});default:return e}},neko:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEKO/SET_NAME":return Object(d.a)({},e,{name:t.name});default:return e}}}),j=Object(u.d)(C,Object(u.a)(i.a)),S=j;window.store=j;var R=a(2),y=a(10),N=function(e,t,a){e(w([{name:t[0],value:a,data:{}},{name:t[1],value:!1,data:{}},{name:t[2],value:!1,data:{}}]))},I=function(e,t,a){e(w([{name:t[0],value:!1,data:{}},{name:t[1],value:!0,data:{message:a}},{name:t[2],value:!1,data:{}}]))},x=function(e,t,a){e(w([{name:t[0],value:!1,data:{}},{name:t[1],value:!1,data:{}},{name:t[2],value:a,data:{}}]))},T=function(e,t){e(w([{name:t[0],value:!1,data:{}},{name:t[1],value:!1,data:{}},{name:t[2],value:!1,data:{}}]))},P=function(e,t){N(e,b,t)},M=function(e,t){I(e,b,t)},G=function(e,t){x(e,b,t)},F=function(e){T(e,b)},A=function(e){return Object(s.c)((function(t){return function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var c,l=function(){var t=c.value;a.push(e.booleans.booleans.find((function(e){return e.name===t}))||{name:t,value:!1,data:{}})},s=t[Symbol.iterator]();!(n=(c=s.next()).done);n=!0)l()}catch(u){r=!0,o=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}(t,e)}))},L=a(4),U=a.n(L),_=a(35),D=a.n(_).a.create({baseURL:"https://dry-forest-56016.herokuapp.com/"}),K=function(e){var t;return U.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.awrap(D.post("/auth/me",{token:e}));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},B=function(e,t,a){document.cookie="".concat(e,"=").concat(t,";max-age=").concat(a,";path=/")},W=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()\]\\^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},$=function(e,t){N(e,h,t)},z=function(e,t){I(e,h,t)},J=function(e,t){x(e,h,t)},V=function(e){T(e,h)},q=function(){return function(e,t){var a,n;return U.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=W("token")||"")){t.next=15;break}return $(e,!0),t.prev=3,t.next=6,U.a.awrap(K(a));case 6:(n=t.sent).error?(z(e,n.error),"bad token!"===n.error&&B("token","",-1e3),console.log("Neko Get Me Error!",n.error,a)):(B("token",n.token,Math.floor(n.tokenDeathTime/1e3)-180),e(k(n.name)),J(e,!0),console.log("Neko Get Me Success!",n.name)),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(3),z(e,t.t0.response.data.error),"bad token!"===t.t0.response.data.error&&B("token","",-1e3),console.log("Neko Get Me Error!",Object(d.a)({},t.t0));case 15:case"end":return t.stop()}}),null,null,[[3,10]])}},H=/^[\w][\w-]*@[\w-]+\.[a-z]{2,7}$/i,Q=function(e){return H.test(e)},X=function(e){return e.length>7},Y=function(e,t,a){var n;return U.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,U.a.awrap(D.post("/auth/login",{email:e,password:t,rememberMe:a}));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}))},Z=function(e){for(var t="",a=0;a<e.length;a++)t+=String.fromCharCode(e.charCodeAt(a)^1+(e.length-a)%32);return t},ee=function(e,t,a,n){return function(){Q(t)?X(a)?e(function(e,t,a){return function(n,r){var o;return U.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return V(n),P(n,!0),r.prev=2,r.next=5,U.a.awrap(Y(e,Z(t),a));case 5:(o=r.sent).error?M(n,o.error):(B("token",o.token,Math.floor(o.tokenDeathTime/1e3)-180),n(k(o.name)),G(n,!0),console.log("Neko Sign-in Success!",o)),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(2),M(n,r.t0.response.data.error),console.log("Neko Sign-in Error!",Object(d.a)({},r.t0));case 13:case"end":return r.stop()}}),null,null,[[2,9]])}}(t,a,n)):M(e,"Password not valid! must be more than 7 characters..."):M(e,"Email not valid!")}},te=function(){var e=A(b),t=Object(R.a)(e,3),a=t[0],r=t[1],o=t[2],c=A(["NEKO/SUCCESS","NEKO/LOADING"]),l=Object(R.a)(c,2),u=l[0],i=l[1],d=Object(s.b)(),m=Object(s.c)((function(e){return e.neko})).name,f=function(e){var t=Object(n.useState)("test@email.nya"),a=Object(R.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)("test password nya"),l=Object(R.a)(c,2),s=l[0],u=l[1],i=Object(n.useState)(!1),d=Object(R.a)(i,2),m=d[0],b=d[1],f=Object(n.useState)(!1),g=Object(R.a)(f,2),E=g[0],v=g[1],p=A(["SIGN_IN/ERROR"]),h=Object(R.a)(p,1)[0];return{email:r,setEmailCallback:function(t){o(t),h.data.message&&F(e)},password:s,setPasswordCallback:function(t){u(t),h.data.message&&F(e)},rememberMe:m,setRememberMeCallback:function(t){b(t),h.data.message&&F(e)},redirect:E,setRedirect:v}}(d),g=f.email,E=f.setEmailCallback,v=f.password,p=f.setPasswordCallback,h=f.rememberMe,k=f.setRememberMeCallback,O=f.redirect,w=f.setRedirect;Object(n.useEffect)((function(){m||d(q())}),[]);var C=ee(d,g,v,h);return{loading:a,error:r,success:o,dispatch:d,nekoSuccess:u,nekoLoading:i,email:g,setEmailCallback:E,password:v,setPasswordCallback:p,rememberMe:h,setRememberMeCallback:k,redirect:O,setRedirect:w,signIn:C}},ae={display:"flex"},ne=Object(d.a)({},ae,{flexFlow:"column"}),re=Object(d.a)({},ae,{alignItems:"center"}),oe=Object(d.a)({},ne,{alignItems:"center"}),ce=(Object(d.a)({},re,{justifyContent:"center"}),Object(d.a)({},oe,{justifyContent:"center"})),le=Object(d.a)({},re,{justifyContent:"space-around"}),se=Object(d.a)({},oe,{justifyContent:"space-around"}),ue=Object(d.a)({},le,{flexWrap:"wrap"}),ie=(Object(d.a)({},se,{flexWrap:"wrap"}),function(e){var t=e.loading,a=e.error,n=e.success,o=e.email,c=e.setEmailCallback,s=e.password,u=e.setPasswordCallback,i=e.rememberMe,m=e.setRememberMeCallback,b=e.signInCallback;return console.log("render SignIn"),r.a.createElement("div",{style:Object(d.a)({},ce,{height:"80vh"})},"sign-in",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},"Success!"):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("input",{value:o,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement("input",{value:s,onChange:function(e){return u(e.currentTarget.value)},type:"password"}),r.a.createElement(l.b,{to:Ke},"Forgot password?"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:i,onChange:function(e){return m(e.currentTarget.checked)}}),"Remember Me")),r.a.createElement("button",{onClick:b,disabled:t||n},"Sign In"),r.a.createElement(l.b,{to:De},"Registration"))}),de=function(e){return function(){B("token","",-1e3),e(k("")),V(e)}},me=function(){var e=Object(s.b)();return console.log("render Disconnect"),r.a.createElement("div",{style:Object(d.a)({},ce,{height:"80vh"})},r.a.createElement("button",{onClick:de(e)},"logout"),r.a.createElement(l.b,{to:Be},"Neko Profile"))},be=function(){var e=te(),t=e.loading,a=e.error,n=e.success,o=e.dispatch,c=e.nekoSuccess,l=e.nekoLoading,s=e.email,u=e.setEmailCallback,i=e.password,d=e.setPasswordCallback,m=e.rememberMe,b=e.setRememberMeCallback,f=e.redirect,g=e.setRedirect,E=e.signIn;return n.value&&setTimeout((function(){return g(!0)}),500),f?(setTimeout((function(){return F(o)}),500),r.a.createElement(y.a,{to:Be})):(console.log("render SignInContainer"),c.value?r.a.createElement(me,null):r.a.createElement(ie,{loading:t.value||l.value,error:a.data.message||"",success:n.value,email:s,setEmailCallback:u,password:i,setPasswordCallback:d,rememberMe:m,setRememberMeCallback:b,signInCallback:E}))},fe=function(){return console.log("render SignInPage"),r.a.createElement(be,null)},ge=function(e,t){N(e,g,t)},Ee=function(e,t){I(e,g,t)},ve=function(e,t){x(e,g,t)},pe=function(e){T(e,g)},he=function(e,t){var a;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.awrap(D.post("/auth/register",{email:e,password:t}));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}))},ke=function(e,t,a,n){return function(){Q(t)?X(a)?a!==n?Ee(e,"Passwords don't match!"):e(function(e,t){return function(a,n){var r;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return ge(a,!0),n.prev=1,n.next=4,U.a.awrap(he(e,Z(t)));case 4:(r=n.sent).error?Ee(a,r.error):(ve(a,!0),console.log("Neko Register Success!",r)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),Ee(a,n.t0.response.data.error),console.log("Neko Register Error!",Object(d.a)({},n.t0));case 12:case"end":return n.stop()}}),null,null,[[1,8]])}}(t,a)):Ee(e,"Password not valid! must be more than 7 characters..."):Ee(e,"Email not valid!")}},Oe=function(){var e=A(g),t=Object(R.a)(e,3),a=t[0],r=t[1],o=t[2],c=Object(s.b)(),l=function(e){var t=Object(n.useState)("test@email.nya"),a=Object(R.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)("test password nya"),l=Object(R.a)(c,2),s=l[0],u=l[1],i=Object(n.useState)("test password nya2"),d=Object(R.a)(i,2),m=d[0],b=d[1],f=Object(n.useState)(!1),g=Object(R.a)(f,2),E=g[0],v=g[1],p=A(["REGISTER/ERROR"]),h=Object(R.a)(p,1)[0];return{email:r,setEmailCallback:function(t){o(t),h.data.message&&pe(e)},password:s,setPasswordCallback:function(t){u(t),h.data.message&&pe(e)},password2:m,setPassword2Callback:function(t){b(t),h.data.message&&pe(e)},redirect:E,setRedirect:v}}(c),u=l.email,i=l.setEmailCallback,d=l.password,m=l.setPasswordCallback,b=l.password2;return{loading:a,error:r,success:o,dispatch:c,email:u,setEmailCallback:i,password:d,setPasswordCallback:m,password2:b,setPassword2Callback:l.setPassword2Callback,redirect:l.redirect,setRedirect:l.setRedirect,register:ke(c,u,d,b)}},we=function(e){var t=e.loading,a=e.error,n=e.success,o=e.email,c=e.setEmailCallback,s=e.password,u=e.setPasswordCallback,i=e.password2,m=e.setPassword2Callback,b=e.registerCallback;return console.log("render Register"),r.a.createElement("div",{style:Object(d.a)({},ce,{height:"80vh"})},"register",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},"Success!"):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("input",{value:o,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement("input",{value:s,onChange:function(e){return u(e.currentTarget.value)},type:"password"}),r.a.createElement("input",{value:i,onChange:function(e){return m(e.currentTarget.value)},type:"password"}),r.a.createElement("button",{onClick:b,disabled:t||n},"Register"),r.a.createElement(l.b,{to:_e},"Sign In"))},Ce=function(){var e=Oe(),t=e.loading,a=e.error,n=e.success,o=e.dispatch,c=e.email,l=e.setEmailCallback,s=e.password,u=e.setPasswordCallback,i=e.password2,d=e.setPassword2Callback,m=e.redirect,b=e.setRedirect,f=e.register;return n.value&&setTimeout((function(){return b(!0)}),500),m?(setTimeout((function(){return pe(o)}),500),r.a.createElement(y.a,{to:_e})):(console.log("render RegisterContainer"),r.a.createElement(we,{loading:t.value,error:a.data.message||"",success:n.value,email:c,setEmailCallback:l,password:s,setPasswordCallback:u,password2:i,setPassword2Callback:d,registerCallback:f}))},je=function(){return console.log("render RegisterPage"),r.a.createElement(Ce,null)},Se=function(e,t){N(e,v,t)},Re=function(e,t){I(e,v,t)},ye=function(e,t){x(e,v,t)},Ne=function(e){T(e,v)},Ie=function(e){var t;return U.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.awrap(D.post("/auth/forgot",{email:e}));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},xe=function(e,t){return function(){Q(t)?e(function(e){return function(t,a){var n;return U.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return Se(t,!0),a.prev=1,a.next=4,U.a.awrap(Ie(e));case 4:(n=a.sent).error?Re(t,n.error):(ye(t,!0),console.log("Neko Forgot Success!",n)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),Re(t,a.t0.response.data.error),console.log("Neko Forgot Error!",Object(d.a)({},a.t0));case 12:case"end":return a.stop()}}),null,null,[[1,8]])}}(t)):Re(e,"Email not valid!")}},Te=function(){var e=A(v),t=Object(R.a)(e,3),a=t[0],r=t[1],o=t[2],c=Object(s.b)(),l=function(e){var t=Object(n.useState)("test@email.nya"),a=Object(R.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(R.a)(c,2),s=l[0],u=l[1],i=A(["FORGOT/ERROR"]),d=Object(R.a)(i,1)[0];return{email:r,setEmailCallback:function(t){o(t),d.data.message&&Ne(e)},redirect:s,setRedirect:u}}(c),u=l.email;return{loading:a,error:r,success:o,dispatch:c,email:u,setEmailCallback:l.setEmailCallback,redirect:l.redirect,setRedirect:l.setRedirect,forgot:xe(c,u)}},Pe=function(e){var t=e.loading,a=e.error,n=e.success,o=e.email,c=e.setEmailCallback,s=e.forgotCallback;return console.log("render Forgot"),r.a.createElement("div",{style:Object(d.a)({},ce,{height:"80vh"})},"forgot",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},"Success!"):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("input",{value:o,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement("button",{onClick:s,disabled:t||n},"Send email"),r.a.createElement(l.b,{to:_e},"Sign In"))},Me=function(){var e=Te(),t=e.loading,a=e.error,n=e.success,o=e.dispatch,c=e.email,l=e.setEmailCallback,s=e.redirect,u=e.setRedirect,i=e.forgot;return n.value&&setTimeout((function(){return u(!0)}),500),s?(setTimeout((function(){return Ne(o)}),500),r.a.createElement(y.a,{to:_e})):(console.log("render ForgotContainer"),r.a.createElement(Pe,{loading:t.value,error:a.data.message||"",success:n.value,email:c,setEmailCallback:l,forgotCallback:i}))},Ge=function(){return console.log("render ForgotPage"),r.a.createElement(Me,null)},Fe=function(){var e=A(h),t=Object(R.a)(e,3),a=t[0],r=t[1],o=t[2],c=Object(s.c)((function(e){return e.neko})).name,l=Object(s.b)(),u=function(e){var t=Object(n.useState)(!1),a=Object(R.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(R.a)(c,2);return{show:r,setShow:o,redirect:l[0],setRedirect:l[1]}}(),i=u.show,d=u.setShow,m=u.redirect,b=u.setRedirect;Object(n.useEffect)((function(){c||l(q())}),[]),Object(n.useEffect)((function(){W("token")?d(!0):b(!0)}),[c,r]);var f=de(l);return{loading:a,error:r,success:o,dispatch:l,name:c,show:i,setShow:d,redirect:m,setRedirect:b,logout:f}},Ae=function(e){var t=e.loading,a=e.error,n=e.name,o=e.logoutCallback;return console.log("render Neko"),r.a.createElement("div",{style:Object(d.a)({},ce,{height:"80vh"})},"neko",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},n):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("button",{onClick:o,disabled:t},"logout"))},Le=function(){var e=Fe(),t=e.loading,a=e.error,n=(e.success,e.dispatch,e.name),o=e.show,c=(e.setShow,e.redirect),l=(e.setRedirect,e.logout);return c?r.a.createElement(y.a,{to:_e}):(console.log("render NekoContainer"),o?r.a.createElement(Ae,{loading:t.value,error:a.data.message||"",name:n,logoutCallback:l}):r.a.createElement("div",{style:Object(d.a)({},ce,{height:"80vh",color:"orange"})},"Loading..."))},Ue=function(){return console.log("render NekoPage"),r.a.createElement(Le,null)},_e="/sign-in",De="/register",Ke="/forgot",Be="/neko",We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.b,{exact:!0,path:"/",render:function(){return r.a.createElement(y.a,{to:_e})}}),r.a.createElement(y.b,{path:_e,render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(y.b,{path:De,render:function(){return r.a.createElement(je,null)}}),r.a.createElement(y.b,{path:Ke,render:function(){return r.a.createElement(Ge,null)}}),r.a.createElement(y.b,{path:Be,render:function(){return r.a.createElement(Ue,null)}}))},$e=function(){var e=Object(n.useState)(!1),t=Object(R.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{style:Object(d.a)({},ue)},r.a.createElement("button",{onClick:function(){return o(!a)}},a?"hide dev header":"show dev header"),a&&r.a.createElement(l.b,{to:_e},"sign-in"),a&&r.a.createElement(l.b,{to:De},"register"),a&&r.a.createElement(l.b,{to:Ke},"forgot"),a&&r.a.createElement(l.b,{to:Be},"neko"))},ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($e,null),r.a.createElement(We,null))},Je=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(s.a,{store:S},r.a.createElement(ze,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.4267bae6.chunk.js.map