
const suits  = [ "spade", "diamond", "hearts", "clubs"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

class Deck{
    constructor(cards = newDeck()) {
        this.cards = cards;
    }
    get numberOfCards() {
        return this.cards.length
    }
  
    
    shuffleCards() {
        for(let i = this.numberOfCards - 1 ; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}


class Card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}    


function newDeck() {
    return suits.flatMap(suit => {
        return values.map(value=> {
            return new Card(suit, value)
        })
    })
}


let player1, player2

startGame() 
 function startGame(){
 const deck = new Deck()
 deck.shuffleCards()

  const split = (deck.numberOfCards / 2)
  player1 = new Deck(deck.cards.slice(0, split))
  player2 = new Deck(deck.cards.slice(split, deck.numberOfCards))

  console.log(player1)
  console.log(player2)
}


const deck = new Deck();
console.log(deck.cards);

var player1CardValue = player1.cards[0].value
var player2CardValue = player2.cards[0].value
player1Score = 0;
player2Score = 0;
tie = 0;
       
        do { if(player1CardValue > player2CardValue){
            console.log(`player 1's card`, player1CardValue, `player 2's card`, player2CardValue)
            console.log('what is player ones card minus player twos', player1CardValue - player2CardValue)
            
           
            player1Score ++;
            
            ///console.log(player1)
            //console.log(player2)
            console.log(`point for player1`, )
            console.log(`player 1's card`, player1CardValue, `player 2's card`, player2CardValue, )
            //console.log('what is player ones card minus player twos', player1CardValue - player2CardValue)
            console.log(`player 1's score is`, player1Score)
            console.log(`player 2's score is`, player2Score, 
            '\n' )
            ///console.log(tie)

            ///console.log(player1)
            ///console.log(player2)
            var player1CardValue = player1.cards[0].value;
            var player2CardValue = player2.cards[0].value;
        } else if(player1CardValue < player2CardValue){
            
           
            player2Score ++;
            console.log(`point for player2`)
            console.log( `player 2's card`, player2CardValue, `player 1's card`, player1CardValue,)
            //console.log('what is player ones card minus player twos', player2CardValue - player1CardValue)
            console.log(`player 1's score is`, player1Score, )
            console.log(`player 2's score is`, player2Score,
            '\n')
            ///console.log(tie)

            ///console.log(player1)
            ///console.log(player2)
            var player1CardValue = player1.cards[0].value;
            var player2CardValue = player2.cards[0].value;

        }   else{
           
            ////console.log(`tie`)
            console.log(player1CardValue, player2CardValue)
            console.log(`player 1's score is`, player1Score)
            console.log(`player 2's score is`, player2Score,
            '\n')
            
            var player1CardValue = player1.cards[0].value;
            var player2CardValue = player2.cards[0].value;
            tie ++;
            ////console.log(tie)
        }
     
    }   while (player1.cards.shift(0)  && player2.cards.shift(0))
         
    
    console.log(`player 1's score is`, player1Score)
    console.log(`player 2's score is`, player2Score)


    