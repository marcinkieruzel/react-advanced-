"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[881],{881:(e,t,n)=>{n.r(t);var r=n(540),a=n(338),o=n(72),l=n.n(o),c=n(825),i=n.n(c),u=n(659),s=n.n(u),m=n(56),f=n.n(m),p=n(159),d=n.n(p),y=n(113),E=n.n(y),b=n(523),v={};v.styleTagTransform=E(),v.setAttributes=f(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),l()(b.A,v),b.A&&b.A.locals&&b.A.locals;var g=n(626),h={};h.styleTagTransform=E(),h.setAttributes=f(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),l()(g.A,h),g.A&&g.A.locals&&g.A.locals;var A=n(976),R=n(648),S=n(662),T=function(e){return e.ADD_TO_CART="ADD_TO_CART",e.REMOVE_FROM_CART="REMOVE_FROM_CART",e.ADD_PROPERTIES="ADD_PROPERTIES",e.RESET_PROPERTIES="RESET_PROPERTIES",e.RESET_CART="RESET_CART",e.CHANGE_CART="CHANGE_CART",e.SORT_PROPERTIES="SORT_PROPERTIES",e}({}),O=n(543);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=C(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==C(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const j=function(e,t){switch(t.type){case T.ADD_PROPERTIES:return(0,S.jM)(e,(function(e){e.properties=t.payload}));case T.RESET_PROPERTIES:return(0,S.jM)(e,(function(e){e.properties=[]}));case T.ADD_TO_CART:return(0,S.jM)(e,(function(e){var n;e.cart=(0,O.uniqBy)([].concat(function(e){if(Array.isArray(e))return N(e)}(n=e.cart)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t.payload]),(function(e){return e.id}))}));case T.REMOVE_FROM_CART:return(0,S.jM)(e,(function(e){e.cart=e.cart.filter((function(e){return e.id!==t.payload.id}))}));case T.RESET_CART:return(0,S.jM)(e,(function(e){e.cart=[]}));case T.SORT_PROPERTIES:return(0,S.jM)(e,(function(e){e.properties=e.properties.sort((function(e,t){var n,r;return(null==e||null===(n=e.fields)||void 0===n?void 0:n.price)-(null==t||null===(r=t.fields)||void 0===r?void 0:r.price)}))}));case T.CHANGE_CART:return e.cart[0].title="Changed title",_(_({},e),{},{cart:e.cart.map((function(e,t){return 0===t?_(_({},e),{},{title:"Changed title"}):e}))})}};var M=n(910);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var D=new(n(7)),k={cart:[],properties:[]},x=r.createContext(k),H=r.createContext((function(){}));const F=function(e){var t,n,a=e.children,o=(t=r.useReducer(j,k),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],c=o[1];return(0,r.useEffect)((function(){console.log("State changed",l)}),[l]),(0,r.useEffect)((function(){return D.on(T.ADD_TO_CART,(function(e){c({type:T.ADD_TO_CART,payload:e})})),function(){D.removeAllListeners()}}),[]),r.createElement(x.Provider,{value:l},r.createElement(H.Provider,{value:c},a))};var L=function(){var e=r.useContext(x);if(void 0===e)throw new Error("useCartContext must be used within a CartProvider");return e},V=function(){var e=r.useContext(H);if(void 0===e)throw new Error("useDispatchCart must be used within a CartProvider");return e},U=((0,M.Mz)([function(e){return e.properties}],(function(e){return e})),(0,M.Mz)([function(e){return e.cart.sort((function(e,t){return e.id-t.id}))}],(function(e){return console.log("Selector called"),e})));const q=function(){var e=V(),t=L().properties,n=(0,R.Ay)("http://localhost:3001/properties",(function(e){return fetch(e).then((function(e){return e.json()}))})),a=n.data,o=n.error;return(0,r.useEffect)((function(){e(a?{type:T.ADD_PROPERTIES,payload:a}:{type:T.RESET_PROPERTIES})}),[a,e]),r.createElement("section",{className:"container"},r.createElement("button",{onClick:function(){e({type:T.SORT_PROPERTIES})}},"Sort"),r.createElement("div",{className:"row"},!a&&!o&&r.createElement("p",null,"Loading..."),o&&r.createElement("p",null,o),(t||[]).map((function(e){return r.createElement("div",{className:"col-4",key:e.id},r.createElement("div",{className:"card"},"string"==typeof e.thumb&&r.createElement("img",{className:"card-img-top",src:e.thumb,alt:"Card image cap"}),r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title"},e.title),r.createElement("p",{className:"card-text",dangerouslySetInnerHTML:{__html:e.excerpt}}),r.createElement(A.N_,{to:"/property/".concat(e.id),className:"btn btn-primary"},"View Property"))))}))))};var z=n(767);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const G=function(e){var t,n,a=e.children,o=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],c=o[1],i=(0,r.useRef)(0),u=function(){var e=L();return console.log("Cart memo data",e),U(e)}(),s=V();return(0,r.useEffect)((function(){i.current++,console.log("Layout rendered",i.current)})),r.createElement("main",null,r.createElement("header",null,r.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},r.createElement("div",{className:"container-fluid"},r.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),r.createElement("button",{onClick:function(){s({type:T.CHANGE_CART})}},"Modify"),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.createElement("ul",{className:"navbar-nav"},r.createElement("li",{className:"nav-item"},r.createElement(A.N_,{className:"nav-link",to:"/"},"Home")),r.createElement("li",{className:"nav-item"},r.createElement(A.N_,{className:"nav-link",to:"/property/83576"},"Default Property")),r.createElement("li",{className:"nav-item"},r.createElement("button",{onClick:function(){s({type:T.RESET_CART})},className:"btn btn-warning"},"RESET CART")),r.createElement("li",{className:"nav-tem"},r.createElement("div",{className:"dropdown"},r.createElement("a",{className:"btn btn-secondary dropdown-toggle",onClick:function(){return c((function(e){return!e}))},role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Cart"),r.createElement("div",{className:"dropdown-menu ".concat(l&&"show"),"aria-labelledby":"dropdownMenuLink"},u.map((function(e){return r.createElement("div",{className:"dropdown-item",key:e.id},e.title,r.createElement("button",{onClick:function(){s({type:T.REMOVE_FROM_CART,payload:e})}},"x"))})))))))))),a)};var $=n(927),Y=n.n($);console.log("Single Property",Y());var K=a.createRoot(document.getElementById("root")),J=function(e){return e.HOME="/",e.PROPERTY="/property/:id",e}(J||{});K.render(r.createElement(F,null,r.createElement(A.Kd,null,r.createElement(G,null,r.createElement(z.BV,null,r.createElement(z.qh,{path:J.HOME,element:r.createElement(q,null)}),r.createElement(z.qh,{path:J.PROPERTY,element:r.createElement(r.Suspense,{fallback:r.createElement("h1",null,"Loading...")})}),r.createElement(z.qh,{path:"*",element:r.createElement("h1",null,"Not Found")}))))))},626:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),l=n.n(o)()(a());l.push([e.id,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""]);const c=l},523:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),l=n.n(o)()(a());l.push([e.id,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",""]);const c=l}}]);