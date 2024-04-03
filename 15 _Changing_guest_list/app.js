"use strict";
let Guest_list = ['Ateeb', 'Kashif', 'Ali', 'Hassan'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you \n\n');
}
let absent_Guest = 'Ateeb';
let new_Guest = 'Ahmed';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you \n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party`);
