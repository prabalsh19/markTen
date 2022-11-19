const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkBtn = document.querySelector(".check-btn")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const nextBtn = document.querySelector(".next-btn")
const show = document.querySelectorAll(".display-none")
const errMsg = document.querySelector(".error-message")
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
    errMsg.innerText = "Input values cannot be empty."
 show[3].style.display = 'none'
      
   }else if(billAmountValue<0||cashGivenValue<0){
   errMsg.innerText = "Input Value cannot be negative"
 show[3].style.display = 'none'
      
   }else if(Number(billAmountValue)>Number(cashGivenValue)){
      console.log(billAmountValue,cashGivenValue);
   errMsg.innerText = "Cash given cannot be less than bill amount"
 show[3].style.display = 'none'

   }
   else if(billAmountValue===cashGivenValue){
   errMsg.innerText = "No change needed to be given"
 show[3].style.display = 'none'
      
   }
   else{
      console.log(billAmountValue,cashGivenValue);

   errMsg.innerText = "";
    
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

