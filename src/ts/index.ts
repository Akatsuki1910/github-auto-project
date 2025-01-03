// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    // ... (Existing Code)
    // ... existing code
    // ... (rest of the code)
    let memoryValue = null;
    let lastAnswer = null;
    const history = [];
    const historyDiv = document.getElementById("history");
    const display = document.getElementById("display");
    // ... existing code ...
    const toggleHistoryButton = document.getElementById("toggle-history");
    toggleHistoryButton.addEventListener("click", () => {
        if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
            historyDiv.style.display = "block";
        }
        else {
            historyDiv.style.display = "none";
        }
    });

    const updateHistory = (value) => {
        history.push(value);
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    };

// clear history button
const clearHistoryButton = document.getElementById("clear-history");
clearHistoryButton.addEventListener("click", () => {
  history.length = 0; //履歴配列をクリア
  historyDiv.innerHTML = ""; //履歴表示をクリア
});

 // copy history button
const copyHistoryButton = document.getElementById("copy-history");
copyHistoryButton.addEventListener("click", () => {
    const historyText = history.join('\n');
    navigator.clipboard.writeText(historyText)
        .then(() => {
            alert('History copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});

    // ... existing code ...
    // Memory buttons
    // ... existing code ...

    // Sign Change button
    // ... (rest of the code)
    // ... (rest of the code)

    const openNewWindowButton = document.getElementById("open-new-window");
    openNewWindowButton.addEventListener("click", () => {
        window.open("https://www.google.com", "_blank");
    });
// Show Keyboard button
const showKeyboardButton = document.getElementById("show-keyboard");
const keyboardDiv = document.getElementById("keyboard");
showKeyboardButton.addEventListener("click", () => {
    if (keyboardDiv.style.display === "none" || keyboardDiv.style.display === "") {
        keyboardDiv.style.display = "block";
    }
    else {
        keyboardDiv.style.display = "none";
    }
});
const generateQrCodeButton = document.getElementById("generate-qrcode");
const qrcodeDiv = document.getElementById("qrcode");
generateQrCodeButton.addEventListener("click", () => {
    const displayValue = display.value;
    if (displayValue) {
      new QRCode(qrcodeDiv, {
          text: displayValue,
          width: 128,
          height: 128,
      });
  }
});
});
