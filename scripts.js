window.onload = () => {
    let testEntityAdded = false;
    let modelEntity;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);

            // model
            modelEntity = document.getElementById('myText');

            modelEntity.setAttribute('gps-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude
            })
        }
        testEntityAdded = true;
    });
};
