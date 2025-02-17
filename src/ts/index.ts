// ... (Existing code)

document.getElementById('toggle-basic-advanced')?.addEventListener('click', () => {
    const scientificSection = document.querySelector('.scientific-section');
    const additionalFunctions = document.querySelector('.additional-functions');
    if (scientificSection && additionalFunctions) {
        const isHidden = scientificSection.style.display === 'none';
        scientificSection.style.display = isHidden ? 'grid' : 'none';
        additionalFunctions.style.display = isHidden ? 'grid' : 'none';
    }
});

//Keyboard input toggle
let keyboardInputEnabled = true;
const keyboardInputToggleBtn = document.getElementById('keyboard-input-toggle') as HTMLButtonElement;

keyboardInputToggleBtn.addEventListener('click', () => {
    keyboardInputEnabled = !keyboardInputEnabled;
    keyboardInputToggleBtn.textContent = `Keyboard Input: ${keyboardInputEnabled ? 'ON' : 'OFF'}`;
    // Added functionality: Focus on the display when keyboard input is enabled
    if (keyboardInputEnabled) {
        (document.getElementById('display') as HTMLInputElement)?.focus();
    }
});

//Help button functionality
const helpButton = document.getElementById('help');
helpButton?.addEventListener('click', () => {
  alert('This is a scientific calculator. Use the buttons to perform calculations.');
});
//Clear Display Button
const clearDisplayBtn = document.getElementById('clear-display') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
clearDisplayBtn?.addEventListener('click', () => {
    display.value = '';
});

// ... (Rest of the code)