(function(){"use strict";var t={5136:function(t,e,i){i(6992),i(8674),i(9601),i(7727);var n=i(144),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-main",{attrs:{id:"VMain"}},[i("router-view")],1)],1)},l=[],a={name:"App",data:function(){return{}}},o=a,s=i(1001),u=i(3453),c=i.n(u),d=i(7524),f=i(7877),v=(0,s.Z)(o,r,l,!1,null,null,null),p=v.exports;c()(v,{VApp:d.Z,VMain:f.Z});var m=i(8345),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FluidFillContainer",{attrs:{id:"Home"}},[t.$vuetify.breakpoint.smAndDown?i("FloatingSquareBtn",{staticStyle:{"z-index":"100","background-color":"rgba(0, 0, 0, 0.4)"},attrs:{size:52,right:0,top:0,elevation:0},on:{click:t.onBtnClick}},[i("v-icon",{attrs:{color:"white"}},[t._v(" mdi-menu ")])],1):i("NavigationAppbar",{attrs:{"scroll-target":"#HomeContent"}}),i("FluidFillContainer",{staticClass:"overflow-y-auto",attrs:{id:"HomeContent"}},[i("HomeTop",{attrs:{id:"HomeTop","next-article-id":"HomeInfomation"}}),i("HomeInfomation",{attrs:{id:"HomeInfomation","next-article-id":"HomeActivity"}}),i("HomeActiviry",{attrs:{id:"HomeActivity","next-article-id":"HomeMember"}}),i("HomeMember",{attrs:{id:"HomeMember"}}),i("GeneralFooter")],1),t.$vuetify.breakpoint.smAndDown?i("HomeMenuOverlay",{attrs:{show:t.overlay}}):t._e()],1)},h=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",t._b({staticClass:"fill-height padding-all-0",class:{"mobile-padding":t.mobilePadding},attrs:{fluid:"",tag:t.tag}},"v-container",t.$attrs,!1),[t._t("default")],2)},y=[],b={props:{tag:{type:String,default:"div"},mobilePadding:{type:Boolean,default:!1}}},x=b,C=i(9846),S=(0,s.Z)(x,_,y,!1,null,"81dc17e6",null),Z=S.exports;c()(S,{VContainer:C.Z});var w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SquareBtn",t._g(t._b({style:t.STYLE,attrs:{size:t.size,absolute:"",elevation:t.elevation}},"SquareBtn",t.$attrs,!1),t.$listeners),[t._t("default")],2)},k=[],q=(i(9653),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-btn",t._g(t._b({attrs:{tile:"","min-width":t.size,"min-height":t.size,width:t.size,height:t.size,elevation:t.elevation}},"v-btn",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),V=[],T={props:{size:{type:Number,default:32},elevation:{type:Number,required:!1,default:null}}},B=T,E=i(4995),A=(0,s.Z)(B,q,V,!1,null,null,null),I=A.exports;c()(A,{VBtn:E.Z});var $={components:{SquareBtn:I},props:{size:{type:Number,default:32},elevation:{type:Number,required:!1,default:4},left:{type:Number,required:!1,default:null},right:{type:Number,required:!1,default:null},top:{type:Number,required:!1,default:null},bottom:{type:Number,required:!1,default:null}},computed:{STYLE:function(){return{left:this.left,right:this.right,top:this.top,bottom:this.bottom}}}},N=$,F=(0,s.Z)(N,w,k,!1,null,"1984fd19",null),H=F.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{dark:"",color:"#e6e6e633",absolute:"","inverted-scroll":"","scroll-target":t.scrollTarget}},[i("v-app-bar-nav-icon"),i("v-toolbar-title",[t._v("Title")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-magnify")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-heart")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-dots-vertical")])],1)],1)},j=[],O={props:{scrollTarget:{type:String,required:!0,default:null}}},M=O,W=i(3343),P=i(5206),L=i(6428),R=i(9762),D=i(7921),Y=(0,s.Z)(M,z,j,!1,null,"2f656857",null),G=Y.exports;c()(Y,{VAppBar:W.Z,VAppBarNavIcon:P.Z,VBtn:E.Z,VIcon:L.Z,VSpacer:R.Z,VToolbarTitle:D.qW});var K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-overlay",{attrs:{color:"#ececec","z-index":0,value:t.overlay}},[i("span",[t._v("Text here")])])},U=[],J={props:{show:{type:Boolean,required:!0,default:!1}},computed:{overlay:{get:function(){return this.show},set:function(t){this.$emit("update:show",t)}}}},Q=J,X=i(1058),tt=(0,s.Z)(Q,K,U,!1,null,"f7e7d994",null),et=tt.exports;c()(tt,{VOverlay:X.Z});var it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FluidFillContainer",{staticClass:"home-top-section lazyload flex-column",attrs:{tag:"article"}},[i("div",{staticClass:"full-width flex-grow-1"},[i("div",{staticClass:"fill-height d-flex align-center justify-center"},[i("TitleTextset",{attrs:{title:"やりこみ","sub-title":"音ゲーサークル",slogan1:"音を楽しむ、",slogan2:"だから本気になる。"}})],1)]),i("div",{staticClass:"full-width flex-grow-0 py-8"},[i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}})],1)])},nt=[],rt=(i(8309),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fill-height title-text-set"},[t.$vuetify.breakpoint.smAndDown?i("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"d-flex align-center justify-end",attrs:{cols:"2","data-aos":"fade-up-right"}},[i("div",{staticClass:"slogan-2 writing-mode-vertical"},[t._v(" "+t._s(t.slogan2)+" ")])]),i("v-col",{staticClass:"d-flex flex-row justify-center align-center",attrs:{cols:"8"}},[i("div",{staticClass:"title-container",attrs:{"data-aos":"flip-left"}},[i("div",{staticClass:"main-title d-flex flex-nowrap justify-center"},t._l(t.title.split(""),(function(e,n){return i("div",{key:n},[t._v(" "+t._s(e)+" ")])})),0),i("div",{staticClass:"sub-title d-flex justify-center"},[i("span",[t._v(t._s(t.subTitle))])])])]),i("v-col",{staticClass:"d-flex align-center justify-start",attrs:{cols:"2","data-aos":"fade-down-left"}},[i("div",{staticClass:"slogan-1 writing-mode-vertical"},[t._v(" "+t._s(t.slogan1)+" ")])])],1):i("div",{staticClass:"fill-height d-flex flex-column justify-center"},[i("div",{staticClass:"top-title d-flex flex-column skew-bg py-12",attrs:{"data-aos":"fade-right"}},[i("div",{staticClass:"top-title-subtitle"},[t._v(" "+t._s(t.subTitle)+" ")]),i("div",{staticClass:"top-title-title mt-n16 d-flex"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"top-title-annotation align-center ml-6"},[t._v(" "+t._s(t.slogan1)+t._s(t.slogan2)+" ")])])])],1)}),lt=[],at={props:{title:{type:String,required:!0,default:null},subTitle:{type:String,required:!1,default:null},slogan1:{type:String,required:!1,default:null},slogan2:{type:String,required:!1,default:null}}},ot=at,st=i(2102),ut=i(2877),ct=(0,s.Z)(ot,rt,lt,!1,null,"72e8b858",null),dt=ct.exports;c()(ct,{VCol:st.Z,VRow:ut.Z});var ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-btn",{staticClass:"hidden-on-landscape",class:{"x-center":t.xCenter,"y-center":t.yCenter},style:t.STYLE,attrs:{absolute:t.absolute&&!t.fixed,fixed:!t.absolute&&t.fixed,fab:t.fab,dark:t.dark,width:t._width,height:t._height,color:t.color},on:{click:t.onClick}},[t.icon?i("v-icon",[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._t("default")],2)},vt=[],pt={props:{idTo:{type:String,required:!0,default:null},idContianer:{type:String,required:!0,default:null},icon:{type:String,required:!1,default:null},absolute:{type:Boolean,required:!1,default:!0},fixed:{type:Boolean,required:!1,default:!1},fab:{type:Boolean,required:!1,default:!0},dark:{type:Boolean,required:!1,default:!1},size:{type:[String,Number],required:!1,default:50},width:{type:[String,Number],required:!1,default:null},height:{type:[String,Number],required:!1,default:null},color:{type:String,required:!1,default:null},left:{type:[String,Number],required:!1,default:null},right:{type:[String,Number],required:!1,default:null},top:{type:[String,Number],required:!1,default:null},bottom:{type:[String,Number],required:!1,default:null},xCenter:{type:Boolean,required:!1,default:!1},yCenter:{type:Boolean,required:!1,default:!1}},computed:{STYLE:function(){var t=isNaN(this.left)?this.left:this.left+"px",e=isNaN(this.right)?this.right:this.right+"px",i=isNaN(this.top)?this.top:this.top+"px",n=isNaN(this.bottom)?this.bottom:this.bottom+"px";return{left:t,right:e,top:i,bottom:n}},_width:function(){return this.size?this.size:this.width},_height:function(){return this.size?this.size:this.height}},methods:{onClick:function(){var t=document.getElementById(this.idTo),e=document.getElementById(this.idContianer);this.$smoothScroll({scrollTo:t,container:e})}}},mt=pt,gt=(0,s.Z)(mt,ft,vt,!1,null,null,null),ht=gt.exports;c()(gt,{VBtn:E.Z,VIcon:L.Z});var _t={components:{FluidFillContainer:Z,TitleTextset:dt,SmoothScrollBtn:ht},props:{nextArticleId:{type:String,required:!1,default:null}},data:function(){return{env:{NODE_ENV:"production",BASE_URL:"/yarikomi-page/"}}},mounted:function(){console.log(this.env),console.log(this.$route.path),console.log(this.$route.name)}},yt=_t,bt=(0,s.Z)(yt,it,nt,!1,null,"7b3af53e",null),xt=bt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{staticClass:"home-information pt-16",attrs:{tag:"article"}},[i("div",{staticClass:"mt-8 d-flex flex-column"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-spacer"),i("v-col",[i("div",{staticClass:"d-flex flex-column align-start"},[i("div",{staticClass:"info-title mb-4"},[i("h3",[t._v("音ゲーサークル「やりこみ」とは")])]),i("div",{staticClass:"info-area d-flex flex-column align-start pa-4"},[i("div",{staticClass:"info-text mb-4"},[i("span",[t._v("株式会社こだわりの"),i("b",[t._v('"音ゲー"好き')]),t._v("が集まる場所")])]),i("div",{staticClass:"info-text mb-4"},[i("span",[t._v("「交流」と「成長」を目的とし、楽しみながら音ゲーを「やりこむ」サークルです。")]),i("ul",[i("li",[i("b",[t._v("音ゲー")]),t._v("に興味がある方")]),i("li",[t._v("普段"),i("b",[t._v("カジュアル")]),t._v("にプレイしている方")]),i("li",[t._v("引かれるくらい"),i("b",[t._v("やりこんでいる")]),t._v("方")])]),i("span",[t._v("どんなスタイルでも楽しめる活動を目指しています！")])]),i("div",{staticClass:"info-text mb-4"},[i("span",[i("b",[t._v("サークルメンバー絶賛")]),t._v("募集中！")]),i("span",[t._v("興味のある方は、"),i("b",[t._v("代表まで")]),t._v("ご連絡ください！")])])])])]),i("v-spacer")],1),i("div",{staticClass:"py-4"},[i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}})],1)],1)])},St=[],Zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",t._b({staticClass:"full-width padding-all-0",class:{"mobile-padding":t.mobilePadding},attrs:{fluid:"",tag:t.tag}},"v-container",t.$attrs,!1),[t._t("default")],2)},wt=[],kt={props:{tag:{type:String,required:!1,default:"div"},mobilePadding:{type:Boolean,required:!1,default:!1}}},qt=kt,Vt=(0,s.Z)(qt,Zt,wt,!1,null,"5c1c645c",null),Tt=Vt.exports;c()(Vt,{VContainer:C.Z});var Bt={components:{FullWidthContainer:Tt,SmoothScrollBtn:ht},props:{nextArticleId:{type:String,required:!1,default:null}}},Et=Bt,At=(0,s.Z)(Et,Ct,St,!1,null,"4b8564c2",null),It=At.exports;c()(At,{VCol:st.Z,VRow:ut.Z,VSpacer:R.Z});var $t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{staticClass:"home-activity pt-16",attrs:{tag:"article"}},[i("div",{staticClass:"mt-8 d-flex flex-column"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-spacer"),i("v-col",{attrs:{cols:"10",lg:"5"}},[i("div",{staticClass:"d-flex flex-column align-start"},[i("div",{staticClass:"activity-title mb-4 px-16"},[i("h3",[t._v("Activity")])]),i("v-carousel",{staticClass:"activity-carousel",attrs:{cycle:"","hide-delimiter-background":"","delimiter-icon":"mdi-minus"}},[t._l(t.contents,(function(t,e){return[i("TitleImageCarouselItem",{key:e,attrs:{title:t.title,"img-src":t.src}})]}))],2)],1)]),i("v-spacer")],1),i("div",{staticClass:"py-4"},[t.nextArticleId?i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}}):t._e()],1)],1)])},Nt=[],Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-carousel-item",[i("v-sheet",{attrs:{height:"100%",tile:""}},[i("div",{staticClass:"bg-image pa-3",style:t.STYLES,attrs:{justify:"center"}},[t.title?i("div",{staticClass:"carousel-title py-2 px-10"},[i("span",[t._v(t._s(t.title))])]):t._e()])])],1)},Ht=[],zt={props:{title:{type:String,required:!1,default:null},imgSrc:{type:String,required:!1,default:null}},computed:{STYLES:function(){var t="url("+this.imgSrc+")";return{backgroundImage:t}}}},jt=zt,Ot=i(8598),Mt=i(5477),Wt=(0,s.Z)(jt,Ft,Ht,!1,null,"a3833ae8",null),Pt=Wt.exports;c()(Wt,{VCarouselItem:Ot.Z,VSheet:Mt.Z});var Lt={components:{FullWidthContainer:Tt,SmoothScrollBtn:ht,TitleImageCarouselItem:Pt},props:{nextArticleId:{type:String,required:!1,default:null}},data:function(){return{contents:[{title:"オフライン交流会",src:"/img/immigrant.jpg"},{title:"チャット",src:"/img/slack_zatsudan.png"},{title:"オフライン大会",src:"/img/slack_ss_mosaic.png"}]}}},Rt=Lt,Dt=i(2628),Yt=(0,s.Z)(Rt,$t,Nt,!1,null,"42ae7f03",null),Gt=Yt.exports;c()(Yt,{VCarousel:Dt.Z,VCol:st.Z,VRow:ut.Z,VSpacer:R.Z});var Kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{staticClass:"home-activity pt-16",attrs:{tag:"article"}},[i("div",{staticClass:"mt-8 d-flex flex-column"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-spacer"),i("v-col",{attrs:{cols:"10",lg:"5"}},[i("div",{staticClass:"d-flex flex-column align-start"},[i("div",{staticClass:"info-title mb-4 px-16"},[i("h3",[t._v("Member")])]),i("v-carousel",{attrs:{cycle:"","hide-delimiter-background":"","delimiter-icon":"mdi-minus"}},[t._l(t.contents,(function(t,e){return[i("TitleImageCarouselItem",{key:e,attrs:{title:t.title,"img-src":t.src}})]}))],2)],1)]),i("v-spacer")],1),i("div",{staticClass:"py-4"},[t.nextArticleId?i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}}):t._e()],1)],1)])},Ut=[],Jt={components:{FullWidthContainer:Tt,SmoothScrollBtn:ht,TitleImageCarouselItem:Pt},props:{nextArticleId:{type:String,required:!1,default:null}},data:function(){return{contents:[{title:"オフライン交流会",src:"/img/immigrant.jpg"},{title:"チャット",src:"/img/slack_zatsudan.png"},{title:"オフライン大会",src:"/img/slack_ss_mosaic.png"}]}}},Qt=Jt,Xt=(0,s.Z)(Qt,Kt,Ut,!1,null,"f3389f66",null),te=Xt.exports;c()(Xt,{VCarousel:Dt.Z,VCol:st.Z,VRow:ut.Z,VSpacer:R.Z});var ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{attrs:{id:"Footer"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"4"}},[i("h2",[t._v("やりこみ")])]),i("v-divider",{attrs:{vertical:"",dark:""}}),i("v-spacer"),i("v-col",{attrs:{cols:"6"}})],1),i("v-row",[i("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"6"}},[i("div",{staticClass:"footer-address"},[i("p",[t._v("株式会社こだわり")]),i("v-divider"),i("p",[t._v("東京都品川区上大崎2-24-11 5F")])],1)]),i("v-spacer"),i("v-col",{staticClass:"d-flex flex-column justify-end",attrs:{cols:"6"}},[i("div",{staticClass:"d-flex justify-end"},[i("span",[t._v("🄫 KODAWARI.inc allright reserved")])])])],1)],1)],1)},ie=[],ne={components:{FullWidthContainer:Tt}},re=ne,le=i(1418),ae=(0,s.Z)(re,ee,ie,!1,null,"686eb984",null),oe=ae.exports;c()(ae,{VCol:st.Z,VContainer:C.Z,VDivider:le.Z,VRow:ut.Z,VSpacer:R.Z});var se={components:{FluidFillContainer:Z,FloatingSquareBtn:H,NavigationAppbar:G,HomeMenuOverlay:et,HomeTop:xt,HomeInfomation:It,HomeActiviry:Gt,GeneralFooter:oe,HomeMember:te},data:function(){return{overlay:!1}},methods:{onBtnClick:function(){this.overlay=!this.overlay}}},ue=se,ce=(0,s.Z)(ue,g,h,!1,null,"80f98096",null),de=ce.exports;c()(ce,{VIcon:L.Z}),n.Z.use(m.Z);var fe=[{path:"/",name:"home",component:de}],ve=new m.Z({routes:fe}),pe=ve,me=i(6513);n.Z.use(me.Z);var ge=new me.Z({}),he=i(4585),_e=i.n(he),ye=i(12),be=i(2711),xe=i.n(be),Ce=i(6498),Se=i(7090),Ze=i.n(Se),we=i(9785),ke=i.n(we),qe=i(2751),Ve=i(6133),Te=(0,qe.Z)((function t(){(0,Ve.Z)(this,t)})),Be=new Te;n.Z.prototype.$api=Be,n.Z.config.productionTip=!1;var Ee={duration:800,offset:0,updateHistory:!1,easingFunction:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}};n.Z.use(_e(),Ee),new n.Z({router:pe,vuetify:ge,animate:ye.Z,aos_css:Ce.Z,lazysizes:Ze(),unveilhooks:ke(),mounted:function(){xe().init({offset:120,delay:100,duration:500,easing:"ease-out-cubic",once:!0})},render:function(t){return t(p)}}).$mount("#app")}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var l=e[n]={exports:{}};return t[n].call(l.exports,l,l.exports,i),l.exports}i.m=t,function(){var t=[];i.O=function(e,n,r,l){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],l=t[c][2];for(var o=!0,s=0;s<n.length;s++)(!1&l||a>=l)&&Object.keys(i.O).every((function(t){return i.O[t](n[s])}))?n.splice(s--,1):(o=!1,l<a&&(a=l));if(o){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[n,r,l]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,l,a=n[0],o=n[1],s=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(s)var c=s(i)}for(e&&e(n);u<a.length;u++)l=a[u],i.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return i.O(c)},n=self["webpackChunkyarikomi_page"]=self["webpackChunkyarikomi_page"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(5136)}));n=i.O(n)})();
//# sourceMappingURL=app-legacy.5045716c.js.map