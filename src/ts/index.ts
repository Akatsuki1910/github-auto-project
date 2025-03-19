// ... (Existing code)
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        if (num === 0) {
            display.value = "Error: Division by zero";
        } else {
            display.value = (1 / num).toString();
        }
    }
});