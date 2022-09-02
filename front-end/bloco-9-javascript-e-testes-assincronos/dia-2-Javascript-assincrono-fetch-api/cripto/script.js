const URL = 'https://api.coingecko.com/api/v3/coins';
const cardContainer = document.querySelector('.card-container');

async function getCoins() {
  const request = await fetch(URL);
  const json = await request.json();
  return json;
}

const coins = await getCoins();

for (let i = 0; i < 12; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  const name = document.createElement('h3');
  name.innerText = coins[i].name;
  const coinImg = document.createElement('img');
  coinImg.src = coins[i].image.small;
  const coinPrice = document.createElement('p');
  const coinPriceReal = coins[i].market_data.current_price.brl.toLocaleString(
    'pt-br',
    { style: 'currency', currency: 'BRL' }
  );
  coinPrice.innerText = coinPriceReal;
  card.appendChild(coinImg);
  card.appendChild(name);
  card.appendChild(coinPrice);

  cardContainer.appendChild(card);
}
