let currentPlayer ='X';
let gameActive = true;
const gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

function handleWin() {
    gameActive = false;
    document.getElementById('status').innerText = '$(currentPlayer) wins!';
}

function checkForWin() {
    for (let condition of winningConditions){
        const[a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c])
        handleWin();
    return;
    }
}
  if (!gameState.includes('')){
    document.getElementById('status').innerText ="It's a draw!";
    gameActive = false;
  }


function handleClick(cellIndex){
    if (!gameActive || gameState[cellIndex] !== '') return;

    gameState[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    checkForWin(); 
   currentPlayer = currentPlayer === 'X' ? '0' : 'X';
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState.fill('');
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';

    }
    document.getElementById('status').innerText = '';
}