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

// ... existing code for other buttons

// Toggle Hue Rotate
const toggleHueRotateButton = document.getElementById('toggle-hue-rotate') as HTMLButtonElement;
let hueRotation = 0;
toggleHueRotateButton.addEventListener('click', () => {
    hueRotation += 30;
    document.body.style.filter = `hue-rotate(${hueRotation}deg)`;
});

// Invert Colors
const invertColorsButton = document.getElementById('invert-colors') as HTMLButtonElement;
let isInverted = false;
invertColorsButton.addEventListener('click', () => {
    isInverted = !isInverted;
    document.body.style.filter = isInverted ? 'invert(100%)' : '';
});

// Grayscale
const grayscaleButton = document.getElementById('grayscale') as HTMLButtonElement;
let isGrayscale = false;
grayscaleButton.addEventListener('click', () => {
    isGrayscale = !isGrayscale;
    document.body.style.filter = isGrayscale ? 'grayscale(100%)' : '';
});

// Sepia
const sepiaButton = document.getElementById('sepia') as HTMLButtonElement;
let isSepia = false;
sepiaButton.addEventListener('click', () => {
    isSepia = !isSepia;
    document.body.style.filter = isSepia ? 'sepia(100%)' : '';
});

// Blur
const blurButton = document.getElementById('blur') as HTMLButtonElement;
let blurValue = 0;
blurButton.addEventListener('click', () => {
  blurValue += 2;
  document.body.style.filter = `blur(${blurValue}px)`;
});