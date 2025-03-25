// ... (Existing code)
const memSubtractButton = document.getElementById('mem-subtract');
memSubtractButton.addEventListener('click', () => {
    const displayValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(displayValue)) {
        memory -= displayValue;
    }
});
// ... (Existing code)