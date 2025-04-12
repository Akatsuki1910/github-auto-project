// ... (Existing code)
const calculateSquareAreaButton = document.getElementById('calculate-square-area') as HTMLButtonElement;
calculateSquareAreaButton.addEventListener('click', () => {
    const side = parseFloat(prompt('Enter the side length of the square:') || '0');
    display.value = (side * side).toString();
});
const calculateNthRootButton = document.getElementById('calculate-nth-root') as HTMLButtonElement;
calculateNthRootButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter the base:') || '0');
    const root = parseFloat(prompt('Enter the root:') || '0');
    display.value = Math.pow(base, 1/root).toString();
});
const calculateCubeButton = document.getElementById('calculate-cube') as HTMLButtonElement;
calculateCubeButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter a value:') || '0');
    display.value = (value * value * value).toString();
});
const calculateInverseButton = document.getElementById('calculate-inverse') as HTMLButtonElement;
calculateInverseButton.addEventListener('click', () => {
  const value = parseFloat(prompt('Enter a value:') || '0');
  if (value === 0) {
    display.value = 'Error: Division by zero';
  } else {
    display.value = (1 / value).toString();
  }
});