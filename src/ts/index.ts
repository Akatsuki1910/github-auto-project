// ... (Existing code)
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    display.value = randomNumber.toString();
});