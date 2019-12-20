function Deck() {
  this.initialize();
}
Deck.prototype.initialize = function() {
  var suits = ['Diamond', 'Heart', 'Spade', 'Club'];
  var faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var deck = [];
  for (var sindex = 0; sindex < suits.length; sindex++) {
    for (var findex = 0; findex < faces.length; findex++) {
      deck.push(this.createCard(suits[sindex], faces[findex]));
    }
  }
  this.deck = deck;
};
Deck.prototype.createCard = function(suit, face) {
  return new Card(suit, face);
};
function Card(suit, face) {
  this.suit = suit;
  this.face = face;
}
Object.defineProperties(Card.prototype, {
  image: {
    get: function () {
      return this.suit.toLowerCase() + '-' + this.face.toLowerCase() + '.jpg';
    }
  },
  value: {
    get: function () {
      switch (this.face.toLowerCase()) {
        case 'ace':
          return 14;
        case 'king':
          return 13;
        case 'queen':
          return 12;
        case 'jack':
          return 11;
        default:
          return parseInt(this.face, 10);
      }
    }
  }
});

var cards = new Deck();

document.getElementById("es5_prototype").innerHTML = `
    <button class="btn" onClick="alert(JSON.stringify(cards.deck,null,1))">cards.deck</button>
`;
