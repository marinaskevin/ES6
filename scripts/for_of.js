const fruits = ["apple", "banana", "cherry"];

function printFruits() {
  for (const fruit of fruits) {
    console.log(fruit);
  }
}

const person2 = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  username: 'barley',
};

function printPerson() {
  for (const [key, value] of Object.entries(person2)) {
    console.log(`${key} has the value ${value}`);
  }
}

document.getElementById("for_of").innerHTML = `
    <button class="btn" onClick="printFruits()">fruits</button>
    <button class="btn" onClick="printPerson()">person</button>
`;
