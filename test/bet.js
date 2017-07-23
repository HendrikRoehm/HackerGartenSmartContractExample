var Bet = artifacts.require('./Bet.sol');

contract('Bet', function(accounts) {
  it('should make bets', function() {
    var bet;
    
    return Bet.deployed().then(function(instance) {
      bet = instance;
      return bet.makeBet(1, {from: accounts[0]});
    }).then(function() {
      return bet.getBet.call(accounts[0]);
    }).then(function(choice0) {
      assert.equal(choice0.toNumber(), 1, 'getBet for account 0 returns wrong value');
      return bet.getBet.call(accounts[1]);
    }).then(function(choice1) {
      assert.equal(choice1.toNumber(), 0, 'getBet for account 1 returns wrong value before choice');
      return bet.makeBet(4, {from: accounts[1]});
    }).then(function() {
      return bet.getBet.call(accounts[1]);
    }).then(function(choice1updated) {
      assert.equal(choice1updated.toNumber(), 4, 'getBet for account 1 returns wrong value after choice');
    });
  });
});
