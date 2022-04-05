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
  c.lineWidth = "2";
  c.strokeStyle = "black";
  const rectanglePositionX = midX / 25;
  const rectanglePositionY = midY * 1.98;
  const rectangleWidth = midX / 1.5;
  const rectangleHeight = midY / -1.5;
  const rectanglePositionXInverted = midX + (midX - rectanglePositionX - rectangleWidth);
  const treePositionX = midX - midX/20;
  const treePositionY = midY * 2;
  const treeX = 2 * (midX - treePositionX);
  const treeY = midY / -2.5;
  c.beginPath(); // Ritar den vänstra rektanglen
  c.rect(rectanglePositionX, rectanglePositionY, rectangleWidth, rectangleHeight);
  c.stroke();
  c.beginPath(); // Ritar den högra rektangeln
  c.rect(rectanglePositionXInverted, rectanglePositionY, rectangleWidth, rectangleHeight);
  c.stroke();
  c.beginPath(); // Ritar vänstra taket
  c.moveTo(rectanglePositionX, rectanglePositionY + rectangleHeight);
  c.lineTo(rectanglePositionX + (rectangleWidth / 2), midY / 2);
  c.lineTo(rectanglePositionX + rectangleWidth, rectanglePositionY + rectangleHeight);
  c.stroke();
  c.beginPath(); // Ritar högra taket
  c.moveTo(rectanglePositionXInverted, rectanglePositionY + rectangleHeight);
  c.lineTo(rectanglePositionXInverted + (rectangleWidth / 2), midY / 2);
  c.lineTo(rectanglePositionXInverted + rectangleWidth, rectanglePositionY + rectangleHeight);
  c.stroke();
  c.beginPath() // Ritar stammen på trädet
  c.moveTo(treePositionX, treePositionY);
  c.lineTo(treePositionX, treePositionY + treeY);
  c.moveTo(treePositionX + treeX, treePositionY)
  c.lineTo(treePositionX + treeX, treePositionY + treeY)
  c.fillStyle = "#a52a2a"; // Den exakta färgen på stammen
  c.fillRect(treePositionX, treePositionY, treeX, treeY);
  c.stroke();
  c.beginPath(); // Ritar trädkronan på trädet
  c.fillStyle = "#008000";
  c.ellipse(midX, treePositionY + treeY * 1.8, midX / 10, midX / 4, Math.PI, -0.9, Math.PI + 0.9);
  c.fill();
  c.stroke();
}
drawPicture();
