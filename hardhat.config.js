require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'localhost',
   networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainid: 1337,
  },
  
   polygon: {
    url: process.env.POLYGON_RPC,
    chainid: 137,
    accounts: [process.env.PRIVATE_KEY]
  }  
    
},
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 4000000,
  },
}