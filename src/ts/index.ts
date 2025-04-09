// ... (Existing code)
const calculateHarmonicMeanButton = document.getElementById('calculate-harmonic-mean') as HTMLButtonElement;
calculateHarmonicMeanButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:');
    if (numbersString) {
        const numbers = numbersString.split(',').map(Number);
        const harmonicMean = math.harmonicMean(numbers);
        display.value = harmonicMean.toString();
    }
});
// ... (Rest of the code)