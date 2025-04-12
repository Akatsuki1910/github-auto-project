// ... (Existing code)
const calculateCylinderVolumeButton = document.getElementById('calculate-cylinder-volume') as HTMLButtonElement;
calculateCylinderVolumeButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the cylinder:') || '0');
    const height = parseFloat(prompt('Enter the height of the cylinder:') || '0');
    display.value = (Math.PI * radius * radius * height).toString();
});