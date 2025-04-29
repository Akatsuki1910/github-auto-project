// ... (Existing code)
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value + display.value;
});
// ... (Rest of the existing code)