// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const toggleDisplayButton = document.getElementById('toggle-display');
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
const percentageButton = document.getElementById('percentage');
const currentDatetButton = document.getElementById('current-date');
const currentTimeButton = document.getElementById('current-time');
const piButton = document.getElementById('pi') as HTMLButtonElement;
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
const cuberootButton = document.getElementById('cuberoot') as HTMLButtonElement;
const exponentButton = document.getElementById('exponent') as HTMLButtonElement;
const absButton = document.getElementById('abs') as HTMLButtonElement;

// ... (Other existing variables)

let displayVisible = true;
let currentExpression = '';
let historyArr:string[] = [];

toggleDisplayButton?.addEventListener('click', () => {
  displayVisible = !displayVisible;
  if (displayVisible) {
    display.style.display = 'block';
  } else {
    display.style.display = 'none';
  }
display.value = displayVisible ? display.value : ''; 
});

percentageButton?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const percentageValue = currentValue / 100; 
        display.value = percentageValue.toString();
        currentExpression = percentageValue.toString();
        currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
        display.value = 'Error';
    }
});
currentDatetButton?.addEventListener('click', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    display.value = dateString;
    currentExpressionDisplay!.textContent = dateString; 
});

currentTimeButton?.addEventListener('click', () => {
    const today = new Date();
    const timeString = today.toLocaleTimeString();
    display.value = timeString;
    currentExpressionDisplay!.textContent = timeString;
});

document.querySelectorAll('.digit, .operator, .equals, #percentage').forEach(button => {
    button.addEventListener('click', () => {
        const key = (button as HTMLElement).dataset.key;
        if (key) {
            if(key === '='){
                try{
                    const result = math.evaluate(currentExpression);
                    display.value = result.toString();
                    historyArr.push(currentExpression + '=' + result.toString());
                    currentExpression = '';
                    currentExpressionDisplay!.textContent = '';
                } catch (error) {
                    display.value = 'Error';
                }
            }else{
              currentExpression += key;
              currentExpressionDisplay!.textContent = currentExpression;          
            }
        }
    });
});

piButton.addEventListener('click', () => {
  currentExpression += Math.PI;
  currentExpressionDisplay!.textContent = currentExpression;
  display.value = currentExpression;
});

factorialButton.addEventListener('click', () => {
    try {
      const currentValue = parseFloat(display.value);
      if (currentValue < 0) {
        display.value = 'Error: Factorial of negative number';
      } else {
        const result = math.factorial(currentValue);  // Calculate factorial
        display.value = result.toString();
        currentExpression = result.toString();
        currentExpressionDisplay!.textContent = currentExpression;
      }
    } catch (error) {
      display.value = 'Error';
    }
  });

cuberootButton.addEventListener('click', () => {
    try {
      const currentValue = parseFloat(display.value);
      const result = Math.cbrt(currentValue);
      display.value = result.toString();
      currentExpression = result.toString();
      currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
      display.value = 'Error';
    }
  });

exponentButton.addEventListener('click', () => {
    currentExpression += '**';
    currentExpressionDisplay!.textContent = currentExpression;
});

absButton.addEventListener('click', () => {
    try {
      const currentValue = parseFloat(display.value);
      const result = Math.abs(currentValue);
      display.value = result.toString();
      currentExpression = result.toString();
      currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
      display.value = 'Error';
    }
});

const clearLastHistory = document.getElementById('clear-last-history') as HTMLButtonElement;
clearLastHistory.addEventListener('click', () => {
    if (historyArr.length > 0) {
        historyArr.pop();
    }
});

// ... (Rest of the existing code)