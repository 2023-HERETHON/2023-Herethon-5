function addComment() {
  // Get the comment input element
  var commentInput = document.getElementById("cmt");

  // Get the comment value
  var comment = commentInput.value;

  if (comment !== "") {
    // Create a new comment element
    var newComment = document.createElement("div");
    newComment.classList.add("comment");

    // Create a name element
    var nameElement = document.createElement("span");
    nameElement.classList.add("name");
    nameElement.textContent = "멋사11기";

    // Create a comment content element
    var commentContent = document.createElement("span");
    commentContent.classList.add("comment-content");
    commentContent.textContent = comment;

    var hrElement = document.createElement("hr");

    // Append name, comment content, and hr element to the comment element
    newComment.appendChild(nameElement);
    newComment.appendChild(commentContent);
    newComment.appendChild(hrElement);

    // Get the comment container element
    var commentContainer = document.querySelector(".commentContainer");

    // Append the comment element to the comment container
    commentContainer.appendChild(newComment);

    // Clear the comment input
    commentInput.value = "";
  }
}
