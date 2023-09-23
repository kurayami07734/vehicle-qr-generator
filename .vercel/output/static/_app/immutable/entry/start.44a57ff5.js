import{o as we,t as _e}from"../chunks/scheduler.c40b2f4b.js";import{S as Ge,a as Ke,I as M,g as Ce,f as Me,b as ye,c as le,s as ee,i as ve,d as F,e as K,P as Ve,h as Xe}from"../chunks/singletons.593b1054.js";import{R as qe,H as te}from"../chunks/control.f5b05b5f.js";function Ze(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Qe(n){return n.split("%25").map(decodeURI).join("%25")}function et(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(n,o){const u=new URL(n);for(const s of tt)Object.defineProperty(u,s,{get(){return o(),n[s]},enumerable:!0,configurable:!0});return at(u),u}function at(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(n){return n.replace(/\/$/,"")+rt}function it(...n){let o=5381;for(const u of n)if(typeof u=="string"){let s=u.length;for(;s;)o=o*33^u.charCodeAt(--s)}else if(ArrayBuffer.isView(u)){const s=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let d=s.length;for(;d;)o=o*33^s[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ne.delete(ke(n)),fe(n,o));const ne=new Map;function st(n,o){const u=ke(n,o),s=document.querySelector(u);if(s!=null&&s.textContent){const{body:d,...f}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&ne.set(u,{body:d,init:f,ttl:1e3*Number(E)}),Promise.resolve(new Response(d,f))}return fe(n,o)}function ct(n,o,u){if(ne.size>0){const s=ke(n,u),d=ne.get(s);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(d.body,d.init);ne.delete(s)}}return fe(o,u)}function ke(n,o){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),s+=`[data-hash="${it(...d)}"]`}return s}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${dt(n).map(s=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((w,p)=>{if(p%2){if(w.startsWith("x+"))return be(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return be(String.fromCharCode(...w.slice(2).split("-").map(U=>parseInt(U,16))));const g=lt.exec(w);if(!g)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,x,k,j]=g;return o.push({name:k,matcher:j,optional:!!D,rest:!!x,chained:x?p===1&&E[0]==="":!1}),x?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return be(w)}).join("")}).join("")}/?$`),params:o}}function ut(n){return!/^\([^)]+\)$/.test(n)}function dt(n){return n.slice(1).split("/").filter(ut)}function pt(n,o,u){const s={},d=n.slice(1);let f=0;for(let E=0;E<o.length;E+=1){const l=o[E];let w=d[E-f];if(l.chained&&l.rest&&f&&(w=d.slice(E-f,E+1).filter(p=>p).join("/"),f=0),w===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||u[l.matcher](w)){s[l.name]=w;const p=o[E+1],g=d[E+1];p&&!p.rest&&p.optional&&g&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return s}function be(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:o,dictionary:u,matchers:s}){const d=new Set(o);return Object.entries(u).map(([l,[w,p,g]])=>{const{pattern:D,params:x}=ft(l),k={id:l,exec:j=>{const U=D.exec(j);if(U)return pt(U,x,s)},errors:[1,...g||[]].map(j=>n[j]),layouts:[0,...p||[]].map(E),leaf:f(w)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const w=l<0;return w&&(l=~l),[w,n[l]]}function E(l){return l===void 0?l:[d.has(l),n[l]]}}function ze(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Fe(n,o){const u=JSON.stringify(o);try{sessionStorage[n]=u}catch{}}const gt=-1,mt=-2,wt=-3,_t=-4,yt=-5,vt=-6;function bt(n,o){if(typeof n=="number")return d(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const u=n,s=Array(u.length);function d(f,E=!1){if(f===gt)return;if(f===wt)return NaN;if(f===_t)return 1/0;if(f===yt)return-1/0;if(f===vt)return-0;if(E)throw new Error("Invalid input");if(f in s)return s[f];const l=u[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],p=o==null?void 0:o[w];if(p)return s[f]=p(d(l[1]));switch(w){case"Date":s[f]=new Date(l[1]);break;case"Set":const g=new Set;s[f]=g;for(let k=1;k<l.length;k+=1)g.add(d(l[k]));break;case"Map":const D=new Map;s[f]=D;for(let k=1;k<l.length;k+=2)D.set(d(l[k]),d(l[k+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);s[f]=x;for(let k=1;k<l.length;k+=2)x[l[k]]=d(l[k+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);s[f]=w;for(let p=0;p<l.length;p+=1){const g=l[p];g!==mt&&(w[p]=d(g))}}else{const w={};s[f]=w;for(const p in l){const g=l[p];w[p]=d(g)}}return s[f]}return d(0)}function Et(n){return n.filter(o=>o!=null)}const Je=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Je];const St=new Set([...Je]);[...St];async function kt(n){var o;for(const u in n)if(typeof((o=n[u])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,d])=>[s,await d])));return n}const Rt="x-sveltekit-invalidated",At="x-sveltekit-trailing-slash",z=ze(Ge)??{},Q=ze(Ke)??{};function Ee(n){z[n]=ee()}function It(n,o){var Te;const u=ht(n),s=n.nodes[0],d=n.nodes[1];s(),d();const f=document.documentElement,E=[],l=[];let w=null;const p={before_navigate:[],on_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},D=!1,x=!1,k=!0,j=!1,U=!1,H=!1,B=!1,V,$=(Te=history.state)==null?void 0:Te[M];$||($=Date.now(),history.replaceState({...history.state,[M]:$},"",location.href));const ue=z[$];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let q,ae,W;async function Re(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),i=X(e,!0);w=null;const t=ae={},r=i&&await he(i);if(t===ae&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},[e.pathname],t);r.props.page!==void 0&&(q=r.props.page),V.$set(r.props)}}function Ae(e){l.some(i=>i==null?void 0:i.snapshot)&&(Q[e]=l.map(i=>{var t;return(t=i==null?void 0:i.snapshot)==null?void 0:t.capture()}))}function Ie(e){var i;(i=Q[e])==null||i.forEach((t,r)=>{var a,c;(c=(a=l[r])==null?void 0:a.snapshot)==null||c.restore(t)})}function Le(){Ee($),Fe(Ge,z),Ae($),Fe(Ke,Q)}async function re(e,{noScroll:i=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:c=!1},h,v){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:i?ee():null,keepfocus:r,redirect_chain:h,details:{state:a,replaceState:t},nav_token:v,accepted:()=>{c&&(B=!0)},blocked:()=>{},type:"goto"})}async function Pe(e){return w={id:e.id,promise:he(e).then(i=>(i.type==="loaded"&&i.state.error&&(w=null),i))},w.promise}async function oe(...e){const t=u.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}function Oe(e){var r;g=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=e.props.page,V=new n.root({target:o,props:{...e.props,stores:F,components:l},hydrate:!0}),Ie($);const t={from:null,to:{params:g.params,route:{id:((r=g.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};p.after_navigate.forEach(a=>a(t)),x=!0}async function Y({url:e,params:i,branch:t,status:r,error:a,route:c,form:h}){let v="never";for(const _ of t)(_==null?void 0:_.slash)!==void 0&&(v=_.slash);e.pathname=Ze(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:i,branch:t,error:a,route:c},props:{constructors:Et(t).map(_=>_.node.component)}};h!==void 0&&(b.props.form=h);let y={},L=!q,A=0;for(let _=0;_<Math.max(t.length,g.branch.length);_+=1){const m=t[_],O=g.branch[_];(m==null?void 0:m.data)!==(O==null?void 0:O.data)&&(L=!0),m&&(y={...y,...m.data},L&&(b.props[`data_${A}`]=y),A+=1)}return(!g.url||e.href!==g.url.href||g.error!==a||h!==void 0&&h!==q.form||L)&&(b.props.page={error:a,params:i,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(e),form:h??null,data:L?y:q.data}),b}async function de({loader:e,parent:i,url:t,params:r,route:a,server_data_node:c}){var y,L,A;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((y=b.universal)!=null&&y.load){let P=function(...m){for(const O of m){const{href:N}=new URL(O,t);v.dependencies.add(N)}};const _={route:new Proxy(a,{get:(m,O)=>(v.route=!0,m[O])}),params:new Proxy(r,{get:(m,O)=>(v.params.add(O),m[O])}),data:(c==null?void 0:c.data)??null,url:nt(t,()=>{v.url=!0}),async fetch(m,O){let N;m instanceof Request?(N=m.url,O={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...O}):N=m;const C=new URL(N,t);return P(C.href),C.origin===t.origin&&(N=C.href.slice(t.origin.length)),x?ct(N,C.href,O):st(N,O)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,i()}};h=await b.universal.load.call(null,_)??null,h=h?await kt(h):null}return{node:b,loader:e,server:c,universal:(L=b.universal)!=null&&L.load?{type:"data",data:h,uses:v}:null,data:h??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Ue(e,i,t,r,a){if(B)return!0;if(!r)return!1;if(r.parent&&e||r.route&&i||r.url&&t)return!0;for(const c of r.params)if(a[c]!==g.params[c])return!0;for(const c of r.dependencies)if(E.some(h=>h(new URL(c))))return!0;return!1}function pe(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}async function he({id:e,invalidating:i,url:t,params:r,route:a}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:c,layouts:h,leaf:v}=a,b=[...h,v];c.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let y=null;const L=g.url?e!==g.url.pathname+g.url.search:!1,A=g.route?a.id!==g.route.id:!1;let P=!1;const _=b.map((S,I)=>{var G;const R=g.branch[I],T=!!(S!=null&&S[0])&&((R==null?void 0:R.loader)!==S[1]||Ue(P,A,L,(G=R.server)==null?void 0:G.uses,r));return T&&(P=!0),T});if(_.some(Boolean)){try{y=await He(t,_)}catch(S){return ie({status:S instanceof te?S.status:500,error:await Z(S,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(y.type==="redirect")return y}const m=y==null?void 0:y.nodes;let O=!1;const N=b.map(async(S,I)=>{var ge;if(!S)return;const R=g.branch[I],T=m==null?void 0:m[I];if((!T||T.type==="skip")&&S[1]===(R==null?void 0:R.loader)&&!Ue(O,A,L,(ge=R.universal)==null?void 0:ge.uses,r))return R;if(O=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:S[1],url:t,params:r,route:a,parent:async()=>{var De;const $e={};for(let me=0;me<I;me+=1)Object.assign($e,(De=await N[me])==null?void 0:De.data);return $e},server_data_node:pe(T===void 0&&S[0]?{type:"skip"}:T??null,S[0]?R==null?void 0:R.server:void 0)})});for(const S of N)S.catch(()=>{});const C=[];for(let S=0;S<b.length;S+=1)if(b[S])try{C.push(await N[S])}catch(I){if(I instanceof qe)return{type:"redirect",location:I.location};let R=500,T;if(m!=null&&m.includes(I))R=I.status??R,T=I.error;else if(I instanceof te)R=I.status,T=I.body;else{if(await F.updated.check())return await J(t);T=await Z(I,{params:r,url:t,route:{id:a.id}})}const G=await xe(S,C,c);return G?await Y({url:t,params:r,branch:C.slice(0,G.idx).concat(G.node),status:R,error:T,route:a}):await Ne(t,{id:a.id},T,R)}else C.push(void 0);return await Y({url:t,params:r,branch:C,status:200,error:null,route:a,form:i?void 0:null})}async function xe(e,i,t){for(;e--;)if(t[e]){let r=e;for(;!i[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:i,url:t,route:r}){const a={};let c=null;if(n.server_loads[0]===0)try{const y=await He(t,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(t.origin!==location.origin||t.pathname!==location.pathname||D)&&await J(t)}const v=await de({loader:s,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),b={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:t,params:a,branch:[v,b],status:e,error:i,route:null})}function X(e,i){if(ve(e,K))return;const t=se(e);for(const r of u){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:i,route:r,params:et(a),url:e}}}function se(e){return Qe(e.pathname.slice(K.length)||"/")}function je({url:e,type:i,intent:t,delta:r}){let a=!1;const c=Be(g,t,e,i);r!==void 0&&(c.navigation.delta=r);const h={...c.navigation,cancel:()=>{a=!0,c.reject(new Error("navigation was cancelled"))}};return U||p.before_navigate.forEach(v=>v(h)),a?null:c}async function ce({url:e,scroll:i,keepfocus:t,redirect_chain:r,details:a,type:c,delta:h,nav_token:v={},accepted:b,blocked:y}){var N,C,S;const L=X(e,!1),A=je({url:e,type:c,delta:h,intent:L});if(!A){y();return}const P=$;b(),U=!0,x&&F.navigating.set(A.navigation),ae=v;let _=L&&await he(L);if(!_){if(ve(e,K))return await J(e);_=await Ne(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(L==null?void 0:L.url)||e,ae!==v)return A.reject(new Error("navigation was aborted")),!1;if(_.type==="redirect")if(r.length>10||r.includes(e.pathname))_=await ie({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(_.location,e).href,{},[...r,e.pathname],v),!1;else((N=_.props.page)==null?void 0:N.status)>=400&&await F.updated.check()&&await J(e);if(E.length=0,B=!1,j=!0,Ee(P),Ae(P),(C=_.props.page)!=null&&C.url&&_.props.page.url.pathname!==e.pathname&&(e.pathname=(S=_.props.page)==null?void 0:S.url.pathname),a){const I=a.replaceState?0:1;if(a.state[M]=$+=I,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let R=$+1;for(;Q[R]||z[R];)delete Q[R],delete z[R],R+=1}}if(w=null,x){g=_.state,_.props.page&&(_.props.page.url=e);const I=(await Promise.all(p.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){p.after_navigate=p.after_navigate.filter(T=>!I.includes(T))};I.push(R),p.after_navigate.push(...I)}V.$set(_.props)}else Oe(_);const{activeElement:m}=document;if(await _e(),k){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==m&&document.activeElement!==document.body;!t&&!O&&Se(),k=!0,_.props.page&&(q=_.props.page),U=!1,c==="popstate"&&Ie($),A.fulfil(void 0),p.after_navigate.forEach(I=>I(A.navigation)),F.navigating.set(null),j=!1}async function Ne(e,i,t,r){return e.origin===location.origin&&e.pathname===location.pathname&&!D?await ie({status:r,error:t,url:e,route:i}):await J(e)}function J(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const h=c.target;clearTimeout(e),e=setTimeout(()=>{r(h,2)},20)});function i(c){r(c.composedPath()[0],1)}f.addEventListener("mousedown",i),f.addEventListener("touchstart",i,{passive:!0});const t=new IntersectionObserver(c=>{for(const h of c)h.isIntersecting&&(oe(se(new URL(h.target.href))),t.unobserve(h.target))},{threshold:0});function r(c,h){const v=Me(c,f);if(!v)return;const{url:b,external:y,download:L}=ye(v,K);if(y||L)return;const A=le(v);if(!A.reload)if(h<=A.preload_data){const P=X(b,!1);P&&Pe(P)}else h<=A.preload_code&&oe(se(b))}function a(){t.disconnect();for(const c of f.querySelectorAll("a")){const{url:h,external:v,download:b}=ye(c,K);if(v||b)continue;const y=le(c);y.reload||(y.preload_code===Ve.viewport&&t.observe(c),y.preload_code===Ve.eager&&oe(se(h)))}}p.after_navigate.push(a),a()}function Z(e,i){return e instanceof te?e.body:n.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{we(()=>(p.after_navigate.push(e),()=>{const i=p.after_navigate.indexOf(e);p.after_navigate.splice(i,1)}))},before_navigate:e=>{we(()=>(p.before_navigate.push(e),()=>{const i=p.before_navigate.indexOf(e);p.before_navigate.splice(i,1)}))},on_navigate:e=>{we(()=>(p.on_navigate.push(e),()=>{const i=p.on_navigate.indexOf(e);p.on_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(j||!x)&&(k=!1)},goto:(e,i={})=>re(e,i,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:i}=new URL(e,location.href);E.push(t=>t.href===i)}return Re()},invalidate_all:()=>(B=!0,Re()),preload_data:async e=>{const i=new URL(e,Ce(document)),t=X(i,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Pe(t)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:t,route:r}=g;if(!r)return;const a=await xe(g.branch.length,t,r.errors);if(a){const c=await Y({url:i,params:g.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});g=c.state,V.$set(c.props),_e().then(Se)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(V.$set({form:null,page:{...q,form:e.data,status:e.status}}),await _e(),V.$set({form:e.data}),e.type==="success"&&Se())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Le(),!U){const a=Be(g,void 0,null,"leave"),c={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation was cancelled"))}};p.before_navigate.forEach(h=>h(c))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(i=navigator.connection)!=null&&i.saveData||Ye(),f.addEventListener("click",t=>{var P;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Me(t.composedPath()[0],f);if(!r)return;const{url:a,external:c,target:h,download:v}=ye(r,K);if(!a)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const b=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){je({url:a,type:"link"})?U=!0:t.preventDefault();return}const[L,A]=a.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(g.url.hash===a.hash){t.preventDefault(),(P=r.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(H=!0,Ee($),e(a),!b.replace_state)return;H=!1,t.preventDefault()}ce({url:a,scroll:b.noscroll?ee():null,keepfocus:b.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const h=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ve(h,K))return;const v=t.target,{keep_focus:b,noscroll:y,reload:L,replace_state:A}=le(v);if(L)return;t.preventDefault(),t.stopPropagation();const P=new FormData(v),_=a==null?void 0:a.getAttribute("name");_&&P.append(_,(a==null?void 0:a.getAttribute("value"))??""),h.search=new URLSearchParams(P).toString(),ce({url:h,scroll:y?ee():null,keepfocus:b??!1,redirect_chain:[],details:{state:{},replaceState:A??h.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[M]){if(t.state[M]===$)return;const a=z[t.state[M]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){z[$]=ee(),$=t.state[M],scrollTo(a.x,a.y);return}const c=t.state[M]-$;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=t.state[M]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[M]:++$},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)});function e(t){g.url=t,F.page.set({...q,url:t}),F.page.notify()}},_hydrate:async({status:e=200,error:i,node_ids:t,params:r,route:a,data:c,form:h})=>{D=!0;const v=new URL(location.href);({params:r={},route:a={id:null}}=X(v,!1)||{});let b;try{const y=t.map(async(P,_)=>{const m=c[_];return m!=null&&m.uses&&(m.uses=We(m.uses)),de({loader:n.nodes[P],url:v,params:r,route:a,parent:async()=>{const O={};for(let N=0;N<_;N+=1)Object.assign(O,(await y[N]).data);return O},server_data_node:pe(m)})}),L=await Promise.all(y),A=u.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let _=0;_<P.length;_++)P[_]||L.splice(_,0,void 0)}b=await Y({url:v,params:r,branch:L,status:e,error:i,form:h,route:A??null})}catch(y){if(y instanceof qe){await J(new URL(y.location,location.href));return}b=await ie({status:y instanceof te?y.status:500,error:await Z(y,{url:v,params:r,route:a}),url:v,route:a})}Oe(b)}}}async function He(n,o){const u=new URL(n);u.pathname=ot(n.pathname),n.pathname.endsWith("/")&&u.searchParams.append(At,"1"),u.searchParams.append(Rt,o.map(d=>d?"1":"0").join(""));const s=await fe(u.href);if(!s.ok)throw new te(s.status,await s.json());return new Promise(async d=>{var g;const f=new Map,E=s.body.getReader(),l=new TextDecoder;function w(D){return bt(D,{Promise:x=>new Promise((k,j)=>{f.set(x,{fulfil:k,reject:j})})})}let p="";for(;;){const{done:D,value:x}=await E.read();if(D&&!p)break;for(p+=!x&&p?`
`:l.decode(x);;){const k=p.indexOf(`
`);if(k===-1)break;const j=JSON.parse(p.slice(0,k));if(p=p.slice(k+1),j.type==="redirect")return d(j);if(j.type==="data")(g=j.nodes)==null||g.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=We(U.uses),U.data=w(U.data))}),d(j);else if(j.type==="chunk"){const{id:U,data:H,error:B}=j,V=f.get(U);f.delete(U),B?V.reject(w(B)):V.fulfil(w(H))}}}})}function We(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Se(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,u=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),u!==null?o.setAttribute("tabindex",u):o.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const d=[];for(let f=0;f<s.rangeCount;f+=1)d.push(s.getRangeAt(f));setTimeout(()=>{if(s.rangeCount===d.length){for(let f=0;f<s.rangeCount;f+=1){const E=d[f],l=s.getRangeAt(f);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}function Be(n,o,u,s){var w,p;let d,f;const E=new Promise((g,D)=>{d=g,f=D});return E.catch(()=>{}),{navigation:{from:{params:n.params,route:{id:((w=n.route)==null?void 0:w.id)??null},url:n.url},to:u&&{params:(o==null?void 0:o.params)??null,route:{id:((p=o==null?void 0:o.route)==null?void 0:p.id)??null},url:u},willUnload:!o,type:s,complete:E},fulfil:d,reject:f}}async function Ut(n,o,u){const s=It(n,o);Xe({client:s}),u?await s._hydrate(u):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Ut as start};
