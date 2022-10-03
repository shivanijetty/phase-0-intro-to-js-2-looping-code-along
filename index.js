for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}



function wrapGifts(arrayOfGifts) {
  for (let i = 0; i < arrayOfGifts.length; i++) {
    console.log(`Wrapped ${arrayOfGifts[i]} and added a bow!`);
    debugger;
  }

}
// const myGifts = ["teddy bear", "drone", "doll"];
// wrapGifts(myGifts);
wrapGifts(["PS4", "ball", "cards"])





function writeCards(arrayOfNames, event) {
    let thankYous = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        thankYous.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`)
    }
    return thankYous
}

function countDown(num) {
        while (num >= 0) {
        console.log(num--);
    }
}