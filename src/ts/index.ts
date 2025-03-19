// ... (Existing code)
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseInt(display.value);
        if (num < 0) {
            display.value = "Error: Factorial of negative number";
        } else {
            let result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;
            }
            display.value = result.toString();
        }
    }
});