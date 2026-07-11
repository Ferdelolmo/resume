# Pizza Shop

Welcome to the Pizza Shop project! This was an exciting application to build, focusing on a seamless user experience for ordering pizza online.

## Features

- **Custom Pizza Builder**: Choose your own crust, sauce, and toppings.
- **Cart Management**: Easily add, remove, and update quantities.
- **Secure Payments**: Integrated with Stripe for fast and secure checkout.

## Technologies Used

We decided to use a modern stack to ensure performance and scalability:
- **Frontend**: React and Tailwind CSS
- **Backend**: Node.js and Express
- **Database**: PostgreSQL
- **Payments**: Stripe API

Here is a small snippet of how the cart is initialized:

```javascript
const cart = new Cart();
cart.addItem({ id: 1, name: 'Margherita', size: 'Large' });
console.log(cart.getTotal());
```

Enjoy your pizza!
