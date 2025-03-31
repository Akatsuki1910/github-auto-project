// ... (Existing code)
const toggleBasicScientificButton = document.getElementById('toggle-basic-scientific') as HTMLButtonElement;
toggleBasicScientificButton.addEventListener('click', () => {
    const scientificPad = document.getElementById('scientific-pad') as HTMLDivElement;
    if (scientificPad.style.display === 'none') {
        scientificPad.style.display = 'grid';
        toggleBasicScientificButton.textContent = 'Basic';
    } else {
        scientificPad.style.display = 'none';
        toggleBasicScientificButton.textContent = 'Scientific';
    }
});
const toggleFullscreenButton = document.getElementById('toggle-fullscreen') as HTMLButtonElement;
toggleFullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click',()=>{
    const currentDate = new Date().toLocaleDateString();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = currentDate;
});
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = currentTime;
});
const currentDatetimeButton = document.getElementById('current-datetime') as HTMLButtonElement;
currentDatetimeButton.addEventListener('click', () => {
    const currentDatetime = new Date().toLocaleString();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = currentDatetime;
});
const clearDisplayButton = document.getElementById('clear-display') as HTMLButtonElement;
clearDisplayButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = '';
});
// ... (Rest of the code)