var start = new Date().getTime();
function appearAfterDelay()
{
 function makeShapeAppear()
 {
  var randomColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
  document.getElementById("shape").style.backgroundColor = randomColor;
 
  
  var t = Math.random()*400;
  var l = Math.random()*400;
  var w = (Math.random()+0.5)*300;
  
  document.getElementById("shape").style.width = w + "px";
  document.getElementById("shape").style.height = w + "px";
  document.getElementById("shape").style.top = t + "px";
  document.getElementById("shape").style.left = l + "px";
  if(Math.random() > 0.5)
  {
   document.getElementById("shape").style.borderRadius = "50%";
  }
  else
  {
   document.getElementById("shape").style.borderRadius = "0";
  }
 
  document.getElementById("shape").style.display = 'block';
  start = new Date().getTime();
 }
 setTimeout(makeShapeAppear,Math.random()*2000);
}

appearAfterDelay();

 document.getElementById("shape").onclick = function()
 {
     document.getElementById("shape").style.display = 'none';
     var end = new Date().getTime();
   
     var time = (end - start)/1000;
     document.getElementById("displayTime").innerHTML= time + " seconds";
     appearAfterDelay();
 }