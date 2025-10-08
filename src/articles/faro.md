
# From Curiosity to Necessity: Adding Frontend Observability to a Personal Project 🚀

I’ve always been skeptical of marketing buzzwords, but sometimes technology proves you wrong. What started as a simple curiosity quickly became a genuine necessity. Here’s my story.

## A New Project, A New Question 🤔

A few days after launching my personal website, I showed it to a friend who was so impressed that she asked me to build a website for her bed and breakfast 🛌. The goal was to create a standalone platform to reduce her reliance on Booking.com.

While Booking.com is convenient, it comes at a cost—around 20% of the gross daily rate 💸. Our idea was to build a website that would allow users to:

*   📅 View room availability on a calendar.
*   💰 Get an automatic price quote.
*   ✍️ Send a booking request directly.

This approach would benefit both the business and the customer by eliminating middleman fees. After building the site, a new question emerged: **What if we could see where our users were coming from?** 🌍

Wouldn’t it be amazing to know their country, language, and how much time they spend on the site? These insights could help us personalize the user experience, optimize navigation, and even offer custom deals. That’s when I dove into the world of frontend observability.

## Exploring the Options 🗺️

In previous roles, I had used **Real User Monitoring (RUM)** from Datadog. It’s a powerful solution but often overkill for a small project with a limited budget. I also considered Hotjar, which is excellent for heatmaps, but I wanted a more integrated, cost-effective solution.

That’s when I discovered **Grafana Faro**, a free, open-source frontend observability solution within the Grafana Cloud ecosystem. It was love at first query. ❤️

## Getting Started with Grafana Faro 🛠️

Setting up Grafana Faro is straightforward. In Grafana Cloud, a setup wizard walks you through the process:

1.  **Specify your domain and app name.**
2.  **Install the necessary dependencies.** For my React project 💻, I ran:

    ```bash
    npm install @grafana/faro-react @grafana/faro-web-tracing @grafana/faro-web-sdk
    ```

3.  **Configure the sampling rate.** This determines how much user session data you collect. For high-traffic sites, collecting 100% of sessions can be costly. However, for a small project like ours, sampling 100% is perfectly fine and provides maximum insight at no extra cost.

## Adding Faro to the React App 👨‍💻

Next, I located the entry point of my React application, `main.tsx`, and added the following code to initialize Faro:

```typescript
import { matchRoutes } from 'react-router-dom';
import {
  initializeFaro,
  createReactRouterV6DataOptions,
  ReactIntegration,
  getWebInstrumentations,
} from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

initializeFaro({
  url: 'https://faro-collector-prod-eu-west-2.grafana.net/collect/xyz', // Replace with your collector URL
  app: {
    name: 'bnb',
    version: '1.0.0',
    environment: 'production',
  },
  instrumentations: [
    // Mandatory default instrumentations
    ...getWebInstrumentations(),

    // Capture HTTP request traces
    new TracingInstrumentation(),

    // React router integration
    new ReactIntegration({
      router: createReactRouterV6DataOptions({
        matchRoutes,
      }),
    }),
  ],
});
```

## Wrapping Up and Testing ✅

To complete the setup, I installed the Faro rollup plugin for the build process:

```bash
npm install --save-dev @grafana/faro-rollup-plugin
```

After rebuilding the project with `npm run build` 🚀 and deploying the changes, data started flowing into Grafana Cloud. Just like that, we had a real-time, out-of-the-box dashboard with valuable user activity insights.

![Alt text for your image](https://i.imgur.com/fEqdSFH.png)

## Final Thoughts ✨

This experiment was a powerful reminder that data isn’t just for marketers—it’s for builders 💡. Understanding how users interact with your website is no longer a luxury; it’s a superpower. And the best part is that you can achieve it with free, open-source tools and just a few lines of code.

If you’ve built something and want to understand your users better, give Grafana Faro a try. It might just change the way you see your website—and the web itself. 🌐
