window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
    const duplicateButton = document.getElementById("duplicate") as HTMLButtonElement;

    inverseButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue !== 0) {
            display.value = (1 / currentValue).toString();
        } else if (currentValue === 0) {
            display.value = "Error: Division by zero";
        }
    });

    // ... (Other existing code)

    duplicateButton.addEventListener("click", () => {
        display.value = display.value + display.value;    
    });
});