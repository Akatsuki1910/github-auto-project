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
    // ... (Other existing code)
    const expm1Button = document.getElementById('expm1');
    expm1Button.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.expm1(num).toString();
    });
    const cbrtButton = document.getElementById('cbrt');
    cbrtButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.cbrt(num).toString();
    });
    const sinButton = document.getElementById('sin');
    sinButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.sin(num).toString();
    });
});