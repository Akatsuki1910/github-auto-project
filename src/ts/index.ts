// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const randomButton = document.getElementById('random');
const doubleButton = document.getElementById('double');
const tripleButton = document.getElementById('triple');
const halfButton = document.getElementById('half');
const squaredButton = document.getElementById('squared');
const cubedButton = document.getElementById('cubed');
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
halfButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 0.5).toString();
    }
});
squaredButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue).toString();
    }
});
cubedButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue * currentValue).toString();
    }
});
// ... (Rest of the existing code)