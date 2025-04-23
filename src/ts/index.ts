// ... (Existing code)
const expButton = document.getElementById('exp');
expButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = math.exp(Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code