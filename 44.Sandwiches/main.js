function sandwiches() {
    var differentitems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        differentitems[_i] = arguments[_i];
    }
    console.log("Here are the ingredients of your SandWich");
    differentitems.forEach(function (item) {
        console.log("* ".concat(item));
    });
    console.log("Enjoy Your SandWich");
}
sandwiches('mushroom', 'cheese', 'lettuce', 'tomato');
sandwiches('turkey', 'bacon');
sandwiches('peanut butter', 'jelly', 'banana', 'honey');
