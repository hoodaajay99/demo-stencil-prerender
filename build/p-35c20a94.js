let e,t,n,s=0,o=!1,l=!1,i=!1,r=!1;const c=window,a=document,f=(HTMLElement,{t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)}),$=(()=>!!a.documentElement.attachShadow)(),d=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p={},u=new WeakMap,m=e=>u.get(e),h=(e,t)=>u.set(t.o=e,t),w=(e,t)=>t in e,y=e=>console.error(e),b=new Map,g=new Map,_=[],v=[],j=[],k=(e,t)=>n=>{e.push(n),o||(o=!0,t&&4&f.t?R(M):f.raf(M))},S=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){y(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},M=()=>{s++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){y(e)}e.length=0})(_);const e=2==(6&f.t)?performance.now()+10*Math.ceil(s*(1/22)):1/0;S(v,e),S(j,e),v.length>0&&(j.push(...v),v.length=0),(o=_.length+v.length+j.length>0)?f.raf(M):s=0},R=e=>Promise.resolve().then(e),U=k(_,!1),L=k(v,!0),x={},O=e=>null!=e,C=e=>e.toLowerCase(),T=e=>"object"==(e=typeof e)||"function"===e,E=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-aea6ba87.js"),P=async()=>{const e=new RegExp("/app(\\.esm)?\\.js($|\\?|#)"),t=Array.from(a.querySelectorAll("script")).find(t=>e.test(t.src)||"app"===t.getAttribute("data-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href));return I(e.href),window.customElements||await __sc_import_app("./p-020f8d73.js"),Object.assign(Object.assign({},n),{resourcesUrl:e.href})}},I=e=>{const t=(()=>`__sc_import_${"app".replace(/\s|-/g,"_")}`)();try{c[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const s=new Map;c[t]=n=>{const o=new URL(n,e).href;let l=s.get(o);if(!l){const e=a.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${t}.m = m;`],{type:"application/javascript"})),l=new Promise(n=>{e.onload=()=>{n(c[t].m),e.remove()}}),s.set(o,l),a.head.appendChild(e)}return l}}},A=new WeakMap,D=(e,t,n)=>{let s=g.get(e);d&&n?(s=s||new CSSStyleSheet).replace(t):s=t,g.set(e,s)},F=(e,t)=>{let n=W(t.l),s=g.get(n);if(e=11===e.nodeType?e:a,s)if("string"==typeof s){let t,o=A.get(e=e.head||e);o||A.set(e,o=new Set),o.has(n)||(e.host&&(t=e.firstElementChild)&&"STYLE"===t.tagName?t.innerHTML=s:((t=a.createElement("style")).innerHTML=s,e.insertBefore(t,e.querySelector("link"))),o&&o.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return n},W=e=>"sc-"+e,q=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),H=(e,t,...n)=>{let s,o,l=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!T(l))&&(l=String(l)),i&&r?c[c.length-1].i+=l:c.push(i?{t:0,i:l}:l),r=i)};if(a(n),t){s=t.key||void 0,o=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,B);const f={t:0,$:e,p:c.length>0?c:null,u:void 0,h:t};return f.g=s,f._=o,f},N={},B={forEach:(e,t)=>e.map(V).forEach(t),map:(e,t)=>e.map(V).map(t).map(Y)},V=e=>({vattrs:e.h,vchildren:e.p,vkey:e.g,vname:e._,vtag:e.$,vtext:e.i}),Y=e=>({t:0,h:e.vattrs,p:e.vchildren,g:e.vkey,_:e.vname,$:e.vtag,i:e.vtext}),z=(e,t,n,s,o,l)=>{if(n!==s)if("class"===t){const t=e.classList;G(n).forEach(e=>t.remove(e)),G(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!w(e,t))t=w(e,C(t))?C(t.substring(2)):C(t[2])+t.substring(3),n&&f.rel(e,t,n,!1),s&&f.ael(e,t,s,!1);else{const n=w(e,t),i=T(s);if((n||i&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{const n=null==s?"":s;e[t]!==n&&(e[t]=n)}}catch(e){}null==s||!1===s?e.removeAttribute(t):(!n||4&l||o)&&!i&&(s=!0===s?"":s.toString(),e.setAttribute(t,s))}},G=e=>e?e.split(/\s+/).filter(e=>e):[],J=(e,t,n,s)=>{const o=11===t.u.nodeType&&t.u.host?t.u.host:t.u,l=e&&e.h||x,i=t.h||x;for(s in l)s in i||z(o,s,l[s],void 0,n,t.t);for(s in i)z(o,s,l[s],i[s],n,t.t)},K=(s,o,i,c)=>{let f,$,d,p=o.p[i],u=0;if(l||(r=!0,"slot"===p.$&&(e&&c.classList.add(e+"-s"),p.t|=p.p?2:1)),O(p.i))p.u=a.createTextNode(p.i);else if(1&p.t)p.u=a.createTextNode("");else if(f=p.u=a.createElement(2&p.t?"slot-fb":p.$),J(null,p,!1),O(e)&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),p.p)for(u=0;u<p.p.length;++u)($=K(s,p,u,f))&&f.appendChild($);return p.u["s-hn"]=n,3&p.t&&(p.u["s-sr"]=!0,p.u["s-cr"]=t,p.u["s-sn"]=p._||"",(d=s&&s.p&&s.p[i])&&d.$===p.$&&s.u&&Q(s.u,!1)),p.u},Q=(e,t)=>{f.t|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const o=s[e];o["s-hn"]!==n&&o["s-ol"]&&(ne(o).insertBefore(o,te(o)),o["s-ol"].remove(),o["s-ol"]=void 0,r=!0),t&&Q(o,t)}f.t&=-2},X=(e,t,s,o,l,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&C(c.tagName)===n&&(c=c.shadowRoot);l<=i;++l)o[l]&&(r=K(null,s,l,e))&&(o[l].u=r,c.insertBefore(r,te(t)))},Z=(e,t,n,s)=>{for(;t<=n;++t)O(e[t])&&(s=e[t].u,re(e[t],!0),i=!0,s["s-ol"]?s["s-ol"].remove():Q(s,!0),s.remove())},ee=(e,t)=>e.$===t.$&&("slot"===e.$?e._===t._:e.g===t.g),te=e=>e&&e["s-ol"]||e,ne=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,se=(e,t)=>{const n=t.u=e.u,s=e.p,o=t.p;let l;O(t.i)?(l=n["s-cr"])?l.parentNode.textContent=t.i:e.i!==t.i&&(n.textContent=t.i):("slot"===t.$||J(e,t,!1),O(s)&&O(o)?((e,t,n,s)=>{let o,l,i=0,r=0,c=0,a=0,f=t.length-1,$=t[0],d=t[f],p=s.length-1,u=s[0],m=s[p];for(;i<=f&&r<=p;)if(null==$)$=t[++i];else if(null==d)d=t[--f];else if(null==u)u=s[++r];else if(null==m)m=s[--p];else if(ee($,u))se($,u),$=t[++i],u=s[++r];else if(ee(d,m))se(d,m),d=t[--f],m=s[--p];else if(ee($,m))"slot"!==$.$&&"slot"!==m.$||Q($.u.parentNode,!1),se($,m),e.insertBefore($.u,d.u.nextSibling),$=t[++i],m=s[--p];else if(ee(d,u))"slot"!==$.$&&"slot"!==m.$||Q(d.u.parentNode,!1),se(d,u),e.insertBefore(d.u,$.u),d=t[--f],u=s[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&O(t[a].g)&&t[a].g===u.g){c=a;break}c>=0?((l=t[c]).$!==u.$?o=K(t&&t[r],n,c,e):(se(l,u),t[c]=void 0,o=l.u),u=s[++r]):(o=K(t&&t[r],n,r,e),u=s[++r]),o&&ne($.u).insertBefore(o,te($.u))}i>f?X(e,null==s[p+1]?null:s[p+1].u,n,s,r,p):r>p&&Z(t,i,f)})(n,s,t,o):O(o)?(O(e.i)&&(n.textContent=""),X(n,null,t,o,0,o.length-1)):O(s)&&Z(s,0,s.length-1))},oe=(e,t,n,s,o,l,i,r)=>{for(s=0,o=(n=e.childNodes).length;s<o;s++)if(1===(t=n[s]).nodeType){if(t["s-sr"])for(i=t["s-sn"],t.hidden=!1,l=0;l<o;l++)if(n[l]["s-hn"]!==t["s-hn"])if(r=n[l].nodeType,""!==i){if(1===r&&i===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==n[l].textContent.trim()){t.hidden=!0;break}oe(t)}},le=[],ie=e=>{let t,n,s,o,l=e.childNodes,r=l.length,c=0,a=0,f=0;for(r=l.length;c<r;c++){if((t=l[c])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(s=n.parentNode.childNodes).length-1;a>=0;a--)(n=s[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(le.some(e=>e.v===n)||(i=!0,n["s-sn"]=o,le.push({j:t,v:n})));1===t.nodeType&&ie(t)}},re=(e,t)=>{e&&(e.h&&e.h.ref&&e.h.ref(t?null:e.u),e.p&&e.p.forEach(e=>{re(e,t)}))},ce=(e,t,n,s)=>{t.t|=16;const o=t.o,l=()=>ae(e,t,n,o,s);let i;return s&&(i=de(o,"componentWillLoad")),pe(i,()=>L(l))},ae=(s,o,c,d,p)=>{o.t&=-17,s["s-lr"]=!1,p&&((e,t)=>{const n=F($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(s,c),o.t|=4;try{((s,o,c,d)=>{n=C(s.tagName);const p=o.k||{t:0},u=(e=>e&&e.$===N)(d)?d:H(null,null,d);if(c.S&&(u.h=u.h||{},c.S.forEach(([e,t])=>u.h[t]=s[e])),u.$=null,u.t|=4,o.k=u,u.u=p.u=s.shadowRoot||s,e=s["s-sc"],t=s["s-cr"],l=$&&0!=(1&c.t),r=i=!1,se(p,u),r){ie(u.u);for(let e=0;e<le.length;e++){const t=le[e];if(!t.v["s-ol"]){const e=a.createTextNode("");e["s-nr"]=t.v,t.v.parentNode.insertBefore(t.v["s-ol"]=e,t.v)}}f.t|=1;for(let e=0;e<le.length;e++){const t=le[e],n=t.j.parentNode;let s=t.j.nextSibling,o=t.v["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.v["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){s=e;break}}(!s&&n!==t.v.parentNode||t.v.nextSibling!==s)&&t.v!==s&&n.insertBefore(t.v,s)}f.t&=-2}i&&oe(u.u),le.length=0})(s,o,c,d.render&&d.render())}catch(e){y(e)}o.t&=-5,s["s-lr"]=!0,o.t|=2,s["s-rc"].length>0&&(s["s-rc"].forEach(e=>e()),s["s-rc"].length=0),fe(s,o)},fe=(e,t,n)=>{if(!e["s-al"]){const s=t.o,o=t.M;64&t.t?de(s,"componentDidUpdate"):(t.t|=64,e.classList.add("hydrated"),de(s,"componentDidLoad"),t.R(e),o||$e()),o&&((n=o["s-al"])&&(n.delete(e),0===n.size&&(o["s-al"]=void 0,o["s-init"]())),t.M=void 0)}},$e=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},de=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){y(e)}},pe=(e,t)=>e&&e.then?e.then(t):t(),ue=(e,t,n)=>{if(t.U){e.watchers&&(t.L=e.watchers);const s=Object.entries(t.U),o=e.prototype;if(s.forEach(([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>m(e).O.get(t))(this,e)},set(n){((e,t,n,s)=>{const o=m(this),l=o.C,i=o.O.get(t),r=o.t;if(!((n=((e,t)=>null==e||T(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,s.U[t][0]))===i||8&r&&void 0!==i)&&(o.O.set(t,n),o.o)){if(s.L&&128&r){const e=s.L[t];e&&e.forEach(e=>{try{o.o[e].call(o.o,n,i,t)}catch(e){y(e)}})}2==(22&r)&&ce(l,o,s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,s){f.jmp(()=>{const t=n.get(e);this[t]=(null!==s||"boolean"!=typeof this[t])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,s])=>{const o=s[1]||e;return n.set(o,e),512&s[0]&&t.S.push([e,o]),o})}}return e},me=(e,t,n,s,o,l,i)=>{let r,c,f,$;if(1===l.nodeType){for((r=l.getAttribute("c-id"))&&((c=r.split("."))[0]!==i&&"0"!==c[0]||(f={t:0,T:c[0],P:c[1],I:c[2],A:c[3],$:C(l.tagName),u:l},t.push(f),l.removeAttribute("c-id"),e.p||(e.p=[]),e.p[f.A]=f,e=f,s&&"0"===f.I&&(s[f.A]=f.u))),$=l.childNodes.length-1;$>=0;$--)me(e,t,n,s,o,l.childNodes[$],i);if(l.shadowRoot)for($=l.shadowRoot.childNodes.length-1;$>=0;$--)me(e,t,n,s,o,l.shadowRoot.childNodes[$],i)}else 8===l.nodeType?(c=l.nodeValue.split("."))[1]!==i&&"0"!==c[1]||(f={t:0,T:c[1],P:c[2],I:c[3],A:c[4],u:l},"t"===(r=c[0])?(f.u=l.nextSibling,f.u&&3===f.u.nodeType&&(f.i=f.u.textContent,t.push(f),l.remove(),e.p||(e.p=[]),e.p[f.A]=f,s&&"0"===f.I&&(s[f.A]=f.u))):f.T===i&&("s"===r?(f.$="slot",l["s-sn"]=c[5]?f._=c[5]:"",l["s-sr"]=!0,s&&(f.u=a.createElement(f.$),f._&&f.u.setAttribute("name",f._),l.parentNode.insertBefore(f.u,l),l.remove(),"0"===f.I&&(s[f.A]=f.u)),n.push(f),e.p||(e.p=[]),e.p[f.A]=f):"r"===r&&(s?l.remove():(o["s-cr"]=l,l["s-cn"]=!0)))):e&&"style"===e.$&&(e.p=[{A:"0",i:l.textContent,u:l}])},he=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)he(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)he(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-sd"]=""===n[3])}},we=e=>{de(e,"connectedCallback")},ye=(e,t)=>{(t=e["s-cr"]=a.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)},be=(e,t={})=>{const n=[],s=t.exclude||[],o=a.head,l=c.customElements,i=o.querySelector("meta[charset]"),r=a.createElement("style");let d;Object.assign(f,t),f.s=new URL(t.resourcesUrl||"./",a.baseURI).href,t.syncQueue&&(f.t|=4),f.t|=2;{const e=a.querySelectorAll("style[s-id]");let t="",n=0;for(;n<e.length;n++)t+=e[n].innerHTML;for(n=0;n<e.length;n++){const s=e[n];D(s.getAttribute("s-id"),t+q(s.innerHTML),!0)}}e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],l:t[1],U:t[2],D:t[3],S:[],L:{}};!$&&1&o.t&&(o.t|=8);const i=o.l;o.F=e[0],s.includes(i)||l.get(i)||(n.push(i),l.define(i,ue(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,C:e,O:new Map};t.W=new Promise(e=>t.R=e),u.set(e,t)}})(e),1&o.t&&($?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){d&&(clearTimeout(d),d=null),f.jmp(()=>((e,t)=>{if(0==(1&f.t)){const n=m(e);if(!(1&n.t)){let s;if(n.t|=1,s=e.getAttribute("s-id")){if($&&1&t.t){const n=F(e.shadowRoot,t);e.classList.remove(n+"-h"),e.classList.remove(n+"-s")}((e,t,n,s)=>{const o=e.shadowRoot,l=[],i=o?[]:null,r=s.k={t:0,$:t};f.q||he(a.body,f.q=new Map),e["s-id"]=n,e.removeAttribute("s-id"),me(r,l,[],i,e,e,n),l.forEach(e=>{const n=e.T+"."+e.P,s=f.q.get(n),l=e.u;s&&(s["s-sd"]||"0"===e.T)&&s.parentNode.insertBefore(l,s.nextSibling),o||(l["s-hn"]=t,s&&(l["s-ol"]=s,l["s-ol"]["s-nr"]=l)),f.q.delete(n)}),o&&i.forEach(e=>{e&&o.appendChild(e)})})(e,t.l,s,n)}s||(4&t.t||8&t.t)&&ye(e);{let t=e;for(;t=t.parentNode||t.host;)if(1===t.nodeType&&t.hasAttribute("s-id")||t["s-init"]&&!1===t["s-lr"]){n.M=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.U&&Object.entries(t.U).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),R(()=>(async(e,t,n,s,o)=>{if(0==(32&t.t)){t.t|=32,(o=(e=>{const t=e.l.replace(/-/g,"_"),n=e.F,s=b.get(n);return s?s[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(b.set(n,e),e[t]),y)})(n)).then&&(o=await o),o.isProxied||(n.L=o.watchers,ue(o,n,2),o.isProxied=!0),t.t|=8;try{new o(t)}catch(e){y(e)}t.t&=-9,t.t|=128,we(t.o);const e=W(n.l);if(!g.has(e)&&o.style){let t=o.style;8&n.t&&(t=await __sc_import_app("./p-affe7c09.js").then(n=>n.scopeCss(t,e,!1))),D(e,t,!!(1&n.t))}}const l=t.M,i=()=>ce(e,t,n,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(i):i()})(e,n,t))}we(n.o)}})(this,o))}disconnectedCallback(){f.jmp(()=>(()=>{if(0==(1&f.t)){const e=m(this).o;de(e,"disconnectedCallback"),de(e,"componentDidUnload")}})())}"s-init"(){const e=m(this);e.o&&fe(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=m(e);2&n.t&&ce(e,n,t,!1)}})(this,o)}componentOnReady(){return m(this).W}},o,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),f.jmp(()=>d=setTimeout($e,30))},ge=(e,t)=>t in p?p[t]:"window"===t?c:"document"===t?a:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",f.s);return e.origin!==c.location.origin?e.href:e.pathname})():"queue"===t?{write:L,read:U,tick:{then:e=>R(e)}}:void 0)),_e=e=>m(e).C;export{E as a,be as b,ge as c,_e as g,H as h,P as p,h as r};