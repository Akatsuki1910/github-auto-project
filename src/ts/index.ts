// ... (Existing code)
const toggleColorSchemeButton = document.getElementById('toggle-color-scheme') as HTMLButtonElement;
toggleColorSchemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
    localStorage.setItem('color-scheme', document.body.classList.contains('dark-scheme') ? 'dark' : 'light');
    toggleColorSchemeButton.textContent = document.body.classList.contains('dark-scheme') ? 'Light Mode' : 'Dark Mode';
    const display = document.getElementById('display') as HTMLInputElement;
    display.style.backgroundColor = document.body.classList.contains('dark-scheme') ? '#555' : '#fff';
    display.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = document.body.classList.contains('dark-scheme') ? '#777' : '#ddd';
        button.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
    });
    localStorage.setItem('theme', document.body.classList.contains('dark-scheme') ? 'dark-scheme' : 'light-scheme');
});
window.addEventListener('load', () => {
    const savedScheme = localStorage.getItem('color-scheme');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        document.body.classList.remove(savedTheme === 'dark-scheme' ? 'light-scheme' : 'dark-scheme');
        toggleColorSchemeButton.textContent = savedTheme === 'dark-scheme' ? 'Light Mode' : 'Dark Mode';
    }
    if (savedScheme === 'dark') {
    }
    else {
    }
    const display = document.getElementById('display') as HTMLInputElement;
    display.style.backgroundColor = document.body.classList.contains('dark-scheme') ? '#555' : '#fff';
    display.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = document.body.classList.contains('dark-scheme') ? '#777' : '#ddd';
        button.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
    });
    //Added feature: Display current date on load
    const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
    currentDateButton.addEventListener('click',()=>{
        const today = new Date();
        const display = document.getElementById('display') as HTMLInputElement;

        display.value = today.toLocaleDateString();
    });
});
// ... (Rest of the code)