// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.pow(currentValue,2).toString();
});
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.ceil(currentValue).toString();
});