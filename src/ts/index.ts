// ... (Existing code)
const calculateCubeRootButton = document.getElementById('calculate-cube-root') as HTMLButtonElement;
calculateCubeRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for ∛x:') || '0');
    if (!isNaN(value)) {
        display.value = Math.cbrt(value).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)