// ... (Existing code)
const log10Button = document.getElementById('log10');
log10Button?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue && Number(currentValue) > 0) {
        const result = math.log10(Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code