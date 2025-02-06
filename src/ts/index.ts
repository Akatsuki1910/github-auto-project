// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let isDegreeMode = true;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)

    //Memory Features
    // ... existing memory functions

    const memoryResetButton = document.getElementById("mr") as HTMLButtonElement;
    memoryResetButton.addEventListener("click", () => {
        memoryValue = 0; // Reset memory value to 0
        display.value = "0";
        currentExpressionDisplay.textContent = ""; // Clear the current expression display
        currentInput = "";
        updateDisplay();
    });
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode") as HTMLButtonElement;
    toggleDarkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
    const currentTimButton = document.getElementById("current-time") as HTMLButtonElement;
    currentTimButton.addEventListener("click",()=>{
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        display.value = currentTime;
        currentExpressionDisplay.textContent = ""; // Clear the current expression display
        currentInput = currentTime;  //sets the current time to the input
        //No need to push to history since its not a calculation
    });
    const randomDigitButton = document.getElementById("random-digit") as HTMLButtonElement;
    randomDigitButton.addEventListener("click", () => {
        const randomDigit = Math.floor(Math.random() * 10);
        currentInput += randomDigit;
        display.value = currentInput;
    });
    const currentDateButton = document.getElementById("current-date") as HTMLButtonElement;
currentDateButton.addEventListener("click", () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    display.value = currentDate;
    currentExpressionDisplay.textContent = "";
    currentInput = currentDate;
});

    // ... (rest of the existing code)
});
