const prompt=require("prompt-sync")();
console.log("welcome to the Quiz about Chess");
let correctAnswers=0;

const question1=prompt("How many players are there in chess ");
const  answer1 = "2";
if(question1===answer1){
    console.log("The answer is correct");
    correctAnswers=correctAnswers+1;

}
else{
    console.log("wrong Answer")
}
const question2=prompt("How many pieces does each black and white have in chess ");
const  answer2 = "16";
if(question2===answer2){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
const question3=prompt("How many total pieces are there in chess ");
const  answer3 = "32";
if(question3===answer3){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
const question4=prompt("How many total pawns are there in chess ");
const  answer4 = "16";
if(question4===answer4){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
const question5=prompt("How many rooks does white have in chess ");
const  answer5 = "2";
if(question5===answer5){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
const question6=prompt("How many bishop does black have in chess ");
const  answer6 = "2";
if(question6===answer6){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
const question7=prompt("How many knight does black have in chess ");
const  answer7 = "2";
if(question7===answer7){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
const question8=prompt("How many queen does white have in chess ");
const  answer8 = "1";
if(question8===answer8){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
const question9=prompt("which is the most powerfull piece in the chess");
const  answer9 = "queen" || "Queen" || "QUEEN";
if(question9===answer9){
    console.log("The answer is correct")
    correctAnswers=correctAnswers+1;
}
else{
    console.log("wrong Answer")
}
console.log(`You have answered ${correctAnswers}  questions correctly`)
