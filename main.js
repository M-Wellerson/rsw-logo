const width     = window.innerWidth;
const height    = window.innerHeight;
const renderer  = new THREE.WebGLRenderer({ antialias: true });
const scene     = new THREE.Scene();
const loader    = new THREE.ObjectLoader();
const camera    = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

function onResize( event ) {
	const width  = window.innerWidth;
	const height = window.innerHeight;
  
    windowHalf.set( width / 2, height / 2 );	
    camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize( width, height );				
}

window.addEventListener( 'resize', onResize, false );
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(
    camera, 
    renderer.domElement
);
controls.enableZoom    = false;
controls.minPolarAngle = Math.PI * 0.4;
controls.maxPolarAngle = Math.PI * 0.6;
controls.rotateSpeed   = 0.07;

loader.load("scene.json", function (object) {
    let clock      = new THREE.Clock();
    object.scale.x = object.scale.y = object.scale.z = 13;

    scene.add(object);
    scene.add(camera);

    camera.position.y = 0;
    camera.position.z = 400;
    camera.lookAt(object.position);

    object.traverse( function (child) {
        if ( child instanceof THREE.Mesh ) {
  
            child.material = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF, side: THREE.FrontSide
            });
        }
    });

    function render() {
        requestAnimationFrame(render);
        object.rotation.y -= .1 * clock.getDelta();
        
        renderer.render(scene, camera);
    }
    render();
});

loader.load("scene.json", function (object) {
    let clock      = new THREE.Clock();
    object.scale.x = object.scale.y = object.scale.z = 13;

    scene.add(object);
    scene.add(camera);

    camera.position.y = 0;
    camera.position.z = 400;
    camera.lookAt(object.position);

    object.traverse( function (child) {
        if ( child instanceof THREE.Mesh ) {
            child.material = new THREE.MeshBasicMaterial({
                color: 0x5d5c5e, side: THREE.BackSide
            });
        }
    });

    function render() {
        requestAnimationFrame(render);
        object.rotation.y -= .1 * clock.getDelta();
        
        renderer.render(scene, camera);
    }
    render();
});

loader.load("second-arc.json", function (object) {
    let clock      = new THREE.Clock();
    object.scale.x = object.scale.y = object.scale.z = 91;
    object.position.y = -20;

    var mesh  = new THREE.MeshBasicMaterial( { color : 0x4ac4b6, side: THREE.BackSide } );
    var mesh1 = new THREE.Mesh( object, mesh );

    scene.add(object);
    scene.add(camera);
    camera.position.y = 0;
    camera.position.z = 400;
    camera.lookAt(object.position);

    object.traverse( function (child) {
        if ( child instanceof THREE.Mesh ) {
            child.material = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF, side: THREE.FrontSide
            });
        }
    });

    function render() {
        requestAnimationFrame(render);
        object.rotation.y -= .2 * clock.getDelta();
        
        renderer.render(scene, camera);
    }
    render();
});

loader.load("second-arc.json", function (object) {
    let clock      = new THREE.Clock();
    object.scale.x = object.scale.y = object.scale.z = 91;
    object.position.y = -20;

    var mesh  = new THREE.MeshBasicMaterial( { color : 0x4ac4b6, side: THREE.BackSide } );
    var mesh1 = new THREE.Mesh( object, mesh );

    scene.add(object);
    scene.add(camera);
    camera.position.y = 0;
    camera.position.z = 400;
    camera.lookAt(object.position);

    object.traverse( function (child) {
        if ( child instanceof THREE.Mesh ) {
            child.material = new THREE.MeshBasicMaterial({
                color: 0x5d5c5e, side: THREE.BackSide
            });
        }
    });

    function render() {
        requestAnimationFrame(render);
        object.rotation.y -= .2 * clock.getDelta();
        
        renderer.render(scene, camera);
    }
    render();
});