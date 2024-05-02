const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8
}

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2
}

//1. Deposit some money.
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
 
//4. Spin the slot machine
 const spin = () => {
   const symbols = [];
   for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)) {
     for (let i = 0; i < count; i++) {
      symbols.push(symbol);
     }
   }

   const reels = [];
   for (let i = 0; i < COLS; i++ ) {
    reels.push([]);
     const reelSymbols  = [...symbols];
     for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random()*reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
     }
   }
   return reels;
 };

 const reels = spin();