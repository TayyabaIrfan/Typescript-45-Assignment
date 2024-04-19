var personName = "Eric";
// Uppercase Letters
console.log("uppercase:", personName.toLocaleUpperCase());
//Lowercase Letters
console.log("lowercase:", personName.toLocaleLowerCase());
//Title letters
console.log("titlecase:", personName.replace(/bw/g, function (c) { return c.toUpperCase(); }));
