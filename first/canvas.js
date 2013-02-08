var canvas;
var ctx;
var j;
var x=0;
var y=105;
var WIDTH=$('#canvas').width();
var HEIGHT=$('#canvas').height();
var data = [80,95,85,78,92,95,79,80];

console.log(WIDTH + "\n" + HEIGHT);

var xAxesMargin = 20;
var yAxesMargin = 20;

function drawAxes() {
    
    ctx.strokeStyle = "black";

    /*y axis along left edge of canvas*/
    ctx.beginPath();
    ctx.moveTo(xAxesMargin,0);
    ctx.lineTo(xAxesMargin,HEIGHT - yAxesMargin);
    ctx.stroke();

    /*x axis along bottom edge*/
    ctx.moveTo(xAxesMargin,HEIGHT-yAxesMargin);
    ctx.lineTo(WIDTH - xAxesMargin,HEIGHT-yAxesMargin);
    ctx.stroke();
}

function translate(x,y) {

    return { 'x': x + xAxesMargin, 'y': HEIGHT - y - yAxesMargin };
}

function clear() {
    ctx.clearRect(0,0,WIDTH, HEIGHT);
}

function init(WIDTH,HEIGHT) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    draw();
}

function plotLine() {

    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(0,HEIGHT-(data[0]));
    j=1;
    for( var i in data) {
	ctx.lineTo(j*10, HEIGHT-(data[j]));
	ctx.stroke();
	j++;
    }
}

function plotBar() {
    
    ctx.strokeStyle = "green";
    for(var i = 0; i < data.length; i++ ) {
	drawRect(i * 20,0,10,data[i]);
    }
    
}

function drawRect(x,y,w,h) {
    ctx.fillStyle = "blue";
    var transformed = translate(x,y);
    ctx.fillRect(transformed['x'], transformed['y'], w, -1 * h);
}

function drawLabels() {
    ctx.fillText("foo",100,50);
}

function draw() {
    clear();
    drawAxes();
    plotBar();
    drawLabels();
}

init(WIDTH,HEIGHT);
