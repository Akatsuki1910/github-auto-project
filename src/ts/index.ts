// ... (Existing code)
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
    const display = document.getElementById('display');
    if (display) {
        display.value = randomNumber.toString();
    }
});
//Existing Code
const clearAllButton = document.getElementById('clear-all');
clearAllButton?.addEventListener('click', () => {
    const display = document.getElementById('display');
    if (display) {
        display.value = '0'; // Clear all and reset to 0
    }
    // Add any other actions needed for 'Clear All'
});
const degRadButton = document.getElementById('deg-rad');
let isDegree = true;
degRadButton?.addEventListener('click', () => {
    isDegree = !isDegree;
    degRadButton.textContent = isDegree ? 'Deg' : 'Rad';
});
const clearDisplayButton = document.getElementById('clear-display');
clearDisplayButton?.addEventListener('click', () => {
    const display = document.getElementById('display');
    if (display) {
        display.value = '';
    }
});
const currentDateButton = document.getElementById('current-date');
currentDateButton?.addEventListener('click', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    const display = document.getElementById('display');
    if (display) {
        display.value = dateString;
    }
});
const currentTimeButton = document.getElementById('current-time');
currentTimeButton?.addEventListener('click', () => {
    const today = new Date();
    const timeString = today.toLocaleTimeString();
    const display = document.getElementById('display');
    if (display) {
        display.value = timeString;
    }
});
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton?.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const toggleHistoryButton = document.getElementById('toggle-history');
const historyDiv = document.getElementById('history-display');
const clearHistoryButton = document.getElementById('clear-history');
// Ensure historyDiv exists before adding event listener
if (historyDiv) {
    historyDiv.style.display = 'none'; // Initially hidden
    toggleHistoryButton?.addEventListener('click', () => {
        if (historyDiv) {
            historyDiv.style.display = historyDiv.style.display === 'none' ? 'block' : 'none';
        }
    });
}
clearHistoryButton?.addEventListener('click', () => {
    historyDiv.innerHTML = '';
});
const toggleSciModeButton = document.getElementById('toggleSciMode');
const calculatorDiv = document.getElementById('calculator');
toggleSciModeButton?.addEventListener('click', () => {
    calculatorDiv?.classList.toggle('scientific-mode');
    const scientificButtons = document.querySelectorAll('.scientific');
    scientificButtons.forEach(button => {
        button.style.display = button.style.display === 'none' ? 'inline-block' : 'none';
    });
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