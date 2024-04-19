function sandwiches(...differentitems){
console.log("Here are the ingredients of your SandWich");
differentitems.forEach(item =>{
console.log(`* ${item}`)})
console.log("Enjoy Your SandWich");}

sandwiches('mushroom', 'cheese', 'lettuce', 'tomato');
sandwiches('turkey', 'bacon');
sandwiches('peanut butter', 'jelly', 'banana', 'honey');