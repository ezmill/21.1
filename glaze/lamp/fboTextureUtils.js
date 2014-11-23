
/*
function resizeCanvas(){
  var width = gl.canvas.width;
  var height = gl.canvas.height;
  if(canvas.width != width ||canvas.height != height){
     canvas.width = width;
     canvas.height = height;
     console.log(width);
  }

}
*/

function createAndSetupTexture(gl){
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  return texture;
}


function pxFbo(){
  this.start = function(pgm){ 
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
  };
  
  this.allocate = function(w, h, mode, pixels){
    
    //this.mode = true;

    this.fbo = gl.createFramebuffer();
    this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if(mode == true){
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    }
    else if(mode == false){
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.FLOAT, new Float32Array(pixels));
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
  };

  this.draw = function(pgm){
    this.bb.draw(pgm, this.texture);
  }

  this.draw2 = function(pgm, texture2){
    this.bb.draw2(pgm, this.texture, texture2);
  }

  this.draw3 = function(pgm, texture2, texture3){
    this.bb.draw3(pgm, this.texture, texture2, texture3);
  }

  this.drawLoop = function(pgm, textures, numTextures){
    this.bb.drawLoop(pgm, this.texture, numTextures);
  }

  this.fbo;
  this.texture;
  this.bb = new pxBB(gl);
}


function initBuffer(buf,dataset){
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dataset), gl.STATIC_DRAW);
}



function pxBB(){
  this.vert = gl.createBuffer();
  initBuffer(this.vert, [
    
    /*
    -1.0,1.0,
    0.0,-1.0,
    -1.0,0.0,
    1.0,1.0,
    0.0,1.0,
    -1.0,0.0

    -3, -1,
     2, -1,
    -3,  4,
    -3,  4,
     2, -1,
     2,  4,
   */ 

    -1,-1, 0,0,  
    1,-1, 1,0,
    -1,1, 0,1,
    1,1, 1,1

    ]);

  this.tex = gl.createBuffer();
  initBuffer(this.tex,[
    
    0,1,
    0,0,
    1,1,
    1,0
    
        

    ]);

  this.color = gl.createBuffer();
  initBuffer(this.color, [
    1,1,1,1,
    1,1,1,1,
    1,1,1,1,
    1,1,1,1
    ]);

  pxBB.prototype.predraw = function(pgm){
    //set up vertex attributes
    gl.useProgram(pgm);
    pgm.vertexPosAttrib = gl.getAttribLocation(pgm, 'pos');
    gl.enableVertexAttribArray(pgm.vertexPosAttrib);

    pgm.vertexColorAttrib = gl.getAttribLocation(pgm, 'color');
    gl.enableVertexAttribArray(pgm.vertexColorAttrib);

    pgm.vertexTexAttrib = gl.getAttribLocation(pgm, 'texcoord');
    gl.enableVertexAttribArray(pgm.vertexTexAttrib);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.color);
    gl.vertexAttribPointer(pgm.vertexColorAttrib, 4, gl.FLOAT, false, 0,0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vert);
    gl.vertexAttribPointer(pgm.vertexPosAttrib, 2, gl.FLOAT, false, 16,0);

    //gl.bindBuffer(gl.ARRAY_BUFFER, this.tex);
    gl.vertexAttribPointer(pgm.vertexTexAttrib, 2, gl.FLOAT, false, 16,8);

  }

  pxBB.prototype.draw = function(pgm, texture){
    this.predraw(pgm);
    gl.uniform1i(gl.getUniformLocation(pgm,"u_image"), 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

    pxBB.prototype.draw2 = function(pgm, texture1, texture2){
    this.predraw(pgm);
    gl.uniform1i(gl.getUniformLocation(pgm,"u_image"), 0);
    gl.uniform1i(gl.getUniformLocation(pgm,"u_image2"), 1);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  }

    pxBB.prototype.draw3 = function(pgm, texture1, texture2, texture3){
    this.predraw(pgm);
    gl.uniform1i(gl.getUniformLocation(pgm,"u_image"), 0);
    gl.uniform1i(gl.getUniformLocation(pgm,"u_image2"), 1);
    gl.uniform1i(gl.getUniformLocation(pgm,"u_image3"), 2);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, texture3);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  }

 pxBB.prototype.drawLoop = function(pgm, textures, numTextures){
  this.predraw(pgm);
  for(var i = 0; i<numTextures; i++){
    gl.uniform1i(gl.getUniformLocation(pgm, "u_image"), i);
    gl.activeTexture(gl.TEXTURE0 + i);
    gl.bindTexture(gl.TEXTURE_2D, textures[i]);
   
  }
   gl.drawArrays(gl.TRIANGLE_STRIP, 0 , 4);
 }



}