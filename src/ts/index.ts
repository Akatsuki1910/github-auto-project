// ... (Existing code)
const calculateVolumeOfCuboidButton = document.getElementById('calculate-volume-of-cuboid') as HTMLButtonElement;
calculateVolumeOfCuboidButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter length:'));
    const width = parseFloat(prompt('Enter width:'));
    const height = parseFloat(prompt('Enter height:'));
    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
        const volume = length * width * height;
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)