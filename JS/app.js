// Blackjack browser game in JavaScript
//* Create 52 card deck (figure out assiging suits to each card if I want later)
    //? Assign value to each card, use If Else to determine if Ace is 1 or 11
//* Shuffle deck by randomizing order of cards
//* Deal 2 cards each to player and dealer, both player cards visible, first dealer card visible to start
//* Hit, Stand, and Surrender addEventListener() buttons (playerBtns function()) now show
    //? Hit adds card to player
        //* If Else statements if player is <21 (back to playerBtns) , =21 (player wins and game restarts), or >21 (player loses and game restarts)
    //? Stand ends player's turn makes dealer show their second card
        //* If Else statement (dealer <= player) dealer hits, (dealer > player) player loses game resets, 
    //? Surrender restarts game

// Create deck of cards as an array
function deckOfCards() {
    let deck = [];

    let ace = 11;
    let two = 2;
    let three = 3;
    let four = 4;
    let five = 5;
    let six = 6;
    let seven = 7;
    let eight = 8;
    let nine = 9;
    let ten = 10;
    let jack = 10;
    let queen = 10;
    let king = 10;

    for(let i = 0; i < 52; i++) {

        if(i < 4) {
            deck.push(ace);
        } else if (i < 8) {
            deck.push(two);
        } else if (i < 12) {
            deck.push(three);
        } else if (i < 16) {
            deck.push(four);
        } else if (i < 20) {
            deck.push(five);
        } else if (i < 24) {
            deck.push(six);
        } else if (i < 28) {
            deck.push(seven);
        } else if (i < 32) {
            deck.push(eight);
        } else if (i < 36) {
            deck.push(nine);
        } else if (i < 40) {
            deck.push(ten);
        } else if (i < 44) {
            deck.push(jack);
        } else if (i < 48) {
            deck.push(queen);
        } else if (i < 52) {
            deck.push(king);
        } 
    }

    // Shuffle deck of cards using Durstenfeld shuffle
    function shuffle(deck) {
        
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
    shuffle(deck);
    console.log(deck);

    // Deal cards to player and house
    function dealPlayer(deck) {
        let player = [];
        let house = [];
        let sumP = 0;
        let sumH = 0;
        console.log(deck);

        // Deal to player
        for(i = 0; player.length < 2; i++) {
            player.push(deck[0]);
            deck.shift(0);
            console.log('Player:',player);
            console.log(deck);
        }
        

        // Deal to house
        function dealToHouse() {
            for(let i = 0; house.length < 2; i++) {
                house.push(deck[0]);
                deck.shift(0);
                console.log('House:',house);
                console.log(deck);
            }
        }
        dealToHouse();

        // Hit addEventListener button
        let hit = document.getElementById('hit');

        hit.addEventListener("click",() => {
            player.push(deck[0]);
            deck.shift(0);
            console.log('Player:',player);
            console.log(deck);

            sumPlayer();
        })

        // Call hit1 and stand1 class divs to remove buttons later
        let hit1 = document.querySelector('.hit1');
        let stand1 = document.querySelector('.stand1');

        let pTotal = document.getElementById('pTotal');
        let hTotal = document.getElementById('hTotal');

        // Stand eventListenerButton
        let stand = document.getElementById('stand');

        stand.addEventListener("click",() => {
            //debugger
            console.log(sumP);
            sumHouse(sumP);
        });


        // Sum of player array
        function sumPlayer() {

            sumP = 0;
            
            for(let i = 0; i < player.length; i++) {
                
                sumP += player[i];
                if(sumP == 21) {
                    hit.remove();
                    stand.remove();
                    console.log('You Win!');
                    pTotal.innerText = 'Blackjack! '+ sumP;
                    
                    return sumP;

                } else if(sumP > 21 && player.includes(11)) { // .includes checks if 11 is anywhere in array
                    // Change ace value
                    let idx = player.indexOf(11); // .indexOf checks the first 11 it comes across
                    if (idx !== -1) {
                        player[idx] = 1;
                        console.log(player);

                        sumP = 0;
                        for (let i = 0; i < player.length; i++) {
                            sumP += player[i];
                        }
                    }
                }

                if(sumP < 21) {
                    console.log('Player: '+ sumP);
                    pTotal.innerText = 'Player: '+ sumP;
                } else if(sumP > 21) {
                    pTotal.innerText = 'You Lose! '+ sumP;
                    hTotal.innerText = 'House Wins!';
                    hit.remove();
                    hit1.remove();
                    stand.remove();
                    stand1.remove();
                    console.log('You Lose!', sumP);
                    console.log(player);
                }
            }
        }
        sumPlayer();
        
        // Sum of house array
        function sumHouse(sumP) {
            hit.remove();
            hit1.remove();
            stand.remove();
            stand1.remove();

            for(let i = 0; i < house.length; i++) {
                
                sumH += house[i];
                console.log(house);
                if(sumH == 21) {
                    console.log('You Lose!');
                    hTotal.innerText = 'Blackjack! '+ sumH;
                    
                    return sumH;

                } else if(sumH > 21 && house.includes(11)) { // .includes checks if 11 is anywhere in array
                    // Change ace value
                    let idx = house.indexOf(11); // .indexOf checks the first 11 it comes across
                    if (idx !== -1) {
                        house[idx] = 1;
                        console.log(house);

                        sumH = 0;
                        for (let i = 0; i < house.length; i++) {
                            sumH += house[i];
                        }
                    }
                }


                if(sumH == sumP && i > 0) {
                    console.log('Tie!');
                    console.log('House: ', house, 'Player: ', player);
                    console.log('House Total: ', sumH, 'Player Total: ', sumP);
                    hTotal.innerText = 'Tie! '+ sumH;
                    pTotal.innerText = 'Tie! '+ sumP;
                    return;

                } else if(sumH < sumP && i > 0) {
                    house.push(deck[0]);
                    deck.shift(0);
                    console.log('House: ', house);
                    hTotal.innerText = 'House: '+ sumH;

                    console.log('House: ', sumH, 'Player: ', sumP);
                    console.log('House: ', house);
                
                } else if(sumH > 21) {
                    hTotal.innerText = 'Bust! '+ sumH;
                    pTotal.innerText = 'You Win!'+ sumP;

                    console.log('Bust!', sumH);
                    console.log('House: ', house);
                    return;

                } else if(sumH > sumP) {
                    hTotal.innerText = 'House wins! '+ sumH;
                    pTotal.innerText = 'You Lose!'+ sumP;

                    console.log('House wins!', sumH);
                    console.log(house);
                    return;

                }
            }
        }
    }
    dealPlayer(deck);
}
deckOfCards();