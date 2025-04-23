// ... (Existing code)
const inverseButton = document.getElementById('inverse');
inverseButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = 1 / Number(currentValue);
        display.value = result.toString();
    }
});
//rest of code