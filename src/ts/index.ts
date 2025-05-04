// ... (Existing code)
const calculateSumButton = document.getElementById('calculate-sum') as HTMLButtonElement;
calculateSumButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    if (display.value) {
        try {
            const numbers = display.value.split(',').map(Number);
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            display.value = sum.toString();
            currentExpressionDisplay.textContent = '';
        } catch (error) {
            display.value = 'Error';
            currentExpressionDisplay.textContent = '';
        }
    }
});

const nthPowerButton = document.getElementById('nth-power') as HTMLButtonElement;
nthPowerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    if (display.value) {
        try {
            currentExpressionDisplay.textContent = display.value + '^';
            display.value = '';
            const powerInput = prompt('Enter the power (n):');
            if (powerInput !== null) {
                const n = parseFloat(powerInput);
                const num = parseFloat(currentExpressionDisplay.textContent.slice(0, -1));
                const result = math.pow(num, n);
                display.value = result.toString();
                currentExpressionDisplay.textContent = '';
            }
        } catch (error) {
            display.value = 'Error';
            currentExpressionDisplay.textContent = '';
        }
    }
});
// ... (Rest of existing code)