// ... (Existing code)
const absButton = document.getElementById('abs');
absButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = math.abs(Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code