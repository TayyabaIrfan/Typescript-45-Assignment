var currentUsers = ["Amna", "Aliza", "Maria", "Bushra", "Madiha"];
var newUsers = ["Amna", "Aliza", "Mehwish", "Jasra", "Muneeba"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUsers) { return currentUsers.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " You will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
