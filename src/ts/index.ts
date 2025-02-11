// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let displayColor = "black";

window.addEventListener("DOMContentLoaded", () => {
    // ... existing code

    const toggleDisplayColorButton = document.getElementById("toggle-display-color") as HTMLButtonElement;
    toggleDisplayColorButton.addEventListener('click', () => {
        displayColor = displayColor === "black" ? "red" : "black";
        display.style.color = displayColor;
    });

    // ... other existing event listeners
    //Added Inverse Functionality
    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    inverseButton.addEventListener('click', () => {
        try {
            const result = 1 / parseFloat(currentInput);
            currentInput = result.toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });

    //Round Functionality
    const roundButton = document.getElementById("round") as HTMLButtonElement;
    roundButton.addEventListener('click', () => {
      try {
        const result = Math.round(parseFloat(currentInput));
        currentInput = result.toString();
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
      }
    });

    const cubeButton = document.getElementById("cube") as HTMLButtonElement;
    cubeButton.addEventListener('click', () => {
        try {
            const result = Math.pow(parseFloat(currentInput), 3);
            currentInput = result.toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    });
    const sqrtNButton = document.getElementById("sqrt-n") as HTMLButtonElement;
    sqrtNButton.addEventListener('click', () => {
      try {
        const n = parseFloat(prompt("Enter the root (e.g., 2 for square root, 3 for cube root):", "2") || "2");
        const x = parseFloat(currentInput);

        if (isNaN(n) || isNaN(x)) {
          display.value = "Invalid input";
          return;
        }

        const result = Math.pow(x, 1/n);
        currentInput = result.toString();
        display.value = currentInput;

      } catch (error) {
        display.value = "Error";
      }
    });
        //Sign function
        const signButton = document.getElementById("sign") as HTMLButtonElement;
        signButton.addEventListener('click', () =>{
            const num = parseFloat(currentInput);
            currentInput = Math.sign(num).toString();
            display.value = currentInput;
        });
    const ceilButton = document.getElementById("ceil") as HTMLButtonElement;
    ceilButton.addEventListener('click', () => {
        try{
            currentInput = Math.ceil(parseFloat(currentInput)).toString();
            display.value = currentInput;
        }catch(error){
            display.value = "Error";
        }
    });
    const floorButton = document.getElementById("floor") as HTMLButtonElement;
    floorButton.addEventListener('click', () => {
      try {
        currentInput = Math.floor(parseFloat(currentInput)).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
      }
    });
});