// ... (Existing code)
const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = (parseFloat(currentValue) * -1).toString();
    }
});
// ... (Existing Code)