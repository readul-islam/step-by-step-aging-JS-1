/* JavaScript has the primitive types: number, string, boolean, null, undefined, symbol and bigint and a complex type: object. */
//1. Number
const number = 10; //integer
const num = 12.3;   //decimal number
console.log(typeof number);

//2.string
// string begin with qutention and end with qutention '' or "". string are muteable or unchangable but you create new string with execting string

const string = 'Hello';
const str = "world";
const createStr =  string + ' ' + str;
console.log( typeof string,createStr);

//3.boolean -boolen has two value false and true;
const boolean = false;
const boolean1= true;
console.log(typeof boolean);
//4.null 
const null1 = null;
console.log(null == null); //true
console.log(typeof null1); // object

//5.undefine 
const mass = undefined;
console.log(mass); // undefined
console.log(typeof mass); //undefined
console.log(undefined == undefined); // true
//6. object non-primitive data type or complex data 
//access two way 1. notition(.), 2. ['propertyName']

const friend = {
    name:'Abdul Alim',
    age:20
}
console.log(typeof friend);
console.log(friend.age);
console.log(friend['name']);

