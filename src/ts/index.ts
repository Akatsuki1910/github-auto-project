// ... (Existing code)
const calculateFactorialButton = document.getElementById('calculate-factorial') as HTMLButtonElement;
calculateFactorialButton.addEventListener('click', () => {
    const value = parseInt(prompt('Enter the value for factorial:') || '0');
    if (isNaN(value) || value < 0) {
        alert('Invalid input for factorial. Please enter a non-negative integer.');
        return;
    }
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    display.value = result.toString();
});