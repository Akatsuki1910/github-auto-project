// ... (Existing code)
const percentageCalculationButton = document.getElementById('percentage-calculation');
percentageCalculationButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    const percentageValue = currentValue / 100;
    display.value = percentageValue.toString();
});
const copyDisplayButton = document.getElementById('copy-display');
copyDisplayButton?.addEventListener('click', () => {
    const displayValue = display.value;
    navigator.clipboard.writeText(displayValue)
        .then(() => {
        alert('Copied to clipboard: ' + displayValue);
    })
        .catch(err => {
        console.error('Failed to copy: ', err);
    });
});
const duplicateDisplayButton = document.getElementById('duplicate-display');
duplicateDisplayButton?.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value);
});
const toggleAudioButton = document.getElementById('toggle-audio');
let isAudioOn = true;
toggleAudioButton?.addEventListener('click', () => {
    isAudioOn = !isAudioOn;
    toggleAudioButton.textContent = isAudioOn ? 'Audio On' : 'Audio Off';
    // Add logic to actually control audio output (e.g., using the Web Audio API)
});
const randomNumberButton = document.getElementById('random-number');
randomNumberButton?.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});
const clearAllButton = document.getElementById('clear-all');
clearAllButton?.addEventListener('click', () => {
    display.value = '0';
});
const degRadButton = document.getElementById('deg-rad');
let isDegree = true;
degRadButton?.addEventListener('click', () => {
    isDegree = !isDegree;
    degRadButton.textContent = isDegree ? 'Deg' : 'Rad';
});
const clearDisplayButton = document.getElementById('clear-display');
clearDisplayButton?.addEventListener('click', () => {
    display.value = '';
});
const currentDateButton = document.getElementById('current-date');
currentDateButton?.addEventListener('click', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    display.value = dateString;
});
const currentTimeButton = document.getElementById('current-time');
currentTimeButton?.addEventListener('click', () => {
    const today = new Date();
    const timeString = today.toLocaleTimeString();
    display.value = timeString;
});
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton?.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const toggleHistoryButton = document.getElementById('toggle-history');
const historyDiv = document.getElementById('history-display');
const clearHistoryButton = document.getElementById('clear-history');
historyDiv.style.display = 'none';
toggleHistoryButton?.addEventListener('click', () => {
    historyDiv.style.display = historyDiv.style.display === 'none' ? 'block' : 'none';
});
clearHistoryButton?.addEventListener('click', () => {
    historyDiv.innerHTML = '';
});
const toggleSciModeButton = document.getElementById('toggleSciMode');
const calculatorDiv = document.getElementById('calculator');
const scientificPad = document.getElementById('scientific-pad');
toggleSciModeButton?.addEventListener('click', () => {
    if (scientificPad) {
        scientificPad.style.display = scientificPad.style.display === 'none' ? 'block' : 'none';
    }
});
const fullscreenButton = document.getElementById('fullscreen');
fullscreenButton?.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen();
    }
});
const display = document.getElementById('display');