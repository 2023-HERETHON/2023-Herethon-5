//
window.onload = function () {
  var middlegoalValue1 = localStorage.getItem("middlegoal1");
  var box1 = document.getElementById("box1");
  box1.value = middlegoalValue1;

  var middlegoalValue2 = localStorage.getItem("middlegoal2");
  var box2 = document.getElementById("box2");
  box2.value = middlegoalValue2;

  var middlegoalValue3 = localStorage.getItem("middlegoal3");
  var box3 = document.getElementById("box3");
  box3.value = middlegoalValue3;

  var middlegoalValue4 = localStorage.getItem("middlegoal4");
  var box4 = document.getElementById("box4");
  box4.value = middlegoalValue4;

  var middlegoalValue5 = localStorage.getItem("middlegoal5");
  var box5 = document.getElementById("box5");
  box5.value = middlegoalValue5;

  var middlegoalValue6 = localStorage.getItem("middlegoal6");
  var box6 = document.getElementById("box6");
  box6.value = middlegoalValue6;

  var middlegoalValue7 = localStorage.getItem("middlegoal7");
  var box7 = document.getElementById("box7");
  box7.value = middlegoalValue7;

  var middlegoalValue8 = localStorage.getItem("middlegoal8");
  var box8 = document.getElementById("box8");
  box8.value = middlegoalValue8;

  var maingoalValue = localStorage.getItem("maingoalContainer");
  var mainbox = document.getElementById("mainbox");
  mainbox.value = maingoalValue;
};
