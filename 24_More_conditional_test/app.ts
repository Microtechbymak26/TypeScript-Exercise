

// Equality and Inequality test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

// Equality and Inequality test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");

//Tests using the lower case function 3
console.log("Lower Case function test:", "Hello".toLowerCase() === "hello");

// Numerical tests involving eqality 
console.log("Equality test with numbers", 9 === 9);
// Numerical tests involving inequality,
console.log("Inquality test with numbers", (9 as number) != 26);

//greater than test
console.log("Greater than test", 10 > 5);
// less than test false
console.log("less than test", 10 < 5);

// greater than or equal to, 
console.log("Greater than and equal to: ", 10 >= 10);
// less than or equal to
console.log("Less than and equal to: ", 5 <= 10);

//Tests using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
//Tests using "or" operator
console.log("Or operator test: ", 5===5 || 10 > 5);

//Test whether an item is in a aaray
const fruit:string[] = ["Mango","Apple","WaterMelon"];
console.log('Test "Mango" in the array: ', fruit.includes("Mango"));

//Test whether an item is not in a array !<not
console.log('Testing Nashpati is not in aaray: ', !fruit.includes('Nashpati'));