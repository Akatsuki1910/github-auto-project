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
    const floorButton = document.getElementById('floor');
    floorButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.floor(num).toString();
    });
    const ceilButton = document.getElementById('ceil');
    ceilButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.ceil(num).toString();
    });
    const randomButton = document.getElementById('random');
    randomButton.addEventListener('click', () => {
        display.value = Math.random().toString();
    });
    // ... (Existing code)
});