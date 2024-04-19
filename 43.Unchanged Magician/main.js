var show_magician = ["Davin", "Petter", "Harry", "Shin Lim"];
function magicianShow(magicianName) {
    for (var i = 0; i < magicianName.length; i++)
        console.log("".concat(magicianName[i], " are the famous Magicians"));
}
function make_great(magicianName) {
    return magicianName.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ["Harry", "Climpse", "Chatter"];
var copy_magician = magician_name.slice();
var copy_great_magician = make_great(copy_magician);
console.log("Original Array:");
magicianShow(magician_name);
console.log("Copied Array:");
magicianShow(copy_great_magician);
