// ... (Existing code)
const calculateGeometricMeanButton = document.getElementById('calculate-geometric-mean') as HTMLButtonElement;
calculateGeometricMeanButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:');
    if (numbersString) {
        const numbers = numbersString.split(',').map(Number);
        const geometricMean = math.geometricMean(numbers);
        display.value = geometricMean.toString();
    }
});
// ... (Rest of the code)