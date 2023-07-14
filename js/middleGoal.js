//mainGoal에서 입력해서 넘어온 메인 목표
window.onload = function () {
  var maingoalValue = localStorage.getItem("maingoal");
  var maingoalContainer = document.getElementById("maingoalContainer");
  maingoalContainer.value = maingoalValue;
};

//메인 목표 수정하기
function editMaingoal() {
  var maingoalContainer = document.getElementById("maingoalContainer");
  var editedMaingoal = prompt(
    "새로운 목표를 입력하세요 : ",
    maingoalContainer.value
  );

  if (editedMaingoal !== null) {
    maingoalContainer.value = editedMaingoal;
    localStorage.setItem("maingoal", editedMaingoal);
  }
}

window.onload = function () {
  var maingoalValue = localStorage.getItem("maingoal");
  var maingoalContainer = document.getElementById("maingoalContainer");
  maingoalContainer.value = maingoalValue;

  maingoalContainer.addEventListener("input", function () {
    localStorage.setItem("maingoal", maingoalContainer.value);
  });
};

//here로 이동
function gotoHere() {
  var inputElement1 = document.getElementById("middlegoal1").value;
  localStorage.setItem("middlegoal1", inputElement1);

  var inputElement2 = document.getElementById("middlegoal2").value;
  localStorage.setItem("middlegoal2", inputElement2);

  var inputElement3 = document.getElementById("middlegoal3").value;
  localStorage.setItem("middlegoal3", inputElement3);

  var inputElement4 = document.getElementById("middlegoal4").value;
  localStorage.setItem("middlegoal4", inputElement4);

  var inputElement5 = document.getElementById("middlegoal5").value;
  localStorage.setItem("middlegoal5", inputElement5);

  var inputElement6 = document.getElementById("middlegoal6").value;
  localStorage.setItem("middlegoal6", inputElement6);

  var inputElement7 = document.getElementById("middlegoal7").value;
  localStorage.setItem("middlegoal7", inputElement7);

  var inputElement8 = document.getElementById("middlegoal8").value;
  localStorage.setItem("middlegoal8", inputElement8);

  var inputElementmain = document.getElementById("maingoalContainer").value;
  localStorage.setItem("maingoalContainer", inputElementmain);
  window.location.href = "./here.html";
}

//오타니의 계획표 예시 보러가기기
function gotoPlayer() {
  window.location.href = "./example.html";
}
