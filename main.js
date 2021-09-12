
var last_posX, last_posY;

canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

mouseEvent="";
var color,width,posX,posY;  
canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);
canvas.addEventListener("touchstart",my_touchstart);
canvas.addEventListener("touchmove",my_touchmove);
function my_mousedown(e)
{
    color=document.getElementById("txtcol").value;
    width=document.getElementById("txtwid").value;
    mouseEvent="mousedown";
   }
   function my_mouseup(e){
     mouseEvent="mouseup";
   }
   function my_mouseleave(e){
     mouseEvent="mouseleave";
   }
   function my_mousemove(e){
     
     posX=e.clientX-canvas.offsetLeft;
     posY=e.clientY-canvas.offsetTop;
     
     if(mouseEvent=="mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;
       ctx.moveTo(last_posX,last_posY);
       ctx.lineTo(posX,posY);
       ctx.stroke(); 
     }
     last_posX=posX;
    last_posY=posY; 
     mouseEvent="mousemove";
   }
   function my_touchstart(e){
    mouseEvent="touchstart";
    last_posX=posX;
    last_posY=posY;  
  }
  function my_touchmove(e){
    mouseEvent="touchmove";
    posX=e.touches[0].clientX-canvas.offsetLeft;
    posY=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_posX,last_posY);
    ctx.lineTo(posX,posY);
    ctx.stroke();
    last_posX=posX;
    last_posY=posY;  
  }