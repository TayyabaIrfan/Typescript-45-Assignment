var guestList = ["Amna,", "Ayesha,", "Aiman,", "Areeba,"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " \n I invited you on dinner party, your presence will complete this event.\n\n Thank You!\n"));
}
;
var absentPerson = "Aiman";
var newGuest = "Bareera";
guestList[2] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " \n I invited you on dinner party, your presence will complete this event.\n\n Thank You!\n"));
}
console.log("Miss ".concat(absentPerson, " Would not be able to attend this party."));
