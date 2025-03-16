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
// ... existing toggle functions
// ... existing event listeners
// ... existing code