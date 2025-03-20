// ... (Existing code)
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.sign(currentValue).toString();
    }
});
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.round(currentValue).toString();
    }
});
const truncButton = document.getElementById('trunc') as HTMLButtonElement;
truncButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.trunc(currentValue).toString();
    }
});