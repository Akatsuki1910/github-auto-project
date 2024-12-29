window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    // ... existing code

    // ... existing code
    const baseConverterButton = document.getElementById("base-converter") as HTMLButtonElement;
    baseConverterButton.addEventListener("click", () => {
        // ... existing code
    });

    const openGithubButton = document.getElementById("open-github") as HTMLButtonElement;
    openGithubButton.addEventListener("click", () => {
        window.open("https://github.com/Kenta-Sasaki/github-auto-project", "_blank");
    });

    const dateButton = document.getElementById("date") as HTMLButtonElement;
    dateButton.addEventListener("click", () => {
        const now = new Date();
        display.value = now.toLocaleDateString();
    });

    const exitButton = document.getElementById("exit") as HTMLButtonElement;
    exitButton.addEventListener("click", () => {
        window.close();
    });

    const display = document.getElementById("display") as HTMLInputElement;
    const evalButton = document.getElementById("eval") as HTMLButtonElement;
    evalButton.addEventListener("click", () => {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    });

    const log10Button = document.getElementById("log10") as HTMLButtonElement;
    log10Button.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            display.value = Math.log10(num).toString();
        }
        catch (error) {
            display.value = "Error";
        }
    });

    const localstorageClearButton = document.getElementById("localstorage-clear") as HTMLButtonElement;
    localstorageClearButton.addEventListener("click", () => {
        localStorage.clear();
        display.value = "LocalStorage Cleared";
    });

    const displayTimeButton = document.getElementById("display-time") as HTMLButtonElement;
    displayTimeButton.addEventListener("click", () => {
        const now = new Date();
        display.value = now.toLocaleTimeString();
    });

    const fibonacciButton = document.getElementById("fibonacci") as HTMLButtonElement;
    fibonacciButton.addEventListener("click", () => {
        try {
            const n = parseInt(display.value);
            if (n < 0) {
                display.value = "Error: Input must be non-negative.";
                return;
            }
            let a = 0, b = 1;
            for (let i = 0; i < n; i++) {
                const temp = b;
                b = a + b;
                a = temp;
            }
            display.value = a.toString();
        } catch (error) {
            display.value = "Error";
        }
    });
});
