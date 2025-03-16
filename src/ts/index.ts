// ... (Existing code)
const geocodingButton = document.getElementById('geocoding') as HTMLButtonElement;
geocodingButton.addEventListener('click', () => {
    const address = prompt("Enter an address for geocoding:");
    if (address) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                const location = results[0].geometry.location;
                display.value = `Lat: ${location.lat()}, Lon: ${location.lng()}`;
            } else {
                display.value = `Geocoding failed: ${status}`;
            }
        });
    }
});