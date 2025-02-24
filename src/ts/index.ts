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


//New Feature: Factorial
document.getElementById('factorial')?.addEventListener('click', () => {
  const num = parseFloat(display.value);
  if (isNaN(num)) {
    display.value = "Invalid Input";
    return;
  }
  if (!Number.isInteger(num) || num < 0) {
    display.value = "Invalid Input";
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
// Brackets
document.getElementById('bracket-left')?.addEventListener('click', () => {
    currentExpression += '(';
    currentExpressionDisplay.textContent = currentExpression;
});
document.getElementById('bracket-right')?.addEventListener('click', () => {
    currentExpression += ')';
    currentExpressionDisplay.textContent = currentExpression;
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

// ... (Existing function implementations for pi, power, log, exp, ans, etc.)
//New Feature: expm1()
document.getElementById('expm1')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid Input";
        return;
    }
    const result = Math.expm1(num);
    display.value = result.toString();
    currentExpression = display.value;
});
//New Feature: Ceil
document.getElementById('ceil')?.addEventListener('click', () => {
    currentExpression += 'Math.ceil('; // Use Math.ceil for ceiling
    currentExpressionDisplay.textContent = currentExpression;
});
//New Feature: Modulo operator
document.getElementById('mod')?.addEventListener('click', () => {
    currentExpression += '%';
    currentExpressionDisplay.textContent = currentExpression;
});
//New Feature: Deg/Rad toggle
document.getElementById('deg-rad')?.addEventListener('click', () => {
  isDegreeMode = !isDegreeMode;
  (document.getElementById('deg-rad') as HTMLButtonElement).textContent = isDegreeMode ? 'Deg' : 'Rad';
});
//New Feature: Clear Entry
document.getElementById('clear-entry')?.addEventListener('click', () => {
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
    display.value = '';
});

//New Feature: Calculate expression button
document.getElementById('calculate-expression')?.addEventListener('click', () => {
    try {
        const result = eval(currentExpression);
        display.value = result.toString();
        addToHistory(currentExpression, result.toString());
        currentExpression = result.toString(); // Keep the result for further calculations
        currentExpressionDisplay.textContent = currentExpression;       
    } catch (error) {
        display.value = 'Error';
    }
});

//New Feature: Double Factorial
document.getElementById('double-factorial')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
      display.value = "Invalid Input";
      return;
    }
    if (!Number.isInteger(num) || num < -1) {
      display.value = "Invalid Input";
      return;
    }
  
    let result = 1;
    if (num % 2 === 0) {
        for (let i = 2; i <= num; i += 2) {
            result *= i;
          }
    } else {
        for (let i = 1; i <= num; i += 2) {
            result *= i;
          }
    }
  
    display.value = result.toString();
    currentExpression = display.value;
  });
//New Feature: Cube Root
document.getElementById('cube-root')?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (isNaN(num)) {
        display.value = "Invalid Input";
        return;
    }
    const result = Math.cbrt(num);
    display.value = result.toString();
    currentExpression = display.value;
});
//New Feature: Nth Root
document.getElementById('nth-root')?.addEventListener('click', () => {
    currentExpression += '**(1/';
    currentExpressionDisplay.textContent = currentExpression;
});
//New Feature: Base Conversion
document.getElementById('base-conversion')?.addEventListener('click', () => {
    const num = display.value;
    const base = prompt("Enter the base (2-36):", "10");

    if (base === null || isNaN(parseInt(base)) || parseInt(base) < 2 || parseInt(base) > 36) {
        display.value = "Invalid Base";
        return;
    }

    try {
        const convertedNum = parseInt(num).toString(parseInt(base));
        display.value = convertedNum;
    } catch (error) {
        display.value = "Invalid Input";
    }
});
//New Feature: Max
document.getElementById('max')?.addEventListener('click', () => {
    currentExpression += 'Math.max('; // Use Math.max 
    currentExpressionDisplay.textContent = currentExpression;
});
//New Feature: Min
document.getElementById('min')?.addEventListener('click', () => {
    currentExpression += 'Math.min('; // Use Math.min
    currentExpressionDisplay.textContent = currentExpression;
});
//New Feature: Absolute Value
document.getElementById('abs')?.addEventListener('click', () => {
    currentExpression += 'Math.abs('; // Use Math.abs for absolute value
    currentExpressionDisplay.textContent = currentExpression;
});
//New Feature: Permutation
document.getElementById('permutation')?.addEventListener('click', () => {
    const nums = display.value.split(',');
    if (nums.length !== 2 || isNaN(parseFloat(nums[0])) || isNaN(parseFloat(nums[1]))) {
        display.value = "Invalid Input";
        return;
    }
    const n = parseInt(nums[0]);
    const r = parseInt(nums[1]);
    if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n){
        display.value = "Invalid Input";
        return;
    }
    let result = 1;
    for(let i = 0; i < r; i++){
        result *= (n - i);
    }
    display.value = result.toString();
    currentExpression = display.value;
});