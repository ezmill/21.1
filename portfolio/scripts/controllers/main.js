function bgSetter(string){
  var bg = document.getElementsByClassName("main-content");
  // console.log(bg);
  bg[0].style.background = "url('images/" + string +"')";
}

// document.onkeyup = function(e){
//   if(e.keyCode == 37){
//     if($('.left a').length > 0){
//       window.location = $('.left a')['0'].href;
//     } else{
//       window.location = 'http://ezra.io/portfolio/#/ezra_io'
//     }
//   }

//   if(e.keyCode == 39){
//     if($('.right a').length > 0){
//       window.location = $('.right a')['0'].href;
//     } else{
//       window.location = 'http://ezra.io/portfolio/#/syrup'
//     }
//   }
// }



$(function() {
    $('.navs').okhover({
    	el: ".main-content"
    	// zIndex: 1000
    });

    $('.navs').click(function(e){
    	e.preventDefault();
    	// var ifr = document.createElement("iframe");
    	// ifr.src = this.href;
    	// ifr.style.position	= "absolute";
    	// ifr.style.top = 0;
    	// ifr.style.left = 0;
    	// ifr.style.width = "100vw";
    	// ifr.style.height = "100vh";
    	// // ifr.style["z-index"] = "10000"; 
    	// $("body").append(ifr);

        window.open(this.href);

    });

    // $(".top-bar a").click(function(){
    // 	$("body").find("iframe").remove();
    // });
}); 
