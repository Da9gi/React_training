// Function iterator
console.log("################   Iterator     ###############");
function iterable(start = 0, end = Infinity, step = 1) {
  let increaseStart = start;
  const iterator = {
    next() {
      if (increaseStart < end) {
        const result = { value: increaseStart, done: false };
        increaseStart += step;
        return result;
      }
      return { value: "Exceeded !!!", done: true };
    },
  };
  return iterator;
}

const obj = iterable(1, 10, 2);
let result = obj.next();

while (!result.done) {
  console.log(result);
  result = obj.next();
}
console.log(result);

// Function Generator
console.log("################   Generator     ###############");
async function* generator(start = 0, end = Infinity, step = 1) {
  let increaseStart = start;
  while (increaseStart < end) {
    let result = increaseStart;
    increaseStart += step;
    await new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 1000);
    });
    yield result;
  }
  return "Exceeded !!!!";
}

let ob = generator(1, 10, 2);
(async () => {
  for (let i = 0; i<(10/2)+1; i++ ){
      let res = await ob.next();
      console.log(res);
  }
})();
