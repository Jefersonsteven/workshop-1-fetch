/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const app = document.querySelector('#app');
app.className = 'grid-cols-2 p-5 gap-5 place-content-center justify-items-center w-full h-full grid';

const formatPrice = (price) => {

  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return newPrice;
}

window
.fetch(`${baseUrl}/api/avo`)
.then(response => response.json())
.then(JSON => {
  const itemsList = [];
  JSON.data.forEach(item => {
    // * crear img
    const img = document.createElement('img');
    img.src = `${baseUrl}${item.image}`;
    img.className = 'max-h-52 rounded-xl';
    // * crear title
    const title = document.createElement('h2');
    title.textContent = item.name;
    title.className = 'text-2xl';
    // * crear precio
    const price = document.createElement('h3');
    price.textContent = formatPrice(item.price);
    price.className = 'text-indigo-600 text-lg font-black';
    // * crear contenedor
    const container = document.createElement('div');
    container.append(img, title, price);
    container.className = 'max-h-96 gap-5 rounded-xl p-5 flex flex-col w-fit max-w-lg min-w-min';
    container.style.backgroundColor = 'rgb(167, 243, 208)';

    itemsList.push(container);
  });
  app.append(...itemsList);
});