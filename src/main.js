const billamt = document.getElementById("amount");
const bill = document.getElementById("billAmt");


const numOfPeople = document.getElementById("numOfPeople");
const error = document.getElementById("error");
const tipAmt = document.getElementById("tipAmt");
const five = document.getElementById("btn1");
const ten = document.getElementById("btn2");
const fifteen = document.getElementById("btn3");
const twenty = document.getElementById("btn4");
const twentyfive= document.getElementById("btn5");
const cusTip = document.getElementById("cusTip");
const perPerson = document.getElementById("perPerson");
const totalAmt= document.getElementById("totalAmt");
const selectedPercentage = document.getElementById("selectedPercentage");




const putPercentage =(value ) =>{
  cusTip.value = value;
  five.classList.remove("active");
  ten.classList.remove("active");
  fifteen.classList.remove("active");
  twenty.classList.remove("active");
  twentyfive.classList.remove("active");
  if (value == 5) {
    five.classList.add("active");
  } 
  else if (value == 10) {
    ten.classList.add("active");
  } 
  else if (value == 15) {
    fifteen.classList.add("active");
  } 
  else if (value == 20) {
    twenty.classList.add("active");
  } 
  else if (value == 25) {
    twentyfive.classList.add("active");
  }
  }   

const calculate = () =>{
  
  const percentage =parseFloat(cusTip.value);
  const billAmount = parseFloat(billamt.value)||0;
  const number = parseFloat(numOfPeople.value)||0;
  if(billAmount <=0.0 || number < 2.0){
    error.innerText = "Enter valid amount and number of people";
    return;
  }
  error.innerText = "";
  const tipAmount = billAmount*(percentage/100);

  const totalAmount = (billAmount + tipAmount);
  selectedPercentage.innerText = percentage.toFixed(2);
  bill.innerText = billAmount.toFixed(2);
  tipAmt.innerText = tipAmount.toFixed(2);
  totalAmt.innerText = totalAmount.toFixed(2);
  perPerson.innerText = (totalAmount/number).toFixed(2)
}


