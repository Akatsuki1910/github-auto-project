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
    const cubeButton = document.getElementById('cube');
    if (cubeButton) {
        cubeButton.addEventListener('click', () => {
            const currentValue = display.value;
            try {
                const result = math.pow(parseFloat(currentValue), 3);
                display.value = result.toString();
            }
            catch (error) {
                display.value = 'Error';
            }
        });
    }
    // ... (rest of the code)
});