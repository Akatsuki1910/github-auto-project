// ... (Existing code)
const calculateSphereVolumeButton = document.getElementById('calculate-sphere-volume') as HTMLButtonElement;
calculateSphereVolumeButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the sphere:') || '0');
    display.value = (4/3 * Math.PI * Math.pow(radius, 3)).toString();
});