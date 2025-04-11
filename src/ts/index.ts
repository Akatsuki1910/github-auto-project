// ... (Existing code)
const currentdateButton = document.getElementById('current-date') as HTMLButtonElement;
currentdateButton.addEventListener('click',()=>{
    const date = new Date();
    display.value = date.toLocaleDateString();
})
const currentTimeButton = document.getElementById('current-time') as HTMLButtonElement;
currentTimeButton.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    display.value = timeString;
});