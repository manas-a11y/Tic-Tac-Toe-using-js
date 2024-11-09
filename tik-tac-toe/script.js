let boxes = document.getElementsByClassName("boxes");
let resetbtn = document.getElementsByClassName("reset-btn");
let newgamebtn = document.getElementsByClassName("new-game");
let msgcontainer = document.getElementsByClassName("msg-container");
let msg = document.getElementsByClassName("msg")[0];


let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetgame(){
    console.log("rst game is calld")
    turn0 = true;
    enablebtn();
    msg.style.display = "none";
}


Array.from(boxes).forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked ")
        if(turn0){
            box.innerText = "O"
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();

        if(count === 9 && !iswinner){
            gamedraw();
        }

    });

});
function showWinner(winner){
    msg.innerHTML = `Player ${winner} wins!`;
    msg.style.display= "block";
    disabledbtn();

}

function disabledbtn(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enablebtn(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}


const checkWinner = () =>{
    for(let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);

                showWinner(pos1Val);
            }
        }
    }
    
}
resetbtn[0].addEventListener("click" ,resetgame );
newgamebtn[0].addEventListener("click",resetgame);



function gamedraw(){
    msg.innerHTML = "It's a draw!";
    msg.style.display = "block";
    disabledbtn();
    
}