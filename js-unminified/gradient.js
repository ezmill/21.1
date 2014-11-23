var div = document.getElementById("main");
var hammertime = new Hammer(div);
var span = document.getElementsByClassName("slide-text");
console.log(span);
var sort = document.getElementById("sort");
var angle = 0.0;
//var copyData;
var cos = Math.cos(angle);
// console.log(cos);
//   determineRand();

// setInterval(function(){
//   determineRand();
// },4000);
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
// var cosOff = map_range(cos, -1, 1, 0, 255);
hammertime.on('drag',function(evt){
    evt.gesture.preventDefault();
    span[0].style.display = "none";
    var x = evt.gesture.touches[0].clientX;
    var y = evt.gesture.touches[0].clientY;
    var v = (evt.gesture.velocityX + evt.gesture.velocityY)/2;
    // console.log(evt.gesture.angle);
    var mapX = Math.floor(map_range(x, 0, window.innerWidth, 0, 255));
    var mapY = Math.floor(map_range(y, 0, window.innerHeight, 0, 255));
    // var mapV = Math.floor(map_range(v, 0, 5, 0, 255));
    var mapV = Math.floor(map_range(evt.gesture.angle, -180, 180, 0, 255));

    var rando = Math.floor((Math.random()*255));
    var hex1 = rgbToHex(mapX,mapY, mapV);
    var hex2 = rgbToHex(mapY, mapV, mapX);
    var hex3 = rgbToHex(mapV, mapX, mapY);
    var ang = Math.acos(x/window.innerWidth);
    var ang1 = Math.acos(y/window.innerHeight);
    var deg = ang * (180/Math.PI);
    var deg1 = ang1 * (180/Math.PI);
    var degAvg = (deg + deg1)/2;
    this.style.background = "linear-gradient("+evt.gesture.angle +"deg"+", " + hex1 + ", " + hex2 +", "+hex3+")"  
    sort.onclick = function(e){
      e.preventDefault();
      // console.log(this.style.background);
      // doSort(div.style.background);
      console.log(evt.gesture);
      div.style.background = "none";
      gradientCanvas(evt.gesture.angle, hex1, hex2, hex3, evt.gesture);
    }
  }, false);

 function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function doSort(bg){

  // var data   = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
  //              '<foreignObject width="100%" height="100%">' +
  //                '<div xmlns="http://www.w3.org/1999/xhtml" style="background-image:'+ bg+';">' +
  //                '<p style="color:red; text-shadow:0 0 2px blue;>test</p>'+
  //                '</div>' +
  //              '</foreignObject>' +
  //            '</svg>';
  // var data   = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
  //              '<foreignObject width="100%" height="100%">' +
  //                '<div xmlns="http://www.w3.org/1999/xhtml" style="-webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-image: '+bg+'; background-position: initial initial; background-repeat: initial initial; width: 100%;height: 100%;">' +
  //                  // '<em>I</em> like <span style="color:white; text-shadow:0 0 2px blue;">cheese</span>' +
  //                '</div>' +
  //              '</foreignObject>' +
  //            '</svg>';

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
// var ctx  = canvas.getContext('2d');
// rasterizeHTML.drawHTML('<div style="width:100%; height:100%; background:'+bg+'; ">' +
//             '<p>TEST</p>'+
//             '</div>',
//             canvas);

rasterizeHTML.drawHTML('<div style="position: absolute; top: 0px; left: 0px; background:'+bg+'; width:'+"100%"+'; height:'+"100%"+';">' +
            'Some <span style="color: green">HTML</span>' +
            ' with an image' +
            '</div>',
            canvas, dangus(canvas));

  // canvas.id = "dangus";

  }


  // var DOMURL = window.URL || window.webkitURL || window;

  // var img = new Image();
  // var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
  // var url = DOMURL.createObjectURL(svg);
  // img.src = url;
  // var imgTag = document.createElement("img");
  // imgTag.src = url;
  // document.body.appendChild(imgTag);
  // img.onload = function () {
  //   ctx.drawImage(img, 0, 0);
  //   DOMURL.revokeObjectURL(url);
  // }





 function dangus(newCanvas){
  // var dangus = document.getElementById("dangus")
  // var u8_2 = new Uint8Array(atob(data).split(",").map(function(c) {
  //            return c.charCodeAt(0); }));
// var u8_2 = convertDataURIToBinary(data);

  var img = new Image();
  // img.crossOrigin = 'anonymous';
  var data = newCanvas.toDataURL();

  img.src = data;
  // console.log(data);
  img.onload = function(){
    // var newCanvas = document.createElement("canvas");
    // document.body.appendChild(newCanvas);

    var ctx = newCanvas.getContext("2d");
    ctx.drawImage(img,0,0,newCanvas.width,newCanvas.height);
    // var ctx=canvas.getContext('2d');

    var input=ctx.getImageData(0,0,newCanvas.width,newCanvas.height);
    var inputData=input.data;
    var w=newCanvas.width,
        h=newCanvas.height;
    ctx.putImageData(input,0,0);
    function copyLoop(){
        var copy=ctx.getImageData(0,0,newCanvas.width,newCanvas.height);
         copyData=copy.data;

        for(var y=0;y<h;y++){
          for(var x=0;x<w;x++){
          var pixel=(y*w+x)*4;var red=pixel;
          var green=pixel+1;var blue=pixel+2;
          if(pixel%100000 === 0){
            determineRand();
          }
          // var rand = Math.floor(Math.random()*3);

          // var brightness = getBri(red,green,blue);
          // if(brightness<1.0){
          // if(copyData[pixel-w*4]>copyData[pixel]){
                      if(copyData[pixel+4]>copyData[pixel]){

                  swap(copyData,red,red-4*w-4,green,green-4*w+4,blue,blue-4*w-4, rand);
                        // swap(copyData,red,red+4,green,green+4,blue,blue+4, rand);

              }
           }
        }
        ctx.putImageData(copy,0,0);
        // angle+=0.1;
        window.requestAnimationFrame(copyLoop);
    }
           window.requestAnimationFrame(copyLoop);
 }
}
function determineRand(){
  rand = Math.floor(Math.random()*3);
}


function swap(x,rl,rr,gl,gr,bl,br, rand){
  switch(rand){
    case 0:
      var tempr=x[rl]-255;
      x[rl]=x[rr]-255;
      x[rr]=tempr-255;
      var tempg=x[gl];
      x[gl]=x[gr];
      x[gr]=tempg;
      var tempb=x[bl];
      x[bl]=x[br];
      x[br]=tempb;
      break;
    case 1:
      var tempr=x[rl];
      x[rl]=x[rr];
      x[rr]=tempr;
      var tempg=x[gl]-255;
      x[gl]=x[gr]-255;
      x[gr]=tempg-255;
      var tempb=x[bl];
      x[bl]=x[br];
      x[br]=tempb;
      break;
    case 2:
      var tempr=x[rl];
      x[rl]=x[rr];
      x[rr]=tempr;
      var tempg=x[gl];
      x[gl]=x[gr];
      x[gr]=tempg;
      var tempb=x[bl]-255;
      x[bl]=x[br]-255;
      x[br]=tempb-255;
      break;
  }
  // var tempr=x[rl]-255;
  //     x[rl]=x[rr]-255;
  //     x[rr]=tempr-255;
  //     var tempg=x[gl];
  //     x[gl]=x[gr];
  //     x[gr]=tempg;
  //     var tempb=x[bl];
  //     x[bl]=x[br];
  //     x[br]=tempb;
      // break;
}


function gradientCanvas(angle, col1, col2, col3, evt){


  var angle = angle*(Math.PI/180);
  var canvas=document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx=canvas.getContext("2d");
  //   var csX = evt.startEvent.center.clientX;
  // var csY = evt.startEvent.center.clientY;
  // var startX = map_range(csX, 0, csX, 0, canvas.width);
  // var startY = map_range(csY, 0, csY, 0, canvas.height);
  // var ceX = evt.center.x;
  // var ceY = evt.center.y;
  // var endX = map_range(ceX, 0, ceX, 0, canvas.width);
  // var endY = map_range(ceY, 0, ceY, 0, canvas.height);
  // // if(angle < 0){
  // var endX = -Math.cos(angle)*canvas.width;
  // var endY = -Math.sin(angle)*canvas.height;
  // } else{

    var endX = Math.abs(Math.sin(angle)*canvas.width);
    var endY = Math.abs(Math.cos(angle)*canvas.height);
  // }
  console.log(endX,endY);
  var gradient=ctx.createLinearGradient(0, 0,endX, endY);
  gradient.addColorStop(0,col1);
  gradient.addColorStop(0.5,col2);
  gradient.addColorStop(1,col3);
  ctx.fillStyle=gradient;
  ctx.fillRect(0,0, canvas.width, canvas.height);
  dangus(canvas);
}

function getCol(x, y) {
  var base = (Math.floor(y) * (window.innerWidth + 1) + Math.floor(x)) * 4;
  var c = {
    r: copyData[base + 0],
    g: copyData[base + 1],
    b: copyData[base + 2],
    a: copyData[base + 3]
  };
  return (c.r << 16) + (c.g << 8) + c.b;
}
function getBri(red,green,blue) {
  return (0.34 * red + 0.5 * green + 0.16 * blue);
}

