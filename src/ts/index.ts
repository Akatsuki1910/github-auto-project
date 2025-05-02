// ... (Existing code)
const calculateNthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
calculateNthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x:') || '0');
    const root = parseFloat(prompt('Enter value for n:') || '0');
    if (!isNaN(value) && !isNaN(root)) {
        display.value = Math.pow(value, 1/root).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
const calculateAverageButton = document.getElementById('calculate-average') as HTMLButtonElement;
calculateAverageButton.addEventListener('click', () => {
    const input = prompt('Enter numbers separated by commas:') || '';
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length > 0) {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        display.value = (sum / numbers.length).toString();
    }
    else {
        display.value = 'Invalid input';
    }
});
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
  const input = prompt('Enter numbers separated by commas:') || '';
  const numbers = input.split(',').map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
  if (numbers.length > 0) {
    const mid = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
      display.value = ((numbers[mid - 1] + numbers[mid]) / 2).toString();
    } else {
      display.value = numbers[mid].toString();
    }
  } else {
    display.value = 'Invalid input';
  }
});
const calculateModeButton = document.getElementById('calculate-mode') as HTMLButtonElement;
calculateModeButton.addEventListener('click', () => {
    const input = prompt('Enter numbers separated by commas:') || '';
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n));
    if (numbers.length > 0) {
        const counts = {};
        let mode = null;
        let maxCount = 0;
        for (const num of numbers) {
            counts[num] = (counts[num] || 0) + 1;
            if (counts[num] > maxCount) {
                mode = num;
                maxCount = counts[num];
            }
        }
        display.value = mode.toString();
    } else {
        display.value = 'Invalid input';
    }
});
// ... (Rest of existing code)