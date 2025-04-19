// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
window.addEventListener('load', () => {
    // ... (Existing code)
    const powerOfTwoButton = document.getElementById('power-of-two');
    powerOfTwoButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.pow(2, num).toString();
    });
    // ... (Other existing code)
});