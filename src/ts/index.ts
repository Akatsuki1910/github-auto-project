// ... (Existing code)
const calculateSumOfSquaresButton = document.getElementById('sum-of-squares') as HTMLButtonElement;
calculateSumOfSquaresButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numCount = parseInt(prompt('Enter the number of values:', '0') || '0', 10);
    if (isNaN(numCount) || numCount <= 0) {
        display.value = 'Error: Invalid input';
        return;
    }
    let sumOfSquares = 0;
    for (let i = 0; i < numCount; i++) {
        const num = parseFloat(prompt(`Enter number ${i + 1}:`, '0') || '0');
        if (isNaN(num)) {
            display.value = 'Error: Invalid input';
            return;
        }
        sumOfSquares += num * num;
    }
    display.value = sumOfSquares.toString();
});
// ... (Rest of the code)