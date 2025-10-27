let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".reset");
let messsage = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-game");

let turn_O = true;

const win =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerHTML = "O";
            turn_O = false;
        }
        else {
            box.innerHTML = "X";
            turn_O = true;
        }
        box.disabled = true;
        checkwin();
    });
});

let resetbtn = () => {
    turn_O = true;
    enablebtn();
    messsage.classList.add("hide");
};

const disablebtn = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enablebtn = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations ! winner is ${winner} `;
    messsage.classList.remove("hide");
    disablebtn();
};

const checkwin = () => {
    for (let pattern of win) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showwinner(position1);
            }
        }
    }
};
newbtn.addEventListener("click", resetbtn);
resetbutton.addEventListener("click", resetbtn);

