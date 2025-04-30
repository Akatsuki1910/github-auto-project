// ... (Existing code)
const gcdButton = document.getElementById('gcd') as HTMLButtonElement;
gcdButton.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue) {
        try {
            const numbers = currentValue.split(',').map(Number);
            if (numbers.length === 2) {
                const result = math.gcd(numbers[0], numbers[1]);
                display.value = result.toString();
            }
            else {
                display.value = 'Error: Enter two numbers separated by a comma.';
            }
        }
        catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)