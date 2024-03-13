window.onload = () => {
    let testEntityAdded = false;
    let modelEntity;

    const el = document.querySelector("[gps-new-camera]");

    // enable controls
    document.querySelector("a-camera").setAttribute("look-controls", "enabled", true);
    document.querySelector("a-camera").setAttribute("wasd-controls", "enabled", true);

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);

            // model
            modelEntity = document.createElement('a-entity');

            modelEntity.setAttribute('gltf-model', './assets/fridge/kitchenFridge.glb');

            modelEntity.setAttribute('scale', {
                x: 400,
                y: 400,
                z: 400
            });

            modelEntity.setAttribute('rotation', {
                x: 0,
                y: 0,
                z: 0
            })

            modelEntity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            })

            document.querySelector("a-scene").appendChild(modelEntity);
        }
        testEntityAdded = true;
    });
};

const closeAr = () => {
    window.close();
}

const resetView = () => {
    console.log("reseting view...");
    // Disable the controls
    document.querySelector("a-camera").setAttribute("look-controls", "enabled", false);
    document.querySelector("a-camera").setAttribute("wasd-controls", "enabled", false);
}

