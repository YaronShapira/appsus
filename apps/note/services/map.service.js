export const mapService = {
    initMap,
    loadMap,
    getCurrPos,
}


function _connectGoogleApi() {
    return Promise.resolve()
    if (typeof google === 'object' && typeof google.maps === 'object') return Promise.resolve()
    if (window.google) return Promise.resolve()
    console.log('LOADING')
    const API_KEY = 'AIzaSyB5mXoA76shI6CK3DmGjZi3M4PMn7YX4WA'
    elGoogleApi = document.createElement('script')
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
    elGoogleApi.async = true
    document.body.append(elGoogleApi)
    IS_LOADED_GOOGLE = true

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}

function initMap(mapRef, pos) {
    return _connectGoogleApi().then(() => {
        console.log(pos)
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
            title: 'Hello World!',
        })

        // navigator.geolocation.getCurrentPosition(position => {
        //     console.log(position)
        //     console.log(position.coords.latitude)
        //     console.log(position.coords.longitude)
        //
        //     console.log(laLatLng)
        //     map.panTo(laLatLng)
    })
}

function getCurrPos() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            return resolve({ lat: position.coords.latitude, lng: position.coords.longitude })
        })
    })
}
function loadMap(mapRef, lat, lng) {
    return _connectGoogleApi().then(() => {
        const map = new google.maps.Map(mapRef, {
            center: {
                lat,
                lng,
            },
            zoom: 15,
        })
    })
}

function handleLocationError() {
    console.log('MAP ERROR!')
}
