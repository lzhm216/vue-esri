// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang dojo/errors/CancelError ../../../../Color ../../../../core/screenUtils ../../../../symbols/ObjectSymbol3DLayer ./ElevationAligners ./Graphics3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ./objectResourceUtils ../support/FastSymbolUpdates ../../lib/glMatrix ../../support/aaBoundingBox ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(k,p,J,z,K,A,B,L,M,C,q,N,r,D,u,E,m,l,O,f,P){var w=E.mat4d,F=E.vec3d,n=[1,1,1],v=[1,1,1,1],G=[0,0,0];k=[-.5,-.5,-.5,.5,.5,.5];p=[-.5,-.5,0,.5,.5,1];var H={sphere:k,cube:k,cylinder:p,cone:p,"inverted-cone":p,tetrahedron:[-.5,-.5,0,.5,.5,.5],diamond:k},I=[l.ModelContentType.MATERIAL,l.ModelContentType.TEXTURE,l.ModelContentType.GEOMETRY];return function(k){function d(){return null!==k&&k.apply(this,arguments)||this}J(d,k);d.prototype._prepareResources=function(){var a=this.symbol,c=this._getStageIdHint();
if(!this._isPropertyDriven("size")){var b=r.validateSymbolLayerSize(this.symbol);if(b){this._logWarning(b);this.reject();return}}a.resource&&a.resource.href?this._prepareModelResources(a.resource.href,c):this._preparePrimitiveResources(a.resource?a.resource.primitive:"sphere",c)};d.prototype._preparePrimitiveResources=function(a,c){var b=this.symbol;if("sphere"===a)this._geometryData=f.createPolySphereGeometry(.5,2,!0);else if("cube"===a)this._geometryData=f.createBoxGeometry(1);else if("cylinder"===
a)this._geometryData=f.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);else if("cone"===a)this._geometryData=f.createConeGeometry(1,.5,15,!1),f.cgToGIS(this._geometryData);else if("inverted-cone"===a)this._geometryData=f.createConeGeometry(1,.5,15,!0),f.cgToGIS(this._geometryData);else if("tetrahedron"===a)this._geometryData=f.createTetrahedronGeometry(1),f.cgToGIS(this._geometryData);else if("diamond"===a)this._geometryData=f.createDiamondGeometry(1),f.cgToGIS(this._geometryData);else{this._logWarning("Unknown object symbol primitive: "+
a);this.reject();return}this._geometry=new O(this._geometryData,c);this._context.stage.add(l.ModelContentType.GEOMETRY,this._geometry);this._resourceBoundingBox=H[a];this._resourceSize=m.size(this._resourceBoundingBox);this._symbolSize=r.computeSizeWithResourceSize(this._resourceSize,b);a=this._getMaterialOpacity();a={specular:[0,0,0],opacity:a,transparent:1>a||this._isPropertyDriven("opacity"),instanced:["transformation"],ambient:n,diffuse:n};var e=this.symbolContainer;if("point-3d"===e.type&&e.verticalOffset){var e=
e.verticalOffset,x=e.minWorldLength,d=e.maxWorldLength;a.verticalOffset={screenLength:B.pt2px(e.screenLength),minWorldLength:x||0,maxWorldLength:null!=d?d:Infinity};a.castShadows=!1}this._context.screenSizePerspectiveEnabled&&(a.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);this._isPropertyDriven("color")?a.externalColor=v:(b=b.material?A.toUnitRGBA(b.material.color):v,a.externalColor=b);this._fastUpdates=u.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),
this._fastVisualVariableConvertOptions());this._fastUpdates.enabled?(z.mixin(a,this._fastUpdates.materialParameters),a.instanced.push("featureAttribute")):this._hasPerInstanceColor()&&a.instanced.push("color");this._material=new P(a,c+"_objectmat");this._context.stage.add(l.ModelContentType.MATERIAL,this._material);this.resolve()};d.prototype._prepareModelResources=function(a,c){var b=this,e=["transformation"];c={materialParamsMixin:{instanced:e},idHint:c,streamDataSupplier:this._context.streamDataSupplier};
this._fastUpdates=u.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions());this._fastUpdates.enabled?(z.mixin(c.materialParamsMixin,this._fastUpdates.materialParameters),e.push("featureAttribute")):this._hasPerInstanceColor()&&e.push("color");e=this.symbolContainer;if("point-3d"===e.type&&e.verticalOffset){var e=e.verticalOffset,d=e.minWorldLength,g=e.maxWorldLength;c.materialParamsMixin.verticalOffset={screenLength:B.pt2px(e.screenLength),
minWorldLength:d||0,maxWorldLength:null!=g?g:Infinity};c.materialParamsMixin.castShadows=!1}this._symbolLoaderPromise=D.fetch(a,c);this._symbolLoaderPromise.then(function(a){b._symbolLoaderPromise=null;if(!b.isRejected()){var c=b._context,e=a.stageResources,d=c.stage,x=b._getExternalColorParameters(b.symbol.material),g=b._getMaterialOpacity(),f=b._isPropertyDriven("opacity"),y=e[l.ModelContentType.MATERIAL];a.originalMaterialOpacities=Array(y.length);y.forEach(function(b,e){var d=b.getParameterValues();
b.setParameterValues(x);a.originalMaterialOpacities[e]=d.opacity;e=d.opacity*g;b.setParameterValues({opacity:e,transparent:1>e||f||d.transparent});c.screenSizePerspectiveEnabled&&b.setParameterValues({screenSizePerspective:c.sharedResources.screenSizePerspectiveSettings})});I.forEach(function(a){for(var b=e[a],c=0;b&&c<b.length;c++)d.add(a,b[c])});b._resourceBoundingBox=D.computeBoundingBox(a);b._resourceSize=m.size(b._resourceBoundingBox);b._pivotOffset=a.pivotOffset;b._symbolSize=r.computeSizeWithResourceSize(b._resourceSize,
b.symbol);b._i3sModel=a;u.updateFastSymbolUpdatesState(b._fastUpdates,b._context.renderer,b._fastVisualVariableConvertOptions())&&y.forEach(function(a){return a.setParameterValues(b._fastUpdates.materialParameters)});b.resolve()}},function(a){b._symbolLoaderPromise=null;if(!b.isFulfilled()){if(!(a instanceof K)){var c="ObjectSymbol3DLayer failed to load";a&&a.message&&(c+=" ("+a.message+")");b._logWarning(c)}b.reject()}})};d.prototype._forEachMaterial=function(a){this._i3sModel?this._i3sModel.stageResources[l.ModelContentType.MATERIAL].forEach(a):
a(this._material)};d.prototype._getExternalColorParameters=function(a){var c={};this._isPropertyDriven("color")?c.externalColor=v:a&&a.color?c.externalColor=A.toUnitRGBA(a.color):(c.externalColor=v,c.colorMixMode="ignore");return c};d.prototype.destroy=function(){k.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._symbolLoaderPromise&&this._symbolLoaderPromise.cancel();var a=this._context.stage;if(this._i3sModel){var c=this._i3sModel.stageResources;I.forEach(function(b){for(var e=
c[b],d=0;e&&d<e.length;d++)a.remove(b,e[d].id)})}else this._material&&a.remove(l.ModelContentType.MATERIAL,this._material.id),this._geometry&&a.remove(l.ModelContentType.GEOMETRY,this._geometry.id)};d.prototype._getGeometry=function(a){a=this._validateGeometry(a.geometry);return"polyline"===a.type?q.placePointOnPolyline(a):"polygon"===a.type?q.placePointOnPolygon(a):"extent"===a.type?a.center:"point"!==a.type?(this._logWarning("unsupported geometry type for object symbol: "+a.type),null):a};d.prototype.createGraphics3DGraphic=
function(a,c){var b=this._getGeometry(a);if(null===b)return null;var e="graphic"+a.uid,d=this.getGraphicElevationContext(a);return this._createAs3DShape(a,b,c,d,e,a.uid)};d.prototype.layerPropertyChanged=function(a,c,b){var e=this;if("opacity"===a){var d=this._isPropertyDriven("opacity");if(this._i3sModel){var g=this._getMaterialOpacity();this._i3sModel.stageResources[l.ModelContentType.MATERIAL].forEach(function(a,b){b=e._i3sModel.originalMaterialOpacities[b]*g;a.setParameterValues({opacity:b,transparent:1>
b||d})})}else c=this._getMaterialOpacity(),this._material.setParameterValues({opacity:c,transparent:1>c||d});return!0}if("elevationInfo"===a){this._updateElevationContext();for(var f in c){var h=c[f];if(a=b(h))h=this.getGraphicElevationContext(h.graphic),a.needsElevationUpdates=q.needsElevationUpdates3D(h.mode),a.elevationContext.set(h)}return!0}return!1};d.prototype.applyRendererDiff=function(a,c,b,e){var d=this,g;for(g in a.diff)switch(g){case "visualVariables":if(u.updateFastSymbolUpdatesState(this._fastUpdates,
c,this._fastVisualVariableConvertOptions()))this._forEachMaterial(function(a){return a.setParameterValues(d._fastUpdates.materialParameters)});else return!1;break;default:return!1}return!0};d.prototype._createAs3DShape=function(a,c,b,d,f,g){var e=this,h=null,k=null;if(a=this._getFastUpdateAttrValues(a))h=h||{},h.featureAttribute=a,k=function(a){return u.evaluateModelTransform(e._fastUpdates.materialParameters,h.featureAttribute,a)};!this._fastUpdates.enabled&&this._hasPerInstanceColor()&&(h=h||{},
h.color=r.mixinColorAndOpacity(b.color,b.opacity));a=this._context.layer.uid;var t=w.identity();this._applyObjectRotation(b,t);this._applyObjectRotation(this.symbol,t);this._applyObjectScale(b,t);this._applyAnchor(t);if(this._i3sModel){b=this._i3sModel.stageResources[l.ModelContentType.GEOMETRY];for(var m=this._i3sModel.materialsByComponent,p=Array(b.length),n=0;n<t.length;n++)p[n]=t;f=q.createStageObjectForPoint.call(this,c,b,m,p,h,d,f,a,g,null,k)}else f=q.createStageObjectForPoint.call(this,c,[this._geometry],
[[this._material]],[t],h,d,f,a,g,null,k);if(null===f)return null;if(this._fastUpdates.enabled){var v=u.getMaterialParams(this._fastUpdates.visualVariables,this._fastVisualVariableConvertOptions());this._forEachMaterial(function(a){return a.setParameterValues(v)})}f.object.setCastShadow(!0);g=new C(this,f.object,null,null,null,M.perObjectElevationAligner,d,C.VisibilityModes.REMOVE_OBJECT);g.alignedTerrainElevation=f.terrainElevation;g.needsElevationUpdates=q.needsElevationUpdates3D(d.mode);q.extendPointGraphicElevationContext(g,
c,this._context.elevationProvider);return g};d.prototype._applyObjectScale=function(a,c){this._fastUpdates.enabled&&this._fastUpdates.customTransformation||(a=this._isPropertyDriven("size")&&a.size?a.size:this._symbolSize,a=r.computeObjectScale(a,this._symbolSize,this._resourceSize,this._context.renderCoordsHelper.unitInMeters),1===a[0]&&1===a[1]&&1===a[2]||w.scale(c,a))};d.prototype._applyObjectRotation=function(a,c){if(!(this._fastUpdates.enabled&&this._fastUpdates.customTransformation&&a instanceof
L))return r.computeObjectRotation(a.heading,a.tilt,a.roll,c)};d.prototype._computeAnchor=function(){switch(this.symbol.anchor){case "center":return F.scale(m.center(this._resourceBoundingBox),-1);case "top":var a=m.center(this._resourceBoundingBox);return[-a[0],-a[1],-this._resourceBoundingBox[5]];case "bottom":return a=m.center(this._resourceBoundingBox),[-a[0],-a[1],-this._resourceBoundingBox[2]];default:return this._pivotOffset?F.scale(this._pivotOffset,-1,Array(3)):G}};d.prototype._applyAnchor=
function(a){if(!this._fastUpdates.enabled||!this._fastUpdates.customTransformation){var c=this._computeAnchor();c&&w.translate(a,c)}};d.prototype._hasPerInstanceColor=function(){return this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};d.prototype._supportsShaderVisualVariables=function(){return this._context.stage.has("instancedRendering")?!0:!1};d.prototype._fastVisualVariableConvertOptions=function(){var a=this._resourceBoundingBox?m.size(this._resourceBoundingBox):n,c=this._resourceBoundingBox?
this._computeAnchor():G,b=this._context.renderCoordsHelper.unitInMeters,d=r.computeObjectScale(this._symbolSize,this._symbolSize,this._resourceSize,b);return{modelSize:a,symbolSize:this._symbolSize||n,unitInMeters:b,transformation:{anchor:c,scale:d,rotation:[this.symbol.tilt||0,this.symbol.roll||0,this.symbol.heading||0]}}};d.PRIMITIVE_BOUNDING_BOX=H;return d}(N)});