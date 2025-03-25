// ... (Existing code)
const memMultiplyButton = document.getElementById('mem-multiply');
memMultiplyButton.addEventListener('click', () => {
    const displayValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(displayValue)) {
        memory *= displayValue;
    }
});
// ... (Existing code)