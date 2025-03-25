// ... (Existing code)
const twoRootButton = document.getElementById('tworoot');
if (twoRootButton) {
    twoRootButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.sqrt(currentValue).toString();
        }
    });
}
// ... (Existing code)