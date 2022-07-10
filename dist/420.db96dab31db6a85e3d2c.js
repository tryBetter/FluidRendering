"use strict";(self.webpackChunkbabylonjs_fluid_rendering=self.webpackChunkbabylonjs_fluid_rendering||[]).push([[420,961,30,105,65,710,101,967,553],{4961:(e,t,i)=>{i.r(t),i.d(t,{FluidRendererSceneComponent:()=>a});var s=i(6291),n=i(5508);const r="FluidRenderer";Object.defineProperty(s.Scene.prototype,"fluidRenderer",{get:function(){return this._fluidRenderer},set:function(e){this._fluidRenderer=e},enumerable:!0,configurable:!0}),s.Scene.prototype.enableFluidRenderer=function(){return this._fluidRenderer||(this._fluidRenderer=new n.FluidRenderer(this)),this._fluidRenderer},s.Scene.prototype.disableFluidRenderer=function(){var e;null===(e=this._fluidRenderer)||void 0===e||e.dispose(),this._fluidRenderer=null};class a{constructor(e){this.name=r,this.scene=e}register(){this.scene._gatherActiveCameraRenderTargetsStage.registerStep(1,this,this._gatherActiveCameraRenderTargets),this.scene._afterCameraDrawStage.registerStep(5,this,this._afterCameraDraw)}_gatherActiveCameraRenderTargets(){var e;null===(e=this.scene.fluidRenderer)||void 0===e||e._prepareRendering()}_afterCameraDraw(e){var t;null===(t=this.scene.fluidRenderer)||void 0===t||t._render(e)}rebuild(){this.scene._fluidRenderer&&(this.scene.disableFluidRenderer(),this.scene.enableFluidRenderer())}dispose(){this.scene.disableFluidRenderer()}}n.FluidRenderer._SceneComponentInitialization=e=>{let t=e._getComponent(r);t||(t=new a(e),e._addComponent(t))}},3420:(e,t,i)=>{i.r(t),i.d(t,{FluidRendering:()=>_,default:()=>u});var s=i(6291),n=(i(4961),i(4030)),r=i(4065),a=i(9820),o=i(553),l=i(6967),h=i(6101),d=i(5105),c=i(1710);class _{constructor(){this._scene=null}async createScene(e,t){const i=new s.Scene(e);this._scene=i,window.BABYLON=s;const _=(()=>{const e=new s.ArcRotateCamera("ArcRotateCamera",3.06,1.14,2.96,new s.Vector3(0,0,0),i);return e.fov=60*Math.PI/180,e.attachControl(),e.minZ=.1,e.maxZ=1e3,e.wheelPrecision=50,e.inputs.removeByType("ArcRotateCameraKeyboardMoveInput"),e})();return i.activeCamera=_,a.FluidSimulationDemoBase.AddDemo("Particle system",(()=>new l.FluidSimulationDemoParticleSystem(i))),a.FluidSimulationDemoBase.AddDemo("Particle custom shape",(()=>new h.FluidSimulationDemoParticleCustomShape(i))),a.FluidSimulationDemoBase.AddDemo("Precomputed particles - rendering only",(()=>new o.FluidSimulationDemoPrecomputeRendering(i))),a.FluidSimulationDemoBase.AddDemo("Box, sphere and wall",(()=>new n.FluidSimulationDemoBoxSphere(i))),a.FluidSimulationDemoBase.AddDemo("Height map",(()=>new r.FluidSimulationDemoHeightMap(i))),a.FluidSimulationDemoBase.AddDemo("Glass",(()=>new d.FluidSimulationDemoGlass(i))),a.FluidSimulationDemoBase.AddDemo("Mesh SDF",(()=>new c.FluidSimulationDemoMeshSDF(i))),a.FluidSimulationDemoBase.StartDemo(3),i}}const u=new _},4030:(e,t,i)=>{i.r(t),i.d(t,{FluidSimulationDemoBoxSphere:()=>r});var s=i(6291),n=i(9820);class r extends n.FluidSimulationDemoBase{constructor(e){super(e),this._boxMin=new s.Vector3(-.3,-.3,-.7),this._boxMax=new s.Vector3(.3,1.2,.7),this._boxMesh=null,this._boxMaterial=null,this._boxMeshFront=null,this._boxMaterialFront=null,this._checkXZBounds=!0,this._origCollisionPlanes=[new s.Plane(0,0,-1,Math.abs(this._boxMax.z)),new s.Plane(0,0,1,Math.abs(this._boxMin.z)),new s.Plane(1,0,0,Math.abs(this._boxMin.x)),new s.Plane(-1,0,0,Math.abs(this._boxMax.x)),new s.Plane(0,-1,0,Math.abs(this._boxMax.y)),new s.Plane(0,1,0,Math.abs(this._boxMin.y)),new s.Plane(0,1,0,Math.abs(this._boxMin.y))],this._collisionPlanes=[];for(let e=0;e<this._origCollisionPlanes.length;++e){const t=this._origCollisionPlanes[e];this.addCollisionPlane(t.normal,t.d,e===this._origCollisionPlanes.length-1?.98:void 0)}this._angleX=0,this._angleY=0,this._prevTransfo=s.Matrix.Identity(),this._autoRotateBox=!1,this._sceneRenderObserver=null,this._sceneAfterCameraRenderObserver=null,this._sceneKeyboardObserver=null,this._onEngineResizeObserver=null,this._passPP=new s.PassPostProcess("pass",1,null,void 0,this._engine),this._passPP.externalTextureSamplerBinding=!0,this._sphereMesh=null,this.addCollisionSphere(new s.Vector3((this._boxMin.x+this._boxMax.x)/2,this._boxMin.y+.16,(this._boxMin.z+this._boxMax.z)/2-.1),.16),this._wallMesh=null,this.addCollisionBox(new s.Vector3(0,0,.3),new s.Vector3(90*Math.PI/180,0,0),new s.Vector3(.32,.05,.3),new s.Vector3(1,0,0))}async _run(){var e,t;for(let e=0;e<this._origCollisionPlanes.length;++e)this._collisionPlanes.push(this._collisionObjects[e]);this._collisionPlanes[this._collisionPlanes.length-1][1].disabled=!0,this._sphereMesh=this._collisionObjects[this._origCollisionPlanes.length][0],this._wallMesh=this._collisionObjects[this._origCollisionPlanes.length+1][0];const i=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;i&&(i.alpha=3.06,i.beta=1.14,i.radius=2.96,i.outputRenderTarget=new s.RenderTargetTexture("rttFinal",{width:this._engine.getRenderWidth(),height:this._engine.getRenderHeight()},this._scene)),this._fluidRenderObject.object.particleSize=.08,this._fluidSim.smoothingRadius=.04,this._fluidSim.densityReference=2e4,this._fluidSim.pressureConstant=4,this._fluidSim.viscosity=.01,this._fluidSim.maxVelocity=3,this._fluidSim.maxAcceleration=2e3,this._boxMaterial=new s.PBRMaterial("BoxMeshMat",this._scene),this._boxMaterial.metallic=.3,this._boxMaterial.roughness=0,this._boxMaterial.alpha=.2,this._boxMaterial.backFaceCulling=!0,this._boxMaterial.cullBackFaces=!1,this._boxMaterialFront=this._boxMaterial.clone("BoxMeshFrontMat"),this._boxMaterialFront.cullBackFaces=!0,this._boxMesh=s.MeshBuilder.CreateBox("boxMesh",{width:this._boxMax.x-this._boxMin.x,height:this._boxMax.y-this._boxMin.y,depth:this._boxMax.z-this._boxMin.z},this._scene),this._boxMesh.material=this._boxMaterial,this._boxMesh.position.x=(this._boxMin.x+this._boxMax.x)/2,this._boxMesh.position.y=(this._boxMin.y+this._boxMax.y)/2,this._boxMesh.position.z=(this._boxMin.z+this._boxMax.z)/2,this._boxMesh.isPickable=!1,this._boxMeshFront=this._boxMesh.clone("boxMeshFront"),this._boxMeshFront.material=this._boxMaterialFront,this._boxMeshFront.layerMask=268435456;let n=!1,r=!1,a=!1,o=!1;this._scene.onKeyboardObservable.add((e=>{switch(e.type){case s.KeyboardEventTypes.KEYDOWN:"ArrowLeft"===e.event.code?n=!0:"ArrowRight"===e.event.code?r=!0:"ArrowUp"===e.event.code?a=!0:"ArrowDown"===e.event.code&&(o=!0);break;case s.KeyboardEventTypes.KEYUP:"ArrowLeft"===e.event.code?n=!1:"ArrowRight"===e.event.code?r=!1:"ArrowUp"===e.event.code?a=!1:"ArrowDown"===e.event.code&&(o=!1)}})),this._passPP.onApplyObservable.add((e=>{e.setTexture("textureSampler",i.outputRenderTarget)}));let l=!1;this._sceneAfterCameraRenderObserver=this._scene.onAfterCameraRenderObservable.add((()=>{var e;const t=null==i?void 0:i._getFirstPostProcess();t&&t.inputTexture.depthStencilTexture&&!l&&(t.inputTexture._shareDepth(i.outputRenderTarget.renderTarget),l=!0),l&&(null===(e=this._boxMeshFront)||void 0===e||e.render(this._boxMeshFront.subMeshes[0],!0),this._scene.postProcessManager.directRender([this._passPP],null))})),this._onEngineResizeObserver=this._engine.onResizeObservable.add((()=>{var e;null===(e=null==i?void 0:i.outputRenderTarget)||void 0===e||e.resize({width:this._engine.getRenderWidth(!0),height:this._engine.getRenderHeight(!0)}),l=!1})),this._sceneRenderObserver=this._scene.onBeforeRenderObservable.add((()=>{if(n&&(this._angleX+=1,this._rotateMeshes(this._angleX,this._angleY)),r&&(this._angleX-=1,this._rotateMeshes(this._angleX,this._angleY)),a&&(this._angleY-=1,this._rotateMeshes(this._angleX,this._angleY)),o&&(this._angleY+=1,this._rotateMeshes(this._angleX,this._angleY)),this._autoRotateBox){const e=this._engine.getFps();this._angleX+=20/e,this._angleY+=30/e,this._rotateMeshes(this._angleX,this._angleY)}})),super._run()}dispose(){var e,t,i,s,n,r;super.dispose();const a=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;a&&(null===(i=a.outputRenderTarget)||void 0===i||i.dispose(),a.outputRenderTarget=null),this._scene.onBeforeRenderObservable.remove(this._sceneRenderObserver),this._scene.onAfterCameraRenderObservable.remove(this._sceneAfterCameraRenderObserver),this._scene.onKeyboardObservable.remove(this._sceneKeyboardObserver),this._passPP.dispose(),null===(s=this._boxMesh)||void 0===s||s.dispose(),null===(n=this._boxMeshFront)||void 0===n||n.dispose(),null===(r=this._boxMaterial)||void 0===r||r.dispose(),this._engine.onResizeObservable.remove(this._onEngineResizeObserver)}_makeGUIMainMenu(){const e={checkXZBounds:!0,autoRotateBox:!1,restart:()=>{this._angleX=this._angleY=0,this._autoRotateBox=!1,null==i||i.setValue(!1),this._rotateMeshes(0,0),this._generateParticles()},boxOpacity:this._boxMaterial.alpha},t=this._gui;let i=null;t.add(e,"restart").name("Restart"),t.add(e,"checkXZBounds").name("Check box bounds").onChange((e=>{var t,s;this._checkXZBounds=e,null===(t=this._boxMesh)||void 0===t||t.setEnabled(e),null===(s=this._boxMeshFront)||void 0===s||s.setEnabled(e);for(let t=0;t<this._collisionPlanes.length;++t)this._collisionPlanes[t][1].disabled=!e&&t<this._collisionPlanes.length-1||e&&t===this._collisionPlanes.length-1;e||(this._autoRotateBox=!1,null==i||i.setValue(!1))})),i=t.add(e,"autoRotateBox").name("Auto rotate box").onChange((e=>{this._autoRotateBox=e})),t.add(e,"boxOpacity",0,1,.01).name("Box opacity").onChange((e=>{this._boxMaterial.alpha=e,this._boxMaterialFront.alpha=e}))}_onPaused(e){super._onPaused(e),e&&(this._autoRotateBox=!1)}_rotateMeshes(e,t){var i;const n=s.Matrix.RotationYawPitchRoll(0,e*Math.PI/180,t*Math.PI/180),r=[new s.Vector3(this._boxMin.x,this._boxMin.y,this._boxMin.z),new s.Vector3(this._boxMin.x,this._boxMax.y,this._boxMin.z),new s.Vector3(this._boxMin.x,this._boxMax.y,this._boxMax.z),new s.Vector3(this._boxMin.x,this._boxMin.y,this._boxMax.z),new s.Vector3(this._boxMax.x,this._boxMin.y,this._boxMin.z),new s.Vector3(this._boxMax.x,this._boxMax.y,this._boxMin.z),new s.Vector3(this._boxMax.x,this._boxMax.y,this._boxMax.z),new s.Vector3(this._boxMax.x,this._boxMin.y,this._boxMax.z)];let a=1e10;for(let e=0;e<r.length;++e){const t=s.Vector3.TransformCoordinates(r[e],n);a=Math.min(a,t.y)}this._collisionPlanes[this._origCollisionPlanes.length-1][1].params[1]=Math.abs(a)+.02;for(let e=0;e<this._origCollisionPlanes.length-1;++e){const t=this._origCollisionPlanes[e].transform(n);this._collisionPlanes[e][1].params=[t.normal,t.d]}const o=s.Quaternion.FromRotationMatrix(n);if(this._prevTransfo.invert(),this._sphereMesh){const e=s.Vector3.TransformCoordinates(this._sphereMesh.position,this._prevTransfo);this._sphereMesh.rotationQuaternion=o,this._sphereMesh.position=s.Vector3.TransformCoordinates(e,n)}if(this._wallMesh){const e=s.Vector3.TransformCoordinates(this._wallMesh.position,this._prevTransfo),t=s.Matrix.RotationYawPitchRoll(0,90*Math.PI/180,0),r=s.Matrix.Translation(e.x,e.y,e.z);t.multiplyToRef(r,t).multiplyToRef(n,t);const a=null!==(i=this._wallMesh.rotationQuaternion)&&void 0!==i?i:new s.Quaternion;t.decompose(void 0,a,this._wallMesh.position),this._wallMesh.rotationQuaternion=a}this._boxMesh&&this._boxMeshFront&&(this._boxMesh.rotationQuaternion=this._boxMeshFront.rotationQuaternion=o,this._boxMesh.position.x=(this._boxMin.x+this._boxMax.x)/2,this._boxMesh.position.y=(this._boxMin.y+this._boxMax.y)/2,this._boxMesh.position.z=(this._boxMin.z+this._boxMax.z)/2,this._boxMesh.position=s.Vector3.TransformCoordinates(this._boxMesh.position,n),this._boxMeshFront.position=this._boxMesh.position),this._prevTransfo.copyFrom(n)}}},5105:(e,t,i)=>{i.r(t),i.d(t,{FluidSimulationDemoGlass:()=>a});var s=i(6291),n=i(9820);const r=i.p+"370c162a33a228937af8f45b74b949f4.glb";class a extends n.FluidSimulationDemoBase{constructor(e){super(e),this._environmentFile="Country",this._sceneRenderObserver=null,this._boxMesh=null,this._boxMaterial=null,this._cylMesh=null,this._footMesh=null,this.addCollisionVerticalCylinder(new s.Vector3(0,-1.89,0),new s.Vector3(0,0,0),2.2,.12,16,null,.3,!0),this.addCollisionPlane(new s.Vector3(0,1,0),6,.3),this.addCollisionCutHollowSphere(new s.Vector3(0,.2,0),new s.Vector3(0,0,0),.5,.2,.02,16,new s.Vector3(0,1,0)),this._footMeshOfst=new s.Vector3(0,-1.9,0),this.addCollisionVerticalCylinder(new s.Vector3(0,-1.72,0),new s.Vector3(0,0,0),.4,.04,16,null,.6),this._cylMeshOfst=new s.Vector3(0,-1.2,0),this.addCollisionVerticalCylinder(new s.Vector3(0,-1,0),new s.Vector3(0,0,0),.05,1.4,16,null,.6)}async _run(){var e,t;this._boxMesh=this._collisionObjects[2][0],this._footMesh=this._collisionObjects[3][0],this._cylMesh=this._collisionObjects[4][0];const i=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;i&&(i.alpha=3.09,i.beta=1.41,i.radius=6.42),this._fluidRenderObject.object.particleSize=.08,this._fluidRenderObject.targetRenderer.fluidColor=new s.Color3(251/255,218/255,218/255),this._fluidSim.smoothingRadius=.04,this._fluidSim.densityReference=2e4,this._fluidSim.pressureConstant=4,this._fluidSim.viscosity=.01,this._fluidSim.maxVelocity=10,this._fluidSim.maxAcceleration=2e3,this._shapeCollisionRestitution=.95,this._particleGenerator.position.x=.15,this._particleGenerator.position.y=.8,this._particleGenerator.position.z=-.1,this._boxMaterial=new s.PBRMaterial("BoxMeshMat",this._scene),this._boxMaterial.metallic=.3,this._boxMaterial.roughness=0,this._boxMaterial.alpha=.2,this._boxMaterial.backFaceCulling=!1,this._boxMesh.material=this._boxMaterial,this._cylMesh.material=this._boxMaterial.clone("cloned"),this._cylMesh.material.alpha=1,this._footMesh.material=this._cylMesh.material,this._sceneRenderObserver=this._scene.onBeforeRenderObservable.add((()=>{this._cylMesh.position.copyFrom(this._boxMesh.position),this._cylMesh.position.addInPlace(this._cylMeshOfst),this._footMesh.position.copyFrom(this._boxMesh.position),this._footMesh.position.addInPlace(this._footMeshOfst)})),super._run(),await s.SceneLoader.AppendAsync("",r,this._scene);const n=this._scene.getMeshByName("Object_3");n.scaling.setAll(6),n.position.set(-2.3,-2,-5.54)}dispose(){var e,t,i,s,n,r,a;super.dispose(),this._scene.onBeforeRenderObservable.remove(this._sceneRenderObserver),null===(e=this._scene.getMeshByName("__root__"))||void 0===e||e.dispose(!1,!0),null===(t=this._boxMesh)||void 0===t||t.dispose(),null===(i=this._boxMaterial)||void 0===i||i.dispose(),null===(n=null===(s=this._cylMesh)||void 0===s?void 0:s.material)||void 0===n||n.dispose(),null===(r=this._cylMesh)||void 0===r||r.dispose(),null===(a=this._footMesh)||void 0===a||a.dispose()}_makeGUIMainMenu(){const e={restart:()=>{this._generateParticles()},boxOpacity:this._boxMaterial.alpha},t=this._gui;t.add(e,"restart").name("Restart"),t.add(e,"boxOpacity",0,1,.01).name("Glass opacity").onChange((e=>{this._boxMaterial.alpha=e}))}}},4065:(e,t,i)=>{i.r(t),i.d(t,{FluidSimulationDemoHeightMap:()=>a});var s=i(6291),n=i(9820),r=i(4282);class a extends n.FluidSimulationDemoBase{constructor(e){super(e,!1),this._numParticles=1e4,this._particleGeneratorName="Water jet",this._time=0,this._showHeightmap=!0,this._sphere=null,this._box=null,this._heightMap=[null,null],this._groundCollision=null;const t=2.85;this.addCollisionSphere(new s.Vector3(0,.2,0),.2,null),this.addCollisionBox(new s.Vector3(-.7,.249,-.7),new s.Vector3(0,0,90*Math.PI/180),new s.Vector3(.2,.05,.5)),this.addCollisionTerrain(t),this.addCollisionPlane(new s.Vector3(0,0,-1),1.425),this.addCollisionPlane(new s.Vector3(0,0,1),1.425),this.addCollisionPlane(new s.Vector3(1,0,0),1.425),this.addCollisionPlane(new s.Vector3(-1,0,0),1.425),this.addCollisionPlane(new s.Vector3(0,1,0),0),this._ground=s.MeshBuilder.CreateGround("ground",{width:t,height:t},this._scene),this._ground.setEnabled(!1)}async _run(){var e,t;this._sphere=this._collisionObjects[0][0],this._box=this._collisionObjects[1][0],this._heightMap=this._collisionObjects[2],this._groundCollision=this._collisionObjects[7][1],this._groundCollision.disabled=!0,this._ground.material=this._heightMap[0].material;const i=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;i&&(i.alpha=4.65,i.beta=1.12,i.radius=3.9),this._fluidRenderObject.targetRenderer.blurThicknessFilterSize=12,this._fluidRenderObject.targetRenderer.blurThicknessNumIterations=3,this._fluidRenderObject.targetRenderer.specularPower=50,this._fluidRenderObject.targetRenderer.refractionStrength=.02,this._fluidRenderObject.targetRenderer.density=5,this._createParticleGenerator(),super._run()}_createParticleGenerator(){var e,t;null===(e=this._particleGenerator)||void 0===e||e.dispose();let i="";switch(this._particleGeneratorName){case"Water jet":this._fluidRenderObject.object.particleSize=.08,this._fluidSim.smoothingRadius=.04,this._fluidSim.densityReference=2e4,this._fluidSim.pressureConstant=3,this._fluidSim.viscosity=.01,this._fluidSim.maxVelocity=3,this._fluidSim.maxAcceleration=2e3;break;case"Dragon 0.04":case"Dude 0.04":case"Sphere 0.04":this._fluidRenderObject.object.particleSize=.08,this._fluidSim.smoothingRadius=.08,this._fluidSim.densityReference=6e3,this._fluidSim.pressureConstant=10,this._fluidSim.viscosity=.01,this._fluidSim.maxVelocity=4,this._fluidSim.maxAcceleration=2e3,i="04";break;case"Dragon 0.03":case"Dude 0.03":case"Sphere 0.03":this._fluidRenderObject.object.particleSize=.06,this._fluidSim.smoothingRadius=.06,this._fluidSim.densityReference=17e3,this._fluidSim.pressureConstant=15,this._fluidSim.viscosity=.01,this._fluidSim.maxVelocity=4,this._fluidSim.maxAcceleration=2e3,i="03"}null===(t=this._fluidRendererGUI)||void 0===t||t.syncGUI(),this._syncFluidSimGUI(),this._particleGenerator=new r.ParticleGenerator(this._scene,""===i?void 0:this._particleGeneratorName.substring(0,this._particleGeneratorName.indexOf(" ")).toLocaleLowerCase()+"_"+i),this._particleGenerator.position.y=2,this._particleGenerator.position.z=.3,this._particleGenerator.particleRadius=this._fluidSim.smoothingRadius/2}dispose(){super.dispose(),this._ground.dispose()}_makeGUIMainMenu(){const e={restart:()=>{this._generateParticles()},particleGeneratorName:this._particleGeneratorName,showHeightmap:this._showHeightmap},t=this._gui;t.add(e,"restart").name("Restart"),t.add(e,"particleGeneratorName",["Water jet","Dragon 0.04","Dude 0.04","Sphere 0.04","Dragon 0.03","Dude 0.03","Sphere 0.03"]).name("Particle generator").onChange((async e=>{this._particleGeneratorName=e,this._createParticleGenerator(),await this._generateParticles(),"Water jet"!==e&&(this._numParticles=this._particleGenerator.currNumParticles),this._syncFluidSimGUI()})),t.add(e,"showHeightmap").name("Show height map").onChange((e=>{this._showHeightmap=e,this._ground.setEnabled(!e),this._groundCollision.disabled=e,this._heightMap[0].setEnabled(e),this._heightMap[1].disabled=!e}))}_checkCollisions(e){this._sphere.position.x=1.1*Math.cos(2*this._time/3.3),this._sphere.position.z=1.1*Math.sin(5*this._time/3.3),this._box.rotation.y=2*this._time,this._time+=.02,super._checkCollisions(e)}}},1710:(e,t,i)=>{i.r(t),i.d(t,{FluidSimulationDemoMeshSDF:()=>r});var s=i(6291),n=i(9820);class r extends n.FluidSimulationDemoBase{constructor(e){super(e),this._environmentFile="Parking",this._meshName=null,this._sceneRenderObserver=null,this._numParticles=7500,this.addCollisionPlane(new s.Vector3(0,1,0),.5,.3),this._addMesh("High heels")}async _addMesh(e,t=!1){switch(this._meshName=e,e){case"High heels":this.addCollisionMesh(new s.Vector3(.85,-.5,0),new s.Vector3(0,0,0),"high_heels.obj","high_heels.sdf",!1,.03);break;case"Dragon":this.addCollisionMesh(new s.Vector3(-.1,-.5,-2.4),new s.Vector3(0,-1,0),"Dragon_50k.obj","Dragon_50k.sdf",!0,3)}t&&(this._collisionObjects=await Promise.all(this._collisionObjectPromises))}async _run(){var e,t;const i=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;i&&(i.alpha=2.62,i.beta=1.11,i.radius=8.4),this._fluidRenderObject.object.particleSize=.08,this._fluidSim.smoothingRadius=.04,this._fluidSim.densityReference=2e4,this._fluidSim.pressureConstant=4,this._fluidSim.viscosity=.005,this._fluidSim.maxVelocity=10,this._fluidSim.maxAcceleration=2e3,this._shapeCollisionRestitution=.99,this._particleGenerator.position.x=.2,this._particleGenerator.position.y=2.8,this._particleGenerator.position.z=-1.5,super._run()}dispose(){super.dispose(),this._scene.onBeforeRenderObservable.remove(this._sceneRenderObserver)}_makeGUIMainMenu(){const e={restart:()=>{this._generateParticles()},meshname:this._meshName},t=this._gui;t.add(e,"restart").name("Restart"),t.add(e,"meshname",["Dragon","High heels"]).name("Name").onChange((e=>{this.disposeCollisionObject(this._collisionObjects.length-1),this._addMesh(e,!0)}))}}},6101:(e,t,i)=>{i.r(t),i.d(t,{FluidSimulationDemoParticleCustomShape:()=>r});var s=i(6291),n=i(9820);class r extends n.FluidSimulationDemoBase{constructor(e){super(e,!0),this._initParticles=!0,this._started=!1,this._meshPCS=null,this._pcs=null}async _run(){var e,t,i;const n=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;n&&(n.alpha=1.593-Math.PI/8,n.beta=1.3,n.radius=9.633,n.computeWorldMatrix(),n.setTarget(new s.Vector3(0,3,0)),n.beta=1.3,n.computeWorldMatrix()),await s.SceneLoader.AppendAsync("https://assets.babylonjs.com/meshes/Dude/","dude.babylon",this._scene),null===(i=this._scene.getCameraByName("Default camera"))||void 0===i||i.dispose(),this._scene.activeCameras&&this._scene.activeCameras.length>0?this._scene.activeCameras[0]=n:this._scene.activeCamera=n,this._pcs=new s.PointsCloudSystem("pcs",3,this._scene),this._scene.getMeshByName("him").getChildMeshes().forEach((e=>{e.setEnabled(!1),e.scaling.setAll(.1),e.rotation.y=Math.PI/8,e.material.disableLighting=!0,e.material.emissiveTexture=e.material.diffuseTexture,this._pcs.addSurfacePoints(e,5e3,s.PointColor.Color,0)})),this._meshPCS=await this._pcs.buildMeshAsync(),this._meshPCS.setEnabled(!1);const r=this._pcs.positions,a=r.slice(0),o=r.length/3;this._fluidRenderObject.object.vertexBuffers.position=new s.VertexBuffer(this._engine,r,s.VertexBuffer.PositionKind,!0,!1,3,!0),this._fluidRenderObject.object.vertexBuffers.color=new s.VertexBuffer(this._engine,this._pcs.colors,"color",!1,!1,4,!0),this._fluidRenderObject.object.setNumParticles(o),this._fluidRenderObject.object.particleSize=.15,this._fluidRenderObject.object.particleThicknessAlpha=.1,this._fluidRenderObject.targetRenderer.minimumThickness=0,this._fluidRenderObject.targetRenderer.blurDepthFilterSize=15,this._fluidRenderObject.targetRenderer.blurDepthNumIterations=8,this._fluidRenderObject.targetRenderer.blurDepthDepthScale=50,this._fluidRenderObject.targetRenderer.thicknessMapSize=1024,this._fluidRenderObject.targetRenderer.density=.63,this._fluidRenderObject.targetRenderer.generateDiffuseTexture=!0,this._fluidRenderObject.targetRenderer.fresnelClamp=.1;const l=[],h=[],d=[],c=()=>{const e=new s.Vector3(1e10,1e10,1e10),t=new s.Vector3(-1e10,-1e10,-1e10);for(let i=0;i<o;++i)e.x=Math.min(r[3*i+0],e.x),e.y=Math.min(r[3*i+1],e.y),e.z=Math.min(r[3*i+2],e.z),t.x=Math.max(r[3*i+0],t.x),t.y=Math.max(r[3*i+1],t.y),t.z=Math.max(r[3*i+2],t.z);l.length=0,h.length=0,d.length=0;for(let e=0;e<o;++e){const e=.005*Math.random(),t=.001*Math.random(),i=.005*Math.random();h.push((-.5+Math.random())*Math.random()*e),h.push(Math.random()*(Math.random()+1)*t),h.push((-.5+Math.random())*Math.random()*i),l.push(0,0,0),d.push(0)}this._initParticles=!1};this._sceneObserver=this._scene.onBeforeRenderObservable.add((()=>{if(this._started&&(this._initParticles&&(r.set(a),c(),this._fluidRenderObject.object.vertexBuffers.position.updateDirectly(r,0)),!this._paused)){for(let e=0;e<o;++e)!d[e]&&(h[3*e+1]+=-.00016350000000000002,l[3*e+0]+=h[3*e+0],l[3*e+1]+=h[3*e+1],l[3*e+2]+=h[3*e+2],r[3*e+0]+=l[3*e+0],r[3*e+1]+=l[3*e+1],r[3*e+2]+=l[3*e+2],r[3*e+1]<=-2&&(l[3*e+1]*=-(Math.random()/10+.4),r[3*e+1]+l[3*e+1]<-2&&(d[e]=1),r[3*e+1]=-2));this._started,this._fluidRenderObject.object.vertexBuffers.position.updateDirectly(r,0)}})),super._run()}dispose(){var e;super.dispose(),this._scene.getMeshByName("him").dispose(!1,!0),null===(e=this._pcs)||void 0===e||e.dispose()}_makeGUIMainMenu(){const e={paused:this._paused,start:()=>{this._initParticles=!0,this._started=!0}},t=this._gui;t.add(e,"start").name("Start"),t.add(e,"paused").name("Pause").onChange((e=>{this._paused=e}))}}},6967:(e,t,i)=>{i.r(t),i.d(t,{FluidSimulationDemoParticleSystem:()=>a});var s=i(6291),n=i(9820);const r=i.p+"7c78419fe3f98a530df81b3e7a40909f.png";class a extends n.FluidSimulationDemoBase{constructor(e){super(e,!0),this._particleSystem=null}async _run(){var e,t;const i=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;i&&(i.alpha=0,i.beta=Math.PI/2.4,i.radius=30),this._particleSystem=new s.ParticleSystem("particles",4e4,this._scene),this._particleSystem.particleTexture=new s.Texture(r,this._scene),this._particleSystem.blendMode=s.ParticleSystem.BLENDMODE_ADD,this._particleSystem.createConeEmitter(4,Math.PI/2),this._particleSystem.color1=new s.Color4(.4,1.5,.3,1),this._particleSystem.color2=new s.Color4(.4,1.5,.3,1),this._particleSystem.colorDead=new s.Color4(0,0,.2,0),this._particleSystem.colorDead=new s.Color4(.4,1,.3,1),this._particleSystem.minSize=.75,this._particleSystem.maxSize=.75,this._particleSystem.minLifeTime=2,this._particleSystem.maxLifeTime=2.5,this._particleSystem.emitRate=3e3,this._particleSystem.gravity=new s.Vector3(0,-10.81,0),this._particleSystem.minEmitPower=2.5,this._particleSystem.maxEmitPower=6.5,this._particleSystem.updateSpeed=.02,this._particleSystem.preWarmCycles=480,this._particleSystem.start(),this._particleSystem.renderAsFluid=!0,this._fluidRenderer.removeRenderObject(this._fluidRenderObject,!0),this._fluidRenderObject=this._fluidRenderer.getRenderObjectFromParticleSystem(this._particleSystem),this._fluidRenderObject.object.particleSize=.75,this._fluidRenderObject.object.particleThicknessAlpha=.02,this._fluidRenderObject.object.useTrueRenderingForDiffuseTexture=!0,this._fluidRenderObject.targetRenderer.minimumThickness=this._fluidRenderObject.object.particleThicknessAlpha,this._fluidRenderObject.targetRenderer.blurDepthFilterSize=10,this._fluidRenderObject.targetRenderer.blurDepthDepthScale=10,this._fluidRenderObject.targetRenderer.thicknessMapSize=1024,this._fluidRenderObject.targetRenderer.density=8,this._fluidRenderObject.targetRenderer.fresnelClamp=.04,this._fluidRenderObject.targetRenderer.fluidColor=new s.Color3(219/255,228/255,1),this._fluidRenderObject.targetRenderer.generateDiffuseTexture=!1,super._run()}dispose(){var e;super.dispose(),null===(e=this._particleSystem)||void 0===e||e.dispose()}_makeGUIMainMenu(){this._gui.add({paused:!1},"paused").name("Pause").onChange((e=>{this._particleSystem.updateSpeed=e?0:.02}))}}},553:(e,t,i)=>{i.r(t),i.d(t,{FluidSimulationDemoPrecomputeRendering:()=>r});var s=i(6291),n=i(9820);class r extends n.FluidSimulationDemoBase{constructor(e){super(e,!0),this._animSpeed=.5}async _run(){var e,t;const i=null!==(t=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==t?t:this._scene.activeCamera;i&&(i.alpha=-.631,i.beta=1.318,i.radius=1.866);const n=[];let r=0;for(let e=0;e<160;++e){const t="000"+(e+1),i=await(await fetch("../src/assets/particles/SphereDropGround/frame."+t.substring(t.length-4)+".pos")).arrayBuffer(),s=new Uint32Array(i),a=new Float32Array(i);r=s[0];const o=new Float32Array(3*r);for(let e=0;e<r;++e){const t=a[2+3*e+0],i=a[2+3*e+1],s=a[2+3*e+2];o[3*e+0]=t,o[3*e+1]=i,o[3*e+2]=-s}n.push(o)}this._fluidRenderObject.object.vertexBuffers.position=new s.VertexBuffer(this._engine,n[0],s.VertexBuffer.PositionKind,!0,!1,3,!0),this._fluidRenderObject.object.setNumParticles(r),this._fluidRenderObject.object.particleSize=.03,this._fluidRenderObject.object.particleThicknessAlpha=.007,this._fluidRenderObject.targetRenderer.minimumThickness=0,this._fluidRenderObject.targetRenderer.blurDepthFilterSize=10,this._fluidRenderObject.targetRenderer.blurDepthDepthScale=10,this._fluidRenderObject.targetRenderer.thicknessMapSize=256,this._fluidRenderObject.targetRenderer.refractionStrength=.1,this._fluidRenderObject.targetRenderer.blurThicknessFilterSize=5,this._fluidRenderObject.targetRenderer.blurThicknessNumIterations=1,this._fluidRenderObject.targetRenderer.density=3,this._fluidRenderObject.targetRenderer.specularPower=250;let a=0;this._sceneObserver=this._scene.onBeforeRenderObservable.add((()=>{this._fluidRenderObject.object.vertexBuffers.position.updateDirectly(n[Math.floor(a)],0),a+=this._animSpeed,a>=160&&(a=0)})),super._run()}_makeGUIMainMenu(){const e={animSpeed:this._animSpeed};this._gui.add(e,"animSpeed",0,1,.1).name("Animation speed").onChange((e=>{this._animSpeed=e}))}}}}]);
//# sourceMappingURL=420.db96dab31db6a85e3d2c.js.map