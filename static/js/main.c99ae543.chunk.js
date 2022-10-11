(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{108:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(14),o=t.n(c),i=t(16),u=t(25),s=t(22),l=(t(75),t(87),t(88),t(20)),d=t(21),f=(t(89),t(57)),p=t.n(f);function b(){var n=Object(l.a)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer\n  }\n"]);return b=function(){return n},n}var m=Object(d.a)(b(),p.a),v=t(18),g=t(42);function E(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &hover {\n    opacity: 0.7;\n  }\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return E=function(){return n},n}function h(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n"]);return h=function(){return n},n}var w=d.b.header(h()),O=Object(d.b)(v.a)(E()),x=t(61),j=t.n(x);function k(){var n=Object(u.c)(function(n){return n.cart.length});return a.a.createElement(w,null,a.a.createElement(v.a,{to:"/"},a.a.createElement("img",{src:j.a,alt:"RocketShoes"})),a.a.createElement(O,{to:"/cart"},a.a.createElement("div",null,a.a.createElement("strong",null,"Meu carrinho"),a.a.createElement("span",null,n," itens")),a.a.createElement(g.e,{size:36,color:"#fff"})))}var y=a.a.lazy(function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,207))}),S=a.a.lazy(function(){return Promise.all([t.e(0),t.e(4),t.e(5)]).then(t.bind(null,206))});function R(){return a.a.createElement(i.c,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(i.a,{path:"/",exact:!0,component:a.a.createElement(y,null)}),a.a.createElement(i.a,{path:"/cart",exact:!0,component:a.a.createElement(S,null)})))}var U=t(8),A=Object(U.a)(),T=t(12),_=t(63),C=t(29);var D=Object(T.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"@cart/ADD_SUCCESS":return Object(C.a)(n,function(n){var t=e.product;n.push(t)});case"@cart/REMOVE":return Object(C.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&n.splice(t,1)});case"@cart/UPDATE_AMOUNT_SUCCESS":return Object(C.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&(n[t].amount=Number(e.amount))});case"@cart/RESET":return[];default:return n}}}),P=t(15),W=t.n(P),N=t(9),L=t(43),M=t(28),I=t(41),Q=t(27),z=W.a.mark(V),B=W.a.mark(q);function V(n){var e,t,r,a,c,o,i,u;return W.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return e=n.id,l.next=3,Object(N.select)(function(n){return n.cart.find(function(n){return n.id===e})});case 3:return t=l.sent,l.next=6,Object(N.call)(M.a.get,"/stock/".concat(e));case 6:if(r=l.sent,a=r.data.amount,c=t?t.amount:0,!((o=c+1)>a)){l.next=13;break}return s.b.error("Quantidade solicitada fora de estoque"),l.abrupt("return");case 13:if(!t){l.next=18;break}return l.next=16,Object(N.put)(Object(Q.f)(e,o));case 16:l.next=25;break;case 18:return l.next=20,Object(N.call)(M.a.get,"/products/".concat(e));case 20:return i=l.sent,u=Object(L.a)({},i.data,{amount:1,priceFormatted:Object(I.a)(i.data.price)}),l.next=24,Object(N.put)(Object(Q.b)(u));case 24:A.push("/cart");case 25:case"end":return l.stop()}},z)}function q(n){var e,t,r,a;return W.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(e=n.id,!((t=n.amount)<=0)){c.next=3;break}return c.abrupt("return");case 3:return c.next=5,Object(N.call)(M.a.get,"/stock/".concat(e));case 5:if(r=c.sent,a=r.data.amount,!(t>a)){c.next=10;break}return s.b.error("Quantidade solicitada fora de estoque"),c.abrupt("return");case 10:return c.next=12,Object(N.put)(Object(Q.f)(e,t));case 12:case"end":return c.stop()}},B)}var F=Object(N.all)([Object(N.takeLatest)("@cart/ADD_REQUEST",V),Object(N.takeLatest)("@cart/UPDATE_AMOUNT_REQUEST",q)]),J=W.a.mark($);function $(){return W.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.all)([F]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},J)}var G=Object(_.a)({sagaMonitor:null}),H=Object(T.a)(G),K=Object(T.e)(D,H);G.run($);var X=K;var Y=function(){return a.a.createElement(u.a,{store:X},a.a.createElement(i.b,{history:A},a.a.createElement(k,null),a.a.createElement(R,null),a.a.createElement(m,null),a.a.createElement(s.a,{autoClose:3e3})))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function nn(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}o.a.render(a.a.createElement(Y,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/RocketShoes-Web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/RocketShoes-Web","/service-worker.js");Z?(function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):nn(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):nn(e,n)})}}()},27:function(n,e,t){"use strict";function r(n){return{type:"@cart/ADD_REQUEST",id:n}}function a(n){return{type:"@cart/ADD_SUCCESS",product:n}}function c(n){return{type:"@cart/REMOVE",id:n}}function o(n,e){return{type:"@cart/UPDATE_AMOUNT_REQUEST",id:n,amount:e}}function i(n,e){return{type:"@cart/UPDATE_AMOUNT_SUCCESS",id:n,amount:e}}function u(){return{type:"@cart/RESET"}}t.d(e,"a",function(){return r}),t.d(e,"b",function(){return a}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return o}),t.d(e,"f",function(){return i}),t.d(e,"d",function(){return u})},28:function(n,e,t){"use strict";var r=t(62),a=t.n(r).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/RocketShoes-Web"}).REACT_APP_API});e.a=a},41:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format},57:function(n,e,t){n.exports=t.p+"static/media/background.e2a67d05.svg"},61:function(n,e,t){n.exports=t.p+"static/media/logo.b89c2555.svg"},66:function(n,e,t){n.exports=t(108)}},[[66,2,3]]]);
//# sourceMappingURL=main.c99ae543.chunk.js.map