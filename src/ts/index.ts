// ... (Existing Code)

// ... existing variables and buttons
// ... existing event listeners
// ... existing functions (cube, inverse, round, etc)

// ... (Existing Code)

// ... existing functions

window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code and variables)
    // ... (Existing buttons)
    // ... existing variables and buttons
    // ... existing event listeners
    // ... existing functions

    let currentExpression = "";
    let isDarkTheme = false;
    let memoryValue = 0; // Added memoryValue variable
    let lastAnswer = 0; // Store the last answer
    const display = document.getElementById("display") as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
    const toggleThemeBtn = document.getElementById("toggleTheme") as HTMLButtonElement;
    const history = document.getElementById("history") as HTMLDivElement;
    const historyBtn = document.getElementById("historyBtn") as HTMLButtonElement;
    const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement; // Added Clear History Button
    let historyData: string[] = [];
    const lastAnswerBtn = document.getElementById("lastAnswer") as HTMLButtonElement; // Add Last Answer Button
    // ... other buttons
    const absBtn = document.getElementById("abs") as HTMLButtonElement; // Absolute Value Button
    const floorBtn = document.getElementById("floor") as HTMLButtonElement; // Floor Button
    const inverseBtn = document.getElementById("inverse") as HTMLButtonElement; // Inverse Button
     const randBtn = document.getElementById("rand") as HTMLButtonElement; // Rand Button
     const ceilBtn = document.getElementById("ceil") as HTMLButtonElement; // Ceil Button
     const eBtn = document.getElementById("e") as HTMLButtonElement; // e Button
     const zeroButton = document.getElementById("0") as HTMLButtonElement;
     const ansBtn = document.getElementById("ans") as HTMLButtonElement; // Ans Button
     const modBtn = document.getElementById("mod") as HTMLButtonElement; // Modulo Button
     const exitBtn = document.getElementById("exit") as HTMLButtonElement;
     const copyBtn = document.getElementById("copy") as HTMLButtonElement;
     const fourBtn = document.getElementById("4") as HTMLButtonElement; // Number 4
     const fiveBtn = document.getElementById("5") as HTMLButtonElement; // Number 5
     const sixBtn = document.getElementById("6") as HTMLButtonElement; // Number 6
     const sevenBtn = document.getElementById("7") as HTMLButtonElement; // Number 7
     const eightBtn = document.getElementById("8") as HTMLButtonElement; // Number 8
     const nineBtn = document.getElementById("9") as HTMLButtonElement; // Number 9
     const clearAllBtn = document.getElementById("clearAll") as HTMLButtonElement;
     const deleteBtn = document.getElementById("delete") as HTMLButtonElement; //Added Delete Button
     const bracketBtn = document.getElementById("bracket") as HTMLButtonElement;
     const signBtn = document.getElementById("sign") as HTMLButtonElement; // Sign Change Button
     const lnBtn = document.getElementById("ln") as HTMLButtonElement; // Natural Logarithm Button
     let openBracket = true; // Keep track of bracket status

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
                openBracket = !openBracket; // Toggle the bracket status
            }
            // ... existing logic
           if (buttonText === "="){
              historyData.push(currentExpression + " = " + display.value);
              lastAnswer = parseFloat(display.value); // Store the last answer
           }
            // ... (Existing logic for other buttons)
           if (buttonText === "%") {
                currentExpression += "%";
                currentExpressionDisplay.textContent = currentExpression; 
           }
           if (buttonText === "Exit") {
                window.close(); // Close the window
           } 
           if (buttonText === "Copy") {
               navigator.clipboard.writeText(display.value).then(() => {
                    //alert("Copied to clipboard: " + display.value);
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
                    // Toggle the sign of the current number
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
                // Existing code for other buttons...
            });
        });

    // ... (Existing Event Listeners)
});
