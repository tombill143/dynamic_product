const url = "https://kea-alt-del.dk/t7/api/products/";
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProducts(data));
//populate the page

function showProducts(products) {
  console.log(products);
}
