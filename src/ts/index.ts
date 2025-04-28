// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const powerOfTenButton = document.getElementById('powerOfTen');
const inverseButton = document.getElementById('inverse');
const sinButton = document.getElementById('sin');
const cosButton = document.getElementById('cos');
const tanButton = document.getElementById('tan');
const log10Button = document.getElementById('log10');
const cubeButton = document.getElementById('cube');
const modButton = document.getElementById('mod');
// ... (Existing event listeners)
modButton?.addEventListener('click', () => {
    const num1 = parseFloat(prompt('Enter the first number:') || '0');
    const num2 = parseFloat(prompt('Enter the second number:') || '0');
    const result = num1 % num2;
    display.value = result.toString();
});
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
log10Button?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (currentValue <= 0) {
        display.value = "Invalid input for log10";
    }
    else {
        display.value = Math.log10(currentValue).toString();
    }
});
cubeButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(currentValue, 3).toString();
});
// ... (Rest of the existing code)