// ... (Existing code)
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    display.value = Math.PI.toString();
});