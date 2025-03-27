// ... (Existing code)
const toggleScientificButton = document.getElementById('toggleScientific');
const calculator = document.getElementById('calculator');
const scientificButtons = document.querySelectorAll('.scientific'); // Scientific mode buttons
const switchThemeButton = document.getElementById('switch-theme');
const body = document.body;

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
if (switchThemeButton) {
  switchThemeButton.addEventListener('click', () => {
    if (body.classList.contains('light-scheme')) {
      body.classList.remove('light-scheme');
      body.classList.add('dark-scheme');
    }
    else {
      body.classList.remove('dark-scheme');
      body.classList.add('light-scheme');
    }
  });
}