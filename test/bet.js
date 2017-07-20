var Bet = artifacts.require('./Bet.sol');

contract('Bet', function(accounts) {
  it('should make bets', function() {
    var bet;
    
    return Bet.deployed().then(function(instance) {
      bet = instance;
      return bet.makeBet.call(1, {from: accounts[0]});
    }).then(function(ret) {
      assert.equal(ret, true, 'make bet did not succeed');
      return bet.getBet.call(accounts[0]);
    }).then(function(ret) {
      assert.equal(ret.toNumber(), 1, 'getBet return value wrong');
      return bet.getBet.call(accounts[1]);
    }).then(function(ret) {
      assert.equal(ret.toNumber(), 0, 'getBet return value wrong');
      return bet.makeBet.call(4, {from: accounts[1]});
    }).then(function(ret) {
      assert.equal(ret, true, 'make bet did not succeed');
      return bet.getBet.call(accounts[1]);
    }).then(function(ret) {
      assert.equal(ret.toNumber(), 4, 'getBet return value wrong');
    });
  });
});
