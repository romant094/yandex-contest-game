let time = performance.now();
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const countDeckLength = () => {
    let result = 1;

    while (result % 3 !== 0) {
        result = getRandom(3, 999);
    }

    return result;
};
const deckLength = countDeckLength();

const createDeck = (x) => {
    let deck = [];

    const unique = (arr, val) => {
        for (let i = 0, length = arr.length; i < length; i++) {
            if (arr[i] === val) {
                return false;
            }
        }
        return true;
    };

    while (deck.length < x) {
        const deckElem = getRandom(1, 1000);

        if (unique(deck, deckElem)) {
            deck.push(deckElem);
        }
    }

    return deck;
};
const deck = createDeck(deckLength);
console.log('deck: ', deck);

const play = (deck) => {
    let sumPetya = 0,
        sumVasya = 0;

    const takeAndDelete = (deck) => {
        const li = deck.length - 1;

        sumPetya += deck[li];
        sumVasya += deck[li - 1];

        if (deck[li] < deck[li - 1]) {
            sumPetya += deck[li - 2];
        } else {
            sumVasya += deck[li - 2];
        }
        deck.splice(-3);
    };

    while (deck.length > 0) {
        takeAndDelete(deck);
    }

    console.log(`Петя набрал ${sumPetya} очков,\nВася набрал ${sumVasya} очков.\nПобедил ${sumPetya > sumVasya ? 'Петя' : 'Вася'}.`);
    let winner;
    sumPetya > sumVasya ? winner='Петя' : winner='Вася';
    return winner;
};
play(deck);
time = performance.now() - time;
console.log('Время выполнения = ', time);