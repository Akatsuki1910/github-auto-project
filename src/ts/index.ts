// ... (Existing code)
const calculateRangeButton = document.getElementById('range') as HTMLButtonElement;
calculateRangeButton.addEventListener('click', () => {
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
    const range = numbers[numbers.length - 1] - numbers[0];
    display.value = range.toString();
});
// ... (Rest of the code)