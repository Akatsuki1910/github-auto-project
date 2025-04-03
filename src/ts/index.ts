// ... (Existing code)
const currentTime24hButton = document.getElementById('current-time-24h') as HTMLButtonElement;
currentTime24hButton.addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = `${hours}:${minutes}`;
});

const secondsSinceEpochButton = document.getElementById('current-seconds-since-epoch') as HTMLButtonElement;
secondsSinceEpochButton.addEventListener('click', () => {
  const now = new Date();
  const seconds = Math.floor(now.getTime() / 1000);
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = seconds.toString();
});
// ... (Rest of the code)