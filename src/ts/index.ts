// ... (Existing code)
const calculateVarianceButton = document.getElementById('calculate-variance') as HTMLButtonElement;
calculateVarianceButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:');
    if (numbersString) {
        const numbers = numbersString.split(',').map(Number);
        const variance = math.variance(numbers);
        display.value = variance.toString();
    }
});
// ... (Rest of the code)