// ... (Existing code)
const squareRootButton = document.getElementById('square-root');
const display = document.getElementById('display') as HTMLInputElement;
squareRootButton?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (!isNaN(num) && num >= 0) {
        display.value = Math.sqrt(num).toString();
    }
});
const calculateDiscountButton = document.getElementById('calculate-discount');

calculateDiscountButton?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        const discount = num * 0.10;
        display.value = (num - discount).toFixed(2).toString();
    }
});
const clearDisplayButton = document.getElementById('clear-display');

clearDisplayButton?.addEventListener('click', () => {
    display.value = '';
});
const doubleButton = document.getElementById('double');
doubleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 2).toString();
    }
});
const tripleButton = document.getElementById('triple');
tripleButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 3).toString();
    }
});
const halfButton = document.getElementById('half');
halfButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 2).toString();
    }
});

// ... (Rest of the existing code)