
let max = 20 , min = 1;
let input_text = document.getElementById("input-text") ;
let result_text = document.getElementById("result-text") ;
let result_icon = document.getElementById("result-icon") ;
let score_value = document.getElementById("score-value") ;
let highestScore_value = document.getElementById("highestScore-value") ;

let hiddenNumber = document.getElementById("hidden-number");

let check_btn =  document.getElementById("check-btn");

let score = 20  , highestScore = 0 ;
let gameState = 1 ;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function validInput(){
    if(!gameState)
        return;
    if(input_text.value.length == 1){
        if(isNaN(parseInt(input_text.value)) ||parseInt(input_text.value) == (min-1)){
            input_text.value = "";
        }
    }
    if(input_text.value.length == 2){
        
        if(isNaN(parseInt(input_text.value[1])) ||parseInt(input_text.value) > max ){
            input_text.value = input_text.value[0];
        }
       
    }
    
}

function check(){
    if(!gameState)
        return;
    if(input_text.value == number) {
        if(score > highestScore)
            highestScore = score;
        let container = document.getElementById("container");
        container.style.background = "green";
        gameState = 0;

        result_text.innerText = "Correct";
        result_icon.className = "fas fa-check-circle fa-4x";    
        result_icon.style.color = "yellow";
        end();
    }
    else{
        score -= 1;
        score_value.innerText = score;
        if ( input_text.value > number ){
            result_text.innerText = "High";
            result_icon.className = "fas fa-arrow-alt-circle-down fa-4x";    
            result_icon.style.color = "red";
        }
        if ( input_text.value < number ){
            result_text.innerText = "Low";
            result_icon.className = "fas fa-arrow-alt-circle-up item-icon fa-4x";   
            result_icon.style.color = "green";
        }
        if(score == 0){
            gameState = 0;
            end();
        }
        
    }

}

function end(){
    input_text.disabled = true;
    check_btn.disabled = true;
    hiddenNumber.innerText = number;
    highestScore_value.innerText = highestScore;
}

function again(){
    score = 20;
    gameState = 1;
    
    input_text.disabled = false;
    check_btn.disabled = false;
    hiddenNumber.innerText = "?";

    let container = document.getElementById("container");
    container.style.background = "var(--black)";
    result_icon.style.color = "white";
    
    number = getRndInteger(min,max);
    console.log("the number is : " , number);

    result_icon.className = "fas fa-question-circle fa-4x";
    result_text.innerText = "Start Guessing!"
    score_value.innerText = score;
}

  let number = getRndInteger(min,max);
  console.log("the number is : " , number);

  result_icon.className = "fas fa-question-circle fa-4x";
  score_value.innerText = score;
  highestScore_value.innerText = highestScore;


