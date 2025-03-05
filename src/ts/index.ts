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
// ... existing code for other buttons

// ... existing functionalities

// Added gravitational acceleration constant
const gButton = document.getElementById('gravitational-acceleration') as HTMLButtonElement;
gButton.addEventListener('click', () => {
    display.value += '9.80665';
});
let lastAnswer = 0;
const equalsButton = document.getElementById('=') as HTMLButtonElement; // Get the equals button
equalsButton.addEventListener('click', () => {
    try {
        lastAnswer = eval(display.value);
        display.value = String(lastAnswer);
        ans = lastAnswer; 
    } catch (error) {
        display.value = 'Error';
    }
});
const lastAnswerButton = document.getElementById('last-answer') as HTMLButtonElement;
lastAnswerButton.addEventListener('click', () => {
    display.value += String(lastAnswer);
});
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    display.value += '**(1/3)';
});
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (1/currentValue).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    if (display.value.startsWith('-')){
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
});
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click',()=>{
  display.value = '';
  ans=0;
});
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    display.value = Math.abs(parseFloat(display.value)).toString();
});
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    display.value = Math.round(parseFloat(display.value)).toString();
});

//Added memory functionalities
let memory = 0;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
  memory = parseFloat(display.value);
});
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
  display.value += memory.toString();
});
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memory = 0;
});
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    memory += parseFloat(display.value);
});

// Added 10 to the power of x functionality
const exp10Button = document.getElementById('exp-10') as HTMLButtonElement;
exp10Button.addEventListener('click', () => {
  display.value = Math.pow(10, parseFloat(display.value)).toString();
});

//Added floor functionality
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    display.value = Math.floor(parseFloat(display.value)).toString();
});

//Added ceil functionality
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    display.value = Math.ceil(parseFloat(display.value)).toString();
});

//Added random number generation functionality
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    display.value = Math.random().toString();
});