function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  return new Promise((resolve, reject) => {
    setTimeout
      (() => {
          warehouse = {
            paint: {
              product: 'Neon Green Paint',
              directions: () => 'mix it!'
            },
            brush: {
              product: 'Horsehair brush',
              directions: () => 'start painting!'
            },
            tarp: {
              product: 'A large tarp',
              directions: () => 'cover the floor!',
            }
          };
          if (item in warehouse) {
            resolve(warehouse[item]);
          } else {
            reject(new Error(`Item '${item}' is out of stock!`));
          }
        }, deliveryTime);
    });
}

function receivedItem(item) {
  if(item) {
    console.log(`Received ${item.product}, time to ${item.directions()}`);
  }
  else {
    console.log('missing '+item);
    return;
  }
}

const handleError = error => console.log(error.message);

function getReadyToPaint() {
  const brush = orderSupplies('brush');
  const paint = orderSupplies('paint');
  const roller = orderSupplies('roller');
  const tarp = orderSupplies('tarp');
  const paint2 = orderSupplies('paint');
  Promise.all([tarp, paint, brush])
    .then(items => items.forEach(receivedItem))
    .catch(handleError);
  Promise.all([roller])
    .then(items => items.forEach(receivedItem))
    .catch(handleError);
}

document.getElementById("promise_callbacks").innerHTML = `
  <button class="btn" onClick="getReadyToPaint()">getReadyToPaint()</button>
`;