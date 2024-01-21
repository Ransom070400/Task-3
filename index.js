class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    getTotal() {
      let total = 0;
      for (let item of this.items) {
        total += item.product.price * item.quantity;
      }
      return total;
    }
  
    checkout() {
        const total = this.getTotal();
        if (total > 100) {
          console.log("You get free shipping!");
        } else {
          console.log(`Total: $${total}`);
        }
      }
    }
    
  
  
  const Samsung = new Product('Samsung', 500);
  const Iphone = new Product('iphone', 200);
  
  const cart = new ShoppingCart();
  cart.addItem(Samsung, 3);
  cart.addItem(Iphone, 2);
  cart.checkout();





  /*Write an article on Medium that explains the difference between let, const, and var.
   Var was the standard way of decaring variables up untill few years ago when a new version of javascript
   was introduced.var and let are similar but var is globally accepted whil let is not.
   In the old days, 'var' was the only game in town. 
   It has a global or function scope, which means it can be accessed from anywhere within a function.
   When ES6 was introduced , 'let' came into play. 
   It's block-scoped, meaning it's limited to the block, statement, or expression where it's declared.
   'const' is like 'let,' but with a superpower..
    Once a variable is declared with 'const,' you can't change its value.
    */

  
  
