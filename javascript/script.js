


function myFunc() {
  var RandomChance = Math.round(Math.random()*100);

  if (RandomChance >= 50){
    document.body.style.backgroundColor = "red";
  else{
    document.body.style.backgroundColor = "blue";
  }
}
