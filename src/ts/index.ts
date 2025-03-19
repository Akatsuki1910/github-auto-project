// ... (Existing code)
const squareRootButton = document.getElementById('square-root') as HTMLButtonElement;
squareRootButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        if (num >= 0) {
            display.value = Math.sqrt(num).toString();
        } else {
            display.value = "Invalid Input";
        }
    }
});