//입력 완료 버튼 누르면 중간 목표 입력 창으로 넘어가게
function gotoMiddle() {
  var inputElement = document.getElementById("maingoal");
  var inputValue = inputElement.value;
  localStorage.setItem("maingoal", inputValue);
  window.location.href = "./middleGoal.html";
}
