// ... (Existing code)
const toggleBoldButton = document.getElementById('toggle-bold') as HTMLButtonElement;
toggleBoldButton.addEventListener('click', () => {
    document.body.classList.toggle('bold-text');
});
const toggleItalicButton = document.getElementById('toggle-italic') as HTMLButtonElement;
toggleItalicButton.addEventListener('click', () => {
    document.body.classList.toggle('italic-text');
});
const toggleUnderlineButton = document.getElementById('toggle-underline') as HTMLButtonElement;
toggleUnderlineButton.addEventListener('click', () => {
    document.body.classList.toggle('underline-text');
});
const toggleStrikethroughButton = document.getElementById('toggle-strikethrough') as HTMLButtonElement;
toggleStrikethroughButton.addEventListener('click', () => {
    document.body.classList.toggle('strikethrough-text');
});
// ... (Rest of the code)