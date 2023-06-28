var randomNumber = Math.floor(Math.random() * 20 + 1);
const chance = document.querySelector(".score").innerHTML;
let score = parseInt(chance);

document.querySelector(".check").addEventListener("click",guessing);

function guessing() {
    if (score > 0) {
        const num = document.querySelector(".guess").value;
        if (num > randomNumber && score > 0) {
            document.querySelector('.message').innerHTML = "Too High";
            score = score - 1;
            document.querySelector('.score').innerHTML = score;
        }

        if (num < randomNumber && score > 0) {
            document.querySelector('.message').innerHTML = "Too Low";
            score = score - 1;
            document.querySelector('.score').innerHTML = score;
        }

        if (num == randomNumber && score > 0) {
            document.querySelector('.message').innerHTML = "Correct";
            document.querySelector(".number").innerHTML = randomNumber;
            document.querySelector('.score').innerHTML = score;
            document.body.style.backgroundColor = "#60b347";
        }
    }
}

document.querySelector(".again").addEventListener("click",refresh);

function refresh(){
    document.body.style.backgroundColor = "#222";
    document.querySelector('.message').innerHTML = "Start guessing...";
    let hs = document.querySelector('.highscore').innerHTML;
    if (hs < score) {
        document.querySelector('.highscore').innerHTML = score;
    }
    score = 20;
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".number").innerHTML = "?";
    randomNumber = Math.floor(Math.random() * 20 + 1);
    const num = document.querySelector(".guess").value = "";
}