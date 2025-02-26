// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
// ... (Existing code)
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
let openParenthesesCount = 0;
let memory = 0;
let memorySum = 0; 
let memoryCount = 0;
let memorySquaredSum = 0;

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
// ... (Existing code) ...

//Min Function
document.getElementById('min')?.addEventListener('click', () => {
    try {
        const numbers = currentExpression.split(',').map(Number);
        display.value = Math.min(...numbers).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = 'Error';
    }
});

// Copy to clipboard functionality
document.getElementById('copy')?.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
      // Optional: Display a message or change button style to indicate success
      console.log('Copied to clipboard');
    }, (err) => {
      console.error('Failed to copy: ', err);
    });
  });

//Factorial Function
document.getElementById('factorial')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid Input"
        }
        const result = factorial(num);
        display.value = result.toString();
        currentExpression = display.value; 
    } catch (error) {
        display.value = "Error";
    }
});
function factorial(n:number):number{
    if(n < 0) return -1; //Error
    if(n===0) return 1; //Base case
    return n * factorial(n-1);
}

// ... (Other existing functions)

//Cube Function
document.getElementById('cube')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        display.value = (num*num*num).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = "Error";
    }
});

// Modulo operator
document.getElementById('mod')?.addEventListener('click', () => {
    currentExpression += '%';
    display.value = currentExpression; 
});

//Natural Logarithm
document.getElementById('ln')?.addEventListener('click', () =>{
    try{
        const num = parseFloat(display.value);
        display.value = Math.log(num).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = "Error";
    }
});

// Duplicate functionality
document.getElementById('duplicate')?.addEventListener('click', () => {
    display.value += display.value;
    currentExpression = display.value;
});

// Degree/Radian toggle
document.getElementById('deg-rad')?.addEventListener('click', () => {
    isDegreeMode = !isDegreeMode;
    (document.getElementById('deg-rad') as HTMLButtonElement).textContent = isDegreeMode ? 'Deg' : 'Rad';
});

// ... (Existing geometry functions)

// Calculate Surface Area of a Cube (Existing Feature)
document.getElementById('calculate-cube-surface-area')?.addEventListener('click', () => {
    try {
        const side = parseFloat(display.value);
        if (isNaN(side)) {
            display.value = "Invalid Input";
        } else if (side < 0) {
            display.value = "Side cannot be negative";
        } else {
            const surfaceArea = 6 * side * side; // Surface area of a cube formula
            display.value = surfaceArea.toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

//Memory Standard Deviation 
document.getElementById('memory-standard-deviation')?.addEventListener('click', () => {
    if (memoryCount === 0) {
        display.value = "No values in memory";
    } else {
        const standardDeviation = Math.sqrt((memorySquaredSum / memoryCount) - Math.pow(memorySum / memoryCount, 2));
        display.value = standardDeviation.toString();
        currentExpression = display.value;
    }

});

//Memory Variance
document.getElementById('memory-variance')?.addEventListener('click', () => {
    if (memoryCount === 0) {
        display.value = "No values in memory";
    } else {
        const variance = (memorySquaredSum / memoryCount) - Math.pow(memorySum / memoryCount, 2);
        display.value = variance.toString();
        currentExpression = display.value;
    }
});

// Calculate Hypotenuse
document.getElementById('calculate-hypotenuse')?.addEventListener('click', () => {
    try {
        const sides = currentExpression.split(',').map(Number);
        if (sides.length !== 2 || sides.some(isNaN)) {
            display.value = "Invalid input. Enter two comma-separated values.";
        } else if (sides.some(side => side < 0)) {
            display.value = "Sides cannot be negative.";
        } else {
            const hypotenuse = Math.sqrt(sides[0]**2 + sides[1]**2);
            display.value = hypotenuse.toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Nth Root functionality
document.getElementById('nth-root')?.addEventListener('click', () => {
    try {
        const [x, y] = currentExpression.split(',').map(Number);
        if ([x,y].some(isNaN)){
            display.value = "Enter x,y";
        } else {
            display.value = Math.pow(y, 1/x).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

//Ans Button
document.getElementById('ans')?.addEventListener('click', () => {
    currentExpression += ans.toString();
    display.value = currentExpression;
});
//e button
document.getElementById('e')?.addEventListener('click', () => {
    currentExpression += Math.E.toString();
    display.value = currentExpression;
});
// expm1 function
document.getElementById('expm1')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        display.value = Math.expm1(num).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = "Error";
    }
});

// x^4 function
document.getElementById('squared2')?.addEventListener('click', () => {
    try{
        const num = parseFloat(display.value);
        display.value = (num*num*num*num).toString();
        currentExpression = display.value;
    } catch (error){
        display.value = "Error";
    }
});

// Sign change functionality
document.getElementById('sign-change')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        display.value = (-num).toString();
        currentExpression = display.value;
    } catch (error) {
        display.value = "Error";
    }
});

// Calculate Average
document.getElementById('calculate-average')?.addEventListener('click', () => {
    try {
        const numbers = currentExpression.split(',').map(Number);
        if (numbers.some(isNaN)) {
            display.value = "Invalid input. Enter comma-separated values.";
        } else {
            const sum = numbers.reduce((total, num) => total + num, 0);
            const average = sum / numbers.length;
            display.value = average.toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});