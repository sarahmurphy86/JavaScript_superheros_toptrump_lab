const Card = require('./card.js');

const Game = function(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.deck = [new Card('Superman', 6, 9, 7), new Card('Scarlett Witch', 7, 10, 5), new Card('Black Widow', 8, 6, 9), new Card('The Flash', 7, 4, 10), new Card('Wonder Woman', 8, 7, 5), new Card('Batman', 10, 5, 6)];
}

Game.prototype.getDeckCount = function () {
  return this.deck.length;
};

module.exports = Game;
