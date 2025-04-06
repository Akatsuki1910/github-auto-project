// ... (Existing code)
const minMaxButton = document.getElementById('min-max') as HTMLButtonElement;
minMaxButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = 'Error';
        return;
    }
    display.value = `Min: ${Math.min(...numbers)}, Max: ${Math.max(...numbers)}`;
});
// ... (Rest of the code)