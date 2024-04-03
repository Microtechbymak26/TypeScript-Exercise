
//array but not an alphabatical order
let places: string[] = ['Italy','Germany','Agra','Eifel tower','Times Square'];

// print your array in original order
console.log('Original ' + places);

//print your array in alphabatical order without modifying the actual list.
console.log('Copy ' + [...places].sort());

//Show that your array is still in its original order by printing it.
console.log('Original ' + places);

//print your array in reverse alphabatical order without changing the order of the 
// original list.
console.log('Copy ' + [...places].sort().reverse());

//show that your aray is still in its original order by printing it  again
console.log('Original ' + places);

//Reverse your order of your list. Print the array to show that its order has changed.
console.log('Original ' + places.reverse());

//Reverse the order of your list again. Print the list to show its back to its original order.
console.log('Original ' + places.reverse());

//Sort your array so it's stored in alphabatical order. Print the array to show that 
//its order has been changed.
console.log('Original ' + places.sort()); 

//sort to change your so its stored in reverse alphabatical order. 
//Print the list to show that its order has changed.
console.log('Original ' + places.sort().reverse());