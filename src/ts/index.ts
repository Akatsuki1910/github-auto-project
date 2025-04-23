// ... (Existing code)
const roundButton = document.getElementById('round');
roundButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = Math.round(Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code