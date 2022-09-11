(function(){"use strict";var t={5977:function(t,e,i){var l=i(144),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-main",{attrs:{id:"VMain"}},[i("router-view")],1)],1)},n=[],a={name:"App",data:()=>({})},o=a,s=i(1001),c=i(3453),u=i.n(c),d=i(7524),f=i(7877),v=(0,s.Z)(o,r,n,!1,null,null,null),p=v.exports;u()(v,{VApp:d.Z,VMain:f.Z});var m=i(8345),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FluidFillContainer",{attrs:{id:"Home"}},[t.$vuetify.breakpoint.smAndDown?i("FloatingSquareBtn",{staticStyle:{"z-index":"100","background-color":"rgba(0, 0, 0, 0.4)"},attrs:{size:52,right:0,top:0,elevation:0},on:{click:t.onBtnClick}},[i("v-icon",{attrs:{color:"white"}},[t._v(" mdi-menu ")])],1):i("NavigationAppbar",{attrs:{"scroll-target":"#HomeContent"}}),i("FluidFillContainer",{staticClass:"overflow-y-auto",attrs:{id:"HomeContent"}},[i("HomeTop",{attrs:{id:"HomeTop","next-article-id":"HomeInfomation"}}),i("HomeInfomation",{attrs:{id:"HomeInfomation","next-article-id":"HomeActivity"}}),i("HomeActiviry",{attrs:{id:"HomeActivity","next-article-id":"HomeMember"}}),i("HomeMember",{attrs:{id:"HomeMember"}}),i("GeneralFooter")],1),t.$vuetify.breakpoint.smAndDown?i("HomeMenuOverlay",{attrs:{show:t.overlay}}):t._e()],1)},h=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",t._b({staticClass:"fill-height padding-all-0",class:{"mobile-padding":t.mobilePadding},attrs:{fluid:"",tag:t.tag}},"v-container",t.$attrs,!1),[t._t("default")],2)},y=[],b={props:{tag:{type:String,default:"div"},mobilePadding:{type:Boolean,default:!1}}},x=b,C=i(9846),S=(0,s.Z)(x,_,y,!1,null,"81dc17e6",null),Z=S.exports;u()(S,{VContainer:C.Z});var w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SquareBtn",t._g(t._b({style:t.STYLE,attrs:{size:t.size,absolute:"",elevation:t.elevation}},"SquareBtn",t.$attrs,!1),t.$listeners),[t._t("default")],2)},q=[],k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-btn",t._g(t._b({attrs:{tile:"","min-width":t.size,"min-height":t.size,width:t.size,height:t.size,elevation:t.elevation}},"v-btn",t.$attrs,!1),t.$listeners),[t._t("default")],2)},V=[],T={props:{size:{type:Number,default:32},elevation:{type:Number,required:!1,default:null}}},B=T,E=i(4995),A=(0,s.Z)(B,k,V,!1,null,null,null),I=A.exports;u()(A,{VBtn:E.Z});var $={components:{SquareBtn:I},props:{size:{type:Number,default:32},elevation:{type:Number,required:!1,default:4},left:{type:Number,required:!1,default:null},right:{type:Number,required:!1,default:null},top:{type:Number,required:!1,default:null},bottom:{type:Number,required:!1,default:null}},computed:{STYLE(){return{left:this.left,right:this.right,top:this.top,bottom:this.bottom}}}},N=$,F=(0,s.Z)(N,w,q,!1,null,"1984fd19",null),H=F.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{dark:"",color:"#e6e6e633",absolute:"","inverted-scroll":"","scroll-target":t.scrollTarget}},[i("v-app-bar-nav-icon"),i("v-toolbar-title",[t._v("Title")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-magnify")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-heart")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-dots-vertical")])],1)],1)},j=[],O={props:{scrollTarget:{type:String,required:!0,default:null}}},M=O,W=i(3343),P=i(5206),L=i(6428),R=i(9762),D=i(7921),Y=(0,s.Z)(M,z,j,!1,null,"2f656857",null),G=Y.exports;u()(Y,{VAppBar:W.Z,VAppBarNavIcon:P.Z,VBtn:E.Z,VIcon:L.Z,VSpacer:R.Z,VToolbarTitle:D.qW});var K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-overlay",{attrs:{color:"#ececec","z-index":0,value:t.overlay}},[i("span",[t._v("Text here")])])},U=[],J={props:{show:{type:Boolean,required:!0,default:!1}},computed:{overlay:{get(){return this.show},set(t){this.$emit("update:show",t)}}}},Q=J,X=i(1058),tt=(0,s.Z)(Q,K,U,!1,null,"f7e7d994",null),et=tt.exports;u()(tt,{VOverlay:X.Z});var it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FluidFillContainer",{staticClass:"home-top-section lazyload flex-column",attrs:{tag:"article"}},[i("div",{staticClass:"full-width flex-grow-1"},[i("div",{staticClass:"fill-height d-flex align-center justify-center"},[i("TitleTextset",{attrs:{title:"やりこみ","sub-title":"音ゲーサークル",slogan1:"音を楽しむ、",slogan2:"だから本気になる。"}})],1)]),i("div",{staticClass:"full-width flex-grow-0 py-8"},[i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}})],1)])},lt=[],rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fill-height title-text-set"},[t.$vuetify.breakpoint.smAndDown?i("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"d-flex align-center justify-end",attrs:{cols:"2","data-aos":"fade-up-right"}},[i("div",{staticClass:"slogan-2 writing-mode-vertical"},[t._v(" "+t._s(t.slogan2)+" ")])]),i("v-col",{staticClass:"d-flex flex-row justify-center align-center",attrs:{cols:"8"}},[i("div",{staticClass:"title-container",attrs:{"data-aos":"flip-left"}},[i("div",{staticClass:"main-title d-flex flex-nowrap justify-center"},t._l(t.title.split(""),(function(e,l){return i("div",{key:l},[t._v(" "+t._s(e)+" ")])})),0),i("div",{staticClass:"sub-title d-flex justify-center"},[i("span",[t._v(t._s(t.subTitle))])])])]),i("v-col",{staticClass:"d-flex align-center justify-start",attrs:{cols:"2","data-aos":"fade-down-left"}},[i("div",{staticClass:"slogan-1 writing-mode-vertical"},[t._v(" "+t._s(t.slogan1)+" ")])])],1):i("div",{staticClass:"fill-height d-flex flex-column justify-center"},[i("div",{staticClass:"top-title d-flex flex-column skew-bg py-12",attrs:{"data-aos":"fade-right"}},[i("div",{staticClass:"top-title-subtitle"},[t._v(" "+t._s(t.subTitle)+" ")]),i("div",{staticClass:"top-title-title mt-n16 d-flex"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"top-title-annotation align-center ml-6"},[t._v(" "+t._s(t.slogan1)+t._s(t.slogan2)+" ")])])])],1)},nt=[],at={props:{title:{type:String,required:!0,default:null},subTitle:{type:String,required:!1,default:null},slogan1:{type:String,required:!1,default:null},slogan2:{type:String,required:!1,default:null}}},ot=at,st=i(2102),ct=i(2877),ut=(0,s.Z)(ot,rt,nt,!1,null,"72e8b858",null),dt=ut.exports;u()(ut,{VCol:st.Z,VRow:ct.Z});var ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-btn",{staticClass:"hidden-on-landscape",class:{"x-center":t.xCenter,"y-center":t.yCenter},style:t.STYLE,attrs:{absolute:t.absolute&&!t.fixed,fixed:!t.absolute&&t.fixed,fab:t.fab,dark:t.dark,width:t._width,height:t._height,color:t.color},on:{click:t.onClick}},[t.icon?i("v-icon",[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._t("default")],2)},vt=[],pt={props:{idTo:{type:String,required:!0,default:null},idContianer:{type:String,required:!0,default:null},icon:{type:String,required:!1,default:null},absolute:{type:Boolean,required:!1,default:!0},fixed:{type:Boolean,required:!1,default:!1},fab:{type:Boolean,required:!1,default:!0},dark:{type:Boolean,required:!1,default:!1},size:{type:[String,Number],required:!1,default:50},width:{type:[String,Number],required:!1,default:null},height:{type:[String,Number],required:!1,default:null},color:{type:String,required:!1,default:null},left:{type:[String,Number],required:!1,default:null},right:{type:[String,Number],required:!1,default:null},top:{type:[String,Number],required:!1,default:null},bottom:{type:[String,Number],required:!1,default:null},xCenter:{type:Boolean,required:!1,default:!1},yCenter:{type:Boolean,required:!1,default:!1}},computed:{STYLE(){const t=isNaN(this.left)?this.left:this.left+"px",e=isNaN(this.right)?this.right:this.right+"px",i=isNaN(this.top)?this.top:this.top+"px",l=isNaN(this.bottom)?this.bottom:this.bottom+"px";return{left:t,right:e,top:i,bottom:l}},_width(){return this.size?this.size:this.width},_height(){return this.size?this.size:this.height}},methods:{onClick(){const t=document.getElementById(this.idTo),e=document.getElementById(this.idContianer);this.$smoothScroll({scrollTo:t,container:e})}}},mt=pt,gt=(0,s.Z)(mt,ft,vt,!1,null,null,null),ht=gt.exports;u()(gt,{VBtn:E.Z,VIcon:L.Z});var _t={components:{FluidFillContainer:Z,TitleTextset:dt,SmoothScrollBtn:ht},props:{nextArticleId:{type:String,required:!1,default:null}},data:()=>({env:{NODE_ENV:"production",BASE_URL:""}}),mounted(){console.log(this.env)}},yt=_t,bt=(0,s.Z)(yt,it,lt,!1,null,"54cfe672",null),xt=bt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{staticClass:"home-information pt-16",attrs:{tag:"article"}},[i("div",{staticClass:"mt-8 d-flex flex-column"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-spacer"),i("v-col",[i("div",{staticClass:"d-flex flex-column align-start"},[i("div",{staticClass:"info-title mb-4"},[i("h3",[t._v("音ゲーサークル「やりこみ」とは")])]),i("div",{staticClass:"info-area d-flex flex-column align-start pa-4"},[i("div",{staticClass:"info-text mb-4"},[i("span",[t._v("株式会社こだわりの"),i("b",[t._v('"音ゲー"好き')]),t._v("が集まる場所")])]),i("div",{staticClass:"info-text mb-4"},[i("span",[t._v("「交流」と「成長」を目的とし、楽しみながら音ゲーを「やりこむ」サークルです。")]),i("ul",[i("li",[i("b",[t._v("音ゲー")]),t._v("に興味がある方")]),i("li",[t._v("普段"),i("b",[t._v("カジュアル")]),t._v("にプレイしている方")]),i("li",[t._v("引かれるくらい"),i("b",[t._v("やりこんでいる")]),t._v("方")])]),i("span",[t._v("どんなスタイルでも楽しめる活動を目指しています！")])]),i("div",{staticClass:"info-text mb-4"},[i("span",[i("b",[t._v("サークルメンバー絶賛")]),t._v("募集中！")]),i("span",[t._v("興味のある方は、"),i("b",[t._v("代表まで")]),t._v("ご連絡ください！")])])])])]),i("v-spacer")],1),i("div",{staticClass:"py-4"},[i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}})],1)],1)])},St=[],Zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",t._b({staticClass:"full-width padding-all-0",class:{"mobile-padding":t.mobilePadding},attrs:{fluid:"",tag:t.tag}},"v-container",t.$attrs,!1),[t._t("default")],2)},wt=[],qt={props:{tag:{type:String,required:!1,default:"div"},mobilePadding:{type:Boolean,required:!1,default:!1}}},kt=qt,Vt=(0,s.Z)(kt,Zt,wt,!1,null,"5c1c645c",null),Tt=Vt.exports;u()(Vt,{VContainer:C.Z});var Bt={components:{FullWidthContainer:Tt,SmoothScrollBtn:ht},props:{nextArticleId:{type:String,required:!1,default:null}}},Et=Bt,At=(0,s.Z)(Et,Ct,St,!1,null,"4b8564c2",null),It=At.exports;u()(At,{VCol:st.Z,VRow:ct.Z,VSpacer:R.Z});var $t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{staticClass:"home-activity pt-16",attrs:{tag:"article"}},[i("div",{staticClass:"mt-8 d-flex flex-column"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-spacer"),i("v-col",{attrs:{cols:"10",lg:"5"}},[i("div",{staticClass:"d-flex flex-column align-start"},[i("div",{staticClass:"activity-title mb-4 px-16"},[i("h3",[t._v("Activity")])]),i("v-carousel",{staticClass:"activity-carousel",attrs:{cycle:"","hide-delimiter-background":"","delimiter-icon":"mdi-minus"}},[t._l(t.contents,(function(t,e){return[i("TitleImageCarouselItem",{key:e,attrs:{title:t.title,"img-src":t.src}})]}))],2)],1)]),i("v-spacer")],1),i("div",{staticClass:"py-4"},[t.nextArticleId?i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}}):t._e()],1)],1)])},Nt=[],Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-carousel-item",[i("v-sheet",{attrs:{height:"100%",tile:""}},[i("div",{staticClass:"bg-image pa-3",style:t.STYLES,attrs:{justify:"center"}},[t.title?i("div",{staticClass:"carousel-title py-2 px-10"},[i("span",[t._v(t._s(t.title))])]):t._e()])])],1)},Ht=[],zt={props:{title:{type:String,required:!1,default:null},imgSrc:{type:String,required:!1,default:null}},computed:{STYLES(){const t="url("+this.imgSrc+")";return{backgroundImage:t}}}},jt=zt,Ot=i(8598),Mt=i(5477),Wt=(0,s.Z)(jt,Ft,Ht,!1,null,"a3833ae8",null),Pt=Wt.exports;u()(Wt,{VCarouselItem:Ot.Z,VSheet:Mt.Z});var Lt={components:{FullWidthContainer:Tt,SmoothScrollBtn:ht,TitleImageCarouselItem:Pt},props:{nextArticleId:{type:String,required:!1,default:null}},data:()=>({contents:[{title:"オフライン交流会",src:"/img/immigrant.jpg"},{title:"チャット",src:"/img/slack_zatsudan.png"},{title:"オフライン大会",src:"/img/slack_ss_mosaic.png"}]})},Rt=Lt,Dt=i(2628),Yt=(0,s.Z)(Rt,$t,Nt,!1,null,"42ae7f03",null),Gt=Yt.exports;u()(Yt,{VCarousel:Dt.Z,VCol:st.Z,VRow:ct.Z,VSpacer:R.Z});var Kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{staticClass:"home-activity pt-16",attrs:{tag:"article"}},[i("div",{staticClass:"mt-8 d-flex flex-column"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-spacer"),i("v-col",{attrs:{cols:"10",lg:"5"}},[i("div",{staticClass:"d-flex flex-column align-start"},[i("div",{staticClass:"info-title mb-4 px-16"},[i("h3",[t._v("Member")])]),i("v-carousel",{attrs:{cycle:"","hide-delimiter-background":"","delimiter-icon":"mdi-minus"}},[t._l(t.contents,(function(t,e){return[i("TitleImageCarouselItem",{key:e,attrs:{title:t.title,"img-src":t.src}})]}))],2)],1)]),i("v-spacer")],1),i("div",{staticClass:"py-4"},[t.nextArticleId?i("SmoothScrollBtn",{attrs:{"id-to":t.nextArticleId,"id-contianer":"HomeContent",icon:"mdi-arrow-down-thick",color:"#1A2E40",dark:"",fixed:"","x-center":""}}):t._e()],1)],1)])},Ut=[],Jt={components:{FullWidthContainer:Tt,SmoothScrollBtn:ht,TitleImageCarouselItem:Pt},props:{nextArticleId:{type:String,required:!1,default:null}},data:()=>({contents:[{title:"オフライン交流会",src:"/img/immigrant.jpg"},{title:"チャット",src:"/img/slack_zatsudan.png"},{title:"オフライン大会",src:"/img/slack_ss_mosaic.png"}]})},Qt=Jt,Xt=(0,s.Z)(Qt,Kt,Ut,!1,null,"f3389f66",null),te=Xt.exports;u()(Xt,{VCarousel:Dt.Z,VCol:st.Z,VRow:ct.Z,VSpacer:R.Z});var ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FullWidthContainer",{attrs:{id:"Footer"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"4"}},[i("h2",[t._v("やりこみ")])]),i("v-divider",{attrs:{vertical:"",dark:""}}),i("v-spacer"),i("v-col",{attrs:{cols:"6"}})],1),i("v-row",[i("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"6"}},[i("div",{staticClass:"footer-address"},[i("p",[t._v("株式会社こだわり")]),i("v-divider"),i("p",[t._v("東京都品川区上大崎2-24-11 5F")])],1)]),i("v-spacer"),i("v-col",{staticClass:"d-flex flex-column justify-end",attrs:{cols:"6"}},[i("div",{staticClass:"d-flex justify-end"},[i("span",[t._v("🄫 KODAWARI.inc allright reserved")])])])],1)],1)],1)},ie=[],le={components:{FullWidthContainer:Tt}},re=le,ne=i(1418),ae=(0,s.Z)(re,ee,ie,!1,null,"686eb984",null),oe=ae.exports;u()(ae,{VCol:st.Z,VContainer:C.Z,VDivider:ne.Z,VRow:ct.Z,VSpacer:R.Z});var se={components:{FluidFillContainer:Z,FloatingSquareBtn:H,NavigationAppbar:G,HomeMenuOverlay:et,HomeTop:xt,HomeInfomation:It,HomeActiviry:Gt,GeneralFooter:oe,HomeMember:te},data:()=>({overlay:!1}),methods:{onBtnClick(){this.overlay=!this.overlay}}},ce=se,ue=(0,s.Z)(ce,g,h,!1,null,"80f98096",null),de=ue.exports;u()(ue,{VIcon:L.Z}),l.Z.use(m.Z);const fe=[{path:"/",name:"home",component:de}],ve=new m.Z({routes:fe});var pe=ve,me=i(1910);l.Z.use(me.Z);var ge=new me.Z({}),he=i(4585),_e=i.n(he),ye=i(12),be=i(2711),xe=i.n(be),Ce=i(6498),Se=i(7090),Ze=i.n(Se),we=i(9785),qe=i.n(we);class ke{constructor(){}}var Ve=new ke;l.Z.prototype.$api=Ve,l.Z.config.productionTip=!1;const Te={duration:800,offset:0,updateHistory:!1,easingFunction:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1};l.Z.use(_e(),Te),new l.Z({router:pe,vuetify:ge,animate:ye.Z,aos_css:Ce.Z,lazysizes:Ze(),unveilhooks:qe(),mounted(){xe().init({offset:120,delay:100,duration:500,easing:"ease-out-cubic",once:!0})},render:t=>t(p)}).$mount("#app")}},e={};function i(l){var r=e[l];if(void 0!==r)return r.exports;var n=e[l]={exports:{}};return t[l].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,l,r,n){if(!l){var a=1/0;for(u=0;u<t.length;u++){l=t[u][0],r=t[u][1],n=t[u][2];for(var o=!0,s=0;s<l.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((function(t){return i.O[t](l[s])}))?l.splice(s--,1):(o=!1,n<a&&(a=n));if(o){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[l,r,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var l in e)i.o(e,l)&&!i.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,l){var r,n,a=l[0],o=l[1],s=l[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(s)var u=s(i)}for(e&&e(l);c<a.length;c++)n=a[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(u)},l=self["webpackChunkyarikomi_page"]=self["webpackChunkyarikomi_page"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=i.O(void 0,[998],(function(){return i(5977)}));l=i.O(l)})();
//# sourceMappingURL=app.efe8f6dc.js.map