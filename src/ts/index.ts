// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        const root = parseFloat(prompt('Enter the root (n):', '2')); // Default root is 2
        if (isNaN(root)) {
            display.value = "Invalid root";
        } else {
            display.value = math.nthRoot(currentValue, root).toString();
        }
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)