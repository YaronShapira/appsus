// export const { mapService } = {
//     initMap,
// }

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyB5mXoA76shI6CK3DmGjZi3M4PMn7YX4WA'
    var elGoogleApi = document.createElement('script')
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
    elGoogleApi.async = true
    document.body.append(elGoogleApi)

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}

export default function initMap(mapRef, lat = 32.0749831, lng = 34.9120554) {
    return _connectGoogleApi().then(() => {
        // navigator.geolocation.getCurrentPosition(position => {
        //     gMap.panTo(lat, lng)
        // }, handleLocationError)
        new google.maps.Map(mapRef, {
            center: {
                lat,
                lng,
            },
            zoom: 15,
        })
    })
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng)
    gMap.panTo(laLatLng)
}
