(function(e){function n(n){for(var r,u,a=n[0],i=n[1],f=n[2],d=0,p=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(n);while(p.length)p.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"fae3e7be","chunk-2d0b722f":"892eae67","chunk-2d2086b7":"fe1f27b5","chunk-2d2102cc":"f938a43b","chunk-2d21a3d2":"56a114da","chunk-2d21e30b":"6deacff0","chunk-2d2261a6":"ecc51e0c","chunk-39f8fae0":"bb6ad8ca"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var f=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var b=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0168":function(e,n,t){"use strict";t("1f7c")},"1f7c":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("159b"),t("b64b");var r=t("7a23"),o=(t("7b17"),t("bc3a")),c=t.n(o),u=t("130e"),a=t("8a14"),i=(t("fe26"),t("7bb1")),f=t("3aa8"),d=t("cbdf"),b=t("9457");function p(e,n){var t=Object(r["E"])("router-view");return Object(r["x"])(),Object(r["e"])(t)}t("0168");var l=t("6b0d"),s=t.n(l);const h={},m=s()(h,[["render",p]]);var v=m,y=(t("3ca3"),t("ddb0"),t("6c02")),O=[{path:"/",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))}},{path:"products",name:"產品列表",component:function(){return t.e("chunk-2d2261a6").then(t.bind(null,"e6dc"))}},{path:"cart",name:"購物車",component:function(){return t.e("chunk-2d2102cc").then(t.bind(null,"b789"))}}]},{path:"/login",component:function(){return t.e("chunk-2d2086b7").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-39f8fae0").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return t.e("chunk-2d0b722f").then(t.bind(null,"1fae"))}}]},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],g=Object(y["a"])({history:Object(y["b"])(),routes:O}),j=g;Object.keys(f["a"]).forEach((function(e){Object(i["e"])(e,f["a"][e])})),Object(i["d"])({generateMessage:Object(d["a"])({zh_TW:b}),validateOnInput:!0}),Object(d["b"])("zh_TW"),Object(r["d"])(v).use(j).use(u["a"],c.a).component("Loading",a["a"]).component("Form",i["c"]).component("Field",i["b"]).component("ErrorMessage",i["a"]).mount("#app")}});
//# sourceMappingURL=app.6e56705e.js.map