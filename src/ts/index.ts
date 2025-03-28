// ... (Existing code)
const fibonacciButton = document.getElementById('fibonacci');
fibonacciButton?.addEventListener('click', () => {
    const n = parseInt(display.value);
    if (isNaN(n) || n < 0) {
        display.value = 'Invalid input';
        return;
    }
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        const temp = a;
        a = b;
        b = temp + b;
    }
    display.value = a.toString();
});
const percentageCalculationButton = document.getElementById('percentage-calculation');
percentageCalculationButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const percentageValue = currentValue / 100;
    display.value = percentageValue.toString();
});
const copyDisplayButton = document.getElementById('copy-display');
copyDisplayButton?.addEventListener('click', () => {
    const displayValue = display.value;
    navigator.clipboard.writeText(displayValue)
        .then(() => {
        alert('Copied to clipboard: ' + displayValue);
    })
        .catch(err => {
        console.error('Failed to copy: ', err);
    });
});
//...(rest of the code)