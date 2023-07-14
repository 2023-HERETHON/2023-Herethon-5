//세부목표 보이게
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

//png 저장 페이지로
function save() {
  window.location.href = "./here_png.html";
}

//세부목표로 이동
function gotoDetail() {
  var inputElement1 = document.getElementById("box1");
  var inputValue1 = inputElement1.value;
  localStorage.setItem("box1", inputValue1);

  var inputElement2 = document.getElementById("box2");
  var inputValue2 = inputElement2.value;
  localStorage.setItem("box2", inputValue2);

  var inputElement3 = document.getElementById("box3");
  var inputValue3 = inputElement3.value;
  localStorage.setItem("box3", inputValue3);

  var inputElement4 = document.getElementById("box4");
  var inputValue4 = inputElement4.value;
  localStorage.setItem("box4", inputValue4);

  var inputElement5 = document.getElementById("box5");
  var inputValue5 = inputElement5.value;
  localStorage.setItem("box5", inputValue5);

  var inputElement6 = document.getElementById("box6");
  var inputValue6 = inputElement6.value;
  localStorage.setItem("box6", inputValue6);

  var inputElement7 = document.getElementById("box7");
  var inputValue7 = inputElement7.value;
  localStorage.setItem("box7", inputValue7);

  var inputElement8 = document.getElementById("box8");
  var inputValue8 = inputElement8.value;
  localStorage.setItem("box8", inputValue8);

  window.location.href = "./detailGoal.html";
}
