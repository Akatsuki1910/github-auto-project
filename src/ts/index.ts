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
    // ... other button listeners

    const toggleCalculatorButton = document.getElementById("toggle-calculator") as HTMLButtonElement;
    const calculatorDiv = document.getElementById("calculator") as HTMLDivElement;
    toggleCalculatorButton.addEventListener("click", () => {
        calculatorDiv.style.display = calculatorDiv.style.display === "none" ? "grid" : "none";
    });

    const copyToClipboardButton = document.getElementById("copy-to-clipboard") as HTMLButtonElement;
    copyToClipboardButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value)
            .then(() => {
            const messageContainer = document.getElementById("message-container") as HTMLDivElement;
            messageContainer.textContent = "Copied to clipboard!";
            setTimeout(() => {
                messageContainer.textContent = "";
            }, 2000);
        })
            .catch(err => {
            console.error("Failed to copy: ", err);
        });
    });

    const openInNewWindowButton = document.getElementById("open-in-new-window") as HTMLButtonElement;
    openInNewWindowButton.addEventListener("click", () => {
        window.open(window.location.href, '_blank');
    });

    const changeFontSizeButton = document.getElementById("change-font-size") as HTMLButtonElement;
    let fontSize = 16;
    changeFontSizeButton.addEventListener("click", () => {
        fontSize += 2;
        display.style.fontSize = fontSize + "px";
    });

    const toggleScientificModeButton = document.getElementById("toggle-scientific-mode") as HTMLButtonElement;
    const scientificButtons = document.querySelectorAll('.scientific') as NodeListOf<HTMLButtonElement>;
    toggleScientificModeButton.addEventListener('click', () => {
        scientificButtons.forEach(button => {
            button.style.display = button.style.display === 'none' ? 'grid' : 'none';
        });
    });
        const toggleBasicModeButton = document.getElementById("toggle-basic-mode") as HTMLButtonElement;
    const basicButtons = document.querySelectorAll('.basic') as NodeListOf<HTMLButtonElement>;
    toggleBasicModeButton.addEventListener('click', () => {
    basicButtons.forEach(button => {
    button.style.display = button.style.display === 'none' ? 'grid' : 'none';
    });
    });

    //Fullscreen Functionality
const fullscreenButton = document.getElementById("fullscreen") as HTMLButtonElement;
fullscreenButton.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
// Clear Display button
    const clearDisplayButton = document.getElementById("clear-display") as HTMLButtonElement;
    clearDisplayButton.addEventListener("click", () => {
        display.value = ''; // Clear the display
        currentInput = ""; // Clear the input
        updateDisplay(); // Update the display
    });
//Round to the nearest Integer Button
const roundToNearestIntegerButton = document.getElementById("round-to-nearest-integer") as HTMLButtonElement;
roundToNearestIntegerButton.addEventListener("click", () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
    const roundedValue = Math.round(currentValue);
    display.value = roundedValue.toString();
    currentInput = roundedValue.toString();
}
});
});

function updateDisplay() {
    display.value = currentInput;
}
