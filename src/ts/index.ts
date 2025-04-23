// ... (Existing code)
const powerOfTenButton = document.getElementById('powerOfTen');
powerOfTenButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        const result = math.pow(10, Number(currentValue));
        display.value = result.toString();
    }
});
//rest of code