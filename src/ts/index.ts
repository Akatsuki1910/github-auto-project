// ... (Existing code)
const randomButton = document.getElementById('random') as HTMLButtonElement;
randomButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.random().toString();
});
// ... (Rest of existing code)