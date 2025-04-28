// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const signChangeButton = document.getElementById('sign-change');
// ... (Existing event listeners)
signChangeButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});
// ... (Rest of the existing code)