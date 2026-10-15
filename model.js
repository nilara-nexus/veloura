import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const canvas=document.querySelector('#icecream-canvas');
if(canvas){
 const wrap=canvas.parentElement; const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(34,1,.1,100);camera.position.set(0,.1,7.8);
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
 scene.add(new THREE.HemisphereLight(0xffe8ec,0x361522,2.3));
 const key=new THREE.DirectionalLight(0xffe3d0,3.5);key.position.set(-4,5,6);scene.add(key);
 const rim=new THREE.PointLight(0xf17ca5,38,18);rim.position.set(3,2,1);scene.add(rim);
 const fill=new THREE.PointLight(0xffc77f,17,14);fill.position.set(-3,-1,3);scene.add(fill);
 const pivot=new THREE.Group();scene.add(pivot);let loaded=false;
 new GLTFLoader().load('assets/models/veloura-icecream.glb',gltf=>{const model=gltf.scene;model.scale.setScalar(1.16);model.position.y=-.1;pivot.add(model);loaded=true;},undefined,err=>{console.warn('3D model could not load. Run this site with a local server.',err)});
 // Floating sugar glints create depth around the local GLB model.
 const particles=new THREE.Group();scene.add(particles);for(let i=0;i<70;i++){const geo=new THREE.IcosahedronGeometry(Math.random()*.025+.008,0);const mat=new THREE.MeshStandardMaterial({color:i%3===0?0xf5a9bd:i%3===1?0xffd6a0:0xffffff,emissive:0x35121e,roughness:.35});const p=new THREE.Mesh(geo,mat);p.position.set((Math.random()-.5)*4.4,(Math.random()-.5)*5,(Math.random()-.5)*2.2);p.userData.phase=Math.random()*6.28;particles.add(p)}
 let tx=-.1,ty=-.2;wrap.addEventListener('pointermove',e=>{if(matchMedia('(pointer:coarse)').matches)return;const r=wrap.getBoundingClientRect();ty=((e.clientX-r.left)/r.width-.5)*.8;tx=((e.clientY-r.top)/r.height-.5)*.45});wrap.addEventListener('pointerleave',()=>{tx=-.1;ty=-.2});
 function resize(){const w=wrap.clientWidth,h=wrap.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}new ResizeObserver(resize).observe(wrap);resize();const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const clock=new THREE.Clock();
 function animate(){requestAnimationFrame(animate);const t=clock.getElapsedTime();if(!reduced){pivot.rotation.y+=(ty+window.scrollY/(document.documentElement.scrollHeight-innerHeight||1)*1.1-pivot.rotation.y)*.035;pivot.rotation.x+=(tx-pivot.rotation.x)*.035;pivot.position.y=Math.sin(t*.8)*.07;particles.children.forEach(p=>{p.position.y+=Math.sin(t+p.userData.phase)*.0008;p.rotation.x+=.002;p.rotation.y+=.003})}renderer.render(scene,camera)}animate();
}
