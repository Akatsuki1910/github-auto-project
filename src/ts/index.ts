// ... (Existing code)
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    display.value = timeString;
});
let memoryValue = 0;
const mrcButton = document.getElementById('mrc') as HTMLButtonElement;
mrcButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value === '') {
        display.value = memoryValue.toString();
    }
    else {
        memoryValue = parseFloat(display.value);
        display.value = '';
    }
});
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
mPlusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue += parseFloat(display.value);
    display.value = '';
});
const mMinusButton = document.getElementById('m-minus') as HTMLButtonElement;
mMinusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue -= parseFloat(display.value);
    display.value = '';
});
const mcButton = document.getElementById('mc') as HTMLButtonElement;
mcButton.addEventListener('click', () => {
    memoryValue = 0;
});
const msButton = document.getElementById('ms') as HTMLButtonElement;
msButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue = parseFloat(display.value);
    display.value = '';
});
// ... (Rest of existing code)
const exportHistoryButton = document.getElementById('export-history') as HTMLButtonElement;
exportHistoryButton.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display');
    const historyText = historyDisplay.innerText;
    navigator.clipboard.writeText(historyText).then(() => {
        alert('History copied to clipboard!');
    }, () => {
        alert('Failed to copy history to clipboard.');
    });
});
const helpButton = document.getElementById('toggle-help');
const helpDisplay = document.getElementById('help-display');
helpButton.addEventListener('click', () => {
    if (helpDisplay.style.display === 'none') {
        helpDisplay.style.display = 'block';
    }
    else {
        helpDisplay.style.display = 'none';
    }
});