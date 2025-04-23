// ... (Existing code)
const randomButton = document.getElementById('random');
randomButton?.addEventListener('click', () => {
    display.value = Math.random().toString();
});