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
    //Added feature: dynamically add scientific buttons
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
            button.textContent = id; //Added feature: set textContent
            button.addEventListener('click', () => {
                // Basic implementation (replace with actual logic)
                if (id === 'clear') {
                    display.value = '';
                } else if (id === 'sqrt') {
                    display.value = Math.sqrt(parseFloat(display.value)).toString(); // Added sqrt functionality
                } else if (id === 'pi') {
                    display.value = Math.PI.toString(); // Added pi functionality
                } else if (id === 'square'){
                    display.value = Math.pow(parseFloat(display.value), 2).toString();
                } else if (id === 'backspace') { // Added backspace functionality
                    display.value = display.value.slice(0, -1);
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