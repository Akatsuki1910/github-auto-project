// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const randomButton = document.getElementById('random');
const doubleButton = document.getElementById('double');
const tripleButton = document.getElementById('triple');
// ... (Existing event listeners)
randomButton?.addEventListener('click', () => {
    display.value = Math.random().toString();
});
doubleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 2).toString();
    }
});
tripleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 3).toString();
    }
});
// ... (Rest of the existing code)