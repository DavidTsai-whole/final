(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8892ed6"],{"04d1":function(e,t,c){var r=c("342f"),a=r.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"107c":function(e,t,c){var r=c("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,c){var r=c("c6b6"),a=c("9263");e.exports=function(e,t){var c=e.exec;if("function"===typeof c){var n=c.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"466d":function(e,t,c){"use strict";var r=c("d784"),a=c("825a"),n=c("50c4"),o=c("1d80"),i=c("8aa5"),l=c("14c3");r("match",(function(e,t,c){return[function(t){var c=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,c):new RegExp(t)[e](String(c))},function(e){var r=c(t,this,e);if(r.done)return r.value;var o=a(this),d=String(e);if(!o.global)return l(o,d);var s=o.unicode;o.lastIndex=0;var u,f=[],b=0;while(null!==(u=l(o,d))){var p=String(u[0]);f[b]=p,""===p&&(o.lastIndex=i(d,n(o.lastIndex),s)),b++}return 0===b?null:f}]}))},"4de4":function(e,t,c){"use strict";var r=c("23e7"),a=c("b727").filter,n=c("1dde"),o=n("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,c){"use strict";var r=c("23e7"),a=c("1c0b"),n=c("7b0b"),o=c("50c4"),i=c("d039"),l=c("addb"),d=c("a640"),s=c("04d1"),u=c("d998"),f=c("2d00"),b=c("512c"),p=[],v=p.sort,g=i((function(){p.sort(void 0)})),O=i((function(){p.sort(null)})),h=d("sort"),j=!i((function(){if(f)return f<70;if(!(s&&s>3)){if(u)return!0;if(b)return b<603;var e,t,c,r,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:c=3;break;case 68:case 71:c=4;break;default:c=2}for(r=0;r<47;r++)p.push({k:t+r,v:c})}for(p.sort((function(e,t){return t.v-e.v})),r=0;r<p.length;r++)t=p[r].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),x=g||!O||!h||!j,N=function(e){return function(t,c){return void 0===c?-1:void 0===t?1:void 0!==e?+e(t,c)||0:String(t)>String(c)?1:-1}};r({target:"Array",proto:!0,forced:x},{sort:function(e){void 0!==e&&a(e);var t=n(this);if(j)return void 0===e?v.call(t):v.call(t,e);var c,r,i=[],d=o(t.length);for(r=0;r<d;r++)r in t&&i.push(t[r]);i=l(i,N(e)),c=i.length,r=0;while(r<c)t[r]=i[r++];while(r<d)delete t[r++];return t}})},"512c":function(e,t,c){var r=c("342f"),a=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},"8aa5":function(e,t,c){"use strict";var r=c("6547").charAt;e.exports=function(e,t,c){return t+(c?r(e,t).length:1)}},9263:function(e,t,c){"use strict";var r=c("ad6d"),a=c("9f7f"),n=c("5692"),o=c("7c73"),i=c("69f3").get,l=c("fce3"),d=c("107c"),s=RegExp.prototype.exec,u=n("native-string-replace",String.prototype.replace),f=s,b=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],g=b||v||p||l||d;g&&(f=function(e){var t,c,a,n,l,d,g,O=this,h=i(O),j=h.raw;if(j)return j.lastIndex=O.lastIndex,t=f.call(j,e),O.lastIndex=j.lastIndex,t;var x=h.groups,N=p&&O.sticky,m=r.call(O),y=O.source,V=0,w=e;if(N&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),w=String(e).slice(O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==e[O.lastIndex-1])&&(y="(?: "+y+")",w=" "+w,V++),c=new RegExp("^(?:"+y+")",m)),v&&(c=new RegExp("^"+y+"$(?!\\s)",m)),b&&(a=O.lastIndex),n=s.call(N?c:O,w),N?n?(n.input=n.input.slice(V),n[0]=n[0].slice(V),n.index=O.lastIndex,O.lastIndex+=n[0].length):O.lastIndex=0:b&&n&&(O.lastIndex=O.global?n.index+n[0].length:a),v&&n&&n.length>1&&u.call(n[0],c,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(n[l]=void 0)})),n&&x)for(n.groups=d=o(null),l=0;l<x.length;l++)g=x[l],d[g[0]]=n[g[1]];return n}),e.exports=f},"9f7f":function(e,t,c){var r=c("d039"),a=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,c){"use strict";var r=c("23e7"),a=c("23cb"),n=c("a691"),o=c("50c4"),i=c("7b0b"),l=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),f=Math.max,b=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,r,s,u,g,O,h=i(this),j=o(h.length),x=a(e,j),N=arguments.length;if(0===N?c=r=0:1===N?(c=0,r=j-x):(c=N-2,r=b(f(n(t),0),j-x)),j+c-r>p)throw TypeError(v);for(s=l(h,r),u=0;u<r;u++)g=x+u,g in h&&d(s,u,h[g]);if(s.length=r,c<r){for(u=x;u<j-r;u++)g=u+r,O=u+c,g in h?h[O]=h[g]:delete h[O];for(u=j;u>j-r+c;u--)delete h[u-1]}else if(c>r)for(u=j-r;u>x;u--)g=u+r-1,O=u+c-1,g in h?h[O]=h[g]:delete h[O];for(u=0;u<c;u++)h[u+x]=arguments[u+2];return h.length=j-r+c,s}})},ac1f:function(e,t,c){"use strict";var r=c("23e7"),a=c("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,c){"use strict";var r=c("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},addb:function(e,t){var c=Math.floor,r=function(e,t){var o=e.length,i=c(o/2);return o<8?a(e,t):n(r(e.slice(0,i),t),r(e.slice(i),t),t)},a=function(e,t){var c,r,a=e.length,n=1;while(n<a){r=n,c=e[n];while(r&&t(e[r-1],c)>0)e[r]=e[--r];r!==n++&&(e[r]=c)}return e},n=function(e,t,c){var r=e.length,a=t.length,n=0,o=0,i=[];while(n<r||o<a)n<r&&o<a?i.push(c(e[n],t[o])<=0?e[n++]:t[o++]):i.push(n<r?e[n++]:t[o++]);return i};e.exports=r},d784:function(e,t,c){"use strict";c("ac1f");var r=c("6eeb"),a=c("9263"),n=c("d039"),o=c("b622"),i=c("9112"),l=o("species"),d=RegExp.prototype;e.exports=function(e,t,c,s){var u=o(e),f=!n((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),b=f&&!n((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[l]=function(){return c},c.flags="",c[u]=/./[u]),c.exec=function(){return t=!0,null},c[u](""),!t}));if(!f||!b||c){var p=/./[u],v=t(u,""[e],(function(e,t,c,r,n){var o=t.exec;return o===a||o===d.exec?f&&!n?{done:!0,value:p.call(t,c,r)}:{done:!0,value:e.call(c,t,r)}:{done:!1}}));r(String.prototype,e,v[0]),r(d,u,v[1])}s&&i(d[u],"sham",!0)}},d998:function(e,t,c){var r=c("342f");e.exports=/MSIE|Trident/.test(r)},e6dc:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a={class:"products"},n=Object(r["createVNode"])("div",{class:"banner bg-cover"},null,-1),o={class:"container mt-5"},i={class:"row"},l={class:"col-lg-4"},d={class:"left sticky-top",style:{top:"85px"}},s={class:"accordion accordionCategory my-2",id:"accordionExample"},u={class:"accordion-item"},f=Object(r["createVNode"])("h2",{class:"accordion-header",id:"headingOne"},[Object(r["createVNode"])("button",{class:"accordion-button fw-bold",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," 商品分類 ")],-1),b={id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},p={class:"accordion-body"},v={class:"list-unstyled fw-bold"},g={class:"accordion accordionFilter mt-lg-2 mt-0",id:"accordionExample"},O={class:"accordion-item"},h=Object(r["createVNode"])("h2",{class:"accordion-header",id:"headingOne"},[Object(r["createVNode"])("button",{class:"accordion-button fw-bold",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseOne"}," 條件篩選 ")],-1),j={id:"collapseTwo",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},x={class:"accordion-body"},N=Object(r["createVNode"])("option",{value:"1"},"正常排序",-1),m=Object(r["createVNode"])("option",{value:"2"},"價格由低到高",-1),y=Object(r["createVNode"])("option",{value:"3"},"價格由高到低",-1),V={class:"input-group mt-2"},w=Object(r["createVNode"])("span",{class:"input-group-text",id:"basic-addon1"},[Object(r["createVNode"])("i",{class:"bi bi-search"})],-1),k={class:"col-lg-8"},E={class:"row"},I={class:"card-img"},C={class:"action list-unstyled"},S=Object(r["createVNode"])("i",{class:"bi bi-cart"},null,-1),R=Object(r["createVNode"])("span",null,"加入購物車",-1),A=Object(r["createVNode"])("i",{class:"bi bi-heart"},null,-1),D=Object(r["createVNode"])("span",null,"追蹤商品",-1),M=Object(r["createVNode"])("i",{class:"bi bi-heart"},null,-1),T=Object(r["createVNode"])("span",null,"取消追蹤",-1),B={class:"card-body"},U={class:"card-title d-flex justify-content-between align-items-center"},F={class:"fw-bold"},K={class:"badge rounded-pill bg-orange"},P={class:"d-flex justify-content-between"},_={class:"text-primary fw-bold"};function J(e,t,c,J,L,Y){var $=Object(r["resolveComponent"])("Loading");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])($,{active:J.isLoading},null,8,["active"]),Object(r["createVNode"])("div",a,[n,Object(r["createVNode"])("div",o,[Object(r["createVNode"])("div",i,[Object(r["createVNode"])("div",l,[Object(r["createVNode"])("div",d,[Object(r["createVNode"])("div",s,[Object(r["createVNode"])("div",u,[f,Object(r["createVNode"])("div",b,[Object(r["createVNode"])("div",p,[Object(r["createVNode"])("ul",v,[Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return J.category="all"}),["prevent"])),class:{active:"all"==J.category}},"全部",2)]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return J.category="burger"}),["prevent"])),class:{active:"burger"==J.category}},"漢堡",2)]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"#",onClick:t[3]||(t[3]=Object(r["withModifiers"])((function(e){return J.category="dessert"}),["prevent"])),class:{active:"dessert"==J.category}},"點心",2)]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"#",onClick:t[4]||(t[4]=Object(r["withModifiers"])((function(e){return J.category="drink"}),["prevent"])),class:{active:"drink"==J.category}},"飲品",2)])])])])])]),Object(r["createVNode"])("div",g,[Object(r["createVNode"])("div",O,[h,Object(r["createVNode"])("div",j,[Object(r["createVNode"])("div",x,[Object(r["withDirectives"])(Object(r["createVNode"])("select",{class:"form-select","onUpdate:modelValue":t[5]||(t[5]=function(e){return J.selected=e}),"aria-label":"Default select example"},[N,m,y],512),[[r["vModelSelect"],J.selected]]),Object(r["createVNode"])("div",V,[w,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(e){return J.filterText=e}),placeholder:"Search...","aria-label":"Username","aria-describedby":"basic-addon1"},null,512),[[r["vModelText"],J.filterText]])])])])])])])]),Object(r["createVNode"])("div",k,[Object(r["createVNode"])("div",E,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(J.filterProduct,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"col-lg-4 col-md-6 my-2",key:e.id},[Object(r["createVNode"])("div",{class:"card",onClick:function(t){return J.productDetail(e)}},[Object(r["createVNode"])("div",I,[Object(r["createVNode"])("img",{src:e.imageUrl,class:"card-img-top",alt:""},null,8,["src"]),Object(r["createVNode"])("ul",C,[Object(r["createVNode"])("li",{onClick:Object(r["withModifiers"])((function(t){return J.addCart(e)}),["stop"])},[S,R],8,["onClick"]),-1===J.favoriteData.data.indexOf(e.id)?(Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:0,onClick:Object(r["withModifiers"])((function(t){return J.addFavorite(e.id)}),["stop"])},[A,D],8,["onClick"])):(Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:1,class:"active",onClick:Object(r["withModifiers"])((function(t){return J.addFavorite(e.id)}),["stop"])},[M,T],8,["onClick"]))])]),Object(r["createVNode"])("div",B,[Object(r["createVNode"])("div",U,[Object(r["createVNode"])("p",F,Object(r["toDisplayString"])(e.title),1),Object(r["createVNode"])("span",K,Object(r["toDisplayString"])(e.category),1)]),Object(r["createVNode"])("div",P,[Object(r["createVNode"])("del",null,"原價 : "+Object(r["toDisplayString"])(e.origin_price)+"元",1),Object(r["createVNode"])("p",_,"特價 : "+Object(r["toDisplayString"])(e.price)+"元",1)])])],8,["onClick"])])})),128))])])])])])],64)}c("99af"),c("a434"),c("4e82"),c("4de4"),c("ac1f"),c("466d"),c("159b");var L=c("a1e9"),Y=c("5c40"),$=c("3a33"),q=c("6c02"),G={setup:function(){var e=Object(L["k"])({data:[]}),t=Object(L["m"])(!1),c=Object(L["m"])("all"),r=Object(L["m"])("1"),a=Object(L["m"])(""),n=Object(L["k"])({data:JSON.parse(localStorage.getItem("favorite"))||[]}),o=Object(q["d"])(),i=Object(Y["K"])("mitt"),l=Object(Y["K"])("axios"),d=function(){var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/products/all");t.value=!0,l.get(c).then((function(c){t.value=!1,e.data=c.data.products}))},s=function(e){var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jamestsai","/cart");t.value=!0;var r={product_id:e.id,qty:1};t.value=!0,l.post(c,{data:r}).then((function(e){Object($["b"])(e),i.emit("update-cart"),t.value=!1}))},u=function(e){o.push("/product/".concat(e.id))},f=function(e){var t=n.data.indexOf(e);-1===t?(n.data.push(e),Object($["a"])("已加入追蹤")):(n.data.splice(t,1),Object($["a"])("已取消追蹤")),localStorage.setItem("favorite",JSON.stringify(n.data)),i.emit("update-favorite")},b=Object(Y["o"])((function(){var t=[];return"all"===c.value?e.data.filter((function(e){return e.title.match(a.value)})).sort((function(e,t){return"2"===r.value?e.price-t.price:"3"===r.value?t.price-e.price:void 0})):"burger"===c.value?(e.data.forEach((function(e){"漢堡"===e.category&&t.push(e)})),t.sort((function(e,t){return"2"===r.value?e.price-t.price:"3"===r.value?t.price-e.price:void 0})).filter((function(e){return e.title.match(a.value)}))):"dessert"===c.value?(e.data.forEach((function(e){"點心"===e.category&&t.push(e)})),t.sort((function(e,t){return"2"===r.value?e.price-t.price:"3"===r.value?t.price-e.price:void 0})).filter((function(e){return e.title.match(a.value)}))):(e.data.forEach((function(e){"飲品"===e.category&&t.push(e)})),t.sort((function(e,t){return"2"===r.value?e.price-t.price:"3"===r.value?t.price-e.price:void 0})).filter((function(e){return e.title.match(a.value)})))}));return Object(Y["bb"])((function(){d()})),{isLoading:t,addCart:s,productDetail:u,addFavorite:f,filterProduct:b,category:c,filterText:a,selected:r,favoriteData:n}}};G.render=J;t["default"]=G},fce3:function(e,t,c){var r=c("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-a8892ed6.40ea8dcb.js.map