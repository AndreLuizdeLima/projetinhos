function color(color) {
var colors = ['#58D68D', '#F1C40F', '#68C4EC', '#EC7063', "#F39C12", "#979A9A", "#40B5AD", "#A52A2A", "#000000"];
randcol = colors[Math.floor(Math.random() * colors.length)];
randcoltwo = colors[Math.floor(Math.random() * colors.length)];
gradcol = '-webkit-linear-gradient(left,' + randcol + ' ,' + randcoltwo + ')';
if (randcol != randcoltwo ){
document.getElementById('randomgrad').style.backgroundImage = gradcol;
}}

setInterval(color,300)