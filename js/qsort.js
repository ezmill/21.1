function setImage(e){var t=document.getElementById("upload");t.style.display="none";var n=document.getElementsByTagName("label");n[0].style.display="none";canvas=document.createElement("canvas");var r=document.createElement("a");r.href="#";r.id="share";r.className+="btn btn-block btn-primary btn-outlined";r.innerHTML="share";var i=document.getElementById("params");i.appendChild(r);document.body.appendChild(canvas);canvas.width=window.innerWidth;canvas.height=window.innerHeight;r.addEventListener("click",function(){imgurUpload();canvas.style.top-="50px";r.style.display="none"});data=canvas.toDataURL();img=new Image;img.src=e;var s=canvas.getContext("2d");devicePixelRatio=window.devicePixelRatio||1,backingStoreRatio=s.webkitBackingStorePixelRatio||s.mozBackingStorePixelRatio||s.msBackingStorePixelRatio||s.oBackingStorePixelRatio||s.backingStorePixelRatio||1,ratio=devicePixelRatio/backingStoreRatio;if(devicePixelRatio!==backingStoreRatio){var o=canvas.width;var u=canvas.height;canvas.width=o*ratio;canvas.height=u*ratio;canvas.style.width=o+"px";canvas.style.height=u+"px";s.scale(ratio,ratio)}img.onload=function(){function i(){var e=s.getImageData(0,0,canvas.width,canvas.height);var t=e.data;for(var o=0;o<r;o++){for(var u=0;u<n;u++){var a=(o*n+u)*4;var f=a;var l=a+1;var c=a+2;if(t[a+4]>t[a]){swap(t,f,f-4*n-4,l,l-4*n-4,c,c-4*n-4)}}}s.putImageData(e,0,0);window.requestAnimationFrame(i)}var e=new MegaPixImage(img);if(check){e.render(canvas,{maxWidth:canvas.width,maxHeight:canvas.height,orientation:6})}else{e.render(canvas,{maxWidth:canvas.width,maxHeight:canvas.height})}var t=s.getImageData(0,0,canvas.width,canvas.height);var n=canvas.width,r=canvas.height;s.putImageData(t,0,0);window.requestAnimationFrame(i)}}function swap(e,t,n,r,i,s,o){var u=e[t];e[t]=e[n];e[n]=u;var a=e[r];e[r]=e[i];e[i]=a;var f=e[s];e[s]=e[o];e[o]=f}new Uploader("html",setImage);new Uploader("#upload",setImage);window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var mobilecheck=function(){var e=false;(function(t){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=true})(navigator.userAgent||navigator.vendor||window.opera);return e};var check=mobilecheck();console.log(check);$("#share").click(function(){console.log("clicked");imgurUpload()})