/*! For license information please see 648.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[648],{63:(e,t,n)=>{var r=n(783),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,a=r.useEffect,s=r.useLayoutEffect,u=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return s((function(){o.value=n,o.getSnapshot=t,c(o)&&l({inst:o})}),[e,n,t]),a((function(){return c(o)&&l({inst:o}),e((function(){c(o)&&l({inst:o})}))}),[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},888:(e,t,n)=>{e.exports=n(63)},267:(e,t,n)=>{n.r(t),n.d(t,{SWRConfig:()=>Q,default:()=>X,mutate:()=>A,preload:()=>z,unstable_serialize:()=>B,useSWRConfig:()=>U});var r=n(187),o=n(888);const i=()=>{},a=i(),s=Object,u=e=>e===a,c=e=>"function"==typeof e,l=(e,t)=>({...e,...t}),d=new WeakMap;let f=0;const g=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(s(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=d.get(e),o)return o;if(o=++f+"~",d.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=g(e[i])+",";d.set(e,o)}if(n==s){o="#";const t=s.keys(e).sort();for(;!u(i=t.pop());)u(e[i])||(o+=i+":"+g(e[i])+",");d.set(e,o)}}return o},v=new WeakMap,h={},p={},w="undefined",y=typeof window!=w,m=typeof document!=w,b=(e,t)=>{const n=v.get(e);return[()=>!u(t)&&e.get(t)||h,r=>{if(!u(t)){const o=e.get(t);t in p||(p[t]=o),n[5](t,l(o,r),o||h)}},n[6],()=>!u(t)&&t in p?p[t]:!u(t)&&e.get(t)||h]};let S=!0;const[E,_]=y&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],O={isOnline:()=>S,isVisible:()=>{const e=m&&document.visibilityState;return u(e)||"hidden"!==e}},R={initFocus:e=>(m&&document.addEventListener("visibilitychange",e),E("focus",e),()=>{m&&document.removeEventListener("visibilitychange",e),_("focus",e)}),initReconnect:e=>{const t=()=>{S=!0,e()},n=()=>{S=!1};return E("online",t),E("offline",n),()=>{_("online",t),_("offline",n)}}},k=!r.useId,L=!y||"Deno"in window,T=L?r.useEffect:r.useLayoutEffect,V="undefined"!=typeof navigator&&navigator.connection,C=!L&&V&&(["slow-2g","2g"].includes(V.effectiveType)||V.saveData),D=e=>{if(c(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t]};let x=0;const I=()=>++x;async function P(...e){const[t,n,r,o]=e,i=l({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{});let s=i.populateCache;const d=i.rollbackOnError;let f=i.optimisticData;const g=i.throwOnError;if(c(n)){const e=n,r=[],o=t.keys();for(const n of o)!/^\$(inf|sub)\$/.test(n)&&e(t.get(n)._k)&&r.push(n);return Promise.all(r.map(h))}return h(n);async function h(n){const[o]=D(n);if(!o)return;const[l,h]=b(t,o),[p,w,y,m]=v.get(t),S=()=>{const e=p[o];return(c(i.revalidate)?i.revalidate(l().data,n):!1!==i.revalidate)&&(delete y[o],delete m[o],e&&e[0])?e[0](2).then((()=>l().data)):l().data};if(e.length<3)return S();let E,_=r;const O=I();w[o]=[O,0];const R=!u(f),k=l(),L=k.data,T=k._c,V=u(T)?L:T;if(R&&(f=c(f)?f(V,L):f,h({data:f,_c:V})),c(_))try{_=_(V)}catch(e){E=e}if(_&&c(_.then)){if(_=await _.catch((e=>{E=e})),O!==w[o][0]){if(E)throw E;return _}E&&R&&(e=>"function"==typeof d?d(e):!1!==d)(E)&&(s=!0,h({data:V,_c:a}))}if(s&&!E)if(c(s)){const e=s(_,V);h({data:e,error:a,_c:a})}else h({data:_,error:a,_c:a});if(w[o][1]=I(),Promise.resolve(S()).then((()=>{h({_c:a})})),!E)return _;if(g)throw E}}const W=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},F=(e,t)=>{if(!v.has(e)){const n=l(R,t),r={},o=P.bind(a,e);let s=i;const u={},c=(e,t)=>{const n=u[e]||[];return u[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,r)=>{e.set(t,n);const o=u[t];if(o)for(const e of o)e(n,r)},f=()=>{if(!v.has(e)&&(v.set(e,[r,{},{},{},o,d,c]),!L)){const t=n.initFocus(setTimeout.bind(a,W.bind(a,r,0))),o=n.initReconnect(setTimeout.bind(a,W.bind(a,r,1)));s=()=>{t&&t(),o&&o(),v.delete(e)}}};return f(),[e,o,f,s]}return[e,v.get(e)[4]]},[M,A]=F(new Map),j=l({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!u(i)&&a>i||setTimeout(r,s,o)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:(e,t)=>g(e)==g(t),isPaused:()=>!1,cache:M,mutate:A,fallback:{}},O),$=(e,t)=>{const n=l(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=l(o,a))}return n},q=(0,r.createContext)({}),J=y&&window.__SWR_DEVTOOLS_USE__,N=J?window.__SWR_DEVTOOLS_USE__:[],U=()=>l(j,(0,r.useContext)(q)),z=(e,t)=>{const[n,r]=D(e),[,,,o]=v.get(M);if(o[n])return o[n];const i=t(r);return o[n]=i,i},H=N.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const[r]=D(t),[,,,o]=v.get(M);if(r.startsWith("$inf$"))return n(...e);const i=o[r];return u(i)?n(...e):(delete o[r],i)}),r)));J&&(window.__SWR_DEVTOOLS_REACT__=r);const B=e=>D(e)[0],G=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),K={dedupe:!0},Q=s.defineProperty((e=>{const{value:t}=e,n=(0,r.useContext)(q),o=c(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),s=(0,r.useMemo)((()=>o?i:$(n,i)),[o,n,i]),u=i&&i.provider,d=(0,r.useRef)(a);u&&!d.current&&(d.current=F(u(s.cache||M),i));const f=d.current;return f&&(s.cache=f[0],s.mutate=f[1]),T((()=>{if(f)return f[2]&&f[2](),f[3]}),[]),(0,r.createElement)(q.Provider,l(e,{value:s}))}),"defaultValue",{value:j}),X=(Y=(e,t,n)=>{const{cache:i,compare:s,suspense:d,fallbackData:f,revalidateOnMount:g,revalidateIfStale:h,refreshInterval:p,refreshWhenHidden:m,refreshWhenOffline:S,keepPreviousData:E}=n,[_,O,R,V]=v.get(i),[C,x]=D(e),W=(0,r.useRef)(!1),F=(0,r.useRef)(!1),M=(0,r.useRef)(C),A=(0,r.useRef)(t),j=(0,r.useRef)(n),$=()=>j.current,q=()=>$().isVisible()&&$().isOnline(),[J,N,U,z]=b(i,C),H=(0,r.useRef)({}).current,B=u(f)?n.fallback[C]:f,Q=(e,t)=>{for(const n in H){const r=n;if("data"===r){if(!s(e[r],t[r])){if(!u(e[r]))return!1;if(!s(ie,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},X=(0,r.useMemo)((()=>{const e=!!C&&!!t&&(u(g)?!$().isPaused()&&!d&&(!!u(h)||h):g),n=t=>{const n=l(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=J(),o=z(),i=n(r),a=r===o?i:n(o);let s=i;return[()=>{const e=n(J());return Q(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>a]}),[i,C]),Y=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>U(C,((t,n)=>{Q(n,t)||e()}))),[i,C]),X[0],X[1]),Z=!W.current,ee=_[C]&&_[C].length>0,te=Y.data,ne=u(te)?B:te,re=Y.error,oe=(0,r.useRef)(ne),ie=E?u(te)?oe.current:te:ne,ae=!(ee&&!u(re))&&(Z&&!u(g)?g:!$().isPaused()&&(d?!u(ne)&&h:u(ne)||h)),se=!!(C&&t&&Z&&ae),ue=u(Y.isValidating)?se:Y.isValidating,ce=u(Y.isLoading)?se:Y.isLoading,le=(0,r.useCallback)((async e=>{const t=A.current;if(!C||!t||F.current||$().isPaused())return!1;let r,o,i=!0;const l=e||{},d=!R[C]||!l.dedupe,f=()=>k?!F.current&&C===M.current&&W.current:C===M.current,g={isValidating:!1,isLoading:!1},v=()=>{N(g)},h=()=>{const e=R[C];e&&e[1]===o&&delete R[C]},p={isValidating:!0};u(J().data)&&(p.isLoading=!0);try{if(d&&(N(p),n.loadingTimeout&&u(J().data)&&setTimeout((()=>{i&&f()&&$().onLoadingSlow(C,n)}),n.loadingTimeout),R[C]=[t(x),I()]),[r,o]=R[C],r=await r,d&&setTimeout(h,n.dedupingInterval),!R[C]||R[C][1]!==o)return d&&f()&&$().onDiscarded(C),!1;g.error=a;const e=O[C];if(!u(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return v(),d&&f()&&$().onDiscarded(C),!1;const c=J().data;g.data=s(c,r)?c:r,d&&f()&&$().onSuccess(r,C,n)}catch(e){h();const t=$(),{shouldRetryOnError:n}=t;t.isPaused()||(g.error=e,d&&f()&&(t.onError(e,C,t),(!0===n||c(n)&&n(e))&&($().revalidateOnFocus&&$().revalidateOnReconnect&&!q()||t.onErrorRetry(e,C,t,(e=>{const t=_[C];t&&t[0]&&t[0](3,e)}),{retryCount:(l.retryCount||0)+1,dedupe:!0}))))}return i=!1,v(),!0}),[C,i]),de=(0,r.useCallback)(((...e)=>P(i,M.current,...e)),[]);if(T((()=>{A.current=t,j.current=n,u(te)||(oe.current=te)})),T((()=>{if(!C)return;const e=le.bind(a,K);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(C,_,((n,r={})=>{if(0==n){const n=Date.now();$().revalidateOnFocus&&n>t&&q()&&(t=n+$().focusThrottleInterval,e())}else if(1==n)$().revalidateOnReconnect&&q()&&e();else{if(2==n)return le();if(3==n)return le(r)}}));return F.current=!1,M.current=C,W.current=!0,N({_k:x}),ae&&(u(ne)||L?e():(r=e,y&&typeof window.requestAnimationFrame!=w?window.requestAnimationFrame(r):setTimeout(r,1))),()=>{F.current=!0,n()};var r}),[C]),T((()=>{let e;function t(){const t=c(p)?p(J().data):p;t&&-1!==e&&(e=setTimeout(n,t))}function n(){J().error||!m&&!$().isVisible()||!S&&!$().isOnline()?t():le(K).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[p,m,S,C]),(0,r.useDebugValue)(ie),d&&u(ne)&&C){if(!k&&L)throw new Error("Fallback data is required when using suspense in SSR.");A.current=t,j.current=n,F.current=!1;const e=V[C];if(!u(e)){const t=de(e);G(t)}if(!u(re))throw re;{const e=le(K);u(ie)||(e.status="fulfilled",e.value=!0),G(e)}}return{mutate:de,get data(){return H.data=!0,ie},get error(){return H.error=!0,re},get isValidating(){return H.isValidating=!0,ue},get isLoading(){return H.isLoading=!0,ce}}},function(...e){const t=U(),[n,r,o]=(e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}])(e),i=$(t,o);let a=Y;const{use:s}=i,u=(s||[]).concat(H);for(let e=u.length;e--;)a=u[e](a);return a(n,r||i.fetcher||null,i)});var Y}}]);