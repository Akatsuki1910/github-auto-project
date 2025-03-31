// ... (Existing code)
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
// ... (Rest of the code)