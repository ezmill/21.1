//noprotect
var canvas = document.getElementById('myCanvas');

var context = canvas.getContext('2d');
window.mobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; }
var check = mobilecheck(); 
if(!check){
context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;
var offs = 100;
console.log(offs);

} else{
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight-44;
  var offs = 68;
}
function gcf(a, b) { 
  return ( b == 0 ) ? (a):( gcf(b, a % b) ); 
}
function lcm(a, b) { 
  return ( a / gcf(a,b) ) * b; 
}
function lcm_nums(ar) {
  if (ar.length > 1) {
    ar.push( lcm( ar.shift() , ar.shift() ) );
    return lcm_nums( ar );
  } else {
    return ar[0];
  }
}
// canvas.width  = window.innerWidth;
// canvas.height = window.innerHeight;
// console.log(canvas.width, canvas.height);
// function resize() {
//   // Our canvas must cover full height of screen
//   // regardless of the resolution
//   var height = window.innerHeight;
  
//   // So we need to calculate the proper scaled width
//   // that should work well with every resolution
//   var ratio = canvas.width/canvas.height;
//   var width = height * ratio;
  
//   canvas.style.width = width+'px';
//   canvas.style.height = height+'px';
// }

// window.addEventListener('load', resize, false);
var hammertime = new Hammer(canvas);
//context.beginPath();
context.rect(0, 0, canvas.width, canvas.height);
context.fillStyle = 'black';
context.fill();
context.lineWidth = 1;
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
// var offs = 100;

// for (var x = 0; x < canvas.width; x += 700) {
//     for (var y = 0; y < canvas.height; y += 400) {
        

//         context.strokeStyle = 'white';
//         context.moveTo(bank[0][0][0], bank[0][0][1]);
//         context.quadraticCurveTo(bank[0][1][0], bank[0][1][1], bank[0][1][2], bank[0][1][3]);



//         context.stroke();

//     }
// }

function Shape(x, y, w, h, fill, num) {

  // This is a very simple and unsafe constructor. 
  // All we're doing is checking if the values exist.
  // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
  if(!check){
  this.x = x || 0;
  this.y = y || 0;
  } else{
    this.x = y || 0;
  this.y = x || 0;

  }
  this.w = w || 1;
  this.h = h || 1;
  this.fill = fill || '#000000';
  this.num = num;
    var bank = [
    [
        [this.x, this.y],
        [this.x + offs, this.y, this.x + offs, this.y + offs]
    ],
    [
        [this.x, this.y + offs],
        [this.x + offs, this.y + offs, this.x + offs, this.y]
    ],
    [
        [this.x,this.y],
        [this.x,this.y+offs,this.x+offs,this.y+offs]
    ],
    [
        [this.x,this.y+offs],
        [this.x,this.y,this.x+offs,this.y]
    ],
    [
        [this.x+offs/2,this.y],
        [this.x+offs,this.y+offs/2,this.x+offs/2,this.y+offs]
    ],
    [
        [this.x,this.y+offs/2],
        [this.x+offs/2, this.y+offs, this.x+offs, this.y+offs/2]
    ],
    [
        [this.x+offs/2,this.y],
        [this.x,this.y+offs/2,this.x+offs/2,this.y+offs]
    ],
    [
        [this.x,this.y+offs/2],
        [this.x+offs/2, this.y, this.x+offs, this.y+offs/2]
    ]
];
  switch(num){
  case "one":
    this.startingPosX = bank[0][0][0];
    this.startingPosY = bank[0][0][1];
    this.pos1 = bank[0][1][0];
    this.pos2 = bank[0][1][1];
    this.pos3 = bank[0][1][2];
    this.pos4 = bank[0][1][3];
    break;
  case "two":
    this.startingPosX = bank[1][0][0];
    this.startingPosY = bank[1][0][1];
    this.pos1 = bank[1][1][0];
    this.pos2 = bank[1][1][1];
    this.pos3 = bank[1][1][2];
    this.pos4 = bank[1][1][3];
    break;
  case "three":
    this.startingPosX = bank[2][0][0];
    this.startingPosY = bank[2][0][1];
    this.pos1 = bank[2][1][0];
    this.pos2 = bank[2][1][1];
    this.pos3 = bank[2][1][2];
    this.pos4 = bank[2][1][3];
    break;
  case "four":
    this.startingPosX = bank[3][0][0];
    this.startingPosY = bank[3][0][1];
    this.pos1 = bank[3][1][0];
    this.pos2 = bank[3][1][1];
    this.pos3 = bank[3][1][2];
    this.pos4 = bank[3][1][3];
    break;
  case "five":
    this.startingPosX = bank[4][0][0];
    this.startingPosY = bank[4][0][1];
    this.pos1 = bank[4][1][0];
    this.pos2 = bank[4][1][1];
    this.pos3 = bank[4][1][2];
    this.pos4 = bank[4][1][3];
    break;
  case "six":
    this.startingPosX = bank[5][0][0];
    this.startingPosY = bank[5][0][1];
    this.pos1 = bank[5][1][0];
    this.pos2 = bank[5][1][1];
    this.pos3 = bank[5][1][2];
    this.pos4 = bank[5][1][3];
    break;
  case "seven":
    this.startingPosX = bank[6][0][0];
    this.startingPosY = bank[6][0][1];
    this.pos1 = bank[6][1][0];
    this.pos2 = bank[6][1][1];
    this.pos3 = bank[6][1][2];
    this.pos4 = bank[6][1][3];
    break;    
  case "eight":
    this.startingPosX = bank[7][0][0];
    this.startingPosY = bank[7][0][1];
    this.pos1 = bank[7][1][0];
    this.pos2 = bank[7][1][1];
    this.pos3 = bank[7][1][2];
    this.pos4 = bank[7][1][3];
    break;
  }
}
 
// Draws this shape to a given context
Shape.prototype.draw = function(ctx) {

  ctx.fillStyle = this.fill;
  ctx.fillRect(this.x, this.y, this.w, this.h);
  
};


// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Height) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
};

Shape.prototype.drawLewitt = function(ctx){
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(this.startingPosX, this.startingPosY);
    ctx.quadraticCurveTo(this.pos1, this.pos2, this.pos3, this.pos4);
    ctx.stroke();
};

function CanvasState(canvas) {
  // **** First some setup! ****
  
  this.canvas = canvas;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctx = canvas.getContext('2d');
  // This complicates things a little but but fixes mouse co-ordinate problems
  // when there's a border or padding. See getMouse for more detail
  var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null).paddingLeft, 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null).paddingTop, 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null).borderLeftWidth, 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null).borderTopWidth, 10)   || 0;
  }
  // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
  // They will mess up mouse coordinates and this fixes that
  var html = document.body.parentNode;
  this.htmlTop = html.offsetTop;
  this.htmlLeft = html.offsetLeft;

  // **** Keep track of state! ****
  
  this.valid = false; // when set to false, the canvas will redraw everything
  this.shapes = [];  // the collection of things to be drawn
  this.dragging = false; // Keep track of when we are dragging
  // the current selected object. In the future we could turn this into an array for multiple selection
  this.selection = null;
  this.dragoffx = 0; // See mousedown and mousemove events for explanation
  this.dragoffy = 0;
  
  // **** Then events! ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
  // Up, down, and move are for dragging
  // canvas.addEventListener("mousedown", function(e){
  hammertime.on('dragstart', function(e) {
    // alert("tapped");
     var mouse = myState.getMouse(e);
    // console.log(mouse);
    e.gesture.preventDefault();
    // var mx = e.gesture.touches[0].clientX;
    // var my = e.gesture.touches[0].clientY;
    // console.log(mx+","+my);
    var mx = mouse.x;
    var my = mouse.y;
    var shapes = myState.shapes;
    var l = shapes.length;
    for (var i = l-1; i >= 0; i--) {
      if (shapes[i].contains(mx, my)) {
        var mySel = shapes[i];
        // Keep track of where in the object we clicked
        // so we can move it smoothly (see mousemove)
        myState.dragoffx = mx - mySel.x;
        myState.dragoffy = my - mySel.y;
        myState.dragging = true;
        myState.selection = mySel;
        myState.valid = false;
        return;
      }
    }
    // havent returned means we have failed to select anything.
    // If there was an object selected, we deselect it
    if (myState.selection) {
      myState.selection = null;
      myState.valid = false; // Need to clear the old selection border
    }
  }, true);
  hammertime.on('drag', function(e) {
        e.gesture.preventDefault();

    if (myState.dragging){
      var mouse = myState.getMouse(e);
      // We don't want to drag the object by its top-left corner, we want to drag it
      // from where we clicked. Thats why we saved the offset and use it here
      // var newX = mouse.x - myState.dragoffx;
      // var newY = mouse.y - myState.dragoffy;
      // var mx = e.gesture.touches[0].clientX;
      // var my = e.gesture.touches[0].clientY;
      var mx = mouse.x;
      var my = mouse.y;
      var newX = Math.round((mx - myState.dragoffx) / offs) * offs;
      var newY = Math.round((my - myState.dragoffy) / offs) * offs;
      myState.selection.x = newX;
      myState.selection.y = newY;
      console.log(newX, newY)
      switch(myState.selection.num){
        case "one":
         myState.selection.startingPosX = newX;
         myState.selection.startingPosY = newY;
         myState.selection.pos1 = newX+offs;
         myState.selection.pos2 = newY;
         myState.selection.pos3 = newX+offs;
         myState.selection.pos4 = newY+offs;
         break;
        case "two":
         myState.selection.startingPosX = newX;
         myState.selection.startingPosY = newY+offs;
         myState.selection.pos1 = newX+offs;
         myState.selection.pos2 = newY+offs;
         myState.selection.pos3 = newX+offs;
         myState.selection.pos4 = newY;
         break;
        case "three":
         myState.selection.startingPosX = newX;
         myState.selection.startingPosY = newY;
         myState.selection.pos1 = newX;
         myState.selection.pos2 = newY+offs;
         myState.selection.pos3 = newX+offs;
         myState.selection.pos4 = newY+offs;
         break;
        case "four":
         myState.selection.startingPosX = newX;
         myState.selection.startingPosY = newY+offs;
         myState.selection.pos1 = newX;
         myState.selection.pos2 = newY;
         myState.selection.pos3 = newX+offs;
         myState.selection.pos4 = newY;
         break;
        case "five":
         myState.selection.startingPosX = newX+offs/2;
         myState.selection.startingPosY = newY;
         myState.selection.pos1 = newX+offs;
         myState.selection.pos2 = newY+offs/2;
         myState.selection.pos3 = newX+offs/2;
         myState.selection.pos4 = newY+offs;
         break;
        case "six":
         myState.selection.startingPosX = newX;
         myState.selection.startingPosY = newY+offs/2;
         myState.selection.pos1 = newX+offs/2;
         myState.selection.pos2 = newY+offs;
         myState.selection.pos3 = newX+offs;
         myState.selection.pos4 = newY+offs/2;
         break;
        case "seven":
         myState.selection.startingPosX = newX+offs/2;
         myState.selection.startingPosY = newY;
         myState.selection.pos1 = newX;
         myState.selection.pos2 = newY+offs/2;
         myState.selection.pos3 = newX+offs/2;
         myState.selection.pos4 = newY+offs;
         break;
        case "eight":
         myState.selection.startingPosX = newX;
         myState.selection.startingPosY = newY+offs/2;
         myState.selection.pos1 = newX+offs/2;
         myState.selection.pos2 = newY;
         myState.selection.pos3 = newX+offs;
         myState.selection.pos4 = newY+offs/2;
         break;
         
      }
//       myState.selection.drawLewitt(ctx);
      myState.valid = false; // Something's dragging so we must redraw
    }
  }, true);
  hammertime.on('dragend', function(e) {
        e.gesture.preventDefault();
        console.log("drag end")
      myState.dragging = false;

    

  }, true);
  // double click for making new shapes
  // canvas.addEventListener('dblclick', function(e) {
  //   var mouse = myState.getMouse(e);
  //   myState.addShape(new Shape(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(0,255,0,.6)'));
  // }, true);
  
  // **** Options! ****
  
  this.selectionColor = '#CC0000';
  this.selectionWidth = 2;  
  this.interval = 30;
  setInterval(function() { myState.draw(); }, myState.interval);
}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  this.valid = false;
};

CanvasState.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
  
};

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
CanvasState.prototype.draw = function() {
  // if our state is invalid, redraw and validate!
  if (!this.valid) {
    var ctx = this.ctx;
    var shapes = this.shapes;
    this.clear();
    
    // ** Add stuff you want drawn in the background all the time here **
    
    // draw all shapes
    var l = shapes.length;
    for (var i = 0; i < l; i++) {
      var shape = shapes[i];
      // We can skip the drawing of elements that have moved off the screen:
      if (shape.x > this.width || shape.y > this.height ||
          shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
      shapes[i].draw(ctx);
    }
    
    // draw selection
    // right now this is just a stroke along the edge of the selected Shape
    // if (this.selection !== null) {
    //   ctx.strokeStyle = this.selectionColor;
    //   ctx.lineWidth = this.selectionWidth;
    //   var mySel = this.selection;
    //   ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
    // }
    
    // ** Add stuff you want drawn on top all the time here **
    for (var j = 0; j < l; j++) {
      shapes[j].drawLewitt(ctx);
    }
    this.valid = true;
  }
};


// Creates an object with x and y defined, set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky, we have to worry about padding and borders
CanvasState.prototype.getMouse = function(e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  
  // Compute the total offset
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.gesture.touches[0].clientX - offsetX;
  my = e.gesture.touches[0].clientY - offsetY;
  
  // We return a simple javascript object (a hash) with x and y defined
  return {x: mx, y: my};
};

function init() {

  var s = new CanvasState(document.getElementById('myCanvas'));
  // s.addShape(new Shape(0,0,offs,offs,"#000000","one"));
  // s.addShape(new Shape(0,0,offs,offs,"#000000","two"));
  // s.addShape(new Shape(0,offs,offs,offs,"#000000","one"));
  // s.addShape(new Shape(0,offs,offs,offs,"#000000","three"));
  // s.addShape(new Shape(0,200,offs,offs,"#000000","one"));
  // s.addShape(new Shape(0,200,offs,offs,"#000000","four"));
  // s.addShape(new Shape(0,300,offs,offs,"#000000","one"));
  // s.addShape(new Shape(0,300,offs,offs,"#000000","five"));
  // s.addShape(new Shape(offs,0,offs,offs,"#000000","one"));
  // s.addShape(new Shape(offs,0,offs,offs,"#000000","six"));
  // s.addShape(new Shape(offs,offs,offs,offs,"#000000","one"));
  // s.addShape(new Shape(offs,offs,offs,offs,"#000000","seven"));
  // s.addShape(new Shape(offs,200,offs,offs,"#000000","one"));
  // s.addShape(new Shape(offs,200,offs,offs,"#000000","eight"));
  // s.addShape(new Shape(offs,300,offs,offs,"#000000","two"));
  // s.addShape(new Shape(offs,300,offs,offs,"#000000","three"));
  // s.addShape(new Shape(200,0,offs,offs,"#000000","two"));
  // s.addShape(new Shape(200,0,offs,offs,"#000000","four"));
  // s.addShape(new Shape(200,offs,offs,offs,"#000000","two"));
  // s.addShape(new Shape(200,offs,offs,offs,"#000000","five"));
  // s.addShape(new Shape(200,200,offs,offs,"#000000","two"));
  // s.addShape(new Shape(200,200,offs,offs,"#000000","six"));
  // s.addShape(new Shape(200,300,offs,offs,"#000000","two"));
  // s.addShape(new Shape(200,300,offs,offs,"#000000","seven"));
  // s.addShape(new Shape(300,0,offs,offs,"#000000","two"));
  // s.addShape(new Shape(300,0,offs,offs,"#000000","eight"));
  // s.addShape(new Shape(300,offs,offs,offs,"#000000","three"));
  // s.addShape(new Shape(300,offs,offs,offs,"#000000","four"));
  // s.addShape(new Shape(300,200,offs,offs,"#000000","three"));
  // s.addShape(new Shape(300,200,offs,offs,"#000000","five"));
  // s.addShape(new Shape(300,300,offs,offs,"#000000","three"));
  // s.addShape(new Shape(300,300,offs,offs,"#000000","six"));
  // s.addShape(new Shape(400,0,offs,offs,"#000000","three"));
  // s.addShape(new Shape(400,0,offs,offs,"#000000","seven"));
  // s.addShape(new Shape(400,offs,offs,offs,"#000000","three"));
  // s.addShape(new Shape(400,offs,offs,offs,"#000000","eight"));
  // s.addShape(new Shape(400,200,offs,offs,"#000000","four"));
  // s.addShape(new Shape(400,200,offs,offs,"#000000","five"));
  // s.addShape(new Shape(400,300,offs,offs,"#000000","four"));
  // s.addShape(new Shape(400,300,offs,offs,"#000000","six"));
  // s.addShape(new Shape(500,0,offs,offs,"#000000","four"));
  // s.addShape(new Shape(500,0,offs,offs,"#000000","seven"));
  // s.addShape(new Shape(500,offs,offs,offs,"#000000","four"));
  // s.addShape(new Shape(500,offs,offs,offs,"#000000","eight"));
  // s.addShape(new Shape(500,200,offs,offs,"#000000","five"));
  // s.addShape(new Shape(500,200,offs,offs,"#000000","six"));
  // s.addShape(new Shape(500,300,offs,offs,"#000000","five"));
  // s.addShape(new Shape(500,300,offs,offs,"#000000","seven"));
  // s.addShape(new Shape(600,0,offs,offs,"#000000","five"));
  // s.addShape(new Shape(600,0,offs,offs,"#000000","eight"));
  // s.addShape(new Shape(600,offs,offs,offs,"#000000","six"));
  // s.addShape(new Shape(600,offs,offs,offs,"#000000","seven"));
  // s.addShape(new Shape(600,200,offs,offs,"#000000","six"));
  // s.addShape(new Shape(600,200,offs,offs,"#000000","eight"));
  // s.addShape(new Shape(600,300,offs,offs,"#000000","seven"));
  // s.addShape(new Shape(600,300,offs,offs,"#000000","eight"));
  s.addShape(new Shape(0,0,offs,offs,"#000000","one"));
  s.addShape(new Shape(0,0,offs,offs,"#000000","two"));
  s.addShape(new Shape(0,offs,offs,offs,"#000000","one"));
  s.addShape(new Shape(0,offs,offs,offs,"#000000","three"));
  s.addShape(new Shape(0,offs*2,offs,offs,"#000000","one"));
  s.addShape(new Shape(0,offs*2,offs,offs,"#000000","four"));
  s.addShape(new Shape(0,offs*3,offs,offs,"#000000","one"));
  s.addShape(new Shape(0,offs*3,offs,offs,"#000000","five"));
  s.addShape(new Shape(offs,0,offs,offs,"#000000","one"));
  s.addShape(new Shape(offs,0,offs,offs,"#000000","six"));
  s.addShape(new Shape(offs,offs,offs,offs,"#000000","one"));
  s.addShape(new Shape(offs,offs,offs,offs,"#000000","seven"));
  s.addShape(new Shape(offs,offs*2,offs,offs,"#000000","one"));
  s.addShape(new Shape(offs,offs*2,offs,offs,"#000000","eight"));
  s.addShape(new Shape(offs,offs*3,offs,offs,"#000000","two"));
  s.addShape(new Shape(offs,offs*3,offs,offs,"#000000","three"));
  s.addShape(new Shape(offs*2,0,offs,offs,"#000000","two"));
  s.addShape(new Shape(offs*2,0,offs,offs,"#000000","four"));
  s.addShape(new Shape(offs*2,offs,offs,offs,"#000000","two"));
  s.addShape(new Shape(offs*2,offs,offs,offs,"#000000","five"));
  s.addShape(new Shape(offs*2,offs*2,offs,offs,"#000000","two"));
  s.addShape(new Shape(offs*2,offs*2,offs,offs,"#000000","six"));
  s.addShape(new Shape(offs*2,offs*3,offs,offs,"#000000","two"));
  s.addShape(new Shape(offs*2,offs*3,offs,offs,"#000000","seven"));
  s.addShape(new Shape(offs*3,0,offs,offs,"#000000","two"));
  s.addShape(new Shape(offs*3,0,offs,offs,"#000000","eight"));
  s.addShape(new Shape(offs*3,offs,offs,offs,"#000000","three"));
  s.addShape(new Shape(offs*3,offs,offs,offs,"#000000","four"));
  s.addShape(new Shape(offs*3,offs*2,offs,offs,"#000000","three"));
  s.addShape(new Shape(offs*3,offs*2,offs,offs,"#000000","five"));
  s.addShape(new Shape(offs*3,offs*3,offs,offs,"#000000","three"));
  s.addShape(new Shape(offs*3,offs*3,offs,offs,"#000000","six"));
  s.addShape(new Shape(offs*4,0,offs,offs,"#000000","three"));
  s.addShape(new Shape(offs*4,0,offs,offs,"#000000","seven"));
  s.addShape(new Shape(offs*4,offs,offs,offs,"#000000","three"));
  s.addShape(new Shape(offs*4,offs,offs,offs,"#000000","eight"));
  s.addShape(new Shape(offs*4,offs*2,offs,offs,"#000000","four"));
  s.addShape(new Shape(offs*4,offs*2,offs,offs,"#000000","five"));
  s.addShape(new Shape(offs*4,offs*3,offs,offs,"#000000","four"));
  s.addShape(new Shape(offs*4,offs*3,offs,offs,"#000000","six"));
  s.addShape(new Shape(offs*5,0,offs,offs,"#000000","four"));
  s.addShape(new Shape(offs*5,0,offs,offs,"#000000","seven"));
  s.addShape(new Shape(offs*5,offs,offs,offs,"#000000","four"));
  s.addShape(new Shape(offs*5,offs,offs,offs,"#000000","eight"));
  s.addShape(new Shape(offs*5,offs*2,offs,offs,"#000000","five"));
  s.addShape(new Shape(offs*5,offs*2,offs,offs,"#000000","six"));
  s.addShape(new Shape(offs*5,offs*3,offs,offs,"#000000","five"));
  s.addShape(new Shape(offs*5,offs*3,offs,offs,"#000000","seven"));
  s.addShape(new Shape(offs*6,0,offs,offs,"#000000","five"));
  s.addShape(new Shape(offs*6,0,offs,offs,"#000000","eight"));
  s.addShape(new Shape(offs*6,offs,offs,offs,"#000000","six"));
  s.addShape(new Shape(offs*6,offs,offs,offs,"#000000","seven"));
  s.addShape(new Shape(offs*6,offs*2,offs,offs,"#000000","six"));
  s.addShape(new Shape(offs*6,offs*2,offs,offs,"#000000","eight"));
  s.addShape(new Shape(offs*6,offs*3,offs,offs,"#000000","seven"));
  s.addShape(new Shape(offs*6,offs*3,offs,offs,"#000000","eight"));

}
init();
