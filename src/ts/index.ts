// ... (Existing code)

//Added feature: Toggle Error Messages
// ... existing code

// Add other functionalities
// ... existing code

//Added Scientific Notation Toggle
// ... existing code

// Added Deg/Rad toggle functionality
// ... existing code

const display = document.getElementById('display') as HTMLInputElement;
let ans = 0;
let bracketsEnabled = true;
let keyboardEnabled = true;
const toggleBasicAdvancedButton = document.getElementById('toggle-basic-advanced') as HTMLButtonElement;
const scientificSection = document.querySelector('.scientific-section') as HTMLDivElement;
let isAdvancedMode = false;
toggleBasicAdvancedButton.addEventListener('click', () => {
    isAdvancedMode = !isAdvancedMode;
    scientificSection.style.display = isAdvancedMode ? 'grid' : 'none';
    toggleBasicAdvancedButton.textContent = isAdvancedMode ? 'Advanced' : 'Basic';
    if (isAdvancedMode) {
        const scientificButtons = [
            'sqrt', 'square', 'cube', 'nth-root', 'pi', 'factorial', 'ln', 'sign', 'reciprocal',
            'backspace', 'clear', 'copy-to-clipboard', 'negate', 'exp', 'log', 'abs', 'power',
            'round', 'floor', 'ceil', 'sin', 'cos', 'tan', 'e', 'random', 'duplicate',
            'inverse', 'sign-change', 'euler', 'exit', 'square-root', 'cube-root', 'percent'
        ];
        scientificButtons.forEach(id => {
            const button = document.createElement('button');
            button.id = id;
            button.textContent = id;
            button.addEventListener('click', () => {
                if (id === 'clear') {
                    display.value = '';
                } else if (id === 'sqrt') {
                    display.value = Math.sqrt(parseFloat(display.value)).toString();
                } else if (id === 'pi') {
                    display.value = Math.PI.toString();
                } else if (id === 'square'){
                    display.value = Math.pow(parseFloat(display.value), 2).toString();
                } else if (id === 'backspace') {
                    display.value = display.value.slice(0, -1);
                } else if (id === 'copy-to-clipboard') { // Added copy-to-clipboard functionality
                    navigator.clipboard.writeText(display.value);
                }
            });
            scientificSection.appendChild(button);
        });
    } else {
        scientificSection.innerHTML = '';
    }
});
document.addEventListener('keydown', (event) => {
    if (keyboardEnabled) {
        if (event.key === 'Enter' || event.key === '=') {
            try {
                ans = eval(display.value);
                display.value = ans.toString();
            } catch (error) {
                display.value = 'Error';
            }
        }
    }
});