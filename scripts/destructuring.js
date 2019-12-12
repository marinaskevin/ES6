const person = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    }
  ],
  createdAt: 1543945177623
};

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const password = '12345';

const { email, password: userPassword } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

const { addresses: [whiteHouse, sherlock] } = person;

const { addresses: [ , { city: london }] } = person;
console.log(london);

document.getElementById("destructuring").innerHTML = `
  <button class="btn" onClick="alert(email)">email</button>
  <button class="btn" onClick="alert(userPassword)">userPassword</button>
  <button class="btn" onClick="alert(firstAnimal)">firstAnimal</button>
  <button class="btn" onClick="alert(secondAnimal)">secondAnimal</button>
  <button class="btn" onClick="alert(thirdAnimal)">thirdAnimal</button>
  <button class="btn" onClick="alert(JSON.stringify(whiteHouse))">whiteHouse</button>
  <button class="btn" onClick="alert(JSON.stringify(sherlock))">sherlock</button>
  <button class="btn" onClick="alert(london)">london</button>
`;
