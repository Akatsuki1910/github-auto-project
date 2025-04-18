// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const toggleThemeButton = document.getElementById('toggle-theme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-scheme');
            document.body.classList.toggle('dark-scheme');
            // Change display text color based on theme
            display.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
            // Change calculator background based on theme
            const calculator = document.getElementById('calculator');
            if (calculator) {
                calculator.style.backgroundColor = document.body.classList.contains('dark-scheme') ? '#555' : '#fff';
            }
        });
    }
    //Added cube function
    // ... existing functions
    const randomButton = document.getElementById('random');
    if (randomButton) {
        randomButton.addEventListener('click', () => {
            display.value = Math.random().toString();
        });
    }
    const doubleButton = document.getElementById('double');
    if (doubleButton) {
        doubleButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = (currentValue * 2).toString();
            }
        });
    }
    const tripleButton = document.getElementById('triple');
    if (tripleButton) {
        tripleButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = (currentValue * 3).toString();
            }
        });
    }
    // ... (rest of the code)
});