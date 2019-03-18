// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var q=function(g,h){q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,h){g.__proto__=h}||function(g,h){for(var l in h)h.hasOwnProperty(l)&&(g[l]=h[l])};return q(g,h)};return function(g,h){function l(){this.constructor=g}q(g,h);g.prototype=null===h?Object.create(h):(l.prototype=h.prototype,new l)}}();
define("esri/arcade/featureSetUtils","require exports dojo/Deferred ../request ./featureSetCollection ./featureset/sources/FeatureLayerDynamic ./featureset/sources/FeatureLayerDynamicMap ./featureset/sources/FeatureLayerMemoryMap ./featureset/support/cache ../layers/FeatureLayer ./polyfill/promiseUtils".split(" "),function(q,g,h,l,u,v,w,x,m,n,y){function p(e,c,d,b,a){void 0===d&&(d=null);void 0===b&&(b=!0);void 0===a&&(a=null);null===d&&(d=["*"]);return new v({url:e,outFields:d,spatialReference:c,
token:null,includeGeometry:b,lrucache:a})}function r(e,c,d,b,a){void 0===c&&(c=null);void 0===d&&(d=null);void 0===b&&(b=!0);void 0===a&&(a=null);if(!e.getMap())throw Error("FeatureSets can only be used once the layer is added to a Map");if(e.mode!==n.MODE_SNAPSHOT||e.url){if(e.mode===n.MODE_SNAPSHOT||e.mode===n.MODE_ONDEMAND||e.mode===n.MODE_AUTO)return new w({layer:e,spatialReference:c,outFields:d,includeGeometry:b,lrucache:a});throw Error("FeatureSets only support for Snapshot or OnDemand FeatureSet");
}return new x({layer:e,spatialReference:c,outFields:d,includeGeometry:b})}function z(e,c){e=c.portalUrl+(c.portalUrl.match(/\/$/)?"":"/")+"content/items/"+e;var d=new h;l({url:e,content:{f:"json"},callbackParamName:"callback",load:function(b){d.resolve({item:b})},error:function(b){d.reject(b)}});return d.promise}Object.defineProperty(g,"__esModule",{value:!0});g.initialiseMetaDataCache=function(){null===m.applicationCache&&(m.applicationCache=new m)};g.constructFeatureSetFromUrl=p;g.constructFeatureSet=
r;var A=function(e){function c(d,b,a){void 0===b&&(b=null);void 0===a&&(a=null);var f=e.call(this)||this;f._map=d;f._overridespref=b;f.lrucache=a;f._instantLayers=[];return f}__extends(c,e);c.prototype.makeAndAddFeatureSet=function(d,b,a){void 0===b&&(b=!0);void 0===a&&(a=null);var f=r(d,this._overridespref,null===a?["*"]:a,b,this.lrucache);this._instantLayers.push({featureset:f,opitem:d,includeGeometry:b,outFields:JSON.stringify(a)});return f};c.prototype.makeAndAddFeatureSetTable=function(d,b,a){void 0===
b&&(b=!0);void 0===a&&(a=null);var f=p(d.url,this._overridespref,a,b,this.lrucache);this._instantLayers.push({featureset:f,opitem:{name:d.title,id:d.id},includeGeometry:b,outFields:JSON.stringify(a)});return f};c.prototype.featureSetByName=function(d,b,a){void 0===b&&(b=!0);void 0===a&&(a=null);null===a&&(a=["*"]);a=a.slice(0);a=a.sort();for(var f=JSON.stringify(a),c=0;c<this._instantLayers.length;c++){var k=this._instantLayers[c];if(k.opitem.name===d&&k.includeGeometry===b&&k.outFields===f)return this.resolvePromise(this._instantLayers[c].featureset)}f=
null;c=0;for(k=this._map.graphicsLayerIds;c<k.length;c++){var e=this._map.getLayer(k[c]);if(e instanceof n&&e.name===d){f=e;break}}return f?this.resolvePromise(this.makeAndAddFeatureSet(f,b,a)):this._map.tables&&(f=this._map.tables.find(function(a){return a.title&&a.title===d||a.title&&a.title===d?!0:!1}))?this.resolvePromise(this.makeAndAddFeatureSetTable(f,b,a)):this.resolvePromise(null)};c.prototype.featureSetById=function(d,b,a){void 0===b&&(b=!0);void 0===a&&(a=["*"]);null===a&&(a=["*"]);a=a.slice(0);
a=a.sort();for(var f=JSON.stringify(a),c=0;c<this._instantLayers.length;c++){var e=this._instantLayers[c];if(e.opitem.id===d&&e.includeGeometry===b&&e.outFields===f)return this.resolvePromise(this._instantLayers[c].featureset)}f=null;c=0;for(e=this._map.graphicsLayerIds;c<e.length;c++){var g=this._map.getLayer(e[c]);if(g instanceof n&&g.id===d){f=g;break}}return f?this.resolvePromise(this.makeAndAddFeatureSet(f,b,a)):this._map.tables&&(f=this._map.tables.find(function(a){return a.id&&a.id===d||a.id&&
a.id===d?!0:!1}))?this.resolvePromise(this.makeAndAddFeatureSetTable(f,b,a)):this.resolvePromise(null)};return c}(u);g.createFeatureSetCollectionFromMap=function(e,c,d){void 0===d&&(d=null);return new A(e,c,d)};var B=function(e){function c(d,b,a){void 0===b&&(b=null);void 0===a&&(a=null);var f=e.call(this)||this;f._url=d;f._overridespref=b;f.lrucache=a;f.metadata=null;f._instantLayers=[];return f}__extends(c,e);Object.defineProperty(c.prototype,"url",{get:function(){return this._url},enumerable:!0,
configurable:!0});c.prototype._loadMetaData=function(){var d=this;if(null!==m.applicationCache){var b=m.applicationCache.getLayerInfo(this._url);if(null!==b)return b.then(function(a){d.metadata=a;return y.resolve(d.metadata)})}var a=new h;null!==m.applicationCache&&m.applicationCache.setLayerInfo(this._url,a.promise);l({url:this._url,content:{f:"json"},callbackParamName:"callback",handleAs:"json"}).then(function(b){d.metadata=b?{layers:b.layers?b.layers:[],tables:b.tables?b.tables:[]}:{layers:[],
tables:[]};a.resolve(d.metadata)},function(b){m.applicationCache&&m.applicationCache.clearLayerInfo(d._url);a.reject(b)});return a.promise};c.prototype.makeAndAddFeatureSet=function(d,b,a){void 0===b&&(b=!0);void 0===a&&(a=null);var f=r(d,this._overridespref,null===a?["*"]:a,b,this.lrucache);this._instantLayers.push({featureset:f,opitem:d,includeGeometry:b,outFields:JSON.stringify(a)});return f};c.prototype.load=function(){return this._loadMetaData()};c.prototype.clone=function(){return new c(this._url,
this._overridespref,this.lrucache)};c.prototype.featureSetByName=function(d,b,a){var f=this;void 0===b&&(b=!0);void 0===a&&(a=null);null===a&&(a=["*"]);a=a.slice(0);a=a.sort();for(var c=JSON.stringify(a),e=0;e<this._instantLayers.length;e++){var g=this._instantLayers[e];if(g.opitem.name===d&&g.includeGeometry===b&&g.outFields===c)return this.resolvePromise(this._instantLayers[e].featureset)}return this._loadMetaData().then(function(c){for(var e=null,g=0,k=c.layers?c.layers:[];g<k.length;g++){var h=
k[g];h.name===d&&(e=h)}if(!e)for(g=0,c=c.tables?c.tables:[];g<c.length;g++)h=c[g],h.name===d&&(e=h);return e?f.resolvePromise(p(f._url+"/"+e.id,f._overridespref,a,b,f.lrucache)):f.resolvePromise(null)})};c.prototype.featureSetById=function(d,b,a){var c=this;void 0===b&&(b=!0);void 0===a&&(a=["*"]);null===a&&(a=["*"]);a=a.slice(0);a=a.sort();var e=JSON.stringify(a);d=null!==d&&void 0!==d?d.toString():"";for(var g=0;g<this._instantLayers.length;g++){var h=this._instantLayers[g];if(h.opitem.id===d&&
h.includeGeometry===b&&h.outFields===e)return this.resolvePromise(this._instantLayers[g].featureset)}return this._loadMetaData().then(function(e){for(var f=null,g=0,h=e.layers?e.layers:[];g<h.length;g++){var k=h[g];null!==k.id&&void 0!==k.id&&k.id.toString()===d&&(f=k)}if(!f)for(g=0,e=e.tables?e.tables:[];g<e.length;g++)k=e[g],null!==k.id&&void 0!==k.id&&k.id.toString()===d&&(f=k);return f?c.resolvePromise(p(c._url+"/"+f.id,c._overridespref,a,b,c.lrucache)):c.resolvePromise(null)})};return c}(u);
g.createFeatureSetCollectionFromService=function(e,c,d){void 0===d&&(d=null);return new B(e,c,d)};g.constructFeatureSetFromPortalItem=function(e,c,d,b,a,f,g){var k=new h;if(m.applicationCache){var l=m.applicationCache.getLayerInfo(e+":"+f.url);if(l)return l.then(function(e){try{var f=p(e.item.url+"/"+c,d,b,a,g);k.resolve(f)}catch(t){k.reject(t)}},function(a){k.reject(a)}),k.promise}l=z(e,f);m.applicationCache&&m.applicationCache.setLayerInfo(e+":"+f.url,l);l.then(function(e){try{var f=p(e.item.url+
"/"+c,d,b,a,g);k.resolve(f)}catch(t){k.reject(t)}},function(a){m.applicationCache&&m.applicationCache.clearLayerInfo(e+":"+f.url);k.reject(a)});return k.promise}});