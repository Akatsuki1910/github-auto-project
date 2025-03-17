// ... (Existing code)
const squareRootButton = document.getElementById('square-root') as HTMLButtonElement;
squareRootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        display.value = Math.sqrt(currentValue).toString();
    }
});