// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
const display = document.getElementById('display') as HTMLInputElement;
let isDegreeMode = true;
let ans = 0; // Store the last answer
let isDarkMode = false; // Flag for dark mode

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

// Add exit button functionality
document.getElementById('exit')?.addEventListener('click', () => {
  window.close(); // Close the window
});

// Add ln (natural logarithm) functionality
document.getElementById('ln')?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log(currentValue);
        display.value = result.toString();
        ans = result; // Store the result in ans
    } catch (error) {
        display.value = "Error";
    }
});

// Add dark mode toggle functionality
document.getElementById('toggle-dark-mode')?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
});
// ... (rest of the code) 
// In the equals button event listener, store the result in ans
// Example:
// ... inside equals button click handler
// try {
//     const result = eval(display.value); 
//     display.value = result.toString();
//     ans = result;
// } catch (error) {
//     display.value = "Error";
// }
// ...