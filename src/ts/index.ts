// ... (Existing code)
const currentdateButton = document.getElementById('current-date') as HTMLButtonElement;
currentdateButton.addEventListener('click',()=>{
    const date = new Date();
    display.value = date.toLocaleDateString();
})
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    display.value = timeString;
});
const currentDateTimeButton = document.getElementById('current-datetime') as HTMLButtonElement;
currentDateTimeButton.addEventListener('click',()=>{
  const now = new Date();
  display.value = now.toLocaleString();
});
const clearDisplayButton = document.getElementById('clear-display') as HTMLButtonElement;
clearDisplayButton.addEventListener('click', () => {
    display.value = '';
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    display.value = display.value + display.value;
});
const swapButton = document.getElementById('swap') as HTMLButtonElement;
swapButton.addEventListener('click', () => {
    if (display.value.length >= 2) {
        const swappedValue = display.value.slice(-2) + display.value.slice(0, -2);
        display.value = swappedValue;    
    }
});
const roundToDecimalButton = document.getElementById('round-to-decimal') as HTMLButtonElement;
roundToDecimalButton.addEventListener('click', () => {
  const num = parseFloat(display.value);
  if (!isNaN(num)) {
    display.value = num.toFixed(2);
  }
});