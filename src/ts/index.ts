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