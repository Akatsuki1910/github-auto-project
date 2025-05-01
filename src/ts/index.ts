// ... (Existing code)
const calculateVolumeOfPrismButton = document.getElementById('calculate-volume-of-prism') as HTMLButtonElement;
calculateVolumeOfPrismButton.addEventListener('click', () => {
    const baseArea = parseFloat(prompt('Enter base area:') || '0');
    const height = parseFloat(prompt('Enter height:') || '0');
    if (!isNaN(baseArea) && !isNaN(height)) {
        const volume = baseArea * height;
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)