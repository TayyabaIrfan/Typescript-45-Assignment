let currentUsers :string[] = ["Amna", "Aliza", "Maria", "Bushra", "Madiha"];
let newUsers :string[] = ["Amna", "Aliza", "Mehwish", "Jasra", "Muneeba"];

newUsers.forEach(newUser => {  
if(currentUsers.some(currentUsers => currentUsers.toLowerCase() === newUser.toLowerCase())) {
console.log(`${newUser} You will need to enter a new username.`);}
else {console.log(`${newUser} is available.`)}
})