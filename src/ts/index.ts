// ... (Existing code)
const signChangeButton = document.getElementById('sign-change');
const display = document.getElementById('display') as HTMLInputElement;
signChangeButton?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        display.value = (-num).toString();
    }
});
// ... (Rest of the existing code)