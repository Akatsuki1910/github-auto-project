// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const toggleDisplayButton = document.getElementById('toggle-display');
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');

// ... (Other existing variables)

let displayVisible = true;
let currentExpression = '';

toggleDisplayButton?.addEventListener('click', () => {
  displayVisible = !displayVisible;
  if (displayVisible) {
    display.style.display = 'block';
  } else {
    display.style.display = 'none';
  }
display.value = displayVisible ? display.value : ''; // Added feature: Clear display when hidden
});

//Example button click handling (replace with your actual logic)
document.querySelectorAll('.digit, .operator').forEach(button => {
    button.addEventListener('click', () => {
        const key = (button as HTMLElement).dataset.key;
        if (key) {
            currentExpression += key;
            currentExpressionDisplay!.textContent = currentExpression;
        }
    });
});

// ... (Rest of the existing code)