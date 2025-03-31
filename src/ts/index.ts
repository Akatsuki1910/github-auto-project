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
// ... (Rest of the code)