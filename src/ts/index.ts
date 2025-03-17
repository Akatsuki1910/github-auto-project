// ... (Existing code)
const calculateCylinderVolumeButton = document.getElementById('calculate-cylinder-volume') as HTMLButtonElement;
calculateCylinderVolumeButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    const height = parseFloat(prompt('Enter the height:') || '0');
    if (isNaN(radius) || isNaN(height)) {
        display.value = 'Invalid input';
    }
    else {
        const volume = Math.PI * Math.pow(radius, 2) * height;
        display.value = volume.toString();
    }
});
const display = document.getElementById('display') as HTMLInputElement;
const dropButton = document.getElementById('drop') as HTMLButtonElement;
dropButton.addEventListener('click', () => {
    if (display.value) {
        display.value = display.value.slice(0, -1);
    }
});
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    display.value += '**';
});
const signChangeButton = document.getElementById('sign-change') as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    if (display.value) {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        }
        else {
            display.value = '-' + display.value;
        }
    }
});
const reciprocalButton = document.getElementById('reciprocal') as HTMLButtonElement;
reciprocalButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue === 0) {
            display.value = 'Cannot divide by zero';
        }
        else {
            display.value = (1 / currentValue).toString();
        }
    }
    catch (error) {
        display.value = 'Invalid input';
    }
});