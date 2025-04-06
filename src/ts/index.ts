// ... (Existing code)
const squaredNegativeButton = document.getElementById('squared-negative') as HTMLButtonElement;
squaredNegativeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    const result = -Math.pow(number, 2);
    display.value = result.toString();
});
// ... (Rest of the code)