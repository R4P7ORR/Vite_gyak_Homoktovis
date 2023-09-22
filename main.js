import "bootstrap/dist/css/bootstrap.css";
import "./style.css"


function init(){
    let generate = document.getElementById("couponGen").textContent;
    let random = Math.floor(Math.random() * generate);
    document.getElementById("couponGen").textContent = random;
}



document.addEventListener("DOMContentLoaded", init);