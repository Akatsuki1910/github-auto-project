// ... (Existing code)
const toggleScientificButton = document.getElementById('toggleScientific');
const calculator = document.getElementById('calculator');
const scientificButtons = document.querySelectorAll('.scientific'); // Scientific mode buttons

if (toggleScientificButton && calculator) {
    let isScientificMode = false;
    toggleScientificButton.addEventListener('click', () => {
        isScientificMode = !isScientificMode;
        scientificButtons.forEach(button => {
            if (isScientificMode) {
                button.style.display = 'inline-block';
            }
            else {
                button.style.display = 'none';
            }
        });
        if (isScientificMode) {
            calculator.classList.add('scientific-mode');
        }
        else {
            calculator.classList.remove('scientific-mode');
        }
    });
}