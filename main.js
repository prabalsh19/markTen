const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkBtn = document.querySelector(".check-btn")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const nextBtn = document.querySelector(".next-btn")
const show = document.querySelectorAll(".display-none")

const availableNotes = [2000,500,100,20,10,5,1]
const onNextClickHandler = ()=>{
  nextBtn.style.display = 'none'
   show[0].style.display = 'block'
   show[1].style.display = 'block'
   show[2].style.display = 'block'

}
const onCheckClickHandler = ()=>{
  let billAmountValue = billAmount.value;
  let cashGivenValue = cashGiven.value;
  let extraAmount = cashGivenValue - billAmountValue;
   if(billAmountValue===''||cashGivenValue===''){
    document.querySelector(".error-message").innerText = "Input values cannot be empty."
      
   }else if(billAmountValue<0||cashGivenValue<0){
    document.querySelector(".error-message").innerText = "Input Value cannot be negative"
      
   }else if(billAmountValue>cashGivenValue){
      console.log(billAmountValue,cashGivenValue);
    document.querySelector(".error-message").innerText = "Cash given cannot be less than bill amount"

   }
   else if(billAmountValue===cashGivenValue){
    document.querySelector(".error-message").innerText = "No change needed to be given"
      
   }
   else{
      console.log(billAmountValue,cashGivenValue);

    document.querySelector(".error-message").innerText = "";
    
    calculateAmount(extraAmount)
 show[3].style.display = 'table'
   }
}

const calculateAmount = (extraAmount)=>{
   for(let i = 0 ; i<availableNotes.length;i++){
    noOfNotes[i].innerText=  Math.trunc(extraAmount/availableNotes[i])
     extraAmount%=availableNotes[i]
   }
}
nextBtn.addEventListener('click',onNextClickHandler);
checkBtn.addEventListener('click',onCheckClickHandler)

