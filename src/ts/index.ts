window.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let memory = 0;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            switch (buttonText) {
                // ... (Existing code remains unchanged)
                case "AC": // All Clear functionality
                    currentInput = "";
                    display.value = "";
                    memory = 0; // Clear memory
                    break;
                // ... other cases
            }
        });
    });
});