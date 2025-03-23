// ... (Existing code)
const toggleScientificButton = document.getElementById('toggle-scientific') as HTMLButtonElement;
const scientificButtons = document.querySelectorAll('.scientific') as NodeListOf<HTMLButtonElement>;
const toggleBasicButton = document.getElementById('toggle-basic') as HTMLButtonElement;
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
let scientificMode = false;
toggleScientificButton.addEventListener('click', () => {
    scientificMode = true; // Always turn on scientific mode
    scientificButtons.forEach(button => {
        button.style.display = 'inline-block';
    });
    mainPad.style.display = 'none'; // Hide the main pad
});
toggleBasicButton.addEventListener('click', () => {
    scientificMode = false; // Turn off scientific mode
    scientificButtons.forEach(button => {
        button.style.display = 'none';
    });
    mainPad.style.display = 'grid'; // Show the main pad
});
const toggleKeyboardButton = document.getElementById('toggle-keyboard') as HTMLButtonElement;
let keyboardVisible = false;
toggleKeyboardButton.addEventListener('click', () => {
    keyboardVisible = !keyboardVisible;
    // Implement keyboard show/hide logic here
    // This is a placeholder, actual implementation would involve showing/hiding an on-screen keyboard
    alert(`Keyboard visibility: ${keyboardVisible}`);
});
//Added current date time display toggle functionality
const toggleDateTimeButton = document.getElementById('toggle-date-time') as HTMLButtonElement;
const currentDateTimeDisplay = document.getElementById('current-date-time') as HTMLDivElement;
let dateTimeVisible = true;
toggleDateTimeButton.addEventListener('click', () => {
    dateTimeVisible = !dateTimeVisible;
    currentDateTimeDisplay.style.display = dateTimeVisible ? 'block' : 'none';
});
setInterval(() => {
    if (dateTimeVisible) {
        const now = new Date();
        currentDateTimeDisplay.textContent = now.toLocaleString();
    }
}, 1000);
// ... (Rest of the existing code)