// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const powerOfTenButton = document.getElementById('powerOfTen');
const inverseButton = document.getElementById('inverse');
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
// ... (Rest of the existing code)