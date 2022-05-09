


function myFunc() {
  var RandomChance = Math.round(Math.random()*100);

  if (RandomChance >= 50){
    document.getElementById("test").innerHTML = RandomChance;
  }
}
