var colors = ["purple" , "salmon" , "yellow" , "blue"];
function changeColor(){
 var randomIndex= Math.floor((Math.random() * colors.length) + 1) - 1;
 $("body").css("background", colors[randomIndex]);
}
function addColor(){
  var newColors= $("#newColor").val();
  colors.push(newColors);
  $("body").css("background", colors[colors.length -1]);
}
$(document).ready(function(){
    $("#change").click(changeColor);
    $("#add").click(addColor);
});