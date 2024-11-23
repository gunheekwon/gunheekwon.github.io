function POPUP(){document.querySelector(".popup").style.display="flex";}
function POPDOWN(){document.querySelector(".popup").style.display="none";}

document.getElementById("button").addEventListener("click", POPUP());
document.getElementById("close").addEventListener("click", POPDOWN());