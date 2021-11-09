
$bar = document.querySelector(".bar").onclick = function(e){
  $home = document.querySelector(".nav-box-home").style.display;
  if($home == '' || $home == 'none' ){
    document.querySelector(".nav-box-home").style.display = "block";
  }else{
    document.querySelector(".nav-box-home").style.display = "none";
    console.log("showing");
  }
}

// $bar2 = document.querySelector(".bar2").onclick = function(e){
//     $icons = document.querySelector("#icons").style.display;
//     if($icons == '' || $icons == 'none' ){
//       document.querySelector("#icons").style.display = "block";
//     }else{
//       document.querySelector("#icons").style.display = "none";
//       console.log("showing");
//     }
//   }