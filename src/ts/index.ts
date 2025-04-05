// ... (Existing code)
const avgButton = document.getElementById('average') as HTMLButtonElement;
avgButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const numbers = prompt('Enter numbers separated by commas:', '1,2,3').split(',').map(Number);
        const sum = numbers.reduce((a, b) => a + b, 0);
        const avg = sum / numbers.length;
        display.value = avg.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)