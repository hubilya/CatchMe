colors = new Array("yellow","red","orange","green","blue","brown","purple","gray","yellow","aqua","black","pink","white","blue","red")

colorIndex = 0

function changeColor() {
 document.bgColor = colors[colorIndex]
 colorIndex = (colorIndex + 1) % colors.length
}

function startColorChange() {
 setInterval("changeColor()",400)
}
function load() {
        alert("Click when YELLOW appears!");
      }
window.onload = load()
window.onload = startColorChange


var button = document.getElementById('CLOCK');
var x = 0;

button.addEventListener('click', function() {


    if (document.bgColor == "yellow") {
        alert("WEELL DOOOOOOOONE!")
    }
    else{
        alert("MISSED((( TRY AGAIN!")
    }

});