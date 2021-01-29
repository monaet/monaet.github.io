const playerOne = document.querySelector('#counterOne');
const playerTwo = document.querySelector('#counterTwo');
const buttonP1 = document.querySelector('#buttonp1');
const buttonP2 = document.querySelector('#buttonp2');
const resetButton = document.querySelector('#reset');
const selectedScore = document.querySelector('#score');

let counterP1 = 0;
let counterP2 = 0;
let winScore = 3;
let isGameOver = false;

selectedScore.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
});

buttonP1.addEventListener('click', function () {
    if (!isGameOver) {
        ++counterP1;
        if (counterP1 === winScore) {
            isGameOver = true;
            playerOne.classList.add('winner');
            playerTwo.classList.add('loser');
            buttonP1.disabled = true;
            buttonP2.disabled = true;
            setTimeout(function () {
                alert('Player One Won!'), 10
            })

        }
        playerOne.textContent = counterP1;
    }
});

buttonP2.addEventListener('click', function () {
    if (!isGameOver) {
        counterP2++;
        if (counterP2 === winScore) {
            isGameOver = true;
            playerTwo.classList.add('winner');
            playerOne.classList.add('loser');
            buttonP1.disabled = true;
            buttonP2.disabled = true;
            setTimeout(function () {
                alert('Player Two Won!'), 10
            })
        }
        playerTwo.textContent = counterP2;
    }
});

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    counterP1 = 0;
    counterP2 = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    playerOne.classList.remove('winner', 'loser');
    playerTwo.classList.remove('winner', 'loser');
    buttonP1.disabled = false;
    buttonP2.disabled = false;
}
