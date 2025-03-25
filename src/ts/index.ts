// ... (Existing code)
const nrootButton = document.getElementById('nroot');
if (nrootButton) {
    nrootButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            const root = parseFloat(prompt('Enter the root value:', '2'));
            if (!isNaN(root)) {
                display.value = Math.pow(currentValue, 1 / root).toString();
            }
        }
    });
}
// ... (Existing code)