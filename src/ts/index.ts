// ... (Existing code)
const memDivideButton = document.getElementById('mem-divide');
memDivideButton.addEventListener('click', () => {
    const displayValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(displayValue) && displayValue !== 0) {
        memory /= displayValue;
    }
});
// ... (Existing code)