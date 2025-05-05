// ... (Existing code)
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = math.pi.toString();
});
// ... (Rest of existing code)