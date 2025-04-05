// ... (Existing code)
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseInt(display.value);
        if (isNaN(value)) {
            display.value = 'Error';
            return;
        }
        let result = 1;
        for (let i = 2; i <= value; i++) {
            result *= i;
        }
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)