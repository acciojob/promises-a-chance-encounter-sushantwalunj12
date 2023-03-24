const output = document.getElementById("output");
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const promises = [];
for (let i = 1; i <= 5; i++) {
  const promise = new Promise((resolve, reject) => {
    const randomNumber = getRandomNumber(1, 10);
    const shouldReject = Math.random() < 0.5;

    if (shouldReject) {
      reject(`Promise ${i} rejected with error`);
    } else {
      resolve(randomNumber);
    }
  });
  promises.push(promise);
}

Promise.all(promises)
  .then((results) => {
    for (let i = 0; i < results.length; i++) {
      output.innerHTML += `<p>Promise ${i + 1}: ${results[i]}</p>`;
    }
  })
  .catch((error) => {
    for (let i = 0; i < promises.length; i++) {
      output.innerHTML += `<p>${error}</p>`;
    }
  });
