const assert = require('assert');
const Player = require('../player.js');

describe('Player', function (){

  let player;

  beforeEach(function(){
    player = new Player ();
  });

  it('should start with empty hand', function(){
    assert.strictEqual(player.getHandCount(), 0);
  });


});
