// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/has ../../../../core/Logger ./Graphics3DExtrudeSymbolLayer ./Graphics3DIconSymbolLayer ./Graphics3DLineSymbolLayer ./Graphics3DMeshFillSymbolLayer ./Graphics3DObjectSymbolLayer ./Graphics3DPathSymbolLayer ./Graphics3DPathSymbolLayer2 ./Graphics3DPolygonFillSymbolLayer ./Graphics3DTextSymbolLayer".split(" "),function(w,a,c,g,h,k,l,m,n,p,q,r,t){Object.defineProperty(a,"__esModule",{value:!0});var u=g.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory");
a.make=function(d,b,a,c){var f=e[d.type]&&e[d.type][b.type]||v[b.type];return f?new f(d,b,a,c):(u.error("GraphicsLayerFactory#make","unknown symbol type "+b.type),null)};var v={icon:k,object:n,line:l,path:c("enable-feature:dkoerner/new-path-geometry")?q:p,fill:r,extrude:h,text:t},e={"mesh-3d":{fill:m}}});