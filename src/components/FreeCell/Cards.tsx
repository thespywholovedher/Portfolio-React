

type Ace = 1
type Two = 2
type Three = 3
type Four = 4
type Five = 5
type Six = 6
type Seven = 7
type Eight = 8
type Nine = 9
type Ten = 10
type Jack = 11
type Queen = 12
type King = 13

type Club = 'Club'
type Diamond = 'Diamond'
type Hearts = 'Hearts'
type Spades = 'Spades'

type Black = 'Black'
type Red = 'Red'

type Suit = Club | Diamond | Hearts | Spades
type Rank = Two | Three | Four | Five | Six | Seven | Eight | Nine | Ten | Jack | Queen | King | Ace
type Color = Black | Red

interface Card {
    suit: Suit
    rank: Rank
    color: Color
}

type Deck = readonly Card[]


const AllSuits: readonly Suit[] = ['Club', 'Diamond', 'Hearts', 'Spades']
const AllRanks: readonly Rank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let fullDeck: Deck = 
    AllRanks.flatMap((rank: Rank): Deck => 
        AllSuits.map((suit: Suit): Card => {                        
            return {suit, rank, color: (suit === 'Hearts' || suit === 'Diamond' ? 'Red' : 'Black') }
}));

function draw(deck: Deck): [Card, Deck] {
    return [deck[0], deck.slice(1)]
}

