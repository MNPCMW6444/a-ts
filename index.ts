class Product {
  name: string;
  description: string;
  price: number;
  image: URL;
  limit: number;
}

class Cart {
  products: Array<Product>;
  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(productToRemove: Product) {
    this.products.forEach((product, i) => {
      if (product.name === productToRemove.name) this.products.splice(i, 1);
    });
  }

  updateProductAmount() {
    return "Hello, ";
  }

  checkout() {
    return "Hello, ";
  }

  totalPrice() {
    return "Hello, ";
  }

  productQuantity() {
    return "Hello, ";
  }
}
