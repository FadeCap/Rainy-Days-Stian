const url = "https://api.noroff.dev/api/v1/rainy-days";

const resultsContainer = document.querySelector("#product-container");

function handleClick(event) {
  const redirectUrl = `/products/products.html?${event.currentTarget.id}`;
  window.location.href = redirectUrl;
}

function printSizes(arr) {
  let sizes = "";
  for (let i = 0; i < arr.length; i++) {
    sizes += `<h3>${arr[i]}</h3>`;
  }
  return sizes;
}

async function getProducts() {
  const response = await fetch(url);

  const results = await response.json();

  const products = results;

  for (let i = 0; i < products.length; i++) {
    resultsContainer.innerHTML += `<div class="container" id=${
      products[i].id
    } onClick="handleClick(event)" >
                                    <img
                                      class="jacket"
                                      src=${products[i].image}
                                      alt=${products[i].title}
                                    />
                                    <div class="product-info-container">
                                      <h2 class="product-name">${
                                        products[i].title
                                      }</h2>
                                      <div class="size">
                                        ${printSizes(products[i].sizes)}
                                      </div>
                                      <h3 class="price">
                                      ${
                                        products[i].onSale
                                          ? products[i].discountedPrice
                                          : products[i].price
                                      }
                                      </h3>
                                    </div>
                                    <button class="btn">Add to cart</button>
                                  </div>`;
  }
}

getProducts();
