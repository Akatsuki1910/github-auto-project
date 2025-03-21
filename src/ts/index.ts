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
        display.value += key; // Append operators directly
    } else if (key === 'Enter' || key === '=') {
        try {
            const result = eval(display.value);
            display.value = String(result);
            //New Feature: Append calculation to history
            const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
            const newEntry = document.createElement('p');
            newEntry.textContent = `${display.value}`;
            historyDisplay.prepend(newEntry);
             // Store last answer
            localStorage.setItem('lastAnswer', display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (key === 'Escape') {
        display.value = '0';
        currentExpressionDisplay.textContent = '';
    } else if (key === '.') {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    } else if (key === '%') {
        display.value = String(Number(display.value) / 100);
    }
        currentExpressionDisplay.textContent = display.value; // Update expression display
});
const operators = document.querySelectorAll('.operator') as NodeListOf<HTMLButtonElement>;
operators.forEach(operator => {
  operator.addEventListener('click', () => {
      display.value += operator.textContent;
      currentExpressionDisplay.textContent = display.value; 
  });
});
//Added Ans button functionality
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () =>{
    const lastAnswer = localStorage.getItem('lastAnswer');
    display.value = lastAnswer !== null ? lastAnswer : '0'; // Use 0 if no last answer
});
localStorage.setItem('lastAnswer','0');

//Added Clear History Button
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    historyDisplay.innerHTML = ''; // Clear history display
});

//Added Dup button functionality (duplicates the current value in the display)
const dupButton = document.getElementById('duplicate') as HTMLButtonElement;
dupButton.addEventListener('click', () => {
    display.value += display.value;
});
