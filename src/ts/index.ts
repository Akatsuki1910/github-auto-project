// ... (Existing code)
const piButton = document.getElementById('pi');
if (piButton) {
    piButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value = Math.PI.toString();
        }
    });
}