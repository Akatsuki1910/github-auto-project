// ... (Existing code)
const calculateFactorialButton = document.getElementById('calculate-factorial') as HTMLButtonElement;
calculateFactorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0 && Number.isInteger(value)) {
        let factorial = 1;
        for (let i = 1; i <= value; i++) {
            factorial *= i;
        }
        display.value = factorial.toString();
    } else {
        display.value = "Invalid input for factorial";
    }
});
// ... (Rest of existing code)