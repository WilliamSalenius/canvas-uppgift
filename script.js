// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  const rectanglePositionX = midX / 25;
  const rectanglePositionY = midY * 1.98;
  const rectangleX = midX / 1.5;
  const rectangleY = midY / -1.5
  const rectanglePositionXInverted = midX + (midX - rectanglePositionX - rectangleX);
  c.beginPath();
  c.lineWidth = "2";
  c.strokeStyle = "black";
  c.rect(rectanglePositionX, rectanglePositionY, rectangleX, rectangleY);
  c.stroke();
  c.beginPath();
  c.lineWidth = "2";
  c.strokeStyle = "black";
  c.rect(rectanglePositionXInverted, rectanglePositionY, rectangleX, rectangleY);
  c.stroke();
  c.beginPath();
  c.moveTo(rectanglePositionX, rectanglePositionY + rectangleY);
  c.lineTo(rectanglePositionX + (rectangleX / 2), midY / 2);
  c.lineTo(rectanglePositionX + rectangleX, rectanglePositionY + rectangleY);
  c.stroke();
}
drawPicture();
