// ... (Existing code)

// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
const display = document.getElementById('display') as HTMLInputElement;
let isDegreeMode = true;
let ans = 0; // Store the last answer
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

//Added functionality for digits and operators
// ... (rest of the code)

// Add ln function
function ln(x: number): number {
    return Math.log(x);
}

document.getElementById('ln')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error";
        } else if (num <= 0) {
            display.value = "Error: Invalid input for ln"; // Handle invalid input
        } else {
            const result = ln(num);
            display.value = result.toString();
            ans = result;
            history.push(`ln(${num}) = ${result}`);
            updateHistoryDisplay();
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Add expm1 function
function expm1(x: number): number {
    return Math.expm1(x);
}
document.getElementById('expm1')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error";
        } else {
            const result = expm1(num);
            display.value = result.toString();
            ans = result;
            history.push(`expm1(${num}) = ${result}`);
            updateHistoryDisplay();
        }
    } catch (error) {
        display.value = "Error";
    }
});


// ... (Rest of the code)
function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.join('<br>');
}
// ... (Rest of the existing code)

// Add random number generation
document.getElementById('random')?.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
    ans = randomNumber;
    history.push(`rnd = ${randomNumber}`);
    updateHistoryDisplay();
});