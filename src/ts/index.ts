// ... (Existing code)
const factButton = document.getElementById('fact') as HTMLButtonElement;
factButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        display.value = result.toString();
    }
    else {
        display.value = "Invalid input for factorial";
    }
});
// ... (Rest of existing code)