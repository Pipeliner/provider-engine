const ProviderEngine = require('./index.js')
const ZeroClientProvider = require('./zero.js')

// create engine
const engine = ZeroClientProvider({
  getAccounts: function(){},
  rpcUrl: 'https://mainnet.infura.io/',
})

// log new blocks
engine.on('block', function(block){
  console.log('BLOCK CHANGED:', '#'+block.number.toString('hex'), '0x'+block.hash.toString('hex'))
})