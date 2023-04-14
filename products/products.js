const id = window.location.search.replace("?", "");
const root = document.getElementById("root");
const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`;

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

  root.innerHTML += `<div class="container" id=${products.id}>
                        <img
                            class="jacket"
                            src=${products.image}
                            alt=${products.title}
                        />
                        <div class="product-info-container">
                            <h2 class="product-name">${products.title}</h2>
                            <div class="size">
                            ${printSizes(products.sizes)}
                            </div>
                            <h3 class="price">
                            ${
                              products.onSale
                                ? products.discountedPrice
                                : products.price
                            }
                            </h3>
                            <p class="product-description">${products.description}</p>
                            <button class="btn">Add to cart</button>
                        </div>
                    </div>`;
}

getProducts();
