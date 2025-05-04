// ... (Existing code)
const nthRootButton = document.getElementById('nthRoot') as HTMLButtonElement;

nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const n = parseFloat(prompt('Enter the root (n):', '2') || '2'); // Default to square root
            const x = parseFloat(display.value);
            const result = math.nthRoot(x,n);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)