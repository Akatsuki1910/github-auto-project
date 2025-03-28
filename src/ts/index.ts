// ... (Existing code)
const hexConverterButton = document.getElementById('hex-converter') as HTMLButtonElement;
hexConverterButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = number.toString(16);
});
//...(rest of the code)