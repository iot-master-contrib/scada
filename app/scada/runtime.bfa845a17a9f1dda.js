(()=>{"use strict";var e,v={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={exports:{}};return v[e].call(t.exports,t,t.exports,r),t.exports}r.m=v,e=[],r.O=(n,t,f,i)=>{if(!t){var a=1/0;for(o=0;o<e.length;o++){for(var[t,f,i]=e[o],s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every(b=>r.O[b](t[c]))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(o--,1);var u=f();void 0!==u&&(n=u)}}return n}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[t,f,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var o={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>o[s]=()=>t[s]);return o.default=()=>t,r.d(i,o),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{16:"ab9dff24a7633f2f",287:"9bd56e69623e69fd",766:"1bfd9b79bb3478eb",988:"e63650193568f223"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="scada:";r.l=(t,f,i,o)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[f];var l=(_,b)=>{a.onerror=a.onload=null,clearTimeout(p);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(m=>m(b)),_)return _(b)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,i)=>{var o=r.o(e,f)?e[f]:void 0;if(0!==o)if(o)i.push(o[2]);else if(666!=f){var a=new Promise((d,l)=>o=e[f]=[d,l]);i.push(o[2]=a);var s=r.p+r.u(f),c=new Error;r.l(s,d=>{if(r.o(e,f)&&(0!==(o=e[f])&&(e[f]=void 0),o)){var l=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;c.message="Loading chunk "+f+" failed.\n("+l+": "+p+")",c.name="ChunkLoadError",c.type=l,c.request=p,o[1](c)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,i)=>{var c,u,[o,a,s]=i,d=0;if(o.some(p=>0!==e[p])){for(c in a)r.o(a,c)&&(r.m[c]=a[c]);if(s)var l=s(r)}for(f&&f(i);d<o.length;d++)r.o(e,u=o[d])&&e[u]&&e[u][0](),e[u]=0;return r.O(l)},t=self.webpackChunkscada=self.webpackChunkscada||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();