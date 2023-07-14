//here에서 입력해서 넘어온
window.onload = function () {
  var box1value = localStorage.getItem("box1");
  var middlegoal1 = document.getElementById("middlegoal");
  middlegoal1.value = box1value;

  var box2value = localStorage.getItem("box2");
  var middlegoal2 = document.getElementById("middlegoal");
  middlegoal2.value = box2value;

  var box3value = localStorage.getItem("box3");
  var middlegoal3 = document.getElementById("middlegoal");
  middlegoal3.value = box3value;

  var box4value = localStorage.getItem("box4");
  var middlegoal4 = document.getElementById("middlegoal");
  middlegoal4.value = box4value;

  var box5value = localStorage.getItem("box5");
  var middlegoal5 = document.getElementById("middlegoal");
  middlegoal5.value = box5value;

  var box6value = localStorage.getItem("box6");
  var middlegoal6 = document.getElementById("middlegoal");
  middlegoal6.value = box6value;

  var box7value = localStorage.getItem("box7");
  var middlegoal7 = document.getElementById("middlegoal");
  middlegoal7.value = box7value;

  var box8value = localStorage.getItem("box8");
  var middlegoal8 = document.getElementById("middlegoal");
  middlegoal8.value = box8value;
};
