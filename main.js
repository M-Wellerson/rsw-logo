let logo         = document.querySelector('#rsw-logo');
const width      = window.innerWidth;
const height     = window.innerHeight;
const renderer   = new THREE.WebGLRenderer({ antialias: true, canvas: logo });
const scene      = new THREE.Scene();
const loader     = new THREE.ObjectLoader();
const camera     = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
const mouse      = new THREE.Vector2();
const target     = new THREE.Vector2();
function onMouseMove( event ) {
	mouse.x = ( event.clientX - windowHalf.x );
	mouse.y = ( event.clientY - windowHalf.x );
}
function mouseSet(object) {
    const clock      = new THREE.Clock();
    target.x = ( 1 + mouse.x ) * 0.002;
    target.y = ( 1 + mouse.y ) * 0.002;

    object.rotation.x += 0.02 * ( target.y - object.rotation.x );
    object.rotation.y += 0.02 * ( target.x - .1 * clock.getDelta());
    document.addEventListener( 'mousemove', onMouseMove, false );
}

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
        mouseSet(object)
        
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
        mouseSet(object)
        
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
        mouseSet(object)
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
        mouseSet(object)
        renderer.render(scene, camera);
    }
    render();
});