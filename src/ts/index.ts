// ... (Existing code)
const rndButton = document.getElementById('rnd') as HTMLButtonElement;
rndButton.addEventListener('click', () => {
    display.value = Math.random().toString();
});
// ... (Existing Code)