// ... (Existing code)
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    display.value = Math.random().toString();
});
const integerDivisionButton = document.getElementById('integer-division') as HTMLButtonElement;
integerDivisionButton.addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue) {
    try {
      const result = math.evaluate(currentValue + ' // 2');
      display.value = result.toString();
    } catch (error) {
      display.value = 'Error';
    }
  }
});
// ... (Rest of existing code)