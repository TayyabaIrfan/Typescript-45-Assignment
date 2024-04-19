let show_magician : string[] =["Davin", "Petter", "Harry", "Shin Lim"]

function magicianShow(magicianName){
for (let i=0; i < magicianName.length; i++)
console.log(`${magicianName[i]}`);}

function make_great (magicianName: string[]){
    return magicianName.map(name => `The Great ${name}`)
}
let magician_name = ["Harry", "Climpse", "Chatter"]
let great_magicians = make_great (magician_name)

magicianShow(great_magicians)