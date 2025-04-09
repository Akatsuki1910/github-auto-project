// ... (Existing code)
const calculateMedianButton = document.getElementById('calculate-median') as HTMLButtonElement;
calculateMedianButton.addEventListener('click', () => {
    // ... (median calculation logic)
});

// ... other code ...

// ... (Rest of the code)
const currentUnixTimestampButton = document.getElementById('current-unix-timestamp') as HTMLButtonElement;
currentUnixTimestampButton.addEventListener('click', () => {
    display.value = Math.floor(Date.now() / 1000).toString();
});
const currentEpochTimeButton = document.getElementById('current-epoch-time') as HTMLButtonElement;
currentEpochTimeButton.addEventListener('click', () => {
    display.value = Date.now().toString();
});
const currentDateTimeIsoButton = document.getElementById('current-date-time-iso') as HTMLButtonElement;
currentDateTimeIsoButton.addEventListener('click', () => {
  display.value = new Date().toISOString();
});
const currentDateTimeLocaleButton = document.getElementById('current-date-time-locale') as HTMLButtonElement;
currentDateTimeLocaleButton.addEventListener('click', () => {
  display.value = new Date().toLocaleString();
});