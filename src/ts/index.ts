// ... (Existing code)
const calculateCircleCircumferenceButton = document.getElementById('calculate-circle-circumference') as HTMLButtonElement;
calculateCircleCircumferenceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:', '1'));
    if (isNaN(radius)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const circumference = 2 * Math.PI * radius;
    display.value = circumference.toString();
});
// ... (Rest of the code)