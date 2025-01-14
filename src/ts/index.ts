// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    let currentExpression = "";
    let isDarkTheme = false;
    let memoryValue = 0; 
    let lastAnswer = 0; 
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const history = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; 
    let historyData: string[] = [];
    const lastAnswerBtn = document.getElementById("lastAnswer") as HTMLButtonElement; 

    // Memory buttons
    const memoryPlusBtn = document.getElementById("M+") as HTMLButtonElement;
    const memoryMinusBtn = document.getElementById("M-") as HTMLButtonElement; // Added M- button
    const memoryRecallBtn = document.getElementById("MR") as HTMLButtonElement;
    const memoryClearBtn = document.getElementById("MC") as HTMLButtonElement;

    // ... other buttons

    let openBracket = true; 

    function factorial(n: number): number {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
             if (buttonText === "()") {
                currentExpression += openBracket ? "(" : ")";
                currentExpressionDisplay.textContent = currentExpression;
                openBracket = !openBracket; 
            }
            
           if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
              lastAnswer = parseFloat(display.value); 
           }
           
           if (buttonText === "%") {
                currentExpression += "%";
                currentExpressionDisplay.textContent = currentExpression; 
           }
           if (buttonText === "Exit") {
                window.close();
           } 
           if (buttonText === "Copy") {
               navigator.clipboard.writeText(display.value).then(() => {
                   }).catch(err => {
                       console.error("Failed to copy: ", err);
                  });
            }
                if (buttonText >= "0" && buttonText <= "9") {
                    currentExpression += buttonText;
                    currentExpressionDisplay.textContent = currentExpression;
                 }
                 if (buttonText === "AC") {
                    currentExpression = "";
                    display.value = "";
                    currentExpressionDisplay.textContent = "";
                }
                if (buttonText === "DEL") {
                    currentExpression = currentExpression.slice(0, -1);
                    currentExpressionDisplay.textContent = currentExpression;
                 }
                   if (buttonText === "+/-") {
                       if (currentExpression && !isNaN(Number(currentExpression.slice(-1)))){
                           let numStr = "";
                           let i = currentExpression.length -1;
                           while (i >=0 && !isNaN(Number(currentExpression[i]))) {
                               numStr = currentExpression[i] + numStr;
                               i--;
                           }
                           const num = parseFloat(numStr);
                           const signedNum = -num;
                           currentExpression = currentExpression.substring(0, i + 1) + signedNum.toString();
                           currentExpressionDisplay.textContent = currentExpression;                   
                       }       
                }
                 if (buttonText === "ln"){
                    currentExpression += "Math.log(";
                     currentExpressionDisplay.textContent = currentExpression;
                 }

                 // Memory operations
                if (buttonText === "M+") {
                    memoryValue += parseFloat(display.value);
                }
                if (buttonText === "M-") {
                    memoryValue -= parseFloat(display.value);
                }
                if (buttonText === "MR") {
                    currentExpression += memoryValue.toString();
                    currentExpressionDisplay.textContent = currentExpression;
                }
                 if (buttonText === "MC"){
                     memoryValue = 0;
                 }   
            });
        });

    // ... (Existing Event Listeners)
});
