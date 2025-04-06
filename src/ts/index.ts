// ... (Existing code)
const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
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