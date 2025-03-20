// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value += '%';
    }
});
// ... (Existing Code)