// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
const display = document.getElementById('display') as HTMLInputElement;
let isDegreeMode = true;
let ans = 0; // Store the last answer
let isDarkMode = false; // Flag for dark mode
let history: string[] = []; // History array to store calculations
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;

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
        history.push(`ln(${currentValue}) = ${result}`); // Add to history
        updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});

// Add dark mode toggle functionality
document.getElementById('toggle-dark-mode')?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
});

//Add log2 functionality
document.getElementById('log2')?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log2(currentValue);
        display.value = result.toString();
        ans = result;
          history.push(`log2(${currentValue}) = ${result}`); // Add to history
          updateHistoryDisplay();
    }
    catch (error) {
        display.value = "Error";
    }
});

// Add expm1 functionality
document.getElementById('expm1')?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.expm1(currentValue);
        display.value = result.toString();
        ans = result;
          history.push(`expm1(${currentValue}) = ${result}`); // Add to history
          updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});

// Add cbrt functionality
document.getElementById('cbrt')?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.cbrt(currentValue);
        display.value = result.toString();
        ans = result;
          history.push(`cbrt(${currentValue}) = ${result}`); // Add to history
          updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});

// Add copy history functionality
document.getElementById('copy-history')?.addEventListener('click', () => {
    navigator.clipboard.writeText(history.join('\n')).then(() => {
        alert('History copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy history: ', err);
    });
});

// Add clear history functionality
document.getElementById('clear-history')?.addEventListener('click', () => {
    history = [];
    updateHistoryDisplay();
});

function updateHistoryDisplay() {
    historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}

document.getElementById('toggle-history')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay.style.display === 'none' || historyDisplay.style.display === '') {
        historyDisplay.style.display = 'block';
    } else {
        historyDisplay.style.display = 'none';
    }
    updateHistoryDisplay();
});
// Add log1p functionality
document.getElementById('log1p')?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log1p(currentValue);
        display.value = result.toString();
        ans = result;
        history.push(`log1p(${currentValue}) = ${result}`);
        updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});

//Add log10 functionality
document.getElementById('log10')?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const result = Math.log10(currentValue);
        display.value = result.toString();
        ans = result;
        history.push(`log10(${currentValue}) = ${result}`);
        updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (rest of the code) 
// In the equals button event listener, store the result in ans
// Example:
// ... inside equals button click handler
// try {
//     const result = eval(display.value); 
//     display.value = result.toString();
//     ans = result;
//      history.push(`${display.value} = ${result}`); // Add calculation to history
//      updateHistoryDisplay();
// } catch (error) {
//     display.value = "Error";
// }
// ...