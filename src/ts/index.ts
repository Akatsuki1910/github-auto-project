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
});

// ... (Rest of the code)