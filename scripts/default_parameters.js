function inRange(number, min = 0, max = 1) {
  return Math.min(min, max) <= number && number < Math.max(min, max);
}

const nextPerson = {};

const { eyeColor = 'blue' } = nextPerson;
// => blue
const [nextAnimal = 'koala'] = [];
// => koala

const credentials = {
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
};

function login({ email = 'some@email.com', password = 'superPass', username = 'noname' } = {}) {
  return email+" "+password+" "+username;
}

document.getElementById("default_parameters").innerHTML = `
    <button class="btn" onclick="alert(inRange(5))">inRange(5)</button>
    <button class="btn" onclick="alert(inRange(3,1,5))">inRange(3,1,5)</button>
    <button class="btn" onclick="alert(eyeColor)">eyeColor</button>
    <button class="btn" onclick="alert(nextAnimal)">nextAnimal</button>
    <button class="btn" onclick="alert(login(credentials))">login(credentials)</button>
    <button class="btn" onclick="alert(login({}))">login({})</button>
    <button class="btn" onclick="alert(login())">login()</button>
`;
