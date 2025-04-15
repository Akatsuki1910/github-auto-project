// ... (Existing code)
const dupeButton = document.getElementById('dupe') as HTMLButtonElement;
dupeButton.addEventListener('click', () => {
    if (display.value) {
        display.value += display.value;
    }
});
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    display.value += Math.random();
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value += Math.E;
});