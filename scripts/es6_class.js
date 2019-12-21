class Deck2 {
  constructor() {
    this.initialize();
  }
  initialize() {
    var suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    var faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    var deck = [];
    for (var sindex = 0; sindex < suits.length; sindex++) {
      for (var findex = 0; findex < faces.length; findex++) {
        deck.push(this.createCard(suits[sindex], faces[findex]));
      }
    }
    this.deck = deck;
  }
  createCard(suit, face) {
    return new Card2(suit, face);
  }
}

class Card2 {
  constructor(suit, face) {
    this.suit = suit;
    this.face = face;
  }
  get image() {
    return `${this.suit.toLowerCase()}-${this.face.toLowerCase()}.jpg`;
  }
  get value() {
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

const cards2 = new Deck2();

document.getElementById("es6_class").innerHTML = `
    <button class="btn" onClick="alert(JSON.stringify(cards2.deck,null,1))">cards2.deck</button>
`;
