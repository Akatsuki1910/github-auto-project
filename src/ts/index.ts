// ... (Existing code)
const calculateCylinderVolumeButton = document.getElementById('calculate-cylinder-volume') as HTMLButtonElement;
calculateCylinderVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const radius = parseFloat(prompt('Enter the radius:') || '0');
        const height = parseFloat(prompt('Enter the height:') || '0');
        display.value = (Math.PI * Math.pow(radius, 2) * height).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)