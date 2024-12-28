window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    const historyDiv = document.getElementById("history");
    const history: string[] = [];
    let memory = 0;
    let parenthesisOpen = false;
    let isDarkTheme = false;
    const body = document.body;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // ... (other cases)
        });
    });

    // ... other functions
    const calculateSumButton = document.getElementById("calculate-sum") as HTMLButtonElement;
    calculateSumButton.addEventListener("click", () => {
        try {
            const numbers = currentInput.split(/\+|-|\*|\//g).map(Number);
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            display.value = sum.toString();
            currentInput = sum.toString();
        } catch (error) {
            display.value = "Error";
        }
    });

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    });

    const calculateAverageButton = document.getElementById("calculate-average") as HTMLButtonElement;
    calculateAverageButton.addEventListener("click", () => {
        try {
            const numbers = currentInput.split(/\+|-|\*|\//g).map(Number);
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            const average = sum / numbers.length;
            display.value = average.toString();
            currentInput = average.toString();
        } catch (error) {
            display.value = "Error";
        }
    });
});
