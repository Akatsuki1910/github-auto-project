// ... (Existing code)
const calculateCircleCircumferenceButton = document.getElementById('calculate-circle-circumference') as HTMLButtonElement;
calculateCircleCircumferenceButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius of the circle:') || '0');
    display.value = (2 * Math.PI * radius).toString();
});