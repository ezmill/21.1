
var clientId = 'a2d315bf8c5119a';
var $imgurOauth = $('#share');

// $imgurOauth.attr('href', $imgurOauth.attr('href') + '&client_id=' + clientId);

var token = extractToken(document.location.hash);

        function extractToken(hash) {
            var match = hash.match(/access_token=(\w+)/);
            return !!match && match[1];
        }


var remoteCouch = "https://ezmill:mycoolpassword@ezmill.cloudant.com/ok/"
// var db = new PouchDB('please_accept');
var db = new PouchDB(remoteCouch);
var appender = document.getElementById("params")


db.info(function(err, info) {
  db.changes({
    since: info.update_seq,
    live: false
  });
});
var h1 = document.createElement("h1");
h1.className += "title";
h1.innerHTML = "loading..."
appender.appendChild(h1);
h1.style.display = "none";
$("#share").click(function(){
      h1.style.display = "block";
      imgurUpload();
})


  function imgurUpload() {
    // $imgurUpload.show();
    // $group.hide();
    var data = canvas.toDataURL();
    var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
    var auth;
     // if (token) authorization = 'Bearer ' + token;
       authorization = 'Client-ID ' + clientId;

    $.ajax({
      url: 'https://api.imgur.com/3/image',
      method: 'POST',
      headers: {
        Authorization: authorization,
        Accept: 'application/json'
      },
      data: {
        image: encodedPng,
        type: 'base64'
      },
        success: function(result){
          h1.style.display = "none";
          console.log(result.data.link);
          var dangus = document.createElement("a");
          dangus.className += "btn half btn-positive btn-outlined";
          dangus.innerHTML = "Link to Image";
          dangus.href = result.data.link;
          var dingus = document.createElement("a");
          dingus.className += "btn half btn-negative btn-outlined";
          dingus.innerHTML = "Sort Stream";
          dingus.href = "http://ezra.io/social.html";

          if(document.getElementById("range-div")){
            appender.insertBefore(dangus, document.getElementById("range-div"));
            appender.insertBefore(dingus, document.getElementById("range-div"));

          } else{
            appender.innerHTML="";
            appender.appendChild(dangus); 
            appender.appendChild(dingus);
          }
          

          var link = {
            _id: new Date().toISOString(),
            link: result.data.link
          };
          db.put(link, function callback(err, result) {
            if (!err) {
              console.log('Successfully added a link!');
              // sync();
            }
          });
        }
    });
  }


function showLinks() {
  // db.allDocs({include_docs: true, descending: true}, function(err, doc) {
  //   //redrawLinksUI(doc.rows);
  // });
//insert modal code here
}

 function redrawLinksUI(links) {
    var ul = document.getElementById('link-list');
    ul.innerHTML = '';
    links.forEach(function(link) {
      ul.appendChild(createLinkListItem(link.doc));
    });
  }
function createLinkListItem(link, e){
     var li = document.createElement('li');
    li.innerHTML =
    link.link;
    return li;
}
// if (remoteCouch) {
//     sync();
// }

function sync() {
    var opts = {live: false,complete: console.log("sync error")};
    db.replicate.to(remoteCouch, opts, function(err,res){
      if(err){
        console.log(err);
      }
    });
    // db.replicate.from(remoteCouch, opts);
}

// var push= function(){
//     PouchDB.replicate('test', 'https://ezmill:bears54@ezmill.iriscouch.com:6984/links', function(err,resp){
//               if(err){
//                                     console.log("FUCK");
//             console.log(err)  
//                         } else{
//                           console.log("cool");
//                         }
//     })
// };

// var pull= function(){
//     var filter= function(doc){
//         return doc.pullAble;
//     }
//     PouchDB.replicate('https://ezmill:bears54@ezmill.iriscouch.com:6984/links', 'test',
//                     function(err,resp){
//                         if(err){
//                             alert("Pull failed!")
//                         }
//                     })
// };



