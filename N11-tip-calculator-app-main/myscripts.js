"use strict";


//number of bill input dom
let billInput = document.getElementById("bill-input");

//number of people input dom
const peopleInput = document.getElementById("people-input");

const customTip = document.getElementById("custom");


const tipAmountField = document.querySelector('.tip-amount h1');
const totalField = document.querySelector('.total h1');

const selectedTip = document.querySelectorAll('input[name="tipButton"]');



// '''''''''''''''''''''''''''''''''''''''''''''''''''''' Reset Button ''''''''''''''''''''''''''''''''''''''''''''''''''''''
const resetButton = document.querySelector('button[name="resetButton"]');

resetButton.addEventListener('click', reset);

function reset(){
  customTip.value = "";
  billInput.value = "";
  peopleInput.value = "1";
  selectedTip.forEach((tip)=> tip.checked = false);
  tipAmountField.innerHTML = '$0.00';
  totalField.innerHTML = '$0.00';
  resetButton.style.backgroundColor = "#0D686D";
}



billInput.addEventListener("input", tipCalculate);
peopleInput.addEventListener("input", tipCalculate);


selectedTip.forEach(selectedTipButton => {
  selectedTipButton.addEventListener("click", () => customTip.value = "" );  
  selectedTipButton.addEventListener('click', tipCalculate);  
});




customTip.addEventListener("input", ()=> {
  selectedTip.forEach((tip)=> tip.checked = false)
});


customTip.addEventListener("input", tipCalculate);




// main function which goes to almost all events
function tipCalculate() {
  const bill = parseInt(billInput.value);
  let tipAmount = bill || '0.00';
  const radioButtonValue = getRadioValue();
  
  if (!customTip.value){
    const tipAmountFieldValue = Math.floor(tipAmount) * Math.floor(radioButtonValue) / 100 / Math.floor(peopleInput.value);
    tipAmountField.innerHTML= "$"+ tipAmountFieldValue.toFixed(2);
    const totalFieldValue = (Math.floor(tipAmount) + Math.floor(tipAmount) * Math.floor(radioButtonValue) / 100) / Math.floor(peopleInput.value);
    totalField.innerHTML = "$"+ totalFieldValue.toFixed(2);
  } else {
    const tipAmountFieldValue = Math.floor(tipAmount) * Math.floor(customTip.value) / 100 / Math.floor(peopleInput.value);
    tipAmountField.innerHTML= "$"+ tipAmountFieldValue.toFixed(2);
    const totalFieldValue = (Math.floor(tipAmount) + Math.floor(tipAmount) * Math.floor(customTip.value) / 100) / Math.floor(peopleInput.value);
    totalField.innerHTML = "$"+ totalFieldValue.toFixed(2);
  };
  

  //change reset button color
  
  resetButton.style.backgroundColor = "#26C2AE";

};

function getRadioValue(){
  let selectedValue = null;
  
  selectedTip.forEach((tip) => {
    if (tip.checked){
      selectedValue = tip.value;
    } 
    
  });
  return selectedValue;
};



//Prevent leteters in inputs
preventLetters(customTip);
preventLetters(billInput);

function preventLetters(target){
  target.addEventListener("keydown", function(event) {
    // Allow: backspace, delete, tab, escape, and enter
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
         // Allow: Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) || 
         // Allow: home, end, left, right
        (event.keyCode >= 35 && event.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
    }
    else {
      // Ensure that it is a number and stop the keypress
      if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault(); 
      }   
    }
  });
};