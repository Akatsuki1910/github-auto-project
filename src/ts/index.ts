// ... (Existing code)
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const num = parseFloat(currentValue);
        display.value = Math.sign(num).toString();
    }
});
// ... (Existing Code)