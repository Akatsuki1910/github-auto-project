// ... (Existing code)
const calculateCylinderVolumeButton = document.getElementById('calculate-cylinder-volume') as HTMLButtonElement;
calculateCylinderVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    const height = parseFloat(prompt('Enter the height:') || '0');
    if (isNaN(radius) || isNaN(height)) {
        display.value = 'Error';
    } else {
        display.value = (Math.PI * radius * radius * height).toString();
    }
});
// ... (Rest of the code)