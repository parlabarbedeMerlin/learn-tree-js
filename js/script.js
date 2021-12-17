const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 0.2, 1, 3 );
var material = new THREE.MeshBasicMaterial( { color: 444444 } );

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.y = 1;
cube.position.x = -6;

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.003;
  cube.rotation.y += 0.003;
  cube.rotation.z += 0.003;
  renderer.render( scene, camera );
}
animate();



