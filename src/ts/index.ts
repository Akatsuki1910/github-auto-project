// ... (Existing code)
const maxButton = document.getElementById('max') as HTMLButtonElement;
maxButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
        return;
    }
    display.value = Math.max(...numbers).toString();
});
// ... (Rest of the code)