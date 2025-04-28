// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const toggleDisplayButton = document.getElementById('toggle-display');
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
const percentageButton = document.getElementById('percentage');

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

//Example button click handling (replace with your actual logic)
document.querySelectorAll('.digit, .operator, .equals').forEach(button => {
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

// ... (Rest of the existing code)