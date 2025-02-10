// ... (Existing code)
const display = document.getElementById("display") as HTMLInputElement;
let currentInput = "";
let currentExpression = "";
const currentExpressionDisplay = document.getElementById("currentExpressionDisplay") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyArr: string[] = [];
let lastAnswer = 0;
let memoryValue = 0;
let mode = 'rad';
let keypadVisible = true;
let scientificMode = false;
let theme = 'light';
let fontSize = 16;

window.addEventListener("DOMContentLoaded", () => {
    // existing code
    // ... (Other button event listeners)
    // ... (Other buttons)
    // ... existing buttons
    // ... existing functions
    // ... existing button event listeners
    // ... other functions
    const toggleRadDegButton = document.getElementById("toggle-rad-deg") as HTMLButtonElement;
    toggleRadDegButton.addEventListener('click', () => {
        mode = mode === 'rad' ? 'deg' : 'rad';
        toggleRadDegButton.textContent = mode.toUpperCase();
    });

    const toggleFullscreenButton = document.getElementById("toggle-fullscreen") as HTMLButtonElement;
    toggleFullscreenButton.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    });
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;
    duplicateButton.addEventListener('click', () => {
        if (currentInput !== "") {
            currentInput += currentInput;
            display.value = currentInput;
        }
    });
    const resetButton = document.getElementById("reset-calculator") as HTMLButtonElement;
    resetButton.addEventListener('click', () => {
        display.value = '';
        currentInput = '';
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
        historyArr.length = 0;  // Clear history array
        historyDiv.innerHTML = ''; // Clear history display
        lastAnswer = 0;
        memoryValue = 0;
    });
    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener('click', () => {
        theme = theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', theme === 'dark');
        document.body.classList.toggle('light-theme', theme === 'light');
    });
    const toggleFontsizeButton = document.getElementById("toggle-fontsize") as HTMLButtonElement;
    toggleFontsizeButton.addEventListener('click', () => {
        fontSize = fontSize === 16 ? 24 : 16; // Toggle between 16px and 24px
        display.style.fontSize = fontSize + "px";
    })
    const openSettingsButton = document.getElementById("open-settings") as HTMLButtonElement;
    openSettingsButton.addEventListener('click', () => {
        // Placeholder for opening settings
        alert("Settings functionality will be added later.");
    });
    const openInNewButton = document.getElementById("open-in-new") as HTMLButtonElement;
    openInNewButton.addEventListener('click', () => {
        window.open(window.location.href, '_blank');
    });
    // existing code ...
});
// ... other existing functions

// ... (Existing code)

// ... other existing functions