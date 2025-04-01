// ... (Existing code)
const calculateAreaButton = document.getElementById('calculate-area') as HTMLButtonElement;
calculateAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const shape = prompt('Enter the shape (circle, square, rectangle):', 'circle');
    if (shape === null) return;
    let area = 0;
    if (shape.toLowerCase() === 'circle') {
        const radius = parseFloat(prompt('Enter the radius:', '1'));
        if (isNaN(radius)) {
            display.value = 'Error: Invalid input';
            return;
        }
        area = math.pi * radius * radius;
    } else if (shape.toLowerCase() === 'square') {
        const side = parseFloat(prompt('Enter the side length:', '1'));
        if (isNaN(side)) {
            display.value = 'Error: Invalid input';
            return;
        }
        area = side * side;
    } else if (shape.toLowerCase() === 'rectangle') {
        const length = parseFloat(prompt('Enter the length:', '1'));
        const width = parseFloat(prompt('Enter the width:', '1'));
        if (isNaN(length) || isNaN(width)) {
            display.value = 'Error: Invalid input';
            return;
        }
        area = length * width;
    } else {
        display.value = 'Error: Invalid shape';
        return;
    }
    display.value = area.toString();
});
// ... (Rest of the code)