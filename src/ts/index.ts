// ... (Existing code)

//Added feature: Toggle Error Messages
// ... existing code

// Add other functionalities
// ... existing code

//Added Scientific Notation Toggle
// ... existing code

// Added Deg/Rad toggle functionality
// ... existing code

const display = document.getElementById('display') as HTMLInputElement;
let ans = 0;
let bracketsEnabled = true;
let keyboardEnabled = true;
const toggleBasicAdvancedButton = document.getElementById('toggle-basic-advanced') as HTMLButtonElement;
const scientificSection = document.querySelector('.scientific-section') as HTMLDivElement;
let isAdvancedMode = false;
toggleBasicAdvancedButton.addEventListener('click', () => {
    isAdvancedMode = !isAdvancedMode;
    scientificSection.style.display = isAdvancedMode ? 'grid' : 'none';
    toggleBasicAdvancedButton.textContent = isAdvancedMode ? 'Advanced' : 'Basic';
    if (isAdvancedMode) {
        const scientificButtons = [
            'sqrt', 'square', 'cube', 'nth-root', 'pi', 'factorial', 'ln', 'sign', 'reciprocal',
            'backspace', 'copy-to-clipboard', 'negate', 'exp', 'log', 'abs', 'power',
            'round', 'floor', 'ceil', 'sin', 'cos', 'tan', 'e', 'random', 'duplicate',
            'inverse', 'sign-change', 'euler', 'exit', 'square-root', 'cube-root', 'percent', 'ans'
        ];
        scientificButtons.forEach(id => {
            const button = document.createElement('button');
            button.id = id;
            button.textContent = id;
            button.addEventListener('click', () => {
                // ... other button functionalities
                if (id === 'ans') {
                    display.value += ans.toString();
                }
            });
            scientificSection.appendChild(button);
        });
    } else {
        scientificSection.innerHTML = '';
    }
});
document.addEventListener('keydown', (event) => {
    if (keyboardEnabled) {
        if (event.key === 'Enter' || event.key === '=') {
            try {
                ans = eval(display.value);
                display.value = ans.toString();
            } catch (error) {
                display.value = 'Error';
            }
        }
    }
});
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  display.value = '';
});
const openParenthesisButton = document.getElementById('open-parenthesis') as HTMLButtonElement;
const closeParenthesisButton = document.getElementById('close-parenthesis') as HTMLButtonElement;
openParenthesisButton.addEventListener('click', () => {
    display.value += '(';
});
closeParenthesisButton.addEventListener('click', () => {
    display.value += ')';
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue / 100).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
const sqrtButton = document.getElementById('sqrt') as HTMLButtonElement;
sqrtButton?.addEventListener('click', () => {
    try {
        display.value = Math.sqrt(parseFloat(display.value)).toString();
    }
    catch (e) {
        display.value = "Error";
    }
});
const powerOfTwoButton = document.getElementById('power-of-two') as HTMLButtonElement;
powerOfTwoButton?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue * currentValue).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
const plusMinusButton = document.getElementById('plus-minus') as HTMLButtonElement;
plusMinusButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (-currentValue).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
factorialButton.addEventListener('click', () => {
  try {
    const currentValue = parseFloat(display.value);
    display.value = factorial(currentValue).toString();
  } catch (error) {
    display.value = 'Error';
  }
});
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    display.value += Math.PI.toString();
});
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    try {
        display.value = Math.exp(parseFloat(display.value)).toString();
    } catch (error) {
        display.value = 'Error';
    }
});