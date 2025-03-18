// ... (Existing code)
const maxButton = document.getElementById('max') as HTMLButtonElement;
maxButton.addEventListener('click', () => {
    const num1 = parseInt(prompt('Enter the first number:') || '0');
    const num2 = parseInt(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.max(num1, num2).toString();
});