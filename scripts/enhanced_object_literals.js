var skill = 'run';
var skillDescription = 'I like running';
const name = 'Forrest';
const height = '5ft 8in';
const emailgump = 'forrest@gump.com';
function sayHello(name) {
  console.log(`Hello ${name}!`);
}

const forrest = {
  name,
  emailgump,
  height,
  sayHello,
  sayHelloMethod(name) {
    console.log(`Hello ${name}`);
  },
  [skill]: skillDescription
};

document.getElementById("enhanced_object_literals").innerHTML = `
  <button class="btn" onClick="alert(JSON.stringify(forrest))">forrest</button>
  <button class="btn" onClick="forrest.sayHelloMethod(name)">forrest.sayHelloMethod(name)</button>
`;
