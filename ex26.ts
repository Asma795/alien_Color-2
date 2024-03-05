// choose a color for an alien as yoy did in ex25, and write in if else chain
let alienColors: string = "green";

// write in if else chain
// if the alien colors green
// print the statement that the player just earned 5 points for shooting the alien.
if (alienColors === "green") {
  console.log("player just earned 5 points.");
} else {
  console.log("player just earned 10 points.");
}

// if the alien colors is not green print the statement that the player just earned 10 points.
alienColors = "white";
if (alienColors === "green") {
  console.log("player just earned 5 points.");
} else {
  console.log("player just earned 10 points.");
}
