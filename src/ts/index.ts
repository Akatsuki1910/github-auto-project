// ... (Existing code)

// ... existing functions

// ... (Other existing functions)
// ... (Existing code)
// ... (Existing variables)

// ... (Existing Event Listeners)

// ... (Existing functions and event listeners)

// ... (Existing Functions)

//Squared Sum Functionality

// ... (Other existing functions)

// Add power of two functionality
// ... existing code

//Add ln functionality
// ... existing code

// Add e functionality

//Add Mod functionality

// Add expm1 functionality

//Add sign change functionality

//Add Sum functionality

//Add Product functionality

// Add Average functionality

// Add Square Root functionality

// Add Cube Root functionality

// Add x^y functionality

//Add log2 functionality

// Add log1p functionality


// ... (Existing variable declarations)



// ... (Existing Event Listeners)

// ... existing event listeners

// ... (Existing event listeners)


const calculatePercentageButton = document.getElementById('calculate-percentage') as HTMLButtonElement;

calculatePercentageButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const currentValue = parseFloat(display.value);
  display.value = (currentValue / 100).toString();
});

const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue).toString();
});

const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue * currentValue).toString();
});

const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const root = parseFloat(prompt("Enter the root value:", "2") || "2"); // Default to square root if no input
    display.value = Math.pow(currentValue, 1/root).toString();
});

const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.PI.toString();
});

const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseInt(display.value);
    if (isNaN(currentValue)){
        display.value = "Invalid Input";
    }else{
        if(currentValue < 0) {
            display.value = "Invalid Input";
        }else{
            let result = 1;
            for (let i = 1; i <= currentValue; i++) {
                result *= i;
            }
            display.value = result.toString();
        }
    }
});
// ... (Rest of the existing code)