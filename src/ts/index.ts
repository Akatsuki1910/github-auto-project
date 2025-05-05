// ... (Existing code)
const nthrootButton = document.getElementById('nthroot') as HTMLButtonElement;
nthrootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        // Prompt the user for the nth root
        const n = parseFloat(prompt('Enter the nth root (e.g., 2 for square root, 3 for cube root):', '2'));
        if (!isNaN(n)) {
            display.value = math.nthRoot(currentValue, n).toString();
        }
    }
});
// ... (Rest of existing code)