let Guest_list: string[] =['Ateeb','Kashif','Ali','Hassan'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. '+Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you \n\n')
// }
let absent_Guest: string = 'Ateeb' ;
let new_Guest: string = 'Ahmed' ;
Guest_list[0] = new_Guest ;
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. '+Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you \n\n')
// }
// console.log(`Mr. ${absent_Guest} is not coming to the party`);
// console.log('Good news! we find big table so we are inviting 3 more guests. ')

// array mai 3 guest add kiye hai
Guest_list.unshift('sir zia khan') ;
Guest_list.splice(2 , 0 ,'Imran khan');
Guest_list.push('Bilawal Bhutto Zardari');

// yahan per maine 6 guest ko array ko print kiya hai
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. '+Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you \n\n')
// }

// Sorry Message to guest for not inviting
// console.log('\nSorry we can not arrange big table, only two peoples will beinvited.');

// Yahan per maine guest remove kiye hain
while(Guest_list.length > 2){
  let remove_Guest = Guest_list.pop();
  // console.log(`Sorry Mr. ${remove_Guest}, you are not invited for Dinner`);
}

// Hamarey bache howe 2 invited guest.
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. '+Guest_list[i] + ',\n\nYou are still invited in our party.\n\nThank you \n\n')
// }

// Mena sare guest array se remove krwa diye  
Guest_list.splice(0, 2);
console.log(Guest_list)

//Exercise 19

//Print a messsage indicating the number of people you are inviting to Dinner.
console.log(`Total number of Guest Are: ${Guest_list.length}`);