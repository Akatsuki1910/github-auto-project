// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    // ... (Existing code)
    const inverseButton = document.getElementById('inverse');
    inverseButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        if (num !== 0) {
            display.value = (1 / num).toString();
        }
        else {
            display.value = "Error: Division by zero";
        }
    });
    // ... Existing code
});