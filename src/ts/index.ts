// ... (Existing code)
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.PI.toString();
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.E.toString();
});
const tenToThePowerXButton = document.getElementById('ten-to-the-power-x') as HTMLButtonElement;
tenToThePowerXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    }
});
// ... (Rest of the code)