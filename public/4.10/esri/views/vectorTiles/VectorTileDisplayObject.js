// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/ObjectPool ../../core/libs/gl-matrix-2/gl-matrix ../../geometry/support/spatialReferenceUtils ../2d/engine/DisplayObject ../2d/tiling/TileKey ./RenderBucket ../webgl/BufferObject".split(" "),function(A,B,u,v,t,w,x,y,n,h){var z="fillVertexBuffer fillDDVertexBuffer fillIndexBuffer outlineVertexBuffer outlineDDVertexBuffer outlineIndexBuffer lineVertexBuffer lineDDVertexBuffer lineIndexBuffer iconVertexBuffer iconDDVertexBuffer iconIndexBuffer textVertexBuffer textDDVertexBuffer textIndexBuffer circleVertexBuffer circleIndexBuffer".split(" ");
return function(p){function f(){for(var a,c=[],b=0;b<arguments.length;b++)c[b]=arguments[b];b=p.call(this)||this;b._renderBuckets=[];b._vectorTileData=null;b._symbolUpdateData=null;b.coords=[0,0];b.bounds=[0,0,0,0];b.tileTransform={transform:t.mat4f32.create(),displayCoord:t.vec2f32.create()};b.stencilData={mask:0,reference:0};0<c.length&&(a=b.acquire).call.apply(a,[b].concat(c));return b}u(f,p);f.prototype.reset=function(){y.pool.release(this.key);this.refKey=this.key=null;this.coords[0]=0;this.coords[1]=
0;this.bounds[0]=0;this.bounds[1]=0;this.bounds[2]=0;this.height=this.width=this.bounds[3]=0;this.resolution=null;this.rotation=0;this.id=this.client=this.styleLayers=this._vectorTileData=null;this.tileTransform.transform.fill(0);this.tileTransform.displayCoord.fill(0);this.stencilData.mask=0;this.stencilData.reference=0;this._renderBuckets.length=0;this.stage=this._symbolUpdateData=null};f.prototype.acquire=function(a,c,b,e,d){this.key=a;this.refKey=c;c=b.lodAt(a.level);c=null!==c?c.resolution:0;
var k=b.size[0]*c,g=b.origin,q=a.col*k,m=a.row*k,l=b.spatialReference,h=0;l&&(l._isWrappable?l._isWrappable():l.isWrappable)&&(l=w.getInfo(l),h=l.valid[1]-l.valid[0]);q=g.x+q+a.world*h;g=g.y-m;this.coords[0]=q;this.coords[1]=g;this.bounds[0]=q;this.bounds[1]=g;this.bounds[2]=q+k;this.bounds[3]=g-k;this.widthInPixels=b.size[1];this.coordRange=4096;this.resolution=c;this.rotation=d;this.styleLayers=e;this.id=a.id};f.prototype.setData=function(a,c){this._vectorTileData=a;this.client=c};f.prototype.updateSymbolData=
function(a){a&&(this._symbolUpdateData=a,this.requestRender())};f.prototype.updateTileData=function(a){this._vectorTileData=a;this.stage.requestRender()};f.prototype.dispose=function(){for(var a="fillVertexArrayObject fillDDVertexArrayObject outlineVertexArrayObject lineVertexArrayObject lineDDVertexArrayObject iconVertexArrayObject iconDDVertexArrayObject textVertexArrayObject textDDVertexArrayObject circleVertexArrayObject fillVertexBuffer fillDDVertexBuffer fillIndexBuffer outlineVertexBuffer outlineDDVertexBuffer outlineIndexBuffer lineVertexBuffer lineDDVertexBuffer lineIndexBuffer iconVertexBuffer iconDDVertexBuffer iconIndexBuffer textVertexBuffer textDDVertexBuffer textIndexBuffer circleVertexBuffer circleIndexBuffer texture".split(" "),
c=0;c<a.length;++c){var b=a[c];this[b]&&(this[b].dispose(),this[b]=null)}this._renderBuckets.length=0};f.prototype.getCpuMemoryUsage=function(){return null!=this._vectorTileData&&this._vectorTileData.bufferData?this._vectorTileData.bufferData.reduce(function(a,c){return a+c.byteLength},0)+this._vectorTileData.bufferDataInfo.byteLength+this._vectorTileData.bucketDataInfo.byteLength:0};f.prototype.getGpuMemoryUsage=function(){var a=this,c=z.reduce(function(b,c){return a[c]?b+a[c].size:b},0);this.texture&&
(c+=this.texture.descriptor.width*this.texture.descriptor.height*4);return c};f.prototype.attachWithContext=function(a){this.stage={context:a};this.attached=this.attach()};f.prototype._commitChanges=function(){this._vectorTileData&&(this.dispose(),this._createRenderBuckets(),this._createBufferObjects(),this._vectorTileData=null)};f.prototype._createRenderBuckets=function(){for(var a=new Uint32Array(this._vectorTileData.bucketDataInfo),c=a.length,b=0;b<c;){var e=a[b];switch(a[b+1]){case 0:var d=new n.BackgroundRenderBucket;
d.layerID=e;this._renderBuckets.push(d);b+=2;break;case 1:d=new n.FillRenderBucket;d.layerID=e;d.triangleElementStart=a[b+2];d.triangleElementCount=a[b+3];d.outlineElementStart=a[b+4];d.outlineElementCount=a[b+5];this._renderBuckets.push(d);b+=6;break;case 2:d=new n.LineRenderBucket;d.layerID=e;d.triangleElementStart=a[b+2];d.triangleElementCount=a[b+3];this._renderBuckets.push(d);b+=4;break;case 3:d=new n.SymbolRenderBucket;d.layerID=e;d.isSDF=0!==a[b+2];var k=b+3,e=a[k];k++;if(0<e)for(var g=void 0,
h=void 0,m=void 0,l=0;l<e;l++)g=a[k],h=a[k+1],m=a[k+2],d.markerPerPageElementsMap.set(g,[h,m]),k+=3;var f=a[k];k++;if(0<f)for(m=h=g=void 0,l=0;l<f;l++)g=a[k],h=a[k+1],m=a[k+2],d.glyphPerPageElementsMap.set(g,[h,m]),k+=3;this._renderBuckets.push(d);b+=5+3*e+3*f;break;case 4:d=new n.CircleRenderBucket;d.layerID=e;d.triangleElementStart=a[b+2];d.triangleElementCount=a[b+3];this._renderBuckets.push(d);b+=4;break;default:console.error("Bad bucket type!"),b+=2}}};f._createBufferToObject=function(){var a=
[];a[1]={create:h.createVertex,var:"fillVertexBuffer"};a[2]={create:h.createVertex,var:"fillDDVertexBuffer"};a[3]={create:h.createIndex,var:"fillIndexBuffer"};a[4]={create:h.createVertex,var:"outlineVertexBuffer"};a[5]={create:h.createVertex,var:"outlineDDVertexBuffer"};a[6]={create:h.createIndex,var:"outlineIndexBuffer"};a[7]={create:h.createVertex,var:"lineVertexBuffer"};a[8]={create:h.createVertex,var:"lineDDVertexBuffer"};a[9]={create:h.createIndex,var:"lineIndexBuffer"};a[10]={create:h.createVertex,
var:"iconVertexBuffer"};a[11]={create:h.createVertex,var:"iconDDVertexBuffer"};a[12]={create:h.createIndex,var:"iconIndexBuffer"};a[13]={create:h.createVertex,var:"textVertexBuffer"};a[14]={create:h.createVertex,var:"textDDVertexBuffer"};a[15]={create:h.createIndex,var:"textIndexBuffer"};a[16]={create:h.createVertex,var:"circleVertexBuffer"};a[17]={create:h.createIndex,var:"circleIndexBuffer"};return a};f.prototype._createBufferObjects=function(){for(var a=this.stage.context,c=new Uint32Array(this._vectorTileData.bufferDataInfo),
b=c.length,e=0,d=0;d<b;d+=2,e++){var k=c[d];if(!(0>=c[d+1]||0===this._vectorTileData.bufferData[e].byteLength)){var g=f.bufferToObject[k];g?this[g.var]?this[g.var].setData(this._vectorTileData.bufferData[e]):this[g.var]=g.create(a,35044,this._vectorTileData.bufferData[e]):console.error("Bad buffer type "+k)}}};f.prototype.detach=function(){this.isReady&&this.client.invoke("destructTileData",this.id);this.dispose();p.prototype.detach.call(this)};f.prototype.doRender=function(a){if(this.visible&&this.isReady){var c=
this.stage.context,b=a.renderer;if(c&&b){this._commitChanges();var e=a.drawphase;this._symbolUpdateData&&(this._updateSymbolData(a,this._symbolUpdateData),this._symbolUpdateData=null);c.setStencilFunction(514,this.stencilData.reference,this.stencilData.mask);var d=this.styleLayers,k,g=void 0!==a.layerOpacity?a.layerOpacity:1;if(0!==g){var h=this._renderBuckets.length;if(0===e)for(var m=h-1;0<=m;m--){var l=this._renderBuckets[m];k=d.layers[l.layerID];if(!l||!k)break;1!==l.type&&0!==l.type||!l.hasData()||
b.renderBucket(c,l,a.displayLevel,a.requiredLevel,e,this,k,g)}else for(m=0;m<h;m++){l=this._renderBuckets[m];k=d.layers[l.layerID];if(!l||!k)break;l.hasData()&&b.renderBucket(c,l,a.displayLevel,a.requiredLevel,e,this,k,g)}}}}};f.prototype._updateSymbolData=function(a,c){if(!c||!c.bucketDataInfo)return!0;a=new Uint32Array(c.bucketDataInfo);var b=a.length;if(0===b)return!0;if(!this.isReady)return this.requestRender(),!1;for(var e=this.stage.context,d=new Uint32Array(c.bufferDataInfo),k=d.length,g=0,
f=0;f<k;f+=2,g++)switch(d[f]){case 10:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null);this.iconVertexBuffer=h.createVertex(e,35044,c.bufferData[g]);break;case 11:this.iconDDVertexBuffer&&(this.iconDDVertexBuffer.dispose(),this.iconDDVertexBuffer=null);this.iconDDVertexBuffer=h.createVertex(e,35044,c.bufferData[g]);break;case 12:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null);this.iconIndexBuffer=h.createIndex(e,35044,c.bufferData[g]);
break;case 13:this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null);this.textVertexBuffer=h.createVertex(e,35044,c.bufferData[g]);break;case 14:this.textDDVertexBuffer&&(this.textDDVertexBuffer.dispose(),this.textDDVertexBuffer=null);this.textDDVertexBuffer=h.createVertex(e,35044,c.bufferData[g]);break;case 15:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=h.createIndex(e,35044,c.bufferData[g])}c=[];for(e=0;e<this._renderBuckets.length;e++)this._renderBuckets[e]instanceof
n.SymbolRenderBucket||c.push(this._renderBuckets[e]);this._renderBuckets=c;for(e=0;e<b;){k=a[e];d=new n.SymbolRenderBucket;d.layerID=k;d.isSDF=0!==a[e+2];this.styleLayers.layers.length>d.layerID&&this.styleLayers.layers[d.layerID].type===d.type&&c.push(d);var m=e+3,k=a[m];m++;if(0<k)for(var l=f=g=void 0,r=0;r<k;r++)g=a[m],f=a[m+1],l=a[m+2],d.markerPerPageElementsMap.set(g,[f,l]),m+=3;var p=a[m];m++;if(0<p)for(l=f=g=void 0,r=0;r<p;r++)g=a[m],f=a[m+1],l=a[m+2],d.glyphPerPageElementsMap.set(g,[f,l]),
m+=3;e+=5+3*k+3*p}this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null);this.iconDDVertexArrayObject&&(this.iconDDVertexArrayObject.dispose(),this.iconDDVertexArrayObject=null);this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null);this.textDDVertexArrayObject&&(this.textDDVertexArrayObject.dispose(),this.textDDVertexArrayObject=null);return!0};f.pool=new v(f);f.bufferToObject=f._createBufferToObject();return f}(x.DisplayObject)});