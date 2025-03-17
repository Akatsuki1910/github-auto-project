// ... (Existing code)
const calculateHypotenuseButton = document.getElementById('calculate-hypotenuse') as HTMLButtonElement;
calculateHypotenuseButton.addEventListener('click', () => {
    const sideA = parseFloat(prompt('Enter side A:') || '0');
    const sideB = parseFloat(prompt('Enter side B:') || '0');
    if (isNaN(sideA) || isNaN(sideB)) {
        display.value = 'Invalid input';
    }
    else {
        const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
        display.value = hypotenuse.toString();
    }
});