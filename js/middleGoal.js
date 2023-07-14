//mainGoal에서 입력해서 넘어온 메인 목표
window.onload = function () {
  var maingoalValue = localStorage.getItem("maingoal");
  var maingoalContainer = document.getElementById("maingoalContainer");
  maingoalContainer.value = maingoalValue;
};

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
