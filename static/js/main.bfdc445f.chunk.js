(this["webpackJsonpreact-kabzda"]=this["webpackJsonpreact-kabzda"]||[]).push([[0],{100:function(e,t,n){},12:function(e,t,n){e.exports={top:"ProfileInfo_top__33bQL",status:"ProfileInfo_status__1BLp5",block:"ProfileInfo_block__33-Pa",button:"ProfileInfo_button__uPUTP",rowForm:"ProfileInfo_rowForm__1ainC",label:"ProfileInfo_label__2tkbB",wrapperSocialIcon:"ProfileInfo_wrapperSocialIcon__1XKLQ",itemContact:"ProfileInfo_itemContact__3Il8J"}},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(3),a=n(93),c=n(16),s=n.n(c),i=n(92),o=n(0),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[a,c&&Object(o.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{className:s.a.line,children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},c)),Object(o.jsx)("div",{className:s.a.label,children:u})]})}},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(43),a=n(3),c=n(72),s="SEND-MESSAGE",i={usersData:[{name:"Sasha",id:"1"},{name:"Andrew",id:"2"},{name:"Vova",id:"3"},{name:"Alesya",id:"4"},{name:"Yulya",id:"5"}],messagesData:[{message:"How are you?",id:"1"},{message:"Hi",id:"2"},{message:"Yo",id:"3"},{message:"Good!",id:"4"},{message:"No",id:"5"}]},o=function(e){return{type:"SEND-MESSAGE",newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={message:t.newMessage,id:Object(c.a)()};return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[n])});default:return e}}},134:function(e,t,n){"use strict";n.d(t,"e",(function(){return E})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return I})),n.d(t,"b",(function(){return P})),n.d(t,"f",(function(){return A}));var r=n(7),a=n.n(r),c=n(15),s=n(43),i=n(3),o=n(14),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),{},{newObjectProps:r}):e}))},l="FOLLOW",j="UNFOLLOW",d="SET_USERS",b="SET_CURRENT_PAGE",f="SET_TOTAL_USERS_COUNT",h="TOGGLE_IS_FETCHING",p="TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:4,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},m=function(e){return{type:"FOLLOW",userId:e}},v=function(e){return{type:"UNFOLLOW",userId:e}},x=function(e){return{type:"SET_USERS",users:e}},g=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},S=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},C=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(C(!0)),r(g(e)),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,r(C(!1)),r(x(c.items)),r(S(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},I=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(C(!0)),r(g(e)),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,r(C(!1)),r(x(c.items)),r(S(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),P=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(n,e,o.d.getUnfollow.bind(o.d),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(n,e,o.d.getFollow.bind(o.d),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case j:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case b:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case f:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case h:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case p:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},137:function(e,t,n){e.exports={item:"Post_item__gOQ93"}},139:function(e,t,n){e.exports={loading:"Preloader_loading__SBWqI"}},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(135),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"537d18dc-fbc2-4c68-99cb-a3a679f47830"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFollow:function(e){return a.post("follow/".concat(e))},getUnfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},140:function(e,t,n){e.exports={title:"Login_title__1gFu9"}},16:function(e,t,n){e.exports={formControl:"FormsControls_formControl__17Oui",error:"FormsControls_error__2ILzO",line:"FormsControls_line__22gKS",formSummaryError:"FormsControls_formSummaryError__2cdp1",label:"FormsControls_label__15mZY",button:"FormsControls_button__XU2fo",captcha:"FormsControls_captcha__2CnQQ"}},171:function(e,t,n){},19:function(e,t,n){e.exports={sidebar:"NavBar_sidebar__1Qkzw",nav:"NavBar_nav__3tgry",item:"NavBar_item__1g8nN",active:"NavBar_active__dRhkT"}},294:function(e,t,n){},295:function(e,t,n){e.exports={music:"Music_music__19Lqm"}},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=(n(100),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,302)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),s=n(68),i=n.n(s),o=n(20),u=n(21),l=n(23),j=n(22),d=(n(171),n(19)),b=n.n(d),f=n(29),h=n(0),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("aside",{className:b.a.sidebar,children:Object(h.jsx)("nav",{className:b.a.nav,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/profile",className:b.a.item,activeClassName:b.a.active,children:"Profile"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/dialogs",exact:!0,className:b.a.item,activeClassName:b.a.active,children:"Messages"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/users",className:b.a.item,activeClassName:b.a.active,children:"Users"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/news",className:b.a.item,activeClassName:b.a.active,children:"News"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/music",className:b.a.item,activeClassName:b.a.active,children:"Music"})}),Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:"/setting",className:b.a.item,activeClassName:b.a.active,children:"Setting"})})]})})})}}]),n}(r.Component),O=n(3),m=n(7),v=n.n(m),x=n(15),g=n(43),S=n(14),C=n(33),E=n(72),w="ADD-POST",I="DELETE-POST",k="SET_USER_PROFILE",P="SET_STATUS",A="SAVE_PHOTO_SUCCESS",y={postsData:[{post:"It is my first post",id:1},{post:"Hi",id:"2"},{post:"Yo",id:"30"},{post:"Good!",id:"4"},{post:"No",id:"5"}],profile:null,status:"-----"},N=function(e){return{type:"SET_STATUS",status:e}},F=function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.d.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n={post:t.newPostText,id:Object(E.a)()};return Object(O.a)(Object(O.a)({},e),{},{postsData:[].concat(Object(g.a)(e.postsData),[n])});case I:return Object(O.a)(Object(O.a)({},e),{},{postsData:Object(g.a)(e.postsData.filter((function(e){return e.id!==t.postId})))});case k:return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});case P:return Object(O.a)(Object(O.a)({},e),{},{status:t.status});case A:return Object(O.a)(Object(O.a)({},e),{},{profile:Object(O.a)(Object(O.a)({},e.profile),{},{photos:t.photos})});default:return e}},U=n(18),_=n(59),M=n.n(_),L=n(16),J=n.n(L),R=n(137),Q=n.n(R);function Y(e){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:Q.a.item,children:e.post},e.id)})}var D=n(92),G=n(132),H=n(38),z=n(13),q=Object(H.b)(10),W=Object(G.a)({form:"profileAddNewPostForm"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)(D.a,{name:"newPostText",component:z.b,className:M.a.formControl,validate:[H.c,q]}),Object(h.jsx)("button",{className:J.a.button,children:"Add Post"})]})})),B=function(e){var t=e.profilePage.postsData.map((function(e){return Object(h.jsx)(Y,{id:e.id,post:e.post},e.id)}));return Object(h.jsxs)("div",{className:M.a.post,children:[Object(h.jsx)("h3",{className:M.a.title,children:"My posts"}),Object(h.jsx)(W,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(h.jsx)("div",{className:M.a.postWrapper,children:t})]})},V=Object(U.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(B),K=n(49),X=n(12),Z=n.n(X),$=n(91),ee=n(99),te=function(e){var t=Object(r.useState)(!1),n=Object(K.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(e.status),i=Object(K.a)(s,2),o=i[0],u=i[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(h.jsxs)("div",{className:Z.a.status,children:[!a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Status:"})," ",Object(h.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"set status"})]}),a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Status:"})," ",Object(h.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(o)},value:o})]})]})},ne=Object(G.a)({form:"edit-profile"})((function(e){return console.log(e.error),console.log(e.profile),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsxs)("div",{className:Z.a.rowForm,children:[Object(h.jsx)("div",{className:Z.a.label,children:"Full name:"}),Object(z.c)("Full name","fullName",z.a,[])]}),Object(h.jsxs)("div",{className:Z.a.rowForm,children:[Object(h.jsx)("div",{className:Z.a.label,children:"Looking for a job:"}),Object(z.c)(null,"lookingForAJob",z.a,[],{type:"checkbox"})]}),Object(h.jsxs)("div",{className:Z.a.rowForm,children:[Object(h.jsx)("div",{className:Z.a.label,children:"My professional skills:"}),Object(z.c)("My professional skills","lookingForAJobDescription",z.b,[])]}),Object(h.jsxs)("div",{className:Z.a.rowForm,children:[Object(h.jsx)("div",{className:Z.a.label,children:"About me:"}),Object(z.c)("About me","aboutMe",z.b,[])]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:Z.a.block,children:Object(h.jsx)("b",{children:"Contacts :"})}),Object.keys(e.profile.contacts).map((function(e){return Object(h.jsxs)("div",{className:Z.a.rowForm,children:[Object(h.jsxs)("div",{className:Z.a.label,children:[e,":"]}),Object(z.c)(e,"contacts."+e,z.a,[])]},e)}))]}),e.error&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:J.a.formSummaryError,children:e.error})}),Object(h.jsx)("button",{className:J.a.button,children:"Save"})]})})})),re=function(e){var t=Object(r.useState)(!1),n=Object(K.a)(t,2),a=n[0],c=n[1];if(!e.profile)return Object(h.jsx)($.a,{});return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:Z.a.top,children:Object(h.jsx)("img",{className:Z.a.user,src:e.profile.photos.large||ee.a,alt:""})}),Object(h.jsx)("div",{children:e.isOwner&&Object(h.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})}),e.isOwner&&Object(h.jsx)(te,{status:e.status,updateStatus:e.updateStatus}),a?Object(h.jsx)(ne,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){c(!1)}))}}):Object(h.jsx)(ae,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){c(!0)}}),Object(h.jsx)("div",{className:Z.a.block,children:e.profile.userId})]})},ae=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:Z.a.block,children:[Object(h.jsx)("b",{children:"Full name: "}),t.fullName]}),Object(h.jsxs)("div",{className:Z.a.block,children:[Object(h.jsx)("b",{children:"Looking for a job: "}),t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&Object(h.jsxs)("div",{className:Z.a.block,children:[Object(h.jsx)("b",{children:"My professional skills: "}),t.lookingForAJobDescription]}),Object(h.jsxs)("div",{className:Z.a.block,children:[Object(h.jsx)("b",{children:"About me: "}),t.aboutMe]}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:Z.a.block,children:[Object(h.jsx)("b",{children:"Contacts :"}),Object.entries(t.contacts).map((function(e){var t=Object(K.a)(e,2),n=t[0],r=t[1];return!!r&&Object(h.jsx)(ce,{contactTitle:n,contactValue:r},n)}))]})}),n&&Object(h.jsx)("button",{className:J.a.button,onClick:r,children:"Edit"})]})},ce=function(e){var t=e.contactTitle,n=e.contactValue;return Object(h.jsx)("a",{className:Z.a.itemContact,href:n,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"icon-".concat(t,".svg"),alt:t})})},se=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(re,{isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(h.jsx)(V,{})]})},ie=n(10),oe=n(11),ue=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfileThunk(e),this.props.getStatusThunk(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(se,Object(O.a)(Object(O.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status||"--",updateStatus:this.props.updateStatusThunk,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(a.a.Component),le=Object(oe.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfileThunk:F,getStatusThunk:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.b.getStatus(e);case 2:r=t.sent,n(N(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusThunk:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(N(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n,r){var a,c,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,S.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(F(a)),t.next=11;break;case 8:return s=c.data.messages.length>0?c.data.messages[0]:"Some error",n(Object(C.a)("edit-profile",{_error:s})),t.abrupt("return",Promise.reject(s));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),ie.g)(ue),je=(n(294),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"News"})}}]),n}(r.Component)),de=(n(295),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"s.music",children:"Music"})}}]),n}(r.Component)),be=(n(296),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"Setting"})}}]),n}(r.Component)),fe=n(140),he=n.n(fe),pe="SET_USER_DATA",Oe="GET_CAPTCHA_URL_SUCCESS",me={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ve=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},xe=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,c,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(ve(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.c.getCaptchaUrl();case 2:n=e.sent,t({type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:n.data.url}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:case Oe:return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},Ce=Object(G.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(z.c)("Email","email",z.a,[H.c,H.a]),Object(z.c)("Password","password",z.a,[H.c],{type:"password"}),Object(z.c)(null,"rememberMe",z.a,[],{type:"checkbox"},"remember me"),Object(h.jsxs)("div",{className:J.a.captcha,children:[r&&Object(h.jsx)("img",{src:r,alt:""}),r&&Object(z.c)("captcha","captcha",z.a,[H.c],{})]}),n&&Object(h.jsx)("div",{className:J.a.formSummaryError,children:n}),Object(h.jsx)("button",{className:J.a.button,children:"Login"})]})})),Ee=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(x.a)(v.a.mark((function a(c){var s,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(xe()):(10===s.data.resultCode&&c(ge()),i=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(C.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(h.jsx)(ie.a,{to:"/profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:he.a.title,children:"Sign in to React Social Network"}),Object(h.jsx)(Ce,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),we=n.p+"static/media/logo.6ce24c58.svg",Ie=n(39),ke=n.n(Ie),Pe=function(e){return Object(h.jsxs)("header",{className:ke.a.header,children:[Object(h.jsx)("img",{src:we,className:ke.a.logo,alt:"logo"}),Object(h.jsx)("div",{className:ke.a.loginBlock,children:e.isAuth?Object(h.jsxs)("div",{children:[e.login,Object(h.jsx)("button",{onClick:e.logout,className:ke.a.btn+" "+ke.a.logout,children:"Log Out"})]}):Object(h.jsx)(f.b,{to:"/login",children:Object(h.jsx)("button",{className:ke.a.btn+" "+ke.a.signin,children:"Sign in"})})})]})},Ae=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(h.jsx)(Pe,Object(O.a)({},this.props))}}]),n}(a.a.Component),ye=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(ve(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ae),Ne="INITIALIZED_SUCCESS",Fe={initialized:!1,globalError:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return{initialized:!1};default:return e}},Ue=n(131),_e=n(134),Me=n(141),Le=n(133),Je=Object(oe.c)({profilePage:T,dialogsPage:Ue.a,usersPage:_e.a,auth:Se,form:Le.a,app:Te}),Re=Object(oe.e)(Je,Object(oe.a)(Me.a));window.store=Re;var Qe=Re,Ye=a.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),De=a.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),Ge=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){console.log(e)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(ye,{}),Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"wrapper-content",children:Object(h.jsxs)(ie.d,{children:[Object(h.jsx)(ie.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(ie.a,{to:"/profile"})}}),Object(h.jsx)(ie.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(le,{})}}),Object(h.jsx)(ie.b,{path:"/dialogs",render:function(){return Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(h.jsx)(Ye,{})})}}),Object(h.jsx)(ie.b,{path:"/users",render:function(){return Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(h.jsx)(De,{})})}}),Object(h.jsx)(ie.b,{path:"/news",render:function(){return Object(h.jsx)(je,{})}}),Object(h.jsx)(ie.b,{path:"/music",render:function(){return Object(h.jsx)(de,{})}}),Object(h.jsx)(ie.b,{path:"/setting",render:function(){return Object(h.jsx)(be,{})}}),Object(h.jsx)(ie.b,{path:"/login",render:function(){return Object(h.jsx)(Ee,{})}}),Object(h.jsx)(ie.b,{path:"*",render:function(){return Object(h.jsx)("div",{className:"page404",children:"404 NOT FOUND"})}})]})})]})}}]),n}(a.a.Component),He=Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(xe()).then((function(){e({type:Ne})}))}}})(Ge),ze=function(e){return Object(h.jsx)(f.a,{children:Object(h.jsx)(U.a,{store:Qe,children:Object(h.jsx)(He,{})})})};i.a.render(Object(h.jsx)(ze,{}),document.getElementById("root")),c()},38:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},c=function(e){if(e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return"Invalid email address"}},39:function(e,t,n){e.exports={header:"Header_header__2rzH4",logo:"Header_logo__2qjd2",loginBlock:"Header_loginBlock__3FI1_",btn:"Header_btn__195Dg",logout:"Header_logout__1otg4","App-logo-spin":"Header_App-logo-spin__1gU3f"}},59:function(e,t,n){e.exports={title:"MyPosts_title__2I5wk",textarea:"MyPosts_textarea__1rxzM",button:"MyPosts_button__1G0WB",postWrapper:"MyPosts_postWrapper__2mHJV"}},91:function(e,t,n){"use strict";n(1);var r=n(139),a=n.n(r),c=n(0);t.a=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:a.a.loading,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})}},99:function(e,t,n){"use strict";t.a="data:image/png;base64,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"}},[[297,1,2]]]);
//# sourceMappingURL=main.bfdc445f.chunk.js.map