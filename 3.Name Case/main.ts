let personName: string = "Eric";

// Uppercase Letters
console.log("uppercase:", personName.toLocaleUpperCase());

//Lowercase Letters
console.log("lowercase:", personName.toLocaleLowerCase());

//Title letters
console.log("titlecase:", personName.replace(/bw/g,c => c.toUpperCase()));