// ... (Existing code)
const randomButton = document.getElementById('random') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
randomButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});