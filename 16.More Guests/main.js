var guestList = ["Ayesha,", "Aiman,", "Areeba,"];
//unshift
guestList.unshift("Zubia");
//splice
guestList.splice(Math.floor(guestList.length / 2), 0, "Zarnish");
//push
guestList.push("Maria");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " \n Great News!We found bigger table,so we invited three more new guests for our party, we hope you will enjoy this event alot.\n\n Thank You!\n"));
}
