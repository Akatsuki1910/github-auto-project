// ... (Existing code)
const baseConverterButton = document.getElementById('base-converter') as HTMLButtonElement;
baseConverterButton?.addEventListener('click', () => {
    const number = prompt('Enter the number to convert:', display.value);
    const fromBase = parseInt(prompt('Enter the source base:', '10') || '10');
    const toBase = parseInt(prompt('Enter the target base:', '2') || '2');
    if (isNaN(fromBase) || isNaN(toBase) || isNaN(parseFloat(number))) {
        display.value = 'Invalid input';
        return;
    }
    try {
        const convertedNumber = math.baseToString(math.parse(number).evaluate(), toBase, fromBase);
        display.value = convertedNumber.toString();
    } catch (error) {
        display.value = 'Invalid input';
    }
});
//...(rest of the code)