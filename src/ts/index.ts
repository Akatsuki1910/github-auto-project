window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
     // ... existing code

    const baseConverterButton = document.getElementById("base-converter") as HTMLButtonElement;
    baseConverterButton.addEventListener("click", () => {
        const currentValue = display.value;
        const fromBase = parseInt(prompt("Enter the current base (2-36):", "10") || "10");
        const toBase = parseInt(prompt("Enter the target base (2-36):", "2") || "2");

        if (isNaN(fromBase) || fromBase < 2 || fromBase > 36 || isNaN(toBase) || toBase < 2 || toBase > 36) {
            display.value = "Invalid base";
        } else {
            try {
                const decimalValue = parseInt(currentValue, fromBase);
                display.value = decimalValue.toString(toBase);
            } catch (error) {
                display.value = "Invalid input";
            }
        }
    });
});