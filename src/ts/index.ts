// ... (Existing code)
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
});

//Added feature: Displaying current date and time
const currentDateTimeButton = document.getElementById('current-datetime') as HTMLButtonElement;
currentDateTimeButton.addEventListener('click',()=>{
  const display = document.getElementById('display') as HTMLInputElement;
  const currentDateTime = new Date().toLocaleString();
  display.value = currentDateTime;
});

const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click',()=>{
  const display = document.getElementById('display') as HTMLInputElement;
  const currentDate = new Date().toLocaleDateString();
  display.value = currentDate;
});

const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click',()=>{
  const display = document.getElementById('display') as HTMLInputElement;
  const currentTime = new Date().toLocaleTimeString();
  display.value = currentTime;
});
//Added Exit Button Functionality
const exitButton = document.getElementById('exit') as HTMLButtonElement;
exitButton.addEventListener('click', () => {
  window.close();
});
//Added debug button to log display value to console
const debugButton = document.getElementById('debug') as HTMLButtonElement;
debugButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    console.log("Current display value:", display.value);
});
//Added delete last character button
const deleteLastCharButton = document.getElementById('delete-last-char') as HTMLButtonElement;
deleteLastCharButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value.slice(0, -1);
});
//Open a new window button
const openNewWindowButton = document.getElementById('open-new-window') as HTMLButtonElement;
openNewWindowButton.addEventListener('click', () => {
    window.open('https://www.example.com', '_blank');
});
// ... (Rest of the existing code)