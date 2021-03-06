// async & await
// clear style of using promise

// 1. async
async function fetchUSer() {
  // do network request in 10 secs...
  return 'chan';
}

const user = fetchUSer();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return 'π';
}

async function getBanana() {
  await delay(1000);
  return 'π';
}
// function getBanana() {
//   return delay(3000)
//   .then(() => 'π');
// }

async function pickFruits() {
  const applePromise = getApple(); // promise μμ±μ λ°λ‘ λ°μ
  const bananaPromise = getBanana();
  const apple = await applePromise; // apple, banana λ³λ ¬ μ€ν
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); // λ¨Όμ  λλλ κ² λΆν° μΆλ ₯