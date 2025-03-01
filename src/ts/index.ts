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
// ... Existing round button event listener

//Added abs button
// ... Existing abs button event listener

//Added floor button
// ... Existing floor button event listener

//Added ceil button
// ... Existing ceil button event listener

//Added random number generation
// ... Existing random button event listener

//Added sin button
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += 'Math.sin('; // Added sin functionality
});

//Added cos button
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += 'Math.cos('; // Added cos functionality
});

//Added tan button
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += 'Math.tan('; // Added tan functionality
});

//Added e button
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += 'Math.E';
});

//Added dms button
const dmsButton = document.getElementById('dms') as HTMLButtonElement;
dmsButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  let degrees = parseFloat(display.value);
  let minutes = (degrees - Math.floor(degrees)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;
  display.value = `${Math.floor(degrees)}°${Math.floor(minutes)}'${seconds.toFixed(2)}"`;
});