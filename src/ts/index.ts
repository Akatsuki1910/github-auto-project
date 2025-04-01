// ... (Existing code)
const calculateRectangularPrismVolumeButton = document.getElementById('calculate-rectangular-prism-volume') as HTMLButtonElement;
calculateRectangularPrismVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const length = parseFloat(prompt('Enter the length:', '1'));
    const width = parseFloat(prompt('Enter the width:', '1'));
    const height = parseFloat(prompt('Enter the height:', '1'));
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const volume = length * width * height;
    display.value = volume.toString();
});
// ... (Rest of the code)