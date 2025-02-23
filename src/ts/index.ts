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

document.getElementById('deg-rad')?.addEventListener('click', () => {
    isDegreeMode = !isDegreeMode;
    const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
    degRadButton.textContent = isDegreeMode ? 'Deg' : 'Rad';
});

//Modify trigonometric functions to handle degree/radian mode
function sin(x: number): number {
    return isDegreeMode ? Math.sin(x * Math.PI / 180) : Math.sin(x);
}

function cos(x: number): number {
    return isDegreeMode ? Math.cos(x * Math.PI / 180) : Math.cos(x);
}

function tan(x: number): number {
    return isDegreeMode ? Math.tan(x * Math.PI / 180) : Math.tan(x);
}

// Add event listener for Ans button
document.getElementById('ans')?.addEventListener('click', () => {
  display.value += ans.toString();
});

//Added functionality for digits and operators
// ... (rest of the code)

// Add ln function
function ln(x: number): number {
    return Math.log(x);
}

// ... (Rest of the code)
function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.join('<br>');
}
// ... (Rest of the existing code)

// ... (Existing functions)

// Add trunc function
document.getElementById('trunc')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error";
        } else {
            const result = Math.trunc(num);
            display.value = result.toString();
            ans = result;
            history.push(`trunc(${num}) = ${result}`);
            updateHistoryDisplay();
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Add duplicate functionality
document.getElementById('duplicate')?.addEventListener('click', () => {
    display.value += display.value;
});

// Add sign change functionality
document.getElementById('sign-change')?.addEventListener('click', () => {
    if (display.value) {
        display.value = (-parseFloat(display.value)).toString();
    }
});

//Add sum functionality
document.getElementById('sum')?.addEventListener('click', () => {
    const numbers = display.value.split('+').map(Number).filter(n => !isNaN(n));
    const sum = numbers.reduce((a,b)=> a+b,0);
    display.value = sum.toString();
    ans = sum;
    history.push(numbers.join('+') + '=' + sum);
    updateHistoryDisplay();
});

// Toggle Scientific Functions
let isScientificMode = false;
document.getElementById('toggle-scientific')?.addEventListener('click', () => {
    isScientificMode = true; // Always turn scientific mode on
    additionalFunctions.style.display = 'grid';
    mainPad.style.display = 'grid';
    scientificSection.style.display = 'grid';
    memorySection.style.display = 'grid';

});

// Toggle Basic functions
document.getElementById('toggle-basic')?.addEventListener('click', () => {
    isScientificMode = false;
    additionalFunctions.style.display = 'none';
    scientificSection.style.display = 'none';
    memorySection.style.display = 'none';
    mainPad.style.display = 'grid';

});

// Add calculate expression functionality
document.getElementById('calculate-expression')?.addEventListener('click', () => {
    try {
        const result = eval(currentExpression);
        display.value = result.toString();
        ans = result;
        history.push(`${currentExpression} = ${result}`);
        updateHistoryDisplay();
        currentExpression = ''; // Clear current expression after calculation
        currentExpressionDisplay.textContent = currentExpression;        
    } catch (error) {
        display.value = "Error";
    }
});

//Keyboard Toggle function
document.getElementById('toggle-keyboard')?.addEventListener('click', () => {
    isKeyboardEnabled = !isKeyboardEnabled;
    if (isKeyboardEnabled) {
      document.addEventListener('keydown', handleKeyboardInput);
    } else {
      document.removeEventListener('keydown', handleKeyboardInput);
    }
  });
  
  function handleKeyboardInput(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(parseInt(key))) {
      display.value += key;
    }
  }
