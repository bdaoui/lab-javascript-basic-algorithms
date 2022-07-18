console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Aom";
console.log(`The driver's name is ${hacker1}`);

let hacker2 =  "Jerry";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} charachters.`);
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 
let upperChar = hacker1.toUpperCase().split('');
let resultDriver = "";

for(i=0; i<upperChar.length;i++){
    resultDriver += `${upperChar[i]} `;    
}

console.log(resultDriver);

// 3.2 

let resultNav = "";

for(i = hacker2.length-1; i >=0; i--){
    resultNav += hacker2[i];
}

console.log(resultNav);

// 3.3

let drivernIn = hacker1.slice(0,1); 
let NavigatorIn = hacker2.slice(0,1);

let initials = [];
initials.push(drivernIn, NavigatorIn);
initials.sort();

if(hacker1.slice(0,1) === initials[0]){
    console.log("The driver's name goes first.")
}

else if(hacker2.slice(0,1) === initials[0]){
 console.log("Yo, the navigator goes first definitely.")
}

else{
    console.log("What?! You both have the same name?")
}

// Bonus

let loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac odio in urna ultrices eleifend a nec leo. Etiam et aliquam felis, tristique ultrices purus. Sed pulvinar orci ut urna viverra, at iaculis quam venenatis. Vestibulum finibus sem ut ornare pellentesque. Aliquam lobortis sem quis nisi sollicitudin dictum. Suspendisse scelerisque lectus mauris, vel porta est mollis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat vestibulum augue non congue. Sed nibh nisi, egestas eu finibus et, imperdiet eu ante.Duis egestas varius dignissim. Mauris pulvinar dignissim interdum. Nunc hendrerit tortor nec ante lobortis, ut euismod nisl bibendum. Fusce congue purus elementum nulla tincidunt, in porttitor tortor rhoncus. Aliquam semper tellus risus, in fringilla felis volutpat ut. Cras a nisi justo. Etiam magna nisl, lacinia ut mi et, ultrices elementum nulla.Proin dignissim quis est id mattis. Donec sollicitudin quam a mauris placerat, nec bibendum nulla molestie. Donec eu risus eu nunc consectetur elementum non vel ex. Cras a urna mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis placerat at ligula eu convallis. Quisque eu imperdiet libero. Pellentesque sodales nec quam sit amet tincidunt. Morbi nulla ante, vehicula a nunc ut, rutrum eleifend est. Vivamus ullamcorper eros quis consectetur congue. Nam ullamcorper fermentum purus. Suspendisse fringilla lobortis dictum. Sed eget volutpat turpis. Sed pellentesque nunc non nunc convallis rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris lacus orci, porta at magna nec, sollicitudin porta sapien.";

let loreIpsumWordCount = loreIpsum.split(' ').length;
console.log(loreIpsumWordCount);

// Not gonna lie, I found the solution to the last one online, I do not understand why the -1 is needed when it is not needed in the prior exercise. 

console.log(loreIpsum.split(" et").length-1);
