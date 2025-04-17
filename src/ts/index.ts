// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const squareRootButton = document.getElementById('square-root');
    if (squareRootButton) {
        squareRootButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const squareRootValue = Math.sqrt(currentValue);
            display.value = squareRootValue.toString();
            console.log(`Square root calculated: ${squareRootValue}`);
        });
    }
});