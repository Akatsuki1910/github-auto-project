// ... (Existing code)
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
let isRadians = true;
degRadButton.addEventListener('click', () => {
    isRadians = !isRadians;
    degRadButton.textContent = isRadians ? 'Deg' : 'Rad';
});
const acosButton = document.getElementById('acos') as HTMLButtonElement;
acosButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        let result = Math.acos(currentValue);
        if (!isRadians) {
            result = result * 180 / Math.PI;
        }
        display.value = result.toString();
    } else {
        display.value = 'Error';
    }
});