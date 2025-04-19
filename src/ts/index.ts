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
    const lnButton = document.getElementById('ln');
    lnButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.log(num).toString();
    });
    const eButton = document.getElementById('e');
    eButton.addEventListener('click', () => {
        display.value = Math.E.toString();
    });
    const cubeButton = document.getElementById('cube');
    cubeButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.pow(num, 3).toString();
    });
    // ... (Existing code)
});