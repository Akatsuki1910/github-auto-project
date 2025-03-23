// ... (Existing code)
const toggleScientificButton = document.getElementById('toggle-scientific') as HTMLButtonElement;
const scientificButtons = document.querySelectorAll('.scientific') as NodeListOf<HTMLButtonElement>;
let scientificMode = false;
toggleScientificButton.addEventListener('click', () => {
    scientificMode = !scientificMode;
    scientificButtons.forEach(button => {
        button.style.display = scientificMode ? 'inline-block' : 'none';
    });
});
const keyboardButton = document.getElementById('keyboard') as HTMLButtonElement;
let keyboardVisible = false;
keyboardButton.addEventListener('click', () => {
    keyboardVisible = !keyboardVisible;
    const keyboard = document.createElement('div');
    keyboard.id = 'keyboard-container';
    if (keyboardVisible) {
        // Create keyboard layout here (simplified for brevity)
        keyboard.textContent = 'Keyboard';
        document.body.appendChild(keyboard);
    }
    else {
        const existingKeyboard = document.getElementById('keyboard-container');
        if (existingKeyboard) {
            document.body.removeChild(existingKeyboard);
        }
    }
});
const fullscreenButton = document.getElementById('fullscreen') as HTMLButtonElement;
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});
const copyButton = document.getElementById('copy') as HTMLButtonElement;
copyButton.addEventListener('click', () => {
    const displayValue = (document.getElementById('display') as HTMLInputElement).value;
    navigator.clipboard.writeText(displayValue);
});
// ... (Rest of the existing code)