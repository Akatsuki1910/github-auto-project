// ... (Existing code)
const gcdButton = document.getElementById('gcd') as HTMLButtonElement;
gcdButton.addEventListener('click', () => {
    const num1 = parseInt(prompt('Enter the first number:') || '0');
    const num2 = parseInt(prompt('Enter the second number:') || '0');
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Invalid input';
        return;
    }
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    display.value = a.toString();
});