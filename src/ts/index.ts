// ... (Existing code)
const calculateStandardDeviationButton = document.getElementById('calculate-standard-deviation') as HTMLButtonElement;
calculateStandardDeviationButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numCount = parseInt(prompt('Enter the number of values:', '0') || '0', 10);
    if (isNaN(numCount) || numCount <= 0) {
        display.value = 'Error: Invalid input';
        return;
    }
    const numbers: number[] = [];
    for (let i = 0; i < numCount; i++) {
        const num = parseFloat(prompt(`Enter number ${i + 1}:`, '0') || '0');
        if (isNaN(num)) {
            display.value = 'Error: Invalid input';
            return;
        }
        numbers.push(num);
    }
    const n = numbers.length;
    const mean = numbers.reduce((sum, num) => sum + num, 0) / n;
    const variance = numbers.reduce((sum, num) => sum + (num - mean) ** 2, 0) / n;
    const standardDeviation = Math.sqrt(variance);
    display.value = standardDeviation.toString();
});
// ... (Rest of the code)