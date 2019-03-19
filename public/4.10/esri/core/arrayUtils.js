// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/array","./RandomLCG"],function(l,e,m,t){function h(a,b,c,d){void 0===c&&(c=a.length);d=d||u;for(var e=Math.max(0,d.last-10),f=-1,g=e;g<c;++g)if(a[g]===b){f=g;break}if(-1===f){for(g=0;g<e;++g)if(a[g]===b){f=g;break}if(-1===f)return}a[f]=a[c-1];a.pop();d.last=f;return b}function n(a,b,c,d){void 0===c&&(c=a.length);var e=[];b.forEach(function(b){void 0!==h(a,b,c,d)&&(e.push(b),--c)});return e}function p(a,b){return-1===a.indexOf(b)}function q(a,b,c){return!a.some(b.bind(null,
c))}function v(a){return a}Object.defineProperty(e,"__esModule",{value:!0});e.find=m.find;e.findIndex=m.findIndex;e.unique=function(a){return a.filter(function(a,c,d){return d.indexOf(a)===c})};e.equals=function(a,b,c){if(!a&&!b)return!0;if(!a||!b||a.length!==b.length)return!1;if(c)for(var d=0;d<a.length;d++){if(!c(a[d],b[d]))return!1}else for(d=0;d<a.length;d++)if(a[d]!==b[d])return!1;return!0};e.difference=function(a,b,c){var d;c?(d=b.filter(q.bind(null,a,c)),a=a.filter(q.bind(null,b,c))):(d=b.filter(p.bind(null,
a)),a=a.filter(p.bind(null,b)));return{added:d,removed:a}};e.intersect=function(a,b,c){return a&&b?c?a.filter(function(a){return-1<e.findIndex(b,function(b){return c(a,b)})}):a.filter(function(a){return-1<b.indexOf(a)}):[]};e.constant=function(a,b){for(var c=Array(a),d=0;d<a;d++)c[d]=b;return c};e.range=function(a,b){void 0===b&&(b=a,a=0);for(var c=Array(b-a),d=a;d<b;d++)c[d-a]=d;return c};e.binaryIndexOf=function(a,b,c){for(var d=a.length,e=0,f=d-1;e<f;){var g=e+Math.floor((f-e)/2);b>a[g]?e=g+1:
f=g}f=a[e];return c?b>=a[d-1]?-1:f===b?e:e-1:f===b?e:-1};e.concatAll=function(a){return a.reduce(function(a,c){return a.concat(c||[])},[])};var k=function(){return function(){this.last=0}}();e.RemoveHint=k;var u=new k;l=function(){return function(a){var b=this;this._array=a;this._hint=new k;this.remove=function(a){return h(b._array,a,b._array.length,b._hint)};this.removeMany=function(a){return n(b._array,a,b._array.length,b._hint)}}}();e.UnorderedRemover=l;e.removeUnordered=h;e.removeUnorderedMany=
n;e.shuffle=function(a,b){b=(r.seed=b)?function(){return r.getFloat()}:Math.random;for(var c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}return a};var r=new t;e.keysOfMap=function(a){var b=[];a.forEach(function(a,d){return b.push(d)});return b};e.keysOfSet=function(a,b){void 0===b&&(b=v);var c=[];a.forEach(function(a){return c.push(b(a))});return c};e.fromMapValues=function(a){if(Array.from)return Array.from(a.values());var b=Array(a.size),c=0;a.forEach(function(a){b[c++]=
a});return b}});