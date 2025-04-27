// ... (Existing code)
const calculateDiscountButton = document.getElementById('calculate-discount');
const display = document.getElementById('display') as HTMLInputElement;

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

// ... (Rest of the existing code)