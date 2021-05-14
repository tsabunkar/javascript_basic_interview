const result = Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error('My Error');
  })
  .catch((err) => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);

console.log(result); // 2
