// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '0';
    currentExpressionDisplay.textContent = '';
});

const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    if (display.value !== '') {
        display.value = String(Number(display.value) * -1);
    }
});

const copyButton = document.getElementById('copy') as HTMLButtonElement;
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value);
});

const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
const toggleMainPadButton = document.getElementById('toggle-main-pad') as HTMLButtonElement;
toggleMainPadButton.addEventListener('click', () => {
    mainPad.style.display = mainPad.style.display === 'none' ? 'grid' : 'none';
});

//New Feature: Clear Entry (CE) button functionality
const clearEntryButton = document.getElementById('clear') as HTMLButtonElement; // Reuse the 'C' button for CE
clearEntryButton.addEventListener('click', () => {
    display.value = '0'; // Clears the current entry/number being typed
});

//Added backspace functionality
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1); 
  } else {
    display.value = '0';
  }
});

//Added keyboard support for digits and basic operators
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/^[0-9]$/.test(key)) {
      display.value = display.value === '0' ? key : display.value + key;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      display.value += key;
    } else if (key === 'Enter' || key === '=') {
        //Evaluate expression logic (placeholder)
        try {
            display.value = eval(display.value); // CAUTION: Using eval can be unsafe for user input. Ideal to use a dedicated expression parser.
        } catch (error) {
            display.value = 'Error';
        }
    }
});
