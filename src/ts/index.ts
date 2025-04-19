// ... (Existing code)
let memoryValue = 0;
let currentExpression = '';
let lastAnswer = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const powerOfTwoButton = document.getElementById('power-of-two');
    powerOfTwoButton.addEventListener('click', () => {
        const num = parseFloat(display.value);
        display.value = Math.pow(2, num).toString();
        lastAnswer = parseFloat(display.value);
    });
    const ansButton = document.getElementById('ans');
    ansButton.addEventListener('click', () => {
        display.value = lastAnswer.toString();
    });
    // ... (Other existing code)
});