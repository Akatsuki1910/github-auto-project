// ... (Existing code)

//Added feature: Toggle Error Messages
// ... existing code

// Add other functionalities
// ... existing code

//Added Scientific Notation Toggle
// ... existing code

// Added Deg/Rad toggle functionality
let isDegrees = true;
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    isDegrees = !isDegrees;
    degRadButton.textContent = isDegrees ? 'Deg' : 'Rad';
});

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
        // ... existing advanced mode button creation
    } else {
        scientificSection.innerHTML = '';
    }
});
document.addEventListener('keydown', (event) => {
    // ... (Existing Keydown logic)
});
// ... (Existing button event listeners)
// ... existing code
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    display.value += '**';
});
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    display.value += 'sin('; // Append "sin(" to the display
});
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton.addEventListener('click', () => {
    display.value += 'cos('; //Append "cos(" to the display
});
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    display.value += 'tan('; //Append "tan(" to the display
});
const asinButton = document.getElementById('asin') as HTMLButtonElement;
asinButton.addEventListener('click', () => {
    display.value += 'asin('; // Append "asin(" to the display
});
const acosButton = document.getElementById('acos') as HTMLButtonElement;
acosButton.addEventListener('click', () => {
    display.value += 'acos('; // Append "acos(" to the display
});
const atanButton = document.getElementById('atan') as HTMLButtonElement;
atanButton.addEventListener('click', () => {
    display.value += 'atan('; // Append "atan(" to the display
});
const expNotationButton = document.getElementById('exp-notation') as HTMLButtonElement;
expNotationButton.addEventListener('click', () => {
    display.value += 'e';
});

//Added Clear Entry (CE) button functionality
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    display.value = '';
});

// Added calculate expression button
const calculateExpressionButton = document.getElementById('calculate-expression') as HTMLButtonElement;
calculateExpressionButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
    ans = parseFloat(display.value); // Store the result in 'ans'
  } catch (error) {
    display.value = 'Error';
  }
});

//Added Double functionality
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    display.value = String(Number(display.value) * 2);
});

//Added Triple functionality
const tripleButton = document.getElementById('triple') as HTMLButtonElement;
tripleButton.addEventListener('click', () => {
    display.value = String(Number(display.value) * 3);
});
//Added Square functionality
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    const currentValue = Number(display.value);
    display.value = String(Math.pow(currentValue,2));
});
//Added Cube functionality
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const currentValue = Number(display.value);
    display.value = String(Math.pow(currentValue,3));
});

//Added Sign Change functionality
const signChangeButton = document.getElementById('sign-change') as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    display.value = String(Number(display.value) * -1);
});

//Added 10 to the power of x functionality
const tenToThePowerButton = document.getElementById('ten-to-the-power') as HTMLButtonElement;
tenToThePowerButton.addEventListener('click', () => {
  display.value = String(10**Number(display.value));
});

//Added Modulo functionality
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
  display.value += '%';
});
//Added Trunc functionality
const truncButton = document.getElementById('trunc') as HTMLButtonElement;
truncButton.addEventListener('click', () => {
    display.value = String(Math.trunc(Number(display.value)));
});
//Added Sign functionality
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
  display.value = Math.sign(Number(display.value)).toString();
});
//Added Nth Root functionality
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    display.value += '**(1/';
});

// Added Memory Store (M+) functionality
let memory = 0;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
  memory += Number(display.value);
});
// Added Memory Recall (MR) functionality
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    display.value = String(memory);
});

// Added Ans functionality
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    display.value += ans.toString();
});

//Added expm1 functionality
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    display.value = String(Math.expm1(Number(display.value)));

});