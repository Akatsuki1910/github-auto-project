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
    //Added nthRoot function
    const nthRootButton = document.getElementById('nthRoot');
    if (nthRootButton) {
        nthRootButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                // Get the nth root (e.g., cube root, 4th root, etc.)
                const root = parseFloat(prompt('Enter the root (e.g., 3 for cube root):', '3'));
                if (!isNaN(root)) {
                    display.value = Math.pow(currentValue, 1 / root).toString();
                }
            }
        });
    }
    const powerOfFourButton = document.getElementById('power-of-four');
    if (powerOfFourButton) {
        powerOfFourButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = Math.pow(currentValue, 4).toString();
            }
        });
    }
    // ... (rest of the code)
});