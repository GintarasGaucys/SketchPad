let blocks = 20 ;
let black = true;
let random = false;
const container = document.querySelector(".grid-container");
let divs = null;
drawBoard()

function onClick() {
    let input = prompt("What size board do you want? (1-100)" );
    if (input > 100 || isNaN(input)) {
        alert("Invalid input");
        onClick();
    } else {
        reset();
        blocks = Number(input);
        console.log(blocks);
        drawBoard()
    }
}

function colorBlack() {
    black = true;
    random = false;
}

function colorRandom() {
    black = false;
    random = true;
}

function changeColor(e) {
    if (black == true) {
        e.style.backgroundColor = `black`;
    } else {
        e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255 + 0)}, ${Math.floor(Math.random() * 255 + 0)}, ${Math.floor(Math.random() * 255 + 0)})`;
    }
}


function drawBoard() {
    for (let i = 0; i < blocks*blocks; i++) {
        container.style.gridTemplateColumns = `repeat(${blocks}, 1fr)`
        let div = document.createElement("div");
        div.classList = "grid-item";
        container.appendChild(div);
    }
    divs = document.querySelectorAll(".grid-item");
    addEventsListeners();
}



function reset() {
    divs.forEach((e) => {
        container.removeChild(e);
    });
};

function addEventsListeners() {
    divs.forEach((e) => {
        e.addEventListener('mouseover', function() {
            changeColor(e);
        });
    });

}