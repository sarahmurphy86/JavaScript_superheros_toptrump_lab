const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');

describe('Game', function(){

  let player1;
  let player2;
  let game;

  beforeEach(function(){
    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  it('should start with deck of cards', function(){
    assert.strictEqual(game.getDeckCount(), 6);
  });


});
