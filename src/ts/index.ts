window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    // ... existing code
    const equalButton = document.getElementById("=") as HTMLButtonElement;
    let lastAnswer: number | null = null;
     const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;

    equalButton.addEventListener("click", () => {
            try {
                const result = eval(display.value);
                display.value = result.toString();
                lastAnswer = result;
            }
            catch (error) {
                display.value = "Error";
            }
    });
     lastAnswerButton.addEventListener("click", () => {
      if (lastAnswer !== null) {
          display.value = lastAnswer.toString();
      } else {
          display.value = "No previous answer";
      }
    });
    const decimalButton = document.getElementById("decimal") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
        decimalButton.addEventListener('click', () => {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    });
const openNewWindowButton = document.getElementById("open-new-window") as HTMLButtonElement;
openNewWindowButton.addEventListener("click", () => {
    window.open("https://www.example.com", "_blank");
});

    const currentDateButton = document.getElementById("current-date") as HTMLButtonElement;
    currentDateButton.addEventListener("click", () => {
        const currentDate = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        display.value = currentDate.toLocaleDateString(undefined, options);
    });
});