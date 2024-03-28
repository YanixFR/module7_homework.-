const person = {
    firstName: "Yana",
    lastName: "Zakh"
};

function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName("Yana Smith");

console.log(person.fullName); 


