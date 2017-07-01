/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,y){'use strict';function Ea(a,b,c){if(!a)throw Oa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Pa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function X(a,b,c){var d="";a=W(a)?a:a&&F(a)&&a.length?a.split(/\s+/):[];s(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Ga(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(ua(a))}if(1===a.nodeType)return E(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Qa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Ra(a,b,c){s(b,function(b){a.removeClass(b,c)})}function Y(a){return function(b,c){c.addClass&&(Qa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ra(a,b,c.removeClass),c.removeClass=null)}}function na(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Ha(a,b);Ia(a,b)}function Ha(a,b){b.from&&(a.css(b.from),b.from=null)}function Ia(a,b){b.to&&(a.css(b.to),b.to=null)}function U(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Sa(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==P?d.domOperation:null;va(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Sa(a,b,c){function d(a){F(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);s(b,function(a,b){f[b]=1});c=d(c);s(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};s(f,function(b,c){var d,f;1===b?(d="addClass",
f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function Q(a){return a instanceof E?a[0]:a}function Ta(a,b,c){var d="";b&&(d=X(b,"ng-",!0));c.addClass&&(d=Z(d,X(c.addClass,"-add")));c.removeClass&&(d=Z(d,X(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function oa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=$+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
b){a.style[b[0]]=b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Ja(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};s(c,function(a,b){var c=f[a];if(c){var G=c.charAt(0);if("-"===G||"+"===G||0<=G)c=Ua(c);0===c&&(c=null);d[b]=c}});return d}function Ua(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ka(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function La(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ma(a,b,c){s(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,za,$,Aa;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",za="webkitTransitionEnd transitionend"):(S="transition",za=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?($="WebkitAnimation",Aa="webkitAnimationEnd animationend"):($="animation",Aa="animationend");var pa=$+"Delay",Ba=$+"Duration",la=S+"Delay",Na=S+"Duration",Oa=y.$$minErr("ng"),Va={transitionDuration:Na,transitionDelay:la,transitionProperty:S+"Property",animationDuration:Ba,animationDelay:pa,animationIterationCount:$+"IterationCount"},Wa={transitionDuration:Na,transitionDelay:la,animationDuration:Ba,animationDelay:pa},Ca,va,
s,W,ya,da,Da,aa,F,N,E,P;y.module("ngAnimate",[],function(){P=y.noop;Ca=y.copy;va=y.extend;E=y.element;s=y.forEach;W=y.isArray;F=y.isString;aa=y.isObject;N=y.isUndefined;ya=y.isDefined;Da=y.isFunction;da=y.isElement}).info({angularVersion:"1.6.4"}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,p){var K,G;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){K&&a.leave(K);G&&(G.$destroy(),G=
null);if(f||0===f)G=b.$new(),p(G,function(b){K=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;F(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),p=0;p<b.length;p++)b[p]();
f||a(function(){f||c()})}}var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c){return e[a].some(function(a){return a(b,c)})}function f(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||
"").length;return b?c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&f(a)});e.skip.push(function(a,b){return!a.structural&&!f(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;
var d=a.addClass,f=a.removeClass,e=b.addClass,qa=b.removeClass;return N(d)&&N(f)||N(e)&&N(qa)?!1:c(d,qa)||c(f,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,e,n,z,qa,J,u,H,k,O){function L(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function A(a,b,c){var g=[],d=h[c];d&&s(d,function(d){w.call(d.node,b)?g.push(d.callback):"leave"===c&&
w.call(d.node,a)&&g.push(d.callback)});return g}function B(a,b,c){var g=ua(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function q(a,h,v){function q(a,c,g,d){G(function(){var a=A(ta,k,c);a.length?b(function(){s(a,function(a){a(e,g,d)});"close"!==g||k.parentNode||ra.off(k)}):"close"!==g||k.parentNode||ra.off(k)});a.progress(c,g,d)}function B(a){var b=e,c=m;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),
c.activeClasses=null);D(e,m);ha(e,m);m.domOperation();t.complete(!a)}var m=Ca(v),e=Ga(a),k=Q(e),ta=k&&k.parentNode,m=na(m),t=new J,G=L();W(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!F(m.addClass)&&(m.addClass=null);W(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!F(m.removeClass)&&(m.removeClass=null);m.from&&!aa(m.from)&&(m.from=null);m.to&&!aa(m.to)&&(m.to=null);if(!k)return B(),t;v=[k.getAttribute("class"),m.addClass,m.removeClass].join(" ");if(!Xa(v))return B(),
t;var n=0<=["enter","move","leave"].indexOf(h),w=O(),u=!g||w||ga.get(k);v=!u&&x.get(k)||{};var H=!!v.state;u||H&&1===v.state||(u=!M(k,ta,h));if(u)return w&&q(t,h,"start"),B(),w&&q(t,h,"close"),t;n&&sa(k);w={structural:n,element:e,event:h,addClass:m.addClass,removeClass:m.removeClass,close:B,options:m,runner:t};if(H){if(d("skip",w,v)){if(2===v.state)return B(),t;U(e,v,w);return v.runner}if(d("cancel",w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return U(e,v,w),v.runner;else if(d("join",
w,v))if(2===v.state)U(e,w,{});else return Ta(e,n?h:null,m),h=w.event=v.event,m=U(e,v,w),v.runner}else U(e,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||f(w));if(!H)return B(),l(k),t;var z=(v.counter||0)+1;w.counter=z;I(k,1,w);c.$$postDigest(function(){e=Ga(a);var b=x.get(k),c=!b,b=b||{},g=0<(e.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==z||!g){c&&(D(e,m),ha(e,m));if(c||n&&b.event!==h)m.domOperation(),t.end();g||l(k)}else h=
!b.structural&&f(b,!0)?"setClass":b.event,I(k,2),b=qa(e,h,b.options),t.setHost(b),q(t,h,"start",{}),b.done(function(a){B(!a);(a=x.get(k))&&a.counter===z&&l(k);q(t,h,"close",{})})});return t}function sa(a){a=a.querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=x.get(a);if(c)switch(b){case 2:c.runner.end();case 1:x.delete(a)}})}function l(a){a.removeAttribute("data-ng-animate");x.delete(a)}function M(a,b,c){c=n[0].body;var g=Q(e),d=a===c||"HTML"===
a.nodeName,h=a===g,f=!1,k=ga.get(a),A;for((a=E.data(a,"$ngAnimatePin"))&&(b=Q(a));b;){h||(h=b===g);if(1!==b.nodeType)break;a=x.get(b)||{};if(!f){var q=ga.get(b);if(!0===q&&!1!==k){k=!0;break}else!1===q&&(k=!1);f=a.structural}if(N(A)||!0===A)a=E.data(b,"$$ngAnimateChildren"),ya(a)&&(A=a);if(f&&!1===A)break;d||(d=b===c);if(d&&h)break;if(!h&&(a=E.data(b,"$ngAnimatePin"))){b=Q(a);continue}b=b.parentNode}return(!f||A)&&!0!==k&&h&&d}function I(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);
c=(b=x.get(a))?va(b,c):c;x.set(a,c)}var x=new z,ga=new z,g=null,ta=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(ta(),c.$$postDigest(function(){c.$$postDigest(function(){null===g&&(g=!0)})}))}),h=Object.create(null),t=a.classNameFilter(),Xa=t?function(a){return t.test(a)}:function(){return!0},D=Y(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ra={on:function(a,b,c){var g=ua(b);h[a]=h[a]||[];h[a].push({node:g,callback:c});
E(b).on("$destroy",function(){x.get(g)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||F(arguments[0])){var g=h[a];g&&(h[a]=1===arguments.length?null:B(g,b,c))}else for(g in b=arguments[0],h)h[g]=B(h[g],b)},pin:function(a,b){Ea(da(a),"element","not an element");Ea(da(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return q(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!g;else if(da(a)){var d=Q(a);1===
c?b=!ga.get(d):ga.set(d,!b)}else b=g=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(a,d,f,e,p,K){function G(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,e=d.parentNode;f.set(d,a);for(var q;e;){if(q=f.get(e)){q.processed||(q=b(q));break}e=e.parentNode}(q||c).children.push(a);return a}var c={children:[]},d,f=new p;for(d=
0;d<a.length;d++){var e=a[d];f.set(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var k=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(k.fn);k.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var n=[],z=Y(a);return function(p,J,u){function H(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");
var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function k(a){var b=[],c={};s(a,function(a,d){var h=Q(a.element),f=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var e=f?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][e]={animationID:d,element:E(a)}})}else b.push(a)});var d={},f={};s(c,function(c,e){var k=c.from,A=c.to;if(k&&A){var q=a[k.animationID],x=a[A.animationID],l=k.animationID.toString();
if(!f[l]){var B=f[l]={structural:!0,beforeStart:function(){q.beforeStart();x.beforeStart()},close:function(){q.close();x.close()},classes:O(q.classes,x.classes),from:q,to:x,anchors:[]};B.classes.length?b.push(B):(b.push(q),b.push(x))}f[l].anchors.push({out:k.element,"in":A.element})}else k=k?k.animationID:A.animationID,A=k.toString(),d[A]||(d[A]=!0,b.push(a[k]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var f=a[d];if("ng-"!==f.substring(0,3))for(var e=
0;e<b.length;e++)if(f===b[e]){c.push(f);break}}return c.join(" ")}function L(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function A(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function B(){var a=p.data("$$animationRunner");!a||"leave"===J&&u.$$domOperationFired||a.end()}function q(b){p.off("$destroy",B);p.removeData("$$animationRunner");z(p,u);ha(p,u);u.domOperation();I&&a.removeClass(p,I);
p.removeClass("ng-animate");l.complete(!b)}u=na(u);var sa=0<=["enter","move","leave"].indexOf(J),l=new e({end:function(){q()},cancel:function(){q(!0)}});if(!b.length)return q(),l;p.data("$$animationRunner",l);var M=Fa(p.attr("class"),Fa(u.addClass,u.removeClass)),I=u.tempClasses;I&&(M+=" "+I,u.tempClasses=null);var x;sa&&(x="ng-"+J+"-prepare",a.addClass(p,x));n.push({element:p,classes:M,event:J,structural:sa,options:u,beforeStart:function(){p.addClass("ng-animate");I&&a.addClass(p,I);x&&(a.removeClass(p,
x),x=null)},close:q});p.on("$destroy",B);if(1<n.length)return l;d.$$postDigest(function(){var a=[];s(n,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});n.length=0;var b=k(a),c=[];s(b,function(a){c.push({domNode:Q(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=L(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),A(a,b)):c()}})});K(G(c))});return l}}]}]).provider("$animateCss",
["$animateProvider",function(a){var b=La(),c=La();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,p,K,G,n,z){function y(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function J(e,k,q,p){var l;0<b.count(q)&&(l=c.get(q),l||(k=X(k,"-stagger"),f.addClass(e,k),l=Ja(a,e,p),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=
Math.max(l.transitionDuration,0),f.removeClass(e,k),c.put(q,l)));return l||{}}function u(a){L.push(a);n.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K(),d=0;d<L.length;d++)L[d](a);L.length=0})}function H(c,f,e){f=b.get(e);f||(f=Ja(a,c,Va),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);
return c}var k=Y(f),O=0,L=[];return function(a,c){function d(){l()}function n(){l(!0)}function l(b){if(!(w||E&&O)){w=!0;O=!1;g.$$skipPreparationClasses||f.removeClass(a,fa);f.removeClass(a,da);wa(h,!1);oa(h,!1);s(t,function(a){h.style[a[0]]=""});k(a,g);ha(a,g);Object.keys(L).length&&s(L,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();ea&&ea.length&&a.off(ea.join(" "),x);var c=a.data("$$animateCss");c&&(p.cancel(c[0].timer),a.removeData("$$animateCss"));
F&&F.complete(!b)}}function M(a){r.blockTransition&&oa(h,a);r.blockKeyframeAnimation&&wa(h,!!a)}function I(){F=new e({end:d,cancel:n});u(P);l();return{$$willAnimate:!1,start:function(){return F},end:d}}function x(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-Y,0)>=R&&b>=m&&(E=!0,l())}function ga(){function b(){if(!w){M(!1);s(t,function(a){h.style[a[0]]=a[1]});k(a,g);f.addClass(a,da);if(r.recalculateTimingStyles){ma=
h.getAttribute("class")+" "+fa;ja=y(h,ma);C=H(h,ma,ja);ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;if(0===m){l();return}r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration}r.applyAnimationDelay&&(ba="boolean"!==typeof g.delay&&xa(g.delay)?parseFloat(g.delay):ba,N=Math.max(ba,0),C.animationDelay=ba,ca=[pa,ba+"s"],t.push(ca),h.style[ca[0]]=ca[1]);R=1E3*N;U=1E3*m;if(g.easing){var d,e=g.easing;r.hasTransitions&&(d=S+"TimingFunction",t.push([d,e]),h.style[d]=e);r.hasAnimations&&
(d=$+"TimingFunction",t.push([d,e]),h.style[d]=e)}C.transitionDuration&&ea.push(za);C.animationDuration&&ea.push(Aa);Y=Date.now();var n=R+1.5*U;d=Y+n;var e=a.data("$$animateCss")||[],q=!0;if(e.length){var I=e[0];(q=d>I.expectedEndTime)?p.cancel(I.timer):e.push(l)}q&&(n=p(c,n,!1),e[0]={timer:n,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(ea.length)a.on(ea.join(" "),x);g.to&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.to)),Ia(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=
1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(E)O&&a&&(O=!1,l());else if(O=!a,C.animationDuration)if(a=wa(h,O),O)t.push(a);else{var b=t,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<aa&&(C.transitionDuration&&0===V.transitionDuration||C.animationDuration&&0===V.animationDuration)&&Math.max(V.animationDelay,V.transitionDelay);e?p(b,Math.floor(e*aa*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=na(Ca(g)));
var L={},h=Q(a);if(!h||!h.parentNode||!z.enabled())return I();var t=[],K=a.attr("class"),D=Pa(g),w,O,E,F,v,N,R,m,U,Y,ea=[];if(0===g.duration||!G.animations&&!G.transitions)return I();var ia=g.event&&W(g.event)?g.event.join(" "):g.event,Z="",T="";ia&&g.structural?Z=X(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(T+=X(g.addClass,"-add"));g.removeClass&&(T.length&&(T+=" "),T+=X(g.removeClass,"-remove"));g.applyClassesEarly&&T.length&&k(a,g);var fa=[Z,T].join(" ").trim(),ma=K+" "+fa,da=X(fa,"-active"),K=D.to&&
0<Object.keys(D.to).length;if(!(0<(g.keyframeStyle||"").length||K||fa))return I();var ja,V;0<g.stagger?(D=parseFloat(g.stagger),V={transitionDelay:D,animationDelay:D,transitionDuration:0,animationDuration:0}):(ja=y(h,ma),V=J(h,fa,ja,Wa));g.$$skipPreparationClasses||f.addClass(a,fa);g.transitionStyle&&(D=[S,g.transitionStyle],ka(h,D),t.push(D));0<=g.duration&&(D=0<h.style[S].length,D=Ka(g.duration,D),ka(h,D),t.push(D));g.keyframeStyle&&(D=[$,g.keyframeStyle],ka(h,D),t.push(D));var aa=V?0<=g.staggerIndex?
g.staggerIndex:b.count(ja):0;(ia=0===aa)&&!g.skipBlocking&&oa(h,9999);var C=H(h,ma,ja),ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;var r={};r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration;r.hasTransitionAll=r.hasTransitions&&"all"===C.transitionProperty;r.applyTransitionDuration=K&&(r.hasTransitions&&!r.hasTransitionAll||r.hasAnimations&&!r.hasTransitions);r.applyAnimationDuration=g.duration&&r.hasAnimations;r.applyTransitionDelay=xa(g.delay)&&(r.applyTransitionDuration||
r.hasTransitions);r.applyAnimationDelay=xa(g.delay)&&r.hasAnimations;r.recalculateTimingStyles=0<T.length;if(r.applyTransitionDuration||r.applyAnimationDuration)m=g.duration?parseFloat(g.duration):m,r.applyTransitionDuration&&(r.hasTransitions=!0,C.transitionDuration=m,D=0<h.style[S+"Property"].length,t.push(Ka(m,D))),r.applyAnimationDuration&&(r.hasAnimations=!0,C.animationDuration=m,t.push([Ba,m+"s"]));if(0===m&&!r.recalculateTimingStyles)return I();if(null!=g.delay){var ca;"boolean"!==typeof g.delay&&
(ca=parseFloat(g.delay),N=Math.max(ca,0));r.applyTransitionDelay&&t.push([la,ca+"s"]);r.applyAnimationDelay&&t.push([pa,ca+"s"])}null==g.duration&&0<C.transitionDuration&&(r.recalculateTimingStyles=r.recalculateTimingStyles||ia);R=1E3*N;U=1E3*m;g.skipBlocking||(r.blockTransition=0<C.transitionDuration,r.blockKeyframeAnimation=0<C.animationDuration&&0<V.animationDelay&&0===V.animationDuration);g.from&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.from)),Ha(a,g));r.blockTransition||r.blockKeyframeAnimation?
M(m):g.skipBlocking||oa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!w)return v={end:d,cancel:n,resume:null,pause:null},F=new e(v),u(ga),F}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,p,K){function G(a){return a.replace(/\bng-\S+\b/g,"")}function n(a,b){F(a)&&(a=a.split(" "));F(b)&&(b=b.split(" "));
return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function z(c,e,f){function p(a){var b={},c=Q(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function K(){var c=G(f.attr("class")||""),d=n(c,l),c=n(l,c),d=a(z,{to:p(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function q(){z.remove();e.removeClass("ng-animate-shim");
f.removeClass("ng-animate-shim")}var z=E(Q(e).cloneNode(!0)),l=G(z.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");z.addClass("ng-anchor");H.append(z);var M;c=function(){var c=a(z,{addClass:"ng-anchor-out",delay:!0,from:p(e)});return c.$$willAnimate?c:null}();if(!c&&(M=K(),!M))return q();var I=c||M;return{start:function(){function a(){c&&c.end()}var b,c=I.start();c.done(function(){c=null;if(!M&&(M=K()))return c=M.start(),c.done(function(){c=null;q();b.complete()}),c;
q();b.complete()});return b=new d({end:a,cancel:a})}}}function y(a,b,c,e){var f=J(a,P),p=J(b,P),n=[];s(e,function(a){(a=z(c,a.out,a["in"]))&&n.push(a)});if(f||p||0!==n.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];f&&b.push(f.start());p&&b.push(p.start());s(n,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function J(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=
!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return P;var u=K[0].body;c=Q(f);var H=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);return function(a){return a.from&&a.to?y(a.from,a.to,a.classes,a.anchors):J(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=
W(c)?c:c.split(" ");for(var d=[],e={},f=0;f<c.length;f++){var s=c[f],y=a.$$registeredAnimations[s];y&&!e[s]&&(d.push(b.get(y)),e[s]=!0)}return d}var e=Y(d);return function(a,b,d,n){function z(){n.domOperation();e(a,n)}function y(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,k,F,f];break;case "addClass":b=[b,k,f];break;case "removeClass":b=[b,F,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;
return P}function J(a,b,d,e,f){var k=[];s(e,function(e){var l=e[f];l&&k.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=y(l,a,b,d,function(a){h(!1===a)});return e})});return k}function u(a,b,d,e,f){var k=J(a,b,d,e,f);if(0===k.length){var h,l;"beforeSetClass"===f?(h=J(a,"removeClass",d,e,"beforeRemoveClass"),l=J(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=J(a,"removeClass",d,e,"removeClass"),l=J(a,"addClass",
d,e,"addClass"));h&&(k=k.concat(h));l&&(k=k.concat(l))}if(0!==k.length)return function(a){var b=[];k.length&&s(k,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&aa(d)&&(n=d,d=null);n=na(n);d||(d=a.attr("class")||"",n.addClass&&(d+=" "+n.addClass),n.removeClass&&(d+=" "+n.removeClass));var k=n.addClass,F=n.removeClass,L=f(d),A,B;if(L.length){var q,E;"leave"===b?(E="leave",q="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+
b.substr(1),q=b);"enter"!==b&&"move"!==b&&(A=u(a,b,n,L,E));B=u(a,b,n,L,q)}if(A||B){var l;return{$$willAnimate:!0,end:function(){l?l.end():(H=!0,z(),ha(a,n),l=new c,l.complete(!0));return l},start:function(){function b(c){H=!0;z();ha(a,n);l.complete(c)}if(l)return l;l=new c;var d,e=[];A&&e.push(function(a){d=A(a)});e.length?e.push(function(a){z();a(!0)}):z();B&&e.push(function(a){d=B(a)});l.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),p=d(a.to);if(b||p)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());p&&d.push(p.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/**
 * @license AngularJS v1.6.4
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {

'use strict';

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 *
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc.
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = function() {
    return new angular.mock.$Browser();
  };
};

angular.mock.$Browser = function() {
  var self = this;

  this.isMock = true;
  self.$$url = 'http://server/';
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // Testability API

  var outstandingRequestCount = 0;
  var outstandingRequestCallbacks = [];
  self.$$incOutstandingRequestCount = function() { outstandingRequestCount++; };
  self.$$completeOutstandingRequest = function(fn) {
    try {
      fn();
    } finally {
      outstandingRequestCount--;
      if (!outstandingRequestCount) {
        while (outstandingRequestCallbacks.length) {
          outstandingRequestCallbacks.pop()();
        }
      }
    }
  };
  self.notifyWhenNoOutstandingRequests = function(callback) {
    if (outstandingRequestCount) {
      outstandingRequestCallbacks.push(callback);
    } else {
      callback();
    }
  };

  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
          self.$$lastUrl = self.$$url;
          self.$$lastState = self.$$state;
          listener(self.$$url, self.$$state);
        }
      }
    );

    return listener;
  };

  self.$$applicationDestroyed = angular.noop;
  self.$$checkUrlChange = angular.noop;

  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay) {
    // Note that we do not use `$$incOutstandingRequestCount` or `$$completeOutstandingRequest`
    // in this mock implementation.
    delay = delay || 0;
    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
    self.deferredFns.sort(function(a, b) { return a.time - b.time;});
    return self.deferredNextId++;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var fnIndex;

    angular.forEach(self.deferredFns, function(fn, index) {
      if (fn.id === deferId) fnIndex = index;
    });

    if (angular.isDefined(fnIndex)) {
      self.deferredFns.splice(fnIndex, 1);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    var nextTime;

    if (angular.isDefined(delay)) {
      // A delay was passed so compute the next time
      nextTime = self.defer.now + delay;
    } else {
      if (self.deferredFns.length) {
        // No delay was passed so set the next time so that it clears the deferred queue
        nextTime = self.deferredFns[self.deferredFns.length - 1].time;
      } else {
        // No delay passed, but there are no deferred tasks so flush - indicates an error!
        throw new Error('No deferred tasks to be flushed');
      }
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= nextTime) {
      // Increment the time and call the next deferred function
      self.defer.now = self.deferredFns[0].time;
      self.deferredFns.shift().fn();
    }

    // Ensure that the current time is correct
    self.defer.now = nextTime;
  };

  self.$$baseHref = '/';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

  /**
   * @name $browser#poll
   *
   * @description
   * run all fns in pollFns
   */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn) {
      pollFn();
    });
  },

  url: function(url, replace, state) {
    if (angular.isUndefined(state)) {
      state = null;
    }
    if (url) {
      this.$$url = url;
      // Native pushState serializes & copies the object; simulate it.
      this.$$state = angular.copy(state);
      return this;
    }

    return this.$$url;
  },

  state: function() {
    return this.$$state;
  }
};


/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed to the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *     mode stores an array of errors in `$exceptionHandler.errors`, to allow later assertion of
   *     them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *     {@link ngMock.$log#reset reset()}.
   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
   *     is a bug in the application or test, so this mock will make these tests fail. For any
   *     implementations that expect exceptions to be thrown, the `rethrow` mode will also maintain
   *     a log of thrown errors in `$exceptionHandler.errors`.
   */
  this.mode = function(mode) {

    switch (mode) {
      case 'log':
      case 'rethrow':
        var errors = [];
        handler = function(e) {
          if (arguments.length === 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
          if (mode === 'rethrow') {
            throw e;
          }
        };
        handler.errors = errors;
        break;
      default:
        throw new Error('Unknown mode \'' + mode + '\', only \'log\'/\'rethrow\' modes are allowed!');
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function() {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function() {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#log `log()`}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#info `info()`}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#warn `warn()`}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#error `error()`}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#debug `debug()`}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that all of the logging methods have no logged messages. If any messages are present,
     * an exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function(logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift('Expected $log to be empty! Either a message was logged unexpectedly, or ' +
          'an expected log message was not checked and removed:');
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @param {...*=} Pass additional parameters to the executed function.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$browser', '$rootScope', '$q', '$$q',
       function($browser,   $rootScope,   $q,   $$q) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0;

    var $interval = function(fn, delay, count, invokeApply) {
      var hasParams = arguments.length > 4,
          args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
          iteration = 0,
          skipApply = (angular.isDefined(invokeApply) && !invokeApply),
          deferred = (skipApply ? $$q : $q).defer(),
          promise = deferred.promise;

      count = (angular.isDefined(count)) ? count : 0;
      promise.then(null, function() {}, (!hasParams) ? fn : function() {
        fn.apply(null, args);
      });

      promise.$$intervalId = nextRepeatId;

      function tick() {
        deferred.notify(iteration++);

        if (count > 0 && iteration >= count) {
          var fnIndex;
          deferred.resolve(iteration);

          angular.forEach(repeatFns, function(fn, index) {
            if (fn.id === promise.$$intervalId) fnIndex = index;
          });

          if (angular.isDefined(fnIndex)) {
            repeatFns.splice(fnIndex, 1);
          }
        }

        if (skipApply) {
          $browser.defer.flush();
        } else {
          $rootScope.$apply();
        }
      }

      repeatFns.push({
        nextTime:(now + delay),
        delay: delay,
        fn: tick,
        id: nextRepeatId,
        deferred: deferred
      });
      repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});

      nextRepeatId++;
      return promise;
    };
    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if (!promise) return false;
      var fnIndex;

      angular.forEach(repeatFns, function(fn, index) {
        if (fn.id === promise.$$intervalId) fnIndex = index;
      });

      if (angular.isDefined(fnIndex)) {
        repeatFns[fnIndex].deferred.promise.then(undefined, function() {});
        repeatFns[fnIndex].deferred.reject('canceled');
        repeatFns.splice(fnIndex, 1);
        return true;
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number=} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        task.nextTime += task.delay;
        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


function jsonStringToDate(string) {
  // The R_ISO8061_STR regex is never going to fit into the 100 char limit!
  // eslit-disable-next-line max-len
  var R_ISO8061_STR = /^(-?\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

  var match;
  if ((match = string.match(R_ISO8061_STR))) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    date.setUTCHours(toInt(match[4] || 0) - tzHour,
                     toInt(match[5] || 0) - tzMin,
                     toInt(match[6] || 0),
                     toInt(match[7] || 0));
    return date;
  }
  return string;
}

function toInt(str) {
  return parseInt(str, 10);
}

function padNumberInMock(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function(offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp)) {
      // eslint-disable-next-line no-throw-literal
      throw {
        name: 'Illegal Argument',
        message: 'Arg \'' + tsStr + '\' passed into TzDate constructor is not a valid date string'
      };
    }
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumberInMock(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumberInMock(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumberInMock(self.origDate.getUTCDate(), 2) + 'T' +
            padNumberInMock(self.origDate.getUTCHours(), 2) + ':' +
            padNumberInMock(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumberInMock(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumberInMock(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error('Method \'' + methodName + '\' is not implemented in the TzDate mock');
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;


/**
 * @ngdoc service
 * @name $animate
 *
 * @description
 * Mock implementation of the {@link ng.$animate `$animate`} service. Exposes two additional methods
 * for testing animations.
 *
 * You need to require the `ngAnimateMock` module in your test suite for instance `beforeEach(module('ngAnimateMock'))`
 */
angular.mock.animate = angular.module('ngAnimateMock', ['ng'])
  .info({ angularVersion: '1.6.4' })

  .config(['$provide', function($provide) {

    $provide.factory('$$forceReflow', function() {
      function reflowFn() {
        reflowFn.totalReflows++;
      }
      reflowFn.totalReflows = 0;
      return reflowFn;
    });

    $provide.factory('$$animateAsyncRun', function() {
      var queue = [];
      var queueFn = function() {
        return function(fn) {
          queue.push(fn);
        };
      };
      queueFn.flush = function() {
        if (queue.length === 0) return false;

        for (var i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue = [];

        return true;
      };
      return queueFn;
    });

    $provide.decorator('$$animateJs', ['$delegate', function($delegate) {
      var runners = [];

      var animateJsConstructor = function() {
        var animator = $delegate.apply($delegate, arguments);
        // If no javascript animation is found, animator is undefined
        if (animator) {
          runners.push(animator);
        }
        return animator;
      };

      animateJsConstructor.$closeAndFlush = function() {
        runners.forEach(function(runner) {
          runner.end();
        });
        runners = [];
      };

      return animateJsConstructor;
    }]);

    $provide.decorator('$animateCss', ['$delegate', function($delegate) {
      var runners = [];

      var animateCssConstructor = function(element, options) {
        var animator = $delegate(element, options);
        runners.push(animator);
        return animator;
      };

      animateCssConstructor.$closeAndFlush = function() {
        runners.forEach(function(runner) {
          runner.end();
        });
        runners = [];
      };

      return animateCssConstructor;
    }]);

    $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF', '$animateCss', '$$animateJs',
                                    '$$forceReflow', '$$animateAsyncRun', '$rootScope',
                            function($delegate,   $timeout,   $browser,   $$rAF,   $animateCss,   $$animateJs,
                                     $$forceReflow,   $$animateAsyncRun,  $rootScope) {
      var animate = {
        queue: [],
        cancel: $delegate.cancel,
        on: $delegate.on,
        off: $delegate.off,
        pin: $delegate.pin,
        get reflows() {
          return $$forceReflow.totalReflows;
        },
        enabled: $delegate.enabled,
        /**
         * @ngdoc method
         * @name $animate#closeAndFlush
         * @description
         *
         * This method will close all pending animations (both {@link ngAnimate#javascript-based-animations Javascript}
         * and {@link ngAnimate.$animateCss CSS}) and it will also flush any remaining animation frames and/or callbacks.
         */
        closeAndFlush: function() {
          // we allow the flush command to swallow the errors
          // because depending on whether CSS or JS animations are
          // used, there may not be a RAF flush. The primary flush
          // at the end of this function must throw an exception
          // because it will track if there were pending animations
          this.flush(true);
          $animateCss.$closeAndFlush();
          $$animateJs.$closeAndFlush();
          this.flush();
        },
        /**
         * @ngdoc method
         * @name $animate#flush
         * @description
         *
         * This method is used to flush the pending callbacks and animation frames to either start
         * an animation or conclude an animation. Note that this will not actually close an
         * actively running animation (see {@link ngMock.$animate#closeAndFlush `closeAndFlush()`} for that).
         */
        flush: function(hideErrors) {
          $rootScope.$digest();

          var doNextRun, somethingFlushed = false;
          do {
            doNextRun = false;

            if ($$rAF.queue.length) {
              $$rAF.flush();
              doNextRun = somethingFlushed = true;
            }

            if ($$animateAsyncRun.flush()) {
              doNextRun = somethingFlushed = true;
            }
          } while (doNextRun);

          if (!somethingFlushed && !hideErrors) {
            throw new Error('No pending animations ready to be closed or flushed');
          }

          $rootScope.$digest();
        }
      };

      angular.forEach(
        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event: method,
            element: arguments[0],
            options: arguments[arguments.length - 1],
            args: arguments
          });
          return $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    }]);

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: This is not an injectable instance, just a globally available function.
 *
 * Method for serializing common angular objects (scope, elements, etc..) into strings.
 * It is useful for logging objects to the console when debugging.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for (var key in scope) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while (child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * <div class="alert alert-info">
 * **Note**: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 * </div>
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an Angular application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * ## Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * ## Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * ## Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The module code
  angular
    .module('MyApp', [])
    .controller('MyController', MyController);

  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').then(function(response) {
      authToken = response.headers('A-Token');
      $scope.user = response.data;
    }).catch(function() {
      $scope.status = 'Failed...';
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).then(function(response) {
        $scope.status = '';
      }).catch(function() {
        $scope.status = 'Failed...';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       // Set up the module
       beforeEach(module('MyApp'));

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was sent, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] === 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
  ```
 *
 * ## Dynamic responses
 *
 * You define a response to a request by chaining a call to `respond()` onto a definition or expectation.
 * If you provide a **callback** as the first parameter to `respond(callback)` then you can dynamically generate
 * a response based on the properties of the request.
 *
 * The `callback` function should be of the form `function(method, url, data, headers, params)`.
 *
 * ### Query parameters
 *
 * By default, query parameters on request URLs are parsed into the `params` object. So a request URL
 * of `/list?q=searchstr&orderby=-name` would set `params` to be `{q: 'searchstr', orderby: '-name'}`.
 *
 * ### Regex parameter matching
 *
 * If an expectation or definition uses a **regex** to match the URL, you can provide an array of **keys** via a
 * `params` argument. The index of each **key** in the array will match the index of a **group** in the
 * **regex**.
 *
 * The `params` object in the **callback** will now have properties with these keys, which hold the value of the
 * corresponding **group** in the **regex**.
 *
 * This also applies to the `when` and `expect` shortcut methods.
 *
 *
 * ```js
 *   $httpBackend.expect('GET', /\/user\/(.+)/, undefined, undefined, ['id'])
 *     .respond(function(method, url, data, headers, params) {
 *       // for requested url of '/user/1234' params is {id: '1234'}
 *     });
 *
 *   $httpBackend.whenPATCH(/\/user\/(.+)\/article\/(.+)/, undefined, undefined, ['user', 'article'])
 *     .respond(function(method, url, data, headers, params) {
 *       // for url of '/user/1234/article/567' params is {user: '1234', article: '567'}
 *     });
 * ```
 *
 * ## Matching route requests
 *
 * For extra convenience, `whenRoute` and `expectRoute` shortcuts are available. These methods offer colon
 * delimited matching of the url path, ignoring the query string. This allows declarations
 * similar to how application routes are configured with `$routeProvider`. Because these methods convert
 * the definition url to regex, declaration order is important. Combined with query parameter parsing,
 * the following is possible:
 *
  ```js
    $httpBackend.whenRoute('GET', '/users/:id')
      .respond(function(method, url, data, headers, params) {
        return [200, MockUserList[Number(params.id)]];
      });

    $httpBackend.whenRoute('GET', '/users')
      .respond(function(method, url, data, headers, params) {
        var userList = angular.copy(MockUserList),
          defaultSort = 'lastName',
          count, pages, isPrevious, isNext;

        // paged api response '/v1/users?page=2'
        params.page = Number(params.page) || 1;

        // query for last names '/v1/users?q=Archer'
        if (params.q) {
          userList = $filter('filter')({lastName: params.q});
        }

        pages = Math.ceil(userList.length / pagingLength);
        isPrevious = params.page > 1;
        isNext = params.page < pages;

        return [200, {
          count:    userList.length,
          previous: isPrevious,
          next:     isNext,
          // sort field -> '/v1/users?sortBy=firstName'
          results:  $filter('orderBy')(userList, params.sortBy || defaultSort)
                      .splice((params.page - 1) * pagingLength, pagingLength)
        }];
      });
  ```
 */
angular.mock.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', createHttpBackendMock];

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy,
      // We cache the original backend so that if both ngMock and ngMockE2E override the
      // service the ngMockE2E version can pass through to the real backend
      originalHttpBackend = $delegate.$$originalHttpBackend || $delegate;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText]
          : [200, status, data, headers];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers) {

    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    xhr.$$events = eventHandlers;
    xhr.upload.$$events = uploadEventHandlers;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout) {
        if (timeout.then) {
          timeout.then(handleTimeout);
        } else {
          $timeout(handleTimeout, timeout);
        }
      }

      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers, wrapped.params(url));
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''));
      }

      function handleTimeout() {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '');
            break;
          }
        }
      }
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data)) {
        throw new Error('Expected ' + expectation + ' with different data\n' +
            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
      }

      if (!expectation.matchHeaders(headers)) {
        throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));
      }

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = -1, definition;
    while ((definition = definitions[++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          originalHttpBackend(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers);
        } else throw new Error('No response defined !');
        return;
      }
    }
    throw wasExpected ?
        new Error('No response defined !') :
        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   *
   *  - respond –
   *      ```js
   *      {function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers, params)}
   *      ```
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (Array|Object|string),
   *    response headers (Object), and the text for the status (string). The respond method returns
   *    the `requestHandler` object for possible overrides.
   */
  $httpBackend.when = function(method, url, data, headers, keys) {

    assertArgDefined(arguments, 1, 'url');

    var definition = new MockHttpExpectation(method, url, data, headers, keys),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.passThrough = undefined;
            definition.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.response = undefined;
        definition.passThrough = true;
        return chain;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */
  createShortMethods('when');

  /**
   * @ngdoc method
   * @name $httpBackend#whenRoute
   * @description
   * Creates a new backend definition that compares only with the requested route.
   *
   * @param {string} method HTTP method.
   * @param {string} url HTTP url string that supports colon param matching.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #when for more info.
   */
  $httpBackend.whenRoute = function(method, url) {
    var pathObj = parseRoute(url);
    return $httpBackend.when(method, pathObj.regexp, undefined, undefined, pathObj.keys);
  };

  function parseRoute(url) {
    var ret = {
      regexp: url
    },
    keys = ret.keys = [];

    if (!url || !angular.isString(url)) return ret;

    url = url
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([?*])?/g, function(_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([/$*])/g, '\\$1');

    ret.regexp = new RegExp('^' + url, 'i');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *  request is handled. You can save this object for later use and invoke `respond` again in
   *  order to change how a matched request is handled.
   *
   *  - respond –
   *    ```
   *    { function([status,] data[, headers, statusText])
   *    | function(function(method, url, data, headers, params)}
   *    ```
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (Array|Object|string),
   *    response headers (Object), and the text for the status (string). The respond method returns
   *    the `requestHandler` object for possible overrides.
   */
  $httpBackend.expect = function(method, url, data, headers, keys) {

    assertArgDefined(arguments, 1, 'url');

    var expectation = new MockHttpExpectation(method, url, data, headers, keys),
        chain = {
          respond: function(status, data, headers, statusText) {
            expectation.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    expectations.push(expectation);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)=} url HTTP url or function that receives an url
   *   and returns true if the url matches the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */
  createShortMethods('expect');

  /**
   * @ngdoc method
   * @name $httpBackend#expectRoute
   * @description
   * Creates a new request expectation that compares only with the requested route.
   *
   * @param {string} method HTTP method.
   * @param {string} url HTTP url string that supports colon param matching.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */
  $httpBackend.expectRoute = function(method, url) {
    var pathObj = parseRoute(url);
    return $httpBackend.expect(method, pathObj.regexp, undefined, undefined, pathObj.keys);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes pending requests using the trained responses. Requests are flushed in the order they
   * were made, but it is also possible to skip one or more requests (for example to have them
   * flushed later). This is useful for simulating scenarios where responses arrive from the server
   * in any order.
   *
   * If there are no pending requests to flush when the method is called, an exception is thrown (as
   * this is typically a sign of programming error).
   *
   * @param {number=} count - Number of responses to flush. If undefined/null, all pending requests
   *     (starting after `skip`) will be flushed.
   * @param {number=} [skip=0] - Number of pending requests to skip. For example, a value of `5`
   *     would skip the first 5 pending requests and start flushing from the 6th onwards.
   */
  $httpBackend.flush = function(count, skip, digest) {
    if (digest !== false) $rootScope.$digest();

    skip = skip || 0;
    if (skip >= responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count) && count !== null) {
      while (count--) {
        var part = responses.splice(skip, 1);
        if (!part.length) throw new Error('No more pending request to flush !');
        part[0]();
      }
    } else {
      while (responses.length > skip) {
        responses.splice(skip, 1)[0]();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation(digest);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (responses.length) {
      throw new Error('Unflushed requests: ' + responses.length);
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  $httpBackend.$$originalHttpBackend = originalHttpBackend;

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
     $httpBackend[prefix + method] = function(url, headers, keys) {
        assertArgDefined(arguments, 0, 'url');

        // Change url to `null` if `undefined` to stop it throwing an exception further down
        if (angular.isUndefined(url)) url = null;

       return $httpBackend[prefix](method, url, undefined, headers, keys);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers, keys) {
        assertArgDefined(arguments, 0, 'url');

        // Change url to `null` if `undefined` to stop it throwing an exception further down
        if (angular.isUndefined(url)) url = null;

        return $httpBackend[prefix](method, url, data, headers, keys);
      };
    });
  }
}

function assertArgDefined(args, index, name) {
  if (args.length > index && angular.isUndefined(args[index])) {
    throw new Error('Undefined argument `' + name + '`; the argument is provided but not defined');
  }
}


function MockHttpExpectation(method, url, data, headers, keys) {

  function getUrlParams(u) {
    var params = u.slice(u.indexOf('?') + 1).split('&');
    return params.sort();
  }

  function compareUrl(u) {
    return (url.slice(0, url.indexOf('?')) === u.slice(0, u.indexOf('?')) &&
      getUrlParams(url).join() === getUrlParams(u).join());
  }

  this.data = data;
  this.headers = headers;

  this.match = function(m, u, d, h) {
    if (method !== m) return false;
    if (!this.matchUrl(u)) return false;
    if (angular.isDefined(d) && !this.matchData(d)) return false;
    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
    return true;
  };

  this.matchUrl = function(u) {
    if (!url) return true;
    if (angular.isFunction(url.test)) return url.test(u);
    if (angular.isFunction(url)) return url(u);
    return (url === u || compareUrl(u));
  };

  this.matchHeaders = function(h) {
    if (angular.isUndefined(headers)) return true;
    if (angular.isFunction(headers)) return headers(h);
    return angular.equals(headers, h);
  };

  this.matchData = function(d) {
    if (angular.isUndefined(data)) return true;
    if (data && angular.isFunction(data.test)) return data.test(d);
    if (data && angular.isFunction(data)) return data(d);
    if (data && !angular.isString(data)) {
      return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
    }
    // eslint-disable-next-line eqeqeq
    return data == d;
  };

  this.toString = function() {
    return method + ' ' + url;
  };

  this.params = function(u) {
    return angular.extend(parseQuery(), pathParams());

    function pathParams() {
      var keyObj = {};
      if (!url || !angular.isFunction(url.test) || !keys || keys.length === 0) return keyObj;

      var m = url.exec(u);
      if (!m) return keyObj;
      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];
        var val = m[i];
        if (key && val) {
          keyObj[key.name || key] = val;
        }
      }

      return keyObj;
    }

    function parseQuery() {
      var obj = {}, key_value, key,
          queryStr = u.indexOf('?') > -1
          ? u.substring(u.indexOf('?') + 1)
          : '';

      angular.forEach(queryStr.split('&'), function(keyValue) {
        if (keyValue) {
          key_value = keyValue.replace(/\+/g,'%20').split('=');
          key = tryDecodeURIComponent(key_value[0]);
          if (angular.isDefined(key)) {
            var val = angular.isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
            if (!hasOwnProperty.call(obj, key)) {
              obj[key] = val;
            } else if (angular.isArray(obj[key])) {
              obj[key].push(val);
            } else {
              obj[key] = [obj[key],val];
            }
          }
        }
      });
      return obj;
    }
    function tryDecodeURIComponent(value) {
      try {
        return decodeURIComponent(value);
      } catch (e) {
        // Ignore any invalid uri component
      }
    }
  };
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.lowercase(headerName) === name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = angular.noop;

  // This section simulates the events on a real XHR object (and the upload object)
  // When we are testing $httpBackend (inside the angular project) we make partial use of this
  // but store the events directly ourselves on `$$events`, instead of going through the `addEventListener`
  this.$$events = {};
  this.addEventListener = function(name, listener) {
    if (angular.isUndefined(this.$$events[name])) this.$$events[name] = [];
    this.$$events[name].push(listener);
  };

  this.upload = {
    $$events: {},
    addEventListener: this.addEventListener
  };
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed.
   */
  $delegate.verifyNoPendingTasks = function() {
    if ($browser.deferredFns.length) {
      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
          formatPendingTasksAsString($browser.deferredFns));
    }
  };

  function formatPendingTasksAsString(tasks) {
    var result = [];
    angular.forEach(tasks, function(task) {
      result.push('{id: ' + task.id + ', time: ' + task.time + '}');
    });

    return result.join(', ');
  }

  return $delegate;
}];

angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
  var rafFn = function(fn) {
    var index = rafFn.queue.length;
    rafFn.queue.push(fn);
    return function() {
      rafFn.queue.splice(index, 1);
    };
  };

  rafFn.queue = [];
  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if (rafFn.queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = rafFn.queue.length;
    for (var i = 0; i < length; i++) {
      rafFn.queue[i]();
    }

    rafFn.queue = rafFn.queue.slice(i);
  };

  return rafFn;
}];

/**
 *
 */
var originalRootElement;
angular.mock.$RootElementProvider = function() {
  this.$get = ['$injector', function($injector) {
    originalRootElement = angular.element('<div ng-app></div>').data('$injector', $injector);
    return originalRootElement;
  }];
};

/**
 * @ngdoc service
 * @name $controller
 * @description
 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
 *
 * Depending on the value of
 * {@link ng.$compileProvider#preAssignBindingsEnabled `preAssignBindingsEnabled()`}, the properties
 * will be bound before or after invoking the constructor.
 *
 *
 * ## Example
 *
 * ```js
 *
 * // Directive definition ...
 *
 * myMod.directive('myDirective', {
 *   controller: 'MyDirectiveController',
 *   bindToController: {
 *     name: '@'
 *   }
 * });
 *
 *
 * // Controller definition ...
 *
 * myMod.controller('MyDirectiveController', ['$log', function($log) {
 *   this.log = function() {
 *     $log.info(this.name);
 *   };
 * }]);
 *
 *
 * // In a test ...
 *
 * describe('myDirectiveController', function() {
 *   describe('log()', function() {
 *     it('should write the bound name to the log', inject(function($controller, $log) {
 *       var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
 *       ctrl.log();
 *
 *       expect(ctrl.name).toEqual('Clark Kent');
 *       expect($log.info.logs).toEqual(['Clark Kent']);
 *     }));
 *   });
 * });
 *
 * ```
 *
 * @param {Function|string} constructor If called with a function then it's considered to be the
 *    controller constructor function. Otherwise it's considered to be a string which is used
 *    to retrieve the controller constructor using the following steps:
 *
 *    * check if a controller with given name is registered via `$controllerProvider`
 *    * check if evaluating the string on the current scope returns a constructor
 *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
 *      `window` object (deprecated, not recommended)
 *
 *    The string can use the `controller as property` syntax, where the controller instance is published
 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
 *    to work correctly.
 *
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller instance. This is used to simulate
 *                           the `bindToController` feature and simplify certain kinds of tests.
 * @return {Object} Instance of given controller.
 */
function createControllerDecorator(compileProvider) {
  angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
    return function(expression, locals, later, ident) {
      if (later && typeof later === 'object') {
        var preAssignBindingsEnabled = compileProvider.preAssignBindingsEnabled();

        var instantiate = $delegate(expression, locals, true, ident);
        if (preAssignBindingsEnabled) {
          angular.extend(instantiate.instance, later);
        }

        var instance = instantiate();
        if (!preAssignBindingsEnabled || instance !== instantiate.instance) {
          angular.extend(instance, later);
        }

        return instance;
      }
      return $delegate(expression, locals, later, ident);
    };
  }];

  return angular.mock.$ControllerDecorator;
}

/**
 * @ngdoc service
 * @name $componentController
 * @description
 * A service that can be used to create instances of component controllers. Useful for unit-testing.
 *
 * Be aware that the controller will be instantiated and attached to the scope as specified in
 * the component definition object. If you do not provide a `$scope` object in the `locals` param
 * then the helper will create a new isolated scope as a child of `$rootScope`.
 *
 * If you are using `$element` or `$attrs` in the controller, make sure to provide them as `locals`.
 * The `$element` must be a jqLite-wrapped DOM element, and `$attrs` should be an object that
 * has all properties / functions that you are using in the controller. If this is getting too complex,
 * you should compile the component instead and access the component's controller via the
 * {@link angular.element#methods `controller`} function.
 *
 * See also the section on {@link guide/component#unit-testing-component-controllers unit-testing component controllers}
 * in the guide.
 *
 * @param {string} componentName the name of the component whose controller we want to instantiate
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @param {string=} ident Override the property name to use when attaching the controller to the scope.
 * @return {Object} Instance of requested controller.
 */
angular.mock.$ComponentControllerProvider = ['$compileProvider',
    function ComponentControllerProvider($compileProvider) {
  this.$get = ['$controller','$injector', '$rootScope', function($controller, $injector, $rootScope) {
    return function $componentController(componentName, locals, bindings, ident) {
      // get all directives associated to the component name
      var directives = $injector.get(componentName + 'Directive');
      // look for those directives that are components
      var candidateDirectives = directives.filter(function(directiveInfo) {
        // components have controller, controllerAs and restrict:'E'
        return directiveInfo.controller && directiveInfo.controllerAs && directiveInfo.restrict === 'E';
      });
      // check if valid directives found
      if (candidateDirectives.length === 0) {
        throw new Error('No component found');
      }
      if (candidateDirectives.length > 1) {
        throw new Error('Too many components found');
      }
      // get the info of the component
      var directiveInfo = candidateDirectives[0];
      // create a scope if needed
      locals = locals || {};
      locals.$scope = locals.$scope || $rootScope.$new(true);
      return $controller(directiveInfo.controller, locals, bindings, ident || directiveInfo.controllerAs);
    };
  }];
}];


/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * # ngMock
 *
 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
 * In addition, ngMock also extends various core ng services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 *
 * <div doc-module-components="ngMock"></div>
 *
 * @installation
 *
 *  First, download the file:
 *  * [Google CDN](https://developers.google.com/speed/libraries/devguide#angularjs) e.g.
 *    `"//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-mocks.js"`
 *  * [NPM](https://www.npmjs.com/) e.g. `npm install angular-mocks@X.Y.Z`
 *  * [Yarn](https://yarnpkg.com) e.g. `yarn add angular-mocks@X.Y.Z`
 *  * [Bower](http://bower.io) e.g. `bower install angular-mocks#X.Y.Z`
 *  * [code.angularjs.org](https://code.angularjs.org/) (discouraged for production use)  e.g.
 *    `"//code.angularjs.org/X.Y.Z/angular-mocks.js"`
 *
 * where X.Y.Z is the AngularJS version you are running.
 *
 * Then, configure your test runner to load `angular-mocks.js` after `angular.js`.
 * This example uses <a href="http://karma-runner.github.io/">Karma</a>:
 *
 * ```
 * config.set({
 *   files: [
 *     'build/angular.js', // and other module files you need
 *     'build/angular-mocks.js',
 *     '<path/to/application/files>',
 *     '<path/to/spec/files>'
 *   ]
 * });
 * ```
 *
 * Including the `angular-mocks.js` file automatically adds the `ngMock` module, so your tests
 *  are ready to go!
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $rootElement: angular.mock.$RootElementProvider,
  $componentController: angular.mock.$ComponentControllerProvider
}).config(['$provide', '$compileProvider', function($provide, $compileProvider) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
  $provide.decorator('$controller', createControllerDecorator($compileProvider));
  $provide.decorator('$httpBackend', angular.mock.$httpBackendDecorator);
}]).info({ angularVersion: '1.6.4' });

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]).info({ angularVersion: '1.6.4' });

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * <div class="alert alert-info">
 * **Note**: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 * </div>
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   var myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templates are handled by the real server
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 *
 * ## Example
 * <example name="httpbackend-e2e-testing" module="myAppE2E" deps="angular-mocks.js">
 * <file name="app.js">
 *   var myApp = angular.module('myApp', []);
 *
 *   myApp.controller('MainCtrl', function MainCtrl($http) {
 *     var ctrl = this;
 *
 *     ctrl.phones = [];
 *     ctrl.newPhone = {
 *       name: ''
 *     };
 *
 *     ctrl.getPhones = function() {
 *       $http.get('/phones').then(function(response) {
 *         ctrl.phones = response.data;
 *       });
 *     };
 *
 *     ctrl.addPhone = function(phone) {
 *       $http.post('/phones', phone).then(function() {
 *         ctrl.newPhone = {name: ''};
 *         return ctrl.getPhones();
 *       });
 *     };
 *
 *     ctrl.getPhones();
 *   });
 * </file>
 * <file name="e2e.js">
 *   var myAppDev = angular.module('myAppE2E', ['myApp', 'ngMockE2E']);
 *
 *   myAppDev.run(function($httpBackend) {
 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *   });
 * </file>
 * <file name="index.html">
 *   <div ng-controller="MainCtrl as $ctrl">
 *   <form name="newPhoneForm" ng-submit="$ctrl.addPhone($ctrl.newPhone)">
 *     <input type="text" ng-model="$ctrl.newPhone.name">
 *     <input type="submit" value="Add Phone">
 *   </form>
 *   <h1>Phones</h1>
 *   <ul>
 *     <li ng-repeat="phone in $ctrl.phones">{{phone.name}}</li>
 *   </ul>
 *   </div>
 * </file>
 * </example>
 *
 *
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 *
 *  - respond –
 *    ```
 *    { function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers, params)}
 *    ```
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (Array|Object|string), response
 *    headers (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 *  - Both methods return the `requestHandler` object for possible overrides.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
 *   data string and returns true if the data is as expected.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
/**
 * @ngdoc method
 * @name $httpBackend#whenRoute
 * @module ngMockE2E
 * @description
 * Creates a new backend definition that compares only with the requested route.
 *
 * @param {string} method HTTP method.
 * @param {string} url HTTP url string that supports colon param matching.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


/**
 * @ngdoc type
 * @name $rootScope.Scope
 * @module ngMock
 * @description
 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
 * `ngMock` module is loaded.
 *
 * In addition to all the regular `Scope` methods, the following helper methods are available:
 */
angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

  var $rootScopePrototype = Object.getPrototypeOf($delegate);

  $rootScopePrototype.$countChildScopes = countChildScopes;
  $rootScopePrototype.$countWatchers = countWatchers;

  return $delegate;

  // ------------------------------------------------------------------------------------------ //

  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countChildScopes
   * @module ngMock
   * @this $rootScope.Scope
   * @description
   * Counts all the direct and indirect child scopes of the current scope.
   *
   * The current scope is excluded from the count. The count includes all isolate child scopes.
   *
   * @returns {number} Total number of child scopes.
   */
  function countChildScopes() {
    var count = 0; // exclude the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += 1;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }


  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countWatchers
   * @this $rootScope.Scope
   * @module ngMock
   * @description
   * Counts all the watchers of direct and indirect child scopes of the current scope.
   *
   * The watchers of the current scope are included in the count and so are all the watchers of
   * isolate child scopes.
   *
   * @returns {number} Total number of watchers.
   */
  function countWatchers() {
    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }
}];


(function(jasmineOrMocha) {

  if (!jasmineOrMocha) {
    return;
  }

  var currentSpec = null,
      injectorState = new InjectorState(),
      annotatedFunctions = [],
      wasInjectorCreated = function() {
        return !!currentSpec;
      };

  angular.mock.$$annotate = angular.injector.$$annotate;
  angular.injector.$$annotate = function(fn) {
    if (typeof fn === 'function' && !fn.$inject) {
      annotatedFunctions.push(fn);
    }
    return angular.mock.$$annotate.apply(this, arguments);
  };

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed each key-value pair will be registered on the module via
   *        {@link auto.$provide $provide}.value, the key being the string name (or token) to associate
   *        with the value on the injector.
   */
  var module = window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return wasInjectorCreated() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var fn, modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            fn = ['$provide', function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            }];
          } else {
            fn = module;
          }
          if (currentSpec.$providerInjector) {
            currentSpec.$providerInjector.invoke(fn);
          } else {
            modules.push(fn);
          }
        });
      }
    }
  };

  module.$$beforeAllHook = (window.before || window.beforeAll);
  module.$$afterAllHook = (window.after || window.afterAll);

  // purely for testing ngMock itself
  module.$$currentSpec = function(to) {
    if (arguments.length === 0) return to;
    currentSpec = to;
  };

  /**
   * @ngdoc function
   * @name angular.mock.module.sharedInjector
   * @description
   *
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function ensures a single injector will be used for all tests in a given describe context.
   * This contrasts with the default behaviour where a new injector is created per test case.
   *
   * Use sharedInjector when you want to take advantage of Jasmine's `beforeAll()`, or mocha's
   * `before()` methods. Call `module.sharedInjector()` before you setup any other hooks that
   * will create (i.e call `module()`) or use (i.e call `inject()`) the injector.
   *
   * You cannot call `sharedInjector()` from within a context already using `sharedInjector()`.
   *
   * ## Example
   *
   * Typically beforeAll is used to make many assertions about a single operation. This can
   * cut down test run-time as the test setup doesn't need to be re-run, and enabling focussed
   * tests each with a single assertion.
   *
   * ```js
   * describe("Deep Thought", function() {
   *
   *   module.sharedInjector();
   *
   *   beforeAll(module("UltimateQuestion"));
   *
   *   beforeAll(inject(function(DeepThought) {
   *     expect(DeepThought.answer).toBeUndefined();
   *     DeepThought.generateAnswer();
   *   }));
   *
   *   it("has calculated the answer correctly", inject(function(DeepThought) {
   *     // Because of sharedInjector, we have access to the instance of the DeepThought service
   *     // that was provided to the beforeAll() hook. Therefore we can test the generated answer
   *     expect(DeepThought.answer).toBe(42);
   *   }));
   *
   *   it("has calculated the answer within the expected time", inject(function(DeepThought) {
   *     expect(DeepThought.runTimeMillennia).toBeLessThan(8000);
   *   }));
   *
   *   it("has double checked the answer", inject(function(DeepThought) {
   *     expect(DeepThought.absolutelySureItIsTheRightAnswer).toBe(true);
   *   }));
   *
   * });
   *
   * ```
   */
  module.sharedInjector = function() {
    if (!(module.$$beforeAllHook && module.$$afterAllHook)) {
      throw Error('sharedInjector() cannot be used unless your test runner defines beforeAll/afterAll');
    }

    var initialized = false;

    module.$$beforeAllHook(/** @this */ function() {
      if (injectorState.shared) {
        injectorState.sharedError = Error('sharedInjector() cannot be called inside a context that has already called sharedInjector()');
        throw injectorState.sharedError;
      }
      initialized = true;
      currentSpec = this;
      injectorState.shared = true;
    });

    module.$$afterAllHook(function() {
      if (initialized) {
        injectorState = new InjectorState();
        module.$$cleanup();
      } else {
        injectorState.sharedError = null;
      }
    });
  };

  module.$$beforeEach = function() {
    if (injectorState.shared && currentSpec && currentSpec !== this) {
      var state = currentSpec;
      currentSpec = this;
      angular.forEach(['$injector','$modules','$providerInjector', '$injectorStrict'], function(k) {
        currentSpec[k] = state[k];
        state[k] = null;
      });
    } else {
      currentSpec = this;
      originalRootElement = null;
      annotatedFunctions = [];
    }
  };

  module.$$afterEach = function() {
    if (injectorState.cleanupAfterEach()) {
      module.$$cleanup();
    }
  };

  module.$$cleanup = function() {
    var injector = currentSpec.$injector;

    annotatedFunctions.forEach(function(fn) {
      delete fn.$inject;
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec.$providerInjector = null;
    currentSpec = null;

    if (injector) {
      // Ensure `$rootElement` is instantiated, before checking `originalRootElement`
      var $rootElement = injector.get('$rootElement');
      var rootNode = $rootElement && $rootElement[0];
      var cleanUpNodes = !originalRootElement ? [] : [originalRootElement[0]];
      if (rootNode && (!originalRootElement || rootNode !== originalRootElement[0])) {
        cleanUpNodes.push(rootNode);
      }
      angular.element.cleanData(cleanUpNodes);

      // Ensure `$destroy()` is available, before calling it
      // (a mocked `$rootScope` might not implement it (or not even be an object at all))
      var $rootScope = injector.get('$rootScope');
      if ($rootScope && $rootScope.$destroy) $rootScope.$destroy();
    }

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.$$counter = 0;
  };

  (window.beforeEach || window.setup)(module.$$beforeEach);
  (window.afterEach || window.teardown)(module.$$afterEach);

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as `_myService_`, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function ErrorAddingDeclarationLocationStack(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype = Error.prototype;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    // IE10+ and PhanthomJS do not set stack trace information, until the error is thrown
    if (!errorForStack.stack) {
      try {
        throw errorForStack;
      } catch (e) { /* empty */ }
    }
    return wasInjectorCreated() ? WorkFn.call(currentSpec) : WorkFn;
    /////////////////////
    function WorkFn() {
      var modules = currentSpec.$modules || [];
      var strictDi = !!currentSpec.$injectorStrict;
      modules.unshift(['$injector', function($injector) {
        currentSpec.$providerInjector = $injector;
      }]);
      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        if (strictDi) {
          // If strictDi is enabled, annotate the providerInjector blocks
          angular.forEach(modules, function(moduleFn) {
            if (typeof moduleFn === 'function') {
              angular.injector.$$annotate(moduleFn);
            }
          });
        }
        injector = currentSpec.$injector = angular.injector(modules, strictDi);
        currentSpec.$injectorStrict = strictDi;
      }
      for (var i = 0, ii = blockFns.length; i < ii; i++) {
        if (currentSpec.$injectorStrict) {
          // If the injector is strict / strictDi, and the spec wants to inject using automatic
          // annotation, then annotate the function here.
          injector.annotate(blockFns[i]);
        }
        try {
          injector.invoke(blockFns[i] || angular.noop, this);
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };


  angular.mock.inject.strictDi = function(value) {
    value = arguments.length ? !!value : true;
    return wasInjectorCreated() ? workFn() : workFn;

    function workFn() {
      if (value !== currentSpec.$injectorStrict) {
        if (currentSpec.$injector) {
          throw new Error('Injector already created, can not modify strict annotations');
        } else {
          currentSpec.$injectorStrict = value;
        }
      }
    }
  };

  function InjectorState() {
    this.shared = false;
    this.sharedError = null;

    this.cleanupAfterEach = function() {
      return !this.shared || this.sharedError;
    };
  }
})(window.jasmine || window.mocha);

'use strict';

(function() {
  /**
   * Triggers a browser event. Attempts to choose the right event if one is
   * not specified.
   *
   * @param {Object} element Either a wrapped jQuery/jqLite node or a DOMElement
   * @param {string} eventType Optional event type
   * @param {Object=} eventData An optional object which contains additional event data (such as x,y
   * coordinates, keys, etc...) that are passed into the event when triggered
   */
  window.browserTrigger = function browserTrigger(element, eventType, eventData) {
    if (element && !element.nodeName) element = element[0];
    if (!element) return;

    eventData = eventData || {};
    var relatedTarget = eventData.relatedTarget || element;
    var keys = eventData.keys;
    var x = eventData.x;
    var y = eventData.y;

    var inputType = (element.type) ? element.type.toLowerCase() : null,
        nodeName = element.nodeName.toLowerCase();
    if (!eventType) {
      eventType = {
        'text':            'change',
        'textarea':        'change',
        'hidden':          'change',
        'password':        'change',
        'button':          'click',
        'submit':          'click',
        'reset':           'click',
        'image':           'click',
        'checkbox':        'click',
        'radio':           'click',
        'select-one':      'change',
        'select-multiple': 'change',
        '_default_':       'click'
      }[inputType || '_default_'];
    }

    if (nodeName === 'option') {
      element.parentNode.value = element.value;
      element = element.parentNode;
      eventType = 'change';
    }

    keys = keys || [];
    function pressed(key) {
      return keys.indexOf(key) !== -1;
    }

    var evnt;
    if (/transitionend/.test(eventType)) {
      if (window.WebKitTransitionEvent) {
        evnt = new window.WebKitTransitionEvent(eventType, eventData);
        evnt.initEvent(eventType, false, true);
      } else {
        try {
          evnt = new window.TransitionEvent(eventType, eventData);
        } catch (e) {
          evnt = window.document.createEvent('TransitionEvent');
          evnt.initTransitionEvent(eventType, null, null, null, eventData.elapsedTime || 0);
        }
      }
    } else if (/animationend/.test(eventType)) {
      if (window.WebKitAnimationEvent) {
        evnt = new window.WebKitAnimationEvent(eventType, eventData);
        evnt.initEvent(eventType, false, true);
      } else {
        try {
          evnt = new window.AnimationEvent(eventType, eventData);
        } catch (e) {
          evnt = window.document.createEvent('AnimationEvent');
          evnt.initAnimationEvent(eventType, null, null, null, eventData.elapsedTime || 0);
        }
      }
    } else if (/touch/.test(eventType) && supportsTouchEvents()) {
      evnt = createTouchEvent(element, eventType, x, y);
    } else if (/key/.test(eventType)) {
      evnt = window.document.createEvent('Events');
      evnt.initEvent(eventType, eventData.bubbles, eventData.cancelable);
      evnt.view = window;
      evnt.ctrlKey = pressed('ctrl');
      evnt.altKey = pressed('alt');
      evnt.shiftKey = pressed('shift');
      evnt.metaKey = pressed('meta');
      evnt.keyCode = eventData.keyCode;
      evnt.charCode = eventData.charCode;
      evnt.which = eventData.which;
    } else {
      evnt = window.document.createEvent('MouseEvents');
      x = x || 0;
      y = y || 0;
      evnt.initMouseEvent(eventType, true, true, window, 0, x, y, x, y, pressed('ctrl'),
          pressed('alt'), pressed('shift'), pressed('meta'), 0, relatedTarget);
    }

    /* we're unable to change the timeStamp value directly so this
     * is only here to allow for testing where the timeStamp value is
     * read */
    evnt.$manualTimeStamp = eventData.timeStamp;

    if (!evnt) return;

    var originalPreventDefault = evnt.preventDefault,
        appWindow = element.ownerDocument.defaultView,
        fakeProcessDefault = true,
        finalProcessDefault,
        angular = appWindow.angular || {};

    // igor: temporary fix for https://bugzilla.mozilla.org/show_bug.cgi?id=684208
    angular['ff-684208-preventDefault'] = false;
    evnt.preventDefault = function() {
      fakeProcessDefault = false;
      return originalPreventDefault.apply(evnt, arguments);
    };

    if (!eventData.bubbles || supportsEventBubblingInDetachedTree() || isAttachedToDocument(element)) {
      element.dispatchEvent(evnt);
    } else {
      triggerForPath(element, evnt);
    }

    finalProcessDefault = !(angular['ff-684208-preventDefault'] || !fakeProcessDefault);

    delete angular['ff-684208-preventDefault'];

    return finalProcessDefault;
  };

  function supportsTouchEvents() {
    if ('_cached' in supportsTouchEvents) {
      return supportsTouchEvents._cached;
    }
    if (!window.document.createTouch || !window.document.createTouchList) {
      supportsTouchEvents._cached = false;
      return false;
    }
    try {
      window.document.createEvent('TouchEvent');
    } catch (e) {
      supportsTouchEvents._cached = false;
      return false;
    }
    supportsTouchEvents._cached = true;
    return true;
  }

  function createTouchEvent(element, eventType, x, y) {
    var evnt = new window.Event(eventType);
    x = x || 0;
    y = y || 0;

    var touch = window.document.createTouch(window, element, Date.now(), x, y, x, y);
    var touches = window.document.createTouchList(touch);

    evnt.touches = touches;

    return evnt;
  }

  function supportsEventBubblingInDetachedTree() {
    if ('_cached' in supportsEventBubblingInDetachedTree) {
      return supportsEventBubblingInDetachedTree._cached;
    }
    supportsEventBubblingInDetachedTree._cached = false;
    var doc = window.document;
    if (doc) {
      var parent = doc.createElement('div'),
          child = parent.cloneNode();
      parent.appendChild(child);
      parent.addEventListener('e', function() {
        supportsEventBubblingInDetachedTree._cached = true;
      });
      var evnt = window.document.createEvent('Events');
      evnt.initEvent('e', true, true);
      child.dispatchEvent(evnt);
    }
    return supportsEventBubblingInDetachedTree._cached;
  }

  function triggerForPath(element, evnt) {
    var stop = false;

    var _stopPropagation = evnt.stopPropagation;
    evnt.stopPropagation = function() {
      stop = true;
      _stopPropagation.apply(evnt, arguments);
    };
    patchEventTargetForBubbling(evnt, element);
    do {
      element.dispatchEvent(evnt);
      // eslint-disable-next-line no-unmodified-loop-condition
    } while (!stop && (element = element.parentNode));
  }

  function patchEventTargetForBubbling(event, target) {
    event._target = target;
    Object.defineProperty(event, 'target', {get: function() { return this._target;}});
  }

  function isAttachedToDocument(element) {
    while ((element = element.parentNode)) {
        if (element === window) {
            return true;
        }
    }
    return false;
  }
})();


})(window, window.angular);

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,b){'use strict';function K(q,g){g=g||{};b.forEach(g,function(b,h){delete g[h]});for(var h in q)!q.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(g[h]=q[h]);return g}var B=b.$$minErr("$resource"),Q=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;b.module("ngResource",["ng"]).info({angularVersion:"1.6.4"}).provider("$resource",function(){var q=/^https?:\/\/\[[^\]]*][^/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",
isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(h,P,L,M){function C(b,e){this.template=b;this.defaults=p({},g.defaults,e);this.urlParams={}}function x(D,e,u,m){function c(a,d){var c={};d=p({},e,d);t(d,function(d,l){y(d)&&(d=d(a));var f;if(d&&d.charAt&&"@"===d.charAt(0)){f=a;var k=d.substr(1);if(null==k||""===k||"hasOwnProperty"===k||!Q.test("."+k))throw B("badmember",k);for(var k=k.split("."),e=0,g=k.length;e<g&&b.isDefined(f);e++){var h=
k[e];f=null!==f?f[h]:void 0}}else f=d;c[l]=f});return c}function R(a){return a.resource}function l(a){K(a||{},this)}var q=new C(D,m);u=p({},g.defaults.actions,u);l.prototype.toJSON=function(){var a=p({},this);delete a.$promise;delete a.$resolved;delete a.$cancelRequest;return a};t(u,function(a,d){var b=!0===a.hasBody||!1!==a.hasBody&&/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,g=N(a.cancellable)?a.cancellable:q.defaults.cancellable;e&&!S(e)&&(P.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete a.timeout,e=null);l[d]=function(f,k,m,D){function u(a){r.catch(E);z.resolve(a)}var G={},v,w,A;switch(arguments.length){case 4:A=D,w=m;case 3:case 2:if(y(k)){if(y(f)){w=f;A=k;break}w=k;A=m}else{G=f;v=k;w=m;break}case 1:y(f)?w=f:b?v=f:G=f;break;case 0:break;default:throw B("badargs",arguments.length);}var F=this instanceof l,n=F?v:a.isArray?[]:new l(v),s={},C=a.interceptor&&a.interceptor.response||R,x=a.interceptor&&a.interceptor.responseError||void 0,H=!!A,I=!!x,z,J;t(a,function(a,d){switch(d){default:s[d]=
T(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!F&&g&&(z=L.defer(),s.timeout=z.promise,e&&(J=M(z.resolve,e)));b&&(s.data=v);q.setUrlParams(s,p({},c(v,a.params||{}),G),a.url);var r=h(s).then(function(f){var c=f.data;if(c){if(O(c)!==!!a.isArray)throw B("badcfg",d,a.isArray?"array":"object",O(c)?"array":"object",s.method,s.url);if(a.isArray)n.length=0,t(c,function(a){"object"===typeof a?n.push(new l(a)):n.push(a)});else{var b=n.$promise;K(c,n);n.$promise=b}}f.resource=n;
return f}),r=r["finally"](function(){n.$resolved=!0;!F&&g&&(n.$cancelRequest=E,M.cancel(J),z=J=s.timeout=null)}),r=r.then(function(a){var d=C(a);(w||E)(d,a.headers,a.status,a.statusText);return d},H||I?function(a){H&&!I&&r.catch(E);H&&A(a);return I?x(a):L.reject(a)}:void 0);return F?r:(n.$promise=r,n.$resolved=!1,g&&(n.$cancelRequest=u),n)};l.prototype["$"+d]=function(a,c,b){y(a)&&(b=c,c=a,a={});a=l[d].call(this,a,this,c,b);return a.$promise||a}});l.bind=function(a){a=p({},e,a);return x(D,a,u,m)};
return l}var E=b.noop,t=b.forEach,p=b.extend,T=b.copy,O=b.isArray,N=b.isDefined,y=b.isFunction,S=b.isNumber,U=b.$$encodeUriQuery,V=b.$$encodeUriSegment;C.prototype={setUrlParams:function(b,e,g){var m=this,c=g||m.template,h,l,p="",a=m.urlParams=Object.create(null);t(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw B("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&(a[d]={isQueryParamValue:(new RegExp("\\?.*=:"+d+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");
c=c.replace(q,function(a){p=a;return""});e=e||{};t(m.urlParams,function(a,b){h=e.hasOwnProperty(b)?e[b]:m.defaults[b];N(h)&&null!==h?(l=a.isQueryParamValue?U(h,!0):V(h),c=c.replace(new RegExp(":"+b+"(\\W|$)","g"),function(a,b){return l+b})):c=c.replace(new RegExp("(/?):"+b+"(\\W|$)","g"),function(a,b,d){return"/"===d.charAt(0)?d:b+d})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");b.url=p+c.replace(/\/(\\|%5C)\./,"/.");t(e,function(a,c){m.urlParams[c]||
(b.params=b.params||{},b.params[c]=a)})}};return x}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(J,d){'use strict';function A(d){k&&d.get("$route")}function B(t,u,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,m){function v(){l&&(g.cancel(l),l=null);n&&(n.$destroy(),n=null);p&&(l=g.leave(p),l.done(function(a){!1!==a&&(l=null)}),p=null)}function E(){var b=t.current&&t.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=t.current;p=m(b,function(b){g.enter(b,null,p||f).done(function(b){!1===b||!d.isDefined(w)||w&&!a.$eval(w)||u()});
v()});n=c.scope=b;n.$emit("$viewContentLoaded");n.$eval(k)}else v()}var n,p,l,w=b.autoscroll,k=b.onload||"";a.$on("$routeChangeSuccess",E);E()}}}function C(d,k,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,c=b.locals;f.html(c.$template);var m=d(f.contents());if(b.controller){c.$scope=a;var v=k(b.controller,c);b.controllerAs&&(a[b.controllerAs]=v);f.data("$ngControllerController",v);f.children().data("$ngControllerController",v)}a[b.resolveAs||"$resolve"]=c;m(a)}}}var x,
y,F,G,z=d.module("ngRoute",[]).info({angularVersion:"1.6.4"}).provider("$route",function(){function t(a,f){return d.extend(Object.create(a),f)}function u(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},g=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(a,b,d,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!a});b=b||"";return""+(a?"":b)+"(?:"+(a?b:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([/$*])/g,
"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}x=d.isArray;y=d.isObject;F=d.isDefined;G=d.noop;var g={};this.when=function(a,f){var b;b=void 0;if(x(f)){b=b||[];for(var c=0,m=f.length;c<m;c++)b[c]=f[c]}else if(y(f))for(c in b=b||{},f)if("$"!==c.charAt(0)||"$"!==c.charAt(1))b[c]=f[c];b=b||f;d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&u(a,b));a&&(c="/"===a[a.length-1]?a.substr(0,
a.length-1):a+"/",g[c]=d.extend({redirectTo:a},u(c,b)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};k=!0;this.eagerInstantiationEnabled=function(a){return F(a)?(k=a,this):k};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce","$browser",function(a,f,b,c,m,k,u,n){function p(e){var h=q.current;(y=(s=C())&&h&&s.$$route===h.$$route&&d.equals(s.pathParams,h.pathParams)&&
!s.reloadOnSearch&&!D)||!h&&!s||a.$broadcast("$routeChangeStart",s,h).defaultPrevented&&e&&e.preventDefault()}function l(){var e=q.current,h=s;if(y)e.params=h.params,d.copy(e.params,b),a.$broadcast("$routeUpdate",e);else if(h||e){D=!1;q.current=h;var H=c.resolve(h);n.$$incOutstandingRequestCount();H.then(w).then(z).then(function(c){return c&&H.then(A).then(function(c){h===q.current&&(h&&(h.locals=c,d.copy(h.params,b)),a.$broadcast("$routeChangeSuccess",h,e))})}).catch(function(b){h===q.current&&a.$broadcast("$routeChangeError",
h,e,b)}).finally(function(){n.$$completeOutstandingRequest(G)})}}function w(e){var a={route:e,hasRedirection:!1};if(e)if(e.redirectTo)if(d.isString(e.redirectTo))a.path=x(e.redirectTo,e.params),a.search=e.params,a.hasRedirection=!0;else{var b=f.path(),g=f.search();e=e.redirectTo(e.pathParams,b,g);d.isDefined(e)&&(a.url=e,a.hasRedirection=!0)}else if(e.resolveRedirectTo)return c.resolve(m.invoke(e.resolveRedirectTo)).then(function(e){d.isDefined(e)&&(a.url=e,a.hasRedirection=!0);return a});return a}
function z(a){var b=!0;if(a.route!==q.current)b=!1;else if(a.hasRedirection){var d=f.url(),c=a.url;c?f.url(c).replace():c=f.path(a.path).search(a.search).replace().url();c!==d&&(b=!1)}return b}function A(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,e){b[e]=d.isString(a)?m.get(a):m.invoke(a,null,null,e)});a=B(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function B(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&
(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=u.valueOf(c),b=k(c)));return b}function C(){var a,b;d.forEach(g,function(c,g){var r;if(r=!b){var k=f.path();r=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=r[l-1],q=k[l];p&&q&&(m[p.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=t(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function x(a,b){var c=[];d.forEach((a||"").split(":"),
function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var D=!1,s,y,q={routes:g,reload:function(){D=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;D=!1}};a.$evalAsync(function(){p(b);b.defaultPrevented||l()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(x(this.current.$$route.originalPath,a)),f.search(a);else throw I("norout");
}};a.$on("$locationChangeStart",p);a.$on("$locationChangeSuccess",l);return q}]}).run(A),I=d.$$minErr("ngRoute"),k;A.$inject=["$injector"];z.provider("$routeParams",function(){this.$get=function(){return{}}});z.directive("ngView",B);z.directive("ngView",C);B.$inject=["$route","$anchorScroll","$animate"];C.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x){'use strict';function L(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.4/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function me(a){if(C(a))u(a.objectMaxDepth)&&(Ic.objectMaxDepth=Sb(a.objectMaxDepth)?
a.objectMaxDepth:NaN);else return Ic}function Sb(a){return ba(a)&&0<a}function qa(a){if(null==a||Wa(a))return!1;if(H(a)||F(a)||B&&a instanceof B)return!0;var b="length"in Object(a)&&a.length;return ba(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,e;if(a)if(D(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||qa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,
a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Jc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function Kc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Lc(a){return function(b,d){a(d,b)}}function ne(){return++qb}function Tb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];
if(C(g)||D(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&C(n)?ga(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Ub(n)?a[m]=n.clone():(C(a[m])||(a[m]=H(n)?[]:{}),Tb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Tb(a,va.call(arguments,1),!1)}function oe(a){return Tb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Vb(a,b){return S(Object.create(a),b)}function z(){}function Ya(a){return a}
function la(a){return function(){return a}}function Wb(a){return D(a.toString)&&a.toString!==ma}function w(a){return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function C(a){return null!==a&&"object"===typeof a}function Jc(a){return null!==a&&"object"===typeof a&&!Mc(a)}function F(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ga(a){return"[object Date]"===ma.call(a)}function D(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===
ma.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ha(a){return"boolean"===typeof a}function pe(a){return a&&ba(a.length)&&qe.test(ma.call(a))}function Ub(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function re(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function ra(a,b,d){function c(a,
b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Jc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&(b[f]=e(a[f],c));else for(f in a)ua.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!C(a))return a;var d=g.indexOf(a);if(-1!==d)return h[d];if(Wa(a)||Za(a))throw Fa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Mc(a)),
d=!0);g.push(a);h.push(e);return d?c(a,e,b):e}function f(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));
return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(D(a.cloneNode))return a.cloneNode(!0)}var g=[],h=[];d=Sb(d)?d:NaN;if(b){if(pe(b)||"[object ArrayBuffer]"===ma.call(b))throw Fa("cpta");if(a===b)throw Fa("cpi");H(b)?b.length=
0:q(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);h.push(b);return c(a,b,d)}return e(a,d)}function Xb(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],b[c]))return!1;return!0}}else{if(ga(a))return ga(b)?Xb(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;
if(Za(a)||Za(b)||Wa(a)||Wa(b)||H(b)||ga(b)||Xa(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!D(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!D(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(va.call(b,d))}function bb(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!D(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?
b.apply(a,arguments):b.call(a)}}function Nc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&x.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return ba(b)||(b=b?2:null),JSON.stringify(a,Nc,b)}function Oc(a){return F(a)?JSON.parse(a):a}function Pc(a,b){a=a.replace(se,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return da(d)?b:d}function Yb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Pc(b,c);d*=b-c;a=new Date(a.getTime());
a.setMinutes(a.getMinutes()+d);return a}function xa(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Ia?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function Qc(a){try{return decodeURIComponent(a)}catch(b){}}function Rc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Qc(e),u(e)&&(f=
u(f)?Qc(f):!0,ua.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Zb(a){var b=[];q(a,function(a,c){H(a)?q(a,function(a){b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))}):b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))});return b.length?b.join("&"):""}function db(a){return $(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function $(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,
b?"%20":"+")}function te(a,b){var d,c,e=Ja.length;for(c=0;c<e;++c)if(d=Ja[c]+b,F(d=a.getAttribute(d)))return d;return null}function ue(a,b){var d,c,e={};q(Ja,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ja,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(ve?(e.strictDi=null!==te(d,"strict-di"),b(d,c?[c]:[],e)):x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}
function Sc(a,b,d){C(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===x.document?"document":xa(a);throw Fa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;x&&e.test(x.name)&&(d.debugInfoEnabled=!0,x.name=x.name.replace(e,""));if(x&&!f.test(x.name))return c();x.name=x.name.replace(f,"");ea.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};D(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function we(){x.name="NG_ENABLE_DEBUG_INFO!"+x.name;x.location.reload()}function xe(a){a=ea.element(a).injector();if(!a)throw Fa("test");return a.get("$$testability")}
function Tc(a,b){b=b||"_";return a.replace(ye,function(a,c){return(c?b:"")+a.toLowerCase()})}function ze(){var a;if(!Uc){var b=rb();(na=w(b)?x.jQuery:b?x[b]:void 0)&&na.fn.on?(B=na,S(na.fn,{scope:Na.scope,isolateScope:Na.isolateScope,controller:Na.controller,injector:Na.injector,inheritedData:Na.inheritedData}),a=na.cleanData,na.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=na._data(f,"events"))&&c.$destroy&&na(f).triggerHandler("$destroy");a(b)}):B=W;ea.element=B;Uc=!0}}function fb(a,
b,d){if(!a)throw Fa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);fb(D(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ka(a,b){if("hasOwnProperty"===a)throw Fa("badname",b);}function Vc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&D(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=B(va.call(a,0,e))),c.push(b);return c||a}function V(){return Object.create(null)}function $b(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Wb(a)||H(a)||ga(a)?cb(a):a.toString()}return a}function Ae(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=L("$injector"),c=L("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||L;return b(a,"module",function(){var a={};return function(f,g,h){var k={};if("hasOwnProperty"===f)throw c("badname","module");
g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return v}}function b(a,c,d){d||(d=e);return function(b,e){e&&D(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return v}}if(!g)throw d("nomod",f);var e=[],p=[],r=[],J=a("$injector","invoke","push",p),v={_invokeQueue:e,_configBlocks:p,_runBlocks:r,info:function(a){if(u(a)){if(!C(a))throw c("aobj","value");k=a;return this}return k},requires:g,name:f,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",p),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:J,run:function(a){r.push(a);return this}};h&&J(h);return v})}})}function pa(a,b){if(H(a)){b=
b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(C(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Be(a,b){var d=[];Sb(b)&&(a=ra(a,null,b));return JSON.stringify(a,function(a,b){b=Nc(a,b);if(C(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ce(a){S(a,{errorHandlingConfig:me,bootstrap:Sc,copy:ra,extend:S,merge:oe,equals:sa,element:B,forEach:q,injector:eb,noop:z,bind:bb,toJson:cb,fromJson:Oc,identity:Ya,isUndefined:w,isDefined:u,isString:F,
isFunction:D,isObject:C,isNumber:ba,isElement:Ub,isArray:H,version:De,isDate:ga,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:xe,reloadWithDebugInfo:we,$$minErr:L,$$csp:Ga,$$encodeUriSegment:db,$$encodeUriQuery:$,$$stringify:$b});ac=Ae(x);ac("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ee});a.provider("$compile",Wc).directive({a:Fe,input:Xc,textarea:Xc,form:Ge,script:He,select:Ie,option:Je,ngBind:Ke,ngBindHtml:Le,ngBindTemplate:Me,ngClass:Ne,ngClassEven:Oe,
ngClassOdd:Pe,ngCloak:Qe,ngController:Re,ngForm:Se,ngHide:Te,ngIf:Ue,ngInclude:Ve,ngInit:We,ngNonBindable:Xe,ngPluralize:Ye,ngRepeat:Ze,ngShow:$e,ngStyle:af,ngSwitch:bf,ngSwitchWhen:cf,ngSwitchDefault:df,ngOptions:ef,ngTransclude:ff,ngModel:gf,ngList:hf,ngChange:jf,pattern:Yc,ngPattern:Yc,required:Zc,ngRequired:Zc,minlength:$c,ngMinlength:$c,maxlength:ad,ngMaxlength:ad,ngValue:kf,ngModelOptions:lf}).directive({ngInclude:mf}).directive(vb).directive(bd);a.provider({$anchorScroll:nf,$animate:of,$animateCss:pf,
$$animateJs:qf,$$animateQueue:rf,$$AnimateRunner:sf,$$animateAsyncRun:tf,$browser:uf,$cacheFactory:vf,$controller:wf,$document:xf,$$isDocumentHidden:yf,$exceptionHandler:zf,$filter:cd,$$forceReflow:Af,$interpolate:Bf,$interval:Cf,$http:Df,$httpParamSerializer:Ef,$httpParamSerializerJQLike:Ff,$httpBackend:Gf,$xhrFactory:Hf,$jsonpCallbacks:If,$location:Jf,$log:Kf,$parse:Lf,$rootScope:Mf,$q:Nf,$$q:Of,$sce:Pf,$sceDelegate:Qf,$sniffer:Rf,$templateCache:Sf,$templateRequest:Tf,$$testability:Uf,$timeout:Vf,
$window:Wf,$$rAF:Xf,$$jqLite:Yf,$$Map:Zf,$$cookieReader:$f})}]).info({angularVersion:"1.6.4"})}function gb(a,b){return b.toUpperCase()}function wb(a){return a.replace(ag,gb)}function bc(a){a=a.nodeType;return 1===a||!a||9===a}function dd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(cc.test(a)){d=e.appendChild(b.createElement("div"));c=(bg.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(cg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);
d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function W(a){if(a instanceof W)return a;var b;F(a)&&(a=T(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw dc("nosel");return new W(a)}if(b){b=x.document;var d;a=(d=dg.exec(a))?[b.createElement(d[1])]:(d=dd(a,b))?d.childNodes:[];ec(this,a)}else D(a)?ed(a):ec(this,a)}function fc(a){return a.cloneNode(!0)}function xb(a,b){!b&&bc(a)&&B.cleanData([a]);
a.querySelectorAll&&B.cleanData(a.querySelectorAll("*"))}function fd(a,b,d,c){if(u(c))throw dc("offargs");var e=(c=yb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&$a(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};q(b.split(" "),function(a){g(a);zb[a]&&g(zb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}function gc(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),
fd(a)),delete hb[d],a.ng339=void 0))}function yb(a,b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++eg,d=hb[d]={events:{},data:{},handle:void 0});return d}function hc(a,b,d){if(bc(a)){var c,e=u(d),f=!e&&b&&!C(b),g=!b;a=(a=yb(a,!f))&&a.data;if(e)a[wb(b)]=d;else{if(g)return a;if(f)return a&&a[wb(b)];for(c in b)a[wb(c)]=b[c]}}}function Ab(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Bb(a,b){b&&a.setAttribute&&q(b.split(" "),
function(b){a.setAttribute("class",T((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=T(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",T(d))}}function ec(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=
b}}function gd(a,b){return Db(a,"$"+(b||"ngController")+"Controller")}function Db(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function hd(a){for(xb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Eb(a,b){b||xb(a);var d=a.parentNode;d&&d.removeChild(a)}function fg(a,b){b=b||x;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function ed(a){function b(){x.document.removeEventListener("DOMContentLoaded",
b);x.removeEventListener("load",b);a()}"complete"===x.document.readyState?x.setTimeout(a):(x.document.addEventListener("DOMContentLoaded",b),x.addEventListener("load",b))}function id(a,b){var d=Fb[b.toLowerCase()];return d&&jd[wa(a)]&&d}function gg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||hg;1<g&&(f=pa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function hg(a,b,d){d.call(a,b)}function ig(a,b,d){var c=b.relatedTarget;c&&(c===a||jg.call(a,c))||d.call(a,b)}function Yf(){this.$get=function(){return S(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Cb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ne)():d+":"+a}function kd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function ld(a){a=Function.prototype.toString.call(a).replace(kg,"");return a.match(lg)||a.match(mg)}function ng(a){return(a=ld(a))?"function("+
(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(C(b))q(b,Lc(a));else return a(b,c)}}function c(a,b){Ka(a,"service");if(D(b)||H(b))b=p.instantiate(b);if(!b.$get)throw ya("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(w(c))throw ya("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){fb(w(a)||H(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{F(a)?(c=ac(a),v.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):D(a)?b.push(p.invoke(a)):H(a)?b.push(p.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),ya("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw ya("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var k=0,h=a.length;k<h;k++){var l=a[k];if("string"!==typeof l)throw ya("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(za||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ha(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Gb,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,
b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,la(b),!1)}),constant:d(function(a,b){Ka(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw ya("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return v.invoke(c.$get,c,void 0,a)}),v=J;n.$injectorProvider=
{$get:la(J)};v.modules=p.modules=V();var t=g(a),v=J.get("$injector");v.strictDi=b;q(t,function(a){a&&v.invoke(a)});return v}function nf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;D(c)?c=c():Ub(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
ba(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:ba(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||fg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function og(a){F(a)&&
(a=a.split(" "));var b=V();q(a,function(a){a.length&&(b[a]=!0)});return b}function ia(a){return C(a)?a:{}}function pg(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(J--,0===J)for(;v.length;)try{v.pop()()}catch(b){d.error(b)}}}function f(){Oa=null;h()}function g(){t=I();t=w(t)?null:t;sa(t,G)&&(t=G);M=G=t}function h(){var a=M;g();if(N!==k.url()||a!==t)N=k.url(),M=t,q(K,function(a){a(k.url(),t)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=
!1;var J=0,v=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():v.push(a)};var t,M,N=l.href,A=b.find("base"),Oa=null,I=c.history?function(){try{return m.state}catch(a){}}:z;g();k.url=function(b,d,e){w(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=M===e;if(N===b&&(!c.history||f))return k;var h=N&&Aa(N)===Aa(b);N=b;M=e;!c.history||h&&f?(h||(Oa=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(Oa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());Oa&&(Oa=b);return k}return Oa||l.href.replace(/%27/g,"'")};k.state=function(){return t};var K=[],E=!1,G=null;k.onUrlChange=function(b){if(!E){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);E=!0}K.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(z),!0):!1}}function uf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new pg(a,c,b,d)}]}function vf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(p?p===a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw L("$cacheFactory")("iid",a);var g=0,h=
S({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Sf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Wc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=V();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");
e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&C(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=re("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=V();this.directive=function N(b,d){fb(b,"name");Ka(b,"directive");F(b)?(c(b),fb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);D(h)?h={compile:la(h)}:!h.compile&&h.link&&(h.compile=la(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!F(l)||!/[EACM]/.test(l)))throw fa("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):q(b,Lc(N));return this};this.component=function(a,b){function c(a){function e(b){return D(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:qg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,D(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return u(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return u(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var v=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(v=a,this):v};var t=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,e,n,E,G,y,O,X){function P(){try{if(!--ya)throw ia=void 0,fa("infchng",J);G.$apply(function(){for(var a=[],b=0,c=ia.length;b<c;++b)try{ia[b]()}catch(d){a.push(d)}ia=void 0;if(a.length)throw a;})}finally{ya++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){ta.innerHTML="<span "+b+">";b=ta.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function La(a,
b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof B||(a=B(a));var f=Ma(a,b,a,c,d,e);ca.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw fa("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?B(ha(g,B("<div>").append(a).html())):
c?Na.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ca.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(B(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=H(a)||a instanceof B,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===za&&L(a,r,k);m=jc(a[r],[],l,0===r?d:void 0,e);(f=m.length?W(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ca.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Ma(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function L(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ia)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ia)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=V(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function jc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=wa(a);Y(b,
Ba(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var G=!1,E=!1;k=p[K];l=k.name;m=k.value;k=Ba(l);(n=Ja.test(k))&&(l=l.replace(md,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(G=l,E=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ba(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,id(a,k)&&(c[k]=!0);pa(a,b,m,k,n);Y(b,k,"A",d,e,G,E)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;C(f)&&(f=f.animVal);if(F(f)&&""!==f)for(;a=h.exec(f);)k=Ba(a[2]),Y(b,k,"C",d,e)&&(c[k]=T(a[3])),f=f.substr(a.index+a[0].length);break;case Ia:la(b,a.nodeValue);break;case 8:if(!Fa)break;jb(a,b,c,d,e)}b.sort(ea);return b}function jb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ba(f[1]);Y(b,h,"M",d,e)&&(c[h]=T(f[2]))}}catch(k){}}function nd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function od(a,b,c){return function(d,e,f,g,h){e=nd(e[0],b,c);return a(d,e,f,g,h)}}function kc(a,b,c,d,e,f){var g;return a?ca(b,c,d,e,f):function(){g||(g=ca(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function W(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=od(a,c,d));a.require=y.require;a.directiveName=P;if(E===y||y.$$isolateScope)a=qa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=od(b,c,d));b.require=
y.require;b.directiveName=P;if(E===y||y.$$isolateScope)b=qa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);X&&(e=O);c||(c=X?P.parent():P);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(w(f))throw fa("noslot",d,xa(P));}else return l(a,b,e,c,R)}var p,y,t,v,J,O,N,P;b===f?(g=d,P=d.$$element):(P=B(f),g=new s(P,d));J=e;E?v=e.$new(!0):K&&(J=e.$parent);l&&(N=m,N.$$boundTransclude=l,N.isSlotFilled=function(a){return!!l.$$slots[a]});G&&(O=
ba(P,g,N,G,v,e,E));E&&(ca.$$addScopeInfo(P,v,!0,!(I&&(I===E||I===E.$$originalDirective))),ca.$$addScopeClass(P,!0),v.$$isolateBindings=E.$$isolateBindings,y=na(e,g,v,v.$$isolateBindings,E),y.removeWatches&&v.$on("$destroy",y.removeWatches));for(p in O){y=G[p];t=O[p];var Hb=y.$$bindings.bindToController;if(r){t.bindingInfo=Hb?na(J,g,t.instance,Hb,y):{};var A=t();A!==t.instance&&(t.instance=A,P.data("$"+y.name+"Controller",A),t.bindingInfo.removeWatches&&t.bindingInfo.removeWatches(),t.bindingInfo=
na(J,g,t.instance,Hb,y))}else t.instance=t(),P.data("$"+y.name+"Controller",t.instance),t.bindingInfo=na(J,g,t.instance,Hb,y)}q(G,function(a,b){var c=a.require;a.bindToController&&!H(c)&&C(c)&&S(O[b].instance,U(b,c,P,O))});q(O,function(a){var b=a.instance;if(D(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(D(b.$onInit))try{b.$onInit()}catch(e){c(e)}D(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());D(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(y=h.length;p<y;p++)t=h[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);var R=e;E&&(E.template||null===E.templateUrl)&&(R=v);a&&a(R,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)t=k[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);q(O,function(a){a=a.instance;D(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,G=l.controllerDirectives,E=l.newIsolateScopeDirective,I=l.templateDirective,t=l.nonTlbTranscludeDirective,
J=!1,O=!1,X=l.hasElementTranscludeDirective,v=d.$$element=B(b),y,P,N,A=e,R,u=!1,La=!1,x,z=0,F=a.length;z<F;z++){y=a[z];var Ma=y.$$start,L=y.$$end;Ma&&(v=nd(b,Ma,L));N=void 0;if(p>y.priority)break;if(x=y.scope)y.templateUrl||(C(x)?($("new/isolated scope",E||K,y,v),E=y):$("new/isolated scope",E,y,v)),K=K||y;P=y.name;if(!u&&(y.replace&&(y.templateUrl||y.template)||y.transclude&&!y.$$tlb)){for(x=z+1;u=a[x++];)if(u.transclude&&!u.$$tlb||u.replace&&(u.templateUrl||u.template)){La=!0;break}u=!0}!y.templateUrl&&
y.controller&&(G=G||V(),$("'"+P+"' controller",G[P],y,v),G[P]=y);if(x=y.transclude)if(J=!0,y.$$tlb||($("transclusion",t,y,v),t=y),"element"===x)X=!0,p=y.priority,N=v,v=d.$$element=B(ca.$$createComment(P,d[P])),b=v[0],ka(f,va.call(N,0),b),N[0].$$parentNode=N[0].parentNode,A=kc(La,N,e,p,g&&g.name,{nonTlbTranscludeDirective:t});else{var ja=V();if(C(x)){N=[];var Q=V(),jb=V();q(x,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;ja[b]=null;jb[b]=c});q(v.contents(),function(a){var b=Q[Ba(wa(a))];
b?(jb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):N.push(a)});q(jb,function(a,b){if(!a)throw fa("reqslot",b);});for(var ic in ja)ja[ic]&&(ja[ic]=kc(La,ja[ic],e))}else N=B(fc(b)).contents();v.empty();A=kc(La,N,e,void 0,void 0,{needsNewScope:y.$$isolateScope||y.$$newScope});A.$$slots=ja}if(y.template)if(O=!0,$("template",I,y,v),I=y,x=D(y.template)?y.template(v,d):y.template,x=Ea(x),y.replace){g=y;N=cc.test(x)?pd(ha(y.templateNamespace,T(x))):[];b=N[0];if(1!==N.length||1!==b.nodeType)throw fa("tplrt",P,"");
ka(f,v,b);F={$attr:{}};x=jc(b,[],F);var Y=a.splice(z+1,a.length-(z+1));(E||K)&&aa(x,E,K);a=a.concat(x).concat(Y);da(d,F);F=a.length}else v.html(x);if(y.templateUrl)O=!0,$("template",I,y,v),I=y,y.replace&&(g=y),n=ga(a.splice(z,a.length-z),v,d,f,J&&A,h,k,{controllerDirectives:G,newScopeDirective:K!==y&&K,newIsolateScopeDirective:E,templateDirective:I,nonTlbTranscludeDirective:t}),F=a.length;else if(y.compile)try{R=y.compile(v,d,A);var Z=y.$$originalDirective||y;D(R)?m(null,bb(Z,R),Ma,L):R&&m(bb(Z,R.pre),
bb(Z,R.post),Ma,L)}catch(ea){c(ea,xa(v))}y.terminal&&(n.terminal=!0,p=Math.max(p,y.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=O;n.transclude=A;l.hasElementTranscludeDirective=X;return n}function U(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(H(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=U(a,b[g],c,d);else C(b)&&(e={},q(b,function(b,f){e[f]=U(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=V(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=E(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Vb(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,e,g,h,k,l){if(c===
h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(w(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Vb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,t={isolateScope:null,bindToController:null};C(K.scope)&&(!0===K.bindToController?(t.bindToController=d(K.scope,r,!0),t.isolateScope={}):t.isolateScope=d(K.scope,r,!1));C(K.bindToController)&&(t.bindToController=d(K.bindToController,r,!0));if(t.bindToController&&!K.controller)throw fa("noctrl",
r);m=m.$$bindings=t;C(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function da(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,f,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),t=Vb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),y=D(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,E=r.templateNamespace;b.empty();e(y).then(function(c){var e,G;c=Ea(c);if(r.replace){c=cc.test(c)?pd(ha(E,T(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw fa("tplrt",r.name,y);c={$attr:{}};ka(f,b,e);var I=jc(e,[],c);C(r.scope)&&aa(I,!0);a=I.concat(a);da(d,c)}else e=K,b.html(c);a.unshift(t);n=W(a,e,d,g,b,
r,h,k,l);q(f,function(a,c){a===e&&(f[c]=b[0])});for(p=Ma(b[0].childNodes,g);m.length;){c=m.shift();G=m.shift();var v=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(G!==K){var O=G.className;l.hasElementTranscludeDirective&&r.replace||(I=fc(e));ka(v,B(G),I);La(B(I),O)}G=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,f,G)}}m=null}).catch(function(a){a instanceof Error&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ea(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function la(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=x.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return y.HTML;var c=wa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return y.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return y.RESOURCE_URL}function pa(a,
c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===wa(a))throw fa("selmulti",xa(a));if(m.test(e))throw fa("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=V());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ka(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=x.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function qa(a,b){return S(function(){return a.apply(null,arguments)},
a,b)}function ra(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,xa(d))}}function na(a,c,d,e,f){function g(b,c,e){D(d.$onChanges)&&!Xb(c,e)&&(ia||(a.$$postDigest(P),ia=[]),m||(m={},ia.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,t,y,G;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(F(a)||Ha(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;r=c[m];
F(r)?d[h]=b(r)(a):Ha(r)&&(d[h]=r);l[h]=new Ib(lc,d[h]);k.push(p);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);G=t.literal?sa:Xb;y=t.assign||function(){r=d[h]=t(a);throw fa("nonassign",c[m],m,f.name);};r=d[h]=t(a);p=function(b){G(b,d[h])||(G(b,r)?y(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,t.literal);k.push(p);break;case "<":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);
var E=t.literal,I=d[h]=t(a);l[h]=new Ib(lc,d[h]);p=a.$watch(t,function(a,b){if(b===a){if(b===I||E&&sa(b,I))return;b=I}g(h,a,b);d[h]=a},E);k.push(p);break;case "&":t=c.hasOwnProperty(m)?n(c[m]):z;if(t===z&&p)break;d[h]=function(b){return t(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ca=/^\w/,ta=x.document.createElement("div"),Fa=v,Ga=t,ya=J,ia;s.prototype={$normalize:Ba,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=qd(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=qd(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=id(this.$$element[0],a),g=rd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Tc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=
b=X(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+X(T(g[m]),!0),f=f+(" "+T(g[m+1]));g=T(g[2*l]).split(/\s/);f+=X(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):Ca.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);G.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Da=b.endSymbol(),Ea="{{"===Aa&&"}}"===Da?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Da)},Ja=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ca.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:z;ca.$$addBindingClass=
p?function(a){La(a,"ng-binding")}:z;ca.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:z;ca.$$addScopeClass=p?function(a,b){La(a,b?"ng-isolate-scope":"ng-scope")}:z;ca.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return x.document.createComment(c)};return ca}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ba(a){return a.replace(md,"").replace(rg,gb)}function qd(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g===e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function pd(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ia&&""===d.nodeValue.trim())&&sg.call(a,b,1)}return a}function qg(a,b){if(b&&F(b))return b;if(F(a)){var d=sd.exec(a);if(d)return d[3]}}function wf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ka(b,"controller");C(b)?
S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!C(a.$scope))throw L("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(sd);if(!k)throw td("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Vc(g.$scope,m,!0)||(b?Vc(c,m,!0):void 0);if(!f)throw td("ctrlreg",m);sb(f,m,!0)}if(h)return h=(H(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,
l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(C(a)||D(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function xf(){this.$get=["$window",function(a){return B(a.document)}]}function yf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function zf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function mc(a){return C(a)?ga(a)?a.toISOString():cb(a):a}function Ef(){this.$get=function(){return function(a){if(!a)return"";var b=[];Kc(a,function(a,c){null===a||w(a)||(H(a)?q(a,function(a){b.push($(c)+"="+$(mc(a)))}):b.push($(c)+"="+$(mc(a))))});return b.join("&")}}}function Ff(){this.$get=function(){return function(a){function b(a,e,f){null===a||w(a)||(H(a)?q(a,function(a,c){b(a,e+"["+(C(a)?c:"")+"]")}):C(a)&&!ga(a)?Kc(a,function(a,
c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push($(e)+"="+$(mc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function nc(a,b){if(F(a)){var d=a.replace(tg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ud))||(c=(c=d.match(ug))&&vg[c[0]].test(d));if(c)try{a=Oc(d)}catch(e){throw oc("baddata",a,e);}}}return a}function vd(a){var b=V(),d;F(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):C(a)&&q(a,function(a,
d){var f=Q(d),g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function wd(a){var b;return function(d){b||(b=vd(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function xd(a,b,d,c){if(D(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function Df(){var a=this.defaults={transformResponse:[nc],transformRequest:[function(a){return C(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:pa(pc),put:pa(pc),patch:pa(pc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}
function e(a,b){var c,d={};q(a,function(a,e){D(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=xd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!C(b))throw L("$http")("badreq",b);if(!F(m.valueOf(b.url)))throw L("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=
function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,pa(b))}(b);g.method=ub(g.method);g.paramSerializer=F(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(t,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=xd(b.data,wd(c),void 0,b.transformRequest);w(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(z)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}O&&
(200<=a&&300>a?O.put(R,[a,c,vd(d),e]):O.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?G.resolve:G.reject)({data:a,status:b,headers:wd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,pa(a.headers()),a.statusText)}function t(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var G=k.defer(),y=G.promise,O,X,P=c.headers,s="jsonp"===Q(c.method),R=c.url;s?R=m.getTrustedResourceUrl(R):F(R)||(R=m.valueOf(R));R=r(R,
c.paramSerializer(c.params));s&&(R=J(R,c.jsonpCallbackParam));n.pendingRequests.push(c);y.then(t,t);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=C(c.cache)?c.cache:C(a.cache)?a.cache:v);O&&(X=O.get(R),u(X)?X&&D(X.then)?X.then(K,K):H(X)?p(X[1],X[0],pa(X[2]),X[3]):p(X,200,{},"OK"):O.put(R,y));w(X)&&((X=yd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(P[c.xsrfHeaderName||a.xsrfHeaderName]=X),e(c.method,R,d,l,P,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return y}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw oc("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw oc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var v=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var t=[];q(d,function(a){t.unshift(F(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Hf(){this.$get=function(){return function(){return new x.XMLHttpRequest}}}function Gf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return wg(a,c,a.defer,b,d[0])}]}function wg(a,b,d,c,e){function f(a,
b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,r,J,v){function t(){N&&N();A&&
A.abort()}h=h||a.url();if("jsonp"===Q(e))var M=c.createCallback(h),N=f(h,M,function(a,b){var e=200===a&&c.getResponse(M);u(I)&&d.cancel(I);N=A=null;l(a,e,"",b);c.removeCallback(M)});else{var A=b(e,h);A.open(e,h,!0);q(m,function(a,b){u(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"===Ca(h).protocol?404:0);var e=A.getAllResponseHeaders();u(I)&&d.cancel(I);N=A=null;l(c,b,e,a)};e=
function(){u(I)&&d.cancel(I);N=A=null;l(-1,null,null,"")};A.onerror=e;A.onabort=e;A.ontimeout=e;q(J,function(a,b){A.addEventListener(b,a)});q(v,function(a,b){A.upload.addEventListener(b,a)});p&&(A.withCredentials=!0);if(r)try{A.responseType=r}catch(s){if("json"!==r)throw s;}A.send(w(k)?null:k)}if(0<n)var I=d(t,n);else n&&D(n.then)&&n.then(t)}}function Bf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(f,k,n,p){function M(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);return p&&!u(a)?a:$b(a)}catch(d){c(Da.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var q;k||(k=g(f),q=la(k),q.exp=f,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var A,s,I=0,K=[],E=[];q=f.length;for(var G=[],y=[];I<q;)if(-1!==(A=f.indexOf(a,
I))&&-1!==(s=f.indexOf(b,A+l)))I!==A&&G.push(g(f.substring(I,A))),I=f.substring(A+l,s),K.push(I),E.push(d(I,M)),I=s+m,y.push(G.length),G.push("");else{I!==q&&G.push(g(f.substring(I)));break}n&&1<G.length&&Da.throwNoconcat(f);if(!k||K.length){var O=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&w(a[b]))return;G[y[b]]=a[b]}return G.join("")};return S(function(a){var b=0,d=K.length,e=Array(d);try{for(;b<d;b++)e[b]=E[b](a);return O(e)}catch(g){c(Da.interr(f,g))}},{exp:f,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(E,function(d,e){var f=O(d);D(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function Cf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,r):f(t)}var p=4<arguments.length,r=p?va.call(arguments,4):[],J=b.setInterval,v=b.clearInterval,
t=0,M=u(m)&&!m,q=(M?c:d).defer(),A=q.promise;l=u(l)?l:0;A.$$intervalId=J(function(){M?e.defer(n):a.$evalAsync(n);q.notify(t++);0<l&&t>=l&&(q.resolve(t),v(A.$$intervalId),delete g[A.$$intervalId]);M||a.$apply()},k);g[A.$$intervalId]=q;return A}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(z),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function qc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
db(a[b]);return a.join("/")}function zd(a,b){var d=Ca(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||xg[d.protocol]||null}function Ad(a,b){if(yg.test(a))throw kb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Ca(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Rc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function rc(a,b){return a.slice(0,b.length)===
b}function ka(a,b){if(rc(b,a))return b.substr(a.length)}function Aa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function sc(a,b,d){this.$$html5=!0;d=d||"";zd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!F(d))throw kb("ipthprfx",a,b);Ad(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=ka(a,c))?(g=f,g=d&&u(f=ka(d,f))?b+(ka("/",f)||f):a+g):u(f=ka(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function tc(a,b,d){zd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=ka(d,e),w(f)&&(f=e));Ad(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;rc(f,
e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return Aa(a)===Aa(b)?(this.$$parse(b),!0):!1}}function Bd(a,b,d){this.$$html5=!0;tc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;a===Aa(c)?f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Jb(a){return function(){return this[a]}}function Cd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Jf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};
this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(Ha(a))return b.enabled=a,this;if(C(a)){Ha(a.enabled)&&(b.enabled=a.enabled);Ha(a.requireBase)&&(b.requireBase=a.requireBase);if(Ha(a.rewriteLinks)||F(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=
f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?sc:Bd}else p=Aa(n),m=tc;var r=p.substr(0,Aa(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!==a.which&&2!==a.button){for(var h=B(a.target);"a"!==wa(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!F(e)||!w(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");C(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Ca(e.animVal).href);J.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(n)&&c.url(l.absUrl(),!0);var v=!0;
c.onUrlChange(function(a,b){rc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(v=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(v||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(v||m)v=
!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))})}l.$$replace=!1});return l}]}function Kf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(f){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}var f=za||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function zg(a){return a+""}function Ag(a,
b){return"undefined"!==typeof a?a:b}function Dd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function U(a,b){var d,c,e;switch(a.type){case s.Program:d=!0;q(a.body,function(a){U(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:U(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:U(a.test,b);U(a.alternate,b);U(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:U(a.object,b);a.computed&&U(a.property,b);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=e=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=e?c:[a];break;case s.AssignmentExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=
d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){U(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch);a.computed&&(U(a.key,b),a.key.constant||c.push.apply(c,a.key.toWatch))});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Ed(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Fd(a){return a.type===
s.Identifier||a.type===s.MemberExpression}function Gd(a){if(1===a.body.length&&Fd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Hd(a){this.$filter=a}function Id(a){this.$filter=a}function uc(a,b,d){this.ast=new s(a,d);this.astCompiler=d.csp?new Id(b):new Hd(b)}function vc(a){return D(a.valueOf)?a.valueOf():Bg.call(a)}function Lf(){var a=V(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=
function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=vc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,d.literal)||(h=d(a,void 0,void 0,[b]),k=b&&vc(b));return h},b,c,e)}for(var l=[],m=[],n=0,E=g.length;n<E;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],d.literal)))m[c]=k,l[c]=k&&vc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(a){return d(a)}function h(a,c,d){n=a;D(b)&&b(a,c,d);l(a)&&d.$$postDigest(function(){l(n)&&m()})}var l=d.literal?k:u,m,n;return m=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){function c(d,
e,g,h){g=f&&h?h[0]:a(d,e,g,h);return b(g,d,e)}function d(c,e,g,k){g=f&&k?k[0]:a(c,e,g,k);c=b(g,c,e);return h(g)?c:g}if(!b)return a;var e=a.$$watchDelegate,f=!1,h=a.literal?k:u,l=a.oneTime?d:c;l.literal=a.literal;l.oneTime=a.oneTime;f=!a.inputs;e&&e!==g?(l.$$watchDelegate=e,l.inputs=a.inputs):b.$stateful||(l.$$watchDelegate=g,l.inputs=a.inputs?a.inputs:[a]);return l}var n={csp:Ga().noUnsafeEval,literals:ra(b),isIdentifierStart:D(d)&&d,isIdentifierContinue:D(c)&&c};return function(b,c){var d,f,k;switch(typeof b){case "string":return k=
b=b.trim(),d=a[k],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new wc(n),d=(new uc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?(d.oneTime=!0,d.$$watchDelegate=h):d.inputs&&(d.$$watchDelegate=g),a[k]=d),m(d,c);case "function":return m(b,c);default:return m(z,c)}}}]}function Nf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Jd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Of(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Jd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Jd(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!s&&A.length;){var a=A.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):w(c)?"undefined":"string"!==typeof c?Be(c,void 0):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===s&&0===A.length&&a(g),A.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++s,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{D(c)?k(e,c(b.value)):1===b.status?k(e,b.value):
m(e,b.value)}catch(n){m(e,n)}}}finally{--s,d&&0===s&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,M("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(C(b)||D(b))f=b.then;D(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,D(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new f;m(b,a);return b}function J(a,b,c){var d=null;try{D(c)&&(d=c())}catch(e){return r(e)}return d&&D(d.then)?d.then(function(){return b(a)},r):b(a)}function v(a,b,c,d){var e=new f;k(e,a);return e.then(b,c,d)}function t(a){if(!D(a))throw M("norslvr",a);var b=new f;a(function(a){k(b,a)},function(a){m(b,a)});return b}var M=
L("$q",TypeError),s=0,A=[];S(f.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,u,a)},function(b){return J(b,r,a)},b)}});var u=v;t.prototype=f.prototype;t.defer=c;t.reject=r;t.when=v;t.resolve=u;t.all=function(a){var b=new f,c=0,d=H(a)?
[]:{};q(a,function(a,e){c++;v(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};t.race=function(a){var b=c();q(a,function(a){v(a).then(b.resolve,b.reject)});return b.promise};return t}function Xf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Mf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=L("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=
!0}function l(a){9===za&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(M.$$phase)throw d("inprog",
M.$$phase);M.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function v(){for(;u.length;)try{u.shift()()}catch(a){f(a)}e=null}function t(){null===e&&(e=h.defer(function(){M.$apply(v)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;D(b)||(l.fn=z);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(C(e))if(qa(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ua.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,t=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(C(e))if(qa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,t=b,q,u=[],w,x;n("$digest");h.$$checkUrlChange();this===M&&null!==e&&(h.defer.cancel(e),v());c=null;do{r=!1;q=this;for(p=0;p<s.length;p++){try{x=s[p],l=x.fn,l(x.scope,x.locals)}catch(z){f(z)}c=null}s.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?sa(g,k):da(g)&&da(k)))r=!0,c=a,a.last=a.eq?ra(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>t&&(w=4-t,u[w]||(u[w]=[]),u[w].push({msg:D(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(B){f(B)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||s.length)&&!t--)throw M.$$phase=
null,d("infdig",b,u);}while(r||s.length);for(M.$$phase=null;I<A.length;)try{A[I++]()}catch(F){f(F)}A.length=I=0;h.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===M&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=z;this.$on=this.$watch=this.$watchGroup=function(){return z};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){M.$$phase||s.length||h.defer(function(){s.length&&M.$digest()});s.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){A.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{M.$$phase=null}}catch(b){f(b)}finally{try{M.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);a=g(a);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var M=new m,s=M.$$asyncQueue=[],A=M.$$postDigestQueue=[],u=M.$$applyAsyncQueue=[],I=0;return M}]}function Ee(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Ca(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Cg(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ta("iwcard",a);a=Kd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ta("imatcher");}function Ld(a){var b=[];u(a)&&q(a,function(a){b.push(Cg(a))});return b}function Qf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Ld(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Ld(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?yd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ta("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||w(b)||
""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=Ca(e.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return e;throw ta("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw ta("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Pf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>za)throw ta("iequirks");var c=pa(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(oa,function(a,b){var d=Q(b);c[("parse_as_"+d).replace(xc,gb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(xc,gb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(xc,gb)]=function(b){return g(a,b)}});return c}]}function Rf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||
{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&za)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ga(),transitions:k,animations:l,android:e}}]}function Tf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(h,k){g.totalPendingRequests++;if(!F(h)||w(d.get(h)))h=f.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==nc}):l===nc&&(l=null);return c.get(h,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=Dg("tpload",h,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=
0;return g}]}function Uf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ea.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Kd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+
'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Vf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){D(f)||(l=k,k=f,f=z);var m=va.call(arguments,3),n=u(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[r.$$timeoutId]}n||
a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(z),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Ca(a){za&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):
"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function yd(a){a=F(a)?Ca(a):a;return a.protocol===Md.protocol&&a.host===Md.host}function Wf(){this.$get=la(x)}function Nd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&
(c[l]=b(g.substring(k+1))));return c}}function $f(){this.$get=Nd}function cd(a){function b(d,c){if(C(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Od);b("date",Pd);b("filter",Eg);b("json",Fg);b("limitTo",Gg);b("lowercase",Hg);b("number",Qd);b("orderBy",Rd);b("uppercase",Ig)}function Eg(){return function(a,b,d,c){if(!qa(a)){if(null==a)return a;throw L("filter")("notarray",
a);}c=c||"$";var e;switch(yc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Jg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Jg(a,b,d,c){var e=C(a)&&d in a;!0===b?b=sa:D(b)||(b=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;if(C(b)||C(a)&&!Wb(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!C(f)?Ea(f,a[d],b,d,!1):Ea(f,a,b,d,c)}}function Ea(a,b,d,c,e,
f){var g=yc(a),h=yc(b);if("string"===h&&"!"===b.charAt(0))return!Ea(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Ea(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if(k.charAt&&"$"!==k.charAt(0)&&Ea(a[k],b,d,c,!0))return!0;return f?!1:Ea(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!D(f)&&!w(f)&&(g=k===c,!Ea(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function yc(a){return null===a?"null":typeof a}function Od(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Sd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Sd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Kg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Td))&&(a=a.replace(Td,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===zc;e++);
if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===zc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Ud&&(d=d.splice(0,Ud-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Lg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-
1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Sd(a,b,d,c,e){if(!F(a)&&!ba(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=Kg(h);Lg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=zc+a;d&&(a=a.substr(a.length-b));return e+a}function Y(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Kb(f,b,c,e)}}function mb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Vd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Wd(a){return function(b){var d=Vd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function Ac(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Pd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=Mg.test(c)?Z(c):b(c));ba(c)&&(c=new Date(c));if(!ga(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Ng.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Pc(f,m),c=Yb(c,f,!0));q(h,function(b){k=Og[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Fg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function Gg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(da(b))return a;ba(a)&&(a=a.toString());if(!qa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?Bc(a,d,d+b):0===d?Bc(a,b,a.length):Bc(a,Math.max(0,d+b),d)}}function Bc(a,b,d){return F(a)?a.slice(b,d):va.call(a,b,d)}function Rd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(D(b))d=b;else if(F(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(C(k)&&(k=a.index),C(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!qa(a))throw L("orderBy")("notarray",a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=D(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(D(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Wb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Qa(a){D(a)&&(a={link:a});a.restrict=a.restrict||"AC";return la(a)}function Lb(a,b,d,
c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Xd(this)}function Xd(a){a.$$classCache={};a.$$classCache[Yd]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function Zd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Tc(c,"-"):"";b(a,nb+c,!0===d);b(a,Yd+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){w(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&e(this.$pending,a,h),$d(this.$pending)&&(this.$pending=void 0));Ha(g)?g?(e(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),e(this.$$success,a,h)):(e(this.$error,a,h),e(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=$d(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function $d(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Cc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Ra(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",
function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",l);if(ae[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ga(d))return d;if(F(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Pg.test(d))return new Date(d);
a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ga(a)?d(a)||
void 0:a}Dc(e,f,g,h);Ra(e,f,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Yb(a,r)),a});h.$formatters.push(function(a){if(a&&!ga(a))throw pb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Yb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(u(g.min)||g.ngMin){var v;h.$validators.min=function(a){return!n(a)||w(v)||d(a)>=v};g.$observe("min",function(a){v=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var t;
h.$validators.max=function(a){return!n(a)||w(t)||d(a)<=t};g.$observe("max",function(a){t=p(a);h.$validate()})}}}function Dc(a,b,d,c){(c.$$hasNativeValidators=C(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function be(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Qg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!ba(b))throw pb("numfmt",b);b=b.toString()}return b})}
function Sa(a){u(a)&&!ba(a)&&(a=parseFloat(a));return da(a)?void 0:a}function Ec(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ce(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Ec(a):0,h=e?Ec(b):0,k=f?Ec(d):0,g=Math.max(g,h,k),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function de(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",
d,c);return a(b)}return e}function Fc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){var b=a;H(a)?b=a.map(c).join(" "):C(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,h,k){function l(a,b){var c=[];q(a,function(a){if(0<b||n[a])n[a]=(n[a]||
0)+b,n[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===b){var c=r,c=l(c&&c.split(" "),1);k.$addClass(c)}else c=r,c=l(c&&c.split(" "),-1),k.$removeClass(c);p=a}var n=h.data("$classCounts"),p=!0,r;n||(n=V(),h.data("$classCounts",n));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(k[a],c),function(a){F(a)||(a=c(a));if(p===b){var e=a,f=r&&r.split(" "),g=e&&e.split(" "),e=d(f,g),f=d(g,f),e=l(e,-1),f=l(f,1);k.$addClass(f);k.$removeClass(e)}r=a})}}}]}
function Ob(a,b,d,c,e,f,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;
this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=h;this.$$exceptionHandler=b;Xd(this);Rg(this)}function Rg(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=
b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,z))}return b})}function Gc(a){this.$$options=a}function ee(a,b){q(b,function(b,c){u(a[c])||(a[c]=b)})}function Ta(a,b){a.prop("selected",b);a.attr("selected",b)}var Sg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Ic={objectMaxDepth:5},Q=function(a){return F(a)?a.toLowerCase():
a},ub=function(a){return F(a)?a.toUpperCase():a},za,B,na,va=[].slice,sg=[].splice,Tg=[].push,ma=Object.prototype.toString,Mc=Object.getPrototypeOf,Fa=L("ng"),ea=x.angular||(x.angular={}),ac,qb=0;za=x.document.documentMode;var da=Number.isNaN||function(a){return a!==a};z.$inject=[];Ya.$inject=[];var H=Array.isArray,qe=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,T=function(a){return F(a)?a.trim():a},Kd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ga=function(){if(!u(Ga.rules)){var a=x.document.querySelector("[ng-csp]")||x.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ga.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ga;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ga.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ja.length,
c,e;for(b=0;b<d;++b)if(c=Ja[b],a=x.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},se=/:/g,Ja=["ng-","data-ng-","ng:","x-ng-"],ve=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof x.HTMLScriptElement||b instanceof x.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=
b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(x.document),ye=/[A-Z]/g,Uc=!1,Ia=3,De={full:"1.6.4",major:1,minor:6,dot:4,codeName:"phenomenal-footnote"};W.expando="ng339";var hb=W.cache={},eg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var ag=/-([a-z])/g,Ug=/^-ms-/,zb={mouseleave:"mouseout",mouseenter:"mouseover"},dc=L("jqLite"),dg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
cc=/<|&#?\w+;/,bg=/<([\w:-]+)/,cg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var jg=x.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Na=W.prototype={ready:ed,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Tg,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Fb[Q(a)]=a});var jd={};q("input select option textarea button form details".split(" "),function(a){jd[a]=!0});var rd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern",ngStep:"step"};q({data:hc,removeData:gc,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gc(a[b])}},function(a,b){W[b]=a});q({data:hc,inheritedData:Db,scope:function(a){return B.data(a,"$scope")||Db(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:gd,injector:function(a){return Db(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,d){b=wb(b.replace(Ug,"ms-"));if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ia&&2!==c&&8!==c&&a.getAttribute){var c=Q(b),e=Fb[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Ia?
a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;xb(a,!0);a.innerHTML=b},empty:hd},function(a,b){W.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==hd&&w(2===a.length&&a!==Ab&&a!==gd?b:c)){if(C(b)){for(e=0;e<g;e++)if(a===hc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=
a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:gc,on:function(a,b,d,c){if(u(c))throw dc("onargs");if(bc(a)){c=yb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=gg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));h.push(d)};g--;)b=c[g],zb[b]?(h(zb[b],ig),h(b,void 0,!0)):h(b)}},
off:fd,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;xb(a);q(new W(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},
prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=B(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Eb,detach:function(a){Eb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var e=d;w(e)&&(e=!Ab(a,b));
(e?Cb:Bb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:fc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=yb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===
this.immediatePropagationStopped},stopPropagation:z,type:f,target:a},b.type&&(c=S(c,b)),b=pa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){W.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),u(f)&&(f=B(f))):ec(f,a(this[g],b,c,e));return u(f)?f:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;var Vg=Object.create(null);kd.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return da(a)?Vg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};
var Gb=kd,Zf=[function(){this.$get=[function(){return Gb}]}],lg=/^([^(]+?)=>/,mg=/^[^(]*\(\s*([^)]*)\)/m,Wg=/,/,Xg=/^\s*(_?)(\S+?)\1\s*$/,kg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ya=L("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||ng(a)),ya("strictdi",d);b=ld(a);q(b[1].split(Wg),function(a){a.replace(Xg,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",
!0);return c};var fe=L("$animate"),qf=function(){this.$get=z},rf=function(){var a=new Gb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):H(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=og(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Cb(a,e);f&&Bb(a,f)});a.delete(b)}});b.length=0}return{enabled:z,
on:z,off:z,pin:z,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.set(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},of=["$provide",function(a){var b=this,d=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw fe("notcsel",c);var f=c+"-animation";b.$$registeredAnimations[c.substr(1)]=
f;a.factory(f,d)};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,fe("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var l=d[e];if(1===l.nodeType){e=l;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&
a.end()},enter:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"enter",ia(k))},move:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"move",ia(k))},leave:function(b,d){return a.push(b,"leave",ia(d),function(){b.remove()})},addClass:function(b,d,e){e=ia(e);e.addClass=ib(e.addclass,d);return a.push(b,"addClass",e)},removeClass:function(b,d,e){e=ia(e);e.removeClass=ib(e.removeClass,d);return a.push(b,"removeClass",e)},setClass:function(b,d,
e,k){k=ia(k);k.addClass=ib(k.addClass,d);k.removeClass=ib(k.removeClass,e);return a.push(b,"setClass",k)},animate:function(b,d,e,k,l){l=ia(l);l.from=l.from?S(l.from,d):d;l.to=l.to?S(l.to,e):e;l.tempClasses=ib(l.tempClasses,k||"ng-inline-animate");return a.push(b,"animate",l)}}}]}],tf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},
sf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},
done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:z,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},pf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=ra(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=L("$compile"),lc=new function(){};Wc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===lc};var md=/^((?:x|data)[:\-_])/i,rg=/[:\-_]+(.)/g,td=L("$controller"),
sd=/^(\S+)(\s+as\s+([\w$]+))?$/,Af=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},ud="application/json",pc={"Content-Type":ud+";charset=utf-8"},ug=/^\[|^\{(?!\{)/,vg={"[":/]$/,"{":/}$/},tg=/^\)]\}',?\n/,oc=L("$http"),Da=ea.$interpolateMinErr=L("$interpolate");Da.throwNoconcat=function(a){throw Da("noconcat",a);};Da.interr=function(a,b){return Da("interr",a,b.toString())};var If=function(){this.$get=function(){function a(a){var b=
function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ea.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},Yg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,xg={http:80,https:443,ftp:21},kb=L("$location"),yg=/^\s*[\\/]{2,}/,Zg={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),
url:function(a){if(w(a))return this.$$url;var b=Yg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:Cd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||ba(a))a=a.toString(),this.$$search=Rc(a);else if(C(a))a=ra(a,{}),q(a,function(b,
c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Cd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([Bd,tc,sc],function(a){a.prototype=Object.create(Zg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==sc||!this.$$html5)throw kb("nostate");this.$$state=w(b)?null:b;this.$$urlUpdatedByLocation=
!0;return this}});var Ua=L("$parse"),Bg={}.constructor.prototype.valueOf,Qb=V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var $g={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},wc=function(a){this.options=a};wc.prototype={constructor:wc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],e=Qb[d];Qb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=$g[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Fd(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=ra(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
$locals:{type:s.LocalsExpression}}};Hd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(a,b.$filter);var d="",c;this.stage="assign";if(c=Gd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Ed(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var h=b.nextId();
b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,zg,Ag,Dd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||z;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,
void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,
b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),
k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.computedMember(g,h),k.assign(b,
m),d&&(d.computed=!0,d.name=h)):(e&&1!==e&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):
(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);m=k.member(g.context,
g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();
k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+
b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,
b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,
b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(ba(a))return a.toString();if(!0===a)return"true";if(!1===
a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Id.prototype={compile:function(a){var b=this;U(a,b.$filter);var d,c;if(d=Gd(a))c=this.recurse(d);d=Ed(a.body);var e;d&&(e=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;e.push(d);a.watchId=c}));var f=[];q(a.body,function(a){f.push(b.recurse(a.expression))});
a=0===a.body.length?z:1===a.body.length?f[0]:function(a,b){var c;q(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+
a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return f.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,
e,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),p;if(null!=n.value){p=[];for(var r=0;r<g.length;++r)p.push(g[r](a,c,d,f));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=
this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:
""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:
d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=Dd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);
return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?
{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:
c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]=
{});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,h){var k=a(e,f,g,h),l,m;null!=k&&(l=b(e,f,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};uc.prototype=
{constructor:uc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression);b.constant=a.constant;return b}};var ta=L("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},xc=/_([a-z])/g,Dg=L("$compile"),aa=x.document.createElement("a"),Md=Ca(x.location.href);Nd.$inject=["$document"];
cd.$inject=["$provide"];var Ud=22,Td=".",zc="0";Od.$inject=["$locale"];Qd.$inject=["$locale"];var Og={yyyy:Y("FullYear",4,0,!1,!0),yy:Y("FullYear",2,0,!0,!0),y:Y("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),LLLL:mb("Month",!1,!0),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),
a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Wd(2),w:Wd(1),G:Ac,GG:Ac,GGG:Ac,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ng=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Mg=/^-?\d+$/;Pd.$inject=["$locale"];var Hg=la(Q),Ig=la(ub);Rd.$inject=["$parse"];var Fe=la({restrict:"E",compile:function(a,
b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Fb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ba("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(rd,function(a,b){vb[b]=
function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Sg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ba("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),
za&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Mb={$addControl:z,$$renameControl:function(a,b){a.$name=b},$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z,$setSubmitted:z};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ka(a.$name,"input");this.$$controls.push(a);
a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Zd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ge=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||z}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,f){d.addClass(Va).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):z;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);S(n,Mb)})}}}}}]},Ge=ge(),
Se=ge(!0),Pg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ah=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,bh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Qg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,he=/^(\d{4,})-(\d{2})-(\d{2})$/,ie=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Hc=/^(\d{4,})-W(\d\d)$/,je=/^(\d{4,})-(\d\d)$/,ke=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ae=V();q(["date","datetime-local","month","time","week"],function(a){ae[a]=!0});var le={text:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c)},date:ob("date",he,Nb(he,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ie,Nb(ie,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ke,Nb(ke,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Hc,function(a,b){if(ga(a))return a;
if(F(a)){Hc.lastIndex=0;var d=Hc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Vd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:ob("month",je,Nb(je,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g},d.$observe("min",function(a){g=Sa(a);c.$validate()});
if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h},d.$observe("max",function(a){h=Sa(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||w(k)||ce(b,g||0,k)};d.$observe("step",function(a){k=Sa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||ah.test(d)}},email:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||bh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==T(d.ngTrim);w(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=T(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=T(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Sa(a);da(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Sa(a);da(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Sa(a);da(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=u(d.min);e=u(d.max);f=u(d.step);var s=c.$render;c.$render=m&&u(q.rangeUnderflow)&&
u(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(n)||b>=n},g("min",h));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(p)||b<=p},g("max",k));f&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||w(r)||ce(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,h){var k=de(h,a,"ngTrueValue",d.ngTrueValue,!0),l=de(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:z,button:z,submit:z,reset:z,file:z},Xc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(le[Q(g.type)]||le.text)(e,f,g,h[0],b,a,d,c)}}}}],ch=/^(true|false|\d+)$/,
kf=function(){function a(a,d,c){var e=u(c)?c:9===za?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return ch.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Ke=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=$b(a)})}}}}],Me=["$interpolate",
"$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],Le=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,
function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],jf=la({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ne=Fc("",!0),Pe=Fc("Odd",0),Oe=Fc("Even",1),Qe=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Re=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],bd={},dh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ba("ng-"+a);bd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};dh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ue=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",
e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Ve=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var r=0,q,s,t,w=function(){s&&(s.remove(),s=null);q&&(q.$destroy(),q=
null);t&&(d.leave(t).done(function(a){!1!==a&&(s=null)}),s=t,t=null)};c.$watch(f,function(f){var m=function(a){!1===a||!u(h)||h&&!c.$eval(h)||b()},s=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&s===r){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).done(m)});q=b;t=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||s!==r||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],mf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(dd(e.template,x.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],We=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),hf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!w(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",Yd="ng-invalid",Va="ng-pristine",Rb="ng-dirty",pb=L("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+
"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);D(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){D(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,xa(this.$$element));},$render:z,$isEmpty:function(a){return w(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,
"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=
!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!da(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),
f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(q(k.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(k.$asyncValidators,function(e,g){var k=e(a,b);if(!k||!D(k.then))throw pb("nopromise",k);f(g,void 0);c.push(k.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});
c.length?k.$$q.all(c).then(function(){g(d)},z):g(!0)}function f(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(w(k.$$parserValid))f(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){f(b,null)}),q(k.$asyncValidators,function(a,b){f(b,null)})),f(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?e():g(!1):
g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=w(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),w(a)){this.$$parserValid=!1;break}da(this.$modelValue)&&
(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},
this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");ba(b[a])?b=b[a]:ba(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};Zd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var gf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){h.$setTouched()}var h=f[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,eh=/(\s+|^)default(\s+|$)/;Gc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=S({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=T(d.replace(eh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ee(a,this.$$options));ee(a,Pb.$$options);return new Gc(a)}};Pb=new Gc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var lf=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Xe=Qa({terminal:!0,priority:1E3}),fh=L("ngOptions"),gh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
ef=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&qa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(gh);if(!n)throw fh("iexp",a,xa(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,t=s&&d(s),u=s?function(a,b){return t(c,b)}:function(a){return Pa(a)},
w=function(a,b){return u(a,G(a,b))},A=d(n[2]||n[1]),x=d(n[3]||""),I=d(n[4]||""),K=d(n[8]),E={},G=q?function(a,b){E[q]=b;E[p]=a;return E}:function(a){E[p]=a;return E};return{trackBy:s,getTrackByValue:w,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=G(l,h),l=u(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=I(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=G(d[p],p),r=v(c,q),p=u(r,q),t=A(c,q),E=x(c,q),q=I(c,q),r=new e(p,r,t,E,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return s?ra(a.viewValue):a.viewValue}}}}}var e=x.document.createElement("option"),f=x.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=z},post:function(d,h,k,l){function m(a){var b=(a=A.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=A&&r.readValue();if(A)for(var b=A.items.length-1;0<=b;b--){var c=A.items[b];u(c.group)?Eb(c.element.parentNode):Eb(c.element)}A=z.getOptions();var d={};x&&h.prepend(r.emptyOption);A.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),I.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=I,c=e.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(I);s.$render();s.$isEmpty(a)||(b=r.readValue(),(z.trackBy||v?sa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],v=k.multiple;l=0;for(var t=h.children(),w=t.length;l<w;l++)if(""===t[l].value){r.hasEmptyOption=!0;r.emptyOption=t.eq(l);break}var x=!!r.emptyOption;B(e.cloneNode(!1)).val("?");var A,z=c(k.ngOptions,h,d),I=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};v?(r.writeValue=function(a){var b=a&&a.map(m)||[];A.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=A.selectValueMap[a])&&!a.disabled&&b.push(A.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(H(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=A.selectValueMap[h.val()],c=A.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):x?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=A.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
A.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));x&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(z.getWatchables,
p)}}}}],Ye=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),t=s+l+"-"+n+v,u=ea.noop,x;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,t))});f.$watch(l,function(b){var c=parseFloat(b),e=da(c);e||c in p||(c=a.pluralCat(c-
n));c===x||e&&da(x)||(u(),e=r[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),u=z,k()):u=f.$watch(e,k),x=c)})}}}],Ze=["$parse","$animate","$compile",function(a,b,d){var c=L("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var t,u,w,x,z={$id:Pa};r?t=a(r):(w=function(a,b){return Pa(b)},
x=function(a){return a});return function(a,d,f,g,l){t&&(u=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=d;return t(a,z)});var m=V();a.$watchCollection(n,function(f){var g,n,r=d[0],t,z=V(),B,D,F,C,G,E,H;p&&(a[p]=f);if(qa(f))G=f,n=u||w;else for(H in n=u||x,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);B=G.length;H=Array(B);for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],C=n(D,F,g),m[C])E=m[C],delete m[C],z[C]=E,H[g]=E;else{if(z[C])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,F);H[g]={id:C,
scope:void 0,clone:void 0};z[C]=!0}for(t in m){E=m[t];C=tb(E.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],E=H[g],E.scope){t=r;do t=t.nextSibling;while(t&&t.$$NG_REMOVED);E.clone[0]!==t&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,s,F,v,D,B)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;z[E.id]=E;e(E.scope,g,s,F,v,D,B)});m=
z})}}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Te=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],af=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),bf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;k.length;)a.cancel(k.pop());d=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],cf=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),df=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),hh=L("ngTransclude"),ff=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw hh("orphan",xa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==
Ia||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],He=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ih={$setViewValue:z,$render:z},jh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){h||(h=!0,b.$$postDigest(function(){b.$$destroyed||(h=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}var e=this,f=new Gb;e.selectValueMap={};e.ngModelCtrl=ih;e.multiple=!1;e.unknownOption=B(x.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ta(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ta(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=
function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ta(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=z});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];
c&&Ta(B(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?c:b),Ta(B(a[0].options[a[0].selectedIndex]),!0)):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ka(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),
""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};var g=!1,h=!1;e.registerOption=function(a,b,f,g,h){if(f.$attr.ngValue){var q,s=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");u(s)&&(e.removeOption(q),delete e.selectValueMap[s],d=!0);s=Pa(a);q=a;e.selectValueMap[s]=a;e.addOption(a,b);b.attr("value",s);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(q)&&(e.removeOption(q),d=!0);q=
a;e.addOption(a,b);d&&f&&c()}):h?a.$watch(h,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ie=function(){return{restrict:"E",require:["select",
"?ngModel"],controller:jh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){q(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ta(B(b),c)})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||sa(g,f.$viewValue)||(g=pa(f.$viewValue),f.$render());h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=z},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Je=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;u(d.ngValue)||
(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],Zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw L("ngPattern")("noregexp",f,a,xa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=da(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};x.angular.bootstrap?x.console&&console.log("WARNING: Tried to load angular more than once."):(ze(),Ce(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(function(){ue(x.document,Sc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

!function(a){var b={type:"html",content:"",url:"",ajax:{},ajax_request:null,closeOnEsc:!0,closeOnOverlayClick:!0,clone:!1,overlay:{block:void 0,tpl:'<div class="arcticmodal-overlay"></div>',css:{backgroundColor:"#000",opacity:.6}},container:{block:void 0,tpl:'<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'},wrap:void 0,body:void 0,errors:{tpl:'<div class="arcticmodal-error arcticmodal-close"></div>',autoclose_delay:2e3,ajax_unsuccessful_load:"Error"},openEffect:{type:"fade",speed:400},closeEffect:{type:"fade",speed:400},beforeOpen:a.noop,afterOpen:a.noop,beforeClose:a.noop,afterClose:a.noop,afterLoading:a.noop,afterLoadingOnShow:a.noop,errorLoading:a.noop},c=0,d=a([]),e={isEventOut:function(b,c){var d=!0;return a(b).each(function(){a(c.target).get(0)==a(this).get(0)&&(d=!1),0==a(c.target).closest("HTML",a(this).get(0)).length&&(d=!1)}),d}},f={getParentEl:function(b){var c=a(b);return c.data("arcticmodal")?c:(c=a(b).closest(".arcticmodal-container").data("arcticmodalParentEl"),!!c&&c)},transition:function(b,c,d,e){switch(e=void 0==e?a.noop:e,d.type){case"fade":"show"==c?b.fadeIn(d.speed,e):b.fadeOut(d.speed,e);break;case"none":"show"==c?b.show():b.hide(),e()}},prepare_body:function(b,c){a(".arcticmodal-close",b.body).unbind("click.arcticmodal").bind("click.arcticmodal",function(){return c.arcticmodal("close"),!1})},init_el:function(b,h){var i=b.data("arcticmodal");if(!i){if(i=h,c++,i.modalID=c,i.overlay.block=a(i.overlay.tpl),i.overlay.block.css(i.overlay.css),i.container.block=a(i.container.tpl),i.body=a(".arcticmodal-container_i2",i.container.block),h.clone?i.body.html(b.clone(!0)):(b.before('<div id="arcticmodalReserve'+i.modalID+'" style="display: none" />'),i.body.html(b)),f.prepare_body(i,b),i.closeOnOverlayClick&&i.overlay.block.add(i.container.block).click(function(c){e.isEventOut(a(">*",i.body),c)&&b.arcticmodal("close")}),i.container.block.data("arcticmodalParentEl",b),b.data("arcticmodal",i),d=a.merge(d,b),a.proxy(g.show,b)(),"html"==i.type)return b;if(void 0!=i.ajax.beforeSend){var j=i.ajax.beforeSend;delete i.ajax.beforeSend}if(void 0!=i.ajax.success){var k=i.ajax.success;delete i.ajax.success}if(void 0!=i.ajax.error){var l=i.ajax.error;delete i.ajax.error}var m=a.extend(!0,{url:i.url,beforeSend:function(){void 0==j?i.body.html('<div class="arcticmodal-loading" />'):j(i,b)},success:function(a){b.trigger("afterLoading"),i.afterLoading(i,b,a),void 0==k?i.body.html(a):k(i,b,a),f.prepare_body(i,b),b.trigger("afterLoadingOnShow"),i.afterLoadingOnShow(i,b,a)},error:function(){b.trigger("errorLoading"),i.errorLoading(i,b),void 0==l?(i.body.html(i.errors.tpl),a(".arcticmodal-error",i.body).html(i.errors.ajax_unsuccessful_load),a(".arcticmodal-close",i.body).click(function(){return b.arcticmodal("close"),!1}),i.errors.autoclose_delay&&setTimeout(function(){b.arcticmodal("close")},i.errors.autoclose_delay)):l(i,b)}},i.ajax);i.ajax_request=a.ajax(m),b.data("arcticmodal",i)}},init:function(c){if(c=a.extend(!0,{},b,c),!a.isFunction(this))return this.each(function(){f.init_el(a(this),a.extend(!0,{},c))});if(void 0==c)return void a.error("jquery.arcticmodal: Uncorrect parameters");if(""==c.type)return void a.error('jquery.arcticmodal: Don\'t set parameter "type"');switch(c.type){case"html":if(""==c.content)return void a.error('jquery.arcticmodal: Don\'t set parameter "content"');var d=c.content;return c.content="",f.init_el(a(d),c);case"ajax":return""==c.url?void a.error('jquery.arcticmodal: Don\'t set parameter "url"'):f.init_el(a("<div />"),c)}}},g={show:function(){var b=f.getParentEl(this);if(b===!1)return void a.error("jquery.arcticmodal: Uncorrect call");var c=b.data("arcticmodal");return c.overlay.block.hide(),c.container.block.hide(),a("BODY").append(c.overlay.block),a("BODY").append(c.container.block),c.beforeOpen(c,b),b.trigger("beforeOpen"),"hidden"!=c.wrap.css("overflow")&&(c.wrap.data("arcticmodalOverflow",c.wrap.css("overflow")),c.wrap.outerWidth(!0),c.wrap.outerWidth(!0)),d.not(b).each(function(){var b=a(this).data("arcticmodal");b.overlay.block.hide()}),f.transition(c.overlay.block,"show",d.length>1?{type:"none"}:c.openEffect),f.transition(c.container.block,"show",d.length>1?{type:"none"}:c.openEffect,function(){c.afterOpen(c,b),b.trigger("afterOpen")}),b},close:function(){return a.isFunction(this)?void d.each(function(){a(this).arcticmodal("close")}):this.each(function(){var b=f.getParentEl(this);if(b===!1)return void a.error("jquery.arcticmodal: Uncorrect call");var c=b.data("arcticmodal");c.beforeClose(c,b)!==!1&&(b.trigger("beforeClose"),d.not(b).last().each(function(){var b=a(this).data("arcticmodal");b.overlay.block.show()}),f.transition(c.overlay.block,"hide",d.length>1?{type:"none"}:c.closeEffect),f.transition(c.container.block,"hide",d.length>1?{type:"none"}:c.closeEffect,function(){c.afterClose(c,b),b.trigger("afterClose"),c.clone||a("#arcticmodalReserve"+c.modalID).replaceWith(c.body.find(">*")),c.overlay.block.remove(),c.container.block.remove(),b.data("arcticmodal",null),a(".arcticmodal-container").length||(c.wrap.data("arcticmodalOverflow")&&c.wrap.css("overflow",c.wrap.data("arcticmodalOverflow")),c.wrap.css("marginRight",0))}),"ajax"==c.type&&c.ajax_request.abort(),d=d.not(b))})},setDefault:function(c){a.extend(!0,b,c)}};a(function(){b.wrap=a(document.all&&!document.querySelector?"html":"body")}),a(document).bind("keyup.arcticmodal",function(a){var b=d.last();if(b.length){var c=b.data("arcticmodal");c.closeOnEsc&&27===a.keyCode&&b.arcticmodal("close")}}),a.arcticmodal=a.fn.arcticmodal=function(b){return g[b]?g[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("jquery.arcticmodal: Method "+b+" does not exist"):f.init.apply(this,arguments)}}(jQuery);
!function(a){var b={},c={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};a.fn.bxSlider=function(d){if(0==this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(d)}),this;var e={},f=this;b.el=this;var g=a(window).width(),h=a(window).height(),j=function(){e.settings=a.extend({},c,d),e.settings.slideWidth=parseInt(e.settings.slideWidth),e.children=f.children(e.settings.slideSelector),e.children.length<e.settings.minSlides&&(e.settings.minSlides=e.children.length),e.children.length<e.settings.maxSlides&&(e.settings.maxSlides=e.children.length),e.settings.randomStart&&(e.settings.startSlide=Math.floor(Math.random()*e.children.length)),e.active={index:e.settings.startSlide},e.carousel=e.settings.minSlides>1||e.settings.maxSlides>1,e.carousel&&(e.settings.preloadImages="all"),e.minThreshold=e.settings.minSlides*e.settings.slideWidth+(e.settings.minSlides-1)*e.settings.slideMargin,e.maxThreshold=e.settings.maxSlides*e.settings.slideWidth+(e.settings.maxSlides-1)*e.settings.slideMargin,e.working=!1,e.controls={},e.interval=null,e.animProp="vertical"==e.settings.mode?"top":"left",e.usingCSS=e.settings.useCSS&&"fade"!=e.settings.mode&&function(){var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return e.cssPrefix=b[c].replace("Perspective","").toLowerCase(),e.animProp="-"+e.cssPrefix+"-transform",!0;return!1}(),"vertical"==e.settings.mode&&(e.settings.maxSlides=e.settings.minSlides),f.data("origStyle",f.attr("style")),f.children(e.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),k()},k=function(){f.wrap('<div class="'+e.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),e.viewport=f.parent(),e.loader=a('<div class="bx-loading" />'),e.viewport.prepend(e.loader),f.css({width:"horizontal"==e.settings.mode?100*e.children.length+215+"%":"auto",position:"relative"}),e.usingCSS&&e.settings.easing?f.css("-"+e.cssPrefix+"-transition-timing-function",e.settings.easing):e.settings.easing||(e.settings.easing="swing"),q(),e.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),e.viewport.parent().css({maxWidth:o()}),e.settings.pager||e.viewport.parent().css({margin:"0 auto 0px"}),e.children.css({"float":"horizontal"==e.settings.mode?"left":"none",listStyle:"none",position:"relative"}),e.children.css("width",p()),"horizontal"==e.settings.mode&&e.settings.slideMargin>0&&e.children.css("marginRight",e.settings.slideMargin),"vertical"==e.settings.mode&&e.settings.slideMargin>0&&e.children.css("marginBottom",e.settings.slideMargin),"fade"==e.settings.mode&&(e.children.css({position:"absolute",zIndex:0,display:"none"}),e.children.eq(e.settings.startSlide).css({zIndex:e.settings.slideZIndex,display:"block"})),e.controls.el=a('<div class="bx-controls" />'),e.settings.captions&&z(),e.active.last=e.settings.startSlide==r()-1,e.settings.video&&f.fitVids();var b=e.children.eq(e.settings.startSlide);"all"==e.settings.preloadImages&&(b=e.children),e.settings.ticker?e.settings.pager=!1:(e.settings.pager&&w(),e.settings.controls&&x(),e.settings.auto&&e.settings.autoControls&&y(),(e.settings.controls||e.settings.autoControls||e.settings.pager)&&e.viewport.after(e.controls.el)),l(b,m)},l=function(b,c){var d=b.find("img, iframe").length;if(0==d)return void c();var e=0;b.find("img, iframe").each(function(){a(this).one("load",function(){++e==d&&c()}).each(function(){this.complete&&a(this).load()})})},m=function(){if(e.settings.infiniteLoop&&"fade"!=e.settings.mode&&!e.settings.ticker){var b="vertical"==e.settings.mode?e.settings.minSlides:e.settings.maxSlides,c=e.children.slice(0,b).clone().addClass("bx-clone"),d=e.children.slice(-b).clone().addClass("bx-clone");f.append(c).prepend(d)}e.loader.remove(),t(),"vertical"==e.settings.mode&&(e.settings.adaptiveHeight=!0),e.viewport.height(n()),f.redrawSlider(),e.settings.onSliderLoad(e.active.index),e.initialized=!0,e.settings.responsive&&a(window).bind("resize",Q),e.settings.auto&&e.settings.autoStart&&(r()>1||e.settings.autoSlideForOnePage)&&J(),e.settings.ticker&&K(),e.settings.pager&&F(e.settings.startSlide),e.settings.controls&&I(),e.settings.touchEnabled&&!e.settings.ticker&&M()},n=function(){var b=0,c=a();if("vertical"==e.settings.mode||e.settings.adaptiveHeight)if(e.carousel){var d=1==e.settings.moveSlides?e.active.index:e.active.index*s();for(c=e.children.eq(d),i=1;i<=e.settings.maxSlides-1;i++)c=c.add(d+i>=e.children.length?e.children.eq(i-1):e.children.eq(d+i))}else c=e.children.eq(e.active.index);else c=e.children;return"vertical"==e.settings.mode?(c.each(function(){b+=a(this).outerHeight()}),e.settings.slideMargin>0&&(b+=e.settings.slideMargin*(e.settings.minSlides-1))):b=Math.max.apply(Math,c.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"==e.viewport.css("box-sizing")?b+=parseFloat(e.viewport.css("padding-top"))+parseFloat(e.viewport.css("padding-bottom"))+parseFloat(e.viewport.css("border-top-width"))+parseFloat(e.viewport.css("border-bottom-width")):"padding-box"==e.viewport.css("box-sizing")&&(b+=parseFloat(e.viewport.css("padding-top"))+parseFloat(e.viewport.css("padding-bottom"))),b},o=function(){var a="100%";return e.settings.slideWidth>0&&(a="horizontal"==e.settings.mode?e.settings.maxSlides*e.settings.slideWidth+(e.settings.maxSlides-1)*e.settings.slideMargin:e.settings.slideWidth),a},p=function(){var a=e.settings.slideWidth,b=e.viewport.width();return 0==e.settings.slideWidth||e.settings.slideWidth>b&&!e.carousel||"vertical"==e.settings.mode?a=b:e.settings.maxSlides>1&&"horizontal"==e.settings.mode&&(b>e.maxThreshold||b<e.minThreshold&&(a=(b-e.settings.slideMargin*(e.settings.minSlides-1))/e.settings.minSlides)),a},q=function(){var a=1;if("horizontal"==e.settings.mode&&e.settings.slideWidth>0)if(e.viewport.width()<e.minThreshold)a=e.settings.minSlides;else if(e.viewport.width()>e.maxThreshold)a=e.settings.maxSlides;else{var b=e.children.first().width()+e.settings.slideMargin;a=Math.floor((e.viewport.width()+e.settings.slideMargin)/b)}else"vertical"==e.settings.mode&&(a=e.settings.minSlides);return a},r=function(){var a=0;if(e.settings.moveSlides>0)if(e.settings.infiniteLoop)a=Math.ceil(e.children.length/s());else for(var b=0,c=0;b<e.children.length;)++a,b=c+q(),c+=e.settings.moveSlides<=q()?e.settings.moveSlides:q();else a=Math.ceil(e.children.length/q());return a},s=function(){return e.settings.moveSlides>0&&e.settings.moveSlides<=q()?e.settings.moveSlides:q()},t=function(){if(e.children.length>e.settings.maxSlides&&e.active.last&&!e.settings.infiniteLoop){if("horizontal"==e.settings.mode){var a=e.children.last(),b=a.position();u(-(b.left-(e.viewport.width()-a.outerWidth())),"reset",0)}else if("vertical"==e.settings.mode){var c=e.children.length-e.settings.minSlides,b=e.children.eq(c).position();u(-b.top,"reset",0)}}else{var b=e.children.eq(e.active.index*s()).position();e.active.index==r()-1&&(e.active.last=!0),void 0!=b&&("horizontal"==e.settings.mode?u(-b.left,"reset",0):"vertical"==e.settings.mode&&u(-b.top,"reset",0))}},u=function(a,b,c,d){if(e.usingCSS){var g="vertical"==e.settings.mode?"translate3d(0, "+a+"px, 0)":"translate3d("+a+"px, 0, 0)";f.css("-"+e.cssPrefix+"-transition-duration",c/1e3+"s"),"slide"==b?(f.css(e.animProp,g),f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),G()})):"reset"==b?f.css(e.animProp,g):"ticker"==b&&(f.css("-"+e.cssPrefix+"-transition-timing-function","linear"),f.css(e.animProp,g),f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),u(d.resetValue,"reset",0),L()}))}else{var h={};h[e.animProp]=a,"slide"==b?f.animate(h,c,e.settings.easing,function(){G()}):"reset"==b?f.css(e.animProp,a):"ticker"==b&&f.animate(h,speed,"linear",function(){u(d.resetValue,"reset",0),L()})}},v=function(){for(var b="",c=r(),d=0;c>d;d++){var f="";e.settings.buildPager&&a.isFunction(e.settings.buildPager)?(f=e.settings.buildPager(d),e.pagerEl.addClass("bx-custom-pager")):(f=d+1,e.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+d+'" class="bx-pager-link">'+f+"</a></div>"}e.pagerEl.html(b)},w=function(){e.settings.pagerCustom?e.pagerEl=a(e.settings.pagerCustom):(e.pagerEl=a('<div class="bx-pager" />'),e.settings.pagerSelector?a(e.settings.pagerSelector).html(e.pagerEl):e.controls.el.addClass("bx-has-pager").append(e.pagerEl),v()),e.pagerEl.on("click","a",E)},x=function(){e.controls.next=a('<a class="bx-next" href="">'+e.settings.nextText+"</a>"),e.controls.prev=a('<a class="bx-prev" href="">'+e.settings.prevText+"</a>"),e.controls.next.bind("click",A),e.controls.prev.bind("click",B),e.settings.nextSelector&&a(e.settings.nextSelector).append(e.controls.next),e.settings.prevSelector&&a(e.settings.prevSelector).append(e.controls.prev),e.settings.nextSelector||e.settings.prevSelector||(e.controls.directionEl=a('<div class="bx-controls-direction" />'),e.controls.directionEl.append(e.controls.prev).append(e.controls.next),e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl))},y=function(){e.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+e.settings.startText+"</a></div>"),e.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+e.settings.stopText+"</a></div>"),e.controls.autoEl=a('<div class="bx-controls-auto" />'),e.controls.autoEl.on("click",".bx-start",C),e.controls.autoEl.on("click",".bx-stop",D),e.settings.autoControlsCombine?e.controls.autoEl.append(e.controls.start):e.controls.autoEl.append(e.controls.start).append(e.controls.stop),e.settings.autoControlsSelector?a(e.settings.autoControlsSelector).html(e.controls.autoEl):e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl),H(e.settings.autoStart?"stop":"start")},z=function(){e.children.each(function(){var b=a(this).find("img:first").attr("title");void 0!=b&&(""+b).length&&a(this).append('<div class="bx-caption"><span>'+b+"</span></div>")})},A=function(a){e.settings.auto&&f.stopAuto(),f.goToNextSlide(),a.preventDefault()},B=function(a){e.settings.auto&&f.stopAuto(),f.goToPrevSlide(),a.preventDefault()},C=function(a){f.startAuto(),a.preventDefault()},D=function(a){f.stopAuto(),a.preventDefault()},E=function(b){e.settings.auto&&f.stopAuto();var c=a(b.currentTarget);if(void 0!==c.attr("data-slide-index")){var d=parseInt(c.attr("data-slide-index"));d!=e.active.index&&f.goToSlide(d),b.preventDefault()}},F=function(b){var c=e.children.length;return"short"==e.settings.pagerType?(e.settings.maxSlides>1&&(c=Math.ceil(e.children.length/e.settings.maxSlides)),void e.pagerEl.html(b+1+e.settings.pagerShortSeparator+c)):(e.pagerEl.find("a").removeClass("active"),void e.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}))},G=function(){if(e.settings.infiniteLoop){var a="";0==e.active.index?a=e.children.eq(0).position():e.active.index==r()-1&&e.carousel?a=e.children.eq((r()-1)*s()).position():e.active.index==e.children.length-1&&(a=e.children.eq(e.children.length-1).position()),a&&("horizontal"==e.settings.mode?u(-a.left,"reset",0):"vertical"==e.settings.mode&&u(-a.top,"reset",0))}e.working=!1,e.settings.onSlideAfter(e.children.eq(e.active.index),e.oldIndex,e.active.index)},H=function(a){e.settings.autoControlsCombine?e.controls.autoEl.html(e.controls[a]):(e.controls.autoEl.find("a").removeClass("active"),e.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},I=function(){1==r()?(e.controls.prev.addClass("disabled"),e.controls.next.addClass("disabled")):!e.settings.infiniteLoop&&e.settings.hideControlOnEnd&&(0==e.active.index?(e.controls.prev.addClass("disabled"),e.controls.next.removeClass("disabled")):e.active.index==r()-1?(e.controls.next.addClass("disabled"),e.controls.prev.removeClass("disabled")):(e.controls.prev.removeClass("disabled"),e.controls.next.removeClass("disabled")))},J=function(){e.settings.autoDelay>0?setTimeout(f.startAuto,e.settings.autoDelay):f.startAuto(),e.settings.autoHover&&f.hover(function(){e.interval&&(f.stopAuto(!0),e.autoPaused=!0)},function(){e.autoPaused&&(f.startAuto(!0),e.autoPaused=null)})},K=function(){var b=0;if("next"==e.settings.autoDirection)f.append(e.children.clone().addClass("bx-clone"));else{f.prepend(e.children.clone().addClass("bx-clone"));var c=e.children.first().position();b="horizontal"==e.settings.mode?-c.left:-c.top}u(b,"reset",0),e.settings.pager=!1,e.settings.controls=!1,e.settings.autoControls=!1,e.settings.tickerHover&&!e.usingCSS&&e.viewport.hover(function(){f.stop()},function(){var b=0;e.children.each(function(){b+="horizontal"==e.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)});var c=e.settings.speed/b,d="horizontal"==e.settings.mode?"left":"top",g=c*(b-Math.abs(parseInt(f.css(d))));L(g)}),L()},L=function(a){speed=a?a:e.settings.speed;var b={left:0,top:0},c={left:0,top:0};"next"==e.settings.autoDirection?b=f.find(".bx-clone").first().position():c=e.children.first().position();var d="horizontal"==e.settings.mode?-b.left:-b.top,g="horizontal"==e.settings.mode?-c.left:-c.top,h={resetValue:g};u(d,"ticker",speed,h)},M=function(){e.touch={start:{x:0,y:0},end:{x:0,y:0}},e.viewport.bind("touchstart",N)},N=function(a){if(e.working)a.preventDefault();else{e.touch.originalPos=f.position();var b=a.originalEvent;e.touch.start.x=b.changedTouches[0].pageX,e.touch.start.y=b.changedTouches[0].pageY,e.viewport.bind("touchmove",O),e.viewport.bind("touchend",P)}},O=function(a){var b=a.originalEvent,c=Math.abs(b.changedTouches[0].pageX-e.touch.start.x),d=Math.abs(b.changedTouches[0].pageY-e.touch.start.y);if(3*c>d&&e.settings.preventDefaultSwipeX?a.preventDefault():3*d>c&&e.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!=e.settings.mode&&e.settings.oneToOneTouch){var f=0;if("horizontal"==e.settings.mode){var g=b.changedTouches[0].pageX-e.touch.start.x;f=e.touch.originalPos.left+g}else{var g=b.changedTouches[0].pageY-e.touch.start.y;f=e.touch.originalPos.top+g}u(f,"reset",0)}},P=function(a){e.viewport.unbind("touchmove",O);var b=a.originalEvent,c=0;if(e.touch.end.x=b.changedTouches[0].pageX,e.touch.end.y=b.changedTouches[0].pageY,"fade"==e.settings.mode){var d=Math.abs(e.touch.start.x-e.touch.end.x);d>=e.settings.swipeThreshold&&(e.touch.start.x>e.touch.end.x?f.goToNextSlide():f.goToPrevSlide(),f.stopAuto())}else{var d=0;"horizontal"==e.settings.mode?(d=e.touch.end.x-e.touch.start.x,c=e.touch.originalPos.left):(d=e.touch.end.y-e.touch.start.y,c=e.touch.originalPos.top),!e.settings.infiniteLoop&&(0==e.active.index&&d>0||e.active.last&&0>d)?u(c,"reset",200):Math.abs(d)>=e.settings.swipeThreshold?(0>d?f.goToNextSlide():f.goToPrevSlide(),f.stopAuto()):u(c,"reset",200)}e.viewport.unbind("touchend",P)},Q=function(){if(e.initialized){var b=a(window).width(),c=a(window).height();(g!=b||h!=c)&&(g=b,h=c,f.redrawSlider(),e.settings.onSliderResize.call(f,e.active.index))}};return f.goToSlide=function(b,c){if(!e.working&&e.active.index!=b)if(e.working=!0,e.oldIndex=e.active.index,e.active.index=0>b?r()-1:b>=r()?0:b,e.settings.onSlideBefore(e.children.eq(e.active.index),e.oldIndex,e.active.index),"next"==c?e.settings.onSlideNext(e.children.eq(e.active.index),e.oldIndex,e.active.index):"prev"==c&&e.settings.onSlidePrev(e.children.eq(e.active.index),e.oldIndex,e.active.index),e.active.last=e.active.index>=r()-1,e.settings.pager&&F(e.active.index),e.settings.controls&&I(),"fade"==e.settings.mode)e.settings.adaptiveHeight&&e.viewport.height()!=n()&&e.viewport.animate({height:n()},e.settings.adaptiveHeightSpeed),e.children.filter(":visible").fadeOut(e.settings.speed).css({zIndex:0}),e.children.eq(e.active.index).css("zIndex",e.settings.slideZIndex+1).fadeIn(e.settings.speed,function(){a(this).css("zIndex",e.settings.slideZIndex),G()});else{e.settings.adaptiveHeight&&e.viewport.height()!=n()&&e.viewport.animate({height:n()},e.settings.adaptiveHeightSpeed);var d=0,g={left:0,top:0};if(!e.settings.infiniteLoop&&e.carousel&&e.active.last)if("horizontal"==e.settings.mode){var h=e.children.eq(e.children.length-1);g=h.position(),d=e.viewport.width()-h.outerWidth()}else{var i=e.children.length-e.settings.minSlides;g=e.children.eq(i).position()}else if(e.carousel&&e.active.last&&"prev"==c){var j=1==e.settings.moveSlides?e.settings.maxSlides-s():(r()-1)*s()-(e.children.length-e.settings.maxSlides),h=f.children(".bx-clone").eq(j);g=h.position()}else if("next"==c&&0==e.active.index)g=f.find("> .bx-clone").eq(e.settings.maxSlides).position(),e.active.last=!1;else if(b>=0){var k=b*s();g=e.children.eq(k).position()}if("undefined"!=typeof g){var l="horizontal"==e.settings.mode?-(g.left-d):-g.top;u(l,"slide",e.settings.speed)}}},f.goToNextSlide=function(){if(e.settings.infiniteLoop||!e.active.last){var a=parseInt(e.active.index)+1;f.goToSlide(a,"next")}},f.goToPrevSlide=function(){if(e.settings.infiniteLoop||0!=e.active.index){var a=parseInt(e.active.index)-1;f.goToSlide(a,"prev")}},f.startAuto=function(a){e.interval||(e.interval=setInterval(function(){"next"==e.settings.autoDirection?f.goToNextSlide():f.goToPrevSlide()},e.settings.pause),e.settings.autoControls&&1!=a&&H("stop"))},f.stopAuto=function(a){e.interval&&(clearInterval(e.interval),e.interval=null,e.settings.autoControls&&1!=a&&H("start"))},f.getCurrentSlide=function(){return e.active.index},f.getCurrentSlideElement=function(){return e.children.eq(e.active.index)},f.getSlideCount=function(){return e.children.length},f.redrawSlider=function(){e.children.add(f.find(".bx-clone")).width(p()),e.viewport.css("height",n()),e.settings.ticker||t(),e.active.last&&(e.active.index=r()-1),e.active.index>=r()&&(e.active.last=!0),e.settings.pager&&!e.settings.pagerCustom&&(v(),F(e.active.index))},f.destroySlider=function(){e.initialized&&(e.initialized=!1,a(".bx-clone",this).remove(),e.children.each(function(){void 0!=a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!=a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),e.controls.el&&e.controls.el.remove(),e.controls.next&&e.controls.next.remove(),e.controls.prev&&e.controls.prev.remove(),e.pagerEl&&e.settings.controls&&e.pagerEl.remove(),a(".bx-caption",this).remove(),e.controls.autoEl&&e.controls.autoEl.remove(),clearInterval(e.interval),e.settings.responsive&&a(window).unbind("resize",Q))},f.reloadSlider=function(a){void 0!=a&&(d=a),f.destroySlider(),j()},j(),this}}(jQuery);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map