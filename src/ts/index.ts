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
});