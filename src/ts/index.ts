// ... (Existing code)
const calculateCylinderVolumeButton = document.getElementById('calculate-cylinder-volume') as HTMLButtonElement;
calculateCylinderVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:', '1'));
    const height = parseFloat(prompt('Enter the height:', '1'));
    if (isNaN(radius) || isNaN(height)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const volume = math.pi * radius * radius * height;
    display.value = volume.toString();
});
// ... (Rest of the code)