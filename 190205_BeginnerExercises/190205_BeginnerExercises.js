// 1. Conditions Test


function randomNumber(){

let min = 1;
let max = 100;
let number = Math.floor(Math.random() * max) + min; //returns integer between 1 - 100

// says if number is even or odd.
if (rand % 2 === 0){
    console.log(number,"this is an even number");
}
    else{
        console.log(number,"this is an odd number");
}
}


// 2. Loops and Maths Operators


function numberSquares() {
    for (let i = 1; i < 101; i++) {
        console.log(Math.pow(i,2));
    }
}



// 3. Random and While loop


function headOrTails(){
    let heads = 0;
    let tails = 1;
    let flip = Math.floor(Math.random() * 2);

    if(flip != tails){
        console.log(flip);
        console.log("Keep flipping until you get to tails.");
        headsOrTails();
    } else {
        console.log(flip);
        console.log("It's tails. You win!");
    }
}



// 4. Find the factorial of any number using loops


 function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }



// 5. Patterns using Loops


let number = 1;
  for (let number = 0; number < 10; number ++){
console.log('#'.repeat(number));
  }


// 6. Complex Patterns


var size = 8; //this is the variable setting
var board = "";//this is the empty string to either add ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*the outer loop is to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "[]";
  }
  board += "\n";
}

console.log(board);








