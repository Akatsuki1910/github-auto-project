// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const powerOfTenButton = document.getElementById('powerOfTen');
const inverseButton = document.getElementById('inverse');
const sinButton = document.getElementById('sin');
const cosButton = document.getElementById('cos');
const tanButton = document.getElementById('tan');
// ... (Existing event listeners)
powerOfTenButton?.addEventListener('click', () => {
    const num = parseFloat(prompt('Enter the exponent:') || '0');
    const result = Math.pow(10, num);
    display.value = result.toString();
});
inverseButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (currentValue === 0) {
        display.value = "Cannot divide by zero";
    }
    else {
        display.value = (1 / currentValue).toString();
    }
});
sinButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.sin(currentValue).toString();
});
cosButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.cos(currentValue).toString();
});
tanButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.tan(currentValue).toString();
});
// ... (Rest of the existing code)