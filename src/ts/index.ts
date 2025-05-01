// ... (Existing code)
const calculateVolumeOfPyramidButton = document.getElementById('calculate-volume-of-pyramid') as HTMLButtonElement;
calculateVolumeOfPyramidButton.addEventListener('click', () => {
    const baseArea = parseFloat(prompt('Enter base area:') || '0');
    const height = parseFloat(prompt('Enter height:') || '0');
    if (!isNaN(baseArea) && !isNaN(height)) {
        const volume = (1/3) * baseArea * height;
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)