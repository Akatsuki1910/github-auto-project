// ... (Existing code)
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