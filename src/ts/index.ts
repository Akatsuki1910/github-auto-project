// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const root = parseFloat(prompt('Enter the root (y):', '2')); // Default root is 2
        if (!isNaN(root)) {
            display.value = Math.pow(currentValue, 1 / root).toString();
        }
    }
});