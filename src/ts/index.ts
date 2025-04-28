// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const truncButton = document.getElementById('trunc');
// ... (Existing event listeners)
truncButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.trunc(currentValue).toString();
});
// ... (Rest of the existing code)