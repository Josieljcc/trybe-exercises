const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fetchAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.slip.advice));
};

fetchAdvice();
