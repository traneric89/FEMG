//SUBMIT FORM VARIABLES
const submitButton = document.getElementById("submit");
const playerName = document.getElementById("player");
const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");

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

  tableBody.innerHTML = "";

  sortedLeaderboard.forEach((player) => {
    console.log(player.time);
    console.log(player.name);

    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    const tableDataName = document.createElement("td");
    tableDataName.innerHTML = player.name;
    tableRow.appendChild(tableDataName);

    const tableDataTime = document.createElement("td");
    tableDataTime.innerHTML = `${player.time}s`;
    tableRow.appendChild(tableDataTime);
  });
};
