var y=document.getElementById("fuck");
//exists
if(y==null)
{
	var x=document.createElement('canvas');
	x.id = "fuck";
	x.setAttribute("style","position:fixed;left:0px;top:0px;width:100%;height:100%;background-color:white;z-index:10;opacity:0.8");
	document.body.appendChild(x);

var ctx;
var startX;
var startY;
var canvasOffset;
var offsetX;
var offsetY;

var isDrawing = false;

ctx = x.getContext("2d");

canvasOffset = $("#fuck").offset();
offsetX = canvasOffset.left;
offsetY = canvasOffset.top;
console.log("X = "+offsetX+"\tY = "+offsetY);

$("#fuck").on('mousedown', function (e) {
    handleMouseDown(e);
}).on('mouseup', function(e) {
    handleMouseUp(e);
}).on('mousemove', function(e) {
    handleMouseMove(e);
});

function handleMouseDown(e) {
	x.style.cursor = "crosshair";		
	isDrawing = true;
	console.log("Down: X = "+e.clientX+"\tY = "+e.clientY);
	startX = parseInt(e.clientX - offsetX);
	startY = parseInt(e.clientY - offsetY);
}

function handleMouseUp(e) {
	isDrawing = false;
	console.log("Up: X = "+e.clientX+"\tY = "+e.clientY);
	x.style.cursor = "default";	
}

function handleMouseMove(e) {
	if (isDrawing) {
		var mouseX = parseInt(e.clientX - offsetX);
		var mouseY = parseInt(e.clientY - offsetY);				
		console.log("mouseX = "+mouseX+"\tmouseY = "+mouseY);
		ctx.clearRect(0, 0, x.width, x.height);
		ctx.beginPath();
		ctx.rect(startX, startY, mouseX - startX, mouseY - startY);
		ctx.stroke();
		
	}		
	}

}
else{alert("cant operate again")};