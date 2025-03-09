// ... (Existing code)
//Added Feature: Tangent function
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.tan(parseFloat(display.value)).toString();
});