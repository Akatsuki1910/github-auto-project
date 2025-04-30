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
//Clear expression display
const clearExpressionButton = document.getElementById('clear-expression') as HTMLButtonElement;
clearExpressionButton.addEventListener('click', () => {
  const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
  currentExpressionDisplay.textContent='';
});
//Insert x + y into display
const insertExpressionButton = document.getElementById('insert-expression') as HTMLButtonElement;
insertExpressionButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += 'x + y';
});
//Squared Root Button
const squaredRootButton = document.getElementById('squared-root') as HTMLButtonElement;
squaredRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try{
    	const result = math.sqrt(parseFloat(display.value));
	display.value = result.toString();
    }catch(e){
	console.error("Invalid input for squared root:",e);
	display.value = "Invalid input";
    }
});
//Cubed Functionality
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
cubedButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  try {
    const result = Math.pow(parseFloat(display.value), 3);
    display.value = result.toString();
  } catch (e) {
    console.error("Invalid input for cubed:", e);
    display.value = "Invalid input";
  }
});
// ... (Rest of the existing code)