// ... (Existing code)
const octalConverterButton = document.getElementById('octal-converter') as HTMLButtonElement;
octalConverterButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = number.toString(8);
});
//...(rest of the code)