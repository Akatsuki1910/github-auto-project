// ... (Existing code)
const duplicateButton = document.getElementById('duplicate');
if (duplicateButton) {
    duplicateButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = display.value + display.value;
    });
}
// ... (Existing code)