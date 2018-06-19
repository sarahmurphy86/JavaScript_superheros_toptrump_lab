const assert = require('assert');
const Card = require('../card.js');

describe ('Card', function (){

  let card;

  beforeEach(function (){
    card = new Card('Superman', 6, 9, 7);
  });

  it('should have a name', function(){
    assert.strictEqual(card.name, 'Superman');
  });


});
