// ... (Existing code)
const calculateFactorialButton = document.getElementById('calculate-factorial') as HTMLButtonElement;
calculateFactorialButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = math.factorial(value).toString();
    }
});
// ... (Rest of the code)