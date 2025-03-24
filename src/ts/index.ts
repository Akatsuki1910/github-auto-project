// ... (Existing code)
const floorButton = document.getElementById('floor');
floorButton.addEventListener('click', () => {
    display.value = Math.floor(parseFloat(display.value)).toString();
});
// ... (rest of the code)