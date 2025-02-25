// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
const display = document.getElementById('display') as HTMLInputElement;
let isDegreeMode = true;
let ans = 0; // Store the last answer
let history: string[] = []; // History array to store calculations
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const additionalFunctions = document.querySelector('.additional-functions') as HTMLDivElement;
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
const scientificSection = document.querySelector('.scientific-section') as HTMLDivElement;
const memorySection = document.querySelector('.memory-section') as HTMLDivElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let currentExpression = '';
let isKeyboardEnabled = false;
let isNumpadEnabled = false; // Add flag for numpad
let isDarkMode = false; // Flag for dark mode

// ... (Existing Event Listeners)

document.getElementById('toggle-theme')?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.getElementById('calculator')?.classList.toggle('dark-mode', isDarkMode);
});

// History toggle and clear functionality
document.getElementById('toggle-history')?.addEventListener('click', () => {
    historyDisplay.style.display = historyDisplay.style.display === 'block' ? 'none' : 'block';
});
document.getElementById('clear-history')?.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});

// Add sin, cos, tan functions (Existing code)

// ... (Rest of the existing code)
// Add calculations to history
function addToHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}

// Toggle Scientific Functions
document.getElementById('toggle-sci')?.addEventListener('click', () => {
    additionalFunctions.style.display = additionalFunctions.style.display === 'grid' ? 'none' : 'grid';
});


//New Feature: Sign function
document.getElementById('sign')?.addEventListener('click',()=>{
    const num = parseFloat(display.value);
    if(isNaN(num)){
        display.value = "Invalid Input";
        return;
    }
    display.value = Math.sign(num).toString();
    currentExpression = display.value;
});

//Feature: Factorial
document.getElementById('factorial')?.addEventListener('click', () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid Input";
    return;
  }
  if (num < 0) {
    display.value = "Factorial not defined for negative numbers";
    return;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  display.value = result.toString();
  currentExpression = display.value;
});

document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = (button as HTMLButtonElement).textContent;
        if (buttonText) {
            currentExpression += buttonText;
            currentExpressionDisplay.textContent = currentExpression;
        }
    });
});

document.querySelector('.equals')?.addEventListener('click', () => {
    try {
      const result = eval(currentExpression);
      display.value = result.toString();
      addToHistory(currentExpression, result.toString()); // Add to history
      ans = result;
      currentExpression = ''; // Clear current expression
      currentExpressionDisplay.textContent = '';
  } catch (e) {
      display.value = 'Error';
  }
});

// Add Pi functionality
document.getElementById('pi')?.addEventListener('click', () => {
    currentExpression += Math.PI;
    currentExpressionDisplay.textContent = currentExpression;
});

// Power functionality
document.getElementById('power')?.addEventListener('click', () => {
    currentExpression += '**';
    currentExpressionDisplay.textContent = currentExpression;
});
//Logarithm Base 10
document.getElementById('log')?.addEventListener('click', () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid Input";
    return;
  }
  if(num <= 0){
    display.value = "Invalid Input for log";
  }
  display.value = Math.log10(num).toString();
  currentExpression = display.value;
});

// Exponential function
document.getElementById('exp')?.addEventListener('click', () => {
    currentExpression += 'Math.exp('; // Use Math.exp() for exponential calculation
    currentExpressionDisplay.textContent = currentExpression; 
});

//Cube functionality
document.getElementById('cube')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid Input";
      return;
    }
    display.value = (num*num*num).toString();
    currentExpression = display.value;
});

// Absolute value function
document.getElementById('abs')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid Input";
        return;
    }
    display.value = Math.abs(num).toString();
    currentExpression = display.value;
});
//Inverse Function 1/x
document.getElementById('inverse')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if(isNaN(num)){
        display.value = "Invalid Input";
        return;
    }
    if(num === 0){
        display.value = "Cannot divide by zero";
        return;
    }
    display.value = (1/num).toString();
    currentExpression = display.value;
});

//Round function
document.getElementById('round')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid Input";
      return;
    }
    display.value = Math.round(num).toString();
    currentExpression = display.value;
});
//Floor Function
document.getElementById('floor')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if(isNaN(num)) {
        display.value = "Invalid Input";
        return;
    }
    display.value = Math.floor(num).toString();
    currentExpression = display.value;
});

//Cube root function
document.getElementById('cbrt')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if(isNaN(num)){
        display.value = "Invalid Input";
        return;
    }
    display.value = Math.cbrt(num).toString();
    currentExpression = display.value;
});