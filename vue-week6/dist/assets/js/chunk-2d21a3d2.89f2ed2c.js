(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,a,n){"use strict";n.r(a);var e=n("7a23"),c={class:"home"},r=Object(e["h"])("div",{class:"container"},[Object(e["h"])("div",{id:"nav"})],-1);function i(t,a,n,i,s,o){var b=Object(e["G"])("Navbar"),l=Object(e["G"])("router-view");return Object(e["y"])(),Object(e["g"])("div",null,[Object(e["h"])("div",c,[Object(e["j"])(b),r]),Object(e["j"])(l)])}var s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},o={class:"container-fluid"},b=Object(e["h"])("a",{class:"navbar-brand",href:"#"},"前台",-1),l=Object(e["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(e["h"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},v={class:"navbar-nav"},d=Object(e["i"])("首頁"),j=Object(e["i"])("產品列表"),O={class:"navbar-nav ms-auto"},f=Object(e["i"])(" 購物車 "),h={class:"cart-quantity"},g=Object(e["i"])("後台管理");function p(t,a,n,c,r,i){var p=Object(e["G"])("router-link");return Object(e["y"])(),Object(e["g"])("div",null,[Object(e["h"])("nav",s,[Object(e["h"])("div",o,[b,l,Object(e["h"])("div",u,[Object(e["h"])("ul",v,[Object(e["j"])(p,{class:"nav-link",to:"/"},{default:Object(e["R"])((function(){return[d]})),_:1}),Object(e["j"])(p,{class:"nav-link",to:"products"},{default:Object(e["R"])((function(){return[j]})),_:1})]),Object(e["h"])("ul",O,[Object(e["j"])(p,{class:"nav-link",to:"cart"},{default:Object(e["R"])((function(){return[f,Object(e["h"])("span",h,Object(e["J"])(r.cart.carts.length),1)]})),_:1}),Object(e["j"])(p,{class:"nav-link",to:"/admin/products"},{default:Object(e["R"])((function(){return[g]})),_:1})])])])])])}n("99af");var m={data:function(){return{cart:{carts:[]}}},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("jemmanine","/cart");this.$http.get(a).then((function(a){t.cart=a.data.data,t.isLoading=!1})).catch((function(t){alert(t.data.message)}))}},mounted:function(){this.getCart()}},k=n("6b0d"),w=n.n(k);const N=w()(m,[["render",p]]);var x=N,y=function(t){return{all:t=t||new Map,on:function(a,n){var e=t.get(a);e?e.push(n):t.set(a,[n])},off:function(a,n){var e=t.get(a);e&&(n?e.splice(e.indexOf(n)>>>0,1):t.set(a,[]))},emit:function(a,n){var e=t.get(a);e&&e.slice().map((function(t){t(n)})),(e=t.get("*"))&&e.slice().map((function(t){t(a,n)}))}}},R=y(),_=R,G={name:"Home",data:function(){return{}},components:{Navbar:x,emitter:_}};const J=w()(G,[["render",i]]);a["default"]=J}}]);
//# sourceMappingURL=chunk-2d21a3d2.89f2ed2c.js.map