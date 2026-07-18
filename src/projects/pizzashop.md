# Pizza Shop 🍕

Welcome to the Pizza Shop project! This was an application to simulate an e-commerce website where you can order pizzas online. The main idea behind it was to produce meaningful telemetry in shape of metrics, logs and traces, so plugged to Grafana an in a minimal way, you could observe what the user experience was like, comprehending the pain points for the user, visible in end to end interactions covering frontend session and user experience nad connecting it to backend, helping developers and product owners to improve the user experience.

This helped me understand the ins and outs of deploying Grafana for observability so I could learn the domain of observability in depth.

## Technologies Used

- **Frontend**: React and Tailwind CSS
- **Backend**: Node.js and Express
- **Database**: PostgreSQL (managed by Supabase)


## Fun facts 🍕🇮🇹

I mingled too much with italians, plus recently married a beautiful italian woman, so that means at this point I also became very opinionated about pizzas. That also means that ananas is absolutely not allowed in my pizza shop. Try out what happens if you try to add this topping, I dare you :)  🤌

## Repo link

This is the repository link: https://github.com/FerdelOlmo/pizzashop


Here is a small snippet of how the cart is initialized:

```javascript
const cart = new Cart();
cart.addItem({ id: 1, name: 'Margherita', toppings: 'Mozzarella' });
console.log(cart.getTotal());
```

Enjoy your pizza!
