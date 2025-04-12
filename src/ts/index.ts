// ... (Existing code)
const calculateCuboidVolumeButton = document.getElementById('calculate-cuboid-volume') as HTMLButtonElement;
calculateCuboidVolumeButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter the length of the cuboid:') || '0');
    const width = parseFloat(prompt('Enter the width of the cuboid:') || '0');
    const height = parseFloat(prompt('Enter the height of the cuboid:') || '0');
    display.value = (length * width * height).toString();
});