// ... (Existing code)
const maxButton = document.getElementById('max') as HTMLButtonElement;
maxButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const numbers = prompt('Enter numbers separated by commas:', '1,5,2,8').split(',').map(Number);
        numbers.sort((a, b) => b - a);
        const max = numbers[0];
        display.value = max.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)