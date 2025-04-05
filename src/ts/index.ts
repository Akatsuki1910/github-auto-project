// ... (Existing code)
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.random().toString();
});
const integerButton = document.getElementById('integer') as HTMLButtonElement;
integerButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const currentValue = parseFloat(display.value);
  display.value = Math.floor(currentValue).toString();
});
// ... (Rest of the code)