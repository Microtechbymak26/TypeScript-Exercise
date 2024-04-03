// write a program that creates objects containing these items.

interface person{
    age:number,
    name:string,
    nationnality:string,
    student:boolean,
}

let person :person = {
    age : 18 ,
    name : 'Ateeb',
    nationnality : 'Pakistan',
    student : true
}
console.log(person);

interface car {
    maker:string,
    color:string,
    automatic:boolean,
}

let car = {
    maker:'toyota',
    color:'black',
    automatic:true
}
console.log(car);
 