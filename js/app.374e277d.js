(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"05d36ea5"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"cad88a24"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"10ad":function(e,t,n){},4143:function(e,t,n){},"4e6c":function(e,t,n){"use strict";n("10ad")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},a=[],i=(n("034f"),n("2877")),c={},u=Object(i["a"])(c,o,a,!1,null,null,null),s=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("welcome")],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mainpage",attrs:{id:"mainpage"}},[n("vue-canvas-nest",{attrs:{config:{color:"159,239,0",count:200,opacity:1,zindex:0}}}),n("div",{staticClass:"welcome-section content-hidden"},[e._m(0),n("div",{staticClass:"enter-button",attrs:{id:"enter"},on:{click:e.delay}},[e._v("ENTER")])])],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-wrap"},[n("ul",{staticClass:"fly-in-hello"},[n("li",{staticClass:"hello-h"},[e._v("H")]),n("li",[e._v("E")]),n("li",[e._v("L")]),n("li",[e._v("L")]),n("li",[e._v("O")]),n("li",{staticClass:"extraspace"},[e._v(" ")])]),n("ul",{staticClass:"fly-in-there"},[n("li",[e._v("T")]),n("li",[e._v("H")]),n("li",[e._v("E")]),n("li",[e._v("R")]),n("li",[e._v("E")]),n("li",[e._v("!")])])])}],v=n("1157"),h=n.n(v),b=n("429a"),g=n.n(b),_={components:{vueCanvasNest:g.a},methods:{delay:function(){var e=this,t=h()(".welcome-section");t.addClass("content-hidden"),setTimeout((function(){return e.$router.push({path:"/Portfolio"})}),2e3)}},mounted:function(){h()((function(){var e=h()(".welcome-section");setTimeout((function(){e.removeClass("content-hidden")}),500)}))}},y=_,w=(n("a451"),Object(i["a"])(y,p,m,!1,null,"19d9631d",null)),E=w.exports,C={name:"Home",components:{welcome:E}},O=C,j=Object(i["a"])(O,f,d,!1,null,null,null),P=j.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("Page Not Found")]),r("img",{attrs:{src:n("88e0"),alt:"404"}}),r("a",{attrs:{href:"/Portfolio"}},[e._v("Go Home")])])}],k={},S=k,N=(n("a208"),n("4e6c"),Object(i["a"])(S,x,T,!1,null,"0a397fa1",null)),$=N.exports;r["a"].use(l["a"]);var L=[{path:"/",name:"Home",component:P},{path:"/Portfolio",name:"Portfolio",component:function(){return n.e("about").then(n.bind(null,"c9e5"))}},{path:"/*",name:"Error",component:$}],A=new l["a"]({mode:"history",base:"",routes:L}),H=A;r["a"].config.productionTip=!1,new r["a"]({router:H,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},"88e0":function(e,t,n){e.exports=n.p+"img/Error.7634680d.svg"},a208:function(e,t,n){"use strict";n("4143")},a451:function(e,t,n){"use strict";n("ba44")},ba44:function(e,t,n){}});
//# sourceMappingURL=app.374e277d.js.map