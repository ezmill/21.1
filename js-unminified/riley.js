var canvas = document.getElementById("myCanvas");
var hammertime = new Hammer(canvas);
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight-44;
canvas.width = window.innerWidth;
if( canvas.height>canvas.width){
var w = canvas.width;
var h = canvas.height;
} else{
var h = canvas.width;
var w = canvas.height;
}
var offs = 100;
var colorBank = [];

canvas.onclick = function(){
	// generateRiley();
};

hammertime.on("drag",function(evt){
    evt.gesture.preventDefault();
    generateRiley(evt.gesture.clientX, evt.gesture.clientY);
});



function generateRiley(dragX,dragY){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.beginPath();
   for(var x = 0; x<canvas.width;x+=100){
        for(var y = 0; y<canvas.height;y+=40){

        ctx.moveTo(x,y);
        ctx.quadraticCurveTo(x,y,x+offs,y);
        if(intersect(dragX,dragY,x,y)){

                  // ctx.moveTo(dragX,dragY);
                          ctx.moveTo(x,y);

          ctx.quadraticCurveTo(dragX,dragY,x+dragX,y);
        }
        ctx.stroke();
        ctx.strokeStyle = "white"

     }
   }
}

function intersect(dragX,dragY,x,y){
  if(distance(dragX,dragY,x,y)<20){
    return true;
  } else{
    return false;
  }

}

  function distance(x1, y1, x2, y2){
    var dist = Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));
    return dist;
  }