function getComputerChoice(){
    const outcomes = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random()*outcomes.length);
    return(outcomes[randomNum]);
}

let playerScore = 0, computerScore = 0;

function playRound(playerSelection, computerSelection)
{
    let player = playerSelection, pc = computerSelection;
    if(player === pc)
        return;
    else if((player==="rock" && pc==="scissors")|| (player==="scissors" && pc==="paper")
     || (player==="paper" && pc==="rock"))
     {
        playerScore++;
        console.log(playerScore);
     }
    else
        computerScore++;
    document.getElementById('neo').textContent = playerScore;
    document.getElementById('smith').textContent = computerScore;
    return
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () =>{
        playRound(btn.getAttribute('id'), getComputerChoice());
    })
})


var s = window.screen;
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

var draw = function () {
    q.getContext('2d').fillStyle='rgba(0,0,0,.05)';
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#0F0';
    letters.map(function(y_pos, index){
        text = String.fromCharCode(65+Math.random()*33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
};
setInterval(draw, 33);

// function game(){
//     let yourScore = 0, pcScore = 0;
//     for(let i = 0; i < 5; i++)
//     {
//         let playerSelection = prompt("Rock scissors or paper?").toLowerCase();
//         let computerSelection = getComputerChoice().toLowerCase();
//         let result = playRound(playerSelection, computerSelection);
//         if(result > 0)
//         {
//             console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//             yourScore++;
//         }
//         else if(result<0)
//         {
//             console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//             pcScore++;
//         }
//         else
//             console.log("Tie game!");
//     }
//     console.log("Your score: " + yourScore +", computer score: "+pcScore);
// }
// game();