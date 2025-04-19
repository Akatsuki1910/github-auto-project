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
    // ... (Existing code)
});