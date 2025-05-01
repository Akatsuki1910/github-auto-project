// ... (Existing code)
const calculateExponentialButton = document.getElementById('calculate-exponential') as HTMLButtonElement;
calculateExponentialButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for e^x:') || '0');
    if (!isNaN(value)) {
        display.value = Math.exp(value).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)