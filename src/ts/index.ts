// ... (Existing code)
const calculateCircumferenceOfCircleButton = document.getElementById('calculate-circumference-of-circle') as HTMLButtonElement;
calculateCircumferenceOfCircleButton.addEventListener('click', () => {
    const radius = parseFloat(display.value);
    if (!isNaN(radius)) {
        const circumference = 2 * Math.PI * radius;
        display.value = circumference.toString();
    }
});
// ... (Rest of existing code)