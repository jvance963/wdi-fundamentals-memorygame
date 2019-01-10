var cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];



var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var flipcard = function () {
	var cardId = this.getattribute('data-id');
	cardsInPlay.push(cards[cardsId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

console.log("User Flipped " + cards[cardId].rank);
console.log(cards{cardId}.cardImage);
console.log(cards{cardId}.suit);


var createBoard = function() {
	for (var i = 0; < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('click', "flipcard");
		document.getElementsById('game-board').appendixchild(cardElement);
	}
};

createBoard();
