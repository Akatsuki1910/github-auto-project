// ... (Existing code)
const currentTime12hButton = document.getElementById('current-time-12h') as HTMLButtonElement;
currentTime12hButton.addEventListener('click', () => {
    const now = new Date();
    let hours = now.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = hours + amPm;
});
// ... (Rest of the code)