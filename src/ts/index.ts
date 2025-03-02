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

// ... other code

//Added Fixed Decimal Toggle
// ... existing code

//Added Input History Toggle
// ... existing code

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // ... existing code
    }
});

// Added current date functionality
// ... existing code

// Added clear history functionality
// ... existing code

//Added copy to clipboard functionality
// ... existing code

//Added keyboard input toggle
// ... existing code
let keyboardEnabled = true;

// Add Ans feature
const toggleAnsButton = document.getElementById('toggle-ans') as HTMLButtonElement;
toggleAnsButton.addEventListener('click', () => {
    display.value += ans.toString();
});

const toggleBracketsButton = document.getElementById('toggle-brackets') as HTMLButtonElement;
toggleBracketsButton.addEventListener('click', () => {
    bracketsEnabled = !bracketsEnabled;
    toggleBracketsButton.textContent = bracketsEnabled ? "Brackets On" : "Brackets Off";
});

document.addEventListener('keydown', (event) => {
    if (keyboardEnabled) {
        // ... existing code
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
const openParen = document.getElementById('open-parenthesis') as HTMLButtonElement;
const closeParen = document.getElementById('close-parenthesis') as HTMLButtonElement;

openParen.addEventListener('click', () => {
    if(bracketsEnabled) display.value += '(';
});

closeParen.addEventListener('click', () => {
    if(bracketsEnabled) display.value += ')';
});

const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    display.value = (-parseFloat(display.value)).toString(); 
});

const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    display.value += 'Math.exp('; // Added exp functionality
});

const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
  display.value += 'Math.log10('; // Added log10 functionality
});

const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    display.value = Math.abs(parseFloat(display.value)).toString();
});

const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    display.value += '**'; // Added x^y functionality using ** operator
});

const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    display.value = Math.round(parseFloat(display.value)).toString();
});