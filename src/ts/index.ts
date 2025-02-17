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
    if (keyboardInputEnabled) {
        (document.getElementById('display') as HTMLInputElement)?.focus();
    }
});

const helpButton = document.getElementById('help');
helpButton?.addEventListener('click', () => {
  alert('This is a scientific calculator. Use the buttons to perform calculations.');
});
const clearDisplayBtn = document.getElementById('clear-display') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
clearDisplayBtn?.addEventListener('click', () => {
    display.value = '';
});

document.getElementById('open-docs')?.addEventListener('click', () => {
  window.open('https://www.example.com/calculator-docs', '_blank');
});

document.getElementById('current-year')?.addEventListener('click', () => {
    const currentYear = new Date().getFullYear();
    alert(`Current Year: ${currentYear}`);
});

//Duplicate Button functionality
document.getElementById('duplicate')?.addEventListener('click', () => {
    const displayValue = display.value;
    if (displayValue) {
        navigator.clipboard.writeText(displayValue)
            .then(() => {
                alert('Display value duplicated to clipboard!');
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    }
});
// ... (Rest of the code)