// ... (Existing code)
const calculateVolumeButton = document.getElementById('calculate-volume') as HTMLButtonElement;
calculateVolumeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const shape = prompt('Enter the shape (sphere, cube, rectangular prism):', 'sphere');
    if (shape === null) return;
    let volume = 0;
    if (shape.toLowerCase() === 'sphere') {
        const radius = parseFloat(prompt('Enter the radius:', '1'));
        if (isNaN(radius)) {
            display.value = 'Error: Invalid input';
            return;
        }
        volume = (4 / 3) * math.pi * radius * radius * radius;
    } else if (shape.toLowerCase() === 'cube') {
        const side = parseFloat(prompt('Enter the side length:', '1'));
        if (isNaN(side)) {
            display.value = 'Error: Invalid input';
            return;
        }
        volume = side * side * side;
    } else if (shape.toLowerCase() === 'rectangular prism') {
        const length = parseFloat(prompt('Enter the length:', '1'));
        const width = parseFloat(prompt('Enter the width:', '1'));
        const height = parseFloat(prompt('Enter the height:', '1'));
        if (isNaN(length) || isNaN(width) || isNaN(height)) {
            display.value = 'Error: Invalid input';
            return;
        }
        volume = length * width * height;
    } else {
        display.value = 'Error: Invalid shape';
        return;
    }
    display.value = volume.toString();
});
// ... (Rest of the code)