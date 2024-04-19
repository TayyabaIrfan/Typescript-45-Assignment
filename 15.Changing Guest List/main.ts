let guestList : string[] =["Amna,", "Ayesha,", "Aiman,", "Areeba,"];
for (let i=0; i<guestList.length; i++ ) {
    console.log(`Dear ${guestList[i]} \n I invited you on dinner party, your presence will complete this event.\n\n Thank You!\n`);
};
let absentPerson :string = "Aiman";
let newGuest :string = "Bareera";

guestList[2] = newGuest;

for(let i=0; i<guestList.length; i++){
    console.log (`Dear ${guestList[i]} \n I invited you on dinner party, your presence will complete this event.\n\n Thank You!\n`);
}
console.log (`Miss ${absentPerson} Would not be able to attend this party.`);