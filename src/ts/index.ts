// ... (Existing code)
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    const currentValue = display.value;
    display.value = currentValue + currentValue;
});
// ... (Rest of existing code)