// ... (Existing code)
const calculateVolumeOfParallelepipedButton = document.getElementById('calculate-volume-of-parallelepiped') as HTMLButtonElement;
calculateVolumeOfParallelepipedButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter length:') || '0');
    const width = parseFloat(prompt('Enter width:') || '0');
    const height = parseFloat(prompt('Enter height:') || '0');
    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
        const volume = length * width * height;
        display.value = volume.toString();
    }
});
// ... (Rest of existing code)