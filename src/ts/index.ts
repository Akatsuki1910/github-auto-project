// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
powerButton.addEventListener('click', () => {
    display.value += '**';
});
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.pow(currentValue, 3);
        display.value = result.toString();
    }
});
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    display.value += Math.PI;
});
