// ... (Existing code)
const sumButton = document.getElementById('sum') as HTMLButtonElement;
sumButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const numbers = prompt('Enter numbers separated by commas:', '1,2,3').split(',').map(Number);
        const sum = numbers.reduce((a, b) => a + b, 0);
        display.value = sum.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)