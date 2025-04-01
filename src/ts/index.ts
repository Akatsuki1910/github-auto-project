// ... (Existing code)
const calculateConeVolumeButton = document.getElementById('calculate-cone-volume') as HTMLButtonElement;
calculateConeVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:', '1'));
    const height = parseFloat(prompt('Enter the height:', '1'));
    if (isNaN(radius) || isNaN(height)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const volume = (1 / 3) * math.pi * Math.pow(radius, 2) * height;
    display.value = volume.toString();
});
// ... (Rest of the code)