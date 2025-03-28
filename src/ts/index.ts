// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid Input';
        return;
    }
    // Prompt the user for the nth root they want to calculate
    const n = parseFloat(prompt('Enter the root value (e.g., 2 for square root, 3 for cube root):', '2') || '2');
    if (isNaN(n)) {
        display.value = 'Invalid root value';
        return;
    }
    const nthRootValue = Math.pow(currentValue, 1 / n);
    display.value = nthRootValue.toString();
});
//...(rest of the code)