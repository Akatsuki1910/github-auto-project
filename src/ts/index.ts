// ... (Existing code)
const lnButton = document.getElementById('ln');
lnButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue && Number(currentValue) > 0) {
        const result = math.log(Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code