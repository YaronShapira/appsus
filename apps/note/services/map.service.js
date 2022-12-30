export const mapService = {
    initMap,
    getCurrPos,
}

function initMap(mapRef, pos) {
    const map = new google.maps.Map(mapRef, {
        center: {
            lat: pos.lat,
            lng: pos.lng,
        },
        zoom: 15,
    })
    var laLatLng = new google.maps.LatLng(pos.lat, pos.lng)
    new google.maps.Marker({
        position: laLatLng,
        map,
    })
}

function getCurrPos() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            return resolve({ lat: position.coords.latitude, lng: position.coords.longitude })
        })
    })
}
