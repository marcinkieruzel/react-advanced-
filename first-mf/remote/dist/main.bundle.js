(()=>{"use strict";var e,r,t={138:(e,r,t)=>{const n=t(883).faker.person.fullName();document.createElement("h2").innerText="Hello From Remote! "+n}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,o.c=n,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="shell:",o.l=(t,n,a,i)=>{if(e[t])e[t].push(n);else{var u,l;if(void 0!==a)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var p=f[s];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+a){u=p;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",r+a),u.src=t),e[t]=[n];var c=(r,n)=>{u.onerror=u.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=c.bind(null,u.onerror),u.onload=c.bind(null,u.onload),l&&document.head.appendChild(u)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var i=o.S[t],u="shell",l=[];return"default"===t&&((e,r,t,n)=>{var a=i[e]=i[e]||{},l=a[r];(!l||!l.loaded&&(1!=!l.eager?n:u>l.from))&&(a[r]={get:()=>o.e(541).then((()=>()=>o(541))),from:u,eager:!1})})("@faker-js/faker","8.2.0"),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():r(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var f,s,p=u<r.length?(typeof r[u])[0]:"";if(i>=n.length||"o"==(s=(typeof(f=n[i]))[0]))return!l||("u"==p?u>o&&!a:""==p!=a);if("u"==s){if(!l||"u"!=p)return!1}else if(l)if(p==s)if(u<=o){if(f!=r[u])return!1}else{if(a?f>r[u]:f<r[u])return!1;f!=r[u]&&(l=!1)}else if("s"!=p&&"n"!=p){if(a||u<=o)return!1;l=!1,u--}else{if(u<=o||s<p!=a)return!1;l=!1}else"s"!=p&&"n"!=p&&(l=!1,u--)}}var c=[],d=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?d()|d():2==h?d()&d():h?t(h,n):!d())}return!!d()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},a=(e,o,a,l)=>{var f=n(e,a);return t(l,f)||i(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,a,f,l)),u(e[a][f])},i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,n,a){var i=o.I(r);return i&&i.then?i.then(e.bind(e,r,o.S[r],t,n,a)):e(r,o.S[r],t,n,a)})(((e,r,t,n,i)=>r&&o.o(r,t)?a(r,0,t,n):i())),f={},s={883:()=>l("default","@faker-js/faker",[2,8,2],(()=>o.e(541).then((()=>()=>o(541)))))};[883].forEach((e=>{o.m[e]=r=>{f[e]=0,delete o.c[e];var t=s[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var p={};o.f.consumes=(e,r)=>{o.o(p,e)&&p[e].forEach((e=>{if(o.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,o.m[e]=t=>{delete o.c[e],t.exports=r()}},n=r=>{delete f[e],o.m[e]=t=>{throw delete o.c[e],r}};try{var a=s[e]();a.then?r.push(f[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{var e={179:0,138:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=a);var i=o.p+o.u(r),u=new Error;o.l(i,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[i,u,l]=t,f=0;if(i.some((r=>0!==e[r]))){for(n in u)o.o(u,n)&&(o.m[n]=u[n]);l&&l(o)}for(r&&r(t);f<i.length;f++)a=i[f],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkshell=self.webpackChunkshell||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o(138)})();