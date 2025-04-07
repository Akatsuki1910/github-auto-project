// ... (Existing code)
const calculateAreaButton = document.getElementById('calculate-area') as HTMLButtonElement;
calculateAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const sideLength = parseFloat(display.value);
        display.value = (sideLength * sideLength).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
const calculateCircumferenceButton = document.getElementById('calculate-circumference') as HTMLButtonElement;
calculateCircumferenceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const radius = parseFloat(display.value);
        display.value = (2 * Math.PI * radius).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
const calculateVolumeButton = document.getElementById('calculate-volume') as HTMLButtonElement;
calculateVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const sideLength = parseFloat(display.value);
        display.value = (sideLength * sideLength * sideLength).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
const calculateSphereVolumeButton = document.getElementById('calculate-sphere-volume') as HTMLButtonElement;
calculateSphereVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const radius = parseFloat(display.value);
        display.value = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)