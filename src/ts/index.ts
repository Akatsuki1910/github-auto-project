// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const openHistoryButton = document.getElementById('open-history') as HTMLButtonElement;
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
let history: string[] = [];
let ans = 0;

openHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    }
    else {
        historyDisplay.style.display = 'none';
    }
});

clearHistoryButton.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});

const equalsButton = document.getElementById('=') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const display = document.getElementById('display') as HTMLInputElement;
        ans = eval(display.value);
        display.value = ans.toString();
        history.push(display.value);
        currentExpressionDisplay.textContent = ''; //Added to clear current expression
    }
    catch (error) {
        // ... existing error handling
    }
});
const ansButton = document.getElementById('toggle-ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ans;
});

// ... other existing code

// ... (Other existing functions)
// ... (Rest of the existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
const memorySection = document.querySelector('.memory-section') as HTMLDivElement;
let memoryValue = 0;

//Added current expression display
document.querySelectorAll('.digit, .operator, .decimal, .equals').forEach(button => {
    button.addEventListener('click', () => {
        currentExpressionDisplay.textContent = display.value + (button as HTMLButtonElement).textContent;
    });
});

clearHistoryButton.addEventListener('click', () => {
  currentExpressionDisplay.textContent = '';
})

//Added backspace functionality
const deleteButton = document.getElementById('delete') as HTMLButtonElement;
deleteButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
    currentExpressionDisplay.textContent = currentExpressionDisplay.textContent?.slice(0, -1);
});

// Added theme toggle functionality
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
let isDarkTheme = false;
toggleThemeButton.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-scheme', isDarkTheme);
  document.body.classList.toggle('light-scheme', !isDarkTheme);
});

//Added keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/^[0-9]$/.test(key)) {
      display.value += key;
      currentExpressionDisplay.textContent = display.value;  // Update current expression display
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      display.value += key;
      currentExpressionDisplay.textContent = display.value; // Update current expression display
    }
});

//Added current date functionality to current-date button
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click',()=>{
    const currentDate = new Date().toLocaleDateString();
    display.value += currentDate;
    currentExpressionDisplay.textContent = display.value;
});

//Added clear functionality
const clearButton = document.getElementById('clear') as HTMLButtonElement;
clearButton.addEventListener('click', () => {
    display.value = '';
    currentExpressionDisplay.textContent = '';
});

//Added Square Root functionality
const sqrtButton = document.getElementById('sqrt') as HTMLButtonElement;
sqrtButton.addEventListener('click', () => {
    const displayValue = parseFloat(display.value);
    if (!isNaN(displayValue)){
        const result = Math.sqrt(displayValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = display.value;
    }
});
//Added memory functionality
const memoryButtons = [
    { id: 'm+', action: () => { memoryValue += parseFloat(display.value); memorySection.textContent = `M: ${memoryValue}`; } },
    { id: 'm-', action: () => { memoryValue -= parseFloat(display.value); memorySection.textContent = `M: ${memoryValue}`; } },
    { id: 'mc', action: () => { memoryValue = 0; memorySection.textContent = ''; } },
    { id: 'mr', action: () => { display.value += memoryValue; currentExpressionDisplay.textContent = display.value; } },
];
memoryButtons.forEach(({ id, action }) => {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = id.toUpperCase();
    button.addEventListener('click', action);
    memorySection.appendChild(button);
});

