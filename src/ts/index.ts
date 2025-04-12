// ... (Existing code)
const calculateConeVolumeButton = document.getElementById('calculate-cone-volume') as HTMLButtonElement;
calculateConeVolumeButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the cone:') || '0');
    const height = parseFloat(prompt('Enter the height of the cone:') || '0');
    display.value = (1/3 * Math.PI * radius * radius * height).toString();
});