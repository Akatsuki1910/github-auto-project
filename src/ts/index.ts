// ... (Existing code)

// Add sign change functionality

// ... (Existing variable declarations)

// ... (Existing Event Listeners)

// ... other button event listeners

//Added feature: Keyboard support for digits and operators
// ... Existing keyboard event listener

// Added parentheses buttons
// ... Existing parenthesis button event listeners

let ans = 0;
// ... Existing equals button event listener

// ... existing ans button event listener

//Added exp button
// ... Existing exp button event listener

//Added log button
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += 'Math.log10('; // Added log10 functionality
});

//Added power button
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '**';
});

//Added round button
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.round(eval(display.value)).toString();
});

//Added abs button
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.abs(eval(display.value)).toString();
});