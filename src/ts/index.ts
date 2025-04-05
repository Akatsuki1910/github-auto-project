// ... (Existing code)
const medianButton = document.getElementById('median') as HTMLButtonElement;
medianButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const numbers = prompt('Enter numbers separated by commas:', '1,2,3').split(',').map(Number).sort((a, b) => a - b);
        const mid = Math.floor(numbers.length / 2);
        const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
        display.value = median.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)