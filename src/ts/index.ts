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
// ... Existing code

// Added feature: Toggle Vibration
// ... Existing Code

//Added feature: Toggle Sound
const toggleSoundButton = document.getElementById('toggle-sound') as HTMLButtonElement;
let isSoundEnabled = false;

toggleSoundButton.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    localStorage.setItem('soundEnabled', isSoundEnabled.toString());
});

function playClickSound(){
    if(isSoundEnabled){
        const clickSound = new Audio('./click.wav'); // Replace with your sound file
        clickSound.play();
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playClickSound);
    button.addEventListener('click', vibrateDevice); // Existing vibration function call
});

window.addEventListener('load', () => {
    const savedVibrationSetting = localStorage.getItem('vibrationEnabled');
    if (savedVibrationSetting) {
        isVibrationEnabled = savedVibrationSetting === 'true';
    }

    const savedSoundSetting = localStorage.getItem('soundEnabled');
    if (savedSoundSetting) {
        isSoundEnabled = savedSoundSetting === 'true';
    }
});

// Function to vibrate the device if enabled
function vibrateDevice() {
    // ... Existing vibration code
}
