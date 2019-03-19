// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/gl-matrix ../../viewpointUtils ../../../navigation/PanPlanarMomentumEstimator".split(" "),function(q,r,m,g,n,f,h,k,p){return function(l){function b(c){var a=l.call(this)||this;a.animationTime=0;a.momentumEstimator=new p.PanPlanarMomentumEstimator(500,6,.92);a.momentum=null;a.tmpMomentum=
h.vec3f64.create();a.momentumFinished=!1;a.viewpoint=k.create();a.watch("momentumFinished",function(c){c&&a.navigation.stop()});return a}m(b,l);b.prototype.begin=function(c,a){this.navigation.begin();this.momentumEstimator.reset();this.addToEstimator(a);this.previousDrag=a};b.prototype.update=function(c,a){this.addToEstimator(a);var b=a.center.x,d=a.center.y,e=this.previousDrag,b=e?e.center.x-b:-b,d=e?d-e.center.y:d;c.viewpoint=k.translateBy(this.viewpoint,c.viewpoint,[b||0,d||0]);this.previousDrag=
a};b.prototype.end=function(b,a){this.addToEstimator(a);this.momentum=this.momentumEstimator.evaluateMomentum();this.animationTime=0;if(this.momentum)this.onAnimationUpdate(b);this.previousDrag=null;this.navigation.end()};b.prototype.addToEstimator=function(b){var a=h.vec3f64.fromValues(-b.center.x,b.center.y,0);this.momentumEstimator.add(a,a,.001*b.timestamp)};b.prototype.onAnimationUpdate=function(b){var a=this;this.navigation.animationManager.animateContinous(b.viewpoint,function(c,d){a.momentumFinished=
!a.momentum||a.momentum.isFinished(a.animationTime);d*=.001;if(!a.momentumFinished){var e=a.momentum.valueDelta(a.animationTime,d);h.vec3.scale(a.tmpMomentum,a.momentum.direction,e);b.viewpoint=k.translateBy(c,c,a.tmpMomentum)}a.animationTime+=d})};b.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())};g([f.property()],b.prototype,"momentumFinished",void 0);g([f.property()],b.prototype,"viewpoint",void 0);g([f.property()],
b.prototype,"navigation",void 0);return b=g([f.subclass("esri.views.2d.navigation.actions.Pan")],b)}(f.declared(n))});