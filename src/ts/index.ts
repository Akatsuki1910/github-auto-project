// ... (Existing code)
let memory = 0;
const MCButton = document.getElementById('MC');
MCButton.addEventListener('click', () => {
    memory = 0;
    display.value = memory.toString();
});
const MRButton = document.getElementById('MR');
MRButton.addEventListener('click', () => {
    display.value = memory.toString();
});
const MSButton = document.getElementById('ms');
MSButton.addEventListener('click', () => {
    memory = parseFloat(display.value);
});
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const display = document.getElementById('display');
document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        memory = result; // Store result in memory
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Other existing event listeners)
const logButton = document.getElementById('log');
logButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.log10(parseFloat(display.value)).toString();
    }
});
const absButton = document.getElementById('abs');
absButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.abs(parseFloat(display.value)).toString();
    }
});
const inverseButton = document.getElementById('inverse');
inverseButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (1 / parseFloat(display.value)).toString();
    }
});
const roundButton = document.getElementById('round');
roundButton.addEventListener('click', () => {
    if (display.value) {
        display.value = Math.round(parseFloat(display.value)).toString();
    }
});
const signButton = document.getElementById('sign');
signButton.addEventListener('click', () => {
    if (display.value) {
        display.value = math.sign(parseFloat(display.value)).toString();
    }
});
