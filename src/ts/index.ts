// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});
const tenPowerButton = document.getElementById('ten-power') as HTMLButtonElement;
tenPowerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    }
});
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 3).toString();
    }
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
let lastAnswer = 0;

const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        lastAnswer = result;
    } catch (error) {
        display.value = 'Error';
    }
});

ansButton.addEventListener('click', () => {
    display.value += lastAnswer.toString();
});
const openParenButton = document.getElementById('open-paren') as HTMLButtonElement;
openParenButton.addEventListener('click', () => {
    display.value += '(';
});
const closeParenButton = document.getElementById('close-paren') as HTMLButtonElement;
closeParenButton.addEventListener('click', () => {
    display.value += ')';
});
const squareRootButton = document.getElementById('square-root') as HTMLButtonElement;
squareRootButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.sqrt(currentValue).toString();
  }
});