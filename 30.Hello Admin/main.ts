let userName: string[] =["Admin", "Alice", "John", "Bob", "Jack"];
for (let userNames of userName){
if (userNames === "Admin"){
    console.log(`Hello! Admin , Would you like to see the status report?`)
}
else { console.log("ThankYou! For logging in again") }
}