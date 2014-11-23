var gl, canvas, fbo, edgeFbo1, edgeFbo2, baseTexture;
var ditherFbo, blurFbo, ditherProgram, blurProgram, ditherFs, blurFs;
var baseProgram, edgeProgram1, edgeProgram2;
var baseVs, baseFs, edgeFs1, edgeFs2;
var camTex;
var videoLoaded = false;
var delay = 0;
var mouseX,mouseY, mapMouseX, mapMouseY;

var video = document.createElement('video'),
    canvas = document.getElementById("canvas");



var radius = document.querySelector('#radius').value;
// var radius = 1.0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

init();

function init(){
	initGl();
	initFbosAndShaders();
	getCamAsTexture();
	loop();
}

function initGl(){
	gl = getWebGLContext(canvas);
}

function initFbosAndShaders(){
	baseTexture = new pxBB();
	fbo = new pxFbo();
	edgeFbo1 = new pxFbo();
	edgeFbo2 = new pxFbo();
	blurFbo = new pxFbo();
	ditherFbo = new pxFbo();


	fbo.allocate(canvas.width, canvas.height);
	edgeFbo1.allocate(canvas.width, canvas.height);
	edgeFbo2.allocate(canvas.width, canvas.height);
	ditherFbo.allocate(window.innerWidth, window.innerHeight, true);
	blurFbo.allocate(window.innerWidth, window.innerHeight, true);

	baseVs = createShaderFromScriptElement(gl, "baseVs");
	translateVs = createShaderFromScriptElement(gl, "translateVs");

	baseFs = createShaderFromScriptElement(gl, "baseFs");
	edgeFs1 = createShaderFromScriptElement(gl, "edgeFs1");
	edgeFs2 = createShaderFromScriptElement(gl, "edgeFs2");
	ditherFs = createShaderFromScriptElement(gl, "ditherFs");
	blurFs = createShaderFromScriptElement(gl, "blurFs");

	baseProgram = createProgram(gl, [translateVs, baseFs]);
	edgeProgram1 = createProgram(gl, [baseVs, edgeFs1]);
	edgeProgram2 = createProgram(gl, [baseVs, edgeFs2]);
	ditherProgram = createProgram(gl, [baseVs, ditherFs]);
	blurProgram = createProgram(gl, [baseVs, blurFs]);

	gl.useProgram(blurProgram);
	gl.uniform1f(gl.getUniformLocation(blurProgram, "step_w"), 1.0/canvas.width);
	gl.uniform1f(gl.getUniformLocation(blurProgram, "step_h"), 1.0/canvas.height);

}

function getCamAsTexture(){
	camTex = createAndSetupTexture(gl);
	// camTex.image = new Image();
	camTex.image = video;
	// camTex.image.src = "4.png"
	gl.bindTexture(gl.TEXTURE_2D, camTex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, camTex.image);
}

function loop(){
	window.requestAnimationFrame(loop);
	if(videoLoaded){
		if(delay < 50){
		    getNewImg();
    	    delay++;

		    // console.log(delay);
		}
	    // if(delay%500 == 0){
	    // 	getNewImg();
	    // }
			gl.useProgram(baseProgram);
		    gl.uniform2f(gl.getUniformLocation(baseProgram, "mouse"), mapMouseX, mapMouseY);

		gl.useProgram(edgeProgram1);
		gl.uniform2f(gl.getUniformLocation(edgeProgram1, "delta"), radius / canvas.width, 0);
		gl.useProgram(edgeProgram2);
		gl.uniform2f(gl.getUniformLocation(edgeProgram2, "delta"), 0, radius / canvas.height);
		radius = document.querySelector('#radius').value;

		
		gl.useProgram(blurProgram);
		// if (checkbox.checked) {
			// gl.uniform1i(gl.getUniformLocation(blurProgram, 'yes'), 1);
		// } else{
			gl.uniform1i(gl.getUniformLocation(blurProgram, 'yes'), 0);
		// }
		
		blurFbo.start();
		fbo.draw(blurProgram);

		fbo.start();
		blurFbo.draw(baseProgram);

		blurFbo.start();
		ditherFbo.draw(ditherProgram);

		edgeFbo1.start();
		edgeFbo2.draw(edgeProgram2);

		edgeFbo2.start();
		edgeFbo1.draw(ditherProgram);

		ditherFbo.start();
		fbo.draw(baseProgram);
		fbo.draw(ditherProgram);

		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		// if(checkbox.checked){
			// fbo.draw(blurProgram);
		// } else{
		fbo.draw(edgeProgram2);

		// }
		// baseTexture.draw(baseProgram, camTex);

		gl.bindTexture(gl.TEXTURE_2D, camTex);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, camTex.image);
	}
}

function getNewImg(){
   //gets a new frame
   // requestAnimationFrame(getNewImg);
   fbo.start();
   	gl.enable(gl.BLEND);
	gl.blendFunc(gl.ONE_MINUS_SRC_COLOR,gl.SRC_COLOR); 
   baseTexture.draw(ditherProgram, camTex);
  	gl.disable(gl.BLEND);

}

window.addEventListener("click", function(){
  getNewImg();
});
function map(value,max,minrange,maxrange) {
    return ((max-value)/(max))*(maxrange-minrange)+minrange;
}
window.addEventListener("mousemove", function(event){
	mouseX = (event.clientX );
    mouseY = (event.clientY );
    mapMouseX = map(mouseX, window.innerWidth, 0.99, 1.01);
    mapMouseY = map(mouseY, window.innerHeight, 0.99,1.01);

});

window.addEventListener('DOMContentLoaded', function(){ 
	navigator.getUserMedia = navigator.getUserMedia || 
							 navigator.webkitGetUserMedia || 
							 navigator.mozGetUserMedia || 
							 navigator.msGetUserMedia || 
							 navigator.oGetUserMedia;
 
    if (navigator.getUserMedia) {       
        navigator.getUserMedia({video: true, audio: false}, handleVideo, videoError);
    }
 
    function handleVideo(stream) {
        var url = window.URL || window.webkitURL;
        video.src = url ? url.createObjectURL(stream) : stream;
		video.play();
        videoLoaded = true;
    }
 
    function videoError(e) {
    	alert("There seems to be something wrong with your webcam :(");
	}
});