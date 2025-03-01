// ... (Existing code)

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

// ... existing other functions

//Added deg button
const degButton = document.getElementById('deg') as HTMLButtonElement;
degButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  let radians = parseFloat(display.value);
  let degrees = radians * (180 / Math.PI);
  display.value = degrees.toString();
});

//Added rad button
const radButton = document.getElementById('rad') as HTMLButtonElement;
radButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    let degrees = parseFloat(display.value);
    let radians = degrees * (Math.PI / 180);
    display.value = radians.toString();
});

//Added negate button
const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = (-parseFloat(display.value)).toString();
});