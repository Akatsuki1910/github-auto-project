// ... (Existing code)
const calculateSphereVolumeButton = document.getElementById('calculate-sphere-volume') as HTMLButtonElement;
calculateSphereVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:', '1'));
    if (isNaN(radius)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const volume = (4 / 3) * math.pi * Math.pow(radius, 3);
    display.value = volume.toString();
});
// ... (Rest of the code)