// ... (Existing code)
const log2Button = document.getElementById('log2') as HTMLButtonElement;
log2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const result = Math.log2(value);
    display.value = result.toString();
});
// ... (Rest of the code)