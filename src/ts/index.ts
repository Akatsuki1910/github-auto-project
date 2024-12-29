window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
    const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;
    let memoryValue: number | null = null;

    memoryStoreButton.addEventListener("click", () => {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            memoryValue = currentValue;
            display.value = "Stored: " + memoryValue;
        } else {
            display.value = "Invalid input";
        }
    });

    memoryClearButton.addEventListener("click", () => {
        memoryValue = null;
        display.value = "Memory Cleared";
    });

    // ... existing code
});