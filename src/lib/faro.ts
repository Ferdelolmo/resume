import { initializeFaro } from '@grafana/faro-web-sdk';

// TODO: Replace the following with your own configuration
const faro = initializeFaro({
  url: 'YOUR_GRAFANA_URL',
  apiKey: 'YOUR_GRAFANA_API_KEY',
  instrumentations: [],
});

export default faro;