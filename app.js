

function menuNone(){
  document.querySelector('.menu').style.display = "none";
}
menuNone();

 document.querySelector('.DropDown').addEventListener("click", function() {
  document.querySelector('.menuFallow1').style.display = "block";
  document.querySelector('.menuFallow2').style.display = "block";
  document.querySelector('.menu').style.display = "block";
  document.querySelector('.DropDown').style.display = "none";
  document.querySelector('.PushUp').style.display = "block";
  document.body.style.overflow = "hidden";

});

document.querySelector('.PushUp').addEventListener("click", function() {
    document.querySelector('.menu').style.display = "none";
    document.querySelector('.menuFallow2').style.display = "none";
    document.querySelector('.menuFallow1').style.display = "none";
    document.querySelector('.DropDown').style.display = "block";
    document.querySelector('.PushUp').style.display = "none";
    document.body.style.overflow = "visible";

  
  });