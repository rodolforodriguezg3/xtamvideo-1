// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/TileInfo","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../lang ../SpatialReference ../geometry/Point ./LOD".split(" "),function(e,g,f,k,l,m,h,n,p){e=e(null,{declaredClass:"esri.layers.TileInfo",constructor:function(a){g.mixin(this,a);this.width=this.cols;this.height=this.rows;this._levelToLOD={};a=this.spatialReference;var b=this.origin;a&&(a=this.spatialReference=new h(a.toJson?a.toJson():a));b&&(this.origin=new n(b.toJson?b.toJson():b),!b.spatialReference&&
a&&this.origin.setSpatialReference(new h(a.toJson())));this.lods=f.map(this.lods,function(a){return new p(a)});f.forEach(this.lods,function(a){this._levelToLOD[a.level]=a},this);a=!1;var b=this.spatialReference,c=this.origin;if(b&&c){var d=b._getInfo();d&&(a=b._isWrappable()&&Math.abs(d.origin[0]-c.x)<=d.dx)}this.isWrappable=a;this._initializeUpsampleLevels()},toJson:function(){return m.fixJson({rows:this.rows,cols:this.cols,dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,
origin:this.origin&&this.origin.toJson(),spatialReference:this.spatialReference&&this.spatialReference.toJson(),lods:this.lods&&f.map(this.lods,function(a){return a.toJson()})})},lodAt:function(a){return this._levelToLOD&&this._levelToLOD[a]||null},updateTileInfo:function(a){var b=this.lodAt(a.level),c=b.resolution*this.width,b=b.resolution*this.height;a.id=a.level+"/"+a.row+"/"+a.col;a.extent||(a.extent=[0,0,0,0]);a.extent[0]=this.origin.x+a.col*c;a.extent[1]=this.origin.y-(a.row+1)*b;a.extent[2]=
a.extent[0]+c;a.extent[3]=a.extent[1]+b},upsampleTile:function(a){var b=this._upsampleLevels[a.level];if(!b||-1===b.parentLevel)return!1;a.level=b.parentLevel;a.row=Math.floor(a.row/b.factor+.001);a.col=Math.floor(a.col/b.factor+.001);this.updateTileInfo(a);return!0},_initializeUpsampleLevels:function(){var a=this.lods;this._upsampleLevels=[];for(var b=null,c=0;c<a.length;c++){var d=a[c];this._upsampleLevels[d.level]={parentLevel:b?b.level:-1,factor:b?b.resolution/d.resolution:0};b=d}}});k("extend-esri")&&
g.setObject("layers.TileInfo",e,l);return e});