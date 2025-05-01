// ... (Existing code)
const calculateVolumeOfCubeButton = document.getElementById('calculate-volume-of-cube') as HTMLButtonElement;
calculateVolumeOfCubeButton.addEventListener('click', () => {
    const side = parseFloat(prompt('Enter side length:'));
    if (!isNaN(side)) {
        const volume = side * side * side;
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)