// ... (Existing code)
const calculateFifthRootButton = document.getElementById('calculate-fifth-root') as HTMLButtonElement;
calculateFifthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x∜:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/5).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)