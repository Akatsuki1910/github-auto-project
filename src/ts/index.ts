// ... (Existing code)
const minButton = document.getElementById('min') as HTMLButtonElement;
minButton.addEventListener('click', () => {
    const num1 = parseInt(prompt('Enter the first number:') || '0');
    const num2 = parseInt(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.min(num1, num2).toString();
});