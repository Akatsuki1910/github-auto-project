// ... (Existing code)
const sumAllButton = document.getElementById('sum-all') as HTMLButtonElement;
sumAllButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);
    if (numbers.length < 1) {
        display.value = 'Error: Enter at least one number separated by commas.';
        return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    display.value = sum.toString();
});
// ... (Rest of the code)