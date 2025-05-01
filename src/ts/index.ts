// ... (Existing code)
const calculateVolumeOfSphereButton = document.getElementById('calculate-volume-of-sphere') as HTMLButtonElement;
calculateVolumeOfSphereButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter radius:'));
    if (!isNaN(radius)) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)