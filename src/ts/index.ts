// ... (Existing code)
const randomIntegerButton = document.getElementById('random-integer') as HTMLButtonElement;
randomIntegerButton?.addEventListener('click', () => {
    const min = parseFloat(prompt('Enter the minimum value:', '0') || '0');
    const max = parseFloat(prompt('Enter the maximum value:', '100') || '100');
    if (isNaN(min) || isNaN(max)) {
        display.value = 'Invalid input';
        return;
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    display.value = randomNumber.toString();
});
//...(rest of the code)