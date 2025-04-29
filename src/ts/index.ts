// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const toggleDisplayButton = document.getElementById('toggle-display');
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
const percentageButton = document.getElementById('percentage');
const currentDatetButton = document.getElementById('current-date');

// ... (Other existing variables)

let displayVisible = true;
let currentExpression = '';
let historyArr:string[] = [];

toggleDisplayButton?.addEventListener('click', () => {
  displayVisible = !displayVisible;
  if (displayVisible) {
    display.style.display = 'block';
  } else {
    display.style.display = 'none';
  }
display.value = displayVisible ? display.value : ''; // Added feature: Clear display when hidden
});

percentageButton?.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        const percentageValue = currentValue / 100;  // Calculate percentage value
        display.value = percentageValue.toString();
        currentExpression = percentageValue.toString();
        currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
        display.value = 'Error';
    }
});
currentDatetButton?.addEventListener('click', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    display.value = dateString; // Show the date in the display
    currentExpressionDisplay!.textContent = dateString; 
});
//Example button click handling (replace with your actual logic)
document.querySelectorAll('.digit, .operator, .equals, #percentage').forEach(button => {
    button.addEventListener('click', () => {
        const key = (button as HTMLElement).dataset.key;
        if (key) {
            if(key === '='){
                try{
                    const result = math.evaluate(currentExpression);
                    display.value = result.toString();
                    historyArr.push(currentExpression + '=' + result.toString());
                    currentExpression = '';
                    currentExpressionDisplay!.textContent = '';
                } catch (error) {
                    display.value = 'Error';
                }
            }else{
              currentExpression += key;
              currentExpressionDisplay!.textContent = currentExpression;          
            }
        }
    });
});

//Added feature: Clear last history entry button
const clearLastHistory = document.getElementById('clear-last-history') as HTMLButtonElement;
clearLastHistory.addEventListener('click', () => {
    if (historyArr.length > 0) {
        historyArr.pop(); //remove last history item
    }
});

// ... (Rest of the existing code)