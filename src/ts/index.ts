// ... (Existing code)
// ... existing variables and functions
// ... existing filters
// ... existing functions
// ... existing buttons
// ... existing toggle functions
// ... existing functions for month, year, etc.
// ... existing functions
//Toggle Current Location
const toggleCurrentLocationButton = document.getElementById('toggle-current-location') as HTMLButtonElement;
toggleCurrentLocationButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        display.value = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
    }, (error) => {
        display.value = `Error getting location: ${error.message}`;
    });
});
//Toggle Current Location with Accuracy
const toggleCurrentLocationAccuracyButton = document.getElementById('current-location-accuracy') as HTMLButtonElement;
toggleCurrentLocationAccuracyButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        display.value = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}, Accuracy: ${position.coords.accuracy}`;
    }, (error) => {
        display.value = `Error getting location: ${error.message}`;
    });
});
//Toggle Current Location with High Accuracy
const toggleCurrentLocationHighAccuracyButton = document.getElementById('current-location-high-accuracy') as HTMLButtonElement;
toggleCurrentLocationHighAccuracyButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        display.value = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}, Accuracy: ${position.coords.accuracy}`;
    }, (error) => {
        display.value = `Error getting location: ${error.message}`;
    }, { enableHighAccuracy: true });
});
const watchPositionButton = document.getElementById('watch-position') as HTMLButtonElement;
let watchId = null;
watchPositionButton.addEventListener('click', () => {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
        display.value = "Stopped watching position.";
    }
    else {
        watchId = navigator.geolocation.watchPosition((position) => {
            display.value = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}, Accuracy: ${position.coords.accuracy}`;
        }, (error) => {
            display.value = `Error getting location: ${error.message}`;
        });
        display.value = "Started watching position.";
    }
});
// ... existing toggle functions
// ... existing event listeners
// ... existing code