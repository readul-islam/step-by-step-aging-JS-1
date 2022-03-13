const friend = {
    id:1011,
    name:'Akash Mahamud',
    village:'Barisa',
    Rigion:'islam'
}
// access 2 ways (. or [''])
// array bitor akti property ase kina ta chack korte (in) usw kora hoy 
// delete property in object use delete 

console.log('name' in friend);
console.log('ak' in friend);
delete friend.name;
console.log(friend);