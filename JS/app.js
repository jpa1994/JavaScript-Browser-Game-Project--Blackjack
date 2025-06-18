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

    // Create image paths of the SVG cards
    let aceImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/ace_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/ace_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/ace_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/ace_of_spades2.svg"
    ];

    let twoImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/2_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/2_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/2_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/2_of_spades.svg"
    ];

    let threeImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/3_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/3_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/3_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/3_of_spades.svg"
    ];

    let fourImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/4_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/4_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/4_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/4_of_spades.svg"
    ];

    let fiveImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/5_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/5_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/5_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/5_of_spades.svg"
    ];

    let sixImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/6_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/6_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/6_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/6_of_spades.svg"
    ];

    let sevenImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/7_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/7_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/7_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/7_of_spades.svg"
    ];

    let eightImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/8_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/8_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/8_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/8_of_spades.svg"
    ];

    let nineImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/9_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/9_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/9_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/9_of_spades.svg"
    ];

    let tenImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/10_of_clubs.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/10_of_diamonds.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/10_of_hearts.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/10_of_spades.svg"
    ];

    let jackImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/jack_of_clubs2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/jack_of_diamonds2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/jack_of_hearts2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/jack_of_spades2.svg"
    ];

    let queenImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/queen_of_clubs2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/queen_of_diamonds2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/queen_of_hearts2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/queen_of_spades2.svg"
    ];

    let kingImagePaths = [
        "../images/SVG-cards-1.3/SVG-cards-1.3/king_of_clubs2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/king_of_diamonds2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/king_of_hearts2.svg",
        "../images/SVG-cards-1.3/SVG-cards-1.3/king_of_spades2.svg"
    ];

    // Shuffle each image array using Durstenfeld shuffle
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [
    aceImagePaths, twoImagePaths, threeImagePaths, fourImagePaths,
    fiveImagePaths, sixImagePaths, sevenImagePaths, eightImagePaths,
    nineImagePaths, tenImagePaths, jackImagePaths,
    queenImagePaths, kingImagePaths
    ].forEach(shuffleArray);

    // Add to deck
    function addCardsToDeck(imagePaths, value) {
        imagePaths.forEach(path => {
        deck.push({ value, image: path });
    });
    }

    addCardsToDeck(aceImagePaths, 11);
    addCardsToDeck(twoImagePaths, 2);
    addCardsToDeck(threeImagePaths, 3);
    addCardsToDeck(fourImagePaths, 4);
    addCardsToDeck(fiveImagePaths, 5);
    addCardsToDeck(sixImagePaths, 6);
    addCardsToDeck(sevenImagePaths, 7);
    addCardsToDeck(eightImagePaths, 8);
    addCardsToDeck(nineImagePaths, 9);
    addCardsToDeck(tenImagePaths, 10);
    addCardsToDeck(jackImagePaths, 10);
    addCardsToDeck(queenImagePaths, 10);
    addCardsToDeck(kingImagePaths, 10);

    shuffleArray(deck);

    // Call pTotals
    let pTotals = document.querySelector('.pTotals');

    // Call hit1 and stand1 class divs to remove buttons later
    let hit1 = document.querySelector('.hit1');
    let stand1 = document.querySelector('.stand1');

    // Initialize pTotal and hTotal
    let pTotal = document.getElementById('pTotal');
    let hTotal = document.getElementById('hTotal');


    // Call hCard to append more cards later
    let houseContainer = document.querySelector(".hCard");

    // Call house row and player row
    let playerRow = document.querySelector(".playerRow");
    let houseRow = document.querySelector(".houseRow");


    // Create separate player total elements for split and append later
    let ps1 = document.createElement("p");
    let ps2 = document.createElement("p");

    // Call split button to remove later
    let split = document.getElementById('split');

    // Add cards to deck
    function addCardsToDeck(paths, value) {
    paths.forEach(path => {
        deck.push({
            value: value,
            image: path
        });
    });
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

        function appendPlayerCard(card, playerRow) {
           // debugger
            // Create new col div
            let colDiv = document.createElement("div");
            colDiv.classList.add("col-3", "text-center", "player");

            // Create card container
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("pCard");

            // Create img element
            let img = document.createElement("img");
            img.src = card.image;
            img.alt = `Card ${card.value}`;
            img.classList.add("img-fluid", "pCard");

            // Append col div playerRow
            playerRow.appendChild(colDiv);

            // Append card div inside col div
            colDiv.appendChild(cardDiv);

            // Append image inside card div
            cardDiv.appendChild(img);

        }

        function appendSplitCard(card, splitRow) {
            // Create the column container
            let col = document.createElement("div");
            col.classList.add("col-2", "text-center", "player"); // each card gets its own col-2

            let img = document.createElement("img");
            img.src = card.image;
            img.alt = `Card ${card.value}`;
            img.classList.add("img-fluid", "pCard"); // fluid and styled

            col.appendChild(img);
            splitRow.appendChild(col);
        }

        function appendHouseCard(card, houseRow) {

            let colDiv = document.createElement("div");
            colDiv.classList.add("col-3", "text-center", "house");

            let cardDiv = document.createElement("div");
            cardDiv.classList.add("hCard");

            let img = document.createElement("img");
            img.src = card.image;
            img.alt = `Card ${card.value}`;
            img.classList.add("img-fluid", "hCard");

            houseRow.appendChild(colDiv);
            colDiv.appendChild(cardDiv);
            cardDiv.appendChild(img);
        }

        // Deal 2 cards to player
        for (let i = 0; i < 2; i++) {
            let card = deck.pop();
            player.push(card);

            appendPlayerCard(card, playerRow)
        }

        // Deal 2 cards to house
        for (let i = 0; i < 2; i++) {
            let card = deck.pop();
            house.push(card);

            appendHouseCard(card, houseRow);
        }
        
        // First player cards don't match, remove split button
        if (player[0].value !== player[1].value) {
            split.remove();
        }

        // Replace second card with back of card
        let houseCards = houseRow.querySelectorAll("col-3", "col-md-4", ".house img");
        if (houseCards.length > 1) {
            houseCards[1].src = "images/SVG-cards-1.3/svg_playing_cards/backs/cars.svg";
        }

        // Only show first house card
        hTotal.innerText = 'House: ' + house[0].value;
        hTotal.style.textDecoration = "underline";


        // Hit addEventListener button
        let hit = document.getElementById('hit');

        hit.addEventListener("click",() => {
            
            let card = deck.shift();

            if(splitClicked2 > 0) {
                if (split) split.remove();

                playerS2.push(card);
                let splitRow = document.querySelector(".splitRow");
                appendSplitCard(card, splitRow);
                splitSum2();

            } else if(splitClicked > 0) {
                if (split) split.remove();

                playerS1.push(card);
                appendPlayerCard(card, playerRow);

                splitSum1();

            } else {
                player.push(card);
                console.log('Player:',player);
                console.log(deck);

                appendPlayerCard(card, playerRow);

                if (player.length > 2 && split) {
                    split.remove();
                }

                sumPlayer();

                
            }  
        })

        // Split addEventListener Button
        split.addEventListener("click", () => {

            splitClicked++;
            console.log('Split Clicked: ', splitClicked);

            // Split player cards
            playerS1.push(player[0]);
            playerS2.push(player[1]);

            player.splice(0, 2);

            let splitRow = document.querySelector(".splitRow");

            appendPlayerCard(playerS1[0], playerRow); 
            appendSplitCard(playerS2[0], splitRow);

            // Convert ace to 11 after split
            if (playerS1.length == 1) {
        
                for (let i = 0; i < playerS1.length; i++) {
                    let card = playerS1[i];

                    if (card.value == 1) {
                        card.value = 11; // Change ace to 11
                    }}
            }

            // Convert ace to 11 after split
            if (playerS2.length == 1) {
        
                for (let i = 0; i < playerS2.length; i++) {
                let card = playerS2[i];

                if (card.value == 1) {
                    card.value = 11; // Change ace to 11
                }}
            }

            console.log('Player S1:', playerS1, 'Sum:', sumPs1);
            console.log('Player S2:', playerS2, 'Sum:', sumPs2);

            pTotals.appendChild(ps1);
            pTotals.appendChild(ps2);

            ps2.classList.add('ms-1');
            ps1.innerText = 'P1: ' + sumPs1;
            ps2.innerText = 'P2: ' + sumPs2;

            splitSum1();
        });

        // Stand eventListenerButton
        let stand = document.getElementById('stand');

        stand.addEventListener("click",() => {
            //debugger
            split.remove();

            // Show second house card
            let houseCards = houseRow.querySelectorAll(".col-3 .house img");
            if (houseCards.length > 1) {
                houseCards[1].src = house[1].image;
            }
            
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
            
            pTotal.style.backgroundColor = "none";
            pTotal.style.textDecoration = "none";
            pTotal.style.animation = "none";
            pTotal.innerText = "";

            ps1.style.textDecoration = "underline"
            ps1.style.backgroundColor = "yellow";
            ps1.style.animation = "blink 1s linear infinite";
            ps2.style.textDecoration = "underline";

            if(splitClicked > 0) {
            split.remove();
            }

            sumPs1 = 0;

            for(let i = 0; i < playerS1.length; i++) {
                
                sumPs1 += playerS1[i].value;

                ps1.innerText = 'P1: ' + sumPs1;


                // Change ace to 1
                if (sumPs1 > 21 && playerS1.some(card => card.value == 11)) {
                    let idx = playerS1.findIndex(card => card.value == 11);
                    if (idx !== -1) {
                        playerS1[idx].value = 1;

                         // Recalculate sum after Ace adjustment
                        sumPs1 = 0;
                        for (let i = 0; i < playerS1.length; i++) {
                            sumPs1 += playerS1[i].value;
                        }
                    }
                }

                if(sumPs1 == 21) {
                    console.log('P1: You Win!', sumPs1);
                    ps1.innerText = 'P1: Blackjack! ' + sumPs1;

                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "green";
                    ps1.style.color = "white";

                    // Run splitSum2
                    splitSum2();

                }
                
                if(sumPs1 > 21) {
                    console.log('P1: Bust!', sumPs1);
                    ps1.innerText = 'P1: Bust! ' + sumPs1;

                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "red";
                    ps1.style.color = "white";

                    // Run splitSum2
                    splitSum2();

                } else if(sumPs1 < 21) {
                    console.log('P1: ', sumPs1);
                    ps1.innerText = 'P1: ' + sumPs1;
                }
            }
        }

        function splitSum2() {

            ps1.style.animation = "none";

            ps2.style.backgroundColor = "yellow";
            ps2.style.animation = "blink 1s linear infinite";

            splitClicked2 = 0;
            splitClicked2++
            sumPs2 = 0;

            if(splitClicked2 > 0) {
            split.remove();
            }

            for(let i = 0; i < playerS2.length; i++) {

                sumPs2 += playerS2[i].value;
                ps2.innerText = 'P2: ' + sumPs2;

                if(sumPs2 == 21) {
                    console.log('P2: Blackjack! ',sumPs2);
                    ps2.innerText = 'P2: Blackjack! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "green";
                    ps2.style.color = "white";

                    sumHouseSplit(sumPs1, sumPs2);

                }
                
                // Change ace to 1
                if (sumPs2 > 21 && playerS2.some(card => card.value == 11)) {
                    let idx = playerS2.findIndex(card => card.value == 11);
                    if (idx !== -1) {
                        playerS2[idx].value = 1;

                         // Re-add sumPs2
                        sumPs2 = 0;
                        for (let i = 0; i < playerS2.length; i++) {
                            sumPs2 += playerS2[i].value;
                        }
                    }
                }
                
                if(sumPs2 > 21) {
                    ps2.innerText = 'P2: Bust! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "red";
                    ps2.style.color = "white";
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
                
                sumP += player[i].value;
                if(sumP == 21) {
                    hit.remove();
                    stand.remove();
                    console.log('You Win!');

                    pTotal.innerText = 'Blackjack! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "green";
                    pTotal.style.color = "white";
                    
                    return sumP;

                }
                
                // Change ace 11 to 1
                if (sumP > 21 && player.some(card => card.value == 11)) {
                    let idx = player.findIndex(card => card.value == 11);

                    if (idx !== -1) {
                        player[idx].value = 1; 
                        console.log(player);

                        sumP = 0;
                        for (let i = 0; i < player.length; i++) {
                        sumP += player[i].value;
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
                    pTotal.style.color = "white";

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

            let sumH = 0;

            // Colors for sumPs1 and sumPs2 for over 21 or blackjack
            if(sumPs1 > 21) {
                ps1.style.animation = "none";
                ps1.style.backgroundColor = "red";
                ps1.style.color = "white";
            } else if (sumPs1 == 21) {
                ps1.style.animation = "none";
                ps1.style.backgroundColor = "green";
                ps1.style.color = "white";
            }

            if(sumPs2 > 21) {
                ps2.style.animation = "none";
                ps2.style.backgroundColor = "red";
                ps2.style.color = "white";
            } else if (sumPs2 == 21) {
                ps2.style.animation = "none";
                ps2.style.backgroundColor = "green";
                ps2.style.color = "white";
            }

            // sumHouseSplit ends if both hands are over 21 or both blackjack
            if ((sumPs1 > 21 && sumPs2 > 21) || (sumPs1 === 21 && sumPs2 === 21)) {
                console.log('P1:', sumPs1, 'P2:', sumPs2);
                return;
            }

            // Show second house card
            let houseCards = houseRow.querySelectorAll("col-3 .house img");
            if (houseCards.length > 1) {
                houseCards[1].src = house[1].image;
            }

            for(let i = 0; i < house.length; i++) {
                
                sumH += house[i].value;
                console.log(house);

                if (sumH > 21 && house.some(card => card.value == 11)) {
                    let idx = house.findIndex(card => card.value == 11);
                        if (idx !== -1) {
                            house[idx].value = 1;
                            sumH = 0;
                        for (let i = 0; i < house.length; i++) {
                            sumH += house[i].value;
                        }
                    }
                }

                    //* House hits if sumH < 17 and lower than either sumPs1 or sumPs2
                if (sumH < 17 && ((sumPs1 < 21 && sumPs1 > sumH) || (sumPs2 < 21 && sumPs2 > sumH))) {
                            house.push(deck.shift());
                            let newCard = house[house.length - 1];
                            appendHouseCard(newCard, houseRow);
    
                }

                // Compare against sumPs1
                
                    //* House blackjack
                if (sumH == 21 && sumPs1 < 21 ) {
                    hTotal.innerText = 'House: Blackjack! '+ sumH;

                    ps1.innerText = 'P1: Lose! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "red";
                    ps1.style.color = "white";


                    //* House busts
                } else if (sumH > 21 && sumPs1 < 21) {
                    hTotal.innerText = 'House: Bust! '+ sumH;

                    ps1.innerText = 'P1: Win! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "green";
                    ps1.style.color = "white";

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
                    ps1.style.color = "white";

                    //* House < sumPs1
                } else if (sumH >= 17 && sumH < 21 && sumH < sumPs1) {
                    console.log('Win! ', sumPs1);
                    hTotal.innerText = 'House: '+ sumH;

                    ps1.innerText = 'P1: Win! ' + sumPs1;
                    ps1.style.animation = "none";
                    ps1.style.backgroundColor = "green";
                    ps1.style.color = "white";
                }

                // Compare against sumPs2

                    //* House blackjack
                if(sumH == 21 && sumPs2 < 21) {
                    console.log('Lose!');
                    hTotal.innerText = 'House: Blackjack! '+ sumH;

                    ps2.innerText = 'P2: Lose! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "red";
                    ps2.style.color = "white";

                    return;
                   
                    //* House busts
                } else if (sumH > 21 && sumPs2 < 21) {
                    hTotal.innerText = 'Bust! '+ sumH;

                    ps2.innerText = 'P2: Win! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "green";
                    ps2.style.color = "white";

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
                    ps2.style.color = "white";

                    //* House < sumPs2
                } else if (sumH >= 17 && sumH < 21 && sumH < sumPs2) {
                    console.log('Win! ', sumPs2);
                    hTotal.innerText = 'House: '+ sumH;

                    ps2.innerText = 'P2: Win! ' + sumPs2;
                    ps2.style.animation = "none";
                    ps2.style.backgroundColor = "green";
                    ps2.style.color = "white";
                }
            }
        }

        // Sum of house array, compare against player
        function sumHouse(sumP) {
            hit.remove();
            hit1.remove();
            stand.remove();
            stand1.remove();

            sumH = 0;

            for(let i = 0; i < house.length; i++) {
                
                sumH += house[i].value;
                console.log(house);

                    

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
                }

                    //* House hits if < 17 and < sumP
                if(sumH < sumP && i > 0 && sumH < 17) {

                    let newCard = deck.shift();
                    house.push(newCard); 
                          
                    sumH += newCard.value;
                    console.log('House: ', house);
                    hTotal.innerText = 'House: '+ sumH;

                    console.log('House: ', sumH, 'Player: ', sumP);
                    console.log('House: ', house);

                       

                    appendHouseCard(newCard, houseRow);

                }

                //* House blackjack
                if(sumH == 21 && sumP < 21) {
                    console.log('You Lose!');
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "red";
                    pTotal.style.color = "white";

                    hTotal.innerText = 'Blackjack! '+ sumH;
                    
                    return sumH;

                }

                // Change ace 11 to 1
                if (sumH > 21 && house.some(card => card.value == 11)) {
                    let idx = house.findIndex(card => card.value == 11);

                    if (idx !== -1) {
                        house[idx].value = 1; 
                        console.log(house);

                        sumH = 0;
                        for (let i = 0; i < house.length; i++) {
                        sumH += house[i].value;
                        }
                    }
                }
                
                    //* Bust
                if(sumH > 21) {
                    hTotal.innerText = 'Bust! '+ sumH;

                    pTotal.innerText = 'You Win! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "green";
                    pTotal.style.color = "white";

                    console.log('Bust!', sumH);
                    console.log('House: ', house);
                    return;

                    //* House > sumP
                } else if(sumH > sumP && sumH >= 17) {
                    hTotal.innerText = 'House wins! '+ sumH;

                    pTotal.innerText = 'You Lose! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "red";
                    pTotal.style.color = "white";

                    console.log('House wins! ', sumH);
                    console.log(house);
                    return;

                    //* House < sumP
                } else if(sumH < sumP && sumH >= 17) {
                    hTotal.innerText = 'House Loses! '+ sumH;

                    pTotal.innerText = 'You Win! '+ sumP;
                    pTotal.style.animation = "none";
                    pTotal.style.backgroundColor = "green";
                    pTotal.style.color = "white";

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