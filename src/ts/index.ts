// ... (Existing code)
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue === 0) {
            display.value = "Cannot divide by zero";
        } else {
            display.value = (1 / currentValue).toString();
        }
    } catch (error) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)