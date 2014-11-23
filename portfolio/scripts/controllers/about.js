'use strict';

/**
 * @ngdoc function
 * @name portfolio2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolio2App
 */


var gl;
angular.module('portfolio2App')
  .controller('AboutCtrl', function ($scope) {
  	var cBB, canvas, prevFbo, diffFbo, feedbackFbo, convolveFbo;
	var baseProgram, diffProgram, convolveProgram;
	var baseVs, translateVs, baseFs, diffFs, convolveFs;
	var camTex;
	var videoLoaded = false;
	var mouseX, mouseY;
	var mapMouseX = 1.01;
	var mapMouseY = 1.01;
	var mapMouseX2 = 1.0;
	var mapMouseY2 = 1.0;
	var interpMode = true;
	var video=document.createElement('video');
  	$scope.initWebGL = function(){
  		canvas = document.getElementById("canvas");
  		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
  		gl = getWebGLContext(canvas);
  	}
  	$scope.initFbosAndShaders = function(){
		cBB = new pxBB();
		prevFbo = new pxFbo();
		diffFbo = new pxFbo();
		feedbackFbo = new pxFbo();
		convolveFbo = new pxFbo();

		prevFbo.allocate(window.innerWidth, window.innerHeight, true);
		diffFbo.allocate(window.innerWidth, window.innerHeight, true);
		feedbackFbo.allocate(window.innerWidth, window.innerHeight, true);
		convolveFbo.allocate(window.innerWidth, window.innerHeight, true);

		baseVs = createShaderFromScriptElement(gl, "baseVs");
		translateVs = createShaderFromScriptElement(gl, "translateVs");

		baseFs = createShaderFromScriptElement(gl, "baseFs");
		diffFs = createShaderFromScriptElement(gl, "diffFs");
		convolveFs = createShaderFromScriptElement(gl, "convolveFs");

		baseProgram = createProgram(gl, [baseVs, baseFs]);
		diffProgram = createProgram(gl, [translateVs, diffFs]);
		convolveProgram = createProgram(gl, [baseVs, convolveFs]);

		gl.useProgram(convolveProgram);
		var step_w = gl.getUniformLocation(convolveProgram,"step_w");
		gl.uniform1f(step_w,1.0/canvas.width);
		var step_h = gl.getUniformLocation(convolveProgram,"step_h");
		gl.uniform1f(step_h, 1.0/canvas.height);
		var res = gl.getUniformLocation(convolveProgram,"step_h");
		gl.uniform2f(res, canvas.width, canvas.height);
		var k = gl.getUniformLocation(convolveProgram,"kernel");
		gl.uniform1fv(k, [
		   -5, -5, -5,
		   -5, 39, -5,
		   -5, -5, -5
		]);
		var k2 = gl.getUniformLocation(convolveProgram,"kernel2");
		gl.uniform1fv(k2, [       
			0.08, 0.08, 0.0,
			0.08, 0.0, 0.0,
			0.0, 0.00, -0.241
		]);
		var k3 = gl.getUniformLocation(convolveProgram,"kernel3");
		gl.uniform1fv(k3, [
			-0.241,  0.0, 0.00,
			 0.0, 0.0,0.08,
			 0.0, 0.08, 0.08
		]);
  	}
  	$scope.getCamAsTexture = function(){
  		camTex = createAndSetupTexture(gl);
		camTex.image = video;
		gl.bindTexture(gl.TEXTURE_2D, camTex);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, camTex.image);
  	}
  	$scope.loop = function(){
  		window.requestAnimationFrame($scope.loop);

		if(videoLoaded){

			diffFbo.start();
			gl.useProgram(diffProgram);
			gl.uniform1f(gl.getUniformLocation(diffProgram, "u_mouseX"), mapMouseX);
			gl.uniform1f(gl.getUniformLocation(diffProgram, "u_mouseY"), mapMouseY);
			gl.useProgram(convolveProgram);
			gl.uniform2f(gl.getUniformLocation(diffProgram, "mouse"), mapMouseX2, mapMouseY2);
			feedbackFbo.draw3(diffProgram, camTex, prevFbo.texture);


			feedbackFbo.start();
			diffFbo.draw(baseProgram);

			prevFbo.start();
			cBB.draw(baseProgram, camTex);

			convolveFbo.start();
			feedbackFbo.draw(baseProgram);
			// gl.enable(gl.BLEND);
			// gl.blendFunc(gl.ONE_MINUS_DST_COLOR,gl.DST_COLOR); 
			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
			feedbackFbo.draw(convolveProgram);

			gl.bindTexture(gl.TEXTURE_2D, camTex);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, camTex.image);

		}//end of videoLoaded 
  	}
  	$scope.getNewImg = function(){
  		interpMode = !interpMode;
		prevFbo.allocate(window.innerWidth, window.innerHeight, interpMode);
		diffFbo.allocate(window.innerWidth, window.innerHeight, interpMode);
		feedbackFbo.allocate(window.innerWidth, window.innerHeight, interpMode);
		convolveFbo.allocate(window.innerWidth, window.innerHeight, interpMode);
  	}
  	$scope.map = function(value,max,minrange,maxrange){
  		return ((max-value)/(max))*(maxrange-minrange)+minrange;
  	}
  	$scope.handleVideo = function(stream){
  		var url = window.URL || window.webkitURL;
        video.src = url ? url.createObjectURL(stream) : stream;
        video.play();
        //video.src = window.URL.createObjectURL(stream);
        videoLoaded = true;
  	}
  	$scope.videoError = function(){
  		alert("There seems to be something wrong with your webcam :(");
  	}
  	$scope.onDocumentMouseMove = function(){
  		mouseX = (event.clientX );
	    mouseY = (event.clientY );

	    mapMouseX = $scope.map(mouseX, window.innerWidth, 1.09,0.99);
	    mapMouseY = $scope.map(mouseY, window.innerHeight, 1.09,0.99);
	    mapMouseX2 = $scope.map(mouseX, window.innerWidth, 0.001,0.01);
	    mapMouseY2 = $scope.map(mouseY, window.innerHeight, 0.001,0.01);
  	}
  	$scope.onDocumentMouseDown = function(){
  		$scope.getNewImg();
  	}

    $scope.initWebGL();
    $scope.initFbosAndShaders();
    $scope.getCamAsTexture();
    $scope.loop();
	document.addEventListener('mousemove', $scope.onDocumentMouseMove, false);
	document.addEventListener('mousedown', $scope.onDocumentMouseDown, false);
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
    if (navigator.getUserMedia) {       
        navigator.getUserMedia({video: true, audio: false}, $scope.handleVideo, $scope.videoError);
    }

  });
  