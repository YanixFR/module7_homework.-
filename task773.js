const users = [
    { name: "Yana", age: 28 },
    { name: "Helena", age: 46 },
    { name: "Alex", age: 12 },
    { name: "Leo", age: 5 }
];

const adults = users.filter(user => user.age >= 18);
const adultNames = adults.map(user => user.name);

console.log(adultNames); 

