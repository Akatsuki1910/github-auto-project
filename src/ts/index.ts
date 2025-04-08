// ... (Existing code)
const calculateRemainderButton = document.getElementById('calculate-remainder') as HTMLButtonElement;
calculateRemainderButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num1 = parseFloat(prompt('Enter the first number:') || '0');
    const num2 = parseFloat(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error: Invalid input';
        return;
    }
    if (num2 === 0) {
        display.value = 'Error: Division by zero';
        return;
    }
    display.value = (num1 % num2).toString();
});
// ... (Rest of the code)