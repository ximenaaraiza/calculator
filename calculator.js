const buttons = document.querySelectorAll(".buttons");
let displayBar = document.getElementById("display");
var firstNumber = 0; 
var secondNumber = 0;
var operator = "";
let displayEmpty = true; 


function buttonClickHandeler(event){
  let buttonClicked = event.target;
  
  if(buttonClicked.innerText ==="clear"){
    displayBar.innerText = 0;
    displayEmpty = true;
  } 
  else if(!isNaN(buttonClicked.innerText)|| buttonClicked.innerText === "."){
    if(displayEmpty === true){
      displayBar.innerText = buttonClicked.innerText;
      displayEmpty = false;
    }
    else{
      displayBar.innerText += buttonClicked.innerText;
    }
  }
  else if( buttonClicked.innerText === "="){
    displayEmpty= true;
    secondNumber = displayBar.innerText;
    displayBar.innerText = mathWork(firstNumber, secondNumber, operator); 
  }
  else{
    displayEmpty = true;
    if(buttonClicked.innerText === "+"){
    operator = "+";
    }
    else if(buttonClicked.innerText === "-"){
      operator ="-";
    }
    else if(buttonClicked.innerText=== "/"){
      operator = "/";
    } 
    else{
      operator = "*";
    }
    
    firstNumber = displayBar.innerText;
    displayBar.innerText = 0;
  }
  
  
}
function mathWork(firstNumber, secondNumber, operator){
  if(firstNumber.includes(".") || secondNumber.includes(".") ){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
  };
  if(operator === "+"){
    return firstNumber + secondNumber;
  }
  else if(operator === "-"){
    return firstNumber - secondNumber;
  }
  else if(operator === "*"){
    return firstNumber * secondNumber;
  }
  else{
    if(secondNumber === "0"){
      return "Error"
    }
    return firstNumber/secondNumber; 
  }

}



console.log(displayBar)

for(let i = 0; i <buttons.length;i++){
buttons[i].addEventListener("click", buttonClickHandeler)
}