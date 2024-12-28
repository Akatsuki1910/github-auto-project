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

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    });
});
