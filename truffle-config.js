require("dotenv").config();
const HTTPProviderRateLimitRetry = require('./utils/http-provider-rate-limit-retry');

module.exports = {
  networks: {
    origin: {
      provider: () => {
        return new HTTPProviderRateLimitRetry(process.env.RPC_URL, 100000);
      },
      network_id: process.env.NETWORK_ID,
      gasPrice: 0,
      gas: 4500000
    },
    fork: {
      provider: () => {
        return new HTTPProviderRateLimitRetry(`http://127.0.0.1:8545`, 100000);
      },
      network_id: process.env.NETWORK_ID,
      gasPrice: 0,
      gas: 4500000
    }
  },
};