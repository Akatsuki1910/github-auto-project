// ... (Existing code)
const currentMillisecondButton = document.getElementById('current-millisecond') as HTMLButtonElement;
currentMillisecondButton.addEventListener('click', () => {
    const today = new Date();
    const millisecond = today.getMilliseconds();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = millisecond.toString();
});
const timezoneButton = document.getElementById('current-timezone') as HTMLButtonElement;
timezoneButton.addEventListener('click', () => {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset();
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = timezoneOffset.toString();
});
// ... (Rest of the code)