// Shrinking the guestlist
let guestList:string[] = ["Alia,", "Aiman,", "Ayesha","Bushra", "Batool"]
console.log (`Dear, Guests, New table hasnot arrived, we apologize that we can only invite two people`);

// only two guests are invited and sorry message
while (guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log (`Dear, ${removedGuest}, we cant invite you on dinner due to unavailibility of table.`)
}

//message for invited guests
guestList.forEach(guest => {
    console.log(`Dear, ${guest}, you are still invited for dinner`);
})

//Empty list
guestList.splice(0, guestList.length)
    console.log(`here is an empty guest list, [${guestList}]`);