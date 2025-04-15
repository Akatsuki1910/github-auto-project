// ... (Existing code)
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    display.value += Math.random();
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value += Math.E;
});