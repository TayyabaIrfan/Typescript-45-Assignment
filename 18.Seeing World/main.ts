let favPlaces: string[] = ["Canada", "Australia", "Germany", "USA","China"]
for(let i= 0; i<favPlaces.length; i++)
    console.log(`Original order: ${favPlaces[i]}`);

for(let i= 0; i<favPlaces.length; i++)
console.log("Alphabetical order:" + [...favPlaces].sort()[i]);

for(let i= 0; i<favPlaces.length; i++){
console.log(`Original order: ${favPlaces[i]}`);}

for(let i= 0; i<favPlaces.length; i++){
    console.log("Reverse Order:", [...favPlaces].sort().reverse()[i]) }

 for(let i= 0; i<favPlaces.length; i++){
    console.log(`Original order: ${favPlaces[i]}`);}

for(let i= 0; i<favPlaces.length; i++){
     console.log("Reverse Order:", [...favPlaces].sort().reverse()[i] , "This shows reverse condition");}
        
for(let i= 0; i<favPlaces.length; i++){
     console.log(`Original order: ${[...favPlaces].sort()[i]} This shows Original Position`);}    
