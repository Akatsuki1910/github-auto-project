// ... (Existing code)
const binaryConverterButton = document.getElementById('binary-converter') as HTMLButtonElement;
binaryConverterButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = number.toString(2);
});
//...(rest of the code)