// ... (Existing code)
const toDegreesButton = document.getElementById('toDegrees');
todegreesButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = (Number(currentValue) * (180 / Math.PI)).toString();
    }
});
const toRadiansButton = document.getElementById('toRadians');
toradiansButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = (Number(currentValue) * (Math.PI / 180)).toString();
    }
});
const powerOfTenButton = document.getElementById('powerOfTen');
powerOfTenButton?.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        display.value = Math.pow(10, Number(currentValue)).toString();
    }
});
//rest of code