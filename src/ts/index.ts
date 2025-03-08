// ... (Existing code)
//Added Feature: Toggle Virtual Keyboard
const keyboardToggleButton = document.getElementById('keyboard-toggle') as HTMLButtonElement;
const virtualKeyboard = document.getElementById('virtual-keyboard') as HTMLDivElement;
const display = document.getElementById('display') as HTMLInputElement;
keyboardToggleButton.addEventListener('click', () => {
    if (virtualKeyboard.style.display === 'none' || virtualKeyboard.style.display === '') {
        virtualKeyboard.style.display = 'block';
        // Add keyboard buttons dynamically
        const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+', '=', 'C', 'DEL', '()', 'sin', 'cos', 'tan', 'sqrt']; // Added scientific functions
        keys.forEach(key => {
            const button = document.createElement('button');
            button.textContent = key;
            button.addEventListener('click', () => {
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
                    // Implement parenthesis logic (future enhancement)
                } //Added Scientific functions
                else if (key === 'sin' || key === 'cos' || key === 'tan' || key === 'sqrt') {
                    const value = parseFloat(display.value);
                    if (!isNaN(value)) {
                        switch (key) {
                            case 'sin':
                                display.value = Math.sin(value).toString();
                                break;
                            case 'cos':
                                display.value = Math.cos(value).toString();
                                break;
                            case 'tan':
                                display.value = Math.tan(value).toString();
                                break;
                            case 'sqrt':
                                display.value = Math.sqrt(value).toString();
                                break;
                        }
                    } else {
                      display.value = 'Invalid input';
                    }
                  } else {
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