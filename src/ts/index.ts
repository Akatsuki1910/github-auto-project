// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error: Invalid input';
        return;
    }
    // Prompt the user for the nth root
    const n = parseFloat(prompt('Enter the nth root (e.g., 2 for square root, 3 for cube root):', '2'));
    if(isNaN(n)) {
        display.value = 'Error: Invalid root value';
        return;
    }
    const result = Math.pow(value, 1/n);
    display.value = result.toString();
});
// ... (Rest of the code)