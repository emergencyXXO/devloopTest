(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports={header:"style_header__3lJex",logo:"style_logo__5V5bi",line:"style_line__1yCZR",login:"style_login__2Tk6B",logout:"style_logout__3CAJz",admin_block:"style_admin_block__2AKXI"}},31:function(e,t,a){e.exports={main__page:"style_main__page__25vq1"}},32:function(e,t,a){e.exports={loader_bg:"style_loader_bg__nOQIC",loader:"style_loader__rI93m"}},44:function(e,t,a){e.exports={login__block:"style_login__block__QcXUA",formControl:"style_formControl__2WJzG",error:"style_error__iK5vR"}},50:function(e,t,a){e.exports=a(79)},55:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),i=a(21),l=a(22),u=a(25),s=a(23),m=a(26),g=(a(55),a(12)),p=a(15),_=a.n(p),h=a(24),O=a.n(h),f=a(8),E=a(9),b=a.n(E),d=a(13),T=a(6),y=a(43),v={params:{"access-token":"q4TogSNtq56u_RergrgFCy_SMlwY-yiCV8_I"}},N=y.create({baseURL:"https://gorest.co.in/public-api"}),A=function(e){return N.get("/photos?page=".concat(e),v)},C={PhotoData:[],_meta:{pageCount:0,TotalUserCount:0,currentPage:1},isFetching:!1},S=function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PHOTO":return Object(T.a)({},e,{PhotoData:e.PhotoData.concat(t.photo)});case"SET_INITIAL_PHOTO ":return Object(T.a)({},e,{PhotoData:[]});case"SET_META_DATA":return Object(T.a)({},e,{_meta:t.metaData});case"TOGGLE_FETCHING":return Object(T.a)({},e,{isFetching:t.isFetching});default:return e}},k={loginData:{firstName:"",lastName:"",avatarUrl:""},isAuth:!1,loginType:!1},D=function(e){return{type:"SET_DATA_FROM_STORE",authData:e}},w=function(e){return{type:"SET_AUTH",turn:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH":return Object(T.a)({},e,{isAuth:t.turn});case"LOGIN_TYPE_GOOGLE":return Object(T.a)({},e,{loginType:"GOOGLE"});case"LOGIN_TYPE_FACEBOOK":return Object(T.a)({},e,{loginType:"FACEBOOK"});case"GOOGLE_ACCESS":return Object(T.a)({},e,{loginData:{firstName:t.userData.profileObj.givenName,lastName:t.userData.profileObj.familyName,avatarUrl:t.userData.profileObj.imageUrl}});case"FACEBOOK_ACCESS":return Object(T.a)({},e,{loginData:{familyName:t.userDataFB.name.split(" ")[1],givenName:t.userDataFB.name.split(" ")[0],imageUrl:t.userDataFB.picture.data.url}});case"SET_DATA_FROM_STORE":return Object(T.a)({},e,{loginData:{firstName:t.authData.givenName,lastName:t.authData.familyName,avatarUrl:t.authData.imageUrl},isAuth:!0,loginType:t.authData.loginType});default:return e}};var G=Object(f.b)(function(e){return{firstName:e.AuthPage.loginData.firstName,avatarUrl:e.AuthPage.loginData.avatarUrl,isAuth:e.AuthPage.isAuth,loginType:e.AuthPage.loginType}},{logoutThunkCreator:function(){return function(){var e=Object(d.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t(w(!1)),localStorage.clear();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"line ".concat(_.a.line)},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:_.a.logo,style:{backgroundImage:"url(https://www.freeiconspng.com/uploads/flame-logo-png-30.png)"}}),r.a.createElement("p",{className:_.a.header},"DevloopTest")),r.a.createElement("div",{className:"right"},e.isAuth?r.a.createElement("div",{className:_.a.admin_block},r.a.createElement("p",{className:_.a.login},r.a.createElement("img",{src:e.avatarUrl}),r.a.createElement("span",null,e.firstName)),"GOOGLE"===e.loginType?r.a.createElement(h.GoogleLogout,{clientId:"348224920183-816oinrvdk17mtt1rm1np501gca70gvc.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){e.logoutThunkCreator()}}):"FACEBOOK"===e.loginType?r.a.createElement("button",{onClick:function(){e.logoutThunkCreator()}},"Logout"):null):null))))}),I=a(44),F=a.n(I),L=a(45),U=a.n(L),x=Object(f.b)(function(e){return{isAuth:e.AuthPage.isAuth}},{loginwithGoogleThunkCreator:function(e){return function(){var t=Object(d.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GOOGLE_ACCESS",userData:e}),a({type:"LOGIN_TYPE_GOOGLE"}),a({type:"SET_INITIAL_PHOTO "}),t.next=5,localStorage.setItem("User",JSON.stringify({isAuth:!0,familyName:e.profileObj.familyName,givenName:e.profileObj.givenName,imageUrl:e.profileObj.imageUrl,loginType:"GOOGLE"}));case 5:a(w(!0));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},loginwithFacebookThunkCreator:function(e){return function(){var t=Object(d.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FACEBOOK_ACCESS",userDataFB:e}),a({type:"LOGIN_TYPE_FACEBOOK"}),a({type:"SET_INITIAL_PHOTO "}),t.next=5,localStorage.setItem("User",JSON.stringify({isAuth:!0,familyName:e.name.split(" ")[1],givenName:e.name.split(" ")[0],imageUrl:e.picture.data.url,loginType:"FACEBOOK"}));case 5:a(w(!0));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(function(e){return e.isAuth?r.a.createElement(g.a,{to:"/"}):r.a.createElement("div",{className:F.a.login__block},r.a.createElement(U.a,{appId:"2679541375437548",fields:"name,email,picture",callback:function(t){e.loginwithFacebookThunkCreator(t)}}),r.a.createElement(O.a,{clientId:"348224920183-816oinrvdk17mtt1rm1np501gca70gvc.apps.googleusercontent.com",buttonText:"LOGIN WITH GOOGLE",onSuccess:function(t){e.loginwithGoogleThunkCreator(t)},onFailure:function(e){alert(e)}}))}),B=a(31),M=a.n(B),H=a(11),J=a(32),K=a.n(J),R=function(){return r.a.createElement("div",{className:K.a.loader_bg},r.a.createElement("img",{className:K.a.loader,src:"https://thumbs.gfycat.com/GlassFilthyIsabellinewheatear-small.gif",alt:"preloader"}))},W=Object(H.c)(Object(f.b)(function(e){return{_meta:e.MainPage._meta,PhotoData:e.MainPage.PhotoData,isFetching:e.MainPage.isFetching}},{getPhotoThunkCreator:function(e){return function(){var t=Object(d.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(S(!0)),t.next=3,A(e);case 3:200===(n=t.sent).status&&(a({type:"SET_PHOTO",photo:n.data.result}),a({type:"SET_META_DATA",metaData:n.data._meta}),a(S(!1)));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),function(e){var t=function(t){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(l.a)(a,[{key:"componentWillMount",value:function(){if(null!==JSON.parse(localStorage.getItem("User"))){var e=JSON.parse(localStorage.getItem("User"));this.props.setDataFromStore(e)}}},{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(g.a,{to:"/login"})}}]),a}(r.a.PureComponent);return Object(f.b)(function(e){return{isAuth:e.AuthPage.isAuth}},{isAuthAC:w,setDataFromStore:D})(t)})(function(e){return Object(n.useEffect)(function(){e.getPhotoThunkCreator(e._meta.currentPage)},[]),r.a.createElement("div",{className:"".concat(M.a.main__page)},e.isFetching?r.a.createElement(R,null):null,e.PhotoData.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:e.url,alt:""}),r.a.createElement("p",null,e.title))}),r.a.createElement("button",{onClick:function(){e.getPhotoThunkCreator(e._meta.currentPage+1)},className:M.a.show_more},"Show more"))}),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App "},r.a.createElement(G,null),r.a.createElement("div",{className:"main__part container"},r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(g.b,{path:"/",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(49),q=a(47),V=a(48),z=Object(X.a)({AuthPage:P,MainPage:j}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.c,Z=Object(H.d)(z,Q(Object(H.a)(q.a,V.logger)));window.store=Z;var $=Z,ee=a(16);c.a.render(r.a.createElement(ee.a,{basename:"/devloopTest"},r.a.createElement(f.a,{store:$},r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.c7417129.chunk.js.map