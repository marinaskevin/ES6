const sayHello2 = (name) => console.log(`Hello ${name}`);

const square = n => n * n;

const multiplyThrice = x => y => z => x * y * z;

function nest(array, insert) {
  return array.reduceRight((accumulator, key) => ({ [key]: accumulator }), insert);
}

document.getElementById("arrow_functions").innerHTML = `
  <button class="btn" id="helloButton">sayHello2("user")</button>
  <button class="btn" onClick="alert(square(4))">square(4)</button>
  <button class="btn" onClick="alert(square(7))">square(7)</button>
  <button class="btn" onClick="alert(multiplyThrice(3)(7)(11))">multiplyThrice(3)(7)(11)</button>
`;

document.getElementById("helloButton").addEventListener("click", function() { sayHello2("user"); }, false);