(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d97542a"],{"1a4a":function(e,t,c){},"1dde":function(e,t,c){var a=c("d039"),o=c("b622"),n=c("2d00"),r=o("species");e.exports=function(e){return n>=51||!a((function(){var t=[],c=t.constructor={};return c[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4bc2":function(e,t,c){"use strict";c("1a4a")},8418:function(e,t,c){"use strict";var a=c("c04e"),o=c("9bf2"),n=c("5c6c");e.exports=function(e,t,c){var r=a(t);r in e?o.f(e,r,n(0,c)):e[r]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),o=c("d039"),n=c("e8b5"),r=c("861d"),i=c("7b0b"),l=c("50c4"),s=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),f=c("2d00"),j=b("isConcatSpreadable"),O=9007199254740991,v="Maximum allowed index exceeded",N=f>=51||!o((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),g=u("concat"),p=function(e){if(!r(e))return!1;var t=e[j];return void 0!==t?!!t:n(e)},V=!N||!g;a({target:"Array",proto:!0,forced:V},{concat:function(e){var t,c,a,o,n,r=i(this),u=d(r,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?r:arguments[t],p(n)){if(o=l(n.length),b+o>O)throw TypeError(v);for(c=0;c<o;c++,b++)c in n&&s(u,b,n[c])}else{if(b>=O)throw TypeError(v);s(u,b++,n)}return u.length=b,u}})},de8a:function(e,t,c){"use strict";c.r(t);var a=c("7a23");function o(e,t,c,o,n,r){var i=Object(a["resolveComponent"])("Navbar"),l=Object(a["resolveComponent"])("router-view"),s=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(i),Object(a["createVNode"])(l),Object(a["createVNode"])(s)],64)}var n={class:"nav fixed-top bg-orange"},r={class:"container-fluid d-flex align-items-center justify-content-between"},i=Object(a["createTextVNode"])("CHILLBURGER"),l={class:"menu d-lg-flex d-none list-unstyled fw-bold fs-5 mb-0"},s=Object(a["createVNode"])("i",{class:"bi bi-grid-fill"},null,-1),d=Object(a["createTextVNode"])(" 商品列表"),u=Object(a["createVNode"])("i",{class:"bi bi-chat-dots"},null,-1),b=Object(a["createTextVNode"])(" 關於我們"),f=Object(a["createVNode"])("i",{class:"bi bi-question-circle"},null,-1),j=Object(a["createTextVNode"])(" 常見問題"),O=Object(a["createVNode"])("i",{class:"bi bi-grid-fill"},null,-1),v=Object(a["createTextVNode"])(" 商品列表"),N=Object(a["createVNode"])("i",{class:"bi bi-chat-dots"},null,-1),g=Object(a["createTextVNode"])(" 關於我們"),p=Object(a["createVNode"])("i",{class:"bi bi-question-circle"},null,-1),V=Object(a["createTextVNode"])(" 常見問題"),h={class:"d-lg-none"},x=Object(a["createVNode"])("i",{class:"bi bi-cart"},null,-1),m=Object(a["createTextVNode"])(" 購物車"),w={class:"d-lg-none"},y=Object(a["createVNode"])("i",{class:"bi bi-heart-fill"},null,-1),C=Object(a["createTextVNode"])(" 商品清單"),k={class:"menu-icon d-lg-flex list-unstyled fs-5 mb-0 d-none"},B=Object(a["createVNode"])("i",{class:"bi bi-cart"},null,-1),D={key:0,class:"cartNum"},I=Object(a["createVNode"])("i",{class:"bi bi-heart-fill ms-2"},null,-1),S={class:"favoriteNum"},T=Object(a["createVNode"])("span",{class:"d-lg-none text-white ms-auto me-2 zindex-101"},"Menu",-1);function _(e,t,c,o,_,L){var R=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",n,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])(R,{to:"/",class:["h1 fw-bold font-family-indie-flower",{active:0===o.idx}]},{default:Object(a["withCtx"])((function(){return[i]})),_:1},8,["class"]),Object(a["createVNode"])("ul",l,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/products",class:{active:3===o.idx}},{default:Object(a["withCtx"])((function(){return[s,d]})),_:1},8,["class"])]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/about",class:{active:2===o.idx}},{default:Object(a["withCtx"])((function(){return[u,b]})),_:1},8,["class"])]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/question",class:{active:1===o.idx}},{default:Object(a["withCtx"])((function(){return[f,j]})),_:1},8,["class"])])]),Object(a["createVNode"])("ul",{class:["hideSide list-unstyled fw-bold fs-5 mb-0",{active:o.isLoading}],onClick:t[1]||(t[1]=function(){return o.toggleIcon&&o.toggleIcon.apply(o,arguments)})},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/products"},{default:Object(a["withCtx"])((function(){return[O,v]})),_:1})]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/about"},{default:Object(a["withCtx"])((function(){return[N,g]})),_:1})]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/question"},{default:Object(a["withCtx"])((function(){return[p,V]})),_:1})]),Object(a["createVNode"])("li",h,[Object(a["createVNode"])(R,{to:"/cart"},{default:Object(a["withCtx"])((function(){return[x,m,Object(a["createVNode"])("span",null," ("+Object(a["toDisplayString"])(o.cartData.data.length)+")",1)]})),_:1})]),Object(a["createVNode"])("li",w,[Object(a["createVNode"])(R,{to:"/favorite"},{default:Object(a["withCtx"])((function(){return[y,C,Object(a["createVNode"])("span",null," ("+Object(a["toDisplayString"])(o.favoriteData.data.length)+")",1)]})),_:1})])],2),Object(a["createVNode"])("ul",k,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/cart",class:{active:4===o.idx}},{default:Object(a["withCtx"])((function(){return[B]})),_:1},8,["class"]),0!==o.cartData.data.length?(Object(a["openBlock"])(),Object(a["createBlock"])("span",D,Object(a["toDisplayString"])(o.cartData.data.length),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(R,{to:"/favorite",class:{active:5===o.idx}},{default:Object(a["withCtx"])((function(){return[I]})),_:1},8,["class"]),Object(a["createVNode"])("span",S,Object(a["toDisplayString"])(o.favoriteData.data.length),1)])]),T,Object(a["createVNode"])("div",{class:["menu-toggle d-lg-none",{active:o.isLoading}],onClick:t[2]||(t[2]=function(){return o.toggleIcon&&o.toggleIcon.apply(o,arguments)})},null,2),Object(a["createVNode"])("div",{class:["hideBox",{show:o.isLoading}],onClick:t[3]||(t[3]=function(){return o.toggleIcon&&o.toggleIcon.apply(o,arguments)})},null,2)])])}c("99af");var L=c("a1e9"),R=c("5c40"),q=c("6c02"),E={setup:function(){var e=Object(L["m"])(!1),t=Object(L["m"])(0),c=["","question","about","products","cart","favorite"],a=Object(L["k"])({data:{}}),o=Object(L["k"])({data:[]}),n=Object(L["k"])({data:JSON.parse(localStorage.getItem("favorite"))||[]});Object(R["Wb"])(e,(function(){!0===e.value?document.body.style["overflow-y"]="hidden":document.body.style["overflow-y"]="auto"}));var r=Object(R["K"])("mitt"),i=Object(R["K"])("axios"),l=Object(q["c"])();Object(R["Wb"])((function(){return l.path}),(function(){c.forEach((function(e,c){var a=l.path.substr(1);e===a&&(t.value=c)}))}));var s=function(){e.value=!e.value},d=function(){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/cart");i.get(e).then((function(e){o.data=e.data.data.carts}))};return Object(R["bb"])((function(){d(),r.on("update-cart",(function(){d()})),r.on("update-favorite",(function(){n.data=JSON.parse(localStorage.getItem("favorite"))||[]})),r.on("pushNavbar",(function(e){a.data=e}))})),{isLoading:e,toggleIcon:s,getCart:d,classList:a,favoriteData:n,cartData:o,idx:t}}};E.render=_;var J=E,F={class:"footer bg-orange py-3"},A=Object(a["createStaticVNode"])('<div class="container"><div class="row align-items-center"><div class="col"><p class="text-white fw-bold">Copyright © 2021 CHILLBURGER All Rights Reserved.</p></div><div class="col"><ul class="d-flex justify-content-end list-unstyled fs-4 m-0"><li><a href="#"><i class="bi bi-envelope"></i></a></li><li class="mx-2"><a href="#"><i class="bi bi-facebook"></i></a></li><li><a href="#"><i class="bi bi-instagram"></i></a></li></ul></div></div></div>',1);function G(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",F,[A])}const H={};H.render=G;var K=H,M={components:{Navbar:J,Footer:K}};c("4bc2");M.render=o;t["default"]=M}}]);
//# sourceMappingURL=chunk-9d97542a.d1fa5d32.js.map