// ... (Existing code)

// Sign change
document.getElementById('sign-change')?.addEventListener('click', () => {
    currentValue = (parseFloat(currentValue) * -1).toString();
    updateDisplay(currentValue);
});
// ... (Rest of the code)