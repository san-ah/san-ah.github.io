const theme = document.getElementById("theme");
const button = document.getElementById("themeBtn");
let clicked = 0;
button.onclick = function(){
  if(clicked){
    theme.className = "white";
    clicked = 0;
  }else{
    theme.className = "dark";
    clicked = 1;

  }
}

