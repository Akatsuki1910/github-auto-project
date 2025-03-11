// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

// ... (Other existing code)

// ... existing functions

//Added screen brightness functionality
const toggleScreenBrightnessButton = document.getElementById('toggle-screen-brightness') as HTMLButtonElement;
let brightness = 1;
toggleScreenBrightnessButton.addEventListener('click', () => {
    brightness -= 0.1;
    if (brightness < 0) brightness = 1; // Reset to max brightness
    document.body.style.filter = `brightness(${brightness})`;
});

// ... existing code for other buttons

// Toggle Contrast
const toggleContrastButton = document.getElementById('toggle-contrast') as HTMLButtonElement;
let contrast = 1;
toggleContrastButton.addEventListener('click', () => {
    contrast -= 0.1;
    if (contrast < 0) contrast = 1;
    document.body.style.filter = `contrast(${contrast})`;
});

// Toggle Font Size
const toggleFontsizeButton = document.getElementById('toggle-fontsize') as HTMLButtonElement;
let fontSize = 16;
toggleFontsizeButton.addEventListener('click', () => {
  fontSize += 2;
  display.style.fontSize = fontSize + 'px';
});

//Copy display value to clipboard
const copyDisplayValueButton = document.getElementById('copy-display-value') as HTMLButtonElement;
copyDisplayValueButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert('Copied display value to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
});

//Added screen saturation functionality
const toggleScreenSaturationButton = document.getElementById('toggle-screen-saturation') as HTMLButtonElement;
let saturation = 1;
toggleScreenSaturationButton.addEventListener('click', () => {
    saturation -= 0.1;
    if (saturation < 0) saturation = 1;
    document.body.style.filter = `saturate(${saturation})`;
});