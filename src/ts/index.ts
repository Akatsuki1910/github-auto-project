// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const toggleDisplayButton = document.getElementById('toggle-display');
// ... (Other existing variables)

let displayVisible = true;

toggleDisplayButton?.addEventListener('click', () => {
  displayVisible = !displayVisible;
  if (displayVisible) {
    display.style.display = 'block';
  } else {
    display.style.display = 'none';
  }
display.value = displayVisible ? display.value : ''; // Added feature: Clear display when hidden
});

// ... (Rest of the existing code)