function getMousePos(e,t){var n=e.getBoundingClientRect();return{x:t.gesture.touches[0].clientX-n.left,y:t.gesture.touches[0].clientY-n.top}}function drawLines(e,t){positionsX.push(e);positionsY.push(t);for(var n=0;n<positionsX.length;n++){var r=distance(positionsX[n],positionsY[n],e,t);var i=Math.random()*100;if(r<val&&i<val){ctx.beginPath();ctx.moveTo(positionsX[n],positionsY[n]);ctx.lineTo(e,t);ctx.lineWidth=1;ctx.strokeStyle=color;ctx.stroke()}}}function distance(e,t,n,r){var i=Math.sqrt((n-e)*(n-e)+(r-t)*(r-t));return i}function createHiDPICanvas(e,t,n){if(!n){n=PIXEL_RATIO}var r=document.createElement("canvas");r.width=e*n;r.height=t*n;r.style.width=e+"px";r.style.height=t+"px";r.getContext("2d").setTransform(n,0,0,n,0,0);return r}var PIXEL_RATIO=function(){var e=document.createElement("canvas").getContext("2d"),t=window.devicePixelRatio||1,n=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return t/n}();var opacity=.4;var color="rgba(127,127,127, "+opacity+")";var canvas=createHiDPICanvas(window.innerWidth,window.innerHeight),ctx=canvas.getContext("2d"),positionsX=[],positionsY=[],val=30;canvas.style.position="relative";canvas.style.zindex="1";var div=document.getElementById("main");var save=document.getElementById("save");var clear=document.getElementById("clear");div.appendChild(canvas);ctx.rect(0,0,canvas.width,canvas.height);ctx.fill();ctx.fillStyle="black";var hammertime=new Hammer(canvas);var hammertime1=new Hammer(div);save.onclick=function(){window.open(canvas.toDataURL("image/png"))};clear.onclick=function(){positionsX=[];positionsY=[];ctx.rect(0,0,canvas.width,canvas.height);ctx.fill();ctx.fillStyle="black"};var div=document.getElementById("stupid");setTimeout(function(){div.style.display="none"},1e3);hammertime1.on("dragstart",function(e){e.gesture.preventDefault()});hammertime1.on("drag",function(e){e.gesture.preventDefault()});hammertime.on("dragstart",function(e){e.gesture.preventDefault});hammertime.on("drag",function(e){e.gesture.preventDefault();var t=getMousePos(canvas,e);var n=t.x;var r=t.y;drawLines(n,r)},false);hammertime.on("dragend",function(e){e.gesture.preventDefault});var colors=["rgba(204,204,204, ","rgba(255,0,0, ","rgba(0,255,0, ","rgba(0,0,255, "];$("#params button").each(function(e){var t=colors[e];$(this).click(function(){$("#params button").addClass("btn-outlined");$(this).removeClass("btn-outlined");color=t+opacity+")"})})