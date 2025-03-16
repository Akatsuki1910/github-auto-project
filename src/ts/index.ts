// ... (Existing code)
const reverseGeocodingButton = document.getElementById('reverse-geocoding') as HTMLButtonElement;
reverseGeocodingButton.addEventListener('click', () => {
    const lat = prompt("Enter latitude:");
    const lng = prompt("Enter longitude:");
    if (lat && lng) {
        const geocoder = new google.maps.Geocoder();
        const latlng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
        geocoder.geocode({ 'location': latlng }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                display.value = results[0].formatted_address;
            } else {
                display.value = `Reverse geocoding failed: ${status}`;
            }
        });
    }
});