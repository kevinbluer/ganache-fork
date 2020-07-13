# Ganache Forking Demo 🍴

This project demonstrates forking an existing chain to a local instance of [ganache-cli](https://github.com/trufflesuite/ganache-cli). 

## Setup

Assuming you're using `yarn`, you'll be able to install the dependencies as followsL

```
yarn
```

You'll then need to create a `.env` file in the root of the project and set the environment variables as follows (with `RPC_URL` and `NETWORK_ID` matching those of the network from which you wish to fork from).

```
RPC_URL=http://my-rpc-node
NETWORK_ID=123456
```

## Deploying Contracts

If the example contracts (e.g. `SimpleStorage`) aren't already deployed to the source network (e.g. the one you'll be forking from) then you'll need to that first.

```
truffle migrate --network source
```

After this it will be worth setting a value to the `storedData` state variable in the contract, so you'll be able to both see it and set it within the forked instance.

```
truffle console --network fork
let i = await SimpleStorage.deployed()
i.set(42)
```

## Forking

Assuming the above steps worked correctly you're now ready to fork the original network 🎉

```
npm run fork
```

And then connect to this now locally running forked instance with the following. You'll note the value *should* be the same as to what you set it on the source network.

```
truffle console --network fork
let i = await SimpleStorage.deployed()
i.get()
```

We can now update this value without ever the source network.

```
i.set(24)
```

## Going Deeper

While the above is somewhat contrived, it highlights the potential of forking, particularly when it comes to testing against contracts on existing networks. A good example of this can be found [here](https://github.com/truffle-box/defi-box).

## Questions

Any questions, just reach out to **kevin@trufflesuite.com**.