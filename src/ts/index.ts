// ... (Existing code)
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
//...(rest of the code)