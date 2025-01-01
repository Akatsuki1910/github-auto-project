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
    const clearLastHistoryButton = document.getElementById("clear-last-history");
    clearLastHistoryButton.addEventListener("click", () => {
        history.pop();
        historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    });

    const copyDisplayButton = document.getElementById("copy-display");
    copyDisplayButton.addEventListener("click", () => {
        navigator.clipboard.writeText(display.value).then(() => {
            alert("Display value copied to clipboard!");
        }, () => {
            alert("Failed to copy display value.");
        });
    });

    // 結果をコピーする機能を追加
    const copyResultButton = document.getElementById("copy-result");
    copyResultButton.addEventListener("click", () => {
        try {
            const result = eval(display.value);
            navigator.clipboard.writeText(result.toString()).then(() => {
                alert("Result copied to clipboard!");
            }, () => {
                alert("Failed to copy result.");
            });
        }
        catch (error) {
            display.value = "Error";
        }
    });
    const allClearButton = document.getElementById("all-clear");
    allClearButton.addEventListener("click", () => {
        display.value = "";
        history.length = 0; //履歴もクリア
        historyDiv.innerHTML = "";
    });
    const clearEntryButton = document.getElementById("clear-entry");
    clearEntryButton.addEventListener("click", () => {
        display.value = "";
    });
    const lastAnswerButton = document.getElementById("last-answer");
    lastAnswerButton.addEventListener("click", () => {
        if (lastAnswer !== null) {
            display.value += lastAnswer.toString();
        }
    });
    // ... existing code ...
    for (let i = 0; i <= 9; i++) {
        const numberButton = document.getElementById(i.toString());
        numberButton.addEventListener("click", () => {
            display.value += i.toString();
        });
    }

    const operators = ['plus', 'minus', 'multiply', 'divide', 'modulus'];
    operators.forEach(operator => {
        const operatorButton = document.getElementById(operator);
        operatorButton.addEventListener('click', () => {
            display.value += operator === 'plus' ? '+' : operator === 'minus' ? '-' : operator === 'multiply' ? '*' : operator === 'modulus' ? '%' : '/';
        });
    });

    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", () => {
        try {
            const result = eval(display.value);
            display.value = result.toString();
            updateHistory(`${display.value} = ${result}`);
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });

    // ... existing code ...
     const calculateEButton = document.getElementById("calculate-e");
    calculateEButton.addEventListener("click", () => {
        display.value = Math.E.toString();
    });

    const calculatePiButton = document.getElementById("calculate-pi");
    calculatePiButton.addEventListener("click", () => {
        display.value = Math.PI.toString();
    });

// ... existing code ...

// 一文字削除機能
const deleteLastCharacterButton = document.getElementById("delete-last-character");
deleteLastCharacterButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1); 
});
 // 履歴をすべてコピーする機能を追加
const copyAllHistoryButton = document.getElementById("copy-all-history");
copyAllHistoryButton.addEventListener("click", () => {
    navigator.clipboard.writeText(history.join('\n')).then(() => {
        alert("History copied to clipboard!");
    }, () => {
        alert("Failed to copy history.");
    });
});
    // 現在の日付を表示する機能を追加
    const currentDateButton = document.getElementById("current-date");
    currentDateButton.addEventListener("click", () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        display.value = `${year}-${month}-${day}`;
    });
        // 画面クリア機能を追加
    const clearDisplayButton = document.getElementById("clear-display");
    clearDisplayButton.addEventListener("click", () => {
        display.value = "";
    });
     // x²の計算機能を追加
    const squareNumberButton = document.getElementById("square-number");
    squareNumberButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = num * num;
            display.value = result.toString();
            updateHistory(`${num}² = ${result}`);
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // x³の計算機能を追加
    const cubeNumberButton = document.getElementById("cube-number");
    cubeNumberButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = num * num * num;
            display.value = result.toString();
            updateHistory(`${num}³ = ${result}`);
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // 平方根の計算機能を追加
    const squareRootButton = document.getElementById("square-root-button");
    squareRootButton.addEventListener("click", () => {
        try {
            const num = parseFloat(display.value);
            const result = Math.sqrt(num);
            display.value = result.toString();
            updateHistory(`√${num} = ${result}`);
            lastAnswer = result;
        }
        catch (error) {
            display.value = "Error";
        }
    });
    // ... (Existing functions)
});


