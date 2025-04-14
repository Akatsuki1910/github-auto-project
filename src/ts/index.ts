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
    }
    else {
        display.value = 'Error';
    }
});
const asinButton = document.getElementById('asin') as HTMLButtonElement;
asinButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        let result = Math.asin(currentValue);
        if (!isRadians) {
            result = result * 180 / Math.PI;
        }
        display.value = result.toString();
    }
    else {
        display.value = 'Error';
    }
});
const atanButton = document.getElementById('atan') as HTMLButtonElement;
atanButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        let result = Math.atan(currentValue);
        if (!isRadians) {
            result = result * 180 / Math.PI;
        }
        display.value = result.toString();
    }
    else {
        display.value = 'Error';
    }
});
const atanhButton = document.getElementById('atanh') as HTMLButtonElement;
atanhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.atanh(currentValue);
        display.value = result.toString();
    }
    else {
        display.value = 'Error';
    }
});