window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    const sinButton = document.getElementById("sin") as HTMLButtonElement;
    const cosButton = document.getElementById("cos") as HTMLButtonElement;
    const tanButton = document.getElementById("tan") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;

    sinButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.sin(currentValue).toString();
        }
    });

    cosButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.cos(currentValue).toString();
        }
    });

    tanButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.tan(currentValue).toString();
        }
    });
});
