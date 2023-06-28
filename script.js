'use strict';

const RandomNumber = Math.floor(Math.random() * 20 + 1);

const chance = document.querySelector('.score').innerHTML;

let score = parseInt(chance)

document.querySelector('.check').addEventListener('click', checkNumber);

function checkNumber() {
    if (score > 0) {
        const userValue = document.querySelector('.guess').value;
        console.log(userValue);

        if (userValue == RandomNumber && score > 0) {
            document.querySelector('.message').textContent = "correct answer";
            document.querySelector('.highscore').innerHTML = score;
            document.querySelector('.number').innerHTML = RandomNumber;
            document.body.style.backgroundColor = "#60b347";
        }

        if (userValue > RandomNumber && score > 0) {
            document.querySelector('.message').textContent = "Too high";
            score = score - 1;
            console.log(score)
            document.querySelector('.score').innerHTML = score;
        }

        if (userValue < RandomNumber && score > 0) {
            document.querySelector('.message').textContent = "Too low";
            score = score - 1;
            console.log(score)
            document.querySelector('.score').innerHTML = score;

        }
    }
}

document.querySelector('.again').addEventListener('click', function () {

    document.querySelector('.message').textContent = "start guessing...";
    document.querySelector('.highscore').innerHTML = score;
    document.querySelector('.number').innerHTML = "?";
    document.body.style.backgroundColor = "#222";

    score = 20;
    document.querySelector('.score').innerHTML = score;
    const userValue = document.querySelector('.guess').value = "";
});