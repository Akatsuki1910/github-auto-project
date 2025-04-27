// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const powerOfTenButton = document.getElementById('powerOfTen');
// ... (Existing event listeners)
powerOfTenButton?.addEventListener('click', () => {
    const num = parseFloat(prompt('Enter the exponent:') || '0');
    const result = Math.pow(10, num);
    display.value = result.toString();
});
// ... (Rest of the existing code)