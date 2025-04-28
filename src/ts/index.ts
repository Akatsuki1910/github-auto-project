// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const randomButton = document.getElementById('random');
// ... (Existing event listeners)
randomButton?.addEventListener('click', () => {
    display.value = Math.random().toString();
});
// ... (Rest of the existing code)