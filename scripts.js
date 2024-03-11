window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);

            // Add a box to the north of the initial GPS position
            const entity = document.createElement("a-box");
            entity.setAttribute("scale", {
                x: 20,
                y: 20,
                z: 20
            });
            entity.setAttribute('material', { color: 'red' });
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);

            // set lat and lang of text example
            const textEntity = document.createElement('a-text');

            textEntity.setAttribute('value', "This will always face the user.");

            textEntity.setAttribute('look-at', "[gps-new-camera]");

            textEntity.setAttribute('scale', {
                x: 75,
                y: 75,
                z: 75
            });

            textEntity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            })

            document.querySelector("a-scene").appendChild(textEntity);

            // model
            const modelEntity = document.createElement('a-entity');

            modelEntity.setAttribute('gltf-model', './assets/laptop/laptop.glb');

            modelEntity.setAttribute('scale', {
                x: 600,
                y: 600,
                z: 600
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

    
}