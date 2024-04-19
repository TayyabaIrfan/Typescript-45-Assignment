let show_magician : string[] =["Davin", "Petter", "Harry", "Shin Lim"]

function magicianShow(magicianName){
for (let i=0; i < magicianName.length; i++)
console.log(`${magicianName[i]} are the famous Magicians`);}

function make_great (magicianName: string[]){
    return magicianName.map(name => `The Great ${name}`)
}
let magician_name = ["Harry", "Climpse", "Chatter"]
let copy_magician = magician_name.slice()

let copy_great_magician = make_great(copy_magician)

console.log("Original Array:");
magicianShow(magician_name)

console.log("Copied Array:");
magicianShow(copy_great_magician);