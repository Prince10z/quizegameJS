let showtimer = document.getElementById("QueTimer");
// showtimer.style.animation = "none";
let mainbody = document.getElementById("mainCard");
let questionTimer;
let currentindex = 0;
let score = 0;
const data = [
    {
        id: 1,
        ques: "What is javascript?",
        opt: ["A markup Language", "A scripting language", "A programming language", "None of the above"],
        corr: "A scripting language",
        time: 30,
    },
    {
        id: 2,
        ques: "Which one of the following also known as Conditional Expression:",
        opt: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        corr: "immediate if",
        time: 30,
    }, {
        id: 3,
        ques: "In JavaScript, what is a block of statement?",
        opt: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"],
        corr: "block that combines a number of statements into a single compound statement",
        time: 40,
    }, {
        id: 4,
        ques: "When interpreter encounters an empty statements, what it will do:",
        opt: ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
        corr: "Ignores the statements",
        time: 40,
    }, {
        id: 5,
        ques: 'The "function" and " var" are known as:',
        opt: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        corr: "Declaration statements",
        time: 50,
    }, {
        id: 6,
        ques: 'Which of the following variables takes precedence over the others if the names are the same?',
        opt: ["Global variable", "The local element", "The two of the above", "None of the above"],
        corr: "The local element",
        time: 40,
    }, {
        id: 7,
        ques: 'Which one of the following is the correct way for calling the JavaScript code?',
        opt: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
        corr: "Function/Method",
        time: 30,
    }, {
        id: 8,
        ques: 'Which of the following type of a variable is volatile?',
        opt: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        corr: "Mutable variable",
        time: 50,
    }, {
        id: 9,
        ques: 'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.',
        opt: ["Prints an exception error", "Prints an overflow error", 'Displays "Infinity"', "Prints the value as such"],
        corr: 'Displays "Infinity"',
        time: 60,
    }, {
        id: 10,
        ques: 'In the JavaScript, which one of the following is not considered as an error:',
        opt: ["Syntax error", "Missing of semicolons", 'Division by zero', "Missing of Bracket"],
        corr: 'Division by zero',
        time: 40,
    }, {
        id: 11,
        ques: 'Which of the following given functions of the Number Object formats a number with a different number of digits to the right of the decimal?',
        opt: ["toExponential()", "toFixed()", 'toPrecision()', "toLocaleString()"],
        corr: 'toFixed()',
        time: 50,
    }, {
        id: 12,
        ques: 'Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?',
        opt: ["slice()", "split()", 'substr()', "search()"],
        corr: 'substr()',
        time: 40,
    }, {
        id: 13,
        ques: 'In JavaScript the x===y statement implies that:',
        opt: ["Both x and y are equal in value, type and reference address as well.", "Both are x and y are equal in value only.", 'Both are equal in the value and data type.', "Both are not same at all."],
        corr: 'Both are equal in the value and data type.',
        time: 30,
    },
];
let currentdata = {
    id: 1,
    ques: "What is javascript?",
    opt: ["A markup Language", "A scripting language", "A programming language", "None of the above"],
    corr: "A scripting language",
    time: 30,
}
function timerfunction(num) {
    showtimer.style.animation = "turn 1s ease forwards infinite";
    let tm = num;
    showtimer.innerText = `${tm}`;
    questionTimer = setInterval(() => {
        tm--;
        showtimer.innerText = `${tm}`;
        if (tm <= num / 2) {
            showtimer.style.backgroundColor = "orange";
        }
        if (tm <= 3) {
            showtimer.style.backgroundColor = "red";
        }
        if (tm == 0) {
            clearInterval(questionTimer);
            showtimer.style.animation = "none";
            disablingbtn();
        }
    }, 1000);
}
timerfunction(currentdata.time);
function initfunction() {
    const qusts = document.createElement('div');
    qusts.id = "QS";
    qusts.classList.add("options");
    qusts.style.gap = "10px";
    //Question.....
    const question = document.createElement('div');
    question.innerText = `${currentdata.id}. ${currentdata.ques}`;
    question.style.color = "rgb(27, 2, 61)";
    question.style.fontWeight = "600";
    qusts.appendChild(question);

    //Options...
    currentdata.opt.forEach(btn => {
        const eachbtn = document.createElement("button");
        eachbtn.classList.add("choices");
        eachbtn.innerText = btn;
        eachbtn.style.textAlign = "start";
        eachbtn.style.padding = "5px";
        eachbtn.style.borderRadius = "10px";
        eachbtn.style.borderWidth = "1px";
        qusts.appendChild(eachbtn);
        eachbtn.addEventListener('click', () => {
            console.log(btn);
            if (currentdata.corr === btn) {
                eachbtn.style.backgroundColor = "green";
                eachbtn.style.color = "white";
                disablingbtn();
                stoptimer();
                score++;

            } else {
                eachbtn.style.border = "none";
                eachbtn.style.color = "white";
                eachbtn.style.backgroundColor = "red";
            }
        });
    })
    mainbody.appendChild(qusts);
    numberOfquestion(currentindex + 1, data.length);
    nextbtn();
}
initfunction();
function numberOfquestion(num1, num2) {
    const info = document.createElement("div");
    info.id = "info";
    info.style.color = "grey";
    info.innerText = `Question no. ${num1} of ${num2}`;
    info.style.display = "flex";
    info.style.justifyContent = "center";
    mainbody.appendChild(info);
}

function disablingbtn() {
    const btns = document.querySelectorAll(".choices");
    btns.forEach(btn => {
        btn.disabled = true;
    })
}
function stoptimer() {
    clearInterval(questionTimer);
    showtimer.style.animation = "none";
    showtimer.style.backgroundColor = "green";
}
const scorebored = document.getElementById("scorebored");
function nextbtn() {
    const nxtbtn = document.createElement("button");
    nxtbtn.id = "proceed";
    nxtbtn.innerText = "next";
    nxtbtn.style.backgroundColor = "rgb(27, 2, 61)";
    nxtbtn.style.color = "white";
    nxtbtn.style.padding = "5px 40px";
    nxtbtn.style.marginTop = "20px";
    nxtbtn.style.border = "none";
    nxtbtn.style.borderRadius = "10px";
    mainbody.appendChild(nxtbtn);
    nxtbtn.addEventListener('click', () => {
        stoptimer();
        // mainbody.innerText = "";
        currentindex++;
        if (currentindex < data.length) {
            mainbody.removeChild(mainbody.lastChild);
            mainbody.removeChild(mainbody.lastChild);
            mainbody.removeChild(mainbody.lastChild);
            currentdata = data[currentindex];
            initfunction();
            timerfunction(currentdata.time);
        } else if (currentindex == data.length) {
            document.getElementById("heading").style.display = "none";
            document.getElementById("bl").style.display = "none";
            document.getElementById("info").style.display = "none";
            document.getElementById("QS").style.display = "none";
            // document.getElementsByClassName("options").forEach(btn => {
            //     btn.style.display = "none";
            // })
            scorebored.style.display = "block";
            scorebored.classList.add("bounce-in-fwd");
            const options = document.getElementsByClassName("options");
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }

            document.getElementById("proceed").style.display = "none";
            showRestartButton()
            mainbody.style.backgroundColor = "transparent";
            let resultdata = document.getElementsByClassName("letter-context");
            resultdata[0].innerText = `${score}/${data.length}`;

        }
        else {
            window.location.href = window.location.href;

        }
        console.log(score);
    });
}

function showRestartButton() {
    const restartBtn = document.createElement("button");
    restartBtn.id = "restart";
    restartBtn.innerText = "Restart";
    restartBtn.style.backgroundColor = "rgb(27, 2, 61)";
    restartBtn.style.color = "white";
    restartBtn.style.padding = "5px 40px";
    restartBtn.style.marginTop = "20px";
    restartBtn.style.border = "none";
    restartBtn.style.borderRadius = "10px";
    mainbody.appendChild(restartBtn);
    restartBtn.addEventListener('click', () => {
        location.reload();
    });
}

