// ... (Existing code)
const calculateSphereVolumeButton = document.getElementById('calculate-sphere-volume') as HTMLButtonElement;
calculateSphereVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    if (isNaN(radius)) {
        display.value = 'Error';
    }
    else {
        display.value = (4 / 3 * Math.PI * Math.pow(radius, 3)).toString();
    }
});
// ... (Rest of the code)