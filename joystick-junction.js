import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyButK7uMm3_aQ9Fg2QB3Z4FHJIcsokQna4",
  authDomain: "joystick-junction.firebaseapp.com",
  projectId: "joystick-junction",
  storageBucket: "joystick-junction.appspot.com",
  messagingSenderId: "979900202205",
  appId: "1:979900202205:web:3ee13f2d90aade6c4eaf34",
  measurementId: "G-DQ4JM5ZECY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function updateStatistics(outcome) {
  gamesPlayed++;
  if (outcome === "win") {
    wins++;
  } else if (outcome === "loss") {
    losses++;
  } else if (outcome === "tie") {
    ties++;
  }

  document.getElementById("games-played").textContent = gamesPlayed.toString();
  document.getElementById("wins").textContent = wins.toString();
  document.getElementById("losses").textContent = losses.toString();
  document.getElementById("ties").textContent = ties.toString();
}
const playNowButton = document.getElementById('playNowButton');
playNowButton.addEventListener('click', function() {
 
  const selectedGame = prompt('Which game would you like to play? (e.g. Tic Tac Toe)');

  
  if (selectedGame && selectedGame.toLowerCase() === 'tic tac toe') {
      // If the user chooses Tic Tac Toe, show the rules
      alert('Rules for Tic Tac Toe:\n\nTwo players take turns marking a square. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.');
  } else {
      // Handle other game choices (if any)
      alert('Sorry, that game is not available at the moment.');
  }
});