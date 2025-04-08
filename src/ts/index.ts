// ... (Existing code)
const calculateAverageButton = document.getElementById('calculate-average') as HTMLButtonElement;
calculateAverageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numCount = parseInt(prompt('Enter the number of values:', '0') || '0', 10);
    if (isNaN(numCount) || numCount <= 0) {
        display.value = 'Error: Invalid input';
        return;
    }
    let sum = 0;
    for (let i = 0; i < numCount; i++) {
        const num = parseFloat(prompt(`Enter number ${i + 1}:`, '0') || '0');
        if (isNaN(num)) {
            display.value = 'Error: Invalid input';
            return;
        }
        sum += num;
    }
    display.value = (sum / numCount).toString();
});
// ... (Rest of the code)