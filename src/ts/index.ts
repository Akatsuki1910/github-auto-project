// ... (Existing code)
const quarterButton = document.getElementById('quarter') as HTMLButtonElement;
quarterButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num * 0.25).toString();
});
// ... (Rest of the code)