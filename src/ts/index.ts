// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const currentDateTime = document.getElementById('current-date-time');
setInterval(() => {
    const now = new Date();
    currentDateTime.textContent = now.toLocaleString();
}, 1000);
// ... (Rest of the existing code)