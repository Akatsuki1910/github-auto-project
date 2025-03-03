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