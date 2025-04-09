// ... (Existing code)
const calculateSquareOfSumButton = document.getElementById('calculate-square-of-sum') as HTMLButtonElement;
calculateSquareOfSumButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:');
    if (numbersString) {
        const numbers = numbersString.split(',').map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const squareOfSum = sum * sum;
        display.value = squareOfSum.toString();
    }
});
// ... (Rest of the code)