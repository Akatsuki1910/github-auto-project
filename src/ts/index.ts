// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const truncButton = document.getElementById('trunc');
const duplicateButton = document.getElementById('duplicate');
// ... (Existing event listeners)
truncButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.trunc(currentValue).toString();
});
duplicateButton?.addEventListener('click', () => {
    display.value = display.value + display.value;
});
// ... (Rest of the existing code)