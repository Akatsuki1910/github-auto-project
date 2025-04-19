// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    const roundButton = document.getElementById('round');
    roundButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.round(num).toString();
    });
    // ... (Existing code)
});