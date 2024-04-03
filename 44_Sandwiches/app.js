"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich(item) {
    console.log('\nMaking your sandwich with: ');
    item.forEach(Element => console.log("- " + Element));
    console.log('Enjoy your sandwich:\n');
}
makeSandwich(['ham', 'cheese', 'tomato']);
makeSandwich(['ham', 'Bacon']);
makeSandwich(['ham', 'cheese', 'lettuce', 'onion']);
makeSandwich(['ham', 'tomato', 'lettuce', 'bacon']);
