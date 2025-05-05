// ... (Existing code)
const calculateFibonacciButton = document.getElementById('calculate-fibonacci') as HTMLButtonElement;
calculateFibonacciButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
        let a = 0, b = 1, temp;
        for (let i = 0; i < n; i++) {
            temp = b;
            b = a + b;
            a = temp;
        }
        display.value = a.toString();
    } else {
        display.value = "Invalid input for fibonacci";
    }
});
// ... (Rest of existing code)