// ... (Existing code)
//Swap the last two digits function
document.getElementById('swap')?.addEventListener('click', () => {
    if (currentInput.length >= 2) {
        const lastTwo = currentInput.slice(-2);
        const remaining = currentInput.slice(0, -2);
        currentInput = remaining + lastTwo[1] + lastTwo[0];
        display.value = currentInput;
    }
});
// ... (Rest of the code)