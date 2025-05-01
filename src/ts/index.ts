// ... (Existing code)
const calculateVolumeOfCylinderButton = document.getElementById('calculate-volume-of-cylinder') as HTMLButtonElement;
calculateVolumeOfCylinderButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter radius:'));
    const height = parseFloat(prompt('Enter height:'));
    if (!isNaN(radius) && !isNaN(height)) {
        const volume = Math.PI * Math.pow(radius, 2) * height;
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)