const Player = function(){
  this.hand = [];
}

Player.prototype.getHandCount = function () {
  return this.hand.length;

};
module.exports = Player;
