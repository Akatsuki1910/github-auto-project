// ... (Existing code)
const calculateCubeVolumeButton = document.getElementById('calculate-cube-volume') as HTMLButtonElement;
calculateCubeVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const side = parseFloat(prompt('Enter the side length:') || '0');
        display.value = Math.pow(side, 3).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)