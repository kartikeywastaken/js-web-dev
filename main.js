const name = 'test , owo , yash';
let age = 10;
let array = ["ok", "yes", "test"]; // to create an array
// let hello = `my name is ${name}`


const life = {     // similar to struct in c but much more powerful
    new: "yes",
    age: 100,
    oof: {
        o: ["sheila", "error"]
    }
};  
console.log(life);
console.log(life.oof);
console.log(life.new, life.age);

console.log(array);
console.log(array.indexOf("yes"));
console.log(array.slice(0));
console.log(Array.isArray(array));
console.log(name.split(', '));