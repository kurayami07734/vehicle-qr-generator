var B=Object.defineProperty;var G=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function z(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function st(){return Object.create(null)}function R(t){t.forEach(I)}function lt(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ut(t){return Object.keys(t).length===0}function W(t,...e){if(t==null){for(const i of e)i(void 0);return z}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(W(e,n))}function ft(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)o[c]=e.dirty[c]|r[c];return o}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,o){if(r){const s=L(e,n,i,o);t.p(s,r)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function pt(t,e,n){return t.set(n),e}let y=!1;function yt(){y=!0}function gt(){y=!1}function J(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:J(1,r,q=>e[n[q]].claim_order,u))-1;i[l]=n[a]+1;const T=a+1;n[T]=l,r=Math.max(T,r)}const o=[],s=[];let c=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<o.length&&s[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(s[l],a)}}function Q(t,e){if(y){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){y&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function bt(){return w(" ")}function xt(){return w("")}function vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function P(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const X=["width","height"];function Et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?t[i]=e[i]:P(t,i,e[i])}function wt(t,e){for(const n in e)P(t,n,e[n])}function Tt(t){return t.dataset.svelteH}function Nt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,r=!1){S(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,i){return C(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function At(t,e,n){return O(t,e,n,j)}function kt(t,e,n){return O(t,e,n,H)}function Y(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function Mt(t){return Y(t," ")}function N(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return-1}function Lt(t,e){const n=N(t,"HTML_TAG_START",0),i=N(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new A(e);S(t);const r=t.splice(n,i-n+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(e,o)}function jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Z(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class ${constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=j(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class A extends ${constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function Pt(t,e){return new t(e)}let p;function b(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){g().$$.on_mount.push(t)}function Ct(t){g().$$.after_update.push(t)}function Ot(t){g().$$.on_destroy.push(t)}function Dt(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=Z(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],k=[];let h=[];const M=[],D=Promise.resolve();let E=!1;function tt(){E||(E=!0,D.then(nt))}function qt(){return tt(),D}function et(t){h.push(t)}const x=new Set;let _=0;function nt(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,b(e),it(e.$$)}}catch(e){throw d.length=0,_=0,e}for(b(null),d.length=0,_=0;k.length;)k.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(d.length);for(;M.length;)M.pop()();E=!1,x.clear(),b(t)}function it(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}function Bt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{gt as $,at as A,Ot as B,F as C,mt as D,Et as E,H as F,kt as G,A as H,Lt as I,wt as J,Dt as K,vt as L,pt as M,ot as N,R as O,st as P,nt as Q,lt as R,ut as S,et as T,Bt as U,p as V,b as W,I as X,d as Y,tt as Z,yt as _,bt as a,Ct as b,Mt as c,v as d,xt as e,j as f,At as g,Nt as h,V as i,P as j,Ht as k,w as l,Y as m,jt as n,St as o,k as p,Pt as q,ft as r,ct as s,qt as t,Tt as u,ht as v,dt as w,_t as x,Q as y,z};
