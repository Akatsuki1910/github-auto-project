window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    const inverseButton = document.getElementById("inverse") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;

    inverseButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue !== 0) {
            display.value = (1 / currentValue).toString();
        } else if (currentValue === 0) {
            display.value = "Error: Division by zero";
        }
    });

    const eulerButton = document.getElementById("euler") as HTMLButtonElement;
    eulerButton.addEventListener("click", () => {
        display.value = Math.E.toString();
    });

    const floorButton = document.getElementById("floor") as HTMLButtonElement;
    floorButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.floor(currentValue).toString();
        }
    });

    const ceilButton = document.getElementById("ceil") as HTMLButtonElement;
    ceilButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.ceil(currentValue).toString();
        }
    });
});