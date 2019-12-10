// ******** Import styles
import "../scss/shared.scss";

// ******* Import Components
import * as THREE from "three";
import { TimelineMax, Expo } from "gsap/TweenMax";

// *******
// First need to create a scene, a camera, and a renderer
// Multiple types of cameras, look at docs - args are field of view, aspect ratio, near and far planes
// Multiple types of renderers also - we are setting background color and size of our renderer (the background of the page)
var scene = new THREE.Scene();

// ******** CAMERA
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// ******* LIGHT
var light1 = new THREE.PointLight(0xffffff, 1, 1000);
light1.position.set(0, 0, 0); // x, y, x
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 2, 1000);
light2.position.set(0, 0, 25); // x, y, x
scene.add(light2);

// ******* GEOMETRY/MATERIAL
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });
var staticMesh = new THREE.Mesh(geometry, material);

scene.add(staticMesh);

// ******* RENDERER
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// ******* ADD OBJECTS TO PAGE
// var meshX = 0;
// var meshArray = [];
// for (var i = 0; i < 15; i++) {
//   var mesh = new THREE.Mesh(geometry, material);
//   mesh.position.x = Math.random() * (window.innerWidth - 0) + 0;
//   mesh.position.y = (Math.random() - 0.5) * 10;
//   mesh.position.z = (Math.random() - 0.5) * 10;
//   meshArray.push(mesh);
//   scene.add(mesh);
//   meshX++;
// }

render();

// ******* ANIMATION

// for (var i = 0; i < meshArray.length; i++) {
//   var timeline = new TimelineMax();
//   timeline.to(meshArray[i].rotation, 0.5, { x: 10, ease: Expo.easeOut });
//   timeline.to(meshArray[i].position, 10, { z: -50, ease: Expo.easeOut });
// }

// var timeline = new TimelineMax();
// timeline.to(staticMesh.rotation, 0.5, { x: 0, ease: Expo.easeOut });
// timeline.to(staticMesh.rotation, 0.5, { y: 0, ease: Expo.easeOut });
// timeline.to(staticMesh.position, 10, { z: -50, ease: Expo.easeOut });

// ******* APPEND TO DOM
document.body.appendChild(renderer.domElement);

// ******** Functions

function createRandomNumber(max, min) {
  var num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

function render() {
  requestAnimationFrame(render);
  staticMesh.rotation.x += 0.03;
  staticMesh.rotation.y += 0.03;
  renderer.render(scene, camera);
}
