// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/lang","../../../../../core/libs/gl-matrix-2/gl-matrix"],function(p,e,l,d){function g(a,c,b){var e=b._stage.getCamera();b.renderCoordsHelper.toRenderCoords(a,m);e.projectPoint(m,f);d.vec2.set(c,f[0],e.fullHeight-f[1])}Object.defineProperty(e,"__esModule",{value:!0});var n=d.vec3f64.create();e.copyParameter=function(a,c){a=l.mixin({},a);c=l.clone(c);l.mixin(a,c);return a};e.resizeArray=function(a,c,b,d){for(;a.length<c;)a.push(b());if(d)for(;a.length>
c;)b=a.pop(),d(b);else a.length=c};e.scaleTranslateMatrix=function(a,c,b){d.mat4.identity(b);d.mat4.translate(b,b,c);d.vec3.set(n,a,a,a);d.mat4.scale(b,b,n)};e.midpoint=function(a,c){d.vec3.set(c,0,0,0);if(0<a.length){for(var b=0;b<a.length;++b)d.vec3.add(c,c,a[b]);d.vec3.scale(c,c,1/a.length)}};e.screenSpaceTangent=function(a,c,b,e){e.projectPoint(a,h);e.projectPoint(c,k);d.vec2.subtract(b,k,h);d.vec2.normalize(b,b)};e.projectPoint=g;e.pointToPointScreenDistance=function(a,c,b){g(a,h,b);g(c,k,b);
return d.vec2.distance(h,k)};e.pointToScreenPositionDistance=function(a,c,b){g(a,f,b);return d.vec2.distance(f,c)};var m=d.vec3f64.create(),f=d.vec3f64.create(),h=d.vec3f64.create(),k=d.vec3f64.create()});