var clickcall = document.getElementById("welcometext");
clickcall.onclick = function(){
  document.getElementById("welcometext").innerText="Have a Good Time!";
}

var clickcallaction = document.getElementById("call");
clickcallaction.onclick = function(){
  document.getElementById("boxhide").style.display="block";
}


function openNav(){
  document.getElementById("myside").style.width = "40%";
}

function closeNav(){
  document.getElementById("myside").style.width = "0px";
}

