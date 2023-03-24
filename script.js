const promises = [];
for (let i = 1; i <= 5; i++) {
  const p = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve(randomNumber);
      } else {
        reject(`Promise ${i} rejected with error`);
      }
    }, 1000);
  });
  promises.push(p);
}

Promise.all(promises)
  .then((results) => {
    results.forEach((result, index) => {
      const p = document.createElement('p');
      p.innerText = `Promise ${index + 1}: ${result}`;
      document.getElementById('output').appendChild(p);
    });
  })
  .catch((error) => {
    const p = document.createElement('p');
    p.innerText = error;
    document.getElementById('output').appendChild(p);
  });
