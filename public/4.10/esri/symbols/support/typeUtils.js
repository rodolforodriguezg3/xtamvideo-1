// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/accessorSupport/ensureType ../LabelSymbol3D ../LineSymbol3D ../MeshSymbol3D ../PictureFillSymbol ../PictureMarkerSymbol ../PointSymbol3D ../PolygonSymbol3D ../SimpleFillSymbol ../SimpleLineSymbol ../SimpleMarkerSymbol ../Symbol ../TextSymbol ../WebStyleSymbol".split(" "),function(t,a,r,c,d,e,l,m,f,g,n,p,q,b,k,h){Object.defineProperty(a,"__esModule",{value:!0});a.types={base:b,key:"type",typeMap:{"simple-fill":n,"picture-fill":l,"picture-marker":m,"simple-line":p,
"simple-marker":q,text:k,"label-3d":c,"line-3d":d,"mesh-3d":e,"point-3d":f,"polygon-3d":g,"web-style":h}};a.rendererTypes={base:b,key:"type",typeMap:{"simple-fill":n,"picture-fill":l,"picture-marker":m,"simple-line":p,"simple-marker":q,text:k,"line-3d":d,"mesh-3d":e,"point-3d":f,"polygon-3d":g,"web-style":h}};a.labelTypes={base:b,key:"type",typeMap:{text:k,"label-3d":c}};a.types3D={base:b,key:"type",typeMap:{"label-3d":c,"line-3d":d,"mesh-3d":e,"point-3d":f,"polygon-3d":g,"web-style":h}};a.rendererTypes3D=
{base:b,key:"type",typeMap:{"line-3d":d,"mesh-3d":e,"point-3d":f,"polygon-3d":g,"web-style":h}};a.labelTypes3D={base:b,key:"type",typeMap:{"label-3d":c}};a.ensureType=r.ensureOneOfType(a.types)});