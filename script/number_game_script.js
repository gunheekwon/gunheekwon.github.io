let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess= Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent="Previous guesses: ";
    }
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = "!!!Game Over!!!";
        lowOrHi.textContent = "";
        setGameOver();
    }else{
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was too low!";
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was too high!";
        }
    }
    
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

function setGameOver(){
    // 입력 비활성화
    guessField.disabled = true;
    guessSubmit.disabled = true;
    
    // 리셋버튼 생성
        // button 요소 생성
    resetButton = document.createElement("button"); 
        // text label 생성
    resetButton.textContent = "Start new game"; 
        // body 뒷 부분에 붙임
    document.body.append(resetButton);
        // 클릭 시 resetGame 함수 실행
    resetButton.addEventListener("click", resetGame); 
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for(resetPara of resetParas ){
        resetPara.textContent = "";
    }
    
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.textContent = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener("click", checkGuess);