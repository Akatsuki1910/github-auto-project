// ... (Existing code)
const toDegreesButton = document.getElementById('toDegrees');
todegreesButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = (Number(currentValue) * (180 / Math.PI)).toString();
    }
});
//rest of code