/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/parser","require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "),function(D,y,v,w,M,N,O,P,K,Q,R,E,F,L,S,T){function G(a){return eval("("+a+")")}function U(a){var b=a._nameCaseMap,c=a.prototype;if(!b||b._extendCnt<B){var b=a._nameCaseMap={},f;for(f in c)"_"!==f.charAt(0)&&(b[f.toLowerCase()]=f);b._extendCnt=B}return b}function H(a,b){b||(b=D);var c=b._dojoParserCtorMap||
(b._dojoParserCtorMap={}),f=a.join();if(!c[f]){for(var d=[],l=0,x=a.length;l<x;l++){var m=a[l];d[d.length]=c[m]=c[m]||v.getObject(m)||~m.indexOf("/")&&b(m)}a=d.shift();c[f]=d.length?a.createSubclass?a.createSubclass(d):a.extend.apply(a,d):a}return c[f]}new Date("X");var B=0;K.after(v,"extend",function(){B++},!0);var J={_clearCache:function(){B++;_ctorMap={}},_functionFromScript:function(a,b){var c="",f="",d=a.getAttribute(b+"args")||a.getAttribute("args");b=a.getAttribute("with");d=(d||"").split(/\s*,\s*/);
b&&b.length&&w.forEach(b.split(/\s*,\s*/),function(b){c+="with("+b+"){";f+="}"});return new Function(d,c+a.innerHTML+f)},instantiate:function(a,b,c){b=b||{};c=c||{};var f=(c.scope||y._scopeName)+"Type",d="data-"+(c.scope||y._scopeName)+"-",l=d+"type",x=d+"mixins",m=[];w.forEach(a,function(a){var c=f in b?b[f]:a.getAttribute(l)||a.getAttribute(f);if(c){var d=a.getAttribute(x),c=d?[c].concat(d.split(/\s*,\s*/)):[c];m.push({node:a,types:c})}});return this._instantiate(m,b,c)},_instantiate:function(a,
b,c,f){function d(a){b._started||c.noStart||w.forEach(a,function(a){"function"!==typeof a.startup||a._started||a.startup()});return a}a=w.map(a,function(a){var d=a.ctor||H(a.types,c.contextRequire);if(!d)throw Error("Unable to resolve constructor for: '"+a.types.join()+"'");return this.construct(d,a.node,b,c,a.scripts,a.inherited)},this);return f?Q(a).then(d):d(a)},construct:function(a,b,c,f,d,l){function x(a){t&&v.setObject(t,a);for(k=0;k<z.length;k++)K[z[k].advice||"after"](a,z[k].method,v.hitch(a,
z[k].func),!0);for(k=0;k<I.length;k++)I[k].call(a);for(k=0;k<C.length;k++)a.watch(C[k].prop,C[k].func);for(k=0;k<A.length;k++)S(a,A[k].event,A[k].func);return a}var m=a&&a.prototype;f=f||{};var p={};f.defaults&&v.mixin(p,f.defaults);l&&v.mixin(p,l);var r;F("dom-attributes-explicit")?r=b.attributes:F("dom-attributes-specified-flag")?r=w.filter(b.attributes,function(a){return a.specified}):(l=(/^input$|^img$/i.test(b.nodeName)?b:b.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,
"").replace(/\s*>.*$/,""),r=w.map(l.split(/\s+/),function(a){var c=a.toLowerCase();return{name:a,value:"LI"==b.nodeName&&"value"==a||"enctype"==c?b.getAttribute(c):b.getAttributeNode(c).value}}));var h=f.scope||y._scopeName;l="data-"+h+"-";var g={};"dojo"!==h&&(g[l+"props"]="data-dojo-props",g[l+"type"]="data-dojo-type",g[l+"mixins"]="data-dojo-mixins",g[h+"type"]="dojotype",g[l+"id"]="data-dojo-id");for(var k=0,e,h=[],t,q;e=r[k++];){var n=e.name,u=n.toLowerCase();e=e.value;switch(g[u]||u){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;
case "data-dojo-props":q=e;break;case "data-dojo-id":case "jsid":t=e;break;case "data-dojo-attach-point":case "dojoattachpoint":p.dojoAttachPoint=e;break;case "data-dojo-attach-event":case "dojoattachevent":p.dojoAttachEvent=e;break;case "class":p["class"]=b.className;break;case "style":p.style=b.style&&b.style.cssText;break;default:if(n in m||(n=U(a)[u]||n),n in m)switch(typeof m[n]){case "string":p[n]=e;break;case "number":p[n]=e.length?Number(e):NaN;break;case "boolean":p[n]="false"!=e.toLowerCase();
break;case "function":""===e||-1!=e.search(/[^\w\.]+/i)?p[n]=new Function(e):p[n]=v.getObject(e,!1)||new Function(e);h.push(n);break;default:u=m[n],p[n]=u&&"length"in u?e?e.split(/\s*,\s*/):[]:u instanceof Date?""==e?new Date(""):"now"==e?new Date:R.fromISOString(e):u instanceof P?y.baseUrl+e:G(e)}else p[n]=e}}for(r=0;r<h.length;r++)g=h[r].toLowerCase(),b.removeAttribute(g),b[g]=null;if(q)try{q=G.call(f.propsThis,"{"+q+"}"),v.mixin(p,q)}catch(V){throw Error(V.toString()+" in data-dojo-props\x3d'"+
q+"'");}v.mixin(p,c);d||(d=a&&(a._noScript||m._noScript)?[]:L("\x3e script[type^\x3d'dojo/']",b));var z=[],I=[],C=[],A=[];if(d)for(k=0;k<d.length;k++)g=d[k],b.removeChild(g),c=g.getAttribute(l+"event")||g.getAttribute("event"),f=g.getAttribute(l+"prop"),q=g.getAttribute(l+"method"),h=g.getAttribute(l+"advice"),r=g.getAttribute("type"),g=this._functionFromScript(g,l),c?"dojo/connect"==r?z.push({method:c,func:g}):"dojo/on"==r?A.push({event:c,func:g}):p[c]=g:"dojo/aspect"==r?z.push({method:q,advice:h,
func:g}):"dojo/watch"==r?C.push({prop:f,func:g}):I.push(g);a=(d=a.markupFactory||m.markupFactory)?d(p,b,a):new a(p,b);return a.then?a.then(x):x(a)},scan:function(a,b){function c(a){if(!a.inherited){a.inherited={};var b=a.node,d=c(a.parent),b={dir:b.getAttribute("dir")||d.dir,lang:b.getAttribute("lang")||d.lang,textDir:b.getAttribute(r)||d.textDir},e;for(e in b)b[e]&&(a.inherited[e]=b[e])}return a.inherited}var f=[],d=[],l={},x=(b.scope||y._scopeName)+"Type",m="data-"+(b.scope||y._scopeName)+"-",p=
m+"type",r=m+"textdir",m=m+"mixins",h=a.firstChild,g=b.inherited;if(!g){var k=function(a,b){return a.getAttribute&&a.getAttribute(b)||a.parentNode&&k(a.parentNode,b)},g={dir:k(a,"dir"),lang:k(a,"lang"),textDir:k(a,r)},e;for(e in g)g[e]||delete g[e]}e={inherited:g};for(var t,q;;)if(h)if(1!=h.nodeType)h=h.nextSibling;else if(t&&"script"==h.nodeName.toLowerCase())(g=h.getAttribute("type"))&&/^dojo\/\w/i.test(g)&&t.push(h),h=h.nextSibling;else if(q)h=h.nextSibling;else if(g=h.getAttribute(p)||h.getAttribute(x),
a=h.firstChild,g||a&&(3!=a.nodeType||a.nextSibling)){q=null;if(g){var n=h.getAttribute(m);t=n?[g].concat(n.split(/\s*,\s*/)):[g];try{q=H(t,b.contextRequire)}catch(z){}q||w.forEach(t,function(a){~a.indexOf("/")&&!l[a]&&(l[a]=!0,d[d.length]=a)});n=q&&!q.prototype._noScript?[]:null;e={types:t,ctor:q,parent:e,node:h,scripts:n};e.inherited=c(e);f.push(e)}else e={node:h,scripts:t,parent:e};t=n;q=h.stopParser||q&&q.prototype.stopParser&&!b.template;h=a}else h=h.nextSibling;else{if(!e||!e.node)break;h=e.node.nextSibling;
q=!1;e=e.parent;t=e.scripts}var u=new E;d.length?(F("dojo-debug-messages")&&console.warn("WARNING: Modules being Auto-Required: "+d.join(", ")),(b.contextRequire||D)(d,function(){u.resolve(w.filter(f,function(a){if(!a.ctor)try{a.ctor=H(a.types,b.contextRequire)}catch(A){}for(var c=a.parent;c&&!c.types;)c=c.parent;var d=a.ctor&&a.ctor.prototype;a.instantiateChildren=!(d&&d.stopParser&&!b.template);a.instantiate=!c||c.instantiate&&c.instantiateChildren;return a.instantiate}))})):u.resolve(f);return u.promise},
_require:function(a,b){a=G("{"+a.innerHTML+"}");var c=[],f=[],d=new E;b=b&&b.contextRequire||D;for(var l in a)c.push(l),f.push(a[l]);b(f,function(){for(var a=0;a<c.length;a++)v.setObject(c[a],arguments[a]);d.resolve(arguments)});return d.promise},_scanAmd:function(a,b){var c=new E,f=c.promise;c.resolve(!0);var d=this;L("script[type\x3d'dojo/require']",a).forEach(function(a){f=f.then(function(){return d._require(a,b)});a.parentNode.removeChild(a)});return f},parse:function(a,b){!a||"string"==typeof a||
"nodeType"in a||(b=a,a=b.rootNode);var c=a?N.byId(a):O.body();b=b||{};var f=b.template?{template:!0}:{},d=[],l=this;a=this._scanAmd(c,b).then(function(){return l.scan(c,b)}).then(function(a){return l._instantiate(a,f,b,!0)}).then(function(a){return d=d.concat(a)}).otherwise(function(a){console.error("dojo/parser::parse() error",a);throw a;});v.mixin(d,a);return d}};y.parser=J;M.parseOnLoad&&T(100,J,"parse");return J});