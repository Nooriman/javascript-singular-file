// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to create a deck of cards
function createDeck() {
  const deck = [];
  for (let i = 1; i <= 13; i++) {
    deck.push(i); // Assuming cards are represented by numbers 1 to 13
  }
  return deck;
}

// Function to play the card game
function playCardGame() {
  const players = 4;
  const deck = createDeck();
  shuffleArray(deck);

  const playerScores = Array.from({ length: players }, () => 0);

  while (deck.length > 0) {
    for (let player = 0; player < players; player++) {
      const drawnCard = deck.pop();
      console.log(`Player ${player + 1} draws ${drawnCard}`);

      if (drawnCard > playerScores[player]) {
        playerScores[player]++;
        console.log(`Player ${player + 1} scores a point!`);
      }
    }
  }

  console.log("\nGame Over! Scores:");

  // Create an array of player indices for sorting
  const playerIndices = Array.from({ length: players }, (_, i) => i);

  // Sort players based on scores in descending order
  playerIndices.sort((a, b) => playerScores[b] - playerScores[a]);

  // Display the final scoreboard
  playerIndices.forEach((playerIndex, rank) => {
    console.log(
      `Rank ${rank + 1}: Player ${playerIndex + 1} - ${
        playerScores[playerIndex]
      } points`
    );
  });
}

// Play the card game
playCardGame();
