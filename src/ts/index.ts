// ... (Existing code)
const calculateSumButton = document.getElementById('calculate-sum') as HTMLButtonElement;
calculateSumButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num1 = parseFloat(prompt('Enter the first number:') || '0');
    const num2 = parseFloat(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num1 + num2).toString();
});
const calculateProductButton = document.getElementById('calculate-product') as HTMLButtonElement;
calculateProductButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num1 = parseFloat(prompt('Enter the first number:') || '0');
    const num2 = parseFloat(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num1 * num2).toString();
});
const calculateDifferenceButton = document.getElementById('calculate-difference') as HTMLButtonElement;
calculateDifferenceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const num1 = parseFloat(prompt('Enter the first number:') || '0');
    const num2 = parseFloat(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error: Invalid input';
        return;
    }
    display.value = (num1 - num2).toString();
});
// ... (Rest of the code)