//SUBMIT FORM VARIABLES
const submitButton = document.getElementById("submit");
const playerName = document.getElementById("player");
const form = document.getElementById("form");

let currentPlayer = "";
let leaderboardArray = [];

const newPlayerScore = (name, time) => {
  return { name, time };
};

submitButton.addEventListener("click", (event) => {
  currentPlayer = playerName.value;
  event.preventDefault();
  form.reset();
});

const getTime = (time) => {
  const newPlayer = newPlayerScore(currentPlayer, time);
  console.table(newPlayer);
  leaderboardArray.push(newPlayer);
  console.table(leaderboardArray);
  const sortedLeaderboard = leaderboardArray.sort((a, b) =>
    a.time > b.time ? 1 : -1
  );
  console.log("sorted array:");
  console.table(sortedLeaderboard);
};
