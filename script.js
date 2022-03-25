//SUBMIT FORM VARIABLES
const submitButton = document.getElementById("submit");
const playerName = document.getElementById("player");
const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");

let currentPlayer = "";
let leaderboardArray = [];
let time = 0;
let timerInterval;
let initialDistance;

const newPlayerScore = (name, time) => {
  return { name, time };
};

submitButton.addEventListener("click", (event) => {
  currentPlayer = playerName.value;
  event.preventDefault();
  form.reset();
  timerInterval = setInterval(timer, 1000);
});

const getTime = (time) => {
  const newPlayer = newPlayerScore(currentPlayer, time);
  // console.table(newPlayer);
  leaderboardArray.push(newPlayer);
  console.table(leaderboardArray);
  const sortedLeaderboard = leaderboardArray.sort((a, b) => {
    // a.time > b.time ? 1 : -1
    return a.time - b.time;
  });

  console.log("sorted array:");
  console.table(sortedLeaderboard);

  tableBody.innerHTML = "";

  sortedLeaderboard.forEach((player) => {
    // console.log(player.time);
    // console.log(player.name);

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

const timer = () => {
  time++;
  console.log(time);
};

//Ultrasonic sensor data
let socket = io("http://localhost:3000");

socket.on("data", (data) => {
  if (time == 0) {
    initialDistance = data;
    console.log("inital distance" + initialDistance);
  }
  if (data < initialDistance / 2) {
    console.log("stop time");
    clearInterval(timerInterval);
    getTime(time + "." + ms());
    time = 0;
  }
});

const ms = () => {
  return Math.floor(Math.random() * 60).toString();
};
