// ... (Existing code)
const calculatePyramidVolumeButton = document.getElementById('calculate-pyramid-volume') as HTMLButtonElement;
calculatePyramidVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const baseArea = parseFloat(prompt('Enter the base area:', '1'));
    const height = parseFloat(prompt('Enter the height:', '1'));
    if (isNaN(baseArea) || isNaN(height)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const volume = (1/3) * baseArea * height;
    display.value = volume.toString();
});
// ... (Rest of the code)