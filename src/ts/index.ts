// ... (Existing code)
const calculateModeButton = document.getElementById('calculate-mode') as HTMLButtonElement;
calculateModeButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:');
    if (numbersString) {
        const numbers = numbersString.split(',').map(Number);
        const mode = math.mode(numbers);
        display.value = mode.toString();
    }
});
// ... (Rest of the code)