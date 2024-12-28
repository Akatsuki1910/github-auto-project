window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)

    const logButton = document.getElementById("log") as HTMLButtonElement;
    const expButton = document.getElementById("exp") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const absButton = document.getElementById("abs") as HTMLButtonElement;

    logButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.log10(currentValue).toString();
        }
    });

    expButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.exp(currentValue).toString();
        }
    });

    absButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.abs(currentValue).toString();
        }
    });
});
