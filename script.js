'use strict';
// /Generating a random number for the game:

let randomNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore  = 0;
console.log(randomNumber);
document.querySelector('.Check').addEventListener('click', function () {
    let guess = Number(document.querySelector(`.guess`).value)
    console.log("aman");

if (!guess){
    document.querySelector('.message').textContent = 'Enter a Number to Play the Game';
}
else if (guess === randomNumber){
    document.querySelector('.message').textContent = 'Alas! You WON the Game';
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem'

    if (score > highScore || score < highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = score;
    }
}
else if (guess !== randomNumber && score >0){
    if (guess > randomNumber){
        document.querySelector('.message').textContent = 'Too High 📈'
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (guess < randomNumber){
        document.querySelector('.message').textContent = 'Too Low 📈'
        score--;
        document.querySelector('.score').textContent = score;
    }
}

else {
    document.querySelector('.score').textContent = '😂😂 You Lost the Game';
    document.querySelector('body').style.backgroundColor = '#fd7c6e';
    document.querySelector('.number').textContent = randomNumber;
}
});

document.querySelector('.again').addEventListener('click' , function (){
     score = 20;
     randomNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start Guessing...'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15 rem'

})
