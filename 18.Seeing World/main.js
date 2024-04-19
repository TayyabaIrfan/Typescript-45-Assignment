var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["Canada", "Australia", "Germany", "USA", "China"];
for (var i = 0; i < favPlaces.length; i++)
    console.log("Original order: ".concat(favPlaces[i]));
for (var i = 0; i < favPlaces.length; i++)
    console.log("Alphabetical order:" + __spreadArray([], favPlaces, true).sort()[i]);
for (var i = 0; i < favPlaces.length; i++) {
    console.log("Original order: ".concat(favPlaces[i]));
}
for (var i = 0; i < favPlaces.length; i++) {
    console.log("Reverse Order:", __spreadArray([], favPlaces, true).sort().reverse()[i]);
}
for (var i = 0; i < favPlaces.length; i++) {
    console.log("Original order: ".concat(favPlaces[i]));
}
for (var i = 0; i < favPlaces.length; i++) {
    console.log("Reverse Order:", __spreadArray([], favPlaces, true).sort().reverse()[i], "This shows reverse condition");
}
for (var i = 0; i < favPlaces.length; i++) {
    console.log("Original order: ".concat(__spreadArray([], favPlaces, true).sort()[i], " This shows Original Position"));
}
