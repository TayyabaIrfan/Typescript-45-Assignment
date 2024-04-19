// Shrinking the guestlist
var guestList = ["Alia,", "Aiman,", "Ayesha", "Bushra", "Batool"];
console.log("Dear, Guests, New table hasnot arrived, we apologize that we can only invite two people");
// only two guests are invited and sorry message
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Dear, ".concat(removedGuest, ", we cant invite you on dinner due to unavailibility of table."));
}
//message for invited guests
guestList.forEach(function (guest) {
    console.log("Dear, ".concat(guest, ", you are still invited for dinner"));
});
//Empty list
guestList.splice(0, guestList.length);
console.log("here is an empty guest list, [".concat(guestList, "]"));
