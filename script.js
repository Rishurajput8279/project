let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector("#subt");
const userInput=document.querySelector(".guessField");
const guessSlot=document.querySelector(".guess");
const remaining=document.querySelector(".lastguess");
const lowOrhigh=document.querySelector(".lowOrhigh");
const startOver=document.querySelector(".resultparas");

const p=document.createElement('p');


let prevGuess=[];
let numGuess=1;

let playGame=true;
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number");
    }
    else if(guess<1){
        alert("please enter a number more then 1");
    }
    else if(guess>100){
        alert("please enter a number less then 100");
    }
    else {
        prevGuess.push(guess);
        if(numGuess===11){
            displayguess(guess);
            displayMessage(`Game over, Random number was ${randomNumber}`);
            endgame();
        }else{
            displayguess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You gussted Right`);
        endgame();
    }else if(guess < randomNumber){
        displayMessage(`Number is Too Low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is Too High`);
    }

}
function displayguess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}
function displayMessage(message){
    lowOrhigh.innerHTML=`<h2>${message}</h2>`;
}
function newgame(){
    const newgamebutton=document.querySelector("#newGame");
    newgamebutton.addEventListener('click',(e)=>{
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });

}
function endgame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newgame();
}
console.log(randomNumber);