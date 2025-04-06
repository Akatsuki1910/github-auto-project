// ... (Existing code)
const maxArrayButton = document.getElementById('max-array') as HTMLButtonElement;
maxArrayButton.addEventListener('click', () => {
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