"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[705],{881:(e,t,n)=>{n.r(t);var r=n(318),a=n.n(r),o=n(338),l=n(72),i=n.n(l),c=n(825),u=n.n(c),s=n(659),m=n.n(s),f=n(56),p=n.n(f),d=n(540),y=n.n(d),E=n(113),b=n.n(E),v=n(523),g={};g.styleTagTransform=b(),g.setAttributes=p(),g.insert=m().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=y(),i()(v.A,g),v.A&&v.A.locals&&v.A.locals;var R=n(626),h={};h.styleTagTransform=b(),h.setAttributes=p(),h.insert=m().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=y(),i()(R.A,h),R.A&&R.A.locals&&R.A.locals;var A=n(686),S=n(32),T=n.n(S),O=n(662),C=function(e){return e.ADD_TO_CART="ADD_TO_CART",e.REMOVE_FROM_CART="REMOVE_FROM_CART",e.ADD_PROPERTIES="ADD_PROPERTIES",e.RESET_PROPERTIES="RESET_PROPERTIES",e.RESET_CART="RESET_CART",e.CHANGE_CART="CHANGE_CART",e.SORT_PROPERTIES="SORT_PROPERTIES",e}({}),P=n(501);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=_(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const I=function(e,t){switch(t.type){case C.ADD_PROPERTIES:return(0,O.jM)(e,(function(e){e.properties=t.payload}));case C.RESET_PROPERTIES:return(0,O.jM)(e,(function(e){e.properties=[]}));case C.ADD_TO_CART:return(0,O.jM)(e,(function(e){var n;e.cart=(0,P.uniqBy)([].concat(function(e){if(Array.isArray(e))return M(e)}(n=e.cart)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t.payload]),(function(e){return e.id}))}));case C.REMOVE_FROM_CART:return(0,O.jM)(e,(function(e){e.cart=e.cart.filter((function(e){return e.id!==t.payload.id}))}));case C.RESET_CART:return(0,O.jM)(e,(function(e){e.cart=[]}));case C.SORT_PROPERTIES:return(0,O.jM)(e,(function(e){e.properties=e.properties.sort((function(e,t){var n,r;return(null==e||null===(n=e.fields)||void 0===n?void 0:n.price)-(null==t||null===(r=t.fields)||void 0===r?void 0:r.price)}))}));case C.CHANGE_CART:return e.cart[0].title="Changed title",N(N({},e),{},{cart:e.cart.map((function(e,t){return 0===t?N(N({},e),{},{title:"Changed title"}):e}))})}};var k=n(910);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var x=new(n(652)),L={cart:[],properties:[]},H=a().createContext(L),F=a().createContext((function(){}));const U=function(e){var t,n,o=e.children,l=(t=a().useReducer(I,L),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=l[0],c=l[1];return(0,r.useEffect)((function(){console.log("State changed",i)}),[i]),(0,r.useEffect)((function(){return x.on(C.ADD_TO_CART,(function(e){c({type:C.ADD_TO_CART,payload:e})})),function(){x.removeAllListeners()}}),[]),a().createElement(H.Provider,{value:i},a().createElement(F.Provider,{value:c},o))};var V=function(){var e=a().useContext(H);if(void 0===e)throw new Error("useCartContext must be used within a CartProvider");return e},z=function(){var e=a().useContext(F);if(void 0===e)throw new Error("useDispatchCart must be used within a CartProvider");return e},B=((0,k.Mz)([function(e){return e.properties}],(function(e){return e})),(0,k.Mz)([function(e){return e.cart.sort((function(e,t){return e.id-t.id}))}],(function(e){return console.log("Selector called"),e})));const G=function(){var e=z(),t=V().properties,n=T()("http://localhost:3001/properties",(function(e){return fetch(e).then((function(e){return e.json()}))})),o=n.data,l=n.error;return(0,r.useEffect)((function(){e(o?{type:C.ADD_PROPERTIES,payload:o}:{type:C.RESET_PROPERTIES})}),[o,e]),a().createElement("section",{className:"container"},a().createElement("button",{onClick:function(){e({type:C.SORT_PROPERTIES})}},"Sort"),a().createElement("div",{className:"row"},!o&&!l&&a().createElement("p",null,"Loading..."),l&&a().createElement("p",null,l),(t||[]).map((function(e){return a().createElement("div",{className:"col-4",key:e.id},a().createElement("div",{className:"card"},"string"==typeof e.thumb&&a().createElement("img",{className:"card-img-top",src:e.thumb,alt:"Card image cap"}),a().createElement("div",{className:"card-body"},a().createElement("h5",{className:"card-title"},e.title),a().createElement("p",{className:"card-text",dangerouslySetInnerHTML:{__html:e.excerpt}}),a().createElement(A.Link,{to:"/property/".concat(e.id),className:"btn btn-primary"},"View Property"))))}))))};function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const Y=function(e){var t,n,o=e.children,l=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=l[0],c=l[1],u=(0,r.useRef)(0),s=function(){var e=V();return console.log("Cart memo data",e),B(e)}(),m=z();return(0,r.useEffect)((function(){u.current++,console.log("Layout rendered",u.current)})),a().createElement("main",null,a().createElement("header",null,a().createElement("nav",{className:"navbar navbar-expand-lg bg-light"},a().createElement("div",{className:"container-fluid"},a().createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),a().createElement("button",{onClick:function(){m({type:C.CHANGE_CART})}},"Modify"),a().createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},a().createElement("span",{className:"navbar-toggler-icon"})),a().createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},a().createElement("ul",{className:"navbar-nav"},a().createElement("li",{className:"nav-item"},a().createElement(A.Link,{className:"nav-link",to:"/"},"Home")),a().createElement("li",{className:"nav-item"},a().createElement(A.Link,{className:"nav-link",to:"/property/83576"},"Default Property")),a().createElement("li",{className:"nav-item"},a().createElement("button",{onClick:function(){m({type:C.RESET_CART})},className:"btn btn-warning"},"RESET CART")),a().createElement("li",{className:"nav-tem"},a().createElement("div",{className:"dropdown"},a().createElement("a",{className:"btn btn-secondary dropdown-toggle",onClick:function(){return c((function(e){return!e}))},role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Cart"),a().createElement("div",{className:"dropdown-menu ".concat(i&&"show"),"aria-labelledby":"dropdownMenuLink"},s.map((function(e){return a().createElement("div",{className:"dropdown-item",key:e.id},e.title,a().createElement("button",{onClick:function(){m({type:C.REMOVE_FROM_CART,payload:e})}},"x"))})))))))))),o)};var q=o.createRoot(document.getElementById("root")),J=function(e){return e.HOME="/",e.PROPERTY="/property/:id",e}(J||{});q.render(a().createElement(U,null,a().createElement(A.BrowserRouter,null,a().createElement(Y,null,a().createElement(A.Routes,null,a().createElement(A.Route,{path:J.HOME,element:a().createElement(G,null)}),a().createElement(A.Route,{path:J.PROPERTY,element:a().createElement(r.Suspense,{fallback:a().createElement("h1",null,"Loading...")})}),a().createElement(A.Route,{path:"*",element:a().createElement("h1",null,"Not Found")}))))))},626:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),l=n.n(o)()(a());l.push([e.id,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""]);const i=l},523:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),l=n.n(o)()(a());l.push([e.id,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",""]);const i=l}}]);