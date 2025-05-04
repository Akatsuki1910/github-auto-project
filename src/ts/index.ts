// ... (Existing code)
const degToRadButton = document.getElementById('degToRad') as HTMLButtonElement;
degToRadButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        display.value = (num * Math.PI / 180).toString();
    }
});
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.random().toString();
});
const roundToDecimalButton = document.getElementById('round-to-decimal') as HTMLButtonElement;
roundToDecimalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        display.value = num.toFixed(2);
    }
});
// ... (Rest of existing code)