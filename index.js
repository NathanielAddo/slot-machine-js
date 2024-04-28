//1. Deposit some money.
const prompt = require("prompt-sync")();
const deposit = () => {
  while (true){
   const depositAmount = prompt("Enter a deposit amount: ");
   const numberDepositAmount = parseFloat(depositAmount);
   
   if (isNaN(numberDepositAmount) || numberDepositAmount<= 0) {
    console.log("Invalid deposit amount, try again.");
   
  } else {
    return numberDepositAmount;
  }
 }
};

let depositAmount = deposit();
//2. Enter number of lines.
const getNumberofLines = () => {
  while(true){
    const NumberofLines = prompt("Enter the number of lines(1-3): ");
    const betLines = parseFloat(NumberofLines);

    if (isNaN(betLines) || betLines <= 0 || betLines > 3){
      console.log("Number of lines is invalid, try again ");
    } else {
    return betLines;
  }
 }
};
 
const betLines = getNumberofLines();

//3. Collect a bet amount 
const bet = (depositAmount, betLines) => {
  while(true){
    const betAmount = prompt("Enter the bet per line: ");
    const betPlaced = parseFloat(betAmount);

    if(isNaN(betPlaced) || betPlaced < 0 || betPlaced > depositAmount / betLines ){
      console.log("Invalid bet amount, try again. ");
    } else {
      return betPlaced;
    }
  };

};
 const betAmount = bet(depositAmount, betLines); 