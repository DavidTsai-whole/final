(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6be5d1b2"],{"4de4":function(e,t,c){"use strict";var a=c("23e7"),o=c("b727").filter,r=c("1dde"),n=r("filter");a({target:"Array",proto:!0,forced:!n},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},a09f:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"favorite"},r=Object(a["createVNode"])("div",{class:"banner bg-cover"},null,-1),n={class:"container mt-5"},i={class:"row d-flex justify-content-center"},l={class:"col-lg-6 col-md-8"},d=Object(a["createVNode"])("h2",{class:"fw-bold mb-5 text-center"},"願望清單",-1),s={key:0,class:"wish"},b={class:"title d-flex flex-column justify-content-around ms-3"},u={class:"fw-bold"},f={class:"text-danger fw-bold"},j={class:"icon d-flex flex-column ms-auto justify-content-around me-2"},O=Object(a["createVNode"])("i",{class:"bi bi-x-lg"},null,-1),p={key:1,class:"noWish text-center"},v=Object(a["createVNode"])("h4",{class:"fw-bold mb-5"},"哎呀！您的清單是空的，趕快去加入收藏吧！",-1),h=Object(a["createVNode"])("img",{src:"https://upload.cc/i1/2021/07/13/OGfKXe.jpg",alt:""},null,-1),m=Object(a["createVNode"])("a",{href:"#/products",class:"btn-custom2 hvr-shutter-out-horizontal my-2"},[Object(a["createVNode"])("i",{class:"bi bi-reply-fill"}),Object(a["createTextVNode"])("立刻追蹤")],-1);function g(e,t,c,g,k,N){var x=Object(a["resolveComponent"])("Loading");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(x,{active:g.isLoading},null,8,["active"]),Object(a["createVNode"])("div",o,[r,Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",l,[d,0!==g.favoriteData.data.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",s,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(g.favoriteProduct.data,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"wishCard d-flex bg-orange mb-2",key:e.id},[Object(a["createVNode"])("img",{src:e.imageUrl,alt:""},null,8,["src"]),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("h5",u,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])("span",f,"NT $"+Object(a["toDisplayString"])(e.price),1)]),Object(a["createVNode"])("div",j,[Object(a["createVNode"])("div",{class:"close text-end",onClick:function(t){return g.deleteItem(e.id)}},[O],8,["onClick"]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary text-white",onClick:function(t){return g.addCart(e)}}," 加入購物車 ",8,["onClick"])])])})),128))])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",p,[v,h,m]))])])])])],64)}c("99af"),c("4de4"),c("a434");var k=c("a1e9"),N=c("5c40"),x=c("3a33"),V={setup:function(){var e=Object(k["k"])({data:JSON.parse(localStorage.getItem("favorite"))||[]}),t=Object(k["k"])({data:[]}),c=Object(k["k"])({data:[]}),a=Object(k["m"])(!1),o=Object(N["K"])("axios"),r=Object(N["K"])("mitt"),n=function(){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/products/all");o.get(e).then((function(e){t.data=e.data.products,i()}))},i=function(){c.data=t.data.filter((function(t){return e.data.indexOf(t.id)>-1}))},l=function(t){var c=e.data.indexOf(t);e.data.splice(c,1),i(),Object(x["a"])("已取消追蹤"),localStorage.setItem("favorite",JSON.stringify(e.data))},d=function(e){var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/cart");a.value=!0;var c={product_id:e.id,qty:1};o.post(t,{data:c}).then((function(e){Object(x["b"])(e),r.emit("update-cart"),a.value=!1}))};return Object(N["bb"])((function(){n()})),{isLoading:a,deleteItem:l,addCart:d,favoriteData:e,favoriteProduct:c}}};V.render=g;t["default"]=V},a434:function(e,t,c){"use strict";var a=c("23e7"),o=c("23cb"),r=c("a691"),n=c("50c4"),i=c("7b0b"),l=c("65f0"),d=c("8418"),s=c("1dde"),b=s("splice"),u=Math.max,f=Math.min,j=9007199254740991,O="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var c,a,s,b,p,v,h=i(this),m=n(h.length),g=o(e,m),k=arguments.length;if(0===k?c=a=0:1===k?(c=0,a=m-g):(c=k-2,a=f(u(r(t),0),m-g)),m+c-a>j)throw TypeError(O);for(s=l(h,a),b=0;b<a;b++)p=g+b,p in h&&d(s,b,h[p]);if(s.length=a,c<a){for(b=g;b<m-a;b++)p=b+a,v=b+c,p in h?h[v]=h[p]:delete h[v];for(b=m;b>m-a+c;b--)delete h[b-1]}else if(c>a)for(b=m-a;b>g;b--)p=b+a-1,v=b+c-1,p in h?h[v]=h[p]:delete h[v];for(b=0;b<c;b++)h[b+g]=arguments[b+2];return h.length=m-a+c,s}})}}]);
//# sourceMappingURL=chunk-6be5d1b2.f8c8af10.js.map