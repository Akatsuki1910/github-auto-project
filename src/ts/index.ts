// ... (Existing code)
//Added Feature: Toggle Virtual Keyboard
const keyboardToggleButton = document.getElementById('keyboard-toggle') as HTMLButtonElement;
const virtualKeyboard = document.getElementById('virtual-keyboard') as HTMLDivElement;
keyboardToggleButton.addEventListener('click', () => {
    if (virtualKeyboard.style.display === 'none' || virtualKeyboard.style.display === '') {
        virtualKeyboard.style.display = 'block';
        // Add keyboard buttons dynamically
        const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+', '=', 'C', 'DEL', '()'];
        keys.forEach(key => {
            const button = document.createElement('button');
            button.textContent = key;
            button.addEventListener('click', () => {
                // Handle key press logic (simplified for brevity)
                const display = document.getElementById('display') as HTMLInputElement;
                if (key === '=') {
                    try {
                        display.value = eval(display.value);
                    }
                    catch (e) {
                        display.value = 'Error';
                    }
                }
                else if (key === 'C') {
                    display.value = '';
                }
                else if (key === 'DEL') {
                    display.value = display.value.slice(0, -1);
                }
                else if (key === '()') {
                    // Implement parenthesis logic
                    // ...
                }
                else {
                    display.value += key;
                }
            });
            virtualKeyboard.appendChild(button);
        });
    }
    else {
        virtualKeyboard.style.display = 'none';
        virtualKeyboard.innerHTML = '';
    }
});
// ... other code