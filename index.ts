const products = require("./data/products.json");

interface Product {
  name: string;
  description: string;
  price: number;
  image: URL;
  limit: number;
  amount: number;

  /*  function constructor(
    name: string,
    description: string,
    price: number,
    image: URL,
    limit: number,
    amount: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.limit = limit;
    this.amount = amount;
  } */
}

interface Cart {
  products: Product[];

  /* constructor() {
    this.products = [];
  } */
}

function addProduct(cart: Cart, product: Product) {
  cart.products.push(product);
}

function removeProduct(cart: Cart, productToRemove: Product) {
  cart.products.forEach((product, i) => {
    if (product.name === productToRemove.name) cart.products.splice(i, 1);
  });
}

function updateProductAmount(
  cart: Cart,
  productToChangeAmount: Product,
  amount: number
) {
  cart.products.forEach((product, i) => {
    if (product.name === productToChangeAmount.name) product.amount = amount;
  });
}

function checkout(cart: Cart) {
  cart.products = [];
}

function totalPrice(cart: Cart): number {
  let sum: number = 0;
  cart.products.forEach((product, i) => {
    sum += product.amount * product.price;
  });
  return sum;
}

function productQuantity(cart: Cart) {
  return cart.products.length;
}

let cart: Cart = { products: [] };

const parsedProducts: Product[] = products;

for (let i = 0; i < parsedProducts.length; i++) {
  addProduct(cart, parsedProducts[i]);
}

console.log(totalPrice(cart));
