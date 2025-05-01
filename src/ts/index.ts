// ... (Existing code)
const squaredNegativeButton = document.getElementById('squared_negative') as HTMLButtonElement;
squaredNegativeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-Math.pow(currentValue,2)).toString();
    }
});
const tripleButton = document.getElementById('triple') as HTMLButtonElement;
tripleButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 3).toString();
    }
});
const halfButton = document.getElementById('half') as HTMLButtonElement;
halfButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 2).toString();
    }
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value = Math.E.toString();
});
// ... (Rest of existing code)