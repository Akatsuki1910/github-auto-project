// ... (Existing Code)
window.addEventListener("DOMContentLoaded", () => {
    // ... (Existing Code)

    const toggleThemeButton = document.getElementById("toggle-theme") as HTMLButtonElement;
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // ... (Existing Code)
    // ... existing code
    const equalButton = document.getElementById("=") as HTMLButtonElement;
    let lastAnswer: number | null = null;
     const lastAnswerButton = document.getElementById("last-answer") as HTMLButtonElement;
     let memoryValue: number | null = null;
    const memoryRecallButton = document.getElementById("mem-recall") as HTMLButtonElement;
    const memoryPlusButton = document.getElementById("mem-plus") as HTMLButtonElement;  
        const memoryClearButton = document.getElementById("memory-clear") as HTMLButtonElement;  
    const memoryStoreButton = document.getElementById("memory-store") as HTMLButtonElement;
const mrcButton = document.getElementById("mrc") as HTMLButtonElement;

equalButton.addEventListener("click", () => {
            try {
                const result = eval(display.value);
                display.value = result.toString();
                lastAnswer = result;
                addToHistory(display.value);
            }
            catch (error) {
                display.value = "Error";
                addToHistory("Error");

            }
    });

     lastAnswerButton.addEventListener("click", () => {
      if (lastAnswer !== null) {
          display.value = lastAnswer.toString();
      } else {
          display.value = "No previous answer";
      }
    });
    const decimalButton = document.getElementById("decimal") as HTMLButtonElement;
    const display = document.getElementById("display") as HTMLInputElement;
        decimalButton.addEventListener('click', () => {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    });
const openNewWindowButton = document.getElementById("open-new-window") as HTMLButtonElement;
openNewWindowButton.addEventListener("click", () => {
    window.open("https://www.example.com", "_blank");
});
// 新しいタブで開くボタンの追加
const openNewTabButton = document.getElementById("open-new-tab") as HTMLButtonElement;
openNewTabButton.addEventListener("click", () => {
  window.open("https://www.google.com", "_blank");
});

    const currentDateButton = document.getElementById("current-date") as HTMLButtonElement;
    currentDateButton.addEventListener("click", () => {
        const currentDate = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        display.value = currentDate.toLocaleDateString(undefined, options);
    });

  const deleteLastDigitButton = document.getElementById("delete-last-digit") as HTMLButtonElement;
        deleteLastDigitButton.addEventListener("click", () => {
                display.value = display.value.slice(0, -1);
        })
    const signChangeButton = document.getElementById("sign-change") as HTMLButtonElement;
    signChangeButton.addEventListener("click", () => {
        if (display.value) {
            if (display.value.startsWith("-")) {
                display.value = display.value.slice(1);
            }
            else {
                display.value = "-" + display.value;
            }
        }
    });
        const historyDiv = document.getElementById("history") as HTMLDivElement;
        const toggleHistoryButton = document.getElementById("toggleHistory") as HTMLButtonElement;

        function addToHistory(entry: string) {
                const p = document.createElement("p");
                p.textContent = entry;
                historyDiv.appendChild(p);
        }

        toggleHistoryButton.addEventListener("click", () => {
                if (historyDiv.style.display === "none") {
                    historyDiv.style.display = "block";
                }
                else {
                    historyDiv.style.display = "none";
                }
        });
        const clearHistoryButton = document.getElementById("clear-history") as HTMLButtonElement;
        clearHistoryButton.addEventListener("click", () => {
                historyDiv.innerHTML = ""; //履歴削除
        });
    const calculateTaxButton = document.getElementById("calculate-tax") as HTMLButtonElement;
    calculateTaxButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const tax = currentValue * 0.08;
            display.value = (currentValue + tax).toString();
            addToHistory(display.value);   
        } catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });
const localStorageSaveButton = document.getElementById("localstorage-save") as HTMLButtonElement;
localStorageSaveButton.addEventListener("click", () => {
    localStorage.setItem("calculatorDisplayValue", display.value);
    alert("Saved to local storage.");
});
    const localStorageLoadButton = document.getElementById("localstorage-load") as HTMLButtonElement;
    localStorageLoadButton.addEventListener("click", () => {
        const savedValue = localStorage.getItem("calculatorDisplayValue");
        if (savedValue) {
            display.value = savedValue;
        }
        else {
            alert("No saved value in local storage.");
        }
    });
    // ローカルストレージをクリアするボタンの追加
    const localStorageClearButton = document.getElementById("localstorage-clear") as HTMLButtonElement;
    localStorageClearButton.addEventListener("click", () => {
        localStorage.removeItem("calculatorDisplayValue");
        alert("Local storage cleared.");
    });
     const displayTimeButton = document.getElementById("display-time") as HTMLButtonElement;
    displayTimeButton.addEventListener("click", () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        display.value = timeString; // 計算結果の代わりに現在時刻を表示
        addToHistory(timeString); // 現在時刻を履歴に追加
    });
        const roundUpButton = document.getElementById("round-up") as HTMLButtonElement;
    roundUpButton.addEventListener("click", () => {
        try{
        const result = Math.ceil(parseFloat(display.value));
        display.value = result.toString();
        addToHistory(display.value);
        }
        catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    })

        // ランダムな文字列を生成するボタンを追加
        const randomStringButton = document.getElementById("random-string") as HTMLButtonElement;
    randomStringButton.addEventListener("click", () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        display.value = result;
        addToHistory(result);
    });
    // x^2のボタン機能実装
    const squaredButton = document.getElementById("squared") as HTMLButtonElement;
    squaredButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const result = currentValue * currentValue;
            display.value = result.toString();
            addToHistory(display.value);
        } catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });
        // x^3のボタン機能実装
    const cubedButton = document.getElementById("cubed") as HTMLButtonElement;
    cubedButton.addEventListener("click", () => {
        try {
            const currentValue = parseFloat(display.value);
            const result = Math.pow(currentValue, 3);
            display.value = result.toString();
            addToHistory(display.value);
        } catch (error) {
            display.value = "Error";
            addToHistory("Error");
        }
    });
     const randomDecimalButton = document.getElementById("random-decimal") as HTMLButtonElement;
    randomDecimalButton.addEventListener("click", () => {
        const result = Math.random();
        display.value = result.toString();
        addToHistory(display.value);
    });
    memoryStoreButton.addEventListener("click", () => {
      memoryValue = parseFloat(display.value);
    });

    memoryRecallButton.addEventListener("click", () => {
      if (memoryValue !== null) {
        display.value = memoryValue.toString();
      } else {
        display.value = "No value in memory";
      }
    });
     memoryPlusButton.addEventListener("click", () => {
      if (memoryValue !== null && display.value) {
        memoryValue += parseFloat(display.value);
        display.value = memoryValue.toString();
      } else {
        display.value = "No value in memory";
      }
    });
     memoryClearButton.addEventListener("click", () => {
      memoryValue = null;
      display.value = "Memory cleared";
    });
    mrcButton.addEventListener("click", () => {
      if (memoryValue !== null) {
        display.value = memoryValue.toString();
        memoryValue = null; // MRC後にメモリクリア
      } else {
        display.value = "No value in memory";
      }
    });
});