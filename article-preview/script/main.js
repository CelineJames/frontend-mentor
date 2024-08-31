let shareButton = document.querySelector(".icon-div");

function myfunc() {
  let share = document.querySelector(".share");
  share.classList.toggle("hidden");
}

shareButton.addEventListener("click", myfunc);
