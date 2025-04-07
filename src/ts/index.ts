// ... (Existing code)
const calculateConeVolumeButton = document.getElementById('calculate-cone-volume') as HTMLButtonElement;
calculateConeVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    const height = parseFloat(prompt('Enter the height:') || '0');
    if (isNaN(radius) || isNaN(height)) {
        display.value = 'Error';
    }
    else {
        display.value = (Math.PI * radius * radius * height / 3).toString();
    }
});
// ... (Rest of the code)