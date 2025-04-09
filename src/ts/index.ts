// ... (Existing code)
const calculateSumOfSquaresButton = document.getElementById('calculate-sum-of-squares') as HTMLButtonElement;
calculateSumOfSquaresButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:');
    if (numbersString) {
        const numbers = numbersString.split(',').map(Number);
        const sumOfSquares = numbers.reduce((acc, curr) => acc + curr * curr, 0);
        display.value = sumOfSquares.toString();
    }
});
// ... (Rest of the code)