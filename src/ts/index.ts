// ... (Existing code)
const currentDateTimeUTCButton = document.getElementById('current-date-time-utc') as HTMLButtonElement;
currentDateTimeUTCButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toUTCString();
});
const currentDateLocaleButton = document.getElementById('current-date-locale') as HTMLButtonElement;
currentDateLocaleButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const now = new Date();
  display.value = now.toLocaleDateString();
});
// ... (Rest of existing code)