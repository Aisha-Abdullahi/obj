const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
let keys = Object.keys(person);  // Print values of person using Object.keys
console.log(keys);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];

  // console.log(person[key]);  // Print values of person using bracket notation
  console.log(key + "-" + person[key]);
}             
