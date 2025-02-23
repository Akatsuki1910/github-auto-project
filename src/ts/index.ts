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
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const factorialBtn = document.getElementById('factorial');
const powerBtn = document.getElementById('power');
const logBtn = document.getElementById('log');
const roundBtn = document.getElementById('round');
const absBtn = document.getElementById('abs'); // Add absolute value button
const cbrtBtn = document.getElementById('cbrt'); //Cube root button
const tenPowerBtn = document.getElementById('ten-power'); // 10 to the power of x
const signBtn = document.getElementById('sign'); //Added sign button
const squaredBtn = document.getElementById('squared');

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// ... (Other existing functions)

squaredBtn?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Error";
        } else {
            const result = num * num;
            display.value = result.toString();
            ans = result;
            history.push(`${num}² = ${result}`);
            updateHistoryDisplay();
        }
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Rest of the existing code)
