// ... (Existing code)
const negateButton = document.getElementById('negate');
if (negateButton) {
    negateButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            if (display.value) {
                display.value = (-parseFloat(display.value)).toString();
            }
        }
    });
}
let lastAnswer: string = '0';
const lastAnswerButton = document.getElementById('last-answer');
if (lastAnswerButton) {
    lastAnswerButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value += lastAnswer;
        }
    });
}
const equalsButton = document.getElementById('equals');
if (equalsButton) {
    equalsButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                lastAnswer = math.evaluate(display.value).toString();
                display.value = lastAnswer;
            }
            catch (error) {
                display.value = 'Error';
            }
        }
    });
}
const clearButton = document.getElementById('clear');
if (clearButton) {
    clearButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value = '';
        }
    });
}