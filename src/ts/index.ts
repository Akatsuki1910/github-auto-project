// ... (Existing code)
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.exp(currentValue).toString();
    } catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)