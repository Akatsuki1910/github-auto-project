// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue % 1).toString();
    } catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)