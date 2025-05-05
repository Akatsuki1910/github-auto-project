// ... (Existing code)
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (currentValue < 0) {
        display.value = "Error: Factorial of negative number";
    } else {
        display.value = math.factorial(currentValue).toString();
    }
});
// ... (Rest of existing code)