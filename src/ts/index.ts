// ... (Existing code)
const calculateMedianButton = document.getElementById('median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
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
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
        display.value = ((numbers[mid - 1] + numbers[mid]) / 2).toString();
    }
    else {
        display.value = numbers[mid].toString();
    }
});
// ... (Rest of the code)