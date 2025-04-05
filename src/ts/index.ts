// ... (Existing code)
const rangeButton = document.getElementById('range') as HTMLButtonElement;
rangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const numbers = prompt('Enter numbers separated by commas:', '1,5,2,8').split(',').map(Number);
        numbers.sort((a, b) => a - b);
        const range = numbers[numbers.length - 1] - numbers[0];
        display.value = range.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)