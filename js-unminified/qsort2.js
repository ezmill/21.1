new Uploader("html", setImage);
new Uploader("#upload", setImage);

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.mobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; }
var check = mobilecheck(); 
var rang = document.getElementById("rang");
var value = document.getElementById("currentValue");
thresh = rang.value;

rang.onchange = function(){
   thresh = rang.value;
   value.innerHTML = Math.ceil(rang.value*100/255)+"%";
}
function setImage(uri){
  var upload = document.getElementById("upload");
  upload.style.display = "none";
  var label = document.getElementsByTagName("label");
  label[0].style.display = "none"
  canvas=document.createElement('canvas');
  var share = document.createElement("a");
  share.href = "#";
  share.id = "share";
  share.className += "btn btn-block btn-primary btn-outlined";
  share.innerHTML = "share";
  var appender = document.getElementById("params");
  appender.insertBefore(share,document.getElementById("range-div"));
  // appender.appendChild(share);
  // appender = share;
  // var hammertime = new Hammer(share);

  // hammertime.on("drag", function(){
  //   imgurUpload();
  // });
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth ;
  canvas.height = window.innerHeight;
  share.addEventListener("click", function(){
    imgurUpload();
    canvas.style.top -= "50px";
    share.style.display = "none";
  });
 data = canvas.toDataURL();

  img = new Image();
  img.src = uri;
  var ctx=canvas.getContext('2d');
  // if( window.innerWidth > window.innerHeight) {
  //    var aspectRatio = window.innerWidth/window.innerHeight;
  // } else {
  //   var aspectRatio = window.innerHeight/window.innerWidth;
  // }
          devicePixelRatio = window.devicePixelRatio || 1,
        backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                            ctx.mozBackingStorePixelRatio ||
                            ctx.msBackingStorePixelRatio ||
                            ctx.oBackingStorePixelRatio ||
                            ctx.backingStorePixelRatio || 1,

        ratio = devicePixelRatio / backingStoreRatio;


    // upscale the canvas if the two ratios don't match
    if (devicePixelRatio !== backingStoreRatio) {
      console.log("what");
        var oldWidth = canvas.width;
        var oldHeight = canvas.height;

        canvas.width = oldWidth * ratio;
        canvas.height = oldHeight * ratio;

        canvas.style.width = oldWidth + 'px';
        canvas.style.height = oldHeight + 'px';

        // now scale the context to counter
        // the fact that we've manually scaled
        // our canvas element
        ctx.scale(ratio, ratio);

    }


    // if(img.width > canvas.width) img.width = canvas.width;
    // if(img.height > canvas.height) img.height = canvas.height;
    // canvas.width = result.width;
    // canvas.height = result.height;



  // height = img.height * scale;
  // width = img.width * scale;

  // if( height > window.innerHeight ){
  //   scale = 0.5;
  //   height = img.height * scale;
  //   width = img.height * scale;
  // }
  // $("canvas").css("width", width).css("height", height).attr('width', width).attr('height', height);;
  // test
  
  
  img.onload = function(){

    var mpImg = new MegaPixImage(img);
    // Render resized image into image element using quality option.
    // Quality option is valid when rendering into image element.
    // if(img.width > img.height){
    //   mpImg.render(canvas, {maxWidth: canvas.width, maxHeight: canvas.height});
    // } else {
      if(check){
      mpImg.render(canvas, { maxWidth: canvas.width, maxHeight: canvas.height, orientation: 6});
      } else{
              mpImg.render(canvas, { maxWidth: canvas.width, maxHeight: canvas.height});

      }
    // }
    // var sourceX = 0;
    // var sourceY = 0;
    // var destX = 0;
    // var destY = 0;
    // if (img.width > img.height) {
    //     var stretchRatio = ( img.width / canvas.width );
    //     var sourceWidth = Math.floor(canvas.width*stretchRatio);
    //     var sourceHeight = Math.floor(canvas.height*stretchRatio);
    //     sourceY = Math.floor((img.height - sourceHeight)/2);
    //   } else {
    //     var stretchRatio = ( img.height / canvas.height );
    //     var sourceWidth = Math.floor(canvas.width*stretchRatio);
    //     var sourceHeight = Math.floor(canvas.height*stretchRatio);
    //     sourceX = Math.floor((img.width - sourceWidth)/2);
    // }            
    // var destWidth = Math.floor(canvas.width / pixelRatio);
    // var destHeight = Math.floor(canvas.height / pixelRatio);

    // console.log(sourceWidth, sourceHeight, destWidth, destHeight, sourceX, sourceY, destX, destY);
    // $(img).css("left", result.targetleft);
    // $(img).css("top", result.targettop);

    // ctx.drawImage(img, 0, 0, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    // ctx.drawImage(img, 0, 0, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight);

    var input=ctx.getImageData(0,0,canvas.width,canvas.height);
    var inputData=input.data;
    var w=canvas.width,
        h=canvas.height;
    ctx.putImageData(input,0,0);
    function copyLoop(){
         var copy=ctx.getImageData(0,0,w,h);
         copyData=copy.data;
         var l = copy.data.length;
        // var buf = new ArrayBuffer(copyData.data.length);
        // var buf8 = new Uint8ClampedArray(buf);
        //  data = new Uint32Array(buf);
        // for(var y=0;y<h;y++){
          // for(var x=0;x<w;x++){
        for(var i = 0; i<l; i+=4){
          // var pixel=(y*w+x)*4;
          // var red=pixel;
          // var green=pixel+1;
          // var blue=pixel+2;
          var r = copyData[i];
          var g = copyData[i+1];
          var b = copyData[i+2];
          // var hex = (r << 16) + (g << 8) + b;
          // var newR = ( hex >> 16 & 255 ) / 255;
          // var newG = ( hex >> 8 & 255 ) / 255;
          // var newB = ( hex & 255 ) / 255;

          // var col = setHex(getCol(x, y));

          // var col = getCol(x,y);
          var brightness = (0.34 * r + 0.5 * g + 0.16 * b);
            // var brightness = (0.34 * newR + 0.5 * newG + 0.16 * newB);

          // var brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          // console.log(brightness);
          // console.log("r:"+r, "g:"+g, "b:"+b,"bright:"+brightness);
          // if(copyData[pixel-w*4]>copyData[pixel]){
                      // if(copyData[pixel+4]>copyData[pixel]){
                  // if(copyData[i+4]>copyData[i]){
                        if(brightness>thresh){
            swap(copyData,i,i-4*w-4,i+1,i+1-4*w-4,i+2,i+2-4*w-4);
                        // swap(copyData,red,red+4,green,green+4,blue,blue+4);
                        // swap(copyData,r,r+4,g,g+4,b,b+4);
                        // swap(copyData, i,i+4, i+1, i+5, i+2, i+6);
              }
           // }
        }
        ctx.putImageData(copy,0,0);
        
        window.requestAnimationFrame(copyLoop);
        // setInterval(function(){copyLoop();},30);
    }
      window.requestAnimationFrame(copyLoop);

        // setInterval(function(){copyLoop();},30);

  };
  
}

function swap(x,rl,rr,gl,gr,bl,br){
  var tempr=x[rl];
  x[rl]=x[rr];
  x[rr]=tempr;
  var tempg=x[gl];
  x[gl]=x[gr];
  x[gr]=tempg;
  var tempb=x[bl];
  x[bl]=x[br];
  x[br]=tempb;
}

$("#share").click(function(){
  console.log("clicked");
      imgurUpload();
})


function getCol(x, y) {
  var base = (Math.floor(y) * (canvas.width + 1) + Math.floor(x)) * 4;
  // var w = canvas.width;
  // var base = (x+y*w)*4;
  var c = {
    r: copyData[base + 0],
    g: copyData[base + 1],
    b: copyData[base + 2]
    // a: copyData[base + 3]
  };
  return (c.r << 16) + (c.g << 8) + c.b;
}
// function getCol(x, y) {
//   // var base = (Math.floor(y) * (canvas.width + 1) + Math.floor(x)) * 4;
//   // var w = canvas.width;
//   // var base = (x+y*w)*4;
//   var base = x * y & 0xff;
//   // var c = {
//   //   r: data[base + 0],
//   //   g: data[base + 1],
//   //   b: data[base + 2]
//   //   // a: copyData[base + 3]
//   // };
//   data[y * canvas.width + x] =
//   (255   << 24) |    // alpha
//   (value << 16) |    // blue
//   (value <<  8) |    // green
//    value;           // red

//   // return (c.r << 16) + (c.g << 8) + c.b;
// }
//return pixel brightness between 0 and 1 based on human perceptual bias

function getBri(c) {
  return (0.34 * c.r + 0.5 * c.g + 0.16 * c.b);
}
 function setHex( hex ) {

    // hex = Math.floor( hex );

    this.r = ( hex >> 16 & 255 ) / 255;
    this.g = ( hex >> 8 & 255 ) / 255;
    this.b = ( hex & 255 ) / 255;

    return this;

}
