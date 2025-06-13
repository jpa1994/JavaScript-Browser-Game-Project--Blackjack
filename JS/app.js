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

// Create deck of cards as an array
function deckOfCards() {
    let splitClicked = 0;
    let splitClicked2 = 0;
    let deck = [];
    let player = [];
    let playerS1 = [];
    let playerS2 = [];
    let house = [];
    let sumP = 0;
    let sumH = 0;
    let sumPs1 = 0;
    let sumPs2 = 0;

    // Call pTotals
    let pTotals = document.querySelector('.pTotals');

    // Call hit1 and stand1 class divs to remove buttons later
    let hit1 = document.querySelector('.hit1');
    let stand1 = document.querySelector('.stand1');

    // Initialize pTotal and hTotal
    let pTotal = document.getElementById('pTotal');
    let hTotal = document.getElementById('hTotal');

    // Create separate player total elements for split and append later
    let ps1 = document.createElement("p");
    let ps2 = document.createElement("p");

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
            hTotal.innerText = 'House: '+ house[0];
            hTotal.style.textDecoration = "underline";
        }
        dealToHouse();

        // Hit addEventListener button
        let hit = document.getElementById('hit');

        hit.addEventListener("click",() => {

            split.remove();
            
            if(splitClicked2 > 0) {

                playerS2.push(deck[0]);
                deck.shift(0);
                console.log(deck);
                console.log('Player S1: ', playerS1, 'Player S2: ', playerS2);
                console.log('spc2: ',splitClicked2);

                splitSum2();

            } else if(splitClicked > 0) {
                
                playerS1.push(deck[0]);
                deck.shift(0);
                console.log(deck);
                console.log('Player S1: ', playerS1, 'Player S2: ', playerS2);

                splitSum1();

            } else {
                player.push(deck[0]);
                deck.shift(0);
                console.log('Player:',player);
                console.log(deck);


                sumPlayer();
            }  
        })

        // Split addEventListener button
        let split = document.getElementById('split');

        if(player[0] != player[1]) {
            split.remove();
        }

        split.addEventListener("click",() => {
            
            splitClicked++
            console.log('Split Clicked: ', splitClicked);

            // Split player cards
            playerS1.push(player[0]);
            player.shift(0);

            playerS2.push(player[0]);
            player.shift(0);

            if(sumPs1 == 0 && playerS1.includes(1)) { // .includes checks if 1 is anywhere in array
                // Change ace value
                let idx = playerS1.indexOf(1); // .indexOf checks the first 1 it comes across
                if (idx !== -1) {
                    playerS1[idx] = 11;
                    console.log(playerS1);

                    sumPs1 = 0;
                    for (let i = 0; i < playerS1.length; i++) {
                        sumPs1 += playerS1[i];
                    }
                }
            }

            if(sumPs2 == 0 && playerS2.includes(1)) { // .includes checks if 1 is anywhere in array
                // Change ace value
                let idx = playerS2.indexOf(1); // .indexOf checks the first 1 it comes across
                if (idx !== -1) {
                    playerS2[idx] = 11;
                    console.log(playerS2);

                    sumPs2 = 0;
                    for (let i = 0; i < playerS2.length; i++) {
                        sumPs2 += playerS2[i];
                    }
                }
            }

            console.log('Player S1: ', playerS1, 'Player S2: ', playerS2);

            pTotal.remove();


            pTotals.appendChild(ps1);
            pTotals.appendChild(ps2);
            
            ps2.classList.add = 'ms-1';;
            // pTotals.classList.remove = 'col-6';
            ps1.innerText = 'P1: '+ playerS1[0];
            ps2.innerText = 'P2: '+ playerS2[0];
            splitSum1();
        })

        // Stand eventListenerButton
        let stand = document.getElementById('stand');

        stand.addEventListener("click",() => {
            //debugger
            split.remove();
            
            if(splitClicked2 > 0) {
                console.log("P1: ",sumPs1,"P2: ", sumPs2);
                sumHouseSplit(sumPs1, sumPs2);

            } else if(splitClicked > 0) {
                splitSum2();

            } else {
                console.log(sumP);
                sumHouse(sumP);
            }
        });


        // Sum of sumPs1 and sumPs2 arrays when split
        function splitSum1() {
            
            ps1.style.textDecoration = "underline"
            ps1.style.backgroundColor = "yellow";
            ps1.style.animation = "blink 1s linear infinite";

            ps2.style.textDecoration = "underline";

            if(splitClicked > 0) {
            split.remove();
            }

            sumPs1 = 0;

            for(let i = 0; i < playerS1.length; i++) {
                
                sumPs1 += playerS1[i];

                ps1.innerText = 'P1: ' + sumPs1;

                if(sumPs1 == 21) {
                    console.log('P1: You Win!', sumPs1);
                    ps1.innerText = 'P1: Blackjack! ' + sumPs1;

                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "green";

                    // Run splitSum2
                    splitSum2();

                } else if(sumPs1 > 21 && playerS1.includes(11)) { // .includes checks if 11 is anywhere in array
                    // Change ace value
                    let idx = playerS1.indexOf(11); // .indexOf checks the first 11 it comes across
                    if (idx !== -1) {
                        playerS1[idx] = 1;
                        console.log(playerS1);

                        sumPs1 = 0;
                        for (let i = 0; i < playerS1.length; i++) {
                            sumPs1 += playerS1[i];
                        }
                    }
                }
                
                if(sumPs1 > 21) {
                    console.log('P1: Bust!', sumPs1);
                    ps1.innerText = 'P1: Bust! ' + sumPs1;

                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "red";

                    // Run splitSum2
                    splitSum2();

                } else if(sumPs1 < 21) {
                    console.log('P1: ', sumPs1);
                    ps1.innerText = 'P1: ' + sumPs1;
                }
            }
        }

        function splitSum2() {

            ps2.style.backgroundColor = "yellow";
            ps2.style.animation = "blink 1s linear infinite";

            splitClicked2 = 0;
            splitClicked2++
            sumPs2 = 0;

            if(splitClicked2 > 0) {
            split.remove();
            }

            for(let i = 0; i < playerS2.length; i++) {

                sumPs2 += playerS2[i];
                ps2.innerText = 'P2: ' + sumPs2;

                if(sumPs2 == 21) {
                    console.log('P2: Blackjack! ',sumPs2);
                    ps2.innerText = 'P2: Blackjack! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "green";

                    sumHouseSplit(sumPs1, sumPs2);

                } else if(sumPs2 > 21 && playerS2.includes(11)) { // .includes checks if 11 is anywhere in array
                    // Change ace value
                    let idx = playerS2.indexOf(11); // .indexOf checks the first 11 it comes across
                    if (idx !== -1) {
                        playerS2[idx] = 1;
                        console.log(playerS2);

                        sumPs2 = 0;
                        for (let i = 0; i < playerS2.length; i++) {
                            sumPs2 += playerS2[i];
                        }
                    }
                }
                
                if(sumPs2 > 21) {
                    ps2.innerText = 'P2: Bust! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "red";
                    hit.remove();
                    hit1.remove();
                    stand.remove();
                    stand1.remove();

                    sumHouseSplit(sumPs1, sumPs2);

                } else if(sumPs2 < 21) {
                    console.log('P2: ', sumPs2);
                    ps2.innerText = 'P2: ' + sumPs2;
                }
            }
        }


        // Sum of player array
        function sumPlayer() {

            pTotal.style.backgroundColor = "yellow";
            pTotal.style.textDecoration = "underline";
            //* Blinking background
            pTotal.style.animation = "blink 1s linear infinite";

            sumP = 0;
            
            for(let i = 0; i < player.length; i++) {
                
                sumP += player[i];
                if(sumP == 21) {
                    hit.remove();
                    stand.remove();
                    console.log('You Win!');

                    pTotal.innerText = 'Blackjack! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "green";
                    
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
                    pTotal.innerText = 'Bust! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "red";

                    hTotal.innerText = 'House Wins!';

                    hit.remove();
                    hit1.remove();
                    stand.remove();
                    stand1.remove();
                    console.log('You Lose!', sumP);
                    console.log(player);

                    return;
                }
            }
        }
        sumPlayer();
        

        // Sum of house array, compare player splits
        function sumHouseSplit(sumPs1, sumPs2) {

            hit.remove();
            hit1.remove();
            stand.remove();
            stand1.remove();

            // Colors for sumPs1 and sumPs2 for over 21 or blackjack
            if(sumPs1 > 21) {
                ps1.style.animation = "none";
                ps1.style.backgroundColor = "red";
            } else if (sumPs1 == 21) {
                ps1.style.animation = "none";
                ps1.style.backgroundColor = "green";
            }

            if(sumPs2 > 21) {
                ps2.style.animation = "none";
                ps2.style.backgroundColor = "red";
            } else if (sumPs1 == 21) {
                ps2.style.animation = "none";
                ps2.style.backgroundColor = "green";
            }

            // sumHouseSplit ends if both hands are over 21 or both blackjack
            if(sumPs1 > 21 && sumPs2 > 21) {
                console.log('P1: ',sumPs1, 'P2: ',sumPs2);
                return;

            } else if (sumPs1 == 21 && sumPs2 == 21) {
                console.log('P1: ',sumPs1, 'P2: ',sumPs2);
                return;
            }

            for(let i = 0; i < house.length; i++) {
                
                sumH += house[i];
                console.log(house);

                if(sumH > 21 && house.includes(11)) { // .includes checks if 11 is anywhere in array
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

                // Compare against sumPs1
                
                    //* House blackjack
                if (sumH == 21 && sumPs1 < 21 ) {
                    hTotal.innerText = 'House: Blackjack! '+ sumH;

                    ps1.innerText = 'P1: Lose! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "red";


                    //* House hits if sumH < 17 and lower than either sumPs1 or sumPs2
                } else if (sumH < sumPs1 && i > 0 && sumH < 17 || sumH < sumPs2 && i > 0 && sumH < 17) {
                    house.push(deck[0]);
                    deck.shift(0);
                    console.log('House: ', house);
                    hTotal.innerText = 'House: '+ sumH;

                    console.log('House: ', sumH, 'Ps1: ', sumPs1, 'Ps2: ', sumPs2);
                    console.log('House: ', house);

                    //* House busts
                } else if (sumH > 21 && sumPs1 < 21) {
                    hTotal.innerText = 'House: Bust! '+ sumH;

                    ps1.innerText = 'P1: Win! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "green";

                    //* Tie
                } else if (sumH >= 17 && sumH < 21 && sumH == sumPs1) {
                    console.log('House: Tie! ', sumPs1);

                    ps1.innerText = 'P1: Tie! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "lightblue";

                    //* House > sumPs1
                } else if (sumH >= 17 && sumH < 21 && sumH > sumPs1) {
                    console.log('Lose! ', sumPs1);
                    hTotal.innerText = 'House: '+ sumH;

                    ps1.innerText = 'P1: Lose! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "red";

                    //* House < sumPs1
                } else if (sumH >= 17 && sumH < 21 && sumH < sumPs1) {
                    console.log('Win! ', sumPs1);
                    hTotal.innerText = 'House: '+ sumH;

                    ps1.innerText = 'P1: Win! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "green";
                }

                // Compare against sumPs2

                    //* House blackjack
                if(sumH == 21 && sumPs2 < 21) {
                    console.log('Lose!');
                    hTotal.innerText = 'House: Blackjack! '+ sumH;

                    ps2.innerText = 'P2: Lose! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "red";

                    return;
                   
                    //* House busts
                } else if (sumH > 21 && sumPs2 < 21) {
                    hTotal.innerText = 'Bust! '+ sumH;

                    ps2.innerText = 'P2: Win! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "green";

                    return;

                    //* Tie
                } else if (sumH >= 17 && sumH < 21 && sumH == sumPs2) {
                    console.log('Tie! ', sumPs2);

                    ps2.innerText = 'P2: Tie! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "lightblue";

                    //* House > sumPs2
                } else if (sumH >= 17 && sumH < 21 && sumH > sumPs2) {
                    console.log('Lose! ', sumPs2);
                    hTotal.innerText = 'House: '+ sumH;

                    ps2.innerText = 'P2: Lose! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "red";

                    //* House < sumPs2
                } else if (sumH >= 17 && sumH < 21 && sumH < sumPs2) {
                    console.log('Win! ', sumPs2);
                    hTotal.innerText = 'House: '+ sumH;

                    ps2.innerText = 'P2: Win! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "green";
                }
            }
        }

        // Sum of house array, compare against player
        function sumHouse(sumP) {
            hit.remove();
            hit1.remove();
            stand.remove();
            stand1.remove();

            for(let i = 0; i < house.length; i++) {
                
                sumH += house[i];
                console.log(house);

                    //* House blackjack
                if(sumH == 21 && sumP < 21) {
                    console.log('You Lose!');
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "red";

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

                    //* Tie
                if(sumH == sumP && i > 0 && sumH >= 17 && sumH < 21 && sumP < 21) {
                    console.log('Tie!');
                    console.log('House: ', house, 'Player: ', player);
                    console.log('House Total: ', sumH, 'Player Total: ', sumP);

                    hTotal.innerText = 'Tie! '+ sumH;
                    hTotal.style.backgroundColor = "lightblue";

                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "lightblue";
                    pTotal.innerText = 'Tie! '+ sumP;

                    return;

                    //* House hits if < 17 and < sumP
                } else if(sumH < sumP && i > 0 && sumH < 17) {
                    house.push(deck[0]);
                    deck.shift(0);
                    console.log('House: ', house);
                    hTotal.innerText = 'House: '+ sumH;

                    console.log('House: ', sumH, 'Player: ', sumP);
                    console.log('House: ', house);
                
                    //* Bust
                } else if(sumH > 21) {
                    hTotal.innerText = 'Bust! '+ sumH;

                    pTotal.innerText = 'You Win! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "green";

                    console.log('Bust!', sumH);
                    console.log('House: ', house);
                    return;

                    //* House > sumP
                } else if(sumH > sumP && sumH >= 17) {
                    hTotal.innerText = 'House wins! '+ sumH;

                    pTotal.innerText = 'You Lose! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "red";

                    console.log('House wins! ', sumH);
                    console.log(house);
                    return;

                    //* House < sumP
                } else if(sumH < sumP && sumH >= 17) {
                    hTotal.innerText = 'House Loses! '+ sumH;

                    pTotal.innerText = 'You Win! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "green";

                    console.log('House wins! ', sumH);
                    console.log(house);
                    return;
                }
            }
        }
    }
    dealPlayer(deck);
}
deckOfCards();