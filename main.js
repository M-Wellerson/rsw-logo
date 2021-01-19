const width    = window.innerWidth;
const height   = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene    = new THREE.Scene();
const loader   = new THREE.ObjectLoader();
const camera   = new THREE.PerspectiveCamera(75, width / height, 1, 1000);

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

loader.load("scene.json", function (object) {
    let clock      = new THREE.Clock();
    object.scale.x = object.scale.y = object.scale.z = 9;

    controls = new THREE.OrbitControls(  
        camera, 
        renderer.domElement
    );
    controls.enableZoom = false;

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
    object.scale.x = object.scale.y = object.scale.z = 9;

    controls = new THREE.OrbitControls(  
        camera, 
        renderer.domElement
    );
    controls.enableZoom = false;

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
    object.scale.x = object.scale.y = object.scale.z = 68.8;
    object.position.y = -20;

    controls = new THREE.OrbitControls(  
        camera, 
        renderer.domElement
    );
    controls.enableZoom = false;

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
    object.scale.x = object.scale.y = object.scale.z = 68.8;
    object.position.y = -20;

    controls = new THREE.OrbitControls(  
        camera, 
        renderer.domElement
    );
    controls.enableZoom = false;

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