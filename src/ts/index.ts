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

// ... (Rest of the code)
function updateHistoryDisplay(){
    historyDisplay.innerHTML = history.join('<br>');
}
// ... (Rest of the existing code)

// ... (Existing functions)

// Add trunc function
document.getElementById('trunc')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error";
        } else {
            const result = Math.trunc(num);
            display.value = result.toString();
            ans = result;
            history.push(`trunc(${num}) = ${result}`);
            updateHistoryDisplay();
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Add duplicate functionality
document.getElementById('duplicate')?.addEventListener('click', () => {
    display.value += display.value;
});

// Add sign change functionality
document.getElementById('sign-change')?.addEventListener('click', () => {
    if (display.value) {
        display.value = (-parseFloat(display.value)).toString();
    }
});

//Add sum functionality
document.getElementById('sum')?.addEventListener('click', () => {
    const numbers = display.value.split('+').map(Number).filter(n => !isNaN(n));
    const sum = numbers.reduce((a,b)=> a+b,0);
    display.value = sum.toString();
    ans = sum;
    history.push(numbers.join('+') + '=' + sum);
    updateHistoryDisplay();
});