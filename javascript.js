

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function validInput(event){
    console.log(event.key);
}

function check(){
    let input_text = document.getElementById("input-text").value ;
    console.log(input_text)
    if(input_text == Number) {
        console.log("yes");
    }
    else{
        console.log("Failed")
    }

}

  let Number = getRndInteger(1,20);

