// ... (Existing code)
let lastAnswer: number | null = null;
const calculateLastAnswerButton = document.getElementById('calculate-last-answer') as HTMLButtonElement;

calculateLastAnswerButton.addEventListener('click', () => {
    if (lastAnswer !== null) {
        display.value = lastAnswer.toString();
    }
});

// ... (In the equals button event listener)
        lastAnswer = result;
// ... (Rest of the code)