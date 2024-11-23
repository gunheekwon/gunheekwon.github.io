function POPUP(){document.querySelector(".popup").style.display="flex";}
function POPDOWN(){document.querySelector(".popup").style.display="none";}

document.getElementById("button").addEventListener("click", POPUP());
document.querySelector(".close").addEventListener("click", POPDOWN());