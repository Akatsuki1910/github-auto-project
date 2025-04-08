// ... (Existing code)
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numCount = parseInt(prompt('Enter the number of values:', '0') || '0', 10);
    if (isNaN(numCount) || numCount <= 0) {
        display.value = 'Error: Invalid input';
        return;
    }
    const numbers = [];
    for (let i = 0; i < numCount; i++) {
        const num = parseFloat(prompt(`Enter number ${i + 1}:`, '0') || '0');
        if (isNaN(num)) {
            display.value = 'Error: Invalid input';
            return;
        }
        numbers.push(num);
    }
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    const mid = Math.floor(n / 2);
    const median = n % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
    display.value = median.toString();
});
// ... (Rest of the code)