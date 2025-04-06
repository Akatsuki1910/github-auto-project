// ... (Existing code)
const minArrayButton = document.getElementById('min-array') as HTMLButtonElement;
minArrayButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
        return;
    }
    display.value = Math.min(...numbers).toString();
});
// ... (Rest of the code)