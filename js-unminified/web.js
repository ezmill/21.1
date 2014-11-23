var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();

var opacity = 0.4;
var color = 'rgba(127,127,127, ' + opacity + ')';
// var canvas = document.getElementById('canvas'),
var canvas = createHiDPICanvas(window.innerWidth, window.innerHeight),
    ctx = canvas.getContext('2d'),
    positionsX = [],
    positionsY = [],
    val = 30;
canvas.style.position = "relative";
canvas.style.zindex ="1";
var div = document.getElementById("main");
var save = document.getElementById("save");
var clear = document.getElementById("clear");
div.appendChild(canvas);
// ctx.translate(0.5, 0.5);
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fill();
  ctx.fillStyle = "black";

var hammertime = new Hammer(canvas);
var hammertime1 = new Hammer(div);
save.onclick = function(){

  window.open(canvas.toDataURL('image/png'));
}
clear.onclick = function(){
  positionsX = [];
  positionsY = [];
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fill();
  ctx.fillStyle = "black";
}
hammertime1.on("dragstart", function(ev){
  ev.gesture.preventDefault();
  //alert("Cool!");
})
hammertime1.on("drag", function(ev){
  ev.gesture.preventDefault();
  //alert("Cool!");
})

// ctx.canvas.width  = window.innerWidth;
// ctx.canvas.height = window.innerHeight;
// function resize_canvas(){
//     if (canvas.width  < window.innerWidth || canvas.width  > window.innerWidth){
//         canvas.width  = window.innerWidth;
//     }
//     if (canvas.height < window.innerHeight || canvas.height > window.innerHeight ){
//         canvas.height = window.innerHeight;
//     }
// }
// $(window).resize(resize_canvas);
// (function () {
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
      return {
        x: evt.gesture.touches[0].clientX - rect.left,
        y: evt.gesture.touches[0].clientY - rect.top
    };
  }


  hammertime.on("dragstart",function(evt){
    evt.gesture.preventDefault;
  })
  hammertime.on('drag',function(evt){
    evt.gesture.preventDefault();
    var mousePos = getMousePos(canvas,evt);
    var x = mousePos.x;
    var y = mousePos.y;
    drawLines(x,y);
  }, false);

  hammertime.on("dragend",function(evt){
    evt.gesture.preventDefault;
  })
  function drawLines(x,y){
    positionsX.push(x);
    positionsY.push(y);
    for (var i = 0; i < positionsX.length; i++) {
      var dist = distance(positionsX[i], positionsY[i], x,y);
      var r = Math.random()*100;
      if(dist < val && r < val){
      //1-dist/val;
        ctx.beginPath();
        ctx.moveTo(positionsX[i],positionsY[i]);
        ctx.lineTo(x,y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.stroke();
      }
    }
  }

  function distance(x1, y1, x2, y2){
    var dist = Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));
    return dist;
  }
// }

  
var colors = ['rgba(204,204,204, ','rgba(255,0,0, ','rgba(0,255,0, ','rgba(0,0,255, '];
// $('.white').addClass('white-clicked')
// $('#colors div').each(function(index){
//    var col = colors[index];
//     $(this).click(function(){
//       $('#colors div').removeClass('clicked');
//       $('#colors div').removeClass('white-clicked');
//       if(!$(this).hasClass('white')){
//         $(this).addClass('clicked')
//       } else{
//         $(this).addClass('white-clicked')
//       }
//       color =  col + opacity + ')';
//     })
// })


$("#params button").each(function(index){
  var col = colors[index];
  $(this).click(function(){
      $('#params button').addClass('btn-outlined');
      $(this).removeClass('btn-outlined')
            color =  col + opacity + ')';
    })
})





function createHiDPICanvas(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

//Create canvas with the device resolution.


//Create canvas with a custom resolution.
// var myCustomCanvas = createHiDPICanvas(500, 200, 4);