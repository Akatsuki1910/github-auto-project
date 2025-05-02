// ... (Existing code)
const calculateFourthRootButton = document.getElementById('calculate-fourth-root') as HTMLButtonElement;
calculateFourthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for ∜x:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/4).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)