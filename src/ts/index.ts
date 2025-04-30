// ... (Existing code)
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.log10(currentValue).toString();
    } catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)