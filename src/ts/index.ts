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

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        display.value += digit.textContent;
    });
});
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        display.value += operator.textContent;
    });
});
decimal.addEventListener('click', () => {
    display.value += '.';
});
clear.addEventListener('click', () => {
    display.value = '';
});
backspace.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
equals.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        ans = result;
        history.push(`${display.value} = ${result}`);
        updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});

function updateHistoryDisplay() {
  historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}

document.getElementById('toggle-history')?.addEventListener('click', () => {
  if (historyDisplay.style.display === 'none') {
    historyDisplay.style.display = 'block';
  } else {
    historyDisplay.style.display = 'none';
  }
});
document.getElementById('copy-history')?.addEventListener('click', () => {
  navigator.clipboard.writeText(history.join('\n')).then(() => {
    alert('History copied to clipboard!');
  });
});
document.getElementById('clear-history')?.addEventListener('click', () => {
  history = [];
  updateHistoryDisplay();
});