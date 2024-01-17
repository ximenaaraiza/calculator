//this variable holds all the butttons with the button class 
const buttons = document.querySelectorAll(".buttons");
let displayBar = document.getElementById("display");
var firstNumber = 0; 
var secondNumber = 0;
//Make an empty string to store whatever opertor is clicked
var operator = "";
// this will help with adding more numbers by making it true that there is nothing in the bar to make 
// sure you can add more than one number afte r anumber is clicked but that the 0 doesn't stay there
let displayEmpty = true; 


function buttonClickHandeler(event){
  let buttonClicked = event.target;
  // This will make it so every time the clear button is clicked thedisplay bar goes back to 0 and 
  // make sit true that there is nothing in the display bar anymore
  if(buttonClicked.innerText ==="clear"){
    displayBar.innerText = 0;
    displayEmpty = true;
  } 
  //  this makes it so that if you just clicka button then it makes it false because the bar isn't
  //   empty and it lets you add the number while keeping the other number. 
  else if(!isNaN(buttonClicked.innerText)|| buttonClicked.innerText === "."){
    if(displayEmpty === true){
      displayBar.innerText = buttonClicked.innerText;
      displayEmpty = false;
    }
    else{
      displayBar.innerText += buttonClicked.innerText;
    }
  }
  //after they hit = you want to make it true that its empty so a new problem can start 
  else if( buttonClicked.innerText === "="){
    displayEmpty= true;
    secondNumber = displayBar.innerText;
    //calls the function to display the answer
    displayBar.innerText = mathWork(firstNumber, secondNumber, operator); 
  }
  //checks what opertion is used and stores it in operationa and turns the displayempty true so you can clear the screen 
  //when clicking the new number 
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
//this function is what actually does the math and gets the answer 
function mathWork(firstNumber, secondNumber, operator){
  if(firstNumber.includes(".") || secondNumber.includes(".") ){
    //this if statement makes it possible to add the numbers with decimals 
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
  } 
  else{
    //pior if statement created a error where it added the 2 string snext to eachother 
    //so the if allows the whole numbers to actually add together 
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
  }
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
    if(secondNumber === "0" || secondNumber === 0.0){
      return "Error"
    }
    return firstNumber/secondNumber; 
  }

}



console.log(displayBar)

for(let i = 0; i <buttons.length;i++){
buttons[i].addEventListener("click", buttonClickHandeler)
}