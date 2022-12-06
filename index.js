// Code your solutions in this file

let names = ["Guadalupe", "Ollie", "Aki"]
let event = 'suprise'

function writeCards(names, event){
   let cardArray = []
    for (let i = 0; i < names.length; i++) {
        cardArray.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
    }
    return cardArray;
}

function countDown(number){
    let countDown = 0;
while (number >= 0) {
  console.log(number--);
}
}