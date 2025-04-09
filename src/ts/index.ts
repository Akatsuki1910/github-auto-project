// ... (Existing code)
const calculateSumOfCubesButton = document.getElementById('calculate-sum-of-cubes') as HTMLButtonElement;
calculateSumOfCubesButton.addEventListener('click', () => {
    const numbersString = prompt('Enter numbers separated by commas:');
    if (numbersString) {
        const numbers = numbersString.split(',').map(Number);
        const sumOfCubes = numbers.reduce((acc, curr) => acc + curr * curr * curr, 0);
        display.value = sumOfCubes.toString();
    }
});
// ... (Rest of the code)