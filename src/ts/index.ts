// ... (Existing code)

//Added feature: Double click to clear display
// ... (Existing code)

//Added feature: Keyboard support for digits and operators
// ... Existing code

//Added feature: Switch layout
const switchLayoutButton = document.getElementById('switch-layout') as HTMLButtonElement;
let isVertical = false;

switchLayoutButton.addEventListener('click', () => {
    isVertical = !isVertical;
    const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
    mainPad.style.flexDirection = isVertical ? 'column' : 'row';
    mainPad.style.gridTemplateColumns = isVertical ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)';
    mainPad.style.gridTemplateRows = isVertical ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)';
    mainPad.style.gridGap = '5px';
});

// ... existing other functions

// ... (Existing equals button event listener) - Add this line inside the listener
updateHistory(currentExpression, display.value);
// ... (Existing code)

//Added feature: Copy to Clipboard
const copyToClipboardButton = document.getElementById('copy-to-clipboard') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;

copyToClipboardButton.addEventListener('click', () => {
  navigator.clipboard.writeText(display.value).then(() => {
    // Optional: Provide feedback to the user that the copy was successful
    console.log('Copied to clipboard!');
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
});

// Added feature: Toggle Keyboard
// ... Existing code

// Added feature: Toggle Display Size
const toggleDisplaySizeButton = document.getElementById('toggle-display-size') as HTMLButtonElement;
let isLargeDisplay = false;

toggleDisplaySizeButton.addEventListener('click', () => {
  isLargeDisplay = !isLargeDisplay;
  const display = document.getElementById('display') as HTMLInputElement;
  display.style.fontSize = isLargeDisplay ? '2em' : '1em';
});