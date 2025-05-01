// ... (Existing code)
const calculateVolumeOfConeButton = document.getElementById('calculate-volume-of-cone') as HTMLButtonElement;
calculateVolumeOfConeButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter radius:'));
    const height = parseFloat(prompt('Enter height:'));
    if (!isNaN(radius) && !isNaN(height)) {
        const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)