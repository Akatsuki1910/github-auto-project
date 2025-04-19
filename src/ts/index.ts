// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    const tenPowerButton = document.getElementById('ten-power');
    tenPowerButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.pow(10, num).toString();
    });
    // ... (Existing code)
});