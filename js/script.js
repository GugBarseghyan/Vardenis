let menu = document.querySelector(".menu");
let bars = document.querySelector(".mobileMenu");
let barNum = 0;
function MenuViewer(){
    if(barNum == 0){
        menu.style.display = "flex";
        barNum++
    }else{
        menu.style.display = "none";
        barNum--
    }
}

let img = document.querySelector("#picture");
let div = document.querySelector(".openIMG");
let imgValues = ["../img/logo.png", "../img/center.jpg", "../img/Ekexeci.jpg", "../img/future.jfif", "../img/hamaynqapetaran.jpg", 
"../img/Khachkarer.jpg", "../img/mountain 1.jpg", "../img/mountain 2.jpg", "../img/mountain 3.jpg", "../img/mountain 4.jpg"];
function ClosePicture(){
    div.style.display = "none";
}
function picture1(){
    div.style.display = "flex";
    // img.src = "../img/logo.png";
}
function picture2(){
    div.style.display = "flex";
    img.src = "../img/center.jpg";
}