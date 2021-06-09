/* Background Color Of Color Choices */

let red = document.getElementById("red").style.backgroundColor = "#ca3d22";
let black = document.getElementById("black").style.backgroundColor = "#23211f";
let blue = document.getElementById("blue").style.backgroundColor = "#565681";
let pink = document.getElementById("pink").style.backgroundColor = "#e9c7be";
let purple = document.getElementById("purple").style.backgroundColor = "#8a5362";

/* To Display Current Time On Watches */

function display_c(){
  var refresh=1000; 
  mytime=setTimeout('display_ct()',refresh)
}

function display_ct(){
  var x = new Date()
  var x1; 
  x1 = x.getHours() + ":" +  x.getMinutes() + ":" +  x.getSeconds();
  document.getElementById('time').innerHTML = x1;
  display_c();
}

/* To Change URL Of The Smart Watches Image */

function red_color(){
  document.getElementsByTagName("img")[1].src = "https://i.imgur.com/PTgQlim.png";
}

function purple_color(){
  document.getElementsByTagName("img")[1].src = "https://i.imgur.com/xSIK4M8.png";
}

function pink_color(){
  document.getElementsByTagName("img")[1].src = "https://i.imgur.com/Zygu7I3.png";
}

function blue_color(){
  document.getElementsByTagName("img")[1].src = "https://i.imgur.com/Mplj1YR.png";
}

function black_color(){
  document.getElementsByTagName("img")[1].src = "https://i.imgur.com/iOeUBV7.png";
}