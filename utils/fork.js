require("dotenv").config();
const ganache = require("ganache-core");
const HTTPProviderRateLimitRetry = require('./http-provider-rate-limit-retry');

const PORT = 8545;

let provider = new HTTPProviderRateLimitRetry(process.env.RPC_URL, 100000);

const server = ganache.server({
  port: PORT,
  fork: provider,
  network_id: process.env.NETWORK_ID
});

server.listen(PORT, (err, chain) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Forked chain created at http://127.0.0.1:${PORT}`);
  }
});