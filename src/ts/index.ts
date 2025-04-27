// ... (Existing code)
const invertButton = document.getElementById('invert');
const display = document.getElementById('display') as HTMLInputElement;
invertButton?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (!isNaN(num) && num !== 0) {
        display.value = (1 / num).toString();
    }
});
// ... (Rest of the existing code)