// ... (Existing code)
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

factorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = factorial(currentValue).toString();
    }
});