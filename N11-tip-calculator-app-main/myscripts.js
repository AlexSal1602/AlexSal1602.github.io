"use strict";

/* const button = document.querySelectorAll("button")[0];

button.addEventListener("click", (ev) => alert("button clicked")) */



/* alert(`rames mainc dawers${billInputValue}`); */

/* const tipCalculate = () => {
    let billInputValue = parseInt(document.querySelectorAll("input")[0].value);
let peopleInputValue = parseInt(document.querySelectorAll("input")[2].value);

const buttonList = document.querySelectorAll("button");
  buttonList.forEach(function(i){
    i.addEventListener("click", function(e){
      let buttonValue = e.target.value;
      return buttonValue;
    })
  });

    let tipAmount = billInputValue * buttonValue/100;
    console.log (tipAmount);
}

tipCalculate();
 */





const billInput = document.getElementById("bill-input");
billInput.addEventListener("input", tipCalculate);


const peopleInput = document.getElementById("people-input");
peopleInput.addEventListener("input", tipCalculate);

const tipAmountField = document.querySelector('.tip-amount h1');
const totalField = document.querySelector('.total h1');

const selectedTip = document.querySelectorAll('input[name="tipButton"]');

const selectedTipValue = selectedTip.forEach(element => {
    element.addEventListener('click', (e) => e.target.value)
  
});




/* selectedTip.addEventListener('click', () => alert("ramee"));
 */

function tipCalculate() {
  const bill = parseInt(billInput.value);
  const numOfPeople = parseInt(peopleInput.value);
  let tipAmount = bill || '0.00';
  let total = 0;

  tipAmountField.innerHTML= `$${tipAmount}`;
  console.log(selectedTipValue);


  
}






/* function getValue(e) {
  log.textContent = e.target.value;
  return e.target.value;
} 

const log = document.getElementById('values');
*/
