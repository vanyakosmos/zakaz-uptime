function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,m=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:p(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[a]+1;const i=a+1;n[i]=t,r=Math.max(i,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function k(){return E("")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function z(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:A(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function N(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,s,r=!1){N(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function L(t,e,n,s){return I(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function R(t,e,n){return L(t,e,n,$)}function O(t,e,n){return L(t,e,n,w)}function C(t,e){return I(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return C(t," ")}function H(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function M(t,e){const n=H(t,"HTML_TAG_START",0),s=H(t,"HTML_TAG_END",n);if(n===s)return new K(void 0,e);N(t);const r=t.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(o,e)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function G(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function B(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=x(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=x(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function V(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K extends class{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function J(t){h=t}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function F(t){W().$$.on_mount.push(t)}function Y(t){W().$$.after_update.push(t)}function Z(t){W().$$.on_destroy.push(t)}const X=[],Q=[],tt=[],et=[],nt=Promise.resolve();let st=!1;function rt(t){tt.push(t)}const ot=new Set;let at=0;function it(){const t=h;do{for(;at<X.length;){const t=X[at];at++,J(t),ct(t.$$)}for(J(null),X.length=0,at=0;Q.length;)Q.pop()();for(let t=0;t<tt.length;t+=1){const e=tt[t];ot.has(e)||(ot.add(e),e())}tt.length=0}while(X.length);for(;et.length;)et.pop()();st=!1,ot.clear(),J(t)}function ct(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}const lt=new Set;let ut;function dt(){ut={r:0,c:[],p:ut}}function ft(){ut.r||r(ut.c),ut=ut.p}function ht(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function mt(t,e,n,s){if(t&&t.o){if(lt.has(t))return;lt.add(t),ut.c.push((()=>{lt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function pt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function gt(t){return"object"==typeof t&&null!==t?t:{}}function bt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function _t(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||rt((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(rt)}function yt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(X.push(t),st||(st=!0,nt.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,o,a,i,c,l,u=[-1]){const d=h;J(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&$t(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){m=!0;const t=P(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&ht(e.$$.fragment),_t(e,n.target,n.anchor,n.customElement),m=!1,it()}J(d)}class Et{$destroy(){yt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const St=[];function kt(e,n=t){let s;const r=new Set;function o(t){if(a(e,t)&&(e=t,s)){const t=!St.length;for(const t of r)t[1](),St.push(t,e);if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.add(c),1===r.size&&(s=n(o)||t),a(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const xt={};var Tt={owner:"vanyakosmos",repo:"zakaz-uptime",sites:[{name:"Main",url:"https://zakaz.ua"},{name:"Metro",url:"https://metro.zakaz.ua"},{name:"Auchan",url:"https://auchan.zakaz.ua"},{name:"Novus",url:"https://novus.zakaz.ua"},{name:"CityMarket",url:"https://citymarket.zakaz.ua"},{name:"Cosmos",url:"https://cosmos.zakaz.ua"},{name:"Ekomarket",url:"https://ekomarket.zakaz.ua"},{name:"Megamarket",url:"https://megamarket.zakaz.ua"},{name:"Pchelka",url:"https://pchelka.zakaz.ua"},{name:"Stolychiy",url:"https://stolychyi.zakaz.ua"},{name:"Tavria V",url:"https://tavriav.zakaz.ua"},{name:"UltraMarket",url:"https://ultramarket.zakaz.ua"},{name:"Varus",url:"https://varus.zakaz.ua"},{name:"Vostorg",url:"https://vostorg.zakaz.ua"},{name:"Metro MD",url:"https://metro.zakaz.md"},{name:"Makro",url:"https://makro.zakaz.uz"},{name:"Carrefour",url:"https://zakaz.uz/carrefour"},{name:"Stores API - UA",url:"https://stores-api.zakaz.ua"},{name:"Stores API - MD",url:"https://stores-api.zakaz.md"},{name:"Stores API - UZ",url:"https://stores-api.zakaz.uz"},{name:"Stores API - TEST",url:"https://stores-api.test.zakaz.ua"}],"status-website":{baseUrl:"/zakaz-uptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Zazaz.ua** Uptime",introMessage:"This is a status page which uses **real-time** data from our [Github repository](https://github.com/vanyakosmos/zakaz-uptime). No server required — just GitHub Actions, Issues, and Pages.",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},workflowSchedule:{graphs:"0 0 * * *",responseTime:"0 23 * * *",staticSite:"0 1 * * *",summary:"0 0 * * *",updateTemplate:"0 0 * * *",updates:"0 3 * * *",uptime:"*/2 * * * *"},path:"https://vanyakosmos.github.io/zakaz-uptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function At(t,e,n){const s=t.slice();return s[1]=e[n],s}function zt(e){let n,s,r,o=Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=$("img"),this.h()},l(t){n=R(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),c(n.src,s=Tt["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}(),a=Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&function(e){let n,s,r=Tt["status-website"].name+"";return{c(){n=$("div"),s=E(r)},l(t){n=R(t,"DIV",{});var e=P(n);s=C(e,r),e.forEach(_)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=$("div"),s=$("a"),o&&o.c(),r=S(),a&&a.c(),this.h()},l(t){n=R(t,"DIV",{});var e=P(n);s=R(e,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=U(i),a&&a.l(i),i.forEach(_),e.forEach(_),this.h()},h(){A(s,"href",Tt["status-website"].logoHref||Tt.path),A(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(t,e){Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&o.p(t,e),Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&_(n),o&&o.d(),a&&a.d()}}}function Pt(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=$("li"),n=$("a"),s=E(a),o=S(),this.h()},l(t){e=R(t,"LI",{});var r=P(e);n=R(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var i=P(n);s=C(i,a),i.forEach(_),o=U(r),r.forEach(_),this.h()},h(){A(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",t[1].href.replace("$OWNER",Tt.owner).replace("$REPO",Tt.repo)),A(n,"target",t[1].target||"_self"),A(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(t){t&&_(e)}}}function Nt(e){let n,s,r,o,a,i=Tt["status-website"]&&Tt["status-website"].logoUrl&&zt(),c=Tt["status-website"]&&Tt["status-website"].navbar&&function(t){let e,n=Tt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Pt(At(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=Tt["status-website"].navbar,o=0;o<n.length;o+=1){const a=At(t,n,o);s[o]?s[o].p(a,r):(s[o]=Pt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){y(s,t),t&&_(e)}}}(e),l=Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&function(e){let n,s,r,o=Tt.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=E(o),this.h()},l(t){n=R(t,"LI",{});var e=P(n);s=R(e,"A",{href:!0,class:!0});var a=P(s);r=C(a,o),a.forEach(_),e.forEach(_),this.h()},h(){A(s,"href",`https://github.com/${Tt.owner}/${Tt.repo}`),A(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=$("nav"),s=$("div"),i&&i.c(),r=S(),o=$("ul"),c&&c.c(),a=S(),l&&l.c(),this.h()},l(t){n=R(t,"NAV",{class:!0});var e=P(n);s=R(e,"DIV",{class:!0});var u=P(s);i&&i.l(u),r=U(u),o=R(u,"UL",{class:!0});var d=P(o);c&&c.l(d),a=U(d),l&&l.l(d),d.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(t,[e]){Tt["status-website"]&&Tt["status-website"].logoUrl&&i.p(t,e),Tt["status-website"]&&Tt["status-website"].navbar&&c.p(t,e),Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function It(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Lt extends Et{constructor(t){super(),wt(this,t,It,Nt,a,{segment:0})}}var Rt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ot(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ct(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ut(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Rt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ot(Ct(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ut(Ot(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ct(r[8])+'" alt="'+Ct(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ct(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ut(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ct(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ht(t,e,n){const s=t.slice();return s[3]=e[n],s}function Mt(t,e,n){const s=t.slice();return s[3]=e[n],s}function jt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Dt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=R(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${Tt.path}/themes/${(Tt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Gt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=R(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(Tt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n,s;return{c(){n=$("script"),this.h()},l(t){n=R(t,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){c(n.src,s=e[8].src)||A(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Bt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=R(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Vt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=R(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Kt(e){let n,s,r,o,a,i,c,u,d,f,h,m,p,b,w,E,x,T,z=Ut(Tt.i18n.footer.replace(/\$REPO/,`https://github.com/${Tt.owner}/${Tt.repo}`))+"",N=(Tt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customHeadHtml+"";return{c(){n=new K(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let I=((Tt["status-website"]||{}).themeUrl?Gt:Dt)(e),L=(Tt["status-website"]||{}).scripts&&function(t){let e,n=(Tt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=jt(t,n,o);s[o]?s[o].p(a,r):(s[o]=qt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){y(s,t),t&&_(e)}}}(e),O=(Tt["status-website"]||{}).links&&function(t){let e,n=(Tt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Mt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Bt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){y(s,t),t&&_(e)}}}(e),C=(Tt["status-website"]||{}).metaTags&&function(t){let e,n=(Tt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Vt(Ht(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ht(t,n,o);s[o]?s[o].p(a,r):(s[o]=Vt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){y(s,t),t&&_(e)}}}(e),H=Tt["status-website"].css&&function(e){let n,s,r=`<style>${Tt["status-website"].css}</style>`;return{c(){n=new K(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),j=Tt["status-website"].js&&function(e){let n,s,r=`<script>${Tt["status-website"].js}<\/script>`;return{c(){n=new K(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),D=(Tt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customBodyHtml+"";return{c(){n=new K(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();m=new Lt({props:{segment:e[0]}});const G=e[2].default,q=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(G,e,e[1],null);return{c(){N&&N.c(),n=k(),I.c(),s=$("link"),r=$("link"),o=$("link"),L&&L.c(),a=k(),O&&O.c(),i=k(),C&&C.c(),c=k(),H&&H.c(),u=k(),j&&j.c(),d=k(),f=S(),D&&D.c(),h=S(),bt(m.$$.fragment),p=S(),b=$("main"),q&&q.c(),w=S(),E=$("footer"),x=$("p"),this.h()},l(t){const e=V('[data-svelte="svelte-ri9y7q"]',document.head);N&&N.l(e),n=k(),I.l(e),s=R(e,"LINK",{rel:!0,href:!0}),r=R(e,"LINK",{rel:!0,type:!0,href:!0}),o=R(e,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(e),a=k(),O&&O.l(e),i=k(),C&&C.l(e),c=k(),H&&H.l(e),u=k(),j&&j.l(e),d=k(),e.forEach(_),f=U(t),D&&D.l(t),h=U(t),vt(m.$$.fragment,t),p=U(t),b=R(t,"MAIN",{class:!0});var l=P(b);q&&q.l(l),l.forEach(_),w=U(t),E=R(t,"FOOTER",{class:!0});var g=P(E);x=R(g,"P",{}),P(x).forEach(_),g.forEach(_),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${Tt.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(Tt["status-website"]||{}).faviconSvg||(Tt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(Tt["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){N&&N.m(document.head,null),g(document.head,n),I.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),L&&L.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,c),H&&H.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),v(t,f,e),D&&D.m(t,e),v(t,h,e),_t(m,t,e),v(t,p,e),v(t,b,e),q&&q.m(b,null),v(t,w,e),v(t,E,e),g(E,x),x.innerHTML=z,T=!0},p(t,[e]){(Tt["status-website"]||{}).customHeadHtml&&N.p(t,e),I.p(t,e),(Tt["status-website"]||{}).scripts&&L.p(t,e),(Tt["status-website"]||{}).links&&O.p(t,e),(Tt["status-website"]||{}).metaTags&&C.p(t,e),Tt["status-website"].css&&H.p(t,e),Tt["status-website"].js&&j.p(t,e),(Tt["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),q&&q.p&&(!T||2&e)&&function(t,e,n,s,r,o){if(r){const a=l(e,n,s,o);t.p(a,r)}}(q,G,t,t[1],T?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(ht(m.$$.fragment,t),ht(q,t),T=!0)},o(t){mt(m.$$.fragment,t),mt(q,t),T=!1},d(t){N&&N.d(t),_(n),I.d(t),_(s),_(r),_(o),L&&L.d(t),_(a),O&&O.d(t),_(i),C&&C.d(t),_(c),H&&H.d(t),_(u),j&&j.d(t),_(d),t&&_(f),D&&D.d(t),t&&_(h),yt(m,t),t&&_(p),t&&_(b),q&&q.d(t),t&&_(w),t&&_(E)}}}function Jt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Wt extends Et{constructor(t){super(),wt(this,t,Jt,Kt,a,{segment:0})}}function Ft(t){let e,n,s=t[1].stack+"";return{c(){e=$("pre"),n=E(s)},l(t){e=R(t,"PRE",{});var r=P(e);n=C(r,s),r.forEach(_)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&j(n,s)},d(t){t&&_(e)}}}function Yt(e){let n,s,r,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Ft(e);return{c(){s=S(),r=$("h1"),o=E(e[0]),a=S(),i=$("p"),c=E(d),l=S(),f&&f.c(),u=k(),this.h()},l(t){V('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=U(t),r=R(t,"H1",{class:!0});var n=P(r);o=C(n,e[0]),n.forEach(_),a=U(t),i=R(t,"P",{class:!0});var h=P(i);c=C(h,d),h.forEach(_),l=U(t),f&&f.l(t),u=k(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(i,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,a,e),v(t,i,e),g(i,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&d!==(d=t[1].message+"")&&j(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Ft(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(a),t&&_(i),t&&_(l),f&&f.d(t),t&&_(u)}}}function Zt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Xt extends Et{constructor(t){super(),wt(this,t,Zt,Yt,a,{status:0,error:1})}}function Qt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&bt(n.$$.fragment),s=k()},l(t){n&&vt(n.$$.fragment,t),s=k()},m(t,e){n&&_t(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?pt(o,[gt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){dt();const t=n;mt(t.$$.fragment,1,0,(()=>{yt(t,1)})),ft()}a?(n=new a(i()),bt(n.$$.fragment),ht(n.$$.fragment,1),_t(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&ht(n.$$.fragment,t),r=!0)},o(t){n&&mt(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&yt(n,t)}}}function te(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){bt(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,s){_t(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ht(e.$$.fragment,t),n=!0)},o(t){mt(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function ee(t){let e,n,s,r;const o=[te,Qt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=k()},l(t){n.l(t),s=k()},m(t,n){a[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(dt(),mt(a[c],1,1,(()=>{a[c]=null})),ft(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),ht(n,1),n.m(s.parentNode,s))},i(t){r||(ht(n),r=!0)},o(t){mt(n),r=!1},d(t){a[e].d(t),t&&_(s)}}}function ne(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Wt({props:o}),{c(){bt(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,e){_t(n,t,e),s=!0},p(t,[e]){const s=12&e?pt(r,[4&e&&{segment:t[2][0]},8&e&&gt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ht(n.$$.fragment,t),s=!0)},o(t){mt(n.$$.fragment,t),s=!1},d(t){yt(n,t)}}}function se(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return Y(l),u=xt,d=s,W().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class re extends Et{constructor(t){super(),wt(this,t,se,ne,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const oe=[],ae=[{js:()=>Promise.all([import("./index.d32eb130.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.b9874978.js"),__inject_styles(["client-d6959ee0.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.e520da72.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.45c46623.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.919fefba.js"),__inject_styles(["client-d6959ee0.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ce=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ce(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ce(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ce;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let de,fe=1;const he="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},me={};let pe,ge;function be(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ve(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe))return null;let e=t.pathname.slice(pe.length);if(""===e&&(e="/"),!oe.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const s=ie[n],r=s.pattern.exec(e);if(r){const n=be(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function _e(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ve(r);if(o){we(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),he.pushState({id:de},"",r.href)}}function ye(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(me[de]=ye(),t.state){const e=ve(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else!function(t){fe=t}(fe+1),function(t){de=t}(fe),he.replaceState({id:de},"",location.href)}function we(t,e,n,s){return le(this,void 0,void 0,(function*(){const r=!!e;if(r)de=e;else{const t=ye();me[de]=t,de=e=++fe,me[de]=n?t:{x:0,y:0}}if(yield ge(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=me[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),me[de]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ee(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Se,ke=null;function xe(t){const e=ue(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ve(new URL(t,Ee(document)));if(e)ke&&t===ke.href||(ke={href:t,promise:qe(e)}),ke.promise}(e.href)}function Te(t){clearTimeout(Se),Se=setTimeout((()=>{xe(t)}),20)}function Ae(t,e={noscroll:!1,replaceState:!1}){const n=ve(new URL(t,Ee(document)));if(n){const s=we(n,null,e.noscroll);return he[e.replaceState?"replaceState":"pushState"]({id:de},"",t),s}return location.href=t,new Promise((()=>{}))}const ze="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pe,Ne,Ie,Le=!1,Re=[],Oe="{}";const Ce={page:function(t){const e=kt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:kt(null),session:kt(ze&&ze.session)};let Ue,He,Me;function je(t,e){const{error:n}=t;return Object.assign({error:n},e)}function De(t){return le(this,void 0,void 0,(function*(){Pe&&Ce.preloading.set(!0);const e=function(t){return ke&&ke.href===t.href?ke.promise:qe(t)}(t),n=Ne={},s=yield e,{redirect:r}=s;if(n===Ne)if(r)yield Ae(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ge(n,e,je(e,t.page))}}))}function Ge(t,e,n){return le(this,void 0,void 0,(function*(){Ce.page.set(n),Ce.preloading.set(!1),Pe?Pe.$set(e):(e.stores={page:{subscribe:Ce.page.subscribe},preloading:{subscribe:Ce.preloading.subscribe},session:Ce.session},e.level0={props:yield Ie},e.notify=Ce.page.notify,Pe=new re({target:Me,props:e,hydrate:!0})),Re=t,Oe=JSON.stringify(n.query),Le=!0,He=!1}))}function qe(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ie){const t=()=>({});Ie=ze.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ue)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>le(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==Oe)return!0;const r=Re[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:d};const f=c++;let h;if(He||u||!Re[i]||Re[i].part!==e.i){u=!1;const{default:s,preload:r}=yield ae[e.i].js();let o;o=Le||!ze.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ue):{}:ze.preloaded[i+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=Re[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Be,Ve,Ke;Ce.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(Ue=t,!Le)return;He=!0;const e=ve(new URL(location.href)),n=Ne={},{redirect:s,props:r,branch:o}=yield qe(e);n===Ne&&(s?yield Ae(s.location,{replaceState:!0}):yield Ge(o,r,je(r,e.page)))})))),Be={target:document.querySelector("#sapper")},Ve=Be.target,Me=Ve,Ke=ze.baseUrl,pe=Ke,ge=De,"scrollRestoration"in he&&(he.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{he.scrollRestoration="auto"})),addEventListener("load",(()=>{he.scrollRestoration="manual"})),addEventListener("click",_e),addEventListener("popstate",$e),addEventListener("touchstart",xe),addEventListener("mousemove",Te),ze.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=ze;Ie||(Ie=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Ie},level1:{props:{status:o,error:a},component:Xt},segments:r},c=be(n);Ge([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;he.replaceState({id:fe},"",e);const n=ve(new URL(location.href));if(n)return we(n,fe,!0,t)}));export{j as A,x as B,r as C,Q as D,M as E,c as F,d as G,K as H,G as I,V as J,Ut as K,w as L,O as M,Ae as N,D as O,T as P,e as Q,z as R,Et as S,pt as T,Y as U,Z as V,u as W,gt as X,rt as Y,B as Z,S as a,R as b,U as c,P as d,$ as e,_ as f,A as g,v as h,wt as i,dt as j,ft as k,ht as l,E as m,C as n,F as o,g as p,t as q,Tt as r,a as s,mt as t,k as u,y as v,bt as w,vt as x,_t as y,yt as z};

import __inject_styles from './inject_styles.803b7e80.js';