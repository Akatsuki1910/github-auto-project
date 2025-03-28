// ... (Existing code)
const calculateFactorialButton = document.getElementById('calculate-factorial') as HTMLButtonElement;
calculateFactorialButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Invalid input';
        return;
    }
    const factorial = (n) => {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    };
    display.value = factorial(Math.floor(number)).toString();
});
const binaryToDecimalButton = document.getElementById('binary-to-decimal') as HTMLButtonElement;
binaryToDecimalButton?.addEventListener('click', () => {
    const binaryString = display.value;
    if (!/^[01]+$/.test(binaryString)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = parseInt(binaryString, 2).toString();
});
const decimalToBinaryButton = document.getElementById('decimal-to-binary') as HTMLButtonElement;
decimalToBinaryButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.floor(number).toString(2);
});
const invertButton = document.getElementById('invert') as HTMLButtonElement;
invertButton?.addEventListener('click', () => {
    document.body.classList.toggle('invert-colors');
});
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton?.addEventListener('click', () => {
    display.value = ''; // Clear the current entry
});
const calculateLog10Button = document.getElementById('calculate-log10') as HTMLButtonElement;
calculateLog10Button?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.log10(number).toString();
});
//...(rest of the code)