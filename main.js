let billAmount = document.getElementById("bill-amount")

let cashGiven = document.querySelector("#cash-given")
const btn = document.querySelector(".check-btn")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,20,10,5,1]
const onClickHandler = ()=>{
   let billAmountValue = billAmount.value;
   let cashGivenValue = cashGiven.value;

   if(billAmountValue===''||cashGivenValue===''){
    document.querySelector(".error-message").innerText = "Invalid Input"
   }else if(billAmountValue<0||cashGivenValue<0){
    document.querySelector(".error-message").innerText = "Input Value cannot be negative"
      
   }
   else if(billAmountValue===cashGivenValue){
    document.querySelector(".error-message").innerText = "No change needed to be given"
      
   }
   else{
    document.querySelector(".error-message").innerText = ""
    let extraAmount = cashGivenValue - billAmountValue;
    calculateAmount(extraAmount)

   }
}

const calculateAmount = (extraAmount)=>{
   for(let i = 0 ; i<availableNotes.length;i++){
    noOfNotes[i].innerText=  Math.trunc(extraAmount/availableNotes[i])
     extraAmount%=availableNotes[i]
   }
}
btn.addEventListener('click',onClickHandler);

