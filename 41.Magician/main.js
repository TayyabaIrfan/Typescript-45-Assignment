var magicianName = ["Davin", "Petter", "Harry", "Shin Lim"];
// for (let i=0; i < magicianName.length; i++){
//     console.log(magicianName);
// }
function magicianShow(magicianName) {
    for (var i = 0; i < magicianName.length; i++)
        console.log("".concat(magicianName[i], " are the famous Magicians"));
}
magicianShow(magicianName);
