// ... (Existing code)
//Added Feature: Reset Button
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '';
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});

//Added Feature: Switch Notation
const switchNotationButton = document.getElementById('switch-notation') as HTMLButtonElement;
let currentNotation = 10; // Start with decimal
switchNotationButton.addEventListener('click', () => {
    currentNotation = currentNotation === 10 ? 2 : (currentNotation === 2 ? 16 : 10);
    switchNotationButton.textContent = `Switch Notation (${currentNotation === 10 ? 'Dec' : (currentNotation === 2 ? 'Bin' : 'Hex')})`;
    // Convert and display based on current notation
    // ... (Implementation for converting and displaying)
});

//Added Feature: Expand/Collapse Calculator
const expandCollapseButton = document.getElementById('expand-collapse') as HTMLButtonElement;
const calculatorContainer = document.getElementById('calculator') as HTMLDivElement;
let isExpanded = true;
expandCollapseButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    calculatorContainer.style.maxHeight = isExpanded ? '100%' : '100px'; // Adjust the collapsed height as needed
    expandCollapseButton.textContent = isExpanded ? 'Expand/Collapse' : 'Expand/Collapse';
});

//Added Feature: Toggle Scientific Buttons
const toggleScientificButtons = document.getElementById('toggle-scientific-buttons') as HTMLButtonElement;
const scientificSection = document.querySelector('.scientific-section') as HTMLDivElement;
scientificSection.style.display = 'none';
toggleScientificButtons.addEventListener('click', () => {
    if (scientificSection.style.display === 'none') {
        scientificSection.style.display = 'grid';
        toggleScientificButtons.textContent = 'Hide Scientific Buttons';
    } else {
        scientificSection.style.display = 'none';
        toggleScientificButtons.textContent = 'Scientific Buttons';
    }
});

//Added Feature: History Toggle
const historyToggleButton = document.getElementById('history-toggle') as HTMLButtonElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
historyToggleButton.addEventListener('click', () => {
  if (historyDisplay.style.display === 'none') {
    historyDisplay.style.display = 'block';
    historyToggleButton.textContent = 'Hide History';
  } else {
    historyDisplay.style.display = 'none';
    historyToggleButton.textContent = 'Show History';
  }
});

// Added Feature: Fullscreen
const fullscreenButton = document.getElementById('fullscreen') as HTMLButtonElement;
fullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
// ... (Rest of the existing code)