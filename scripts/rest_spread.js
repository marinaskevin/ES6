function min() {
  var numbers = Array.prototype.slice.call(arguments);
  return Math.min.apply(null, numbers);
}

function minES6(...numbers) {
  return Math.min.apply(null, numbers);
}

const animals2 = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal2, secondAnimal2, ...otherAnimals] = animals2;

const person3 = {
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

const { firstName3, lastName3, ...attributes3 } = person3;

const person3Copy = { ...person3 };

function samePerson() {
  return person3Copy === person3;
}

function sameAddress() {
  return person3Copy.addresses === person3.addresses;
}


document.getElementById("rest_spread").innerHTML = `
    <button class="btn" onClick="alert(min(10, 92, 17, 31, 22))">min</button>
    <button class="btn" onClick="alert(minES6(10, 92, 17, 31, 22))">minES6</button>
    <button class="btn" onClick="alert(otherAnimals.toString())">otherAnimals</button>
    <button class="btn" onClick="alert(samePerson())">samePerson</button>
    <button class="btn" onClick="alert(sameAddress())">sameAddress</button>
`;
