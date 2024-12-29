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
    const cubeButton = document.getElementById("cube") as HTMLButtonElement;
    const nthRootButton = document.getElementById("nthRoot") as HTMLButtonElement;

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

    cubeButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (currentValue * currentValue * currentValue).toString();
        }
    });

    nthRootButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        const n = parseFloat(prompt("Enter the nth root (e.g., 2 for square root, 3 for cube root):", "2") || "2"); // Default to square root if no input or invalid input

        if (!isNaN(currentValue) && !isNaN(n)) {
          display.value = (Math.pow(currentValue, 1/n)).toString();
        }
      });
});