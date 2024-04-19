var show_magician = ["Davin", "Petter", "Harry", "Shin Lim"];
function magicianShow(magicianName) {
    for (var i = 0; i < magicianName.length; i++)
        console.log("".concat(magicianName[i]));
}
function make_great(magicianName) {
    return magicianName.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ["Harry", "Climpse", "Chatter"];
var great_magicians = make_great(magician_name);
magicianShow(great_magicians);
