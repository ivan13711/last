var oneOpen = false;
function closeAll() {
  var divs = document.querySelector('.accordion div');
  for(var i = 0; i < divs.length; i++){
    divs[i+1].style.height = 0;
  }
}
function toggle(button){
  var innerDiv = button.target.nextElementSibling;
  if (oneOpen) {
    closeAll();
  }

  if (innerDiv.style.height === "0px" || innerDiv.style.height === ""){
  innerDiv.style.height = innerDiv.scrollHeight + "px";
oneOpen = true;
}
  else{
    innerDiv.style.height = "0";
  }

}
var buttons = document.querySelectorAll(".accordion button");
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", toggle);
}
