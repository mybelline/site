var al = prompt(for_name_mek.innerHTML + "---Write down your age", "18");
if(al >= 18){
  
}
else{
  window.location.reload()
}

var al2 = prompt(for_name_erku.innerHTML + "---Write down your age", "18");
if(al2 >= 18){
  
}
else{
  window.location.reload()
}
var tiv = 0;
game.onclick = function(event){
    tiv++;
    if(event.target.className = "btn"){
      if(tiv % 2 != 0){
        center.innerHTML = for_name_mek.innerHTML
        event.target.innerHTML = "X";
        event.target.setAttribute("disabled", "true");
        event.target.style.background = "#000";
        event.target.style.color = "#fff";
      }
    else{
      center.innerHTML = for_name_erku.innerHTML
        event.target.innerHTML = "O";
        event.target.setAttribute("disabled", "true");
        event.target.style.background = "#000";
        event.target.style.color = "#fff";
      }
      haxtox();
    }
  }
  function haxtox(){
    var btn = document.getElementsByClassName("btn");
    if(btn[0].innerHTML == "X" && btn[1].innerHTML == "X" && btn[2].innerHTML == "X" ||
    btn[3].innerHTML == "X" && btn[4].innerHTML == "X" && btn[5].innerHTML == "X" ||
    btn[6].innerHTML == "X" && btn[7].innerHTML == "X" && btn[8].innerHTML == "X" ||
    btn[0].innerHTML == "X" && btn[3].innerHTML == "X" && btn[6].innerHTML == "X" ||
    btn[1].innerHTML == "X" && btn[4].innerHTML == "X" && btn[7].innerHTML == "X" ||
    btn[2].innerHTML == "X" && btn[5].innerHTML == "X" && btn[8].innerHTML == "X" ||
    btn[0].innerHTML == "X" && btn[4].innerHTML == "X" && btn[8].innerHTML == "X" ||
    btn[0].innerHTML == "X" && btn[1].innerHTML == "X" && btn[2].innerHTML == "X" ||
    btn[2].innerHTML == "X" && btn[4].innerHTML == "X" && btn[6].innerHTML == "X"
    ){
  winner.innerHTML = "Winner"+ "" + "" + for_name_mek.innerHTML
  for(var i = 0; i < btn.length;i++){
    btn[i].setAttribute("disabled", "true");
  }
    }
    if(btn[0].innerHTML == "O" && btn[1].innerHTML == "O" && btn[2].innerHTML == "O" ||
    btn[3].innerHTML == "O" && btn[4].innerHTML == "O" && btn[5].innerHTML == "O" ||
    btn[6].innerHTML == "O" && btn[7].innerHTML == "O" && btn[8].innerHTML == "O" ||
    btn[0].innerHTML == "O" && btn[3].innerHTML == "O" && btn[6].innerHTML == "O" ||
    btn[1].innerHTML == "O" && btn[4].innerHTML == "O" && btn[7].innerHTML == "O" ||
    btn[2].innerHTML == "O" && btn[5].innerHTML == "O" && btn[8].innerHTML == "O" ||
    btn[0].innerHTML == "O" && btn[4].innerHTML == "O" && btn[8].innerHTML == "O" ||
    btn[0].innerHTML == "O" && btn[1].innerHTML == "O" && btn[2].innerHTML == "O" ||
    btn[2].innerHTML == "O" && btn[4].innerHTML == "O" && btn[6].innerHTML == "O"
    ){
  winner.innerHTML = "Winner"+ "" + "" + for_name_erku.innerHTML
  for(var i = 0; i < btn.length;i++){
    btn[i].setAttribute("disabled", "true");
  }
    }
  }
  function playagain(){
    window.location.reload();
  }