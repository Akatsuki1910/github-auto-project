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
    if(key.toLowerCase() === 'a'){
        display.value = localStorage.getItem('lastAnswer') || '0';
    }
    else if (/^[0-9]$/.test(key)) {
      display.value = display.value === '0' ? key : display.value + key;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      display.value += key;
    } else if (key === 'Enter' || key === '=') {
        try {
            const result = eval(display.value); 
            display.value = String(result);
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
    } else if (key.toLowerCase() === 's') {
        display.value = String(Math.sqrt(Number(display.value)));
    } else if(key.toLowerCase() === 'c'){
        display.value = String(Math.cbrt(Number(display.value)));
    } else if(key === '^'){
        const base = parseFloat(display.value);
        display.value = "0";
        document.addEventListener('keydown', exponentHandler);
        function exponentHandler(event) {
            const exponentKey = event.key;
            if (/^[0-9]$/.test(exponentKey) || exponentKey === '.') {
                display.value = display.value === '0' ? exponentKey : display.value + exponentKey;
            } else if (exponentKey === 'Enter' || exponentKey === '=') {
                const exponent = parseFloat(display.value);
                display.value = String(Math.pow(base, exponent));
                document.removeEventListener('keydown', exponentHandler);
            }
        }
    }
    //Added current expression display
    currentExpressionDisplay.textContent = display.value;
});