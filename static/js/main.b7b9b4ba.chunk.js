(this["webpackJsonpneko-authorization-module"]=this["webpackJsonpneko-authorization-module"]||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},50:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),s=(a(45),a(5)),l=a(7),u=(a(50),a(16)),i=a(37),d=a(1),m={},b=["SIGN_IN/LOADING","SIGN_IN/ERROR","SIGN_IN/SUCCESS"],f={},g=["REGISTER/LOADING","REGISTER/ERROR","REGISTER/SUCCESS"],E={},p=["FORGOT/LOADING","FORGOT/ERROR","FORGOT/SUCCESS"],v={name:""},w=["NEKO/LOADING","NEKO/ERROR","NEKO/SUCCESS"],k=function(e){return{type:"NEKO/SET_NAME",name:e}},h=a(20),O={booleans:[]},C=function(e){return{type:"BOOLEAN/SET_VALUE",booleans:e}},j=Object(u.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN/SOME":return Object(d.a)({},e);default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/SOME":return Object(d.a)({},e);default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/SOME":return Object(d.a)({},e);default:return e}},booleans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOLEAN/SET_VALUE":var a,n=e.booleans.map((function(e){var a=t.booleans.find((function(t){return t.name===e.name}));return a||e})),r=Object(h.a)(t.booleans);try{var o=function(){var e=a.value;n.find((function(t){return t.name===e.name}))||n.push(e)};for(r.s();!(a=r.n()).done;)o()}catch(c){r.e(c)}finally{r.f()}return Object(d.a)({},e,{booleans:n});default:return e}},neko:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEKO/SET_NAME":return Object(d.a)({},e,{name:t.name});default:return e}}}),S=Object(u.d)(j,Object(u.a)(i.a)),R=S;window.store=S;var y=a(2),N=a(11),P=function(e,t,a){e(C([{name:t[0],value:a,data:{}},{name:t[1],value:!1,data:{}},{name:t[2],value:!1,data:{}}]))},T=function(e,t,a){e(C([{name:t[0],value:!1,data:{}},{name:t[1],value:!0,data:{message:a}},{name:t[2],value:!1,data:{}}]))},I=function(e,t,a){e(C([{name:t[0],value:!1,data:{}},{name:t[1],value:!1,data:{}},{name:t[2],value:a,data:{}}]))},x=function(e,t){e(C([{name:t[0],value:!1,data:{}},{name:t[1],value:!1,data:{}},{name:t[2],value:!1,data:{}}]))},M=function(e,t){P(e,b,t)},G=function(e,t){T(e,b,t)},A=function(e,t){I(e,b,t)},_=function(e){x(e,b)},L=function(e){return Object(l.c)((function(t){return function(e,t){var a,n=[],r=Object(h.a)(t);try{var o=function(){var t=a.value;n.push(e.booleans.booleans.find((function(e){return e.name===t}))||{name:t,value:!1,data:{}})};for(r.s();!(a=r.n()).done;)o()}catch(c){r.e(c)}finally{r.f()}return n}(t,e)}))},F=a(3),U=a.n(F),D=a(6),W=a(38),K=a.n(W).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),B={getMe:function(){var e=Object(D.a)(U.a.mark((function e(t){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/auth/me",{token:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},$=function(e,t,a){document.cookie="".concat(e,"=").concat(t,";max-age=").concat(a,";path=/")},z=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()\]\\^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},J=function(e,t){P(e,w,t)},V=function(e,t){T(e,w,t)},q=function(e,t){I(e,w,t)},H=function(e){x(e,w)},Q=function(){return function(){var e=Object(D.a)(U.a.mark((function e(t,a){var n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=z("token")||"")){e.next=15;break}return J(t,!0),e.prev=3,e.next=6,B.getMe(n);case 6:(r=e.sent).error?(V(t,r.error),"bad token!"===r.error&&$("token","",-1e3),console.log("Neko Get Me Error!",r.error,n)):($("token",r.token,Math.floor(r.tokenDeathTime/1e3)-180),t(k(r.name)),q(t,!0),console.log("Neko Get Me Success!",r.name)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),V(t,e.t0.response.data.error),"bad token!"===e.t0.response.data.error&&$("token","",-1e3),console.log("Neko Get Me Error!",Object(d.a)({},e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}()},X=/^[\w][\w-]*@[\w-]+\.[a-z]{2,7}$/i,Y=function(e){return X.test(e)},Z=function(e){return e.length>7},ee={signIn:function(){var e=Object(D.a)(U.a.mark((function e(t,a,n){var r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/auth/login",{email:t,password:a,rememberMe:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},te=function(e){for(var t="",a=0;a<e.length;a++)t+=String.fromCharCode(e.charCodeAt(a)^1+(e.length-a)%32);return t},ae=function(e,t,a,n){return function(){Y(t)?Z(a)?e(function(e,t,a){return function(){var n=Object(D.a)(U.a.mark((function n(r,o){var c;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return H(r),M(r,!0),n.prev=2,n.next=5,ee.signIn(e,te(t),a);case 5:(c=n.sent).error?G(r,c.error):($("token",c.token,Math.floor(c.tokenDeathTime/1e3)-180),r(k(c.name)),A(r,!0),console.log("Neko Sign-in Success!",c)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),G(r,n.t0.response.data.error),console.log("Neko Sign-in Error!",Object(d.a)({},n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,t){return n.apply(this,arguments)}}()}(t,a,n)):G(e,"Password not valid! must be more than 7 characters..."):G(e,"Email not valid!")}},ne=function(){var e=L(b),t=Object(y.a)(e,3),a=t[0],r=t[1],o=t[2],c=L(["NEKO/SUCCESS","NEKO/LOADING"]),s=Object(y.a)(c,2),u=s[0],i=s[1],d=Object(l.b)(),m=Object(l.c)((function(e){return e.neko})).name,f=function(e){var t=Object(n.useState)("test@email.nya"),a=Object(y.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)("test password nya"),s=Object(y.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)(!1),d=Object(y.a)(i,2),m=d[0],b=d[1],f=Object(n.useState)(!1),g=Object(y.a)(f,2),E=g[0],p=g[1],v=L(["SIGN_IN/ERROR"]),w=Object(y.a)(v,1)[0];return{email:r,setEmailCallback:function(t){o(t),w.data.message&&_(e)},password:l,setPasswordCallback:function(t){u(t),w.data.message&&_(e)},rememberMe:m,setRememberMeCallback:function(t){b(t),w.data.message&&_(e)},redirect:E,setRedirect:p}}(d),g=f.email,E=f.setEmailCallback,p=f.password,v=f.setPasswordCallback,w=f.rememberMe,k=f.setRememberMeCallback,h=f.redirect,O=f.setRedirect;Object(n.useEffect)((function(){m||d(Q())}),[]);var C=ae(d,g,p,w);return{loading:a,error:r,success:o,dispatch:d,nekoSuccess:u,nekoLoading:i,email:g,setEmailCallback:E,password:p,setPasswordCallback:v,rememberMe:w,setRememberMeCallback:k,redirect:h,setRedirect:O,signIn:C}},re={display:"flex"},oe=Object(d.a)({},re,{flexFlow:"column"}),ce=Object(d.a)({},re,{alignItems:"center"}),se=Object(d.a)({},oe,{alignItems:"center"}),le=(Object(d.a)({},ce,{justifyContent:"center"}),Object(d.a)({},se,{justifyContent:"center"})),ue=Object(d.a)({},ce,{justifyContent:"space-around"}),ie=Object(d.a)({},se,{justifyContent:"space-around"}),de=Object(d.a)({},ue,{flexWrap:"wrap"}),me=(Object(d.a)({},ie,{flexWrap:"wrap"}),function(e){var t=e.loading,a=e.error,n=e.success,o=e.email,c=e.setEmailCallback,l=e.password,u=e.setPasswordCallback,i=e.rememberMe,m=e.setRememberMeCallback,b=e.signInCallback;return console.log("render SignIn"),r.a.createElement("div",{style:Object(d.a)({},le,{height:"80vh"})},"sign-in",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},"Success!"):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("input",{value:o,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement("input",{value:l,onChange:function(e){return u(e.currentTarget.value)},type:"password"}),r.a.createElement(s.b,{to:et},"Forgot password?"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:i,onChange:function(e){return m(e.currentTarget.checked)}}),"Remember Me")),r.a.createElement("button",{onClick:b,disabled:t||n},"Sign In"),r.a.createElement(s.b,{to:Ze},"Registration"))}),be=function(e){return function(){$("token","",-1e3),e(k("")),H(e)}},fe=function(){var e=Object(l.b)();return console.log("render Disconnect"),r.a.createElement("div",{style:Object(d.a)({},le,{height:"80vh"})},r.a.createElement("button",{onClick:be(e)},"logout"),r.a.createElement(s.b,{to:tt},"Neko Profile"))},ge=function(){var e=ne(),t=e.loading,a=e.error,n=e.success,o=e.dispatch,c=e.nekoSuccess,s=e.nekoLoading,l=e.email,u=e.setEmailCallback,i=e.password,d=e.setPasswordCallback,m=e.rememberMe,b=e.setRememberMeCallback,f=e.redirect,g=e.setRedirect,E=e.signIn;return n.value&&setTimeout((function(){return g(!0)}),500),f?(setTimeout((function(){return _(o)}),500),r.a.createElement(N.a,{to:tt})):(console.log("render SignInContainer"),c.value?r.a.createElement(fe,null):r.a.createElement(me,{loading:t.value||s.value,error:a.data.message||"",success:n.value,email:l,setEmailCallback:u,password:i,setPasswordCallback:d,rememberMe:m,setRememberMeCallback:b,signInCallback:E}))},Ee=function(){return console.log("render SignInPage"),r.a.createElement(ge,null)},pe=function(e,t){P(e,g,t)},ve=function(e,t){T(e,g,t)},we=function(e,t){I(e,g,t)},ke=function(e){x(e,g)},he={register:function(){var e=Object(D.a)(U.a.mark((function e(t,a){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/auth/register",{email:t,password:a});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Oe=function(e,t,a,n){return function(){Y(t)?Z(a)?a!==n?ve(e,"Passwords don't match!"):e(function(e,t){return function(){var a=Object(D.a)(U.a.mark((function a(n,r){var o;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return pe(n,!0),a.prev=1,a.next=4,he.register(e,te(t));case 4:(o=a.sent).error?ve(n,o.error):(we(n,!0),console.log("Neko Register Success!",o)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),ve(n,a.t0.response.data.error),console.log("Neko Register Error!",Object(d.a)({},a.t0));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}(t,a)):ve(e,"Password not valid! must be more than 7 characters..."):ve(e,"Email not valid!")}},Ce=function(){var e=L(g),t=Object(y.a)(e,3),a=t[0],r=t[1],o=t[2],c=Object(l.b)(),s=function(e){var t=Object(n.useState)("test@email.nya"),a=Object(y.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)("test password nya"),s=Object(y.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)("test password nya2"),d=Object(y.a)(i,2),m=d[0],b=d[1],f=Object(n.useState)(!1),g=Object(y.a)(f,2),E=g[0],p=g[1],v=L(["REGISTER/ERROR"]),w=Object(y.a)(v,1)[0];return{email:r,setEmailCallback:function(t){o(t),w.data.message&&ke(e)},password:l,setPasswordCallback:function(t){u(t),w.data.message&&ke(e)},password2:m,setPassword2Callback:function(t){b(t),w.data.message&&ke(e)},redirect:E,setRedirect:p}}(c),u=s.email,i=s.setEmailCallback,d=s.password,m=s.setPasswordCallback,b=s.password2;return{loading:a,error:r,success:o,dispatch:c,email:u,setEmailCallback:i,password:d,setPasswordCallback:m,password2:b,setPassword2Callback:s.setPassword2Callback,redirect:s.redirect,setRedirect:s.setRedirect,register:Oe(c,u,d,b)}},je=function(e){var t=e.loading,a=e.error,n=e.success,o=e.email,c=e.setEmailCallback,l=e.password,u=e.setPasswordCallback,i=e.password2,m=e.setPassword2Callback,b=e.registerCallback;return console.log("render Register"),r.a.createElement("div",{style:Object(d.a)({},le,{height:"80vh"})},"register",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},"Success!"):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("input",{value:o,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement("input",{value:l,onChange:function(e){return u(e.currentTarget.value)},type:"password"}),r.a.createElement("input",{value:i,onChange:function(e){return m(e.currentTarget.value)},type:"password"}),r.a.createElement("button",{onClick:b,disabled:t||n},"Register"),r.a.createElement(s.b,{to:Ye},"Sign In"))},Se=function(){var e=Ce(),t=e.loading,a=e.error,n=e.success,o=e.dispatch,c=e.email,s=e.setEmailCallback,l=e.password,u=e.setPasswordCallback,i=e.password2,d=e.setPassword2Callback,m=e.redirect,b=e.setRedirect,f=e.register;return n.value&&setTimeout((function(){return b(!0)}),500),m?(setTimeout((function(){return ke(o)}),500),r.a.createElement(N.a,{to:Ye})):(console.log("render RegisterContainer"),r.a.createElement(je,{loading:t.value,error:a.data.message||"",success:n.value,email:c,setEmailCallback:s,password:l,setPasswordCallback:u,password2:i,setPassword2Callback:d,registerCallback:f}))},Re=function(){return console.log("render RegisterPage"),r.a.createElement(Se,null)},ye=function(e,t){P(e,p,t)},Ne=function(e,t){T(e,p,t)},Pe=function(e,t){I(e,p,t)},Te=function(e){x(e,p)},Ie={forgot:function(){var e=Object(D.a)(U.a.mark((function e(t){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/auth/forgot",{email:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(e,t){return function(){Y(t)?e(function(e){return function(){var t=Object(D.a)(U.a.mark((function t(a,n){var r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ye(a,!0),t.prev=1,t.next=4,Ie.forgot(e);case 4:(r=t.sent).error?Ne(a,r.error):(Pe(a,!0),console.log("Neko Forgot Success!",r)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),Ne(a,t.t0.response.data.error),console.log("Neko Forgot Error!",Object(d.a)({},t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()}(t)):Ne(e,"Email not valid!")}},Me=function(){var e=L(p),t=Object(y.a)(e,3),a=t[0],r=t[1],o=t[2],c=Object(l.b)(),s=function(e){var t=Object(n.useState)("test@email.nya"),a=Object(y.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!1),s=Object(y.a)(c,2),l=s[0],u=s[1],i=L(["FORGOT/ERROR"]),d=Object(y.a)(i,1)[0];return{email:r,setEmailCallback:function(t){o(t),d.data.message&&Te(e)},redirect:l,setRedirect:u}}(c),u=s.email;return{loading:a,error:r,success:o,dispatch:c,email:u,setEmailCallback:s.setEmailCallback,redirect:s.redirect,setRedirect:s.setRedirect,forgot:xe(c,u)}},Ge=function(e){var t=e.loading,a=e.error,n=e.success,o=e.email,c=e.setEmailCallback,l=e.forgotCallback;return console.log("render Forgot"),r.a.createElement("div",{style:Object(d.a)({},le,{height:"80vh"})},"forgot",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},"Success!"):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("input",{value:o,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement("button",{onClick:l,disabled:t||n},"Send email"),r.a.createElement(s.b,{to:Ye},"Sign In"))},Ae=function(){var e=Me(),t=e.loading,a=e.error,n=e.success,o=e.dispatch,c=e.email,s=e.setEmailCallback,l=e.redirect,u=e.setRedirect,i=e.forgot;return n.value&&setTimeout((function(){return u(!0)}),500),l?(setTimeout((function(){return Te(o)}),500),r.a.createElement(N.a,{to:Ye})):(console.log("render ForgotContainer"),r.a.createElement(Ge,{loading:t.value,error:a.data.message||"",success:n.value,email:c,setEmailCallback:s,forgotCallback:i}))},_e=function(){return console.log("render ForgotPage"),r.a.createElement(Ae,null)},Le=function(){var e=L(w),t=Object(y.a)(e,3),a=t[0],r=t[1],o=t[2],c=Object(l.c)((function(e){return e.neko})).name,s=Object(l.b)(),u=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!1),s=Object(y.a)(c,2);return{show:r,setShow:o,redirect:s[0],setRedirect:s[1]}}(),i=u.show,d=u.setShow,m=u.redirect,b=u.setRedirect;Object(n.useEffect)((function(){c||s(Q())}),[]),Object(n.useEffect)((function(){z("token")?d(!0):b(!0)}),[c,r]);var f=be(s);return{loading:a,error:r,success:o,dispatch:s,name:c,show:i,setShow:d,redirect:m,setRedirect:b,logout:f}},Fe=function(e){var t=e.loading,a=e.error,n=e.name,o=e.logoutCallback;return console.log("render Neko"),r.a.createElement("div",{style:Object(d.a)({},le,{height:"80vh"})},"neko",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},n):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("button",{onClick:o,disabled:t},"logout"))},Ue=function(){var e=Le(),t=e.loading,a=e.error,n=(e.success,e.dispatch,e.name),o=e.show,c=(e.setShow,e.redirect),s=(e.setRedirect,e.logout);return c?r.a.createElement(N.a,{to:Ye}):(console.log("render NekoContainer"),o?r.a.createElement(Fe,{loading:t.value,error:a.data.message||"",name:n,logoutCallback:s}):r.a.createElement("div",{style:Object(d.a)({},le,{height:"80vh",color:"orange"})},"Loading..."))},De=function(){return console.log("render NekoPage"),r.a.createElement(Ue,null)},We=function(e){var t=e.loading,a=e.error,n=e.success,o=e.password1,c=e.setPassword1Callback,l=e.password2,u=e.setPassword2Callback,i=e.setNewPass;return console.log("render SetNewPass"),r.a.createElement("div",{style:Object(d.a)({},le,{height:"80vh"})},"SetNewPass",t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):a?r.a.createElement("div",{style:{color:"red"}},a):n?r.a.createElement("div",{style:{color:"lime"}},"Success!"):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("input",{value:o,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement("input",{value:l,onChange:function(e){return u(e.currentTarget.value)}}),r.a.createElement("button",{onClick:i,disabled:t||n},"Set new password"),r.a.createElement(s.b,{to:Ye},"Sign In"))},Ke=["SET_NEW_PASS/LOADING","SET_NEW_PASS/ERROR","SET_NEW_PASS/SUCCESS"],Be=function(e,t){P(e,Ke,t)},$e=function(e,t){T(e,Ke,t)},ze=function(e,t){I(e,Ke,t)},Je=function(e){x(e,Ke)},Ve={setNewPass:function(){var e=Object(D.a)(U.a.mark((function e(t,a){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/auth/set-new-password",{password:t,resetPasswordToken:a});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},qe=function(e,t,a,n){return function(){t?a!==n?$e(e,"No resetPasswordToken!"):Z(a)?e(function(e,t){return function(){var a=Object(D.a)(U.a.mark((function a(n,r){var o;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return Be(n,!0),a.prev=1,a.next=4,Ve.setNewPass(te(e),t);case 4:(o=a.sent).error?$e(n,o.error):(ze(n,!0),console.log("Neko setNewPass Success!",o)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),$e(n,a.t0.response.data.error),console.log("Neko setNewPass Error!",Object(d.a)({},a.t0));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}(a,t)):$e(e,"Password not valid! must be more than 7 characters..."):$e(e,"No resetPasswordToken!")}},He=function(e){var t=L(Ke),a=Object(y.a)(t,3),r=a[0],o=a[1],c=a[2],s=Object(l.b)(),u=function(e){var t=Object(n.useState)("test password nya"),a=Object(y.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)("test password nya"),s=Object(y.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)(!1),d=Object(y.a)(i,2),m=d[0],b=d[1],f=L(["SET_NEW_PASS/ERROR"]),g=Object(y.a)(f,1)[0];return{password1:r,setPassword1Callback:function(t){o(t),g.data.message&&Je(e)},password2:l,setPassword2Callback:function(t){u(t),g.data.message&&Je(e)},redirect:m,setRedirect:b}}(s),i=u.password1,d=u.setPassword1Callback,m=u.password2;return{loading:r,error:o,success:c,dispatch:s,password1:i,setPassword1Callback:d,password2:m,setPassword2Callback:u.setPassword2Callback,redirect:u.redirect,setRedirect:u.setRedirect,setNewPass:qe(s,e,i,m)}},Qe=function(){var e=Object(N.g)().token,t=He(e||""),a=t.loading,n=t.error,o=t.success,c=t.dispatch,s=t.password1,l=t.setPassword1Callback,u=t.password2,i=t.setPassword2Callback,d=t.redirect,m=t.setRedirect,b=t.setNewPass;return o.value&&setTimeout((function(){return m(!0)}),500),d?(setTimeout((function(){return Je(c)}),500),r.a.createElement(N.a,{to:Ye})):(console.log("render SetNewPassContainer"),r.a.createElement(We,{loading:a.value,error:n.data.message||"",success:o.value,password1:s,setPassword1Callback:l,password2:u,setPassword2Callback:i,setNewPass:b}))},Xe=function(){return console.log("render SetNewPassPage"),r.a.createElement(Qe,null)},Ye="/sign-in",Ze="/register",et="/forgot",tt="/neko",at=function(){return r.a.createElement(N.d,null,r.a.createElement(N.b,{exact:!0,path:"/",render:function(){return r.a.createElement(N.a,{to:Ye})}}),r.a.createElement(N.b,{path:Ye,render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(N.b,{path:Ze,render:function(){return r.a.createElement(Re,null)}}),r.a.createElement(N.b,{path:et,render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(N.b,{path:"/set-new-password/:token",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(N.b,{path:"/set-new-password",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(N.b,{path:tt,render:function(){return r.a.createElement(De,null)}}),r.a.createElement(N.b,{render:function(){return r.a.createElement(N.a,{to:Ye})}}))},nt=function(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{style:Object(d.a)({},de)},r.a.createElement("button",{onClick:function(){return o(!a)}},a?"hide dev header":"show dev header"),a&&r.a.createElement(s.b,{to:Ye},"sign-in"),a&&r.a.createElement(s.b,{to:Ze},"register"),a&&r.a.createElement(s.b,{to:et},"forgot"),a&&r.a.createElement(s.b,{to:"/set-new-password"},"set-new-pass"),a&&r.a.createElement(s.b,{to:tt},"neko"))},rt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement(at,null))},ot=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(l.a,{store:R},r.a.createElement(rt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b7b9b4ba.chunk.js.map