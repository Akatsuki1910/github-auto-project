// ... (Existing code)
const calculateCubeSurfaceAreaButton = document.getElementById('calculate-cube-surface-area') as HTMLButtonElement;
calculateCubeSurfaceAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const side = parseFloat(prompt('Enter the side length:') || '0');
        display.value = (6 * Math.pow(side, 2)).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
const calculateSquareRootButton = document.getElementById('calculate-square-root') as HTMLButtonElement;
calculateSquareRootButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  try {
    const num = parseFloat(prompt('Enter a number:') || '0');
    if (num < 0) {
      display.value = 'Error: Cannot calculate square root of a negative number';
    } else {
      display.value = Math.sqrt(num).toString();
    }
  } catch (e) {
    display.value = 'Error';
  }
});
// ... (Rest of the code)