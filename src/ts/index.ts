// ... (Existing code)
const squareRootButton = document.getElementById('square-root');
if (squareRootButton) {
    squareRootButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value) {
            const num = parseFloat(display.value);
            if (num >= 0) {
                display.value = Math.sqrt(num).toString();
            } else {
                display.value = 'Error: Negative Input';
            }
        }
    });
}
// ... (Existing code)